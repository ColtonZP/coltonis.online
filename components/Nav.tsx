import { useRouter } from 'next/router'

export const Nav = () => {
  const router = useRouter()
  return (
    <nav className='nav container'>
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
      {/* <button>Theme Toggle</button> */}
    </nav>
  )
}
