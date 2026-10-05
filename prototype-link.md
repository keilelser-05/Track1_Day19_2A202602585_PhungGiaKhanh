# Prototype Link — H3201 · Case C

> Trạng thái: **chưa build / chưa có link chạy được**. Bản nháp cơ chế: [Design sheet](three-option-design-sheet.md).
> Người nộp: Phùng Gia Khánh — 2A202602585. Chưa chốt phân công.

| Option | Cơ chế dự kiến | Người phụ trách | Link | Trạng thái |
| --- | --- | --- | --- | --- |
| A | User tự chọn và viết; AI chỉ định dạng khi được yêu cầu | Chưa chốt | Chưa có | Chưa build |
| B | User bắt đầu trao đổi; AI hỏi làm rõ và soạn nháp | Chưa chốt | Chưa có | Chưa build |
| C | AI gợi ý từ tín hiệu được cho phép; user kiểm tra | Chưa chốt | Chưa có | Chưa build |

## Phạm vi đề xuất

- 3 trạng thái mỗi option: context chung → tương tác → xem trước/kết quả quyết định.
- Cùng slide RAG, quiz, dữ liệu giả lập, task và components.
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
