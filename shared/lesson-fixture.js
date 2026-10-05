// Synthetic teaching fixture shared by A/B/C, not material extracted from a private course.
window.VL_FIXTURE = {
 task:'Bạn chưa rõ truy xuất khác sinh câu trả lời thế nào. Hãy làm rõ rồi trả lời quiz. Nếu vẫn chưa rõ, chuyển câu hỏi tới người hỗ trợ theo mức chia sẻ bạn chọn.',
 slides:{
 5:{title:'Khi câu trả lời thiếu căn cứ',text:'Mô hình có thể tạo câu trả lời nghe hợp lý nhưng không đúng với tài liệu của lớp.',bullets:['Một câu trả lời trôi chảy chưa bảo đảm là đúng.','Cần tài liệu phù hợp với câu hỏi để kiểm tra căn cứ.']},
 6:{title:'RAG: tìm tài liệu rồi trả lời',text:'RAG (Retrieval-Augmented Generation) kết hợp truy xuất tài liệu với sinh câu trả lời.',bullets:['Truy xuất: tìm đoạn tài liệu liên quan đến câu hỏi.','Sinh câu trả lời: dùng câu hỏi và đoạn tài liệu đó để tạo phản hồi.']},
 7:{title:'Bốn bước của RAG',text:'Tài liệu tìm được trở thành ngữ cảnh cho mô hình.',bullets:['1. Nhận câu hỏi của người dùng.','2. Tìm đoạn tài liệu liên quan.','3. Đưa đoạn tài liệu cùng câu hỏi vào mô hình.','4. Mô hình sinh câu trả lời dựa trên ngữ cảnh.']}
 },
 explanation:'Truy xuất tìm các đoạn liên quan. Sinh câu trả lời dùng câu hỏi cùng các đoạn đó để tạo phản hồi. Ví dụ hỏi chính sách đổi trả: truy xuất tìm đoạn chính sách, rồi mô hình dùng đoạn đó để trả lời.',
 coachReply:'Bạn có thể hình dung truy xuất là tìm trang tài liệu cần đọc, còn sinh câu trả lời là dùng trang đó để trả lời câu hỏi. Hãy thử chỉ ra bước tìm tài liệu trong quiz.'
};
