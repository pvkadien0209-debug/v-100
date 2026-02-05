# 🎯 HƯỚNG DẪN NHANH - BẮT ĐẦU TRONG 5 PHÚT

## ✅ YÊU CẦU HỆ THỐNG

- **Node.js**: Version 18 trở lên
  - Download tại: https://nodejs.org/
  - Chọn bản LTS (Long Term Support)

## 🚀 CÀI ĐẶT VÀ CHẠY

### Bước 1: Mở Terminal/Command Prompt

**Windows**: 
- Nhấn `Win + R`
- Gõ `cmd` và Enter

**Mac**: 
- Nhấn `Cmd + Space`
- Gõ `terminal` và Enter

### Bước 2: Di chuyển vào thư mục project

```bash
cd tiktok-brand-service
```

### Bước 3: Cài đặt dependencies

```bash
npm install
```

⏳ Quá trình này mất khoảng 2-3 phút

### Bước 4: Chạy website

```bash
npm run dev
```

### Bước 5: Mở browser

Truy cập: **http://localhost:3000**

🎉 **XONG! Website đã chạy trên máy bạn**

## 📝 CHỈNH SỬA NỘI DUNG

### Thay đổi số điện thoại

Tìm và thay `0918 284 482` thành số của bạn trong các file:

1. `components/Navbar.tsx`
2. `components/Hero.tsx`
3. `components/Pricing.tsx`
4. `components/Contact.tsx`
5. `components/Footer.tsx`

### Thay đổi email

Tìm và thay `contact@tiktokbrand.vn` trong:

1. `components/Contact.tsx`
2. `components/Footer.tsx`

### Thay đổi màu sắc

Mở file `tailwind.config.js`, tìm phần `colors`:

```js
colors: {
  primary: '#d81b60',      // Màu chính (màu hồng)
  secondary: '#f06292',    // Màu phụ
  accent: '#ff4081',       // Màu nhấn
}
```

Thay đổi mã màu hex theo ý muốn.

### Thay đổi giá

Mở file `components/Pricing.tsx` và sửa:

```js
price: '15 triệu',  // Thay thành giá của bạn
```

## 🌐 DEPLOY LÊN INTERNET

### Cách 1: Deploy miễn phí lên Vercel (Đơn giản nhất)

1. Tạo tài khoản tại: https://vercel.com
2. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```
3. Login:
   ```bash
   vercel login
   ```
4. Deploy:
   ```bash
   vercel
   ```
5. Làm theo hướng dẫn trên màn hình
6. Done! Bạn sẽ nhận được link website

### Cách 2: Deploy lên Netlify

1. Tạo tài khoản: https://netlify.com
2. Drag & drop folder `tiktok-brand-service` vào Netlify
3. Chờ 2-3 phút
4. Website live!

## 🛠️ CÁC LỆNH HỮU ÍCH

```bash
# Chạy development
npm run dev

# Build production
npm run build

# Chạy production build
npm run start

# Check lỗi code
npm run lint
```

## ❗ XỬ LÝ LỖI THƯỜNG GẶP

### Lỗi: "npm: command not found"
**Giải pháp**: Cài Node.js từ https://nodejs.org/

### Lỗi: "Port 3000 is already in use"
**Giải pháp**: 
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID_NUMBER> /F

# Mac/Linux
lsof -ti:3000 | xargs kill -9
```

### Lỗi khi npm install
**Giải pháp**:
```bash
# Xóa node_modules và cài lại
rm -rf node_modules
rm package-lock.json
npm install
```

## 📱 TEST TRÊN ĐIỆN THOẠI

1. Tìm IP máy tính:
   - Windows: `ipconfig` → IPv4 Address
   - Mac: `ifconfig` → inet
   
2. Mở browser trên điện thoại

3. Truy cập: `http://[IP_CỦA_BẠN]:3000`
   
   Ví dụ: `http://192.168.1.100:3000`

## 📞 HỖ TRỢ

Gặp khó khăn? Liên hệ:
- 📧 Email: contact@tiktokbrand.vn
- 📱 Hotline: 0918 284 482

## 🎓 HỌC THÊM

- Next.js Docs: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs
- Framer Motion: https://www.framer.com/motion/

---

💡 **TIP**: Sau khi chỉnh sửa code, save file và browser sẽ tự động reload!
