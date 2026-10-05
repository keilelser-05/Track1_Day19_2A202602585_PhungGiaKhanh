# Option C — màn học mô phỏng theo nhận diện VLearn

## Phạm vi và nguồn

Đọc giao diện/DOM/CSS công khai tại https://vlearn.dev/welcome ngày 05/10/2026. [Trích đoạn tham chiếu](../reference/vlearn/README.md) giữ một phần HTML và biến màu phía client. Không có source repository hoặc màn học sau đăng nhập; màn lớp học dưới đây do nhóm dựng để test ý tưởng.

Mở [Option C](../options/option-c.html) trực tiếp bằng trình duyệt. Giữ cùng task, slide RAG 5–7 và quiz với A/B. Header, thanh bài học, màu xanh/đỏ và components được dùng chung cả ba; không thêm onboarding, dashboard hoặc API thật.

## Ba trạng thái chính

1. **Bài học:** slide 6 + quiz; gợi ý mặc định tắt. Người học tự quyết định quyền dùng thời gian ở slide/số lượt quay lại. Không bật vẫn tiếp tục học hoặc tự hỏi được.
2. **Tương tác quan trọng:** sau bật, ở slide 6 khoảng 20 giây hoặc quay lại lần 2 thì AI hỏi có cần hỗ trợ. Khối gợi ý không che tài liệu; nút căn cứ cho biết tín hiệu, kèm giới hạn “không chứng minh chưa hiểu”. User chọn giải thích, nhờ coach, để sau, bác bỏ hoặc tắt.
3. **Quyết định/kết quả:** dùng lời giải rồi thử quiz, hoặc sửa/xem trước nội dung gửi coach; tên và tín hiệu mặc định không chia sẻ. Gửi và phản hồi đều mô phỏng. Có hủy, sửa, thu hồi trước mở phản hồi, quay lại và reset.

Ngưỡng 20 giây là giá trị dựng cho prototype, không phải kết luận từ phỏng vấn hay ngưỡng đã được chứng minh. Tối đa 2 gợi ý/phiên; không tự gắn cờ hoặc báo coach. Tắt xóa tín hiệu; reset xóa cả nội dung phiên.

## Khi test

Dùng đúng outcome task chung trên màn. Không hướng dẫn bật gợi ý hoặc chỉ cách kích hoạt. Nếu tester không bật, ghi nhận hành vi đó; không coi là lỗi của tester. Annotation/kỳ vọng nằm trong [tài liệu riêng](prototype-annotations.md), không hiện trên frame.

QA tự động và ảnh render chỉ kiểm tra phần mềm; Gate 4 còn cần một người không build tự mở/thao tác/reset. Chưa có feedback hoặc kết luận option tốt nhất.

## Code cần chỉnh khi iteration

- `shared/prototype.css`: nhận diện và layout chung.
- `shared/prototype.js`: fixture, trạng thái, consent, trigger, căn cứ và recovery. `controlsC()`, `start()`, `disable()` và `setInterval()` là phần C.
- `scripts/build_prototypes.py`: build lại 3 HTML standalone sau khi sửa shared.
- `scripts/check_prototypes.cjs`: kiểm tra flow, consent, reset và hoạt động offline.
