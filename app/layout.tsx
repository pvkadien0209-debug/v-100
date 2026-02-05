import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Dịch vụ sản xuất & quản lý video TikTok xây dựng thương hiệu cá nhân chuyên nghiệp',
  description: 'Dành riêng cho luật sư – bác sĩ – dược sĩ – chuyên gia đang muốn phát triển hình ảnh cá nhân bài bản trên TikTok. Sản xuất video trọn gói, quản lý đăng tải, phân tích hiệu quả.',
  keywords: [
    'dịch vụ làm video tiktok',
    'quản lý tiktok cá nhân',
    'xây dựng thương hiệu cá nhân tiktok',
    'dịch vụ quản lý tiktok',
    'làm video tiktok cho luật sư',
    'làm video tiktok cho bác sĩ',
    'sản xuất video ngắn',
    'dịch vụ tiktok marketing',
    'quản lý kênh tiktok',
    'xây dựng personal brand',
  ],
  authors: [{ name: 'TikTok Brand Service' }],
  openGraph: {
    title: 'Dịch vụ sản xuất & quản lý video TikTok xây dựng thương hiệu cá nhân',
    description: 'Chuyên nghiệp dành cho luật sư, bác sĩ, dược sĩ, chuyên gia',
    type: 'website',
    locale: 'vi_VN',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  )
}
