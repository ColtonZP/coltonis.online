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
