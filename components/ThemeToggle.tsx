import { useEffect, useState } from 'react'
import moon from '../public/moon.svg'
import sun from '../public/sun.svg'

export default function ThemeToggle() {
  const [theme, toggleTheme] = useState(document.body.dataset.theme)

  useEffect(() => {
    document.body.dataset.theme = theme
    window.localStorage.setItem('theme', theme)
  }, [theme])
  return (
    <button onClick={() => toggleTheme(theme === 'dark' ? 'light' : 'dark')}>
      <img src={theme === 'dark' ? moon : sun} alt='' />
    </button>
  )
}
