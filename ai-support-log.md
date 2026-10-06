> **Trạng thái hiện tại 06/10/2026:** prototype đã build; PN05 ngoài nhóm chỉ test C; có tổng hợp nguồn nhóm, chưa đủ Gate 4/5. Các mục theo ngày phía dưới là lịch sử, không phải trạng thái hiện tại.

# AI Support Log — H3201 · Case C

> Khai báo **mọi** cách dùng AI trong quá trình làm lab (luật §4.3 của README).
>
> **AI KHÔNG được dùng để:**
> - tạo quote, observation hoặc feedback không tồn tại;
> - làm sạch / chuẩn hoá evidence đến mức mất tính chân thực giữa lời nói thực tế của tester và nhận định chủ quan của nhóm;
> - viết thay phần **đóng góp cá nhân** và phần **reflection** sau buổi học.

---

## 1. Bảng khai báo

| # | Dùng AI ở đâu | AI đã giúp gì | Điểm sai / hời hợt của AI | Nhóm đã tự sửa thế nào | Người chịu trách nhiệm |
| - | ------------- | ------------- | ------------------------- | ---------------------- | ---------------------- |
| 1 | Soạn [README.md](./README.md) (tổng hợp đề bài + carry-over Day 17) | Cấu trúc hoá đề Lab 18 thành 6 chặng + gate; bê Hypothesis Problem, 3 Practice Notes, Parking Lot từ Lab 17 | AI có xu hướng **điền sẵn** cả phần nhóm phải tự làm (Comparison Contract, Human–AI Decision Table) và trình bày như đã chốt | Đánh dấu 🧪 nháp đề xuất; phần reflection/feedback/contribution đánh dấu 🚫; nhóm tự review và tự chốt | Phan Duy Thanh |
| 2 | 🧪 Nháp 3 option A/B/C từ Solution Parking Lot | Gợi ý map các hướng park thành 3 mechanism dọc spectrum user-led → co-create → AI-initiate | AI chọn hướng theo "đẹp spectrum" chứ chưa chắc theo evidence; có thể tạo option nghe hợp lý nhưng không giải barrier đã thấy | Nhóm tự đối chiếu từng option với PN1/PN2/PN3 ở Chặng 2 và tự viết lại Distance Check bằng lời của nhóm | ✍️ |
| 3 | 🧪 Tạo skeleton file nộp | Sinh khung `three-option-design-sheet.md`, `prototype-link.md`, `prototype-feedback-note.md`, `group-feedback-synthesis.md`, `ai-support-log.md` | Khung có thể gợi ý sẵn cách diễn đạt, dễ khiến nhóm copy nguyên văn | Mọi mục cần chốt đều để trống ✍️; nhóm tự điền theo evidence thật | ✍️ |
| 4 | ✍️ | | | | |
| 5 | ✍️ | | | | |

---

## 2. Kết luận về mức độ tin cậy của phần có AI hỗ trợ

```text
AI chỉ được dùng để cấu trúc đề bài, gợi ý cơ chế và tạo khung file. AI KHÔNG được dùng để tạo
interview data, bịa quote, suy diễn chi tiết tester chưa nói, hoặc viết thay phần đóng góp / reflection.
Mọi nội dung gắn nhãn 🧪 là nháp và phải được nhóm tự rà lại, tự chịu trách nhiệm.
```

---

## 3. Checklist minh bạch

- [ ] Mọi lần dùng AI đều có dòng trong bảng §1 (kể cả dùng để sửa câu chữ)
- [ ] Không có quote / observation nào do AI sinh
- [ ] Phần đóng góp cá nhân và reflection do người tự viết 🚫
- [ ] Người phụ trách từng mục đã ghi rõ

## Cập nhật 05/10/2026 — ChatGPT/Codex

| Phạm vi hỗ trợ | Đã thực hiện | Giới hạn / việc cần người xác nhận |
| --- | --- | --- |
| Rà repo và notes | Đối chiếu đề với README và các note; tách evidence hỗ trợ/trái giả thuyết | Chưa nghe bản ghi, chưa xác nhận metadata; không tạo quote hoặc observation mới |
| Chặng 1 | Tóm tắt nguồn, thêm liên kết, sửa các khẳng định quá mức | Nhóm cần review; chưa xác nhận gate đạt |
| Chặng 2–3 | Đề xuất A tự chọn, B đối thoại, C gợi ý chủ động; contract và quyền kiểm soát | Nháp AI, chưa là quyết định nhóm hoặc phân công thật |
| Chặng 5 | Soạn task chung, câu facilitation và 5 mục quan sát | Chưa có test thực tế |
| Tài liệu/trạng thái | Ghi rõ chưa có prototype, feedback hoặc synthesis | Không viết thay đóng góp cá nhân/reflection; không ghi “nhóm đã tự sửa” nếu chưa xảy ra |

Người nộp yêu cầu điều chỉnh repo: Phùng Gia Khánh. Người phụ trách review nhóm: chưa xác nhận.

### Bổ sung — hoàn thiện Chặng 1 theo yêu cầu người nộp

ChatGPT/Codex hỗ trợ điền bốn câu thảo luận từ notes sẵn có, lập bảng năm thành phần của giả thuyết, tách evidence hỗ trợ/trái giả thuyết và ghi các điều chưa chứng minh. Không tạo lời kể hoặc số đo mới; 10 phút/thuật ngữ được giữ là ước lượng người tham gia theo PN3. Checklist Gate 1 chỉ xác nhận đủ nội dung tài liệu, không xác nhận đã nghe bản ghi, review nhóm hay coach chấm pass. Chưa viết đóng góp/reflection cá nhân.

### Bổ sung nguồn Khánh — 05/10/2026

Theo yêu cầu người nộp, lưu nguyên nội dung `note(3).md` vào `note/notes_khanh_day17.md`, thêm lời dẫn về attribution và khả năng trùng nguồn, rồi bổ sung PN-K/P01 vào Chặng 1. Không gán tên thật, không tạo quote hoặc hành vi mới. Do tên bản ghi và nội dung tương tự PN1, chưa tính đây là một người độc lập thêm. AI chưa nghe lại bản ghi; metadata và consent còn cần người ghi xác nhận.

### Bổ sung PN04 — 05/10/2026

Theo yêu cầu Khánh, lưu nguyên `note(4).md` vào `note/notes_khanh_pn04_case_d.md`, thêm chú thích nguồn và bảng tóm tắt có timestamp trong Chặng 1. AI nhận ra đây là Case D (phản hồi đồ án), nên tách khỏi evidence hỗ trợ Case C và không tự đổi problem. Không tạo quote, danh tính, consent hoặc feedback mới; không biến thời gian tự thuật thành số đo. Chỉ ra câu hỏi tiếp số 3 đang gợi giải pháp giả định và các diễn giải chưa có đối chứng. P01 và PN04 không được gộp.

### Rà lại Chặng 1 với note(5).md — 05/10/2026

Lưu note PN04 mới do người nộp cung cấp vào `note/notes_khanh_pn04.md`, đưa vào bảng evidence chung, cập nhật thảo luận/điều chưa biết và liên kết README. Sửa phân loại dứt khoát Case D ở lần trước: đây là phỏng vấn nhằm tìm hiểu Case C nhưng evidence tập trung vào làm rõ feedback bài tập. Giữ bản cũ làm lịch sử có thông báo thay thế. Không đổi sự kiện thành vướng kiến thức, không dùng PN04 để chứng minh im lặng hoặc giảng viên quá tải, không tạo quote/danh tính hay xác nhận consent. Checklist chỉ kiểm tra đủ nội dung, chưa xác nhận coach hoặc review nhóm.

### Hoàn thiện Chặng 2 — 05/10/2026

AI hỗ trợ map Solution Parking Lot sang A/B/C, cụ thể hóa Comparison Contract và fixture giả lập, mô tả trigger/user/AI/quyền quyết định/trade-off, đối chiếu PN1/PN2/PN3/PN04 và viết distance check. Không tạo observation hoặc kết quả test, không gán phân công hoặc viết đóng góp/reflection. Nội dung Gate 2 đầy đủ nhưng review nhóm, phân công và chấm của coach chưa xác nhận. Theo chỉ dẫn người nộp, tài liệu làm việc không dùng PN-K; phần Khánh dùng PN04.

### Đồng bộ thiết kế nhóm — 05/10/2026

Nguồn: [repo Thành, commit 83b359251a1291b78d48d18dfedb4a2d25a81f37](https://github.com/thanhpd123/Track1_Day19_2A202602930_PhanDuyThanh/commit/83b359251a1291b78d48d18dfedb4a2d25a81f37). Đồng bộ cơ chế A gửi coach / B AI giải thích / C AI chủ động, bảng Human–AI và phân công đề xuất. Giữ evidence PN04, thông tin người nộp và giới hạn nguồn của repo cá nhân. Tài liệu nguồn ghi giảng viên đồng ý nhóm 4 người; chưa tự xác nhận review/phân công đã chốt.
AI soạn fixture minh họa dùng chung, đồng bộ task test và link scope. Không tạo feedback hoặc đóng góp/reflection. Nhãn mức hỗ trợ từ tài liệu thay độ tin cậy mô hình chưa đo; thời gian phản hồi coach không coi là SLA thật; ngưỡng trigger và 12 bạn là mô phỏng. Chưa build/test hoặc xác nhận gate được chấm pass.

### Hoàn thiện Chặng 3 — 05/10/2026

AI hỗ trợ viết bảng bốn nguyên lý, critical interaction và Act/Ask/Don't Act cho từng option; phân biệt chức năng hệ thống với suy luận AI; nêu hậu quả khi sai và đường tiếp tục task. Làm rõ C mặc định tắt, chỉ dùng thời gian/chuyển slide sau bật quyền; xem trước dữ liệu gửi, giới hạn thu hồi và reset. Đồng bộ fixture/README. Đây là quyết định thiết kế, chưa phải kiểm thử hoặc observation. Không viết feedback, đóng góp hay reflection cá nhân; chưa xác nhận nhóm review hoặc coach chấm pass.

### Chặng 4 — build và QA prototype HTML — 05/10/2026

ChatGPT/Codex viết design.md, shared CSS/JS, ba HTML standalone A/B/C và trang index; giữ context/quiz/fixture chung và khác cơ chế. Sinh nội dung soạn sẵn theo fixture, tạo annotations ngoài giao diện, build script và browser QA. Không dùng model/API hoặc gửi coach thật.
Đã chạy 5 nhóm kiểm tra tự động trên Chromium (luồng A/B/C, chia sẻ/tắt/reset, không gọi mạng ngoài), tất cả pass; xem test/prototype-checks.json. Đã xem ảnh render màn đầu ba bản. QA tự động không phải observation/feedback user, không thay bước người không build kiểm tra Gate 4. Không viết thay đóng góp cá nhân/reflection, không gán người build trong nhóm khi việc build thực tế do AI hỗ trợ theo yêu cầu người nộp.


## 05/10/2026 — Cải tiến Option C dựa trên giao diện VLearn công khai

AI đọc trang welcome, DOM và CSS phía client; lưu trích đoạn HTML/biến màu có nguồn, viết lại layout nhận diện xanh/đỏ và giữ shell chung A/B/C. Không có source backend hoặc màn học sau đăng nhập. AI sửa code và chạy 5 nhóm QA Chromium, xem ảnh render; kết quả là QA phần mềm, không phải quan sát tester. Ngưỡng trigger là giả lập thiết kế; không tạo quote, feedback, đóng góp cá nhân hoặc reflection.

## 05/10/2026 — Option C giữ ngữ cảnh và tư liệu public

AI lưu DOM công khai, CSS đã tải và 2 ảnh public (vòng học/login). Yêu cầu đăng nhập bảo mật bị auto-review từ chối do chưa có xác nhận quyền truy cập riêng; không đi tiếp hoặc lấy dữ liệu tài khoản. AI viết engine C theo ngữ cảnh slide, hội thoại phản hồi theo quy tắc, nguồn, dừng, ghi chú riêng, consent, cooldown và coach recovery. Dùng fixture chung A/B/C; không dùng nội dung phỏng vấn để giả làm dữ liệu test. QA mới 6 nhóm pass và ảnh render được kiểm tra. Đây là kiểm tra phần mềm, không phải feedback hay Gate 4 người thật.

## 05/10/2026 — Đối chiếu 5 ảnh màn học

AI đọc 5 ảnh do user cung cấp, nhận diện header trắng/sidebar/viewer/dock; viết lại shell dùng chung A/B/C. Không đưa email/tên/tiến độ riêng vào fixture; không upload ảnh gốc chứa thông tin tài khoản. AI sửa engine tích hợp đóng/mở panel, ghi chú, chuyển slide, reset và gợi ý inline; QA thực tế ghi trong output, không giả feedback hoặc đóng góp cá nhân. Các màn trang chủ/account ngoài phạm vi prototype.

## 05/10/2026 — Hoàn thiện critical interaction C

AI chuyển gợi ý tới cạnh đầu slide; thêm hỏi xác nhận, chọn khái niệm, giải thích/ví dụ và chuyển coach. Rút ngưỡng phiên thử xuống 12/5 giây, ghi rõ giả lập. Không tự ghi user chưa hiểu hoặc đã thử lời giải; bản nháp theo lựa chọn user. Kiểm tra mới gồm xác nhận trước lời giải, lựa chọn khái niệm, căn cứ, recovery và chống gửi ngoài. Không tạo feedback hay reflection.

## 05/10/2026 — Hoàn thiện Chặng 5

ChatGPT/Codex soạn câu hỏi bối cảnh, task chung A/B/C, năm mục quan sát, lời mở đầu, câu cứu hộ, thứ tự test và hướng dẫn reset. Rà soát tránh ép bật C/gửi coach, nêu ảnh hưởng học lại do fixture chung và giới hạn phản hồi mô phỏng. Đồng bộ README và tham số fixture với engine C hiện tại (12/5 giây, để sau 60 giây). Đây là kịch bản chuẩn bị, không phải phiên test; không tạo quote, observation, feedback, đóng góp cá nhân hoặc reflection.


## 05/10/2026 — Chuẩn bị điều phối Chặng 6

ChatGPT/Codex tạo `test/interview-guide.md` từ task và nguyên tắc đã chốt ở Chặng 5, thêm lời dẫn đọc trực tiếp, câu hỏi trung lập, lịch trình và chỗ ghi quan sát. Đồng bộ README để nối kịch bản với Feedback Note và Group Synthesis. Đây chỉ là công cụ chuẩn bị; không tạo/biên tập feedback, quote, observation, quyết định nhóm, đóng góp cá nhân hoặc reflection. Ba phiên test thật và Gate 5 vẫn đang chờ nhóm thực hiện.


## 06/10/2026 — Hoàn thiện bài từ ZIP của Thành và xác nhận PN05

| AI đã hỗ trợ | Giới hạn / điều chỉnh |
| --- | --- |
| Đọc ZIP commit 1db2f38730f6bb95f2fca13c33d570907f74bae0, đối chiếu toàn bộ deliverables và repo Khánh | Bản root và thư mục cá nhân có trạng thái/cơ chế khác; không đồng bộ máy móc |
| Sắp xếp feedback PN05 do Khánh tự cung cấp | PN05 chỉ thử C; không tạo task, quote, timestamp, kết quả quiz/reset hoặc chọn option |
| Tổng hợp T1/T2 từ note nguồn, T3 từ bảng thứ cấp | Ghi rõ nguồn và chưa xác minh bản ghi; không gộp phiên khác prototype vào phép đo so sánh |
| Loại T4 khỏi kết quả bài Khánh | Note nguồn gán Khánh test đủ A/B/C/chọn B trái xác nhận PN05; chỉ lưu đối chiếu |
| Đồng bộ README, Design Sheet, prototype-link, test status và synthesis | Giữ code/fixture C hiện có, theo design.md; không tự thay task hoặc bật C mặc định |
| Soạn một Next Change đề xuất từ feedback | Chưa phải quyết định nhóm đã chốt; chưa sửa/test prototype trong lượt này |
| Tạo khung contribution/reflection với thông tin có căn cứ | Không viết reflection hoặc nhận code AI là do Khánh tự build |
| Kiểm tra links và tính nhất quán tài liệu; cập nhật GitHub | QA trình duyệt 8 nhóm là kết quả trước đây, không phải test mới |

Không tạo interview evidence, không tính PN-K trong tổng hợp, dùng PN04 cho phỏng vấn Case C. Không khẳng định gate đã được chấm hoặc solution đã xác thực.
