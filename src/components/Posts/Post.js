import { gql, useQuery } from '@apollo/client'
import { EditMode } from './EditMode'
import { UpdatePost } from './UpdatePost'

const POST_QUERY = gql`
  query post($id: ID!) {
    post(where: { id: $id }) {
      id
      title
      body
    }
    settings @client {
      isEditMode
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
      <EditMode value={data.settings.isEditMode} />
      {data.settings.isEditMode ? (
        <section>
          <h1>Edit Post</h1>
          <UpdatePost
            id={data.post.id}
            defaultValue={{ title: data.post.title, body: data.post.body }}
          />
        </section>
      ) : (
        <section>
          <h1>{data.post.title}</h1>
          <p>{data.post.body}</p>
        </section>
      )}
    </div>
  )
}
