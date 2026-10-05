# Mở bộ prototype

## Tester

1. Tải repo về máy hoặc dùng Download ZIP trên GitHub rồi giải nén.
2. Mở `index.html` bằng Chrome/Edge trên laptop/desktop.
3. Chọn A/B/C, làm cùng task, dùng “Làm lại từ đầu” trước lượt mới.

`options/option-a.html`, `option-b.html`, `option-c.html` là ba file độc lập: CSS và JS nhúng sẵn. Có thể gửi riêng từng file cho tester; link về bộ A/B/C chỉ hoạt động nếu giữ cấu trúc repo. Không cần Python, Node, server, API key hoặc mạng để thao tác prototype.

Phản hồi AI/coach soạn sẵn, số cộng đồng minh họa. Không gửi dữ liệu thật. Không ghi log tester hoặc lưu phiên.
C mặc định tắt; tester có thể không bật. Nếu bật, ở slide 6 đủ 20 giây hoặc mở slide đó lần 2 trong phiên sẽ có gợi ý, tối đa 2 lần. Không hướng dẫn trigger trong lúc test; xem annotations dành cho nhóm.

## Sửa code

Nguồn chính: `shared/prototype.css`, `shared/prototype.js`; giao diện theo `design.md`.
Sau sửa, chạy `python scripts/build_prototypes.py` để sinh lại 3 file HTML. Không sửa riêng output HTML rồi để lệch ba bản.

## QA tự động tùy chọn

Chỉ người phát triển cần cài: `npm install`, `npx playwright install chromium`, `npm run check:prototypes`.
Kiểm tra dùng Chromium headless mở trực tiếp `file://`, không thay thế tester thật. Output: `test/prototype-checks.json`, ảnh ở `test/screenshots/`.
Biến `LAB_CHROMIUM_PACKAGE` là tùy chọn môi trường QA để chỉ đường dẫn module Chromium khác; không cần cho tester.

QA không chứng minh người ngoài tự hiểu giao diện, giá trị sản phẩm hoặc lựa chọn thắng. Trước Gate 4, nhóm cần người không build kiểm tra mở/task/reset và ghi kết quả thật.
