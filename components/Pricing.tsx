'use client'

import { motion } from 'framer-motion'
import { Check, Star, Zap, Crown } from 'lucide-react'

export default function Pricing() {
  const packages = [
    {
      name: 'GÓI CƠ BẢN',
      // price: '15 triệu',
      icon: Star,
      color: 'from-green-500 to-emerald-500',
      features: [
        'Video 1-2 phút',
        'Xuất hiện hình ảnh và giọng nói thật 15-30s',
        'Giọng AI chất lượng cao',
        'Ảnh sưu tầm chuyên nghiệp',
        'Phù hợp người mới bắt đầu',
        'Hỗ trợ kịch bản cơ bản',
      ],
      recommended: false,
    },
    {
      name: 'GÓI TRUNG CẤP',
      // price: '25 triệu',
      icon: Zap,
      color: 'from-yellow-500 to-orange-500',
      features: [
        'Xuất hiện ~30% hình ảnh và giọng nói thật',
        'Đã có yêu cầu nội dung cụ thể',
        'Làm nhiều kênh test ngách',
        'Tư vấn chiến lược nội dung',
        'Phân tích đối thủ cạnh tranh',
        'Hỗ trợ xây dựng thương hiệu',
      ],
      recommended: true,
    },
    {
      name: 'GÓI CAO CẤP',
      // price: '40 triệu',
      icon: Crown,
      color: 'from-purple-500 to-pink-500',
      features: [
        'Xuất hiện 90% trong video',
        'Giọng thật toàn bộ',
        'Nội dung chuyên sâu, chất lượng cao',
        'Phù hợp người đã rõ ngách',
        'Tự tin nói trước máy quay',
        'Hỗ trợ quay phim chuyên nghiệp',
        'Ưu tiên xử lý nhanh',
      ],
      recommended: false,
    },
  ]

  return (
    <section id="pricing" className="relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-bg-soft to-white" />
      <div className="decorative-circle w-[500px] h-[500px] top-0 right-0 opacity-30" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-gradient-primary text-white px-6 py-2 rounded-full text-sm font-semibold mb-6">
            100 VIDEO / GÓI
          </div>
          <h2 className="text-5xl lg:text-6xl font-display font-bold mb-6">
            Các gói <span className="gradient-text">chi tiết</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Chọn gói phù hợp với mức độ xuất hiện và ngân sách của bạn
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative card-hover bg-white rounded-3xl p-8 shadow-xl ${
                pkg.recommended ? 'ring-2 ring-primary scale-105 lg:scale-110' : ''
              }`}
            >
              {pkg.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-primary text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                  ⭐ ĐƯỢC ƯA THÍCH NHẤT
                </div>
              )}

              {/* Icon */}
              <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${pkg.color} flex items-center justify-center mb-6 mx-auto`}>
                <pkg.icon className="text-white" size={40} />
              </div>

              {/* Package Name */}
              <h3 className="text-2xl font-display font-bold text-center mb-2">{pkg.name}</h3>
              
              {/* Price */}
              <div className="text-center mb-8">
                {/* <div className="text-5xl font-bold gradient-text mb-2">{pkg.price}</div> */}
                {/* <div className="text-sm text-gray-500">Cho 100 video TikTok</div> */}
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="text-primary flex-shrink-0 mt-0.5" size={20} />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <a
                href="#contact"
                className={`block w-full text-center py-4 rounded-full font-bold transition-all ${
                  pkg.recommended
                    ? 'btn-gradient text-white'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
              >
                Chọn gói này
              </a>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-3xl p-8 text-center border border-primary/20"
        >
          <h3 className="text-2xl font-display font-bold mb-4">Cần tư vấn chọn gói phù hợp?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Mỗi khách hàng có mục tiêu và ngân sách khác nhau. Hãy liên hệ để chúng tôi tư vấn miễn phí gói phù hợp nhất với bạn.
          </p>
          <a
            href="tel:0918284482"
            className="inline-flex items-center gap-2 btn-gradient text-white px-8 py-4 rounded-full font-bold text-lg"
          >
            📞 Gọi ngay hoặc Zalo: 0918 284 482
          </a>
        </motion.div>

        {/* Comparison Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center text-sm text-gray-500"
        >
          <p>* Giá đã bao gồm VAT. Thanh toán 50% khi ký hợp đồng, 50% khi hoàn thành 50 video đầu tiên.</p>
        </motion.div>
      </div>
    </section>
  )
}
