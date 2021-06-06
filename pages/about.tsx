import Head from 'next/head'
import { Links } from '../components/Links'

export default function About() {
  return (
    <div className='post container'>
      <Head>
        <title>Colton is Online</title>
        <link rel='icon' href='/favicon.ico' />
        <meta name='twitter:card' content='summary' />
        <meta name='twitter:title' content='Colton is Online' />
        <meta
          name='twitter:description'
          content='About Colton is Online'
        />
        <meta name='twitter:image:src' content='../public/memoji.png' />
      </Head>
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
