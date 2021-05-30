import { Links } from '../Links'

export const About = () => {
  return (
    <div className='post'>
      <h1>About</h1>
      <h2>Hey, I'm Colton</h2>
      <p>
        I'm an aspiring front-end developer living just out side of Seattle. I
        use this blog to document the process of the projects I make and the
        skills I learn. Check out my portfolio at{' '}
        <a className='styled-link' href='https://coltonpemberton.com'>
          coltonpemberton.com
        </a>
      </p>
      <p>Follow me!</p>
      <Links />
    </div>
  )
}
