import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [theme, toggleTheme] = useState(document.body.dataset.theme)

  useEffect(() => {
    document.body.dataset.theme = theme
    window.localStorage.setItem('theme', theme)
  }, [theme])
  return (
    <button onClick={() => toggleTheme(theme === 'dark' ? 'light' : 'dark')}>
      {theme === 'dark' ? '☀️' : '🌙'}
    </button>
  )
}
