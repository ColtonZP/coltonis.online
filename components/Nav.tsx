import { gql, useQuery } from '@apollo/client'
import { useRouter } from 'next/router'

type Props = {
  isThemeDark: boolean
  toggleTheme: (boolean) => void
}

export const Nav = ({ isThemeDark, toggleTheme }: Props) => {
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
        <div className={`toggle-container ${isThemeDark ? 'dark-active' : 'light-active'}`}>
          <button onClick={() => toggleTheme(!isThemeDark)}>🌙</button>
        </div>
      </div>
    </nav>
  )
}
