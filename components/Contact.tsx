'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, MessageCircle, Send, MapPin, Clock } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="relative bg-gradient-to-br from-bg-soft to-white noise-overlay">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl lg:text-6xl font-display font-bold mb-6">
            Liên hệ <span className="gradient-text">với chúng tôi</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sẵn sàng xây dựng thương hiệu cá nhân trên TikTok? Hãy liên hệ ngay để được tư vấn miễn phí!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 lg:p-10 shadow-xl"
          >
            <h3 className="text-3xl font-display font-bold mb-6">Gửi tin nhắn</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Họ và tên *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors"
                  placeholder="Nguyễn Văn A"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Số điện thoại *
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors"
                  placeholder="0918 284 482"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors"
                  placeholder="email@example.com"
                />
              </div>

              <div>
                <label htmlFor="profession" className="block text-sm font-medium text-gray-700 mb-2">
                  Nghề nghiệp *
                </label>
                <select
                  id="profession"
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors"
                >
                  <option value="">Chọn nghề nghiệp</option>
                  <option value="lawyer">Luật sư</option>
                  <option value="doctor">Bác sĩ</option>
                  <option value="pharmacist">Dược sĩ</option>
                  <option value="consultant">Chuyên gia / Cố vấn</option>
                  <option value="teacher">Giáo viên</option>
                  <option value="other">Khác</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Nội dung tin nhắn
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors resize-none"
                  placeholder="Mô tả ngắn về nhu cầu của bạn..."
                />
              </div>

              <button
                type="submit"
                className="w-full btn-gradient text-white py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2"
              >
                Gửi tin nhắn
                <Send size={20} />
              </button>
            </form>
          </motion.div>

          {/* Right: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Main CTA Card */}
            <div className="bg-gradient-primary rounded-3xl p-8 text-white shadow-xl">
              <h3 className="text-3xl font-display font-bold mb-4">Tư vấn ngay</h3>
              <p className="text-white/90 mb-6">
                Liên hệ hotline để được tư vấn miễn phí về chiến lược TikTok phù hợp với ngành nghề của bạn
              </p>
              <a
                href="tel:0918284482"
                className="flex items-center gap-4 bg-white text-primary px-6 py-4 rounded-2xl font-bold text-xl hover:scale-105 transition-transform"
              >
                <Phone size={28} />
                <div>
                  <div className="text-sm opacity-80">Hotline / Zalo</div>
                  <div>0918 284 482</div>
                </div>
              </a>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              <motion.a
                href="https://zalo.me/0918284482"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-4 bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                  <MessageCircle className="text-white" size={28} />
                </div>
                <div>
                  <div className="font-bold text-lg">Nhắn tin Zalo</div>
                  <div className="text-sm text-gray-600">Phản hồi nhanh 24/7</div>
                </div>
              </motion.a>

              <motion.a
                href="mailto:contact@tiktokbrand.vn"
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-4 bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
                  <Mail className="text-white" size={28} />
                </div>
                <div>
                  <div className="font-bold text-lg">Email</div>
                  <div className="text-sm text-gray-600">contact@tiktokbrand.vn</div>
                </div>
              </motion.a>
            </div>

            {/* Additional Info */}
            <div className="bg-white rounded-3xl p-8 shadow-lg space-y-4">
              <div className="flex items-start gap-4">
                <MapPin className="text-primary flex-shrink-0 mt-1" size={24} />
                <div>
                  <div className="font-bold mb-1">Địa chỉ</div>
                  <div className="text-gray-600">Hồ Chí Minh, Việt Nam</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="text-primary flex-shrink-0 mt-1" size={24} />
                <div>
                  <div className="font-bold mb-1">Giờ làm việc</div>
                  <div className="text-gray-600">Thứ 2 - Thứ 7: 8:00 - 18:00</div>
                  <div className="text-gray-600">Chủ nhật: 9:00 - 17:00</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
