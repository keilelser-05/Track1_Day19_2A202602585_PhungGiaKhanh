# Chặng 5 — Kịch bản test A/B/C

**Case C — AI Support Radar · Trạng thái: đã chuẩn bị kịch bản, chưa thực hiện test.**
Dùng [fixture chung](../shared/content-fixture.md) và [ba prototype](../prototype-link.md). Tài liệu này dành cho facilitator; không mở phần ghi chú nội bộ trước mặt tester.

## 1. Câu hỏi bối cảnh — tối đa 2 phút

> “Gần đây bạn có từng gặp một phần chưa hiểu khi tự học bằng slide hoặc bài học trực tuyến không?”

Ghi câu trả lời thật và bối cảnh ngắn. Không mặc định tester từng dùng VLearn, ngại hỏi hoặc cần AI. Nếu chưa có bối cảnh liên quan, vẫn quan sát lỗi tương tác; không suy ra giá trị sản phẩm cho nhóm người học mục tiêu.

## 2. Lời mở đầu

> “Chúng mình đang thử ba cách thiết kế, không kiểm tra bạn. Không có câu trả lời đúng hoặc sai. Bạn hãy tự thao tác và nói to điều mình đang nghĩ; mình sẽ cố gắng không hướng dẫn.”

> “Đây là bản thử: câu trả lời của trợ lý và coach được soạn sẵn, không gửi tới người thật. Bạn không cần nhập tên hoặc dữ liệu cá nhân thật.”

Đọc cùng lời mở đầu cho mọi tester, không giới thiệu ưu điểm hoặc cơ chế từng option.

## 3. Nhiệm vụ chung — đọc nguyên văn cho A/B/C

> “Bạn đang xem lại bài RAG trước khi làm quiz. Trong tình huống này, bạn chưa rõ ‘truy xuất tài liệu’ và ‘sinh câu trả lời’ khác nhau thế nào. Hãy dùng phương án này để làm rõ phần đó và trả lời câu quiz. Nếu vẫn chưa rõ, hãy chọn cách bạn muốn tiếp tục.”

**Kết quả cần đạt:** tester tìm cách làm rõ và đưa ra quyết định học tiếp hoặc tìm hỗ trợ. Task không chỉ nút, không yêu cầu bật gợi ý, dùng AI hay gửi coach.

Cả ba bắt đầu ở slide 6, dùng cùng slide 5–7, quiz và nội dung hỗ trợ. Cho phép xem slide, hỏi, từ chối hỗ trợ hoặc dừng. Không coi một đáp án đúng là bằng chứng hiểu sâu; không yêu cầu tester đổi đáp án để thử luồng.

## 4. Chuẩn bị và thứ tự — chỉ dành cho facilitator

Trước phiên:

- Mở được `options/option-a.html`, `options/option-b.html`, `options/option-c.html` trên cùng máy/trình duyệt desktop hoặc laptop.
- Reset từng option về slide 6, không có nháp/chat/đáp án; C mặc định tắt gợi ý. Đóng tài liệu đáp án và annotation khỏi màn hình tester.
- Chuẩn bị đồng hồ và [Feedback Note](../prototype-feedback-note.md); chưa điền observation khi chưa test.
- Xin phép trước nếu muốn ghi âm hoặc ghi hình; nếu không thì ghi chú hành vi.

| Phiên dự kiến | Thứ tự |
| --- | --- |
| Tester 1 | A → B → C |
| Tester 2 | B → C → A |
| Tester 3 | C → A → B |

Ghi thứ tự thực tế trong note. Nếu nhóm có phiên thứ tư, dùng C → B → A và ghi đây là phiên bổ sung. Không tự gán tên tester khi chưa có người thật.

Trước mỗi lượt, reset và đọc lại cùng task. Không xóa dữ liệu của lượt hiện tại khi tester chưa hoàn tất; ghi chú trước khi reset. Việc lặp nội dung có thể khiến các lượt sau dễ hơn, nên không xếp hạng option chỉ bằng thời gian hoặc đáp án quiz.

**Riêng C:** không nhắc bật quyền, chờ 12 giây hay quay lại slide để kích hoạt. Không bật hộ và không giải thích ngưỡng. Nếu tester không bật hoặc không gặp gợi ý, ghi đúng điều đó; không diễn giải thành thất bại của tester. Tham số 12/5 giây là thiết kế bản thử, không phải bằng chứng phát hiện khó khăn.

## 5. Quan sát — đúng 5 mục

| Mục | Ghi gì từ hành vi thật? |
| --- | --- |
| 1. Hành động đầu tiên | Thao tác đầu tiên sau task; vị trí và lựa chọn cụ thể |
| 2. Do dự, hiểu sai hoặc cần giúp | Dừng ở đâu, hiểu gì, câu hỏi đã nói; có cần facilitator hỗ trợ không |
| 3. Căn cứ và giới hạn | Có mở nguồn/đọc lý do gợi ý/giới hạn mô phỏng không; chỉ ghi thao tác thấy được, không đoán họ đã đọc hiểu |
| 4. Kiểm soát và phục hồi | Sửa câu hỏi, từ chối, tắt, hủy, thu hồi hoặc quay lại học; bước nào tự làm được |
| 5. Lựa chọn và đánh đổi | Chọn A/B/C hoặc chưa chọn; lý do bằng lời thật và điều phải đánh đổi |

Ghi theo mẫu ngắn: `Option — thời điểm/bước — thao tác hoặc lời nói — trợ giúp đã đưa`. Trích nguyên văn chỉ khi ghi được đúng; nếu ghi theo ý thì đánh dấu “tóm tắt”. Tách **OBSERVED** khỏi **INTERPRETED**, **NEXT CHANGE** và **STILL UNPROVEN**. Không điền trước feedback hoặc đoán cảm xúc.

## 6. Luật điều phối

1. Tester tự điều khiển và dùng cùng task qua A/B/C.
2. Không thuyết trình, giải thích icon, chỉ nút hoặc chọn thay tester.
3. Không lấp im lặng; không hỏi “Bạn có thích không?”.
4. Khi tester hỏi cách hoạt động: “Theo bạn, nó nên hoạt động như thế nào?”.
5. Nếu có lỗi kỹ thuật, ghi lỗi và trợ giúp đã đưa; không tính đoạn được hướng dẫn là tự hoàn thành.

Ba câu cứu hộ trung lập:

- “Bạn cứ nói to suy nghĩ của mình nhé.”
- “Bạn sẽ làm gì tiếp theo?”
- “Theo bạn, nó nên hoạt động như thế nào?”

## 7. Khung phiên 20 phút

| Thời gian | Việc thực hiện |
| --- | --- |
| 0–2 phút | Lời mở đầu, một câu hỏi bối cảnh |
| 2–14 phút | Trải nghiệm ba option, khoảng 4 phút mỗi option; ghi cả phần chưa hoàn thành |
| 14–18 phút | So sánh và hỏi đánh đổi |
| 18–20 phút | Chốt ghi chú thật; bổ sung Feedback Note sau phiên nếu cần |

Hết thời gian thì ghi trạng thái, không hoàn tất hộ tester. Nếu cần tiếp tục ngoài giờ, ghi rõ thời lượng thêm.

Sau cả ba, hỏi:

- “Trong tình huống này, bạn chọn A, B hay C? Vì sao?”
- “Bạn muốn tự làm phần nào và giao cho AI phần nào?”
- “Điều gì ở phương án đã chọn khiến bạn chưa thoải mái?”

Cho phép câu trả lời “chưa chọn” hoặc “không phương án nào”. Kết thúc bằng việc nhắc lại AI/coach và số học viên minh họa đều mô phỏng; không suy ra tốc độ phản hồi coach thật.

## 8. Kiểm tra Chặng 5

- [x] Có một câu hỏi bối cảnh, tối đa 2 phút.
- [x] Có task hướng tới kết quả, giống nhau cho A/B/C.
- [x] Chọn tối đa 5 mục quan sát.
- [x] Có lời mở đầu, câu cứu hộ và câu hỏi so sánh trung lập.
- [x] Có reset, đổi thứ tự và cách ghi trợ giúp/giới hạn mô phỏng.
- [x] Tách kịch bản dự kiến khỏi feedback thật.

**Chặng 5 đã hoàn thiện tài liệu chuẩn bị test.** Kiểm tra mở/reset trên thiết bị dùng cho phiên phải làm trước khi bắt đầu. Chưa có feedback Chặng 6 hoặc xác nhận Gate 4 bởi người không build; ba lượt test sau này cũng không đủ để tuyên bố solution đã validated.
