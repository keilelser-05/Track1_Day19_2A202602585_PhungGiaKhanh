# Lab 18 — Ba Solution Options · Human–AI Micro-prototypes

> **Track 1 · Case C — AI Support Radar (VLearn)**
> 180 phút · Sản phẩm nhóm 3 người, nộp bài cá nhân · Mỗi người chịu trách nhiệm 1 option · Mỗi người test cả A/B/C với 1 người khác · Hoàn tất ngoài giờ nếu 20 phút cuối chưa đủ.

Tài liệu này gộp hai phần: **đề bài** (làm gì, luật chơi, gate) và **cách làm** (đầu vào Day 17 đã có gì, mỗi chặng điền gì, template nào dùng).

**Quy ước nhãn trong file:**

| Nhãn | Nghĩa |
| --- | --- |
| ⚙️ | Nội dung **đã có sẵn từ Day 17** — chỉ cần đối chiếu, không phải nghĩ lại |
| ✍️ | Nội dung **nhóm phải tự điền trong buổi lab** |
| 🧪 | Bản **nháp đề xuất** (AI hỗ trợ soạn) — nhóm phải tự review và chốt, không dùng nguyên trạng |
| 🚫 | Nội dung **cấm dùng AI** — phải do người tự viết (reflection, quote, feedback) |

---

## Trạng thái thực tế — cập nhật 05/10/2026

Repo giữ tên Day19 theo URL người nộp cung cấp; đề/README ghi Lab18. Chưa đổi tên repo, cần đối chiếu tên buổi với lớp.

| Phần | Trạng thái | File làm việc |
| --- | --- | --- |
| Chặng 1 | Hoàn thiện nội dung theo notes: evidence, thảo luận, giả thuyết 5 thành phần và điều chưa biết | [Design sheet](three-option-design-sheet.md) |
| Chặng 2 | Đồng bộ A gửi coach / B AI giải thích / C AI chủ động; phân công là đề xuất | [Design sheet](three-option-design-sheet.md) |
| Chặng 3 | Hoàn thiện quyết định Human–AI, quyền dữ liệu và recovery; chưa build/test | [Design sheet](three-option-design-sheet.md) |
| Chặng 4 | Đã build 3 HTML độc lập, 8 nhóm QA trình duyệt pass; chờ người không build kiểm tra | [Prototype link](prototype-link.md) |
| Chặng 5 | Hoàn thiện kịch bản: bối cảnh, task chung, 5 mục quan sát, thứ tự/reset và facilitation; chưa test | [Test prompt](test/test-prompt.md) |
| Chặng 6 | Chưa có feedback test prototype | [Feedback note](prototype-feedback-note.md), [synthesis](group-feedback-synthesis.md) |

**Bản nháp thực hiện hiện tại nằm ở các file liên kết trên.** Các bảng trống/nháp trong phần hướng dẫn bên dưới không phải kết quả đã hoàn thành.
Không dùng ba note phỏng vấn Day 17 thay cho ba feedback test A/B/C.
Phân công, đóng góp và reflection cá nhân do người thực hiện tự ghi.

---

## 0. Thông tin bài nộp

| Mục | Nội dung |
| --- | --- |
| MHV | `2A202602585` |
| Họ và tên | `Phùng Gia Khánh` |
| Nhóm | `H3201` |
| Track | `Track 1` |
| Case | `Case C — AI Support Radar` |
| Thời lượng | 180 phút |
| Hình thức | Sản phẩm nhóm 3 người, **nộp bài cá nhân** |
| Option của tôi theo phân công đề xuất | C (cùng phụ trách); phần dùng chung slide/quiz/reset — chờ nhóm xác nhận |
| Ngày nộp | `...` |

**Thành viên nhóm — danh sách đầy đủ:**

| # | MHV | Họ và tên | Vai trò Day 17 ⚙️ | Option phụ trách chính |
| - | --- | --------- | ----------------- | ---------------------- |
| 1 | `2A202602636` | `Bùi Hải Nam` | Điều phối Chặng 1–2 | ✍️ chốt ở Chặng 2 |
| 2 | `2A202602675` | `Chử Trần Phương Nam` | Ghi chép & hợp nhất | ✍️ chốt ở Chặng 2 |
| 3 | `2A202602585` | `Phùng Gia Khánh` | Phản biện guide | ✍️ chốt ở Chặng 2 |
| 4 | `2A202602930` | `Phan Duy Thanh` | Bản ghi & nộp bài | ✍️ chốt ở Chặng 2 |

> Tài liệu nhóm mới ghi giảng viên đã đồng ý nhóm 4 người. Phân công đề xuất: Thành A, Phương Nam B, Bùi Hải Nam chính C, Khánh cùng C và phần dùng chung. Cần nhóm xác nhận trước khi ghi đóng góp thực tế.
>
> **Dù phụ trách option nào, mỗi người vẫn phải test cả A/B/C.** Không ai chỉ mang option mình làm đi test.

---

## 1. Đề bài — tổng quan

### 1.1. Về bài lab này

Cuối Day 17, nhóm đã có một **Hypothesis Problem**, ba **Practice Notes** và một **Solution Parking Lot**. Day 18 **không** yêu cầu đi tìm problem mới.

Nhiệm vụ là **mở lại solution space**, biến ba cách giải thành ba **Human–AI micro-prototype**, và mang **cả bộ A/B/C** đi test.

```text
DAY 17
3 Practice Notes + Hypothesis Problem + Solution Parking Lot
                              ↓
DAY 18
3 Solution Options
→ Human–AI Design
→ 3 Micro-prototypes
→ 3 Testers × A/B/C
→ 3 Feedback Notes
→ 1 Group Next Change
```

### 1.2. Bạn làm được gì sau bài này

- Mở lại solution space từ Hypothesis Problem và evidence Day 17 thành **ba Solution Options khác nhau có ý nghĩa**.
- Thực hiện **Human–AI Design pass** cho critical interaction: Expectation, Role & Agency, Evidence & Uncertainty, Control & Recovery.
- Build ba **micro-prototype test-ready** chia sẻ ~70% common context/content nhưng khác biệt rõ ở **cơ chế tương tác**.
- Chuẩn bị **test prompt, outcome task và observation focus** mà không dẫn dắt hoặc pitch giải pháp.
- **Test chéo cả ba option A/B/C** với ba người ngoài nhóm, ghi **Feedback Notes** và tổng hợp thành **Group Next Change**.

### 1.3. Cần chuẩn bị

- Đã hoàn thành Day 17 với Hypothesis Problem, ba Practice Notes và Solution Parking Lot.
- Nắm vững các nguyên lý Human–AI Design: **Expectation, Role & Agency, Evidence & Uncertainty, Control & Recovery**.
- Sẵn sàng công cụ prototyping: Figma, Framer, HTML/CSS/JS, hoặc giấy.
- Tài liệu làm việc nhóm (Google Docs / Sheets / HackMD).
- Thiết bị chạy prototype và **đồng hồ bấm giờ**.
- *(Tùy chọn)* Công cụ AI — nếu dùng thì **phải khai báo minh bạch**.

### 1.4. Lỗi thường gặp

| # | Lỗi | Cách tránh trong file này |
| - | --- | ------------------------- |
| 1 | Đổi case hoặc tìm problem mới thay vì giữ Hypothesis Problem Day 17 | Chặng 1 khoá vào §5.1 |
| 2 | Build ba **phiên bản giao diện** (khác màu, wording, layout) thay vì ba **solution mechanism** | Distance check ở Chặng 2 |
| 3 | Không làm rõ quyền quyết định và điểm user lấy lại control / recovery khi AI sai | Human–AI Decision Table ở Chặng 3 + GATE 3 |
| 4 | Build full product, model thật hay API thay vì micro-prototype 2–3 màn hình | Scope chuẩn ở Chặng 4 |
| 5 | Chỉ mang option mình làm đi test thay vì cho tester trải nghiệm cả A/B/C | Trách nhiệm cá nhân ở Chặng 6 |
| 6 | Facilitator giải thích, dẫn dắt hoặc hỏi "Bạn có thích không?" thay vì quan sát hành vi | Luật facilitation ở Chặng 5 |
| 7 | Tuyên bố solution đã validated chỉ với ba feedback | §12 — kết luận được phép / không được phép |

### 1.5. Roadmap 6 chặng

| Chặng | Thời gian | Câu hỏi trung tâm | Đầu ra | Gate |
| ----- | --------- | ----------------- | ------ | ---- |
| **1. Tổng hợp evidence** | 15 phút | Từ ba Practice Notes, nhóm tiếp tục Hypothesis Problem nào? | Evidence Snapshot + Hypothesis Problem | GATE 1 |
| **2. Chọn ba Solution Options** | 20 phút | Ba cách giải nào cùng problem nhưng chia công việc user–AI khác nhau? | Option A/B/C + Comparison Contract | GATE 2 |
| **3. Human–AI Design pass** | 30 phút | User và AI làm gì; user hiểu, kiểm soát và phục hồi thế nào? | Human–AI Decision Table | GATE 3 |
| **4. Build ba micro-prototype** | 80 phút | Cần build tối thiểu gì để tester trải nghiệm được khác biệt? | Three Micro-prototypes | GATE 4 |
| **5. Chuẩn bị test** | 15 phút | Context, task và behavior cần quan sát là gì? | Test Prompt + Observation Focus | — |
| **6. Test với ba người** | 20 phút cuối hoặc ngoài giờ | Ba tester làm gì, chọn gì và đánh đổi điều gì? | 3 Feedback Notes + 1 Group Next Change | GATE 5 |

---

## 2. Luật của bài lab

1. **Giữ một Hypothesis Problem.** A/B/C phải cùng giải một problem cho cùng user và situation.
2. **Build ba solution, không phải ba phiên bản giao diện.** Khác màu, wording hoặc layout chưa tạo thành ba option.
3. **Mỗi option phải thể hiện một Human–AI interaction.** Nhóm phải nói rõ user làm gì, AI làm gì và ai giữ quyền quyết định.
4. **Prototype vừa đủ để test.** Mỗi option chỉ cần 2–3 trạng thái quanh một critical interaction; không build full product.
5. **Mỗi tester trải nghiệm cả ba.** Mỗi thành viên test với một người khác, nhưng không được chỉ mang option mình làm đi test.
6. **Ghi hành vi trước, diễn giải sau.** "Tester chọn B" chưa đủ nếu không có lý do, trade-off và hành vi đi kèm.
7. **Không tuyên bố validated.** Ba feedback tạo input cho iteration tiếp theo, không chứng minh product value hoặc market demand.

---

## 3. Cách làm việc nhóm

- Ở **Chặng 1–3**, cả nhóm cùng chốt evidence, ba options và Human–AI decisions.
- Ở **Chặng 4**, mỗi thành viên **chịu trách nhiệm chính một option** nhưng phải dùng chung context, content và visual components.
- Trong **10–15 phút cuối prototype sprint**, mỗi người thử option do người khác build; cả nhóm chuẩn hoá A/B/C.
- Ở **Chặng 6**, mỗi thành viên tự facilitate và ghi một Feedback Note cho một tester ngoài nhóm. Cả ba tester đều phải dùng A/B/C.
- Sau buổi học, mỗi thành viên **nộp repo cá nhân** và ghi rõ phần mình đã đóng góp vào sản phẩm chung.

---

## 4. Quy tắc dùng AI

### 4.1. Phạm vi được phép

- Gợi ý cơ chế tương tác và kịch bản đối thoại mẫu.
- Sinh dữ liệu mẫu (synthetic / dummy data) để đưa vào prototype.
- Soạn thảo canned AI outputs hoặc wizard-of-oz inputs cho các tương tác thử nghiệm.
- Hỗ trợ viết code giao diện hoặc boilerplate cho prototype.
- Rà soát câu hỏi dẫn dắt nhằm tránh định hướng hoặc gợi ý câu trả lời cho tester.

### 4.2. Phạm vi nghiêm cấm 🚫

- **Tuyệt đối không** tạo quote, quan sát (observation) hoặc phản hồi (feedback) giả mạo từ tester.
- Không dùng AI làm sạch hoặc chuẩn hoá evidence đến mức làm mất tính chân thực giữa lời nói thực tế của người dùng và nhận định chủ quan của nhóm.
- Không dùng AI để viết hộ phần **đóng góp cá nhân** và phần **reflection** sau buổi học.

### 4.3. Khai báo minh bạch

Mọi trường hợp có ứng dụng công cụ AI trong quá trình làm bài lab đều phải được ghi chú và giải trình rõ ràng theo quy định của môn học — dùng [Phụ lục A — AI Support Log](#phụ-lục-a--ai-support-log).

---

## 5. Đầu vào từ Day 17 (carry-over)

Đầu vào Day 17 được lưu tại [note/](note/). Đây là ghi chép được cung cấp; bản cập nhật này chưa nghe lại bản ghi để xác nhận từng chi tiết.

- Hypothesis Problem của nhóm → §5.1
- Ba Practice Notes (một note từ mỗi thành viên) → §5.2
- Solution Parking Lot (6 hướng ≥ 5, có ≥ 1 hướng không dùng AI) → §5.3
- Conversation Guide → §5.4 (chỉ để tham khảo context; **Day 18 không tiếp tục problem interview**)

> ⚠️ Practice interview Day 17 **chưa đủ** để chứng minh pain đã được validated.

### 5.1. Hypothesis Problem ⚙️

```text
Khi tự học một phần nội dung khó trên VLearn một mình, learner thường mắc lại khá lâu nhưng xử lý
âm thầm — bằng workaround tốn thời gian hoặc bỏ qua phần đó — vì không ai ở vai trò hỗ trợ biết được
họ đang mắc ở đâu, và bản thân họ cũng không chủ động lên tiếng. Hậu quả là lỗ hổng kiến thức tích
luỹ và đà học giảm dần.
```

**Cấu trúc chuẩn (đối chiếu ở GATE 1):**

> Khi **[situation]**, **[user]** gặp khó khăn trong việc **[job]** vì **[barrier]**, dẫn đến **[consequence]**.

| Thành phần | Nội dung ⚙️ |
| ---------- | ----------- |
| Situation | Đang tự học một bài/slide khó trên VLearn vào buổi tối, một mình, không có ai ngồi cạnh |
| User | Learner tự học |
| Job | Hiểu đủ nội dung để học tiếp và làm bài tập/quiz đúng hạn |
| Barrier | Không ai ở vai trò hỗ trợ biết họ đang mắc ở đâu **và** bản thân họ cũng không chủ động lên tiếng |
| Consequence | Lỗ hổng kiến thức tích luỹ, đà học giảm dần |

**Hai giả thuyết được xem xét qua lượt luyện Day 17 — chưa xác thực:**

| | Pain Hypothesis | Trạng thái sau Day 17 |
| --- | --- | --- |
| **A** | *Visibility gap* — learner mắc nhưng **không ai biết**, và learner cũng không chủ động nói | Có dấu hiệu yếu (PN1); bị **làm yếu** bởi PN2 |
| **B** | *Chi phí xã hội* — learner **biết** mình mắc và **biết** cách hỏi, nhưng chọn im lặng vì ngại | **Có evidence trực tiếp** ở PN3 |

### 5.2. Ba Practice Notes ⚙️

| # | Interviewer → Participant | Tín hiệu chính |
| - | ------------------------- | -------------- |
| PN1 | `Phan Duy Thanh` → `Lê Thanh Tình` (`2A202602449`) | Không xác định được slide/nội dung đang vướng → **không nói được mình kẹt ở đâu** |
| PN2 | `Bùi Hải Nam` → learner `2A202602872` (khoá 4 AI Thực Chiến) | Có **nhiều kênh hỗ trợ** và **chủ động dùng** (search, hỏi bạn, hỏi lab coach) |
| PN3 | `Chử Trần Phương Nam` → learner nữ (track chuyên sâu AI Thực Chiến) | **Ngại** nên không hỏi ai; ~10 phút/thuật ngữ; khi được hỏi trước thì **"Wow, được giải thoát rồi!"** |

> Phần phỏng vấn của Khánh dùng [PN04](note/notes_khanh_pn04.md).

### Nguồn Khánh bổ sung — PN04

[PN04 — lượt Phùng Gia Khánh](note/notes_khanh_pn04.md) ghi việc làm rõ nhận xét bài tập, chủ động hỏi giảng viên và chờ phản hồi. Nguồn được đối chiếu với Hypothesis Problem cùng các notes khác; không dùng để chứng minh ngại hỏi.

### 5.3. Solution Parking Lot ⚙️

| # | Hướng giải quyết có thể có | AI? |
| - | -------------------------- | --- |
| 1 | **FAQ theo slide** do TA tổng hợp từ câu hỏi thật của các khoá trước, gắn ngay dưới slide | Không |
| 2 | **Checklist tự kiểm tra cuối bài** ("bạn có giải thích được khái niệm X bằng lời của mình không?") kèm đáp án nền ngắn | Không |
| 3 | **Peer pod hằng tuần**: 4–5 learner học cùng, có điều phối viên và khung giờ cố định | Không |
| 4 | **Mentor chủ động nhắn 1 câu hỏi mở** cho từng learner sau mỗi buổi ("chỗ nào hôm nay khó nhất?") — làm thủ công | Không |
| 5 | **Digest theo slide, không theo người**: thống kê tín hiệu đơn giản (slide bị xem lại nhiều nhất, tỉ lệ đổi đáp án) gửi mentor — **cảnh báo nội dung khó, không gắn cờ học viên** | AI |
| 6 | **Support Queue đúng như directive**: AI suy đoán **từng learner** đang kẹt ở đâu và xếp mức ưu tiên cho giảng viên | AI |

> **CHECKPOINT 1 (Day 17):** qua khi lần theo được đủ chuỗi Solution → Change → Actor → Situation & Job → Pain → Evidence; có hai cách giải thích cạnh tranh; và nói rõ điều gì có thể làm giả thuyết được chọn trở nên sai. Chưa xác nhận trạng thái chấm; nhóm tự đối chiếu.

### 5.4. Conversation Guide — chỉ để tham khảo context ⚙️

Day 18 **không** tiếp tục problem interview. Không mang Big 3 Questions vào phiên test hôm nay — phiên test hôm nay là **prototype test**, không phải problem interview.

---

## 6. Chặng 1 — Evidence Snapshot cập nhật

Bảng evidence và giới hạn được ghi tại [Three-Option Design Sheet](three-option-design-sheet.md#1-chặng-1--evidence-snapshot).

- PN1: khó tìm nội dung trên slide; chưa có chuỗi xử lý hoặc hậu quả cụ thể.
- PN2: chủ động search, hỏi bạn và coach; làm yếu giả định mọi learner đều im lặng.
- PN3: kể hỏi AI rồi tra Google, ước lượng 10 phút/thuật ngữ và ngại hỏi người khác.
- Không nói cả ba đều có sự kiện cụ thể “hôm qua”: mức neo vào sự kiện khác nhau.
- Được giảng viên hỏi trước tại lớp code không chứng minh đồng ý để AI theo dõi/chia sẻ.
- Cảm xúc PN1 có câu hỏi dẫn dắt theo note đính kèm; cần nghe lại trước khi dùng làm evidence.
- Phần Khánh dùng [PN04](note/notes_khanh_pn04.md): có chủ động hỏi nhưng chưa làm rõ nguyên nhân chậm phản hồi hoặc vướng kiến thức.

**Giả thuyết tiếp tục (chưa phải finding):**

Khi **tự học một phần nội dung khó trên VLearn**, **học viên** gặp khó khăn trong việc **gỡ chỗ vướng để học tiếp** vì **người hỗ trợ chưa biết họ đang mắc ở đâu và họ chưa chủ động lên tiếng**, dẫn đến **tự xử lý tốn thời gian hoặc bỏ qua phần chưa hiểu**.

Evidence hỗ trợ một phần: PN1 và PN3. Evidence trái giả thuyết: PN2.
Chưa chứng minh tần suất, việc bỏ qua bài, hậu quả học tập, nhận biết của người hỗ trợ và chấp nhận phân tích hành vi.
Chặng 1 đã hoàn thiện phần tài liệu: xem bảng năm thành phần, câu trả lời thảo luận và checklist Gate 1 trong Design Sheet. Đây là kiểm tra nội dung, chưa phải xác nhận review nhóm/chấm của coach hoặc validation.

---

## 7. Chặng 2 — Ba Solution Options

Thiết kế chung tại [Design Sheet](three-option-design-sheet.md#2-ba-solution-options--gate-2).

| Option | Cơ chế chung mới |
| --- | --- |
| A | User đánh dấu chỗ vướng, gửi câu hỏi gắn slide cho coach; không suy luận |
| B | User hỏi; AI giải thích dựa trên slide; chuyển coach nếu vẫn chưa rõ |
| C | AI gợi ý từ thao tác/thời gian được cho phép; user quyết định giải thích hoặc nhờ coach |

Cùng learner, slide RAG 5–7, quiz, lời giải mô phỏng và quyền gửi/hủy.
Task chung: làm rõ đủ để trả lời quiz, hoặc chuyển câu hỏi đúng người.
Người nộp cần review thiết kế và xác nhận phân công trước khi build.
[Fixture chung](shared/content-fixture.md), [task test](test/test-prompt.md).

## 8. Chặng 3 — Human–AI Design pass

Nội dung hoàn thiện tại [Design Sheet — Chặng 3](three-option-design-sheet.md#3-chặng-3--humanai-design-pass).

| Option | Quyết định chính |
| --- | --- |
| A | User xác định câu hỏi; hệ thống gắn slide, AI không tự suy luận; user xem trước và gửi |
| B | AI giải thích sau yêu cầu, hiện căn cứ và giới hạn; user sửa/chuyển coach khi chưa rõ |
| C | Mặc định tắt; user bật quyền trước khi theo dõi thời gian/chuyển slide; gợi ý không tự báo coach |

Đã hoàn thiện bốn nguyên lý, bảng Act/Ask/Don't Act từng option, hậu quả khi sai, đường sửa/phục hồi và quy định feedback/dữ liệu.
Cả ba có sửa, hủy và tiếp tục quiz; mọi chia sẻ coach cần xem trước và xác nhận.
Reset xóa dữ liệu phiên và trả C về tắt. Không hứa thu hồi nội dung đã được người nhận đọc.
Gate 3 đủ nội dung thiết kế; kiểm tra triển khai nằm ở Chặng 4 và test ở Chặng 6.

---

## 9. Chặng 4 — Ba micro-prototype HTML

[Trang mở A/B/C](index.html) · [A](options/option-a.html) · [B](options/option-b.html) · [C](options/option-c.html).

Tải repo về máy và mở index.html bằng Chrome/Edge. Ba file option nhúng sẵn CSS/JS, có thể mở riêng, không cần API/server.
Giao diện tuân theo [design.md](design.md); chung context, mini-deck, quiz, task và nội dung mô phỏng.
Chỉ cơ chế tương tác khác nhau: tự gửi coach / AI giải thích theo yêu cầu / AI gợi ý chủ động sau bật quyền.
Có xem trước, sửa, hủy, thu hồi, tắt, tiếp tục quiz và reset.

**QA thực tế:** 8 nhóm kiểm tra Chromium headless pass; không có lỗi JS hoặc gọi mạng ngoài trong các luồng đã kiểm tra. Đã xem ảnh render bố cục A/B/C.
[Chi tiết QA và Gate 4](prototype-link.md) · [Hướng dẫn](docs/prototype-run.md) · [Annotations ngoài frame](docs/prototype-annotations.md).

**Còn cần:** người không build tự mở/task/reset và ghi nhận thật để xác nhận test-ready theo Gate 4.
Không coi QA tự động là user feedback; chưa chọn option thắng hoặc tuyên bố validated.

---

## 10. Chặng 5 — Chuẩn bị test · 15 phút

Kịch bản đầy đủ: [Test Prompt](test/test-prompt.md).

**Câu hỏi bối cảnh:** “Gần đây bạn có từng gặp một phần chưa hiểu khi tự học bằng slide hoặc bài học trực tuyến không?” — tối đa 2 phút.

**Task chung:** “Bạn đang xem lại bài RAG trước khi làm quiz. Trong tình huống này, bạn chưa rõ ‘truy xuất tài liệu’ và ‘sinh câu trả lời’ khác nhau thế nào. Hãy dùng phương án này để làm rõ phần đó và trả lời câu quiz. Nếu vẫn chưa rõ, hãy chọn cách bạn muốn tiếp tục.”

**Năm mục quan sát:** hành động đầu tiên; do dự/hiểu sai/cần giúp; căn cứ và giới hạn; kiểm soát/phục hồi; lựa chọn và đánh đổi.

Tester tự thao tác; không chỉ nút, pitch hoặc yêu cầu bật AI/gửi coach. Reset trước mỗi lượt, cùng slide 6 và fixture; dự kiến thứ tự A–B–C / B–C–A / C–A–B giữa ba tester. Ghi thứ tự thật và trợ giúp đã đưa. Lặp cùng nội dung có ảnh hưởng học lại, nên không chọn option chỉ bằng thời gian/đáp án quiz.

**Trạng thái:** đã hoàn thiện tài liệu Chặng 5; chưa thực hiện phiên test. Feedback, đóng góp cá nhân và reflection phải được ghi từ việc thật.

---

## 11. Chặng 6 — Test với ba người · 20 phút cuối hoặc ngoài giờ

### 1. Trách nhiệm cá nhân

- **Thành viên 1** test cả A/B/C với **Tester 1**.
- **Thành viên 2** test cả A/B/C với **Tester 2**.
- **Thành viên 3** test cả A/B/C với **Tester 3**.
- Ba tester phải là **ba người khác nhóm**; ưu tiên người có **relevant context** với case.
- Có thể chạy song song nếu coach đã chuẩn bị tester. Nếu không đủ người hoặc không đủ 20 phút, **hoàn tất ngoài giờ trước khi nộp**.
- Người phụ trách Option A **vẫn phải test cả A/B/C**; tương tự với B và C.

### 2. Timeline 20 phút

| Thời gian | Hoạt động |
| --------- | --------- |
| **0–2 phút** | Make comfortable + hỏi relevant context ngắn |
| **2–14 phút** | Tester dùng A/B/C, khoảng **4 phút mỗi option** |
| **14–18 phút** | So sánh option, lý do và trade-off |
| **18–20 phút** | Hoàn thành Feedback Note cá nhân |

**Opening:**

> "Chúng mình đang thử ba cách thiết kế, **không kiểm tra bạn**. Không có câu trả lời đúng hoặc sai. Bạn hãy tự thao tác và nói to điều mình đang nghĩ; mình sẽ cố gắng không hướng dẫn."

**Compare:**

- "Trong tình huống này, bạn chọn A, B hay C? Vì sao?"
- "Bạn muốn tự làm phần nào và giao cho AI phần nào?"
- "Điều gì ở phương án đã chọn khiến bạn chưa thoải mái?"

### 3. Prototype Feedback Note — mỗi thành viên hoàn thành một bản 🚫

> 🚫 Không dùng AI để tạo hoặc làm đẹp phần này. Điền sau khi vừa test xong, khi ký ức còn tươi.

**Tester/context:** ........................................................................................................

| Observation | Note |
| ----------- | ---- |
| **First action** | |
| **Chỗ dừng, do dự hoặc hiểu sai** | |
| **Evidence được đọc hay bỏ qua** | |
| **Cách tester sửa hoặc lấy lại control** | |
| **Option được chọn** | A / B / C |
| **Lý do và trade-off** | |
| **Evidence chống lại kỳ vọng của nhóm** | |

**Tách bốn lớp:**

- **OBSERVED:** Tester đã làm hoặc nói gì?
- **INTERPRETED:** Nhóm nghĩ điều đó có thể có nghĩa gì?
- **DECIDED — NEXT CHANGE:** Nhóm sẽ sửa, kết hợp hoặc test gì tiếp?
- **STILL UNPROVEN:** Điều gì chưa thể kết luận từ một người?

**Next Change có thể là:**

- Giữ một option và **sửa interaction**.
- **Kết hợp hai options** nhưng giữ một cơ chế chính rõ ràng.
- **Bỏ một option** vì tester không hiểu hoặc nó không tạo khác biệt.
- **Sửa cả ba** rồi test người tiếp theo.

### 4. Group Feedback Synthesis — sau khi có đủ ba bản

| Nội dung | Feedback 1 | Feedback 2 | Feedback 3 | Pattern hoặc khác biệt |
| -------- | ---------- | ---------- | ---------- | ---------------------- |
| **First action** | | | | |
| **Breakdown chính** | | | | |
| **Cách lấy lại control** | | | | |
| **Option được chọn** | | | | |
| **Trade-off** | | | | |

**Một Next Change nhóm chốt:** ✍️
```text
...
```

**Evidence nào dẫn tới quyết định này:** ✍️
```text
...
```

**Still Unproven sau ba feedback:** ✍️
```text
...
```

**GATE 5 — Learning, not praise** ✅

> Nhóm có **ba Feedback Notes độc lập**, nêu được **pattern hoặc khác biệt** giữa ba người, chốt **một Next Change** và **một điều vẫn chưa được chứng minh**.
> *"Ba tester thích B"* **không đủ** nếu không có hành vi và trade-off đi kèm.

### 5. Sau lớp — hoàn tất test nếu cần

- Nếu 20 phút cuối chưa đủ để cả ba thành viên hoàn thành phiên riêng, mỗi người **tự hẹn một tester** và bổ sung Feedback Note trước deadline.
- **Không** bắt transcript hoặc report dài.
- **Không** dùng ba feedback để áp dụng threshold thống kê hoặc tuyên bố product value đã validated.

---

## 12. Kết luận được phép / không được phép

**Được phép kết luận:**

> "Với **Hypothesis Problem này**, chúng tôi đã thử **ba cách giải**. Tester đã **làm…**, vì vậy **iteration tiếp theo** chúng tôi sẽ **…**"

**Không được phép kết luận:**

> ~~"User đã xác nhận solution này đúng."~~

---

## 13. Nộp bài

### 13.1. Cấu trúc repo

```text
Lab18/
├── README.md                     # file này — đề bài + cách làm + kết quả
├── shared/                       # ~70% dùng chung: context screen, fixture, components
├── options/
│   ├── option-a/                 # user-led / no-inference
│   ├── option-b/                 # user + AI co-create
│   └── option-c/                 # AI initiate, human review
├── test/
│   ├── test-prompt.md            # relevant context + outcome task
│   ├── observation-focus.md      # tối đa 5 mục
│   └── feedback-notes/
│       ├── feedback-note-1.md    # mỗi thành viên tự viết 1 bản 🚫
│       ├── feedback-note-2.md
│       └── feedback-note-3.md
├── synthesis/
│   └── group-next-change.md      # pattern + 1 Next Change + Still Unproven
├── ai-support-log.md             # khai báo mọi cách dùng AI
└── contribution.md               # đóng góp cá nhân vào sản phẩm chung 🚫
```

### 13.2. File nộp kèm (khung làm việc chung của nhóm)

```text
Track1_Day18_MHV_HoVaTen/
├── README.md                      # file này — đề bài + cách làm + kết quả
├── three-option-design-sheet.md   # Chặng 1–3: Hypothesis Problem, A/B/C, Human–AI Decision Table
├── prototype-link.md              # Chặng 4: link A/B/C, cách mở, reset path, QA
├── prototype-feedback-note.md     # Chặng 6: mỗi thành viên tự facilitate 1 phiên 🚫
├── group-feedback-synthesis.md    # Chặng 6: pattern + 1 Next Change + 1 Still Unproven
└── ai-support-log.md              # khai báo mọi cách dùng AI (Phụ lục A)
```

### 13.3. Checklist trước khi nộp

- [x] Hypothesis Problem giữ case Day 17, có đủ user/situation/job/barrier/consequence, observation có nguồn và điều chưa biết (GATE 1 — nội dung)
- [x] Ba options nêu rõ mechanism khác nhau, cùng một problem (GATE 2 — nội dung)
- [x] Distance check hoàn thành **không** nhắc màu/layout/wording
- [x] Mỗi option có Human–AI Decision Table với Act/Ask/Don't Act và đường control/recovery (GATE 3 — thiết kế)
- [ ] Cả ba prototype mở được, cùng context, có reset path, không cần narrate (GATE 4)
- [ ] Test prompt dùng cùng một task cho A/B/C; observation focus ≤ 5 mục
- [ ] Ba Feedback Notes độc lập, tách rõ OBSERVED / INTERPRETED / DECIDED / STILL UNPROVEN (GATE 5)
- [ ] Có **1 Group Next Change** + **1 điều Still Unproven**
- [ ] Không có dòng nào tuyên bố "validated"
- [ ] Đã khai báo đầy đủ việc dùng AI (Phụ lục A)
- [ ] Đã ghi rõ phần đóng góp cá nhân của mình

### 13.4. Năm gate đánh giá

| Gate | Nội dung | Trạng thái |
| ---- | -------- | ---------- |
| **GATE 1** | Evidence continuity — đủ 5 thành phần + observation có nguồn + điều chưa biết | Đủ nội dung; chưa có xác nhận chấm |
| **GATE 2** | Meaningful options — cùng user/situation/task/outcome, khác mechanism hoặc phân chia quyền | Đủ nội dung; chưa có xác nhận chấm |
| **GATE 3** | Human control — rõ user/AI làm gì, agency phù hợp hậu quả, có đường kiểm soát/phục hồi | Đủ nội dung thiết kế; chưa có xác nhận chấm |
| **GATE 4** | Test-ready — người không build tự mở/task/reset không cần giải thích | Đã build/QA; chờ kiểm tra người thật |
| **GATE 5** | Learning, not praise — 3 feedback độc lập, có pattern, 1 Next Change, 1 Still Unproven | ⬜ |

---

## Phụ lục A — AI Support Log

> Mọi cách dùng AI phải được khai báo. AI **không** được dùng để tạo quote, observation hoặc feedback không tồn tại, và **không** được viết thay phần đóng góp / reflection cá nhân.

| # | Dùng AI ở đâu | AI đã giúp gì | Điểm sai hoặc hời hợt của AI | Nhóm đã tự sửa thế nào |
| - | ------------- | ------------- | ---------------------------- | ---------------------- |
| 1 | Soạn file README này (tổng hợp đề bài + carry-over Day 17) | Cấu trúc hoá toàn bộ đề bài Lab 18 thành 6 chặng + gate; bê nguyên Hypothesis Problem, 3 Practice Notes và Parking Lot từ Lab 17 vào | AI có xu hướng **điền sẵn** cả những phần nhóm phải tự làm (bảng Comparison Contract, Human–AI Decision Table) và trình bày như thể đã chốt | Các phần đó được đánh dấu 🧪 **nháp đề xuất**; các phần reflection/feedback/contribution đánh dấu 🚫; nhóm phải tự review và tự chốt |
| 2 | 🧪 Nháp 3 option A/B/C từ Parking Lot | Gợi ý cách map 6 hướng park thành 3 mechanism dọc theo spectrum user-led → co-create → AI-initiate | AI chọn hướng theo "đẹp spectrum" chứ chưa chắc theo evidence; có thể tạo ra một option nghe hợp lý nhưng không giải barrier đã thấy | Nhóm phải tự đối chiếu từng option với PN1/PN2/PN3 ở Chặng 2 và tự viết lại Distance Check bằng lời của nhóm |
| 3 | `[CẦN TỰ ĐIỀN NẾU CÓ]` | | | |

**Kết luận về mức độ tin cậy của phần có AI hỗ trợ:**

```text
AI chỉ được dùng để cấu trúc đề bài, gợi ý cơ chế và sinh dữ liệu mẫu. AI KHÔNG được dùng để tạo
interview data, bịa quote, suy diễn chi tiết tester chưa nói, hoặc viết thay phần đóng góp / reflection.
Mọi nội dung gắn nhãn 🧪 là nháp và phải được nhóm tự rà lại, tự chịu trách nhiệm.
```

---

## Phụ lục B — Đóng góp cá nhân 🚫

> 🚫 Phần này **phải do cá nhân tự viết**, không dùng AI.

| Mục | Nội dung |
| --- | -------- |
| Option tôi phụ trách chính | `A / B / C` |
| Phần tôi build | `...` |
| Tester tôi đã test | `...` (ngoài nhóm, có relevant context: Có / Không) |
| Feedback Note tôi ghi | `test/feedback-notes/feedback-note-___.md` |
| Phần tôi đóng góp vào sản phẩm chung ngoài option của mình | `...` |
| Reflection cá nhân | `...` |

---

## Phụ lục C — Thuật ngữ

| Thuật ngữ | Nghĩa trong bài này |
| --------- | ------------------- |
| **Hypothesis Problem** | Phát biểu problem dạng giả thuyết, chưa phải fact: *Khi [situation], [user] gặp khó khăn trong việc [job] vì [barrier], dẫn đến [consequence]* |
| **Solution mechanism** | Cách giải hoạt động như thế nào (ai làm gì, trigger là gì), không phải giao diện trông ra sao |
| **Critical interaction** | Khoảnh khắc tương tác quyết định giữa user và AI — chỗ duy nhất A/B/C cần khác rõ |
| **Common context** | ~70% dùng chung giữa A/B/C: bối cảnh, dữ liệu, component, task, outcome |
| **Act / Ask / Don't Act** | Lựa chọn agency của AI tại critical moment: tự làm, hỏi trước, hay không can thiệp |
| **Canned AI output** | Output AI được soạn sẵn để nhét vào prototype, không cần model thật |
| **Wizard of Oz** | Người mô phỏng AI thật ở sau; không được giải thích giao diện hộ tester |
| **Next Change** | Thay đổi cụ thể nhóm sẽ làm ở iteration tiếp theo, dựa trên behavior + trade-off quan sát được |


## Cập nhật Option C theo VLearn · 05/10/2026

[Chi tiết bản cải tiến](docs/option-c-vlearn.md) · [Nguồn trích đoạn công khai](reference/vlearn/README.md). Màn học mô phỏng dùng nhận diện xanh/đỏ; A/B cùng chrome và fixture. C giữ quyền bật/tắt, căn cứ gợi ý, preview và recovery. Bỏ social proof giả lập để tránh dẫn dắt. QA 8 nhóm pass; Gate 4 kiểm tra người không build vẫn chưa hoàn thành.

## Option C — hoạt động theo ngữ cảnh

C dùng engine riêng [radar-c.js](shared/radar-c.js) với [fixture chung](shared/lesson-fixture.js): gợi ý theo slide 5–7, thời gian đọc khi trang hiển thị, cooldown/bác bỏ; hội thoại theo chủ đề có nguồn, dừng, ghi chú riêng và giữ yêu cầu coach sau quay lại. Phản hồi theo quy tắc/canned output, không phải model thật. [Mô tả và giới hạn](docs/option-c-vlearn.md).

Tư liệu VLearn public: [manifest](reference/vlearn/capture-manifest.json), [HTML đã render](reference/vlearn/welcome-public-markup.html), [CSS trích đoạn](reference/vlearn/public-extract.css), [ảnh vòng học](reference/vlearn/vlearn-public-interaction.jpg), [ảnh đăng nhập](reference/vlearn/vlearn-public-login.jpg). Không có quyền truy cập màn học riêng; không khẳng định prototype giống chức năng thật sau đăng nhập.

## Đối chiếu giao diện lớp học

Đã đọc 5 ảnh màn VLearn user cung cấp, thay shell của A/B/C bằng header trắng, danh mục trái, tài liệu giữa và trợ giảng phải mở theo lựa chọn. [Bảng đối chiếu](docs/vlearn-screenshot-comparison.md). C gợi ý inline không che tài liệu; sidebar, dock, nguồn, ghi chú, quiz và reset thao tác được. QA thêm kiểm tra 1366×1000 và 1866×1000; không sao chép thông tin tài khoản hoặc coi ảnh tĩnh là source ứng dụng.

## Luồng C hoàn thiện

Tín hiệu → hỏi user đang đọc kỹ hay cần làm rõ → user chọn khái niệm → giải thích/ví dụ hoặc sửa nháp coach → tiếp tục học. Gợi ý ở ngay trước tài liệu, ngưỡng phiên thử rút còn 12/5 giây để phù hợp test ngắn; vẫn mặc định tắt và không gợi ý trước consent. Ngưỡng là giả lập thiết kế, không phải kết quả nghiên cứu. QA bổ sung kiểm tra xác nhận trước lời giải và nháp đúng lựa chọn user.
