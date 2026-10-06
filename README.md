# Track 1 · Day 19 — Case C: AI Support Radar

**Người nộp:** Phùng Gia Khánh · **Mã học viên:** 2A202602585 · **Nhóm:** H3201.
**Option phụ trách:** C. Cập nhật 06/10/2026 từ bản nhóm của Phan Duy Thanh và feedback PN05 do Khánh cung cấp.

Bài này so sánh ba cách giúp người học làm rõ nội dung để học tiếp: tự gửi coach (A), chủ động hỏi AI (B), hoặc nhận lời hỏi thăm từ AI sau khi bật quyền (C). Cả ba giữ quyền quyết định ở người học.

## Các phần của bài

| Chặng | Kết quả | Tài liệu |
| --- | --- | --- |
| 1 — Evidence và giả thuyết | Tổng hợp PN1, PN2, PN3, PN04; có evidence trái giả thuyết và giới hạn | [Design Sheet — phần 1](three-option-design-sheet.md), [PN04](note/notes_khanh_pn04.md) |
| 2 — Ba phương án | Cùng người dùng, bối cảnh, nhiệm vụ và nội dung; khác cơ chế khởi xướng/hỗ trợ | [Design Sheet — phần 2](three-option-design-sheet.md) |
| 3 — Quyền người học | Bốn nguyên lý Human–AI; Act/Ask/Don’t Act; căn cứ, sửa/hủy và phục hồi | [Design Sheet — phần 3](three-option-design-sheet.md) |
| 4 — Prototype | Ba HTML; 3 trạng thái; cùng slide RAG 5–7 và quiz, có reset | [Mở bộ mẫu](index.html), [link và QA](prototype-link.md), [annotation](docs/prototype-annotations.md) |
| 5 — Kịch bản test | Câu hỏi bối cảnh, task chung, đúng 5 mục quan sát; tách kế hoạch khỏi phiên thực tế | [Test prompt](test/test-prompt.md), [note câu hỏi](test/interview-guide.md) |
| 6 — Feedback và tổng hợp | Cá nhân: PN05 thử đủ A/B/C, chọn B. Nhóm: ba notes T1/T2/PN05; T3 là nguồn thứ cấp | [Feedback cá nhân](prototype-feedback-note.md), [tổng hợp nhóm](group-feedback-synthesis.md) |

## Giả thuyết vấn đề

Khi tự học nội dung khó, học viên cần làm rõ chỗ vướng để tiếp tục. Một số người có thể chưa biết cách mô tả hoặc ngại hỏi; người hỗ trợ có thể chưa biết vị trí vướng. Việc tra cứu và chờ giải đáp có thể làm mất thời gian.

Đây là giả thuyết. PN2 và PN04 cho thấy người học đã chủ động hỏi, nên không mặc định mọi người đều im lặng. PN04 là cuộc phỏng vấn Case C với câu chuyện cần làm rõ nhận xét bài tập; chưa chứng minh nhu cầu AI theo dõi.

## Ba cơ chế

| A | B | C |
| --- | --- | --- |
| Người học tự chọn chỗ vướng, viết câu hỏi, xem trước rồi gửi coach | Người học hỏi AI, kiểm tra nguồn, hỏi tiếp hoặc chuyển coach | Sau khi người học bật quyền, AI dùng tín hiệu trong phiên để hỏi xác nhận rồi hỗ trợ theo lựa chọn |

Chung: slide 6 làm điểm bắt đầu, mini-deck 5–7, quiz và phản hồi soạn sẵn. Nhiệm vụ: làm rõ khác biệt giữa truy xuất tài liệu và sinh câu trả lời, trả lời quiz hoặc quyết định cách tìm hỗ trợ tiếp.

## Mở prototype

1. Tải repo bằng **Code → Download ZIP**, giải nén.
2. Mở `index.html` bằng Chrome/Edge trên laptop hoặc desktop.
3. Chọn A/B/C. Dùng **Làm lại từ đầu** để về context ban đầu.

[Option A](options/option-a.html) · [Option B](options/option-b.html) · [Option C](options/option-c.html).
GitHub hiển thị HTML như mã nguồn; cần tải file để thao tác. Không cần server/API.

C mặc định tắt gợi ý. Khi bật, ngưỡng 12 giây hoặc quay lại lần 2 kèm 5 giây đọc chỉ là tham số bản thử. Luồng: tín hiệu → hỏi “đang đọc kỹ hay cần làm rõ?” → chọn khái niệm → giải thích/ví dụ hoặc sửa nháp coach → tiếp tục học. Không tự gửi coach. Có từ chối, tắt, bỏ tín hiệu, xem trước và reset.

Giao diện theo [design.md](design.md), đối chiếu ảnh VLearn. Màn học và câu trả lời đều mô phỏng; không kết nối tài khoản hoặc coach thật. [Fixture](shared/content-fixture.md) · [Mô tả C](docs/option-c-vlearn.md).

## Kết quả test và bài học

PN05, người ngoài nhóm, đã thử đủ A/B/C: A vướng luồng; B vướng giao diện; C vướng cả luồng và giao diện. Người test tự mở, thực hiện nhiệm vụ và reset cả ba mà không cần hướng dẫn. PN05 chọn **B** vì tuy hơi vướng giao diện nhưng vận hành rất trơn tru, hoàn thiện. Với C, đã dùng gợi ý/hỏi đáp và đề nghị cải thiện khung hỗ trợ cùng luồng hoạt động.

Khánh rút ra rằng sự đơn giản, linh hoạt nhưng hoàn thiện là những tiêu chí quan trọng; không có điều gì bất ngờ và sẽ áp dụng các tiêu chí này nhiều hơn trong những lần sau. [Reflection](contribution.md).

T1 chọn C; T2 và PN05 chọn B. Ba notes này đủ phần feedback; chưa dùng T3 như note độc lập hoặc đếm T4 thành người thứ tư. Khác biệt phiên bản/thứ tự và thiếu số đo học tập giới hạn kết luận về bản tốt nhất. [Đối chiếu nguồn](reference/day19-thanh/README.md).

**Một thay đổi tiếp theo đề xuất:** làm khung hỗ trợ C giữ rõ khái niệm đang hỏi và đường hỏi tiếp/chuyển coach/quay lại học. Đây là đề xuất từ feedback, chưa phải quyết định nhóm đã xác nhận hoặc bản sửa đã test. [Chi tiết](group-feedback-synthesis.md).

**Một điều chưa chứng minh:** C sau cải tiến có giúp người học tiếp tục thuận lợi và hiểu bài tốt hơn bản hiện tại không?

## Trạng thái các gate

| Gate | Trạng thái có căn cứ |
| --- | --- |
| 1 | Đủ tài liệu evidence, giả thuyết và điều chưa biết; chưa có xác nhận chấm |
| 2 | Đủ ba cơ chế, comparison contract và distance check |
| 3 | Đủ bảng Human–AI, căn cứ, kiểm soát và phục hồi |
| 4 | **Đạt tiêu chí test-ready:** PN05 ngoài nhóm tự mở, làm nhiệm vụ và reset cả A/B/C, không cần hướng dẫn |
| 5 | Đủ ba notes A/B/C và tổng hợp; **chờ nhóm xác nhận quyết định sửa/người phụ trách** để đánh dấu pass toàn bộ |

Đã cập nhật tài liệu theo xác nhận của Khánh. PN05 chọn B; chưa kết luận hiệu quả học tập hoặc nhu cầu sản phẩm đã được xác thực. Gate đạt tiêu chí tài liệu/test không thay cho xác nhận chấm của coach.

## Nguồn và khai báo

- [AI Support Log](ai-support-log.md): hỗ trợ thiết kế, code, QA, sắp xếp dữ liệu được cung cấp; không tạo evidence mới.
- [Đóng góp và reflection](contribution.md): thông tin thực tế và reflection theo ý Khánh đã cung cấp.
- [Nguồn Thành](reference/day19-thanh/README.md): ZIP commit `1db2f38730f6bb95f2fca13c33d570907f74bae0`; phân biệt bản nhóm/bản cá nhân và dữ liệu mâu thuẫn.
- QA tự động không thay cho test người thật. Bản ghi phỏng vấn chưa được nghe lại; không coi file audio placeholder là evidence.
