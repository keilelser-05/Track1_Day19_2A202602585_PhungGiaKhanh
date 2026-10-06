# Chặng 5 — Kịch bản test A/B/C

**Case C — AI Support Radar · Người thực hiện: Phùng Gia Khánh — 2A202602585.**
**Phạm vi cá nhân:** phụ trách Option C. Một người ngoài nhóm, PN05, đã trải nghiệm đủ A/B/C.
**Trạng thái:** PN05 tự mở, làm nhiệm vụ và reset cả ba, không cần hướng dẫn; chọn B vì vận hành trơn tru, hoàn thiện dù còn vướng giao diện.
Dùng [fixture chung](../shared/content-fixture.md) và [ba prototype](../prototype-link.md). Tài liệu này dành cho facilitator; không mở phần ghi chú nội bộ trước mặt tester.

## 1. Câu hỏi bối cảnh — tối đa 2 phút

> “Gần đây bạn có từng gặp một phần chưa hiểu khi tự học bằng slide hoặc bài học trực tuyến không?”

Ghi câu trả lời thật và bối cảnh ngắn. Không mặc định tester từng dùng VLearn, ngại hỏi hoặc cần AI. Nếu chưa có bối cảnh liên quan, vẫn quan sát lỗi tương tác; không suy ra giá trị sản phẩm cho nhóm người học mục tiêu.

## 2. Lời mở đầu

> “Chúng mình đang thử ba cách thiết kế, không kiểm tra bạn. Không có câu trả lời đúng hoặc sai. Bạn hãy tự thao tác và nói to điều mình đang nghĩ; mình sẽ cố gắng không hướng dẫn.”

> “Đây là bản thử: câu trả lời của trợ lý và coach được soạn sẵn, không gửi tới người thật. Bạn không cần nhập tên hoặc dữ liệu cá nhân thật.”

Đọc cùng lời mở đầu cho cả ba lượt của người tham gia, không giới thiệu ưu điểm hoặc cơ chế từng option.

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

| Phiên cá nhân | Người thực hiện | Người test | Thứ tự thực tế |
| --- | --- | --- | --- |
| Một người, thử đủ A/B/C | Phùng Gia Khánh | PN05 — ngoài nhóm | Ban đầu ghi nhận C, sau đó bổ sung A/B; thứ tự đầy đủ chưa cung cấp |

Phần của Khánh không yêu cầu ba người test. Thứ tự ghi theo phiên đã diễn ra, không thay bằng thứ tự dự kiến. Việc đổi thứ tự giữa các phiên là phối hợp của nhóm, không yêu cầu Khánh tổ chức thêm phiên.

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

**Chặng 5 đã hoàn thiện kịch bản A/B/C.** PN05 đã thử đủ ba bản, chọn B và tự mở/làm nhiệm vụ/reset không cần hướng dẫn. Gate 4 đạt; xem trạng thái Gate 5 tại phần tổng hợp nhóm.

## 9. Form ghi lại kết quả thực tế

Nguồn: Khánh xác nhận và bổ sung ngày 06/10/2026; tóm tắt, không phải quote. PN05 ngoài nhóm đã thử đủ A/B/C. Ngày test, thiết bị, phiên bản, thời lượng và thứ tự đầy đủ chưa cung cấp.

| Mục quan sát | A | B | C |
| --- | --- | --- | --- |
| 1. Hành động đầu tiên | Chưa ghi thứ tự thao tác chi tiết | Chưa ghi thứ tự thao tác chi tiết | Có lướt slide, dùng gợi ý, xem hỏi đáp; chưa ghi thao tác đầu tiên |
| 2. Vướng / cần giúp | Vướng luồng; không cần hướng dẫn | Vướng giao diện; không cần hướng dẫn | Vướng luồng và giao diện, hỗ trợ chưa linh hoạt; không cần hướng dẫn |
| 3. Căn cứ và giới hạn | Chưa ghi nhận | Chưa ghi nhận | Chưa ghi nhận |
| 4. Kiểm soát / reset | Tự mở, làm nhiệm vụ, reset | Tự mở, làm nhiệm vụ, reset | Tự mở, làm nhiệm vụ, reset |
| 5. Lựa chọn / đánh đổi | Không chọn | **Chọn B:** vận hành trơn tru, hoàn thiện; chấp nhận vướng giao diện | Không chọn; từng ghi nhận chút không hài lòng |

**Kết quả nhiệm vụ:** đã tự thực hiện nhiệm vụ cả ba theo xác nhận Khánh; chưa có đáp án quiz hoặc thước đo hiểu bài cụ thể. Gate 4 đạt yêu cầu tự mở/task/reset của người không build.

- **OBSERVED:** dữ liệu ở bảng trên; không bổ sung quote hoặc thời điểm.
- **INTERPRETED:** Khánh rút ra sự đơn giản, linh hoạt và hoàn thiện là tiêu chí quan trọng.
- **NEXT CHANGE:** đề xuất làm rõ khung hỗ trợ và đường tiếp tục của C; chưa chốt với nhóm.
- **STILL UNPROVEN:** hiệu quả học tập, bước vướng cụ thể, ảnh hưởng thứ tự và khả năng C phát hiện đúng nhu cầu.

## 10. Nguồn nhóm và tổng hợp

[Tổng hợp nhóm](../group-feedback-synthesis.md) dùng T1/T2 và PN05 làm ba notes riêng. PN05 được cập nhật bằng xác nhận trực tiếp của Khánh; không nhập quote/hành vi từ note T4 nguồn Thành. [Feedback chi tiết](../prototype-feedback-note.md) · [Reflection](../contribution.md).
