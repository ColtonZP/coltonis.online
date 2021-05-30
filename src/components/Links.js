import twitter from '../images/twitter.svg'
import github from '../images/github.svg'

export const Links = () => {
  return (
    <>
      <a
        className='social-link twitter'
        href='https://twitter.com/coltonisonline'
        target='_blank'
        rel='noopener noreferrer'>
        <img className='social-img' src={twitter} alt='' />Follow
        @ColtonIsOnline
      </a>

      <a
        className='social-link github'
        href='https://github.com/ColtonZP'
        target='_blank'
        rel='noopener noreferrer'>
        <img className='social-img' src={github} alt='' />ColtonZP
      </a>
    </>
  )
}
