# Thiết kế prototype — AI Support Radar

Nguồn thiết kế chính cho các thay đổi UI trong repo. Ưu tiên desktop/laptop; không mở rộng mobile trong lab này.

- Ba option chung context, mini-deck RAG 5–7, quiz, task, phản hồi mẫu và components. Chỉ cơ chế yêu cầu hỗ trợ khác nhau.
- Nhận diện tham chiếu DOM/CSS công khai vlearn.dev/welcome: xanh #134d8b, đỏ #c72127, nền trắng/xám; header xanh đậm, nút hành động đỏ, bo góc 4–8px. Font dùng system fallback để chạy offline. Màn lớp học là mô phỏng, không phải màn sau đăng nhập đã trích xuất.
- Hai cột: nội dung học bên trái; tương tác hỗ trợ bên phải. Header, task và reset luôn ở cùng vị trí. Không nhãn “tốt nhất”, không giới thiệu lợi ích option với tester.
- Mỗi bản 3 trạng thái: bài học → tương tác hỗ trợ → quyết định/kết quả. Sửa, đóng và tiếp tục học không mất câu hỏi đang soạn. Reset xóa phiên và trả về slide 6.
- C mặc định tắt; không thu tín hiệu trước bật. Giải thích quyền dùng dữ liệu ngay nơi bật, có tắt/xóa tín hiệu. Không dùng ghi chú hoặc đáp án để suy luận.
- Nội dung mô phỏng phải ghi rõ cạnh kết quả. Coach không có cam kết thời gian thật. Nhãn căn cứ tài liệu không phải xác suất AI đúng.
- Tất cả trường gửi được xem trước; mặc định không kèm tên/tín hiệu. User được sửa, hủy và thu hồi trước phản hồi.
- Focus bàn phím rõ, dùng label thật, màu đủ tương phản, thông báo qua aria-live. Không tải font, thư viện, API hoặc dữ liệu ngoài.
- Annotation/kỳ vọng quan sát chỉ nằm trong docs/prototype-annotations.md, không nhúng vào giao diện tester.

- Cải tiến C: gợi ý thành khối cạnh tài liệu, không che bài học; bỏ social proof giả lập để tránh dẫn dắt tester. A/B giữ cùng chrome, fixture và task để so sánh.
