import { gql, useQuery } from '@apollo/client'

const POST_QUERY = gql`
  query posts($id: ID!) {
    post(where: { id: $id }) {
      id
      title
      body
    }
  }
`
const ADD_POST = gql`
  mutation addPost($title: String!, $body: String!) {
    createPost(data: { title: $title, body: $body }) {
      title
      body
    }
  }
`

const PUBLISH_POST = gql`
  mutation publishPost($id: ID!) {
    publishPost(where: { id: $id }, to: PUBLISHED) {
      id
    }
  }
`

export const Post = ({ match }) => {
  const { loading, data } = useQuery(POST_QUERY, {
    variables: { id: match.params.id },
  })

  return loading ? (
    'Loading...'
  ) : (
    <div>
      <h1>{data.post.title}</h1>
    </div>
  )
}
