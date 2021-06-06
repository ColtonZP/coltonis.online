import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'

const ThemeToggle = dynamic(() => import('../components/ThemeToggle'), {
  ssr: false,
})

export const Nav = () => {
  const router = useRouter()

  return (
    <nav className='nav'>
      <div className='container'>
        <a href='/' className='header'>
          <h1>Colton is Online</h1>
        </a>
        <a
          href='/'
          className={`home ${router.pathname === '/' ? 'active' : 'inactive'}`}>
          Home
        </a>
        <a
          href='/about'
          className={`about ${
            router.pathname === '/about' ? 'active' : 'inactive'
          }`}>
          About
        </a>
        <div
          className='toggle-container'>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  )
}
