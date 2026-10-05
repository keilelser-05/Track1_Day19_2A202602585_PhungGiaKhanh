# Đối chiếu ảnh VLearn và prototype

Nguồn: 5 ảnh user cung cấp ngày 05/10/2026, đọc trực tiếp từ file. Ảnh là tư liệu giao diện, không phải source repository hoặc kết quả test prototype. Không đưa ảnh gốc có thông tin tài khoản vào repo công khai.

| Ảnh | Điều nhìn thấy | Điều chỉnh áp dụng |
|---|---|---|
| 113701 | Header trắng; danh mục trái; tài liệu lớn ở giữa; thanh công cụ dưới slide | Dựng shell lớp học, slide 16:9, sidebar có mục đang học và chuyển trang dưới tài liệu |
| 113708 | Cuộn vùng học; nút chuyển hoạt động ở cuối nội dung | Vùng bài học cuộn riêng; nút đi tới quiz; reset quay về context |
| 113717 | Trợ giảng ở panel phải; vùng tài liệu co lại; ô hỏi ở panel | Hỗ trợ mặc định đóng; nút header mở dock phải; đóng không xóa hội thoại; nguồn mở đúng slide |
| 113728 | Menu tài khoản và thông tin nhận diện | Không sao chép thông tin cá nhân; account menu ngoài scope critical interaction |
| 113942 | Trang chủ, danh sách khóa học, streak và kiến thức yếu | Không build dashboard; giữ bài học/task chung để tránh mở rộng scope |

## Option C được thêm vào lớp học thế nào?

1. Vào tài liệu mẫu RAG, hỗ trợ đóng, gợi ý mặc định tắt. User có thể mở AI, ghi chú, chọn slide hoặc làm quiz.
2. Sau bật, tín hiệu đọc/quay lại theo slide có thể tạo gợi ý inline ngay trước tài liệu. Header có dấu “Có gợi ý”; khối hỏi xác nhận hiện ngay cạnh vùng slide. Gợi ý nêu vị trí, căn cứ và giới hạn; không tự mở chat hay báo coach. User xác nhận đang đọc kỹ hoặc cần làm rõ; nếu cần, tự chọn khái niệm rồi giải thích/ví dụ hoặc nhờ coach.
3. Khung trợ giảng mở theo lựa chọn user; giữ hội thoại/nguồn/ghi chú. Gửi coach qua bản nháp, preview và xác nhận; hoặc trở lại quiz. Mọi phản hồi/gửi đều mô phỏng.

A/B cũng dùng shell mới để giữ context, fixture và style chung. Chỉ cơ chế hỗ trợ khác. Những thay đổi dựa trên ảnh là bản dựng lại, không phải mã gốc lấy từ tài khoản VLearn.

## Kiểm tra

QA phần mềm bao gồm sidebar, chuyển slide, đóng/mở dock, giữ dữ liệu, reset khi sidebar bị đóng, viewport 1366×1000 và 1866×1000. Xem `../test/prototype-checks.json`. Gate 4 người không build tự thao tác vẫn cần test thật.
