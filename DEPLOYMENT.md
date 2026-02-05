# 🚀 Hướng dẫn Deploy

## Deploy lên Vercel (Recommended - Miễn phí)

Vercel là platform tốt nhất để deploy Next.js apps, được tạo bởi team phát triển Next.js.

### Bước 1: Chuẩn bị

1. Tạo tài khoản tại [vercel.com](https://vercel.com)
2. Kết nối với GitHub/GitLab account

### Bước 2: Deploy

**Option A: Deploy từ GitHub (Recommended)**

1. Push code lên GitHub repository
2. Vào Vercel Dashboard → New Project
3. Import repository của bạn
4. Vercel tự động detect Next.js và config
5. Click "Deploy"
6. Done! Website live sau 2-3 phút

**Option B: Deploy bằng Vercel CLI**

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Production deploy
vercel --prod
```

### Bước 3: Custom Domain (Optional)

1. Vào Settings → Domains trong Vercel Dashboard
2. Add domain của bạn (ví dụ: tiktokbrand.vn)
3. Update DNS records theo hướng dẫn
4. Đợi DNS propagation (5-30 phút)

## Deploy lên Netlify

### Deploy bằng Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build project
npm run build

# Deploy
netlify deploy

# Production deploy
netlify deploy --prod
```

## Deploy lên VPS/Server (Ubuntu)

### Bước 1: Setup Server

```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

# Install PM2
sudo npm install -g pm2
```

### Bước 2: Deploy App

```bash
# Clone hoặc upload code lên server
git clone YOUR_REPO_URL
cd tiktok-brand-service

# Install dependencies
npm install

# Build
npm run build

# Start với PM2
pm2 start npm --name "tiktok-brand" -- start
pm2 save
pm2 startup
```

### Bước 3: Setup Nginx (Reverse Proxy)

```nginx
# /etc/nginx/sites-available/tiktokbrand

server {
    listen 80;
    server_name tiktokbrand.vn www.tiktokbrand.vn;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

```bash
# Enable site
sudo ln -s /etc/nginx/sites-available/tiktokbrand /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

### Bước 4: Setup SSL với Let's Encrypt

```bash
sudo apt install certbot python3-certbot-nginx -y
sudo certbot --nginx -d tiktokbrand.vn -d www.tiktokbrand.vn
```

## Deploy lên Cloudflare Pages

1. Vào Cloudflare Dashboard → Pages
2. Connect repository
3. Build settings:
   - Framework preset: **Next.js**
   - Build command: `npm run build`
   - Build output directory: `.next`
4. Deploy

## Environment Variables

Nhớ set environment variables trong dashboard của platform:

- Vercel: Settings → Environment Variables
- Netlify: Site settings → Environment variables
- Cloudflare Pages: Settings → Environment variables

## Performance Optimization

### 1. Image Optimization

Next.js tự động optimize images, nhưng nên:
- Compress images trước khi upload
- Dùng WebP format
- Lazy load images

### 2. Caching

Set cache headers trong `next.config.js`:

```js
async headers() {
  return [
    {
      source: '/(.*)',
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=3600, s-maxage=3600',
        },
      ],
    },
  ];
}
```

### 3. CDN

Vercel và Cloudflare tự động dùng CDN. Nếu deploy VPS:
- Dùng Cloudflare CDN (miễn phí)
- Setup caching rules

## Monitoring

### Vercel Analytics

```bash
npm install @vercel/analytics
```

Add vào `app/layout.tsx`:

```tsx
import { Analytics } from '@vercel/analytics/react'

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```

### Google Analytics

Add tracking code vào `app/layout.tsx`.

## Troubleshooting

### Build fails

```bash
# Clear cache
rm -rf .next
rm -rf node_modules
npm install
npm run build
```

### Port already in use

```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9
```

## 📞 Hỗ trợ

Nếu gặp vấn đề khi deploy, liên hệ:
- Email: contact@tiktokbrand.vn
- Phone: 0918 284 482
