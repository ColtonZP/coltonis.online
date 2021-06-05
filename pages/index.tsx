import Head from 'next/head'
import { POSTS_QUERY } from '../GraphQL/Queries'

import { client } from './_app'
import calendar from '../public/calendar.svg'
import memoji from '../public/memoji.png'

function Index({ data }: any) {
  return (
    <div className='article-grid container'>
      <Head>
        <title>Colton is Online</title>
        <meta name='twitter:card' content='summary' />
        <meta name='twitter:title' content='Colton is Online' />
        <meta
          name='twitter:description'
          content='Colton is Online Blog Posts'
        />
        <meta name='twitter:image' content={memoji} />
      </Head>
      {data.posts.map((post: any) => (
        <a href={`post/${post.id}`}>
          <article key={post.id} className='article-link'>
            <h2>{post.title}</h2>
            <small>
              <img src={calendar} alt='' />
              {new Date(post.createdAt).toLocaleDateString('en-US')}
            </small>
          </article>
        </a>
      ))}
    </div>
  )
}

export async function getServerSideProps({ query }) {
  const { data } = await client.query({
    query: POSTS_QUERY,
  })
  return { props: { data } }
}

export default Index
