'use client'

import { motion } from 'framer-motion'
import { Video, Calendar, BarChart3, MessageSquare, TrendingUp, FileCheck } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: Video,
      title: 'Sản xuất video TikTok trọn gói',
      price: 'Theo gói',
      features: [
        'Lên kịch bản chuyên nghiệp',
        'Dựng video chuẩn TikTok',
        'Voice AI hoặc giọng thật',
        'Slide hình ảnh đẹp mắt',
        'Caption chuẩn SEO TikTok',
      ],
      color: 'from-pink-500 to-rose-500',
    },
    {
      icon: Calendar,
      title: 'Quản lý đăng tải',
      price: '2.000.000đ/tháng',
      features: [
        'Đăng đều theo lịch hàng ngày',
        'Theo dõi lượt xem – like – follow',
        'Báo cáo tuần chi tiết',
        'Tối ưu thời gian đăng bài',
        'Quản lý hashtag hiệu quả',
      ],
      color: 'from-purple-500 to-indigo-500',
    },
    {
      icon: BarChart3,
      title: 'Quản lý tài khoản chuyên sâu',
      price: '5.000.000đ/tháng',
      features: [
        'Thống kê comment – câu hỏi',
        'Trả lời comment đơn giản',
        'Tổng hợp câu hỏi chuyên môn (Excel)',
        'Phân tích kênh chuyên sâu',
        'Đề xuất điều chỉnh nội dung',
      ],
      color: 'from-blue-500 to-cyan-500',
      featured: true,
    },
  ]

  const additionalServices = [
    {
      icon: MessageSquare,
      title: 'Tư vấn chiến lược nội dung',
      description: 'Phân tích đối thủ, xác định ngách, lên kế hoạch nội dung dài hạn',
    },
    {
      icon: TrendingUp,
      title: 'Chạy quảng cáo TikTok Ads',
      description: 'Tối ưu chi phí, targeting chính xác, tăng reach nhanh chóng',
    },
    {
      icon: FileCheck,
      title: 'Xây dựng personal branding',
      description: 'Định vị thương hiệu cá nhân rõ ràng, nhất quán trên mọi nền tảng',
    },
  ]

  return (
    <section id="services" className="relative noise-overlay bg-gradient-to-br from-bg-soft to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl lg:text-6xl font-display font-bold mb-6">
            Dịch vụ <span className="gradient-text">của chúng tôi</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Giải pháp toàn diện từ sản xuất video đến quản lý kênh TikTok chuyên nghiệp
          </p>
        </motion.div>

        {/* Main Services */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`card-hover bg-white rounded-3xl p-8 shadow-lg relative overflow-hidden ${
                service.featured ? 'ring-2 ring-primary' : ''
              }`}
            >
              {service.featured && (
                <div className="absolute top-4 right-4 bg-gradient-primary text-white text-xs px-3 py-1 rounded-full font-semibold">
                  PHỔ BIẾN
                </div>
              )}

              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6`}>
                <service.icon className="text-white" size={32} />
              </div>

              {/* Title & Price */}
              <h3 className="text-2xl font-display font-bold mb-2">{service.title}</h3>
              <div className="text-3xl font-bold gradient-text mb-6">{service.price}</div>

              {/* Features */}
              <ul className="space-y-3 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <span className="text-sm text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#contact"
                className="block w-full text-center btn-gradient text-white py-3 rounded-full font-semibold"
              >
                Đăng ký ngay
              </a>
            </motion.div>
          ))}
        </div>

        {/* Additional Services */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg"
        >
          <h3 className="text-3xl font-display font-bold mb-8 text-center">Dịch vụ bổ sung</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-soft flex items-center justify-center mx-auto mb-4">
                  <service.icon className="text-primary" size={24} />
                </div>
                <h4 className="text-lg font-bold mb-2">{service.title}</h4>
                <p className="text-sm text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div> */}
      </div>
    </section>
  )
}
