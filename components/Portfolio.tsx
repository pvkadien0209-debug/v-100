'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, Filter } from 'lucide-react'

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'Tất cả' },
    { id: 'law', name: 'Luật' },
    { id: 'medical', name: 'Y tế' },
    { id: 'education', name: 'Giáo dục' },
    { id: 'business', name: 'Kinh doanh' },
  ]

  const videos = [
    {
      id: 1,
      category: 'law',
      title: 'Quyền lợi người thuê khi chủ nhà bán căn hộ',
      author: '@luatsu.hongnhung',
      views: '245K',
      thumbnail: 'from-blue-400 to-blue-600',
    },
    {
      id: 2,
      category: 'medical',
      title: 'Dấu hiệu cảnh báo sớm của ung thư dạ dày',
      author: '@bacsi.tuananh',
      views: '892K',
      thumbnail: 'from-green-400 to-green-600',
    },
    {
      id: 3,
      category: 'education',
      title: '5 cách học tiếng Anh hiệu quả cho người bận rộn',
      author: '@thay.english',
      views: '567K',
      thumbnail: 'from-yellow-400 to-yellow-600',
    },
    {
      id: 4,
      category: 'business',
      title: 'Bí quyết tăng doanh số gấp đôi trong 30 ngày',
      author: '@chuyengia.kinhdoanh',
      views: '423K',
      thumbnail: 'from-purple-400 to-purple-600',
    },
    {
      id: 5,
      category: 'law',
      title: 'Hướng dẫn làm di chúc hợp pháp không cần công chứng',
      author: '@luatsu.minhchau',
      views: '334K',
      thumbnail: 'from-indigo-400 to-indigo-600',
    },
    {
      id: 6,
      category: 'medical',
      title: '7 dấu hiệu cây thiếu đạm bạn cần biết',
      author: '@dsphanbon',
      views: '189K',
      thumbnail: 'from-teal-400 to-teal-600',
    },
  ]

  const filteredVideos = activeCategory === 'all' 
    ? videos 
    : videos.filter(video => video.category === activeCategory)

  return (
    <section id="portfolio" className="relative bg-gradient-to-br from-bg-dark to-primary/90 text-white overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl lg:text-6xl font-display font-bold mb-6">
            Ngân hàng <span className="text-accent">video mẫu</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Khám phá những video chúng tôi đã sản xuất cho các chuyên gia
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full">
            <Filter size={18} />
            <span className="text-sm font-medium">Lọc theo ngành:</span>
          </div>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeCategory === category.id
                  ? 'bg-white text-primary shadow-lg scale-105'
                  : 'bg-white/10 hover:bg-white/20 backdrop-blur'
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Video Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredVideos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[9/16] rounded-3xl overflow-hidden shadow-2xl">
                  {/* Thumbnail */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${video.thumbnail}`} />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-20 h-20 rounded-full bg-white/90 backdrop-blur flex items-center justify-center transform group-hover:scale-110 transition-transform">
                      <Play className="text-primary ml-1" size={32} fill="currentColor" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white font-bold text-lg mb-2 line-clamp-2">
                      {video.title}
                    </h3>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-white/80">{video.author}</span>
                      <span className="bg-white/20 backdrop-blur px-3 py-1 rounded-full font-semibold">
                        👁️ {video.views}
                      </span>
                    </div>
                  </div>

                  {/* TikTok-style elements */}
                  <div className="absolute right-4 bottom-24 space-y-4 opacity-60 group-hover:opacity-100 transition-opacity">
                    <div className="flex flex-col items-center gap-1">
                      <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur flex items-center justify-center">
                        ❤️
                      </div>
                      <span className="text-white text-xs font-bold">12.5K</span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur flex items-center justify-center">
                        💬
                      </div>
                      <span className="text-white text-xs font-bold">234</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-white/80 mb-6 text-lg">
            Muốn xem thêm mẫu video cụ thể cho ngành nghề của bạn?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform"
          >
            Liên hệ xem thêm mẫu
          </a>
        </motion.div>
      </div>
    </section>
  )
}
