import { useQuery } from '@apollo/client'

import { POST_QUERY } from '../../GraphQL/Queries'

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
        <p>{data.post.body}</p>
      </section>
    </div>
  )
}
