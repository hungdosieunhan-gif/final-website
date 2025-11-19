# 🚀 Hướng Dẫn Deploy Website lên Tên Miền anhduongparking.io.vn

## ✅ Đã Hoàn Thành
- ✅ Đã cập nhật tất cả URLs sang `anhduongparking.io.vn`
- ✅ Đã cập nhật sitemap.xml
- ✅ Đã cập nhật robots.txt
- ✅ Website đã sẵn sàng để deploy

---

## 📋 Các Bước Tiếp Theo

### Bước 1: Chuẩn Bị Hosting

Bạn cần có **hosting** để chạy website. Có 2 lựa chọn:

#### Option A: Hosting Có Trả Phí (Khuyến Nghị)

**Nếu mua tên miền tại P.A Vietnam:**
1. Đăng nhập vào tài khoản P.A Vietnam
2. Mua hosting (gói Shared Hosting ~500,000-1,000,000 VNĐ/năm)
3. Trong bảng điều khiển:
   - Vào **Quản lý tên miền**
   - Thêm tên miền `anhduongparking.io.vn`
   - Cấu hình DNS tự động

**Nếu mua tên miền ở nơi khác:**
1. Mua hosting tại P.A Vietnam, NhanHoa, hoặc MatBao
2. Lấy thông tin DNS từ hosting
3. Vào nhà cung cấp tên miền → cấu hình DNS

#### Option B: Hosting Miễn Phí (Cho Test)

**Netlify (Khuyến nghị):**
1. Truy cập: https://www.netlify.com
2. Đăng ký tài khoản (miễn phí)
3. Kéo thả folder website vào Netlify
4. Vào **Domain settings** → **Add custom domain**
5. Nhập: `anhduongparking.io.vn`
6. Làm theo hướng dẫn cấu hình DNS

**Vercel:**
1. Truy cập: https://vercel.com
2. Đăng ký và import project
3. Thêm custom domain

---

### Bước 2: Upload Website lên Hosting

#### Nếu dùng Hosting có FTP:

1. **Lấy thông tin FTP từ hosting:**
   - FTP Host: `ftp.anhduongparking.io.vn` hoặc IP hosting
   - Username: từ email hosting
   - Password: từ email hosting
   - Port: 21 (hoặc 22 cho SFTP)

2. **Cài đặt FTP Client:**
   - **FileZilla** (Windows/Mac): https://filezilla-project.org
   - **WinSCP** (Windows): https://winscp.net
   - **Cyberduck** (Mac): https://cyberduck.io

3. **Upload files:**
   - Kết nối FTP với thông tin trên
   - Upload **TẤT CẢ** files và folders vào thư mục:
     - `public_html` hoặc
     - `www` hoặc
     - `htdocs`
   - Đảm bảo `index.html` ở thư mục gốc
   - Đảm bảo `robots.txt` và `sitemap.xml` ở thư mục gốc

4. **Cấu trúc thư mục trên hosting:**
```
public_html/
├── index.html
├── robots.txt
├── sitemap.xml
├── css/
│   └── style.css
├── js/
│   └── main.js
├── ảnh logo/
├── ảnh sản phẩm/
└── về chúng tôi/
```

#### Nếu dùng Netlify/Vercel:

1. **Netlify:**
   - Kéo thả toàn bộ folder vào Netlify
   - Hoặc kết nối GitHub repo
   - Website tự động deploy

2. **Vercel:**
   - Import từ GitHub
   - Hoặc upload folder
   - Deploy tự động

---

### Bước 3: Kiểm Tra Website

1. **Mở trình duyệt và truy cập:**
   - `http://anhduongparking.io.vn`
   - `https://anhduongparking.io.vn` (nếu có SSL)

2. **Kiểm tra các trang:**
   - ✅ Trang chủ hiển thị đúng
   - ✅ Tất cả hình ảnh load được
   - ✅ CSS và JS hoạt động
   - ✅ Form hoạt động
   - ✅ Menu navigation hoạt động

3. **Kiểm tra files quan trọng:**
   - `https://anhduongparking.io.vn/robots.txt` → Phải hiển thị
   - `https://anhduongparking.io.vn/sitemap.xml` → Phải hiển thị

---

### Bước 4: Cài Đặt SSL (HTTPS)

**Quan trọng:** Website cần HTTPS để Google index tốt hơn.

#### Nếu dùng Hosting có trả phí:
- Hầu hết hosting hiện đại có **SSL miễn phí** (Let's Encrypt)
- Vào bảng điều khiển hosting → **SSL/TLS** → **Install SSL**
- Hoặc liên hệ support hosting để họ cài đặt

#### Nếu dùng Netlify/Vercel:
- SSL tự động được cài đặt
- Không cần làm gì thêm

**Sau khi cài SSL:**
- Website sẽ chạy trên `https://anhduongparking.io.vn`
- Có thể cần đợi vài phút để SSL active

---

### Bước 5: Đăng Ký Google Search Console

1. **Truy cập:** https://search.google.com/search-console

2. **Thêm Property:**
   - Click **Add Property**
   - Chọn **URL prefix**
   - Nhập: `https://anhduongparking.io.vn`
   - Click **Continue**

3. **Xác Thực Quyền Sở Hữu:**

   **Cách 1: HTML Tag (Dễ nhất)**
   - Copy mã verification từ Google (dạng: `abc123xyz...`)
   - Mở file `index.html`
   - Tìm dòng:
   ```html
   <!-- <meta name="google-site-verification" content="YOUR_VERIFICATION_CODE"> -->
   ```
   - Thay `YOUR_VERIFICATION_CODE` bằng mã từ Google
   - Bỏ comment `<!-- -->` → Thành:
   ```html
   <meta name="google-site-verification" content="abc123xyz...">
   ```
   - Upload lại file `index.html` lên hosting
   - Vào Google Search Console → Click **Verify**

   **Cách 2: Upload HTML File**
   - Download file HTML từ Google
   - Upload vào thư mục gốc website
   - Click **Verify**

4. **Submit Sitemap:**
   - Vào **Sitemaps** trong menu
   - Nhập: `sitemap.xml`
   - Click **Submit**
   - Đợi Google index (1-7 ngày)

---

### Bước 6: Thiết Lập Google Analytics

1. **Truy cập:** https://analytics.google.com

2. **Tạo Tài Khoản:**
   - Click **Start measuring**
   - Điền thông tin:
     - Account name: `Bao Bì Ánh Dương`
     - Property name: `anhduongparking.io.vn`
     - Time zone: `(GMT+07:00) Ho Chi Minh`
     - Currency: `Vietnamese Dong (VND)`

3. **Lấy Measurement ID:**
   - Vào **Admin** → **Data Streams**
   - Click **Add stream** → **Web**
   - Điền:
     - Website URL: `https://anhduongparking.io.vn`
     - Stream name: `anhduongparking.io.vn`
   - Click **Create stream**
   - Copy **Measurement ID** (dạng: `G-XXXXXXXXXX`)

4. **Thêm vào Website:**
   - Mở file `index.html`
   - Tìm dòng:
   ```html
   <!-- <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
   <script>
       window.dataLayer = window.dataLayer || [];
       function gtag(){dataLayer.push(arguments);}
       gtag('js', new Date());
       gtag('config', 'G-XXXXXXXXXX');
   </script> -->
   ```
   - Thay `G-XXXXXXXXXX` bằng Measurement ID của bạn (2 chỗ)
   - Bỏ comment `<!-- -->` → Thành:
   ```html
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
   <script>
       window.dataLayer = window.dataLayer || [];
       function gtag(){dataLayer.push(arguments);}
       gtag('js', new Date());
       gtag('config', 'G-XXXXXXXXXX');
   </script>
   ```
   - Upload lại file `index.html`

5. **Kiểm Tra:**
   - Vào Google Analytics → **Realtime** → **Overview**
   - Truy cập website
   - Xem dữ liệu realtime (có thể mất vài phút)

---

### Bước 7: Kiểm Tra SEO

1. **Google PageSpeed Insights:**
   - URL: https://pagespeed.web.dev
   - Nhập: `https://anhduongparking.io.vn`
   - Kiểm tra điểm số Performance và SEO

2. **Google Rich Results Test:**
   - URL: https://search.google.com/test/rich-results
   - Nhập: `https://anhduongparking.io.vn`
   - Kiểm tra structured data

3. **Mobile-Friendly Test:**
   - URL: https://search.google.com/test/mobile-friendly
   - Nhập: `https://anhduongparking.io.vn`
   - Kiểm tra mobile compatibility

---

## ✅ Checklist Sau Khi Deploy

- [ ] Website hoạt động trên `https://anhduongparking.io.vn`
- [ ] SSL certificate đã cài (HTTPS)
- [ ] Tất cả hình ảnh hiển thị đúng
- [ ] CSS và JS hoạt động
- [ ] Form hoạt động
- [ ] `robots.txt` accessible tại `https://anhduongparking.io.vn/robots.txt`
- [ ] `sitemap.xml` accessible tại `https://anhduongparking.io.vn/sitemap.xml`
- [ ] Google Search Console đã verify
- [ ] Sitemap đã submit vào Google Search Console
- [ ] Google Analytics đã cài đặt và hoạt động
- [ ] PageSpeed score > 80
- [ ] Mobile responsive OK

---

## 🔧 Xử Lý Sự Cố

### Website không hiển thị:
- Kiểm tra file `index.html` đã upload đúng chưa
- Kiểm tra tên file phải là `index.html` (chữ thường)
- Kiểm tra quyền truy cập file (chmod 644)

### Hình ảnh không hiển thị:
- Kiểm tra đường dẫn hình ảnh (có thể cần sửa đường dẫn)
- Kiểm tra tên file (phải đúng chính xác, kể cả dấu tiếng Việt)
- Upload lại folder hình ảnh

### SSL không hoạt động:
- Đợi vài phút (SSL cần thời gian active)
- Liên hệ support hosting
- Kiểm tra DNS đã trỏ đúng chưa

### Google Search Console không verify:
- Kiểm tra meta tag đã thêm đúng chưa
- Đảm bảo đã upload lại file sau khi sửa
- Thử phương pháp khác (upload HTML file)

---

## 📞 Hỗ Trợ

Nếu gặp vấn đề, liên hệ:
- **Email:** quanghunga12k42@gmail.com
- **Hotline:** 0974 485 896

---

**Chúc bạn deploy thành công! 🎉**

