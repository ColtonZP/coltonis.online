import { Helmet } from 'react-helmet'
import { Links } from '../Links'

export const About = () => {
  return (
    <div className='post'>
      <Helmet>
        <meta name='twitter:description' content='Hey, I&#39m Colton' />
      </Helmet>
      <h1>About</h1>
      <h2>Hey, I'm Colton</h2>
      <p>
        I'm an aspiring front-end developer living just out side of Seattle. I
        use this blog to document the process of the projects I make and the
        skills I learn. Check out my portfolio at{' '}
        <a className='styled-link' href='https://coltonpemberton.com'>
          coltonpemberton.com
        </a>
        .
      </p>

      <p>
        View the source code of this blog on{' '}
        <a
          className='styled-link'
          href='https://github.com/ColtonZP/coltonis.online'>
          Github
        </a>
        .
      </p>
      <p>Follow me!</p>
      <Links />
    </div>
  )
}
