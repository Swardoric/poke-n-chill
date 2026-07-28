import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { GiNoodles } from 'react-icons/gi'
import './FloatingCta.css'

export default function FloatingCta() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.6)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href="#menu"
          className="floating-cta"
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        >
          <span className="floating-cta-pulse" />
          <GiNoodles className="floating-cta-icon" />
          La Carte
        </motion.a>
      )}
    </AnimatePresence>
  )
}
