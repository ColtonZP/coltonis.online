import { gql, useQuery } from '@apollo/client'
import './App.css'

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

function App() {
  const { loading, data } = useQuery(POSTS_QUERY)

  return loading ? (
    'Loading...'
  ) : (
    <div className='App'>
      {data.posts.map((post) => (
        <h1>{post.title}</h1>
      ))}
    </div>
  )
}

export default App
