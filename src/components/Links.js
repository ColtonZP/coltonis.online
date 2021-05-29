import React from 'react'

import Twitter from '../Images/Twitter.svg'
import GitHub from '../Images/GitHub.svg'

export const Links = () => {
  return (
    <>
      <a
        className='social-link twitter'
        href='https://twitter.com/coltonisonline'
        target='_blank'
        rel='noopener noreferrer'>
        <img className='social-img' src={Twitter} alt='' /> Follow
        @ColtonIsOnline
      </a>

      <a
        className='social-link github'
        href='https://https://github.com/ColtonZP'
        target='_blank'
        rel='noopener noreferrer'>
        <img className='social-img' src={GitHub} alt='' /> ColtonZP
      </a>
    </>
  )
}
