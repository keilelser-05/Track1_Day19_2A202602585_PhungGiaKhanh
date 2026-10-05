# Tham chiếu VLearn công khai

- Nguồn: https://vlearn.dev/welcome, kiểm tra 05/10/2026.
- Đã đọc DOM công khai, stylesheet đã tải trong trình duyệt và thông số màu/font. Hai file excerpt giữ một phần HTML nhận diện và biến CSS thực tế.
- Đây là trích đoạn phía client, không phải repository mã nguồn gốc, backend, model hoặc màn lớp học sau đăng nhập. Lệnh tải HTML trực tiếp trả HTTP 403; quan sát trình duyệt công khai hoạt động.
- Prototype viết lại độc lập, dùng xanh #134d8b, đỏ #c72127, nền trắng/xám. Không chạy script, analytics hoặc đăng nhập của VLearn. Không tải logo/font từ server trong phiên test.
- Màn học, nội dung RAG và các phản hồi là fixture mô phỏng của nhóm. Không khẳng định đây là thiết kế màn học thật của VLearn.

## Capture thêm

- `welcome-public-markup.html`: main DOM công khai đã render, không kèm script ứng dụng/analytics.
- `welcome-public.css`: stylesheet public của trang welcome trong repo.
- `public-client-styles.json`: CSS công khai tải được trong trình duyệt (bản đầy đủ trong ZIP).
- `vlearn-public-interaction.jpg`, `vlearn-public-login.jpg`: ảnh chụp màn public.
- `capture-manifest.json`: nguồn, phạm vi và giới hạn truy cập.

Không đăng nhập thành công; không thu thập credential, cookie, API traffic hoặc màn riêng. Code gốc backend/React chưa có; DOM/CSS public không tương đương source repository.
