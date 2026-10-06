# Group Feedback Synthesis — H3201 · Case C

Người nộp: Phùng Gia Khánh — 2A202602585. Cập nhật 06/10/2026.
Nguồn: [feedback PN05](prototype-feedback-note.md), [T1](feedback-note/feedback-phanduythanh.md), [T2](feedback-note/feedback-buihainam.md), [tổng hợp Thành](reference/day19-thanh/group-feedback-synthesis-original.md).

Đây là tổng hợp tài liệu được cung cấp, chưa xác minh bản ghi. PN05 đã thử đủ A/B/C theo xác nhận bổ sung của Khánh; T1/T2 có notes A/B/C; T3 chỉ có tóm tắt thứ cấp. Không đếm T4 thành người thứ tư hoặc nhập chi tiết nguồn T4 vào PN05.

## 1. Evidence và lựa chọn

| Tester | Người thực hiện / nguồn | Trải nghiệm | Hành vi/feedback ghi nhận | Lựa chọn và đánh đổi | Giới hạn |
| --- | --- | --- | --- | --- | --- |
| T1 | Phan Duy Thanh, note độc lập nguồn | A → B → C | Dừng ở textarea A; dùng chip B; chờ gợi ý C và chọn giải thích | Chọn C vì hệ thống hỏi trước; có thể bị gián đoạn khi gợi ý sai | Mặc định C bật/20 giây trong nguồn khác bản Khánh; ảnh hưởng học lại |
| T2 | Bùi Hải Nam, note độc lập nguồn | B → A → C | Hỏi tự do B, sửa nháp coach; chọn kèm tên ở A; để gợi ý C lại sau | Chọn B vì hỏi nhanh/tự do, không chờ coach; rủi ro tin lời AI sai | Chưa xác minh nguyên nhân để sau; không mặc định đã hiểu bài |
| T3 | Chử Trần Phương Nam, chỉ tổng hợp Thành | Nguồn ghi thử A/B/C; thứ tự chưa có | Nguồn ghi do dự danh tính A, đọc chip B, dùng giải thích C | Nguồn ghi chọn B vì tự đọc và không phải hỏi người | Chưa có note độc lập; không đếm thành feedback đủ điều kiện |
| PN05 | Phùng Gia Khánh, xác nhận trực tiếp | Đủ A/B/C; thứ tự đầy đủ chưa cung cấp | A vướng luồng; B vướng giao diện; C vướng cả hai. Tự mở/task/reset cả ba, không cần hướng dẫn; dùng gợi ý/hỏi đáp C | **Chọn B** vì vận hành trơn tru, hoàn thiện; chấp nhận điểm vướng giao diện | Chưa có kết quả quiz cụ thể, thời gian và bước vướng chi tiết |

Trong ba notes riêng T1/T2/PN05, hai người chọn B và một người chọn C. Đây là mô tả mẫu nhỏ từ các phiên/phiên bản có khác biệt, chưa đủ khẳng định B tốt nhất cho mọi học viên. T3 không được đếm thêm.

## 2. Pattern và khác biệt

| Nhận xét | Căn cứ | Mức kết luận |
| --- | --- | --- |
| T1 và PN05 đều sử dụng hỗ trợ từ gợi ý C | T1 bấm giải thích; PN05 dùng gợi ý/xem hỏi đáp | Hành vi sử dụng lặp lại ở hai nguồn, nhưng prototype/điều kiện khác; chưa chứng minh giá trị học tập |
| Đón nhận C khác nhau | T1 chọn C; T2 để sau và chọn B; PN05 dùng C nhưng chưa hài lòng và chọn B | Khác biệt cần giữ, không biến việc bấm hỗ trợ thành yêu thích C |
| Nhu cầu tự diễn đạt khác nhau | T1 khó viết câu hỏi A; T2 tự hỏi B và sửa nháp | Gợi ý rằng cần cả lựa chọn sẵn và hỏi tiếp; chưa suy ra đặc điểm ổn định của từng nhóm học viên |
| Giao diện và độ linh hoạt C là điểm cần kiểm tra | PN05 nêu hai điểm này | Một người ghi nhận, chưa phải pattern nhiều tester |

Chưa đủ dữ liệu để khẳng định cơ chế C phát hiện đúng khó khăn. Các diễn giải như “T2 không cần C” hoặc “T1 không tự nhận ra chỗ vướng” là giả thuyết từ nguồn, không phải fact.

## 3. Một Next Change đề xuất

| Mục | Nội dung |
| --- | --- |
| Thay đổi duy nhất | **Làm khung hỗ trợ C giữ rõ ngữ cảnh khái niệm đang hỏi và đường tiếp tục**: hỏi tiếp, chuyển coach hoặc quay về slide |
| Option | C |
| Nguyên lý | Control & Recovery — người học chọn cách tiếp tục và sửa khi hỗ trợ chưa phù hợp |
| Căn cứ | PN05 đề nghị sửa khung giao diện/luồng và thấy hỗ trợ chưa linh hoạt; T2 nguồn muốn tự đặt câu hỏi/sửa nháp |
| Cách cụ thể hóa | Đối chiếu bản hiện có theo design.md; kiểm tra chỗ chuyển từ gợi ý sang hỏi đáp, giữ khái niệm/slide và hiển thị rõ lựa chọn tiếp. Không thêm dashboard/onboarding/API |
| Quan sát ở vòng sau | Tester tự nhận biết đang hỏi khái niệm nào, tự hỏi tiếp hoặc đổi đường hỗ trợ, quay lại học không cần chỉ nút; ghi bước do dự và phản hồi cụ thể |
| Trạng thái | Đề xuất để Khánh/nhóm review; chưa chốt, chưa triển khai hoặc test bản sửa trong lượt này |
| Phụ trách | Khánh phụ trách C; phân công thực hiện thay đổi nhóm chưa xác nhận |

Bản Thành đề xuất thêm tín hiệu cụ thể ở popup C. Bản C hiện có đã thể hiện căn cứ; PN05 chưa ghi nhận đọc căn cứ. Vì vậy không ghi đây là một thay đổi mới đã làm hoặc một nhu cầu được PN05 xác nhận.

## 4. Một Still Unproven trọng tâm

**Luồng hỗ trợ C sau cải tiến có giúp người học tự tiếp tục thuận lợi, đồng thời tăng mức hiểu bài so với bản hiện tại không?**

PN05 đã chọn B, nên câu hỏi lựa chọn A/B/C trước đây đã được trả lời. Tuy nhiên, chưa có số đo hiểu bài, thời gian, bước vướng cụ thể hoặc dữ liệu sau sửa C. Lựa chọn và khả năng thao tác không tự chứng minh hiệu quả học tập.

Vòng sau: dùng cùng task/fixture, ghi bước do dự ở khung C và cách người học hỏi tiếp/quay về bài; kiểm tra câu trả lời kiến thức và lý do. Ghi thứ tự và phiên bản để đánh giá ảnh hưởng học lại.

## 5. Kết luận và Gate 5

T1 chọn C; T2 và PN05 chọn B. PN05 đánh giá B vận hành trơn tru, hoàn thiện dù giao diện còn vướng. C cần cải thiện luồng và khung hỗ trợ; đơn giản, linh hoạt và hoàn thiện là bài học Khánh rút ra. Hướng sửa C ở phần 3 là đề xuất có căn cứ, chưa ghi thành quyết định chung đã được nhóm xác nhận.

- [x] Có ba Feedback Notes riêng T1/T2/PN05, mỗi người đã thử A/B/C theo nguồn cung cấp.
- [x] Có bảng nguồn, hành vi, lựa chọn/đánh đổi và giới hạn.
- [x] Giữ khác biệt và dữ liệu chưa thuận giả thuyết; tách dữ liệu khỏi diễn giải.
- [x] Có một Next Change đề xuất và một Still Unproven trọng tâm.
- [ ] Nhóm xác nhận quyết định sửa và người phụ trách.

**Gate 5:** phần feedback và tổng hợp đã đủ nội dung; chưa đánh dấu pass toàn bộ vì chưa có xác nhận quyết định sửa chung. Không coi đây là coach đã chấm pass hoặc sản phẩm đã được xác thực. Khác biệt phiên bản và mức chi tiết của notes được giữ rõ để người đọc đánh giá giới hạn so sánh.
