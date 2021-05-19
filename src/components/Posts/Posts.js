import { Link } from 'react-router-dom'
import { gql, useQuery } from '@apollo/client'

const POSTS_QUERY = gql`
  query allPosts {
    posts {
      id
      title
      body
      createdAt
    }
  }
`

export const Posts = () => {
  const { loading, data } = useQuery(POSTS_QUERY)

  return loading ? (
    'loading...'
  ) : (
    <div className='App'>
      {data.posts.map((post) => (
        <Link key={post.id} to={`post/${post.id}`}>
          <h1>{post.title}</h1>
        </Link>
      ))}
    </div>
  )
}
