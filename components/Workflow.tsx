'use client'

import { motion } from 'framer-motion'
import { Users, Target, FileText, Palette, FileSignature, FolderOpen, Video, CheckCircle2, Clapperboard, Send, BarChart, Trophy } from 'lucide-react'

export default function Workflow() {
  const steps = [
    { icon: Users, title: 'Gặp khách hàng', description: 'Trao đổi trực tiếp hoặc online' },
    { icon: Target, title: 'Phân tích nhu cầu – ngành nghề – ngách', description: 'Xác định mục tiêu và đối tượng' },
    { icon: FileText, title: 'Đề xuất phương án sơ bộ + chi phí', description: 'Báo giá chi tiết và timeline' },
    { icon: Palette, title: 'Chọn mẫu định hướng', description: 'Xác định phong cách và tone' },
    { icon: FileSignature, title: 'Ký hợp đồng', description: 'Cam kết pháp lý rõ ràng' },
    { icon: FolderOpen, title: 'Thu thập tư liệu', description: 'Có sẵn hoặc tạo mới' },
    { icon: Video, title: 'Sản xuất video mẫu', description: 'Làm 3-5 video để test' },
    { icon: CheckCircle2, title: 'Chốt mẫu', description: 'Điều chỉnh theo feedback' },
    { icon: Clapperboard, title: 'Sản xuất toàn bộ gói', description: 'Production 100 video' },
    { icon: Send, title: 'Bàn giao video hoặc quản lý tài khoản', description: 'Theo hợp đồng' },
    { icon: BarChart, title: 'Báo cáo định kỳ', description: 'Phân tích hiệu quả hàng tuần' },
    { icon: Trophy, title: 'Kết thúc – chuyển giao', description: 'Hoàn tất dự án' },
  ]

  return (
    <section id="workflow" className="relative bg-gradient-to-br from-white via-bg-soft to-white noise-overlay">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl lg:text-6xl font-display font-bold mb-6">
            Lộ trình <span className="gradient-text">làm việc</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Quy trình 12 bước bài bản, minh bạch từ đầu đến cuối
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-secondary hidden lg:block" />

          {/* Steps */}
          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="relative"
              >
                <div className="flex items-start gap-6">
                  {/* Number & Icon */}
                  <div className="flex-shrink-0 relative">
                    {/* Connection Line */}
                    <div className="hidden lg:block absolute left-8 top-8 w-20 h-0.5 bg-gradient-to-r from-primary to-transparent" />
                    
                    {/* Icon Container */}
                    <div className="relative z-10 w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-lg">
                      <step.icon className="text-white" size={28} />
                    </div>
                    
                    {/* Step Number */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white border-2 border-primary flex items-center justify-center font-bold text-sm text-primary">
                      {index + 1}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-white rounded-3xl p-6 lg:p-8 shadow-lg card-hover">
                    <h3 className="text-2xl font-display font-bold mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Timeline Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl p-8 text-center border border-primary/20"
        >
          <h3 className="text-2xl font-display font-bold mb-4">Thời gian hoàn thành dự án</h3>
          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">2-3 tuần</div>
              <div className="text-sm text-gray-600">Giai đoạn chuẩn bị</div>
            </div>
            <div className="w-px bg-gray-300" />
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">4-6 tuần</div>
              <div className="text-sm text-gray-600">Sản xuất 100 video</div>
            </div>
            <div className="w-px bg-gray-300" />
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">6-9 tuần</div>
              <div className="text-sm text-gray-600">Tổng thời gian</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
