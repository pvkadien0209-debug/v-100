# TikTok Brand Service Website

Website dịch vụ sản xuất & quản lý video TikTok xây dựng thương hiệu cá nhân chuyên nghiệp.

## 🚀 Tính năng

- ✨ Thiết kế hiện đại với phong cách Editorial Luxury
- 🎨 Màu sắc và font chữ độc đáo (DM Sans + DM Serif Display)
- ⚡ Animations mượt mà với Framer Motion
- 📱 Responsive hoàn toàn cho mọi thiết bị
- 🔍 SEO-friendly với Next.js 14
- 🎯 Performance tối ưu

## 📦 Cài đặt

### Bước 1: Cài dependencies

```bash
npm install
# hoặc
yarn install
# hoặc
pnpm install
```

### Bước 2: Chạy development server

```bash
npm run dev
# hoặc
yarn dev
# hoặc
pnpm dev
```

Mở [http://localhost:3000](http://localhost:3000) trên browser để xem kết quả.

### Bước 3: Build production

```bash
npm run build
npm run start
```

## 📁 Cấu trúc thư mục

```
tiktok-brand-service/
├── app/
│   ├── layout.tsx          # Root layout với SEO metadata
│   ├── page.tsx            # Homepage tổng hợp các components
│   └── globals.css         # Global styles với custom animations
├── components/
│   ├── Navbar.tsx          # Navigation bar với glass morphism
│   ├── Hero.tsx            # Hero section với TikTok mockup
│   ├── Services.tsx        # Services section với pricing cards
│   ├── Pricing.tsx         # Pricing packages (100 video)
│   ├── Workflow.tsx        # 12-step workflow timeline
│   ├── Portfolio.tsx       # Video portfolio với filter
│   ├── Contact.tsx         # Contact form và thông tin liên hệ
│   └── Footer.tsx          # Footer với social links
├── public/
│   └── videos/            # Thư mục chứa video samples
├── styles/                # Additional styles nếu cần
├── package.json
├── next.config.js
├── tailwind.config.js
└── tsconfig.json
```

## 🎨 Customization

### Thay đổi màu sắc

Chỉnh sửa trong `tailwind.config.js`:

```js
colors: {
  primary: '#d81b60',      // Màu chính
  secondary: '#f06292',    // Màu phụ
  accent: '#ff4081',       // Màu nhấn
  'bg-soft': '#fff5f8',    // Background nhẹ
  'bg-dark': '#1a0510',    // Background tối
}
```

### Thay đổi font

Chỉnh sửa trong `app/globals.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=YOUR_FONT&display=swap');
```

Và trong `tailwind.config.js`:

```js
fontFamily: {
  display: ['Your Display Font', 'serif'],
  sans: ['Your Sans Font', 'sans-serif'],
}
```

### Thêm video mẫu

1. Thêm file video vào `/public/videos/`
2. Update data trong `components/Portfolio.tsx`

## 🔧 Technologies

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Google Fonts (DM Sans, DM Serif Display)

## 📞 Liên hệ

- **Hotline/Zalo**: 0918 284 482
- **Email**: contact@tiktokbrand.vn

## 📝 License

Copyright © 2024 TikTok Brand Service
