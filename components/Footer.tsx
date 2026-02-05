'use client'

import { motion } from 'framer-motion'
import { Facebook, Instagram, Youtube, Mail, Phone } from 'lucide-react'

export default function Footer() {
  const socialLinks = [
    { icon: Facebook, href: '#', color: 'hover:text-blue-500' },
    { icon: Instagram, href: '#', color: 'hover:text-pink-500' },
    { icon: Youtube, href: '#', color: 'hover:text-red-500' },
  ]

  const footerLinks = {
    'Dịch vụ': [
      { name: 'Sản xuất video TikTok', href: '#services' },
      { name: 'Quản lý đăng tải', href: '#services' },
      { name: 'Quản lý tài khoản', href: '#services' },
    ],
    'Về chúng tôi': [
      { name: 'Giới thiệu', href: '#about' },
      { name: 'Portfolio', href: '#portfolio' },
      { name: 'Quy trình làm việc', href: '#workflow' },
    ],
    'Hỗ trợ': [
      { name: 'Bảng giá', href: '#pricing' },
      { name: 'Liên hệ', href: '#contact' },
      { name: 'Câu hỏi thường gặp', href: '#faq' },
    ],
  }

  return (
    <footer className="relative bg-gradient-to-br from-bg-dark to-primary text-white overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <h3 className="text-3xl font-display font-bold mb-4">TikTok Brand</h3>
              <p className="text-white/80 leading-relaxed">
                Chuyên sản xuất & quản lý video TikTok xây dựng thương hiệu cá nhân chuyên nghiệp cho luật sư, bác sĩ, dược sĩ, chuyên gia.
              </p>
            </motion.div>

            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href="tel:0918284482"
                className="flex items-center gap-3 text-white/80 hover:text-white transition-colors"
              >
                <Phone size={18} />
                <span>0918 284 482</span>
              </a>
              <a
                href="mailto:contact@tiktokbrand.vn"
                className="flex items-center gap-3 text-white/80 hover:text-white transition-colors"
              >
                <Mail size={18} />
                <span>contact@tiktokbrand.vn</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  className={`w-12 h-12 rounded-full bg-white/10 backdrop-blur flex items-center justify-center transition-colors ${social.color}`}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([title, links], columnIndex) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: columnIndex * 0.1 }}
            >
              <h4 className="text-lg font-bold mb-4">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-white/70 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
            <div>
              © {new Date().getFullYear()} TikTok Brand Service. All rights reserved.
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">
                Điều khoản dịch vụ
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Chính sách bảo mật
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
