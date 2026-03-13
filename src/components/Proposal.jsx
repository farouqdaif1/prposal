import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import confetti from 'canvas-confetti'

const Proposal = ({ onYesClick }) => {
  const [saidYes, setSaidYes] = useState(false)
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 })
  const [hearts, setHearts] = useState([])
  const noButtonRef = useRef(null)

  // Initialize floating hearts
  useEffect(() => {
    const generateHearts = () => {
      const newHearts = []
      for (let i = 0; i < 20; i++) {
        newHearts.push({
          id: i,
          left: Math.random() * 100,
          delay: Math.random() * 5,
          duration: 10 + Math.random() * 10,
        })
      }
      setHearts(newHearts)
    }
    generateHearts()
  }, [])

  // Handle NO button hover - move it away randomly but stay in viewport
  const handleNoHover = () => {
    if (saidYes) return
    
    const button = noButtonRef.current
    if (!button) return

    const viewportWidth = window.innerWidth
    const viewportHeight = window.innerHeight
    const buttonWidth = button.offsetWidth
    const buttonHeight = button.offsetHeight
    
    // Get current button position relative to viewport
    const buttonRect = button.getBoundingClientRect()
    const currentX = buttonRect.left + buttonWidth / 2 - viewportWidth / 2
    const currentY = buttonRect.top + buttonHeight / 2 - viewportHeight / 2
    
    // Calculate safe bounds to keep button within viewport
    const maxX = (viewportWidth - buttonWidth) / 2
    const maxY = (viewportHeight - buttonHeight) / 2
    
    // Generate random position within safe bounds
    // Make it move significantly but stay in view
    const randomX = (Math.random() - 0.5) * maxX * 1.5
    const randomY = (Math.random() - 0.5) * maxY * 1.5
    
    // Clamp to ensure it stays within viewport
    const clampedX = Math.max(-maxX, Math.min(maxX, randomX))
    const clampedY = Math.max(-maxY, Math.min(maxY, randomY))

    setNoButtonPosition({ x: clampedX, y: clampedY })
  }

  // Handle YES button click
  const handleYesClick = () => {
    setSaidYes(true)
    
    // Trigger confetti
    const duration = 5000
    const animationEnd = Date.now() + duration
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 }

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min
    }

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now()

      if (timeLeft <= 0) {
        return clearInterval(interval)
      }

      const particleCount = 50 * (timeLeft / duration)
      
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
      })
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
      })
    }, 250)

    // Call parent callback to handle music and show Our Story section
    if (onYesClick) {
      onYesClick()
    }

    // Wait a bit then scroll to Our Story section
    setTimeout(() => {
      const storySection = document.getElementById('our-story')
      if (storySection) {
        storySection.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }, 2000) // Wait 2 seconds to show the success message
  }

  return (
    <div className="min-h-screen bg-white flex items-center justify-center relative overflow-hidden">
      {/* Floating hearts background */}
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute text-romantic-rose opacity-20 text-2xl pointer-events-none"
          style={{ left: `${heart.left}%` }}
          initial={{ bottom: '-50px', opacity: 0 }}
          animate={{
            bottom: '100vh',
            opacity: [0, 0.3, 0.3, 0],
          }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          ❤️
        </motion.div>
      ))}


      <AnimatePresence mode="wait">
        {!saidYes ? (
          <motion.div
            key="proposal"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8 }}
            className="text-center px-4 sm:px-8 max-w-2xl mx-auto"
          >
            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl sm:text-6xl md:text-7xl font-light text-romantic-rose mb-8 tracking-wide"
            >
              To Ahd ❤️
            </motion.h1>

            {/* Message */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg sm:text-xl md:text-2xl text-gray-700 leading-relaxed mb-12 space-y-4"
            >
              <p className="font-light">
                You are my best friend, my happiness, and the love of my life.
              </p>
              <p className="font-light">
                Every moment with you is a gift.
              </p>
              <p className="font-light">
                I can't imagine my future without you.
              </p>
            </motion.div>

            {/* Question */}
            <motion.h2
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-3xl sm:text-4xl md:text-5xl font-medium text-romantic-rose mb-12"
            >
              Will you marry me?
            </motion.h2>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center relative min-h-[80px]"
            >
              {/* YES Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleYesClick}
                className="px-12 py-4 bg-romantic-rose text-white text-xl sm:text-2xl rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 font-medium z-10 relative"
              >
                YES ❤️
              </motion.button>

              {/* NO Button */}
              <motion.button
                ref={noButtonRef}
                onMouseEnter={handleNoHover}
                onTouchStart={handleNoHover}
                animate={{
                  x: noButtonPosition.x,
                  y: noButtonPosition.y,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 20,
                }}
                className="px-12 py-4 bg-gray-300 text-gray-700 text-xl sm:text-2xl rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 font-medium z-10 absolute"
                style={{
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                }}
              >
                NO ❌
              </motion.button>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: 'spring' }}
            className="text-center px-4 sm:px-8"
          >
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-romantic-rose mb-8"
            >
              I love you thanks for saying yes 💍❤️
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-6xl sm:text-7xl md:text-8xl"
            >
              💕💕💕
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Proposal
