# Thiết kế prototype — AI Support Radar

Nguồn thiết kế chính cho các thay đổi UI trong repo. Ưu tiên desktop/laptop; không mở rộng mobile trong lab này.

- Ba option chung context, mini-deck RAG 5–7, quiz, task, phản hồi mẫu và components. Chỉ cơ chế yêu cầu hỗ trợ khác nhau.
- Nhận diện tham chiếu DOM/CSS công khai vlearn.dev/welcome: xanh #134d8b, đỏ #c72127, nền trắng/xám; màn lớp học dùng header trắng và nút trợ giảng xanh; launcher giữ nhận diện xanh/đỏ, bo góc 4–8px. Font dùng system fallback để chạy offline. Màn lớp học là mô phỏng, không phải màn sau đăng nhập đã trích xuất.
- Theo 5 ảnh màn học user cung cấp: header trắng 64px; danh mục bài học trái nền xanh xám nhạt; tài liệu ở giữa; khung trợ giảng phải chỉ hiện khi được mở. Slide mô phỏng nền xanh sage, tỉ lệ 16:9. Header, task và reset dùng chung A/B/C. Không nhãn “tốt nhất”, không giới thiệu lợi ích option với tester.
- Mỗi bản 3 trạng thái: bài học → tương tác hỗ trợ → quyết định/kết quả. Sửa, đóng và tiếp tục học không mất câu hỏi đang soạn. Reset xóa phiên và trả về slide 6.
- C mặc định tắt; không thu tín hiệu trước bật. Giải thích quyền dùng dữ liệu ngay nơi bật, có tắt/xóa tín hiệu. Không dùng ghi chú hoặc đáp án để suy luận.
- Nội dung mô phỏng phải ghi rõ cạnh kết quả. Coach không có cam kết thời gian thật. Nhãn căn cứ tài liệu không phải xác suất AI đúng.
- Tất cả trường gửi được xem trước; mặc định không kèm tên/tín hiệu. User được sửa, hủy và thu hồi trước phản hồi.
- Focus bàn phím rõ, dùng label thật, màu đủ tương phản, thông báo qua aria-live. Không tải font, thư viện, API hoặc dữ liệu ngoài.
- Annotation/kỳ vọng quan sát chỉ nằm trong docs/prototype-annotations.md, không nhúng vào giao diện tester.

- Cải tiến C: gợi ý thành khối cạnh tài liệu, không che bài học; bỏ social proof giả lập để tránh dẫn dắt tester. A/B giữ cùng chrome, fixture và task để so sánh.

- C phiên bản 2: nguồn/task từ fixture chung; Tutor giữ hội thoại theo slide, nguồn mở được, ghi chú riêng, dừng phản hồi, thu gọn và mở lại yêu cầu coach. Gợi ý dựa thời gian đọc hiển thị/lượt mở từng slide, cooldown và bác bỏ. Không hiện thông số test cho tester.

- Shell lớp học chung ở `shared/classroom-shell.js` và `.css`; header, danh mục, viewer, chuyển slide, quiz, ghi chú và reset là thao tác thật trong prototype. Không thêm công cụ PDF/zoom/vẽ chỉ để làm giống ảnh nếu chúng không phục vụ critical interaction.
- Hỗ trợ mặc định đóng; mở/đóng khung làm vùng slide co/giãn. C có gợi ý inline cạnh tài liệu, không phủ slide hoặc chặn nút. Khi sidebar đóng, reset vẫn có trên header.
- Không đưa email, tên tài khoản, tiến độ thật hoặc điểm yếu cá nhân từ ảnh vào giao diện/dữ liệu fixture. Avatar chỉ minh họa. Trang chủ/account menu ngoài scope Chặng 4.

- C hỏi xác nhận trước lời giải; gợi ý ngay trước slide để nhìn thấy. Phần cần giúp do user chọn, không suy ra từ thời gian. Màn xác nhận/chọn khái niệm nằm trong trạng thái critical interaction, không mở rộng sản phẩm.
