import { useEffect, useState } from 'react'
import './ScrollToTop.css'

function ScrollToTop() {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return visible ? (
    <button className="scroll-to-top" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
      ↑
    </button>
  ) : null
}

export default ScrollToTop