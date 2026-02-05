'use client'
import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Play, Pause, Sparkles, Volume2 } from 'lucide-react'

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play()
              .then(() => setIsPlaying(true))
              .catch((error) => console.log('Autoplay prevented:', error))
          } else {
            video.pause()
            setIsPlaying(false)
          }
        })
      },
      { threshold: 0.5 }
    )

    observer.observe(video)
    return () => observer.disconnect()
  }, [])

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      <div className="decorative-circle w-[600px] h-[600px] -top-32 -right-32 animate-float" />
      <div className="decorative-circle w-[400px] h-[400px] bottom-0 -left-20" style={{ animationDelay: '2s' }} />
      
      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-gradient-soft px-4 py-2 rounded-full mb-6 border border-primary/20"
            >
              <Sparkles size={16} className="text-primary" />
              <span className="text-sm font-medium text-primary">Chuyên nghiệp - Bài bản - Hiệu quả</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl lg:text-7xl font-display font-bold leading-tight mb-6"
            >
              Dịch vụ sản xuất <span className="gradient-text">& quản lý video TikTok</span> xây dựng thương hiệu cá nhân
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-600 mb-8 leading-relaxed"
            >
              Dành riêng cho <strong className="text-primary">luật sư – bác sĩ – dược sĩ – chuyên gia</strong> đang muốn phát triển hình ảnh cá nhân bài bản trên TikTok.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <a href="#contact" className="btn-gradient text-white px-8 py-4 rounded-full flex items-center gap-2 text-lg font-semibold">
                Nhận tư vấn miễn phí
                <ArrowRight size={20} />
              </a>
              <a href="#pricing" className="bg-white border-2 border-primary text-primary px-8 py-4 rounded-full flex items-center gap-2 text-lg font-semibold hover:bg-bg-soft transition-colors">
                <Play size={20} />
                Xem bảng giá
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative"
          >
            <div className="relative mx-auto w-[350px] lg:w-[400px]">
              <div className="aspect-[9/16] bg-gradient-primary rounded-[40px] p-4 shadow-2xl relative overflow-hidden">
                <div className="absolute inset-4 bg-black rounded-[32px] overflow-hidden">
                  <div className="relative h-full group">
                    <video
                      ref={videoRef}
                      loop
                      muted
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover"
                      onClick={togglePlay}
                    >
                      <source src="/videos/videoLead.mp4" type="video/mp4" />
                    </video>
                    
                    <div className="absolute inset-0 flex items-center justify-center cursor-pointer z-20" onClick={togglePlay}>
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className={`transition-opacity duration-300 ${isPlaying ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'}`}
                      >
                        <div className="w-20 h-20 rounded-full bg-white/90 backdrop-blur flex items-center justify-center shadow-2xl hover:bg-white transition-colors">
                          {isPlaying ? (
                            <Pause size={40} className="text-primary ml-0" fill="currentColor" />
                          ) : (
                            <Play size={40} className="text-primary ml-1" fill="currentColor" />
                          )}
                        </div>
                      </motion.div>
                    </div>

                    {isPlaying && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="absolute top-4 left-4 z-20"
                      >
                        <div className="bg-white/20 backdrop-blur px-3 py-2 rounded-full flex items-center gap-2">
                          <Volume2 size={16} className="text-white" />
                          <span className="text-white text-xs font-semibold">Audio ON</span>
                        </div>
                      </motion.div>
                    )}
                    
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent z-10 pointer-events-none">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <div className="w-10 h-10 rounded-full bg-primary" />
                          <div className="font-semibold text-white text-sm">@chuyengia_phanbon</div>
                        </div>
                        <p className="text-white text-xs leading-relaxed">
                          7 dấu hiệu cây thiếu đạm bạn cần biết ngay! 🌱 #chuyengia #phanbon #nongnghiep
                        </p>
                      </div>
                    </div>

                    <div className="absolute right-2 bottom-20 space-y-4 z-10 pointer-events-none">
                      <div className="flex flex-col items-center gap-1">
                        <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur flex items-center justify-center">
                          <span className="text-2xl">❤️</span>
                        </div>
                        <span className="text-white text-xs font-bold">12.5K</span>
                      </div>
                      <div className="flex flex-col items-center gap-1">
                        <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur flex items-center justify-center">
                          <span className="text-2xl">💬</span>
                        </div>
                        <span className="text-white text-xs font-bold">234</span>
                      </div>
                      <div className="flex flex-col items-center gap-1">
                        <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur flex items-center justify-center">
                          <span className="text-2xl">🔗</span>
                        </div>
                        <span className="text-white text-xs font-bold">89</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -left-8 top-1/4 bg-white p-4 rounded-2xl shadow-xl pointer-events-none"
              >
                <div className="text-xs text-gray-500 mb-1">Lượt xem</div>
                <div className="text-2xl font-bold gradient-text">245K</div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                className="absolute -right-8 bottom-1/4 bg-white p-4 rounded-2xl shadow-xl pointer-events-none"
              >
                <div className="text-xs text-gray-500 mb-1">Tương tác</div>
                <div className="text-2xl font-bold gradient-text">12.8K</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-primary rounded-full flex justify-center pt-2"
        >
          <div className="w-1.5 h-3 bg-primary rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}