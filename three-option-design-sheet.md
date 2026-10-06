# Three-Option Design Sheet — H3201 · Case C

> Người nộp: Phùng Gia Khánh — 2A202602585.
> Cập nhật 06/10/2026. Evidence được tóm tắt từ notes hiện có, chưa đối chiếu bản ghi.
> Chặng 2–3 hoàn thiện nội dung thiết kế; chờ nhóm review. Đã build và QA tự động; PN05 đã thử riêng C, A/B cá nhân chưa test.

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
- **PN04 — evidence có giới hạn:** khó xác định phần cần sửa và chờ giải đáp có liên hệ với việc làm rõ nhu cầu hỗ trợ. Hành vi chủ động nhắn giảng viên làm yếu giả định im lặng trong lượt này. Chưa dùng làm bằng chứng trực tiếp cho situation tự học VLearn, vướng kiến thức hoặc nhu cầu AI.

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

## 2. Ba Solution Options — GATE 2

> Nguồn thiết kế chung: [repo Thành](https://github.com/thanhpd123/Track1_Day19_2A202602930_PhanDuyThanh/blob/83b359251a1291b78d48d18dfedb4a2d25a81f37/three-option-design-sheet.md).
> Ngưỡng 12 giây/quay lại lần 2 kèm 5 giây đọc, trả lời AI và coach đều là tham số/nội dung mô phỏng; chưa có phép đo chứng minh. Dữ liệu hành vi chỉ xử lý trong phiên và cần bật quyền trước khi C gợi ý.

### 2.1. Comparison Contract — giống hệt nhau ở cả 3 option

| Trường | Giá trị dùng chung cho A/B/C |
| --- | --- |
| User | **Learner** (cả ba option đều lấy learner làm người dùng chính; coach chỉ xuất hiện ở màn kết quả) |
| Situation | Đang xem lại slide 6 "RAG — Retrieval-Augmented Generation" trước khi làm quiz, chưa hiểu thuật ngữ |
| Task tester phải làm | Đến lúc tự tin trả lời 1 câu quiz về RAG nằm ngay dưới slide |
| Outcome kỳ vọng | Gỡ được chỗ vướng ngay trong lúc học, hoặc chuyển được câu hỏi tới đúng người |
| Fixture | Cùng mini-deck 3 slide (5–7), cùng câu quiz, cùng lời giải thích RAG, cùng câu trả lời của coach *(dữ liệu mô phỏng — xem [fixture chung](shared/content-fixture.md) và [AI log](ai-support-log.md))* |

> **Vì sao sửa bản nháp trong README nhóm?** Bản nháp đó để Option B gửi digest cho mentor và Option C để **người hỗ trợ** làm user ("learner chỉ nhận thông báo"). Như vậy ba option **không cùng user** → trượt Gate 2. Ở đây learner là user cho cả ba; phía coach chỉ là nơi câu hỏi đến.

### 2.2. Ba option

| | **Option A** | **Option B** | **Option C** |
| --- | --- | --- | --- |
| Tên option | Tự đánh dấu, coach trả lời | AI giải thích khi được hỏi | AI chủ động hỏi thăm |
| Từ Parking Lot | #1 FAQ, #2 checklist, #4 mentor | #5 digest theo slide (không theo người) | #6 Support Queue (đưa quyền quyết định về learner) |
| Cơ chế (1 câu) | Learner tự đánh dấu chỗ chưa hiểu; hệ thống gắn số slide và gửi cho coach, **không suy đoán gì** | Learner hỏi trợ lý; AI giải thích trong phạm vi slide, nói rõ độ chắc chắn, và chỉ khi learner còn chưa hiểu mới soạn nháp câu hỏi cho coach | AI thấy tín hiệu hành vi của chính learner (dừng lâu/quay lại slide), **chủ động hỏi**, và chỉ khi learner đồng ý mới tạo thẻ gửi coach |
| Vị trí trên spectrum | User-led / No-inference | User + AI co-create | AI initiate, human decide |
| User làm gì? | Tự nhận ra chỗ kẹt, chọn loại, mô tả, chọn ẩn danh/kèm tên, gửi | Chọn thuật ngữ hoặc tự hỏi; đọc và đánh giá lời giải; quyết định có nhờ coach không; sửa nháp | Phản hồi gợi ý (giải thích / nhờ coach / để sau / tắt); xem trước và xác nhận thẻ |
| AI làm gì? | Chỉ gắn slide vào câu hỏi | Giải thích dựa trên slide 5–7, nhãn mức hỗ trợ từ tài liệu và nguồn; soạn nháp; không dùng số học viên giả làm bằng chứng | Đo thời gian ở slide và số lần quay lại; hiện gợi ý kèm lý do; soạn bản xem trước thẻ |
| Trigger | Learner | Learner | AI (đọc ≥12 giây ở slide mẫu 5–7 hoặc quay lại lần 2 kèm ≥5 giây đọc) |
| AI Act / Ask / Don't Act | **Don't Act** | **Ask** (chỉ làm khi được hỏi) | **Act** (khởi xướng) nhưng chỉ ở mức *hỏi learner*, không tự báo coach |
| Ai giữ quyền quyết định cuối? | Learner | Learner | Learner |
| Chống lại barrier nào? | Barrier 2 (ẩn danh giảm ngại) và Barrier 1 (tự gắn đúng slide) | Tra cứu rời rạc và ngại hỏi người; 10 phút là ước lượng từ PN3, không phải tốc độ sản phẩm | Khoảng trống hỗ trợ: hỏi xác nhận khi có tín hiệu, không kết luận learner đang kẹt |
| Rủi ro chính nếu sai | Learner không nhận ra mình kẹt thì không dùng được; phải chờ coach | AI giải thích sai mà learner tin | Gợi ý nhầm thời điểm, hoặc learner thấy bị theo dõi |
| Người phụ trách chính | Phan Duy Thanh | Chử Trần Phương Nam | Bùi Hải Nam (+ Phùng Gia Khánh) |

### 2.3. Distance Check — nội dung đề xuất, nhóm cần review

- **A khác B ở chỗ:** ở A lời giải đến từ **con người** (coach) và hệ thống không suy luận gì; ở B **AI tự giải thích ngay** rồi con người chỉ là đường lui khi AI chưa đủ.
- **B khác C ở chỗ:** ở B **learner khởi xướng** và AI chỉ nhìn ở cấp nội dung (slide); ở C **AI khởi xướng** dựa trên hành vi của *từng người*.
- **A khác C ở chỗ:** A đòi learner **tự lên tiếng trước**; C là hệ thống **hỏi trước** learner.
- **Kết luận:** ba option khác nhau ở **mechanism / phân chia quyền** (ai khởi xướng, AI suy luận ở cấp nào, lời giải đến từ đâu), không chỉ khác giao diện ☐ *(nhóm tick sau khi tự đọc lại)*

---

## 3. Chặng 3 — Human–AI Design pass

**Phạm vi:** chỉ tương tác quan trọng quanh slide RAG → làm rõ → quyết định nhờ coach hoặc quay lại quiz.
Các quyết định dưới đây là yêu cầu để build prototype, chưa phải hành vi hệ thống đã chạy hoặc kết quả test.
Act = thực hiện; Ask = hỏi/xác nhận; Don't Act = không can thiệp. Thao tác gắn slide, hiển thị trạng thái và gửi là chức năng hệ thống, không mặc định cần AI.

### 3.1. Bốn quyết định thiết kế

| Quyết định | A — Tự đánh dấu, coach trả lời | B — AI giải thích khi được hỏi | C — AI chủ động hỏi thăm |
| --- | --- | --- | --- |
| **Expectation — hiểu khả năng/giới hạn** | Trước tạo câu hỏi: “Bạn chọn chỗ vướng; hệ thống gắn slide và gửi coach khi bạn xác nhận.” Không hứa coach trả lời ngay | Trước hỏi: “Trợ lý dùng slide 5–7, có thể giải thích sai hoặc chưa đủ.” Phản hồi là soạn sẵn trong prototype | Trước bật: “Chỉ dùng chuyển slide và thời gian ở slide trong phiên để gợi ý; không xác định bạn đã hiểu hay chưa.” |
| **Role & Agency — ai quyết định** | User chọn slide, mô tả, cách chia sẻ và gửi; AI Don't Act với suy luận nhu cầu | User khởi xướng; AI Act để giải thích sau yêu cầu, Ask nếu câu hỏi thiếu rõ; user kiểm tra và quyết định chuyển coach | User bật quyền; AI Act để đưa gợi ý, Ask user cần giúp gì; không tự gửi hoặc gắn cờ người học |
| **Evidence & Uncertainty — căn cứ/không chắc** | Hiện slide và mô tả gốc để user kiểm tra; không tạo nhãn suy đoán năng lực | Hiện đúng đoạn slide và mức hỗ trợ tài liệu; không dùng % tin cậy không có căn cứ. Nếu slide thiếu thì nói rõ | Hiện thời gian/lần quay lại thật của phiên mô phỏng; “đây chỉ là suy đoán, có thể sai”. Không suy ra khó khăn từ tín hiệu đơn lẻ như một fact |
| **Control & Recovery — sửa/phục hồi** | Sửa slide/câu hỏi, hủy, đổi tên/ẩn danh, thu hồi trước phản hồi, hỏi thêm sau phản hồi | Hỏi lại, bỏ lời giải, sửa nháp, chuyển coach hoặc tự viết, quay lại quiz | Để sau, bác bỏ, tắt, chuyển tự viết, bỏ tín hiệu khỏi thẻ; mọi lựa chọn vẫn cho học/quiz tiếp |

### 3.2. Option A — Tự đánh dấu, coach trả lời

**Critical interaction:** user xác định chỗ cần hỏi và kiểm tra yêu cầu trước khi gửi.

| Thời điểm | User làm gì? | Hệ thống / AI Act, Ask, Don't Act — vì sao | Căn cứ và giới hạn | Control / recovery |
| --- | --- | --- | --- | --- |
| Đánh dấu slide | Chọn vị trí, loại vướng và tự viết câu hỏi | Hệ thống Act gắn slide. AI Don't Act: chưa có yêu cầu suy luận và user giữ nội dung | Hiện slide và câu hỏi gốc; không tự bổ sung nguyên nhân | Chọn lại slide, sửa nội dung, hủy về context |
| Xem trước | Chọn ẩn danh/kèm tên và người nhận | Hệ thống Ask xác nhận gửi. Don't Act: không tiết lộ tên hoặc gửi ngầm | “Coach sẽ thấy…” liệt kê đúng nội dung chia sẻ; mặc định không kèm tên | Đổi người nhận/cách chia sẻ; chưa gửi khi hủy |
| Kết quả quyết định | Gửi hoặc không gửi; đọc phản hồi mô phỏng khi có | Hệ thống Act hiển thị trạng thái. AI Don't Act sửa lời coach hoặc chấm hiểu bài | “Đã gửi — mô phỏng”; coach reply là soạn sẵn, không có SLA thật | Trước phản hồi: sửa/thu hồi. Sau phản hồi: hỏi thêm; không hứa xóa nội dung đã được đọc |

**Nếu sai:** gắn nhầm slide/câu hỏi có thể khiến coach hỗ trợ lệch. Vì vậy xem trước luôn có sửa; không coi rủi ro là thấp chỉ vì A không dùng suy luận AI.

### 3.3. Option B — AI giải thích khi được hỏi

**Critical interaction:** user đánh giá lời giải có căn cứ rồi quyết định học tiếp hoặc nhờ người.

| Thời điểm | User làm gì? | AI Act, Ask, Don't Act — vì sao | Căn cứ và giới hạn | Control / recovery |
| --- | --- | --- | --- | --- |
| Khởi tạo | Chọn thuật ngữ hoặc nhập câu hỏi | Don't Act trước yêu cầu. Ask một câu làm rõ nếu câu hỏi mơ hồ | Chỉ dùng slide 5–7 và phần user nhập để trả lời | Đóng panel; hỏi phần khác hoặc tự viết cho coach |
| Nhận lời giải | Đọc, mở nguồn, chọn đã rõ/chưa rõ | Act trả lời trong phạm vi tài liệu. Don't Act bịa phần slide thiếu hoặc coi user đã hiểu chỉ vì bấm nút | Hiện đoạn nguồn; nhãn “đủ / một phần / chưa có căn cứ trong slide”. Nhãn mô phỏng không phải xác suất đúng | Hỏi lại, bỏ câu trả lời, mở slide kiểm tra; quiz vẫn dùng được |
| Chuyển coach | Kiểm tra/sửa nháp, người nhận và chia sẻ | Act soạn nháp từ trao đổi user chọn. Ask trước gửi. Don't Act gửi toàn bộ chat hay tự nêu nguyên nhân | Tách lời user khỏi tóm tắt AI; đánh dấu thông tin chưa xác nhận | Sửa hoặc tự viết thay nháp, không gửi; thu hồi trước phản hồi |

**Nếu sai:** lời giải sai có thể tạo hiểu nhầm khó phát hiện. Nguồn và cảnh báo phải ở cạnh câu trả lời, kèm đường chuyển coach.
Nếu hiển thị “12 bạn khác”, ghi ngay cạnh là **số liệu minh họa**; không dùng nó làm chứng cứ lời giải đúng hoặc user cần giúp.

### 3.4. Option C — AI chủ động hỏi thăm

**Critical interaction:** user kiểm tra một suy đoán chủ động và chọn mức hỗ trợ/chia sẻ.

| Thời điểm | User làm gì? | AI Act, Ask, Don't Act — vì sao | Căn cứ và giới hạn | Control / recovery |
| --- | --- | --- | --- | --- |
| Trước phân tích | Chọn bật gợi ý hoặc tiếp tục không bật | Ask xin bật theo dõi thời gian/chuyển slide. Don't Act thu/đánh giá tín hiệu khi tắt | Không dùng ghi chú, quiz hoặc chat để suy luận. Quyền chỉ trong phiên | Mặc định tắt; bỏ qua vẫn dùng A/B và quiz |
| Có tín hiệu | Đọc hoặc bỏ qua gợi ý | Act mở gợi ý sau ≥12 giây ở slide mẫu 5–7 hoặc quay lại lần 2 kèm ≥5 giây đọc. Ask “Bạn có cần giúp không?”. Don't Act kết luận user chưa hiểu hoặc tự báo coach | “Vì sao mình hỏi?” hiện tín hiệu; ngưỡng là thiết kế mô phỏng, chưa chứng minh phát hiện đúng | Giải thích, nhờ coach, để sau, bác bỏ, tắt gợi ý |
| Nhờ coach | Sửa câu hỏi, chọn tín hiệu muốn chia sẻ và tên/người nhận | Act tạo thẻ nháp; Ask xác nhận đúng nội dung/người nhận. Don't Act gửi trước xác nhận | Xem trước slide, câu hỏi, dữ liệu user chọn; suy đoán được ghi rõ và không biến thành nhãn user | Bỏ tín hiệu, sửa chỗ vướng, không gửi, tự viết; thu hồi trước phản hồi |

**Nếu sai:** gợi ý có thể gây phiền hoặc cảm giác bị theo dõi. Không ngắt quiz hay khóa học.
“Để sau” đóng gợi ý, không mở lại trên cùng slide đến khi user rời rồi quay lại; tối đa 2 gợi ý/phiên.
“Tắt” dừng thu tín hiệu và xóa tín hiệu đang giữ trong phiên; chỉ bật lại khi user chủ động.
“Không cần giúp” không tạo cờ khó khăn hoặc gửi dữ liệu. Nếu cần lời giải, dùng cùng lời giải/cảnh báo của B.

### 3.5. Feedback and data check

| Câu hỏi | Quyết định thiết kế |
| --- | --- |
| Feedback ảnh hưởng phiên nào? | Sửa nháp, bác bỏ và tắt chỉ có tác dụng trong phiên. Không huấn luyện model, không ghi nhớ lâu dài |
| Dữ liệu A/B dùng? | Slide và nội dung user chủ động nhập/chọn. Chat B dùng để giải thích hoặc soạn nháp, không tự chia sẻ toàn bộ |
| Dữ liệu C dùng? | Thời gian ở slide và thao tác chuyển slide sau khi user bật. Không dùng ghi chú/quiz/chat để suy luận |
| Chia sẻ coach? | User chọn người nhận, mặc định không kèm tên; xem trước mọi trường. Tín hiệu C không tự động đi kèm |
| Cách rút quyền? | Tắt C, bỏ tín hiệu khỏi thẻ, hủy trước gửi, thu hồi trước phản hồi; giải thích giới hạn nếu nội dung đã được đọc |
| Reset? | Xóa mọi lựa chọn, nháp và tín hiệu phiên; C về tắt; context và fixture ban đầu được khôi phục |
| Dữ liệu thật? | Prototype dùng fixture và phản hồi soạn sẵn, không gửi coach thật hoặc thu dữ liệu phỏng vấn |

### 3.6. Kiểm tra Gate 3 — nội dung

- [x] Mỗi option có critical interaction, vai user và AI/hệ thống.
- [x] Act/Ask/Don't Act được chọn theo hậu quả và khả năng phát hiện sai.
- [x] Capability/limit xuất hiện trước hành động AI hoặc gửi.
- [x] Có căn cứ và cách thể hiện khi tài liệu/tín hiệu chưa đủ.
- [x] Có sửa, từ chối và đường tiếp tục task sau khi sai.
- [x] Có quy định feedback, dữ liệu dùng, chia sẻ và rút quyền.

Chặng 3 hoàn thiện quyết định thiết kế. Chặng 4 đã có prototype và [QA tự động](prototype-link.md). PN05 tự dùng gợi ý/hỏi đáp C nhưng chưa có dữ liệu hiểu bài hoặc reset.

## 4. Gate tự kiểm và trạng thái

- [x] Gate 1 — đủ nội dung evidence, giả thuyết và điều chưa biết.
- [x] Gate 2 — đủ contract, ba cơ chế và distance check; nội dung mới đồng bộ từ thiết kế chung.
- [x] Gate 3 — hoàn thiện nội dung quyết định thiết kế; chưa có xác nhận review nhóm/chấm.
- [ ] Gate 4 — đã build ba HTML và QA tự động pass; chờ người không build kiểm tra độc lập (xem prototype-link.md).
- [ ] Gate 5 — đã có PN05 và tổng hợp nguồn nhóm; chưa đủ ba feedback độc lập thử đủ A/B/C. Xem [synthesis](group-feedback-synthesis.md).

Checklist nội dung không xác nhận coach đã chấm pass hoặc nhóm đã review.
Phân công là đề xuất của tài liệu nhóm, chưa phải đóng góp đã thực hiện.

## 5. Phân công đề xuất từ tài liệu nhóm

| Thành viên | Option / công việc đề xuất |
| --- | --- |
| Phan Duy Thành | A; nội dung coach mô phỏng và QA/link |
| Chử Trần Phương Nam | B; nội dung giải thích AI mô phỏng |
| Bùi Hải Nam | C, phụ trách chính; điều phối |
| Phùng Gia Khánh | C, cùng phụ trách; context/slide/quiz/reset dùng chung |

Tài liệu nhóm ghi giảng viên đã đồng ý nhóm 4 người. Người nộp cần xác nhận phân công trước khi ghi đóng góp cá nhân.



## 6. Kết nối Chặng 4–6

[Prototype và QA](prototype-link.md) → [task/5 mục quan sát](test/test-prompt.md) → [feedback PN05](prototype-feedback-note.md) → [tổng hợp/Next Change/Still Unproven](group-feedback-synthesis.md).

PN05 chỉ thử C, tự thao tác, vướng giao diện và độ linh hoạt. Không ghi đã thử A/B hoặc chọn B theo note khác trong nguồn Thành. Thiết kế giữ cùng context để vòng sau so sánh được; ngưỡng C và phản hồi AI/coach là mô phỏng.
