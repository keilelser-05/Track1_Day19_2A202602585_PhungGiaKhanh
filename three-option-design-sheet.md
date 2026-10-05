# Three-Option Design Sheet — H3201 · Case C

> Người nộp: Phùng Gia Khánh — 2A202602585.
> Cập nhật 05/10/2026. Evidence được tóm tắt từ notes hiện có, chưa đối chiếu bản ghi.
> Chặng 2–3 đồng bộ thiết kế chung; chờ nhóm review. Chưa có kết quả build/test.

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

## 2. Ba Solution Options — GATE 2

> Nguồn thiết kế chung: [repo Thành](https://github.com/thanhpd123/Track1_Day19_2A202602930_PhanDuyThanh/blob/83b359251a1291b78d48d18dfedb4a2d25a81f37/three-option-design-sheet.md).
> Ngưỡng 20 giây/quay lại lần 2, số bạn khác, trả lời AI và coach đều là tham số/nội dung mô phỏng; chưa có phép đo chứng minh. Dữ liệu hành vi chỉ xử lý trong phiên và cần bật quyền trước khi C gợi ý.

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
| AI làm gì? | Chỉ gắn slide vào câu hỏi | Giải thích dựa trên slide 5–7, nhãn mức hỗ trợ từ tài liệu và nguồn; hiển thị số bạn khác đánh dấu (ẩn danh); soạn nháp | Đo thời gian ở slide và số lần quay lại; hiện gợi ý kèm lý do; soạn bản xem trước thẻ |
| Trigger | Learner | Learner | AI (dừng ≥ 20 giây ở slide 6 hoặc quay lại slide 6 lần 2) |
| AI Act / Ask / Don't Act | **Don't Act** | **Ask** (chỉ làm khi được hỏi) | **Act** (khởi xướng) nhưng chỉ ở mức *hỏi learner*, không tự báo coach |
| Ai giữ quyền quyết định cuối? | Learner | Learner | Learner |
| Chống lại barrier nào? | Barrier 2 (ẩn danh giảm ngại) và Barrier 1 (tự gắn đúng slide) | Barrier 1 (tra rời rạc ~10 phút) và một phần Barrier 2 ("không chỉ mình mình") | Barrier 3 (coach/hệ thống biết learner đang kẹt) |
| Rủi ro chính nếu sai | Learner không nhận ra mình kẹt thì không dùng được; phải chờ coach | AI giải thích sai mà learner tin | Gợi ý nhầm thời điểm, hoặc learner thấy bị theo dõi |
| Người phụ trách chính | Phan Duy Thanh | Chử Trần Phương Nam | Bùi Hải Nam (+ Phùng Gia Khánh) |

### 2.3. Distance Check — nội dung đề xuất, nhóm cần review

- **A khác B ở chỗ:** ở A lời giải đến từ **con người** (coach) và hệ thống không suy luận gì; ở B **AI tự giải thích ngay** rồi con người chỉ là đường lui khi AI chưa đủ.
- **B khác C ở chỗ:** ở B **learner khởi xướng** và AI chỉ nhìn ở cấp nội dung (slide); ở C **AI khởi xướng** dựa trên hành vi của *từng người*.
- **A khác C ở chỗ:** A đòi learner **tự lên tiếng trước**; C là hệ thống **hỏi trước** learner.
- **Kết luận:** ba option khác nhau ở **mechanism / phân chia quyền** (ai khởi xướng, AI suy luận ở cấp nào, lời giải đến từ đâu), không chỉ khác giao diện ☐ *(nhóm tick sau khi tự đọc lại)*

---

## 3. Human–AI Decision Table — GATE 3 🧪

### 3.1. Option A — Tự đánh dấu, coach trả lời

| # | Tình huống | AI **Act** | AI **Ask** | AI **Don't Act** | User hiểu điều gì? | Kiểm soát / phục hồi khi sai |
| - | ---------- | ---------- | ---------- | ---------------- | ------------------ | ---------------------------- |
| 1 | Learner bấm đánh dấu chỗ chưa hiểu ở slide đang xem | Tự gắn số slide vào câu hỏi | — | **Không** đoán learner chưa hiểu gì, không tự điền mô tả | "Câu hỏi sẽ gửi tới coach. Hệ thống không tự đoán bạn đang gặp khó ở đâu" | Sửa mô tả, đổi loại, chọn lại slide trước khi gửi |
| 2 | Chọn cách gửi | — | Hỏi gửi **ẩn danh** hay **kèm tên** (mặc định ẩn danh) | Không tự tiết lộ tên | Dòng "Coach sẽ thấy: …" cập nhật theo lựa chọn | Đổi lại trước khi gửi |
| 3 | Đã gửi, chờ coach | Hiển thị trạng thái "đã gửi" và phản hồi của coach khi có | — | Không tự tóm tắt hay chỉnh sửa lời coach | "Phản hồi coach ở đây là nội dung mô phỏng; chưa có cam kết thời gian thực tế" | **Sửa câu hỏi** hoặc **Thu hồi** trước khi có phản hồi; **Hỏi thêm** sau khi có phản hồi |

### 3.2. Option B — AI giải thích khi được hỏi

| # | Tình huống | AI **Act** | AI **Ask** | AI **Don't Act** | User hiểu điều gì? | Kiểm soát / phục hồi |
| - | ---------- | ---------- | ---------- | ---------------- | ------------------ | -------------------- |
| 1 | Learner mở panel ở slide đang xem | Hiển thị số bạn khác đánh dấu "chưa hiểu" ở slide này (ẩn danh) | — | Không nêu tên ai; không tự giải thích khi chưa được hỏi; không tự gửi coach | "Trợ lý chỉ dựa trên slide 5–7 và có thể trả lời sai" | Bỏ qua panel, tiếp tục học |
| 2 | Learner hỏi một thuật ngữ | Giải thích dựa trên slide, kèm nguồn ("Slide 7, bước 4") | — | Không trả lời như thể chắc chắn khi slide không nói | Nhãn mô phỏng **Mức hỗ trợ từ tài liệu: đủ / một phần / chưa có** + cảnh báo khi slide chưa đủ (ví dụ Top-k: "slide chưa nói cách chọn k") | "Hỏi phần khác", "Mình hiểu rồi", "Vẫn chưa hiểu" |
| 3 | Learner vẫn chưa hiểu | Soạn nháp câu hỏi cho coach | Hỏi learner **sửa nháp** và chọn ẩn danh/kèm tên (mặc định ẩn danh) | **Không gửi** khi learner chưa bấm "Gửi cho coach" | "Trợ lý soạn nháp — bạn xem và sửa trước khi gửi" | "Không gửi" (quay lại giải thích), **Thu hồi** sau khi gửi |

### 3.3. Option C — AI chủ động hỏi thăm

| # | Tình huống | AI **Act** | AI **Ask** | AI **Don't Act** | User hiểu điều gì? | Kiểm soát / phục hồi |
| - | ---------- | ---------- | ---------- | ---------------- | ------------------ | -------------------- |
| 1 | Learner dừng ≥ 20 giây ở slide 6 hoặc quay lại lần 2 | Hiện gợi ý kèm lý do ("Đang ở slide 6 khoảng N giây"; "Đã quay lại N lần") | "Bạn có cần mình giúp không?" | Không tự báo coach; không đọc ghi chú hay nội dung chat | Panel luôn nói rõ mình dùng dữ liệu gì; nút **"Vì sao mình hỏi?"**; "đây chỉ là suy đoán, có thể sai" | **Để sau**; **Đừng gợi ý nữa**; công tắc Bật/Tắt trong panel; tối đa 2 lần gợi ý |
| 2 | Learner chọn "Nhờ coach hỗ trợ" | Tạo bản **xem trước thẻ** sẽ vào hàng chờ của coach (learner / nội dung / tín hiệu / gợi ý hành động) | Hỏi **kèm tên** hay **ẩn danh**, rồi xác nhận gửi | **Không gửi** khi learner chưa bấm "Gửi cho coach" | Thấy chính xác coach sẽ nhận được gì, kể cả tín hiệu hệ thống đã đo | "Không gửi"; **Thu hồi** sau khi gửi |
| 3 | AI gợi ý sai (learner không gặp khó) | — | — | Không lặp lại gợi ý quá 2 lần; không ghi nhận "learner gặp khó" nếu learner từ chối | Gợi ý được gọi rõ là suy đoán | Tắt gợi ý bất kỳ lúc nào; learner vẫn làm quiz bình thường |

### 3.4. Bốn nguyên lý Human–AI Design — đối chiếu

| Nguyên lý | A | B | C |
| --- | --- | --- | --- |
| **Expectation** | Câu "Hệ thống không tự đoán bạn đang gặp khó ở đâu" + dòng "Coach sẽ thấy…" | "Chỉ dựa trên slide 5–7, có thể sai" | Panel nêu rõ dữ liệu được dùng / không dùng; "Vì sao mình hỏi?" |
| **Role & Agency** | Learner làm gần hết; AI **Don't Act** vì hậu quả sai thấp nhưng lợi ích cũng phụ thuộc learner tự nhận ra | AI thực hiện giải thích sau yêu cầu user, hỏi thêm khi cần; hậu quả sai vừa (hiểu sai thuật ngữ) | AI **Act** nhưng chỉ ở mức hỏi; hậu quả sai là cảm giác bị theo dõi → không tự báo coach |
| **Evidence & Uncertainty** | Số slide, loại chỗ vướng | Nguồn slide + nhãn mức hỗ trợ từ tài liệu (không phải độ tin cậy mô hình đã đo) + cảnh báo | Danh sách tín hiệu đã đo, nêu là suy đoán |
| **Control & Recovery** | Sửa, đổi ẩn danh, thu hồi, hỏi thêm | Hỏi lại, sửa nháp, không gửi, thu hồi | Để sau, tắt, xem trước, không gửi, thu hồi |

### 3.5. Feedback and data check (cho Option C và phần gửi coach ở A/B)

| Câu hỏi | Trả lời trong prototype 🧪 *(nhóm xác nhận)* |
| --- | --- |
| Feedback của learner ảnh hưởng phiên hiện tại, lần sau hay không được ghi nhớ? | Chỉ ảnh hưởng **phiên hiện tại**: "Đừng gợi ý nữa" tắt gợi ý trong phiên; prototype không lưu gì sang phiên sau |
| Dữ liệu nào được dùng? | Thao tác chuyển slide và thời gian ở mỗi slide trong phiên. **Không** dùng ghi chú, đáp án quiz, nội dung chat |
| Learner có cách rút quyền không? | Có: công tắc Bật/Tắt, "Đừng gợi ý nữa", "Không gửi", "Thu hồi" |
| Số liệu "12 bạn khác cũng đánh dấu chưa hiểu" (Option B) | **Số liệu minh hoạ**, đã ghi chú trong giao diện; nhắc lại ở bước debrief |

---

## 4. Gate tự kiểm và trạng thái

- [x] Gate 1 — đủ nội dung evidence, giả thuyết và điều chưa biết.
- [x] Gate 2 — đủ contract, ba cơ chế và distance check; nội dung mới đồng bộ từ thiết kế chung.
- [ ] Gate 3 — bảng Human–AI đã có nội dung thiết kế, chờ nhóm review.
- [ ] Gate 4 — chưa có prototype chạy được và QA.
- [ ] Gate 5 — chưa có ba feedback test thật và Group Next Change.

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
