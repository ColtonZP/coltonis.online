import { gql, useQuery } from '@apollo/client'
import { UpdatePost } from './UpdatePost'

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
      <section>
        <h1>{data.post.title}</h1>
      </section>
      <section>
        <h1>Edit Post</h1>
        <UpdatePost id={data.post.id} />
      </section>
    </div>
  )
}
