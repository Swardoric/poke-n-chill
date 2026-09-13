import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router'
import { GiNoodles } from 'react-icons/gi'
import { NAV_LINKS } from '../../data/constants'
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  // On non-home pages there's no hero, so always show the solid navbar
  const isHome = pathname === '/'
  const showSolid = !isHome || scrolled

  return (
    <nav className={`navbar ${showSolid ? 'scrolled' : ''}`}>
      <Link to="/" className="navbar-brand">
        <GiNoodles className="brand-icon" />
        Poke n Chill
      </Link>
      <div className="navbar-links">
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
      </div>
    </nav>
  )
}
