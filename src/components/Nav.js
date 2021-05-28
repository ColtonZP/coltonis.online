import { Link, useLocation } from 'react-router-dom'

export const Nav = () => {
  const location = useLocation()
  console.log(location.pathname === '/about')
  return (
    <nav>
      <Link to='/' className='header'>
        <h1>Colton Pemberton</h1>
      </Link>
      <Link
        to='/'
        className={`home ${location.pathname === '/' ? 'active' : 'inactive'}`}>
        Home
      </Link>
      <Link
        to='/about'
        className={`about ${
          location.pathname === '/about' ? 'active' : 'inactive'
        }`}>
        About
      </Link>
      {/* <button>Theme Toggle</button> */}
    </nav>
  )
}
