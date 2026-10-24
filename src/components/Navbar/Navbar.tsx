import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router'
import { motion, AnimatePresence } from 'motion/react'
import { GiNoodles } from 'react-icons/gi'
import { FiMenu, FiX } from 'react-icons/fi'
import { NAV_LINKS } from '../../data/constants'
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the mobile menu whenever the route changes
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  // On non-home pages there's no hero, so always show the solid navbar
  const isHome = pathname === '/'
  const showSolid = !isHome || scrolled || open

  const links = (
    <>
      {NAV_LINKS.map((link) => (
        <Link
          key={link.href}
          to={link.href}
          className={pathname === link.href ? 'active' : ''}
        >
          {link.label}
        </Link>
      ))}
      <Link to="/carte" className={`navbar-cta ${pathname === '/carte' ? 'active' : ''}`}>
        La Carte
      </Link>
    </>
  )

  return (
    <nav className={`navbar ${showSolid ? 'scrolled' : ''}`}>
      <Link to="/" className="navbar-brand">
        <GiNoodles className="brand-icon" />
        Poke n Chill
      </Link>

      <div className="navbar-links">{links}</div>

      <button
        id="navbar-toggle"
        className="navbar-toggle"
        aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        {open ? <FiX /> : <FiMenu />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="navbar-mobile"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
          >
            {links}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
