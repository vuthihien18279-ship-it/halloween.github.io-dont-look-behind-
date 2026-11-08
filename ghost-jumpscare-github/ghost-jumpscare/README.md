# Ghost Jumpscare

Hiệu ứng jumpscare đơn giản chạy trên trình duyệt:
- Nhấn **BẮT ĐẦU** để kích hoạt.
- Bóng ma phóng từ rất xa tới gần trong 1 giây.
- Nền chớp trắng/đen; hình ma đổi đen/trắng ngược với nền.

## Chạy thử
Mở `index.html` bằng Chrome, Edge hoặc Firefox.

## Đưa lên GitHub Pages
1. Tạo repository mới trên GitHub.
2. Tải lên `index.html`, `style.css`, `script.js` và `README.md`.
3. Vào **Settings → Pages**.
4. Chọn **Deploy from a branch**, branch `main`, folder `/ (root)`, rồi Save.
5. Mở đường dẫn GitHub Pages được cấp.

## Thay ảnh
Trong `index.html`, thay URL trong thuộc tính `src` của thẻ `<img class="ghost">` bằng URL ảnh khác. Có thể tải ảnh vào repository rồi dùng `src="ghost.jpg"`.

## Lưu ý an toàn
Hiệu ứng nhấp nháy trắng/đen có thể gây khó chịu hoặc kích hoạt co giật nhạy cảm ánh sáng ở một số người. Không dùng để gây bất ngờ cho người có tiền sử động kinh nhạy cảm ánh sáng.
