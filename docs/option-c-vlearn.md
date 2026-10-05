# Option C — màn học mô phỏng theo nhận diện VLearn

## Phạm vi và nguồn

Đọc giao diện/DOM/CSS công khai tại https://vlearn.dev/welcome ngày 05/10/2026. [Trích đoạn tham chiếu](../reference/vlearn/README.md) giữ một phần HTML và biến màu phía client. Không có source repository hoặc màn học sau đăng nhập; màn lớp học dưới đây do nhóm dựng để test ý tưởng.

Mở [Option C](../options/option-c.html) trực tiếp bằng trình duyệt. Giữ cùng task, slide RAG 5–7 và quiz với A/B. Header, thanh bài học, màu xanh/đỏ và components được dùng chung cả ba; không thêm onboarding, dashboard hoặc API thật.

## Ba trạng thái chính

1. **Bài học:** slide 6 + quiz; gợi ý mặc định tắt. Người học tự quyết định quyền dùng thời gian ở slide/số lượt quay lại. Không bật vẫn tiếp tục học hoặc tự hỏi được.
2. **Tương tác quan trọng:** sau bật, ở bất kỳ slide mẫu 5–7 khoảng 45 giây đọc hoặc quay lại lần 2 kèm ít nhất 15 giây đọc thì AI hỏi có cần hỗ trợ. Khối gợi ý không che tài liệu; nút căn cứ cho biết tín hiệu, kèm giới hạn “không chứng minh chưa hiểu”. User chọn giải thích, nhờ coach, để sau, bác bỏ hoặc tắt.
3. **Quyết định/kết quả:** dùng lời giải rồi thử quiz, hoặc sửa/xem trước nội dung gửi coach; tên và tín hiệu mặc định không chia sẻ. Gửi và phản hồi đều mô phỏng. Có hủy, sửa, thu hồi trước mở phản hồi, quay lại và reset.

Ngưỡng 45/15 giây là giá trị dựng cho prototype, không phải kết luận từ phỏng vấn hay ngưỡng đã được chứng minh. Chỉ tính khi trang hiển thị, đang học và không nhập câu hỏi/ghi chú; ngừng tính sau 90 giây không tương tác. Giãn cách gợi ý ít nhất 60 giây, tối đa 2 gợi ý/phiên; bác bỏ sẽ ngừng gợi ý slide đó tới khi tắt/bật lại. không tự gắn cờ hoặc báo coach. Tắt xóa tín hiệu; reset xóa cả nội dung phiên.

## Khi test

Dùng đúng outcome task chung trên màn. Không hướng dẫn bật gợi ý hoặc chỉ cách kích hoạt. Nếu tester không bật, ghi nhận hành vi đó; không coi là lỗi của tester. Annotation/kỳ vọng nằm trong [tài liệu riêng](prototype-annotations.md), không hiện trên frame.

QA tự động và ảnh render chỉ kiểm tra phần mềm; Gate 4 còn cần một người không build tự mở/thao tác/reset. Chưa có feedback hoặc kết luận option tốt nhất.

## Code cần chỉnh khi iteration

- `shared/prototype.css`: nhận diện và layout chung.
- `shared/lesson-fixture.js`: slide, task, lời giải và phản hồi coach chung A/B/C.
- `shared/prototype.js`: engine A/B.
- `shared/radar-c.js`, `shared/radar-c.css`: engine C, hội thoại, consent, tín hiệu theo từng slide, ghi chú riêng, preview và recovery.
- `scripts/build_prototypes.py`: build lại 3 HTML standalone sau khi sửa shared.
- `scripts/check_prototypes.cjs`: kiểm tra flow, consent, reset và hoạt động offline.

## Cải tiến hoạt động lần 2

- Câu hỏi tự do được ghép với các nhánh phản hồi mẫu: RAG, căn cứ sai/đúng, ví dụ, quy trình hoặc yêu cầu làm rõ. Đây là xử lý theo quy tắc, không hiểu mọi câu như model thật.
- Hội thoại giữ khi đổi slide; nút nguồn mở đúng slide. Có trạng thái đang phản hồi và dừng; dừng/reset hủy kết quả đang chờ.
- Gợi ý gắn với slide đã tạo tín hiệu, không đổi căn cứ khi người học chuyển trang. Bản nháp gửi coach nhận đúng vị trí đó.
- Ghi chú giữ riêng trong phiên; không dùng để suy đoán, không tự kèm yêu cầu coach. Yêu cầu đã gửi có thể mở lại sau khi quay về bài học.
- Scope vẫn 3 trạng thái chính; tab, sửa nháp và mở nguồn là biến thể quanh tương tác quan trọng. C có thêm thao tác giữ ngữ cảnh, nên phải quan sát ảnh hưởng khi so sánh A/B/C; không quy mọi khác biệt lựa chọn chỉ cho cơ chế AI chủ động.

## Tư liệu thực tế và giới hạn

Đã chụp trang public mô tả vòng học và màn đăng nhập; lưu DOM công khai cùng CSS tải trong trình duyệt. Xem `reference/vlearn/capture-manifest.json`. Đăng nhập bị duyệt tự động từ chối vì chưa có xác nhận rõ quyền dùng tài khoản; không lấy mã hoặc ảnh màn học riêng. Prototype là bản thiết kế của nhóm, không khẳng định tái tạo đúng màn lớp học thật.

## Bản đối chiếu màn học từ 5 ảnh user cung cấp

[Đối chiếu từng ảnh](vlearn-screenshot-comparison.md). Shell dùng header trắng, sidebar trái, tài liệu giữa và dock trợ giảng phải; dock mặc định đóng. C giữ quyền bật riêng và gợi ý inline, không che slide. Danh mục, chuyển trang, quiz, sổ ghi chú và mở/đóng hỗ trợ hoạt động được.

Mã shell chung: `shared/classroom-shell.js` và `shared/classroom-shell.css`. Các file A/B/C được build từ cùng shell/fixture. Không sử dụng thông tin tài khoản từ ảnh; không build trang chủ, account menu hoặc công cụ PDF ngoài critical interaction.
