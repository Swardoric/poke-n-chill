import { Outlet } from 'react-router'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import FloatingCta from './components/FloatingCta/FloatingCta'
import ScrollToTop from './components/ScrollToTop'
import './App.css'

export default function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Outlet />
      <Footer />
      <FloatingCta />
    </>
  )
}
