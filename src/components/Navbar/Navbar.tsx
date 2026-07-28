import { useState, useEffect } from 'react'
import { GiNoodles } from 'react-icons/gi'
import { NAV_LINKS } from '../../data/constants'
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <a href="#" className="navbar-brand">
        <GiNoodles className="brand-icon" />
        Poke n Chill
      </a>
      <div className="navbar-links">
        {NAV_LINKS.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
        <a href="#menu" className="navbar-cta">
          La Carte
        </a>
      </div>
    </nav>
  )
}
