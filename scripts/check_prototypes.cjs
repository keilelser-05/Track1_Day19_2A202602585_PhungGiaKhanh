const {chromium} = require('playwright');
const assert = require('node:assert/strict');
const path = require('node:path');
const fs = require('node:fs');
const {pathToFileURL} = require('node:url');

(async()=>{
  let config={headless:true};
  if(process.env.LAB_CHROMIUM_PACKAGE){
    const imported=require(process.env.LAB_CHROMIUM_PACKAGE);
    const pkg=imported.default||imported;
    config={headless:true,args:pkg.args.filter(arg=>arg!=='--single-process'),executablePath:await pkg.executablePath()};
  }
  const browser=await chromium.launch(config);
  const rows=[];const errors=[];
  const root=path.resolve(__dirname,'..');
  async function page(option){const p=await browser.newPage({viewport:{width:1440,height:1100}});if(option==='c')await p.clock.install();p.on('pageerror',e=>errors.push(e.message));p.on('request',r=>{if(/^https?:/.test(r.url()))errors.push('external request '+r.url());});await p.goto(pathToFileURL(path.join(root,`options/option-${option}.html`)).href);return p;}
  const click=(p,a)=>p.locator(`[data-action="${a}"]`).first().click();
  async function check(name,fn){await fn();rows.push({check:name,result:'PASS'});console.log('PASS '+name);}
  try{
    await check('A: validation, edit, preview, cancel, send, withdraw, coach and quiz',async()=>{
      const p=await page('a');await click(p,'form');await click(p,'preview');assert.match(await p.locator('[role=status]').innerText(),/mô tả/);
      await p.locator('#question').fill('Truy xuất khác sinh câu trả lời thế nào?');await click(p,'preview');await p.locator('#draft').fill('Xin làm rõ bước truy xuất và sinh.');assert.equal(await p.locator('#previewDraft').innerText(),'Xin làm rõ bước truy xuất và sinh.');assert.equal(await p.locator('#previewIdentity').innerText(),'Không kèm tên');
      await p.locator('#named').check();await click(p,'send');assert.match(await p.locator('[role=status]').innerText(),/tên giả lập/);await p.locator('#name').fill('Học viên 01');await p.locator('#recipient').selectOption('TA — hỗ trợ bài tập');assert.match(await p.locator('#previewRecipient').innerText(),/^TA/);
      await click(p,'cancel');assert.equal(await p.locator('#question').inputValue(),'Truy xuất khác sinh câu trả lời thế nào?');await click(p,'preview');await click(p,'send');assert.match(await p.locator('.card').last().innerText(),/Yêu cầu đã gửi/);await click(p,'withdraw');assert.match(await p.locator('.card').last().innerText(),/Đã thu hồi/);
      await click(p,'form');await click(p,'preview');await click(p,'send');await click(p,'coach');assert.equal(await p.locator('[data-action=withdraw]').count(),0);await p.locator('input[name=quiz][value="0"]').check();await click(p,'check');assert.match(await p.locator('.quiz').innerText(),/Đúng với slide/);await click(p,'reset');assert.equal(await p.locator('input[name=quiz]:checked').count(),0);await p.close();
    });
    await check('B: grounded explanation, insufficient source, editable escalation and decision result',async()=>{
      const p=await page('b');await click(p,'chat');await click(p,'ask-topk');assert.match(await p.locator('.card').last().innerText(),/chưa đủ căn cứ/);await click(p,'chat');await click(p,'ask-rag');await p.locator('summary').click();assert.match(await p.locator('details').innerText(),/Slide 6/);await click(p,'draft');assert.match(await p.locator('#draft').inputValue(),/Câu hỏi/);await p.locator('#draft').fill('<img src=x onerror=alert(1)>');assert.equal(await p.locator('#previewDraft img').count(),0);await click(p,'cancel');await click(p,'understood');assert.match(await p.locator('.card').last().innerText(),/Bạn chọn tiếp tục học/);assert.equal(await p.locator('.steps .active').innerText(),'3\nQuyết định / kết quả');await p.close();
    });
    await check('C: permission, per-slide active time, anchored suggestion and rejection',async()=>{
      const p=await page('c');await p.clock.runFor(50000);assert.equal(await p.locator('[data-action=why]').count(),0);
      await p.locator('#enabled').check();await click(p,'prev');await p.clock.runFor(45500);assert.match(await p.locator('.radar-prompt').innerText(),/slide 5/);await click(p,'next');await click(p,'why');assert.match(await p.locator('.radar-prompt').innerText(),/Slide 5: khoảng 45 giây/);
      fs.mkdirSync(path.join(root,'test/screenshots'),{recursive:true});await p.screenshot({path:path.join(root,'test/screenshots/option-c-suggestion.png'),fullPage:true});
      await click(p,'reject');assert.match(await p.locator('[role=status]').innerText(),/Không gắn cờ/);await click(p,'prev');await p.clock.runFor(70000);assert.equal(await p.locator('[data-action=why]').count(),0);await click(p,'reset');assert.equal(await p.locator('#enabled').isChecked(),false);await p.close();
    });
    await check('C: contextual conversation, source navigation, stop and retained notes',async()=>{
      const p=await page('c');await p.locator('#query').fill('Vì sao câu trả lời có thể sai?');await click(p,'ask');await p.clock.runFor(700);assert.match(await p.locator('.message.ai').innerText(),/slide 5/);await p.locator('[data-action=source][data-slide="5"]').first().click();assert.match(await p.locator('.slide h2').innerText(),/thiếu căn cứ/);
      await p.locator('#query').fill('top-k nên chọn bao nhiêu?');await click(p,'ask');await p.clock.runFor(700);assert.match(await p.locator('.message.ai').last().innerText(),/chưa đủ căn cứ/);
      await p.locator('#query').fill('<img src=x onerror=alert(1)>');await click(p,'ask');await click(p,'stop');await p.clock.runFor(1000);assert.equal(await p.locator('.message img').count(),0);assert.equal(await p.locator('.message.ai').count(),2);
      await click(p,'notes');await p.locator('#notes').fill('Ghi chú riêng: chưa hiểu.');await click(p,'tutor');await click(p,'next');assert.equal(await p.locator('.message.user').count(),3);await click(p,'notes');assert.equal(await p.locator('#notes').inputValue(),'Ghi chú riêng: chưa hiểu.');await click(p,'tutor');await click(p,'panel');await click(p,'panel');assert.equal(await p.locator('.message.user').count(),3);await p.close();
    });
    await check('C: revisit signal, editable preview, consent revocation, coach recovery and full reset',async()=>{
      const p=await page('c');await p.locator('#enabled').check();await p.clock.runFor(15000);await click(p,'next');await click(p,'prev');await p.clock.runFor(500);assert.equal(await p.locator('.radar-prompt').count(),1);
      await click(p,'coach-draft');await p.locator('#draft').fill('Xin làm rõ hai bước của RAG.');await p.locator('#share').check();await click(p,'preview');assert.match(await p.locator('#previewSignal').innerText(),/2 lượt/);assert.doesNotMatch(await p.locator('.preview').innerText(),/Ghi chú riêng/);
      await click(p,'disable');assert.equal(await p.locator('#previewSignal').innerText(),'Không chia sẻ');await click(p,'edit');assert.equal(await p.locator('#draft').inputValue(),'Xin làm rõ hai bước của RAG.');await click(p,'preview');await click(p,'send');await click(p,'back');await click(p,'request');await click(p,'withdraw');assert.match(await p.locator('.support-panel').innerText(),/Đã thu hồi/);
      await click(p,'manual-draft');await click(p,'preview');await click(p,'send');await click(p,'response');assert.equal(await p.locator('[data-action=withdraw]').count(),0);await click(p,'reset');assert.equal(await p.locator('#enabled').isChecked(),false);assert.equal(await p.locator('.message').count(),0);await click(p,'notes');assert.equal(await p.locator('#notes').inputValue(),'');await p.close();
    });
    await check('All: standalone open, same context/quiz, no horizontal overflow at desktop, reset and no external requests',async()=>{
      for(const o of 'abc'){const p=await page(o);assert.equal(await p.locator('.slide h2').innerText(),'RAG: tìm tài liệu rồi trả lời');assert.equal(await p.locator('input[name=quiz]').count(),4);assert.equal(await p.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false);await click(p,'next');await click(p,'reset');assert.match(await p.locator('.card-title .tag').innerText(),/Slide 6/);fs.mkdirSync(path.join(root,'test/screenshots'),{recursive:true});await p.screenshot({path:path.join(root,`test/screenshots/option-${o}.png`),fullPage:true});await p.close();}
      assert.deepEqual(errors,[]);
    });
  }finally{await browser.close();fs.writeFileSync(path.join(root,'test/prototype-checks.json'),JSON.stringify({type:'automated-browser-qa',not_user_feedback:true,checks:rows,errors},null,2)+'\n');}
  if(rows.length!==6)throw new Error('QA incomplete');
})().catch(e=>{console.error(e);process.exitCode=1;});
