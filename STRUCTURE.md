# 📁 CẤU TRÚC THỨ MỤC - GIẢI THÍCH CHI TIẾT

## 📂 Cấu trúc tổng quan

```
tiktok-brand-service/
├── 📂 app/                    # Next.js App Router
│   ├── 📄 layout.tsx         # Layout chính + SEO metadata
│   ├── 📄 page.tsx           # Trang chủ (tổng hợp components)
│   └── 📄 globals.css        # CSS toàn cục + animations
│
├── 📂 components/             # React Components
│   ├── 📄 Navbar.tsx         # Thanh navigation (menu)
│   ├── 📄 Hero.tsx           # Section đầu trang (Hero)
│   ├── 📄 Services.tsx       # Section dịch vụ
│   ├── 📄 Pricing.tsx        # Section bảng giá
│   ├── 📄 Workflow.tsx       # Section quy trình làm việc
│   ├── 📄 Portfolio.tsx      # Section portfolio/video mẫu
│   ├── 📄 Contact.tsx        # Section liên hệ + form
│   └── 📄 Footer.tsx         # Footer (chân trang)
│
├── 📂 public/                 # Static files (ảnh, video, fonts)
│   └── 📂 videos/            # Thư mục chứa video mẫu
│
├── 📄 package.json           # Dependencies và scripts
├── 📄 next.config.js         # Next.js configuration
├── 📄 tailwind.config.js     # Tailwind CSS config (màu, font)
├── 📄 tsconfig.json          # TypeScript configuration
├── 📄 postcss.config.js      # PostCSS configuration
├── 📄 .gitignore             # Git ignore rules
├── 📄 .env.example           # Environment variables mẫu
│
└── 📚 Documentation
    ├── 📄 README.md          # Hướng dẫn tổng quan
    ├── 📄 QUICK_START.md     # Hướng dẫn bắt đầu nhanh
    ├── 📄 DEPLOYMENT.md      # Hướng dẫn deploy
    └── 📄 STRUCTURE.md       # File này
```

## 📄 GIẢI THÍCH TỪNG FILE QUAN TRỌNG

### 🔧 Configuration Files (Files cấu hình)

#### `package.json`
- Chứa danh sách packages cần cài
- Scripts để chạy, build, deploy
- **Không cần chỉnh sửa** trừ khi thêm package mới

#### `next.config.js`
- Cấu hình Next.js
- Config domains cho images
- **Hiếm khi cần sửa**

#### `tailwind.config.js`
- ⭐ **QUAN TRỌNG**: Đây là nơi thay đổi màu sắc, font chữ
- Customize theme của website
- Thêm animations mới

```js
// Ví dụ thay đổi màu
colors: {
  primary: '#d81b60',    // 👈 Thay màu chính ở đây
  secondary: '#f06292',  // 👈 Màu phụ
}
```

#### `tsconfig.json`
- TypeScript configuration
- **Không cần sửa**

### 📱 App Directory

#### `app/layout.tsx`
- Layout chung cho toàn website
- **Chứa SEO metadata** (title, description, keywords)
- ⭐ **CẦN SỬA**: metadata để SEO tốt hơn

```tsx
export const metadata: Metadata = {
  title: 'Tên website của bạn',        // 👈 Sửa ở đây
  description: 'Mô tả website',        // 👈 Sửa ở đây
  keywords: ['keyword1', 'keyword2'],  // 👈 Sửa ở đây
}
```

#### `app/page.tsx`
- Trang chủ
- Import và sắp xếp các components
- **Ít khi cần sửa**, chỉ thay đổi thứ tự sections

#### `app/globals.css`
- CSS toàn cục
- Custom animations
- Variables CSS
- **Có thể sửa** để thay đổi styles chung

### 🧩 Components Directory

Mỗi component là 1 section trong website:

#### `Navbar.tsx` - Thanh menu
- Logo
- Menu links
- Button liên hệ
- Mobile menu

**Cần sửa**:
- Logo text
- Menu items
- Số điện thoại trong button

#### `Hero.tsx` - Section đầu trang
- Heading chính
- Subtitle
- CTA buttons
- TikTok phone mockup
- Stats (500+ video, 100+ khách hàng)

**Cần sửa**:
- Heading text
- Subtitle
- Button text
- Stats numbers

#### `Services.tsx` - Dịch vụ
- 3 gói dịch vụ chính
- Dịch vụ bổ sung
- Features list

**Cần sửa**:
- Giá dịch vụ
- Features list
- Descriptions

#### `Pricing.tsx` - Bảng giá
- 3 packages: Cơ bản, Trung cấp, Cao cấp
- Features của từng gói
- Giá cả

**Cần sửa**:
- Giá các gói
- Features
- Package names

#### `Workflow.tsx` - Quy trình
- 12 bước làm việc
- Timeline visualization
- Thời gian hoàn thành

**Có thể sửa**:
- Steps descriptions
- Timeline

#### `Portfolio.tsx` - Video mẫu
- Grid video samples
- Filter theo category
- Video cards

**Cần sửa**:
- Thêm/bớt videos
- Categories
- Video info

#### `Contact.tsx` - Liên hệ
- Contact form
- Thông tin liên hệ
- Social links

**Cần sửa**:
- Số điện thoại
- Email
- Địa chỉ
- Giờ làm việc

#### `Footer.tsx` - Chân trang
- Links
- Social media
- Contact info
- Copyright

**Cần sửa**:
- Footer links
- Social links
- Contact info

## 🎨 CUSTOMIZATION CHECKLIST

### ✅ Bắt buộc phải sửa:

1. **Số điện thoại** trong:
   - [ ] Navbar.tsx
   - [ ] Hero.tsx
   - [ ] Pricing.tsx
   - [ ] Contact.tsx
   - [ ] Footer.tsx

2. **Email** trong:
   - [ ] Contact.tsx
   - [ ] Footer.tsx

3. **SEO Metadata** trong:
   - [ ] app/layout.tsx

4. **Giá cả** trong:
   - [ ] Services.tsx
   - [ ] Pricing.tsx

### 🎯 Nên sửa để phù hợp:

5. **Logo/Brand name** trong:
   - [ ] Navbar.tsx
   - [ ] Footer.tsx

6. **Stats numbers** trong:
   - [ ] Hero.tsx

7. **Video samples** trong:
   - [ ] Portfolio.tsx

8. **Features lists** trong:
   - [ ] Services.tsx
   - [ ] Pricing.tsx

### 🎨 Tùy chỉnh (optional):

9. **Màu sắc** trong:
   - [ ] tailwind.config.js

10. **Font chữ** trong:
    - [ ] tailwind.config.js
    - [ ] app/globals.css

## 📝 MẸO CHỈNH SỬA

### Tìm và thay nhanh

Sử dụng Find & Replace trong VS Code:
- Nhấn `Ctrl + Shift + F` (Windows) hoặc `Cmd + Shift + F` (Mac)
- Tìm: `0918 284 482`
- Thay: Số điện thoại của bạn
- Replace All

### Test thay đổi

Sau mỗi lần sửa:
1. Save file (`Ctrl + S` hoặc `Cmd + S`)
2. Browser tự động reload
3. Kiểm tra thay đổi

### Backup trước khi sửa

```bash
# Copy toàn bộ folder trước khi sửa
cp -r tiktok-brand-service tiktok-brand-service-backup
```

## 🔍 TÌM NỘI DUNG TRONG CODE

**Muốn sửa heading chính?**
→ Mở `components/Hero.tsx` → Tìm `<h1>`

**Muốn thay đổi giá?**
→ Mở `components/Pricing.tsx` → Tìm `price:`

**Muốn đổi màu?**
→ Mở `tailwind.config.js` → Tìm `colors:`

**Muốn sửa menu?**
→ Mở `components/Navbar.tsx` → Tìm `navLinks`

## 💡 TIPS

1. **Luôn test trên nhiều thiết bị**: Desktop, mobile, tablet
2. **Check responsive**: Resize browser để xem
3. **Test các button**: Đảm bảo phone/email links hoạt động
4. **Optimize images**: Compress trước khi thêm vào `/public/`
5. **Git commit thường xuyên**: Để có thể revert nếu sai

## 📞 CẦN TRỢ GIÚP?

- 📧 Email: contact@tiktokbrand.vn
- 📱 Phone: 0918 284 482
