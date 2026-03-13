import { useRef, useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const OurStory = () => {
  const storyRef = useRef(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const timelineItems = [
    {
      id: 1,
      icon: '❤️',
      title: 'The day we met',
      description: 'A moment that changed everything',
    },
    {
      id: 2,
      icon: '✈️',
      title: 'Our first trip',
      description: 'Adventures that brought us closer',
      image: '/memories/WhatsApp Image 2026-03-13 at 22.46.13.jpeg',
    },
    {
      id: 3,
      icon: '🌙',
      title: 'Our favorite memory',
      description: 'A night we\'ll never forget',
      image: '/memories/WhatsApp Image 2026-03-13 at 22.47.58.jpeg',
    },
    {
      id: 4,
      icon: '💍',
      title: 'The moment I knew you were the one',
      description: 'When I realized I wanted forever with you',
      image: '/memories/WhatsApp Image 2026-03-13 at 22.41.58.jpeg',
    },
  ]

  // Gallery images from your memories - all images with staggered animations
  const galleryImages = [
    { id: 1, src: '/memories/WhatsApp Image 2026-03-13 at 22.41.28.jpeg', alt: 'Memory 1' },
    { id: 2, src: '/memories/WhatsApp Image 2026-03-13 at 22.41.58.jpeg', alt: 'Memory 2' },
    { id: 3, src: '/memories/WhatsApp Image 2026-03-13 at 22.45.04.jpeg', alt: 'Memory 3' },
    { id: 4, src: '/memories/WhatsApp Image 2026-03-13 at 22.45.09.jpeg', alt: 'Memory 4' },
    { id: 5, src: '/memories/WhatsApp Image 2026-03-13 at 22.46.13.jpeg', alt: 'Memory 5' },
    { id: 6, src: '/memories/WhatsApp Image 2026-03-13 at 22.47.19 (1).jpeg', alt: 'Memory 6' },
    { id: 7, src: '/memories/WhatsApp Image 2026-03-13 at 22.47.19.jpeg', alt: 'Memory 7' },
    { id: 8, src: '/memories/WhatsApp Image 2026-03-13 at 22.47.58.jpeg', alt: 'Memory 8' },
    { id: 9, src: '/memories/WhatsApp Image 2026-03-13 at 22.56.37.jpeg', alt: 'Memory 9' },
    { id: 10, src: '/memories/WhatsApp Image 2026-03-13 at 22.56.39.jpeg', alt: 'Memory 10' },
    { id: 11, src: '/memories/WhatsApp Image 2026-03-13 at 22.56.45.jpeg', alt: 'Memory 11' },
    { id: 12, src: '/memories/WhatsApp Image 2026-03-13 at 22.56.47.jpeg', alt: 'Memory 12' },
    { id: 13, src: '/memories/WhatsApp Image 2026-03-13 at 22.56.55.jpeg', alt: 'Memory 13' },
    { id: 14, src: '/memories/WhatsApp Image 2026-03-13 at 22.57.04.jpeg', alt: 'Memory 14' },
  ]

  // Auto-rotate images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % galleryImages.length)
    }, 3000) // Change image every 3 seconds

    return () => clearInterval(interval)
  }, [galleryImages.length])

  return (
    <div ref={storyRef} id="our-story" className="min-h-screen bg-gradient-to-b from-white to-romantic-lightPink">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <img 
          src="/memories/WhatsApp Image 2026-03-13 at 22.41.28.jpeg"
          alt="Our Story"
          className="absolute inset-0 w-full h-full object-contain object-top"
          style={{ objectPosition: 'center top' }}
        />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-4 sm:px-8 max-w-4xl mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-romantic-rose mb-6 tracking-wide"
          >
            Our Story
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl sm:text-2xl md:text-3xl text-white font-light leading-relaxed drop-shadow-lg"
            style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}
          >
            From the moment I met you, my life changed forever.
          </motion.p>
        </motion.div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Timeline Line */}
            <div className="absolute left-8 sm:left-1/2 top-0 bottom-0 w-0.5 bg-romantic-rose/30 transform sm:-translate-x-1/2" />
            
            {/* Timeline Items */}
            <div className="space-y-16">
              {timelineItems.map((item, index) => {
                const isEven = index % 2 === 0
                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="relative flex items-center"
                  >
                    {/* Icon Circle */}
                    <div className="relative z-10 flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full flex items-center justify-center shadow-lg border-4 border-romantic-rose/20 absolute left-0 sm:left-1/2 transform sm:-translate-x-1/2">
                      <span className="text-2xl sm:text-3xl">{item.icon}</span>
                    </div>
                    
                    {/* Content Card - Alternates left and right on desktop */}
                    <div
                      className={`w-full sm:w-[calc(50%-40px)] ml-16 sm:ml-0 ${
                        isEven ? 'sm:mr-auto sm:pr-8' : 'sm:ml-auto sm:pl-8'
                      }`}
                    >
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className={`bg-white rounded-lg shadow-md overflow-hidden border-l-4 sm:border-l-0 ${
                          isEven ? 'sm:border-r-4' : 'sm:border-l-4'
                        } border-romantic-rose`}
                      >
                        {item.image && (
                          <div className="w-full h-64 sm:h-80 overflow-hidden">
                            <img
                              src={item.image}
                              alt={item.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        )}
                        <div className="p-6 sm:p-8">
                          <h3 className="text-2xl sm:text-3xl font-medium text-romantic-rose mb-2">
                            {item.title}
                          </h3>
                          <p className="text-gray-600 text-lg sm:text-xl font-light">
                            {item.description}
                          </p>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Photo Gallery - Carousel */}
      <section className="py-20 px-4 sm:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl font-light text-romantic-rose text-center mb-12"
          >
            Our Memories
          </motion.h2>
          
          {/* Image Carousel */}
          <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImageIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
                className="absolute inset-0"
              >
                <img
                  src={galleryImages[currentImageIndex].src}
                  alt={galleryImages[currentImageIndex].alt}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>
    </div>
  )
}

export default OurStory
