import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Link, useLocation } from 'react-router'
import { GiNoodles } from 'react-icons/gi'
import './FloatingCta.css'

export default function FloatingCta() {
  const [visible, setVisible] = useState(false)
  const { pathname } = useLocation()

  // Hide on the menu page itself
  const isMenuPage = pathname === '/carte'

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.4)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && !isMenuPage && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        >
          <Link to="/carte" className="floating-cta">
            <span className="floating-cta-pulse" />
            <GiNoodles className="floating-cta-icon" />
            La Carte
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
