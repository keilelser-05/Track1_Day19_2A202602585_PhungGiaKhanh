# Fixture chung — A/B/C

> Nội dung và số liệu mô phỏng cho prototype, không phải evidence phỏng vấn. Không gọi model hoặc gửi coach thật.

## Context và mini-deck

- Slide 5: Mô hình có thể trả lời thiếu căn cứ khi không có tài liệu phù hợp.
- Slide 6: RAG (Retrieval-Augmented Generation) kết hợp truy xuất tài liệu với sinh câu trả lời.
- Slide 7: (1) nhận câu hỏi; (2) tìm đoạn liên quan; (3) đưa đoạn cùng câu hỏi vào mô hình; (4) mô hình sinh câu trả lời dựa trên ngữ cảnh.

## Quiz chung

“Trong RAG, bước nào tìm tài liệu liên quan?”
A. Truy xuất; B. Sinh câu trả lời; C. Gửi thông báo; D. Chấm điểm.
Đáp án: A. Câu quiz chỉ giúp test tương tác; một đáp án đúng không chứng minh hiểu sâu.

## Lời giải AI mô phỏng — dùng chung B/C

“Truy xuất tìm các đoạn liên quan. Sinh câu trả lời dùng câu hỏi cùng các đoạn đó để tạo phản hồi. Ví dụ hỏi chính sách đổi trả: truy xuất tìm đoạn chính sách, rồi mô hình dùng đoạn đó để trả lời.”
Nguồn: slide 6–7. Mức hỗ trợ từ tài liệu: đủ cho phân biệt hai bước, không bảo đảm lời giải luôn đúng.
Nếu hỏi cách chọn top-k: “Slide chưa nói cách chọn k; bạn có thể gửi câu hỏi này cho coach.”

## Phản hồi coach mô phỏng — dùng chung A/B/C

“Bạn có thể hình dung truy xuất là tìm trang tài liệu cần đọc, còn sinh câu trả lời là dùng trang đó để trả lời câu hỏi. Hãy thử chỉ ra bước tìm tài liệu trong quiz.”
Không ghi thời gian phản hồi thực tế hoặc giả định coach luôn sẵn sàng.

## Trigger và dữ liệu

C: mặc định tắt; sau khi user bật quyền, dùng thời gian ở slide 6 ≥20 giây hoặc quay lại slide lần 2 để mở một gợi ý; tối đa 2 lần/phiên. Ngưỡng là lựa chọn thiết kế, chưa đo hiệu quả.
Không dùng ghi chú, đáp án quiz hoặc nội dung chat để suy luận nhu cầu.
Gợi ý: “Bạn đang ở slide này khá lâu. Bạn muốn làm rõ phần nào không? Đây chỉ là suy đoán.”
B: “12 bạn khác đánh dấu” là số minh họa, ghi rõ ngay cạnh số; không có dữ liệu học viên thật.

## Gửi / reset

Mặc định gửi ẩn danh; user có thể chọn kèm tên giả lập, xem trước nội dung rồi gửi/hủy.
Thẻ gồm slide, câu hỏi, điều đã thử do user cung cấp và tín hiệu user đồng ý chia sẻ.
“Đã gửi” là mô phỏng. Có sửa/thu hồi theo trạng thái; không hứa xóa một tin đã được người nhận đọc.
Reset xóa lựa chọn/nháp/tín hiệu phiên và trả C về tắt. Tắt C dừng theo dõi, xóa tín hiệu phiên; vẫn dùng được A/B và quiz.
“Để sau” không mở lại gợi ý trên cùng slide đến khi user rời rồi quay lại; tối đa 2 gợi ý/phiên. “Không cần giúp” không tạo cờ khó khăn. Tín hiệu C mặc định không chia sẻ; user chọn trường chia sẻ trước gửi.
