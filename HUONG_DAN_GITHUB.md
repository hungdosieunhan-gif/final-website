# 📦 Hướng Dẫn Đưa Website lên GitHub

## 🚀 Các Bước Thực Hiện

### Bước 1: Tạo Repository trên GitHub

1. **Đăng nhập GitHub:**
   - Truy cập: https://github.com
   - Đăng nhập hoặc đăng ký tài khoản

2. **Tạo Repository mới:**
   - Click nút **New** hoặc **+** → **New repository**
   - Điền thông tin:
     - **Repository name:** `bao-bi-anh-duong` (hoặc tên bạn muốn)
     - **Description:** `Website Công Ty TNHH Bao Bì Ánh Dương - 20 năm kinh nghiệm`
     - **Visibility:** Chọn **Public** (miễn phí) hoặc **Private** (trả phí)
     - **Không** tích vào "Initialize with README" (vì đã có README.md)
   - Click **Create repository**

### Bước 2: Cài Đặt Git (Nếu chưa có)

**Windows:**
- Download Git từ: https://git-scm.com/download/win
- Cài đặt và mở Git Bash

**Mac:**
```bash
# Cài đặt qua Homebrew
brew install git
```

**Linux:**
```bash
sudo apt-get install git
```

### Bước 3: Khởi Tạo Git trong Project

1. **Mở Terminal/Git Bash** trong thư mục project

2. **Khởi tạo Git:**
```bash
git init
```

3. **Thêm tất cả files:**
```bash
git add .
```

4. **Commit lần đầu:**
```bash
git commit -m "Initial commit: Website Bao Bì Ánh Dương"
```

### Bước 4: Kết Nối với GitHub

1. **Thêm remote repository:**
```bash
git remote add origin https://github.com/YOUR_USERNAME/bao-bi-anh-duong.git
```
*(Thay `YOUR_USERNAME` bằng username GitHub của bạn)*

2. **Đổi tên branch thành main (nếu cần):**
```bash
git branch -M main
```

3. **Push code lên GitHub:**
```bash
git push -u origin main
```

4. **Nhập thông tin đăng nhập:**
   - Username: username GitHub của bạn
   - Password: Personal Access Token (xem hướng dẫn bên dưới)

### Bước 5: Tạo Personal Access Token (Nếu cần)

Nếu Git yêu cầu password, bạn cần tạo Personal Access Token:

1. Vào GitHub → **Settings** → **Developer settings**
2. Click **Personal access tokens** → **Tokens (classic)**
3. Click **Generate new token (classic)**
4. Đặt tên token (ví dụ: "Website Deployment")
5. Chọn quyền: **repo** (full control)
6. Click **Generate token**
7. **Copy token** (chỉ hiển thị 1 lần!)
8. Dùng token này làm password khi push code

---

## 📝 Các Lệnh Git Thường Dùng

### Cập Nhật Code

```bash
# Xem trạng thái files
git status

# Thêm file mới hoặc đã sửa
git add .

# Commit với message
git commit -m "Mô tả thay đổi"

# Push lên GitHub
git push origin main
```

### Tạo Branch Mới

```bash
# Tạo và chuyển sang branch mới
git checkout -b feature/new-feature

# Push branch mới lên GitHub
git push -u origin feature/new-feature
```

### Xem Lịch Sử

```bash
# Xem commit history
git log

# Xem thay đổi
git diff
```

---

## 🌐 Deploy lên GitHub Pages (Tùy Chọn)

GitHub Pages cho phép host website miễn phí:

1. **Vào Repository trên GitHub**
2. Click **Settings** → **Pages**
3. **Source:** Chọn branch `main` hoặc `master`
4. **Folder:** Chọn `/ (root)`
5. Click **Save**
6. Website sẽ có tại: `https://YOUR_USERNAME.github.io/bao-bi-anh-duong`

**Lưu ý:** 
- GitHub Pages chỉ hỗ trợ static website (HTML, CSS, JS)
- Không hỗ trợ backend (PHP, Node.js)
- Website này phù hợp với GitHub Pages

---

## 🔄 Cập Nhật Website

Mỗi khi sửa code:

```bash
# 1. Kiểm tra thay đổi
git status

# 2. Thêm files đã sửa
git add .

# 3. Commit
git commit -m "Mô tả thay đổi: ví dụ - Cập nhật thông tin liên hệ"

# 4. Push lên GitHub
git push origin main
```

---

## 📋 Checklist

- [ ] Đã tạo tài khoản GitHub
- [ ] Đã tạo repository mới
- [ ] Đã cài đặt Git
- [ ] Đã khởi tạo Git trong project (`git init`)
- [ ] Đã commit code (`git commit`)
- [ ] Đã kết nối với GitHub (`git remote add`)
- [ ] Đã push code lên GitHub (`git push`)
- [ ] Đã kiểm tra code trên GitHub
- [ ] (Tùy chọn) Đã setup GitHub Pages

---

## 🔧 Xử Lý Sự Cố

### Lỗi: "fatal: remote origin already exists"
```bash
# Xóa remote cũ
git remote remove origin

# Thêm lại
git remote add origin https://github.com/YOUR_USERNAME/bao-bi-anh-duong.git
```

### Lỗi: "Permission denied"
- Kiểm tra Personal Access Token
- Đảm bảo token có quyền `repo`

### Lỗi: "failed to push some refs"
```bash
# Pull code mới nhất trước
git pull origin main --rebase

# Sau đó push lại
git push origin main
```

---

## 📞 Hỗ Trợ

Nếu gặp vấn đề:
- **GitHub Docs:** https://docs.github.com
- **Git Documentation:** https://git-scm.com/doc
- **Email:** quanghunga12k42@gmail.com

---

**Chúc bạn thành công! 🎉**

