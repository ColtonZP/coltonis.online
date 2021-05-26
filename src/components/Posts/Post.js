import { useQuery } from '@apollo/client'

import { POST_QUERY } from '../../GraphQL/Queries'

import { EditMode } from './EditMode'
import { UpdatePost } from './UpdatePost'

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
