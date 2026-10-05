# Prototype Link — H3201 · Case C

> Trạng thái: **chưa build / chưa có link chạy được**. Bản nháp cơ chế: [Design sheet](three-option-design-sheet.md).
> Người nộp: Phùng Gia Khánh — 2A202602585. Chưa chốt phân công.

| Option | Cơ chế dự kiến | Người phụ trách | Link | Trạng thái |
| --- | --- | --- | --- | --- |
| A | User đánh dấu và gửi câu hỏi gắn slide cho coach; không suy luận | Chưa chốt | Chưa có | Chưa build |
| B | User hỏi; AI giải thích theo slide; chuyển coach khi chưa rõ | Chưa chốt | Chưa có | Chưa build |
| C | AI hỏi thăm từ thời gian/chuyển slide được cho phép; user quyết định | Chưa chốt | Chưa có | Chưa build |

## Phạm vi đề xuất

- 3 trạng thái mỗi option: context chung → tương tác → xem trước/kết quả quyết định.
- Cùng mini-deck slide RAG 5–7, quiz, lời giải AI/coach mô phỏng, task và components; xem [fixture chung](shared/content-fixture.md).
- Có sửa, hủy, tự viết và reset; không tự gửi yêu cầu.
- Không cần API/model thật. Không dùng thông tin học viên thật làm fixture.
- Annotation về kỳ vọng và điều cần quan sát đặt ngoài frame tester.
- [Task test đề xuất](test/test-prompt.md).

## QA — chỉ đánh dấu sau khi kiểm tra thật

| Hạng mục | A | B | C |
| --- | --- | --- | --- |
| Người ngoài mở được | Chưa kiểm | Chưa kiểm | Chưa kiểm |
| Tự thực hiện cùng task | Chưa kiểm | Chưa kiểm | Chưa kiểm |
| Reset về context | Chưa kiểm | Chưa kiểm | Chưa kiểm |
| Hiểu giới hạn/căn cứ của AI | Chưa kiểm | Chưa kiểm | Chưa kiểm |
| Sửa hoặc từ chối khi AI sai | Chưa kiểm | Chưa kiểm | Chưa kiểm |
| Độ hoàn thiện tương đương | Chưa kiểm | Chưa kiểm | Chưa kiểm |

- [ ] Điền link thật và các bước mở/reset cho từng option.
- [ ] Người không build thử từng option.
- [ ] Ghi lỗi và người kiểm.
- [ ] Đạt Gate 4 trước khi test ngoài nhóm.
