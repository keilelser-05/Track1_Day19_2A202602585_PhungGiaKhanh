# Three-Option Design Sheet — H3201 · Case C

> Người nộp: Phùng Gia Khánh — 2A202602585.
> Cập nhật 05/10/2026. Evidence được tóm tắt từ notes hiện có, chưa đối chiếu bản ghi.
> Chặng 2–3 là **bản nháp AI hỗ trợ, chờ nhóm review**; chưa phải quyết định đã chốt.

## 1. Chặng 1 — Evidence Snapshot

| Note / nguồn | Người tham gia đã kể gì? (tóm tắt note) | Diễn giải tạm |
| --- | --- | --- |
| PN1 — [lượt Thành](note/notes_phanduythanh.md) | Nhắc buổi học chiều hôm trước; không tìm được nội dung trên slide; gặp thuật ngữ tiếng Anh. Không kể cách xử lý tiếp. | Có thể khó xác định chỗ vướng; chưa biết do nội dung, cách tìm hay cách hỏi phỏng vấn. |
| PN2 — [lượt Bùi Hải Nam](note/notes_phuongnam.md) | Kể việc tìm trên mạng, hỏi bạn hoặc lab coach; tiếp tục tìm hiểu đến khi thấy ổn. | Có người chủ động tìm hỗ trợ. Làm yếu giả định mọi học viên đều im lặng hoặc không biết hỏi ai. |
| PN3 — [lượt Chử Trần Phương Nam](note/note_chutranphuongnam.md) | Kể gặp thuật ngữ RAG; hỏi AI rồi tra Google nếu chưa rõ; ước lượng khoảng 10 phút/thuật ngữ; nói ngại hỏi người khác. Kể cảm giác nhẹ nhõm khi giảng viên hỏi trước trong lớp code. | Có dấu hiệu rào cản ngại hỏi. Được hỏi trước không đồng nghĩa đồng ý bị AI theo dõi hoặc chia sẻ dữ liệu. |

- Lặp lại: các note đề cập nội dung/định nghĩa chưa hiểu. PN2 và PN3 kể dùng nguồn khác để tìm hiểu.
- Khác biệt: PN2 chủ động hỏi người khác, PN3 kể ngại hỏi.
- Chưa đủ căn cứ nói cả ba đều mắc lâu, bỏ qua bài hoặc có cùng hậu quả.
- PN1 có câu hỏi dẫn dắt về cảm xúc; không dùng cảm xúc làm bằng chứng độc lập cho việc tụt lại.
- [Note Khánh](note/notes_khanh.md) còn thiếu và mâu thuẫn metadata; chưa dùng để hỗ trợ giả thuyết.
- Tên file `notes_phuongnam.md` không trùng người phỏng vấn ghi trong file: Bùi Hải Nam. Cần nhóm xác nhận; không tự đổi danh tính.

### Hypothesis Problem tiếp tục từ Day 17

Khi **tự học một phần nội dung khó trên VLearn**, **học viên** gặp khó khăn trong việc **gỡ chỗ vướng để học tiếp** vì **người hỗ trợ chưa biết họ đang mắc ở đâu và họ chưa chủ động lên tiếng**, dẫn đến **tự xử lý tốn thời gian hoặc bỏ qua phần chưa hiểu**.

Đây là giả thuyết Day 17 được viết theo năm thành phần, không phải kết luận về tất cả học viên. Trong prototype, thời điểm học, bài và slide cụ thể là dữ liệu mô phỏng.

**Evidence hỗ trợ một phần:** PN1 có khó khăn tìm nội dung; PN3 có tự tra cứu và ngại hỏi.
**Evidence trái giả thuyết:** PN2 chủ động hỏi bạn và coach.
**Chưa chứng minh:** mức độ/tần suất, bỏ qua bài, hậu quả học tập; người hỗ trợ thật sự không biết; chấp nhận phân tích hành vi; khả năng và thời gian hỗ trợ của giảng viên.

## 2. Chặng 2 — Comparison Contract (nháp)

| Thành phần giữ chung | Quyết định đề xuất |
| --- | --- |
| User | Học viên tự học; tester đóng cùng vai này ở A/B/C |
| Situation | Đọc slide về RAG và chưa phân biệt truy xuất tài liệu với sinh câu trả lời |
| Task | Làm rõ và chuyển chỗ vướng cho người hỗ trợ theo mức chia sẻ mình chọn, để có thể tiếp tục học |
| Desired outcome | Xác nhận nội dung cần hỗ trợ, chọn người nhận và quyết định có gửi yêu cầu |
| Content/data fixture | Cùng slide RAG, một câu quiz, cùng danh sách coach và cùng ba dữ kiện hành vi giả lập |
| Dữ liệu giả lập | Xem lại slide 3 lần; đổi đáp án quiz; ghi chú “chưa rõ vai trò truy xuất”. Đây không phải dữ liệu phỏng vấn |
| Common context | Khoảng 70% context, nội dung và components dùng chung; khác tương tác quan trọng |

### Ba cơ chế đề xuất

| Thành phần | A — Tự chọn chỗ vướng | B — Cùng AI làm rõ | C — AI gợi ý chủ động |
| --- | --- | --- | --- |
| Cơ chế | User đánh dấu và tự viết yêu cầu; AI chỉ định dạng sau khi được yêu cầu | User mở trao đổi; AI hỏi làm rõ và soạn bản nháp | Với dữ liệu được cho phép, AI đề xuất chỗ có thể vướng; user xem trước và xác nhận |
| User làm gì? | Chọn đoạn, ghi câu hỏi, người nhận và xem trước | Trả lời câu hỏi, sửa nội dung, chọn dữ liệu gửi | Đọc căn cứ, xác nhận/sửa/bỏ gợi ý, chọn người nhận |
| AI làm gì? | Định dạng phần user cung cấp; không suy luận từ hành vi | Hỏi 1–2 câu và tóm tắt phần user đã chọn | Suy luận giả lập từ cùng fixture; hiện căn cứ và khả năng hiểu sai |
| Trigger | User chọn “Tạo yêu cầu” | User chọn “Làm rõ với AI” | Sau phiên học mô phỏng, khi quyền phân tích đã bật |
| Quyền cuối | User quyết định gửi | User quyết định gửi | User quyết định gửi; AI không tự đưa tên vào queue |
| Trade-off | Chủ động và riêng tư hơn; cần tự xác định chỗ vướng | Giảm công diễn đạt; thêm lượt trao đổi và nguy cơ AI hiểu sai | Giảm công bắt đầu; có thể gây phiền và suy luận sai |
| Người phụ trách | Chưa chốt | Chưa chốt | Chưa chốt |

**Distance check — nháp để nhóm review:**
- A khác B: A yêu cầu user tự xác định và viết; B có đối thoại giúp làm rõ.
- B khác C: B bắt đầu khi user yêu cầu; C đưa gợi ý từ tín hiệu được cho phép.
- A khác C: A không suy luận nhu cầu từ hành vi; C có suy luận và cần bước xác nhận.
- Không mặc định một option thắng. Không dùng khác biệt màu hoặc bố cục để thay cho cơ chế.

## 3. Chặng 3 — Human–AI Decision Table (nháp)

| Quyết định | A | B | C |
| --- | --- | --- | --- |
| User / AI | User chọn và viết; AI định dạng | User trao đổi và sửa; AI hỏi và soạn nháp | AI gợi ý; user kiểm tra và xác nhận |
| Act / Ask / Don't Act | Act khi user yêu cầu định dạng. Ask trước khi gửi. Don't Act: tự gắn cờ | Ask khi chưa rõ; Act để soạn nháp. Don't Act: thêm chi tiết user chưa cung cấp hoặc tự gửi | Act để gợi ý khi có quyền. Ask để xác nhận. Don't Act khi tắt quyền, thiếu tín hiệu hoặc user từ chối |
| Expectation | “AI chỉ định dạng phần bạn chọn, không xác định bạn đã hiểu bài hay chưa.” | “AI giúp làm rõ câu hỏi; bản nháp có thể hiểu sai.” | “Xem lại slide hoặc đổi đáp án không chứng minh bạn chưa hiểu.” |
| Evidence / uncertainty | Hiện đoạn và câu hỏi user cung cấp | Tách câu user nói khỏi phần AI diễn giải; chỗ thiếu ghi “cần xác nhận” | Hiện ba tín hiệu mô phỏng; ghi “có thể cần hỗ trợ”; không dùng % tin cậy không có căn cứ |
| Control / recovery | Sửa, bỏ định dạng, hủy, quay lại slide | Sửa nháp, bắt đầu lại hoặc chuyển sang tự viết | Bỏ gợi ý, sửa chỗ vướng, tắt gợi ý hoặc chuyển sang tự viết |
| Nếu AI sai | User khôi phục câu hỏi gốc | User sửa hiểu nhầm rồi tiếp tục task | User bác bỏ suy luận; không gửi hoặc gắn nhãn học viên |
| Chia sẻ dữ liệu | Xem trước, chọn người nhận; chỉ gửi sau xác nhận | Cùng quyền xem trước và xác nhận | Cùng quyền xem trước và xác nhận; không gửi toàn bộ lịch sử học |

**Feedback/data:** prototype dùng dữ liệu giả lập; sửa của user chỉ áp dụng phiên hiện tại, không học lâu dài. Reset xóa lựa chọn phiên. Không thu dữ liệu học thật hoặc gọi model/API. Trước khi gửi hiển thị người nhận và nội dung sẽ chia sẻ.

## 4. Phạm vi build đề xuất

Mỗi option gồm 3 trạng thái: context chung → tương tác quan trọng → xem trước yêu cầu/kết quả quyết định.
Cùng task và nội dung. Có đường tự viết ở mọi option, nút hủy và reset.
Annotation về kỳ vọng/hành vi cần quan sát đặt ngoài giao diện tester.

## 5. Gate tự kiểm — chưa đánh dấu hoàn thành

- [ ] Gate 1: nhóm đối chiếu sources, review giả thuyết và điều chưa biết.
- [ ] Gate 2: nhóm chốt contract, ba cơ chế và phân công.
- [ ] Gate 3: nhóm review quyền quyết định, dữ liệu và phục hồi.
- [ ] Gate 4: prototype thao tác được, mở trên máy khác, reset được.
- [ ] Gate 5: ba tester ngoài nhóm dùng A/B/C; có notes thật và Next Change.

Danh sách Day 17 có 4 người, đề hôm nay ghi 3. Giữ danh sách lịch sử; chưa tự loại thành viên hay giả định ngoại lệ đã được coach cho phép.
