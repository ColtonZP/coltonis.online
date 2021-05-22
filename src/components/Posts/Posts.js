import { Link } from 'react-router-dom'
import { gql, useQuery } from '@apollo/client'

const POSTS_QUERY = gql`
  query allPosts($skip: Int, $first: Int) {
    posts(orderBy: createdAt_DESC, skip: $skip, first: $first) {
      id
      title
    }
  }
`

export const Posts = () => {
  const { loading, data, fetchMore } = useQuery(POSTS_QUERY, {
    variables: { skip: 0, first: 10 },
  })

  return loading ? (
    'loading...'
  ) : (
    <div className='App'>
      <ol>
        {data.posts.map((post) => (
          <li key={post.id}>
            <Link to={`post/${post.id}`}>{post.title}</Link>
          </li>
        ))}
        <li>
          <button
            onClick={() => {
              fetchMore({
                variables: {
                  skip: 10,
                  first: 10,
                },
              })
                .then((res) => console.log(res))
                .catch((err) => console.log(err))
            }}>
            Get more
          </button>
        </li>
      </ol>
    </div>
  )
}
