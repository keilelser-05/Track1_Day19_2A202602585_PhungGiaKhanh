# Prototype A/B/C — H3201 · Case C

> Ba file HTML đã build, mở trực tiếp được. QA tự động trên Chromium đã pass; chưa có kiểm tra của người ngoài nhóm hoặc feedback user thật.

## 1. Link và cơ chế

| Option | Cơ chế | File HTML | Trạng thái |
| --- | --- | --- | --- |
| A | User tự đánh dấu và gửi coach; không suy luận | [option-a.html](options/option-a.html) | Đã build, QA tự động pass |
| B | User hỏi; AI giải thích theo slide; chuyển coach nếu chưa rõ | [option-b.html](options/option-b.html) | Đã build, QA tự động pass |
| C | AI gợi ý sau bật quyền; user kiểm tra và quyết định | [option-c.html](options/option-c.html) | Đã build, QA tự động pass |

[Trang mở bộ A/B/C](index.html) · [Hướng dẫn chạy](docs/prototype-run.md).
GitHub hiển thị HTML như mã nguồn: tải repo/ZIP và mở index.html bằng trình duyệt. Không cần server, API hoặc mạng.
Mỗi option nhúng CSS/JS nên có thể tải và mở riêng. Link về bộ A/B/C cần giữ cấu trúc thư mục.

## 2. Common context và phạm vi

- Chung slide RAG 5–7, quiz, task, canned AI/coach, components và visual style.
- Nguồn chung: [CSS](shared/prototype.css), [JS](shared/prototype.js), [fixture](shared/content-fixture.md).
- Theo [design.md](design.md); ưu tiên laptop/desktop.
- 3 trạng thái: bài học → tương tác làm rõ/xem trước → quyết định/kết quả. Các thao tác sửa/hủy là biến thể trong cùng trạng thái.
- Mỗi option có “Làm lại từ đầu”: quay về slide 6, bỏ quiz/nháp/kết quả/tín hiệu, trả C về tắt.
- C có nút bật/tắt, căn cứ gợi ý, bác bỏ/để sau; không tự gửi coach.
- Sửa và thu hồi trước phản hồi; sau phản hồi có hỏi thêm. Không hứa xóa nội dung đã được đọc.
- [Annotations dành cho nhóm](docs/prototype-annotations.md) nằm ngoài giao diện tester.

## 3. QA thực tế

Nguồn: [output QA](test/prototype-checks.json), script [check_prototypes.cjs](scripts/check_prototypes.cjs).
Kiểm tra mở file HTML độc lập bằng Chromium headless, viewport 1440×1100; không phải feedback tester.

| Nhóm kiểm tra | Kết quả |
| --- | --- |
| A: validation, sửa, xem trước, hủy, gửi, thu hồi, coach và quiz | PASS |
| B: lời giải có nguồn, thiếu căn cứ, sửa nháp, kết quả quyết định | PASS |
| C: không gợi ý trước quyền, trigger thời gian, căn cứ, bác bỏ | PASS |
| C: trigger quay lại, opt-in chia sẻ, tắt xóa tín hiệu | PASS |
| A/B/C: cùng context/quiz, reset, không tràn ngang desktop, không gọi mạng ngoài | PASS |

Đã xem ảnh render màn đầu của ba option để kiểm tra bố cục và chữ.
Chưa kiểm tra máy của tester ngoài nhóm. Không ghi “không cần giải thích” như một finding khi chưa test người thật.

## 4. Gate 4 — bước còn cần kiểm tra người thật

- [x] Build ba option, nội dung chung và cơ chế khác nhau.
- [x] Luồng mở/task/reset được kiểm tra tự động.
- [x] Control/recovery và annotations đã có.
- [ ] Người không build tự mở và làm cùng task qua A/B/C, reset mà không cần giải thích.
- [ ] Nhóm ghi người kiểm, lỗi quan sát và kết quả kiểm tra trên máy khác.

Sẵn sàng mang đi kiểm tra/test. Chưa coi QA tự động là Gate 4 được coach xác nhận.


## Cập nhật Option C theo VLearn · 05/10/2026

[Chi tiết bản cải tiến](docs/option-c-vlearn.md) · [Nguồn trích đoạn công khai](reference/vlearn/README.md). Màn học mô phỏng dùng nhận diện xanh/đỏ; A/B cùng chrome và fixture. C giữ quyền bật/tắt, căn cứ gợi ý, preview và recovery. Bỏ social proof giả lập để tránh dẫn dắt. QA 5 nhóm pass; Gate 4 kiểm tra người không build vẫn chưa hoàn thành.
