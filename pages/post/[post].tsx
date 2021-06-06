import Head from 'next/head'
import ReactMarkdown from 'react-markdown'

import calendar from '../../public/calendar.svg'
import { client } from '../_app'
import { POST_QUERY } from '../../GraphQL/Queries'
import { Links } from '../../components/Links'

export const Post = ({ data }: any) => {
  const { post } = data

  return (
    <div className='container'>
      <Head>
        <title>Colton is Online</title>
        <link rel='icon' href='/favicon.ico' />
        <meta name='twitter:card' content='summary' />
        <meta name='twitter:title' content='Colton is Online' />
        <meta
          name='twitter:description'
          content={post.title}
        />
        <meta name='twitter:image:src' content='../public/memoji.png' />
      </Head>
      <article className='post'>
        <h1>{post.title}</h1>
        <small>
          <img className='calendar' src={calendar} alt='' />
          {new Date(post.createdAt).toLocaleDateString('en-US')}
        </small>
        <hr />
        <ReactMarkdown>{post.body}</ReactMarkdown>
        <Links />
      </article>
    </div>
  )
}

export async function getServerSideProps({ query }) {
  const { data } = await client.query({
    query: POST_QUERY,
    variables: { id: query.post },
  })
  return { props: { data } }
}

export default Post
