import { useQuery } from '@apollo/client'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

import { POSTS_QUERY } from '../../GraphQL/Queries'

export const Posts = () => {
  const { loading, data, fetchMore } = useQuery(POSTS_QUERY, {
    variables: { skip: 0, first: 10 },
  })

  return loading ? (
    'loading...'
  ) : (
    <div className='article-grid'>
      {data.posts.map((post) => (
        <Link to={`post/${post.id}`}>
          <article key={post.id}>
            <small>
              {new Date(post.createdAt).toLocaleDateString('en-US')}
            </small>
            <h2>{post.title}</h2>
          </article>
        </Link>
      ))}
      {/* <li>
          <button
            onClick={() => {
              fetchMore({
                variables: {
                  skip: data.posts.length,
                  first: 10,
                },
              })
                .then((res) => console.log(res))
                .catch((err) => console.log(err))
            }}>
            Get more
          </button>
        </li> */}
    </div>
  )
}
