import { useQuery } from '@apollo/client'
import { Link } from 'react-router-dom'

import calendar from '../../images/calendar.svg'
import { POSTS_QUERY } from '../../GraphQL/Queries'

export const Posts = () => {
  const { loading, data } = useQuery(POSTS_QUERY, {
    variables: { skip: 0, first: 10 },
  })

  return loading ? (
    'loading...'
  ) : (
    <div className='article-grid'>
      {data.posts.map((post) => (
        <Link to={`post/${post.id}`}>
          <article key={post.id} className='article-link'>
            <h2>{post.title}</h2>
            <small>
              <img src={calendar} alt='' />
              {new Date(post.createdAt).toLocaleDateString('en-US')}
            </small>
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
