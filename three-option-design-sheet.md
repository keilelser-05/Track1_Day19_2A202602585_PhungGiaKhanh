# Three-Option Design Sheet — H3201 · Case C

> Người nộp: Phùng Gia Khánh — 2A202602585.
> Cập nhật 05/10/2026. Evidence được tóm tắt từ notes hiện có, chưa đối chiếu bản ghi.
> Chặng 2 đã hoàn thiện nội dung thiết kế với AI hỗ trợ; chờ nhóm review/phân công. Chặng 3 còn là bản nháp.

## 1. Chặng 1 — Evidence Snapshot

| Note / nguồn | Người tham gia đã kể gì? (tóm tắt note) | Diễn giải tạm |
| --- | --- | --- |
| PN1 — [lượt Thành](note/notes_phanduythanh.md) | Nhắc buổi học chiều hôm trước; không tìm được nội dung trên slide; gặp thuật ngữ tiếng Anh. Không kể cách xử lý tiếp. | Có thể khó xác định chỗ vướng; chưa biết do nội dung, cách tìm hay cách hỏi phỏng vấn. |
| PN2 — [lượt Bùi Hải Nam](note/notes_phuongnam.md) | Kể việc tìm trên mạng, hỏi bạn hoặc lab coach; tiếp tục tìm hiểu đến khi thấy ổn. | Có người chủ động tìm hỗ trợ. Làm yếu giả định mọi học viên đều im lặng hoặc không biết hỏi ai. |
| PN3 — [lượt Chử Trần Phương Nam](note/note_chutranphuongnam.md) | Kể gặp thuật ngữ RAG; hỏi AI rồi tra Google nếu chưa rõ; ước lượng khoảng 10 phút/thuật ngữ; nói ngại hỏi người khác. Kể cảm giác nhẹ nhõm khi giảng viên hỏi trước trong lớp code. | Có dấu hiệu rào cản ngại hỏi. Được hỏi trước không đồng nghĩa đồng ý bị AI theo dõi hoặc chia sẻ dữ liệu. |
| PN04 — [lượt Phùng Gia Khánh](note/notes_khanh_pn04.md) | Chưa xác định được phần cần sửa trong tài liệu 20 trang. Chủ động nhắn giảng viên, kể chờ khoảng 2 ngày. Nhóm tự họp, tra cứu và đoán cách sửa; kể thức đêm gần hạn nộp. | Có dấu hiệu khó làm rõ chỗ cần hỗ trợ và chờ giải đáp. Người này đã chủ động hỏi, không hỗ trợ giả định ngại hỏi/im lặng. Chưa biết có vướng kiến thức khi tự học hoặc nguyên nhân chậm phản hồi. |

### 1.1. Thảo luận nhanh — tổng hợp từ notes

**Situation, behavior hoặc workaround lặp lại:** PN1–PN3 đề cập nội dung/thuật ngữ chưa hiểu; PN2 và PN3 kể tìm nguồn khác để xử lý. PN04 kể làm rõ nhận xét bài tập bằng hỏi giảng viên và tự tra cứu. Có điểm liên hệ là cần làm rõ để làm tiếp, nhưng không coi đọc slide và sửa đồ án là cùng situation/job.

**Evidence mâu thuẫn hoặc bất ngờ:** PN2 chủ động hỏi bạn và lab coach; PN04 chủ động nhắn giảng viên, còn PN3 kể ngại hỏi. Điều này làm yếu giả định mọi học viên đều xử lý âm thầm. PN3 thấy nhẹ nhõm khi được giảng viên hỏi trước, nhưng đó là tương tác người–người, chưa chứng minh chấp nhận AI theo dõi.

**Điều vẫn là suy đoán:** người hỗ trợ không biết chỗ vướng; học viên bỏ qua phần khó; khó khăn làm giảm điểm hoặc tạo lỗ hổng lâu dài; AI phát hiện giúp học tốt hơn. PN04 kể chờ phản hồi và thức đêm, nhưng chưa chứng minh nguyên nhân chậm, giảng viên quá tải hoặc ảnh hưởng điểm số. Không dùng suy đoán làm findings.

**Hypothesis Problem tiếp tục:** giữ problem Day 17 về gỡ chỗ vướng khi tự học. Dùng rào cản chưa lên tiếng như điều cần kiểm tra, không coi là đặc điểm chung. A/B/C cần có lựa chọn phù hợp cả người chủ động hỏi và người ngại hỏi.

### 1.2. Hypothesis Problem tiếp tục từ Day 17

Khi **tự học một phần nội dung khó trên VLearn**, **học viên** gặp khó khăn trong việc **gỡ chỗ vướng để học tiếp** vì **người hỗ trợ chưa biết họ đang mắc ở đâu và họ chưa chủ động lên tiếng**, dẫn đến **tự xử lý tốn thời gian hoặc bỏ qua phần chưa hiểu**.

| Thành phần | Nội dung của giả thuyết | Evidence và giới hạn |
| --- | --- | --- |
| Situation | Tự học nội dung khó trên VLearn | PN3 kể đọc lại slide ở nhà; chưa xác nhận mọi lượt đều diễn ra trên VLearn |
| User | Học viên tự học | Notes hiện có đều ghi phía học viên; chưa phỏng vấn người hỗ trợ |
| Job | Gỡ chỗ vướng để học tiếp | PN2 kể tìm hiểu tới khi thấy ổn rồi chuyển phần |
| Barrier | Người hỗ trợ chưa biết chỗ vướng; học viên chưa lên tiếng | PN3 kể ngại hỏi; PN2 chủ động hỏi. Việc người hỗ trợ chưa biết chưa có bằng chứng trực tiếp |
| Consequence | Tự xử lý tốn thời gian hoặc bỏ qua phần chưa hiểu | PN3 ước lượng khoảng 10 phút/thuật ngữ; chưa có evidence về bỏ qua bài hoặc hậu quả lâu dài |

Câu trên là **giả thuyết để thiết kế và kiểm tra**, không phải kết luận về tất cả học viên. Không đổi case, không tìm problem mới.

### 1.3. Evidence ban đầu hỗ trợ giả thuyết

- **PN1:** note ghi người tham gia không tìm được nội dung trên slide. Hỗ trợ dấu hiệu khó xác định chỗ vướng, chưa chứng minh người hỗ trợ không biết.
- **PN3:** note ghi tra AI rồi Google, ước lượng khoảng 10 phút/thuật ngữ và ngại hỏi người khác. Hỗ trợ một phần barrier và chi phí tự xử lý; thời gian là tự ước lượng, không phải phép đo.
- **PN2 — evidence chống lại:** người tham gia chủ động hỏi bạn/coach. Giữ chi tiết này để A/B/C không mặc định mọi người đều cần được phát hiện hoặc nhắc trước.
- **PN04 — evidence bổ sung có giới hạn:** khó xác định phần cần sửa và chờ giải đáp có liên hệ với việc làm rõ nhu cầu hỗ trợ. Hành vi chủ động nhắn giảng viên làm yếu giả định im lặng trong lượt này. Chưa dùng làm bằng chứng trực tiếp cho situation tự học VLearn, vướng kiến thức hoặc nhu cầu AI.

### 1.4. Điều vẫn chưa được chứng minh

1. Tần suất và mức độ khó khăn; chưa biết ai chỉ gặp bất tiện ngắn và ai bị mắc lâu.
2. Có thật người hỗ trợ không biết chỗ vướng, hay biết nhưng không đủ thời gian giúp?
3. Việc chưa hiểu có dẫn đến bỏ qua bài, trễ hạn hoặc giảm kết quả học không?
4. Học viên có đồng ý để AI phân tích hành vi và chia sẻ với người hỗ trợ không?
5. Việc hỗ trợ chủ động có giúp hoàn thành task học tập, ngoài cảm giác nhẹ nhõm không?
6. PN04 có vướng kiến thức trước khi nhận feedback hay chỉ cần nhận xét bài làm rõ hơn? Hai nhu cầu này có cùng barrier không?

### 1.5. Giới hạn nguồn và Gate 1

- Tổng hợp từ notes đã cung cấp; chưa nghe lại bản ghi hoặc xác minh từng câu trích.
- PN1 có câu hỏi dẫn dắt về cảm xúc theo note đính kèm; không dùng cảm xúc làm bằng chứng độc lập về tụt lại.
- File `notes_phuongnam.md` ghi người phỏng vấn là Bùi Hải Nam. Dẫn theo nội dung file, giữ nguyên tên file và chờ người ghi xác nhận.
- Các notes là nguồn practice Day 17, không phải feedback prototype Day 18.

**Gate 1 — kiểm tra nội dung đã hoàn thiện:**

- [x] Hypothesis Problem có user, situation, job, barrier và consequence.
- [x] Có observation từ Day 17, chỉ rõ note nguồn và giới hạn.
- [x] Tách lời kể khỏi diễn giải; giữ evidence làm yếu giả thuyết.
- [x] Nêu điều vẫn chưa biết.

**Trạng thái:** Chặng 1 đã hoàn thiện phần tài liệu theo notes hiện có. Checklist trên xác nhận nội dung đáp ứng tiêu chí Gate 1; không khẳng định coach đã chấm pass, nhóm đã review hoặc problem đã được xác thực.

## 2. Chặng 2 — Ba Solution Options

**Điểm xuất phát:** giữ Hypothesis Problem ở Chặng 1. Ba option cùng giúp học viên làm rõ chỗ vướng và quyết định yêu cầu hỗ trợ để học tiếp.
Đây là ba solution hypotheses để build/test, chưa có bằng chứng option nào hiệu quả hơn.

### 2.1. Mở lại Solution Parking Lot

| Hướng Day 17 | Nguyên lý dùng trong thiết kế |
| --- | --- |
| FAQ theo slide / checklist tự kiểm tra | Cho user tự xác định nội dung cần giúp; không suy luận nhu cầu từ hành vi |
| Peer pod / mentor hỏi một câu mở | Làm rõ câu hỏi và mở đường chuyển tới người hỗ trợ |
| Digest theo slide | Dùng tín hiệu làm căn cứ tham khảo, không kết luận học viên không hiểu |
| Support Queue | Gợi ý chủ động và tạo bản nháp hỗ trợ; chỉ chuyển khi user xác nhận |

A/B/C là cách thích nghi các nguyên lý này quanh cùng một task, không build toàn bộ sáu hướng.
Option A vẫn có hỗ trợ AI theo yêu cầu, nhưng không suy luận tình trạng học viên từ lịch sử.

### 2.2. Comparison Contract — giữ chung cho A/B/C

| Thành phần | Quyết định dùng chung |
| --- | --- |
| Target user | Học viên tự học nội dung AI, đang cần làm rõ chỗ vướng |
| Situation | Đọc slide RAG trên VLearn; chưa phân biệt truy xuất tài liệu với sinh câu trả lời |
| Task | Làm rõ chỗ vướng và quyết định chuyển yêu cầu cho người hỗ trợ theo mức chia sẻ mình chọn |
| Desired outcome | Có yêu cầu mô tả đúng nội dung cần hỗ trợ, biết người nhận và tự quyết định gửi/hủy để quay lại học |
| Content/data fixture | Cùng một slide, một câu quiz, danh sách người hỗ trợ và ba tín hiệu giả lập dưới đây |
| Giới hạn | Không hứa giải quyết kiến thức hoặc nhận phản hồi thật; prototype chỉ test việc làm rõ, kiểm tra và yêu cầu hỗ trợ |
| Điều kiện test | Cùng task, cùng nội dung, cùng độ hoàn thiện, cùng khả năng sửa/hủy/reset; mỗi tester dùng cả A/B/C |

**Fixture mô phỏng chung:**

- Slide: “RAG truy xuất đoạn tài liệu liên quan rồi đưa cùng câu hỏi vào mô hình để sinh câu trả lời.”
- Quiz: “Bước nào tìm tài liệu liên quan?” — đáp án mẫu: “Truy xuất”. Không dùng kết quả này để chẩn đoán năng lực.
- Tín hiệu: xem lại slide 3 lần; đổi đáp án quiz; ghi chú “chưa rõ vai trò truy xuất”.
- Người nhận giả lập: “Lab coach — hỗ trợ khái niệm”, “TA — hỗ trợ bài tập”.
- Mẫu yêu cầu: nội dung đang học → chỗ chưa rõ → điều đã thử → câu hỏi → người nhận.
- Kết quả gửi: “Yêu cầu đã gửi — mô phỏng”; không gửi ra ngoài hoặc bảo đảm thời gian phản hồi.

Tất cả là dữ liệu soạn cho prototype, không phải quote, observation hoặc số đo phỏng vấn.
Cùng fixture được cung cấp cho cả ba; chỉ C suy luận từ tín hiệu hành vi khi được cho phép. A dùng phần user chọn; B dùng phần user đồng ý đưa vào trao đổi.

### 2.3. Ba cách giải

| Thành phần | A — Tự chọn chỗ vướng | B — Cùng AI làm rõ | C — AI gợi ý chủ động |
| --- | --- | --- | --- |
| Solution mechanism | User xác định chỗ vướng, viết yêu cầu; AI chỉ định dạng khi được yêu cầu | User mở đối thoại; AI hỏi làm rõ rồi soạn yêu cầu từ câu trả lời | AI dùng tín hiệu được cho phép để gợi ý chỗ có thể cần hỗ trợ; user kiểm tra |
| User làm gì? | Chọn đoạn, viết câu hỏi, chọn người nhận và xem trước | Trả lời 1–2 câu, sửa nháp, chọn người nhận và xem trước | Đọc căn cứ, xác nhận/sửa/bỏ gợi ý, chọn người nhận và xem trước |
| AI làm gì? | Định dạng nội dung user đã nhập; không tự chẩn đoán hay thêm chỗ vướng | Hỏi thiếu thông tin, tóm tắt và soạn nháp; không tự thêm chi tiết | Gợi ý và soạn nháp từ fixture; chỉ rõ suy luận có thể sai |
| Trigger | User chủ động tạo yêu cầu | User chủ động mở trao đổi với AI | Sau phiên học mô phỏng khi quyền phân tích đã bật |
| Quyền quyết định | User chọn nội dung và quyết định gửi/hủy | User xác nhận nội dung và quyết định gửi/hủy | User bác bỏ/xác nhận suy luận và quyết định gửi/hủy; AI không tự đưa tên vào queue |
| Trade-off chính | Ít phụ thuộc suy luận AI, chủ động hơn; cần tự diễn đạt chỗ vướng | Giảm công diễn đạt; tốn lượt trao đổi, có nguy cơ AI hiểu sai | Giảm công bắt đầu; có thể gây phiền, lo ngại dữ liệu và suy luận sai |
| Giả thuyết giải pháp | Công cụ chỉ rõ vị trí và mẫu yêu cầu đủ giúp người chủ động hỏi | Đối thoại làm rõ giúp người chưa biết diễn đạt nhu cầu | Gợi ý có căn cứ và quyền từ chối giúp người chưa chủ động bắt đầu |
| Điều cần kiểm tra | Có tự chọn đúng nội dung và viết yêu cầu được không? | AI có giúp làm rõ hay làm user thêm rối? | User có hiểu căn cứ, phát hiện gợi ý sai và kiểm soát chia sẻ không? |

### 2.4. Lý do chọn dựa trên evidence

- **A:** PN2 và PN04 có hành vi chủ động hỏi. Thiết kế giữ quyền bắt đầu cho user và giúp gắn yêu cầu vào nội dung cụ thể; chưa chứng minh mẫu yêu cầu làm người hỗ trợ trả lời nhanh hơn.
- **B:** PN1 khó xác định nội dung vướng, PN3 tự hỏi AI/tra cứu. Đối thoại là cách thử giảm công làm rõ câu hỏi; chưa chứng minh AI tóm tắt đúng.
- **C:** PN3 kể ngại hỏi và từng nhẹ nhõm khi được giảng viên hỏi trước. Đây là lý do thử gợi ý chủ động có quyền từ chối, chưa chứng minh chấp nhận AI phân tích hành vi.
- PN04 cho thấy đã hỏi vẫn có thể chờ lâu. A/B/C không giải quyết lịch làm việc của giảng viên; thời gian phản hồi là điều chưa chứng minh.

### 2.5. Distance check

- **A khác B vì:** A để user tự xác định và viết chỗ vướng; B dùng đối thoại AI để cùng làm rõ trước khi soạn yêu cầu.
- **B khác C vì:** B chỉ bắt đầu khi user yêu cầu; C khởi tạo gợi ý từ tín hiệu được cho phép, rồi user kiểm tra.
- **A khác C vì:** A không suy luận nhu cầu từ hành vi; C có suy luận, phải hiện căn cứ và cho user bác bỏ.
- Ba option khác ở cách khởi tạo, làm rõ nhu cầu và phân chia công việc; tất cả giữ quyền gửi cuối cùng ở user.

Không cố làm một option kém: cùng nội dung đầy đủ và đường yêu cầu hỗ trợ. Mọi option đều có thể sửa, hủy và tự viết; không mặc định C thông minh hoặc tốt hơn.

### 2.6. Phân công và Gate 2

| Option | Người phụ trách chính |
| --- | --- |
| A | Nhóm chưa cung cấp phân công |
| B | Nhóm chưa cung cấp phân công |
| C | Nhóm chưa cung cấp phân công |

Không tự gán người phụ trách hoặc coi bản thiết kế là đóng góp đã thực hiện của cá nhân.

- [x] Cùng user, situation, task và desired outcome.
- [x] Cùng content/data fixture được mô tả cụ thể.
- [x] Ba cơ chế khác nhau có ý nghĩa.
- [x] Rõ user/AI làm gì, trigger, quyền cuối và trade-off.
- [x] Distance check đủ ba cặp, không dựa vào màu/layout/wording.

**Trạng thái:** Chặng 2 hoàn thiện nội dung thiết kế để nhóm dùng cho bước tiếp theo. Chưa xác nhận review nhóm, phân công hoặc coach chấm pass. Chưa có kết quả test để chọn option thắng.

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

## 5. Gate tự kiểm

- [x] Gate 1 — nội dung: đủ năm thành phần, observation có nguồn và điều chưa biết; xem §1.5. Chưa xác nhận review nhóm/chấm của coach.
- [x] Gate 2 — nội dung: contract, fixture, ba cơ chế, trigger, trade-off và distance check đã đầy đủ; phân công/review nhóm chưa xác nhận.
- [ ] Gate 3: nhóm review quyền quyết định, dữ liệu và phục hồi.
- [ ] Gate 4: prototype thao tác được, mở trên máy khác, reset được.
- [ ] Gate 5: ba tester ngoài nhóm dùng A/B/C; có notes thật và Next Change.

Danh sách Day 17 có 4 người, đề hôm nay ghi 3. Giữ danh sách lịch sử; chưa tự loại thành viên hay giả định ngoại lệ đã được coach cho phép.
