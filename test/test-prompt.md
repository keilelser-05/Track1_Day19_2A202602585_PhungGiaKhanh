# Chặng 5 — Kịch bản test A/B/C

**Case C — AI Support Radar · Người thực hiện: Phùng Gia Khánh — 2A202602585.**
**Phạm vi cá nhân:** phụ trách Option C. Kịch bản dự kiến cho một người trải nghiệm A/B/C; phiên thực tế với PN05 chỉ thử C.
**Trạng thái:** đã ghi nhận feedback PN05, người ngoài nhóm, cho riêng C. A/B chưa test; chưa có lựa chọn so sánh.
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
| Một phiên, chỉ thử C | Phùng Gia Khánh | PN05 — ngoài nhóm | C; A/B chưa thử |

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

**Chặng 5 đã hoàn thiện kịch bản A/B/C.** Phiên thực tế mới thử C với PN05. Đã có feedback C; chưa đủ dữ liệu so sánh A/B/C hoặc đánh dấu Gate 5 hoàn tất.

## 9. Form ghi lại phiên đã thực hiện

Nguồn: thông tin Khánh cung cấp sau phiên. Nội dung dưới đây là tóm tắt, không phải lời nói nguyên văn.

| Thông tin | Nội dung thực tế |
| --- | --- |
| Người thực hiện | Phùng Gia Khánh — 2A202602585 |
| Option phụ trách | C |
| Người tham gia | PN05 — ngoài nhóm |
| Số người | 1 |
| Phương án trải nghiệm | Chỉ C; A/B chưa thử |
| Thứ tự thực tế | C |
| Bối cảnh, ngày, thời lượng, thiết bị, phiên bản | Chưa cung cấp |
| Nhiệm vụ đã giao | Chưa cung cấp; không mặc định đã dùng đúng task dự kiến |
| Ghi âm/ghi hình | Chưa cung cấp |

### 9.1. Năm mục quan sát

| Mục | A | B | C |
| --- | --- | --- | --- |
| 1. Hành động đầu tiên | Chưa test | Chưa test | Có lướt slide, sử dụng gợi ý, xem hỏi đáp; chưa ghi nhận thứ tự chi tiết |
| 2. Do dự, hiểu sai hoặc cần giúp | Chưa test | Chưa test | Vướng giao diện và độ linh hoạt hỗ trợ; không cần Khánh hướng dẫn |
| 3. Căn cứ và giới hạn đã xem | Chưa test | Chưa test | Chưa ghi nhận việc mở nguồn hoặc xem căn cứ/giới hạn |
| 4. Kiểm soát, phục hồi và reset | Chưa test | Chưa test | Chưa ghi nhận thao tác từ chối, tắt, sửa, thu hồi hoặc reset |
| 5. Lựa chọn, lý do và đánh đổi | Chưa test | Chưa test | Chưa chọn vì chưa thử đủ A/B/C |

**Kết quả nhiệm vụ:** PN05 tự thao tác C mà không cần hướng dẫn. Chưa có thông tin về hoàn thành quiz hoặc đạt mục tiêu làm rõ kiến thức.

**Riêng C:** đã sử dụng tính năng gợi ý và xem hỏi đáp. Chưa ghi nhận cụ thể cách bật quyền, tín hiệu kích hoạt hoặc cách tiếp tục học.

### 9.2. Ý kiến sau phiên — tóm tắt từ Khánh

- PN05 có chút không hài lòng.
- Điểm vướng: giao diện; khả năng hỗ trợ chưa linh hoạt.
- Đề nghị: cải thiện khung giao diện và luồng hoạt động.
- Chưa chọn phương án vì mới thử C.
- Không có quote nguyên văn được cung cấp.

### 9.3. Phân biệt kết quả và điều chưa biết

- **OBSERVED:** lướt slide, dùng gợi ý, xem hỏi đáp; không cần hướng dẫn. Các nhận xét về giao diện, độ linh hoạt và phản ứng được ghi theo tóm tắt của Khánh.
- **INTERPRETED:** chưa có diễn giải riêng của Khánh; không tự suy ra nguyên nhân hoặc mức độ ảnh hưởng.
- **NEXT CHANGE:** đề xuất từ PN05 là cải thiện khung giao diện và luồng hoạt động; chưa chốt thay đổi cụ thể.
- **STILL UNPROVEN:** chưa biết C tốt hơn A/B; chưa xác nhận mức độ hiểu bài, đạt task, căn cứ gợi ý hoặc khả năng reset. Một phiên C chưa đại diện mọi học viên.

Kịch bản phía trên là kế hoạch; bảng này là những gì thực tế được cung cấp. Chưa đánh dấu hoàn thành thử đủ A/B/C.
