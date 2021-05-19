import { Link } from 'react-router-dom'
import { gql, useQuery } from '@apollo/client'

const POSTS_QUERY = gql`
  query allPosts {
    posts {
      id
      title
      body
    }
  }
`

export const Posts = () => {
  const { loading, data } = useQuery(POSTS_QUERY)

  return loading ? (
    'loading...'
  ) : (
    <div className='App'>
      <ul>
        {data.posts.map((post) => (
          <li key={post.id}>
            <Link to={`post/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
