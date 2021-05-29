import { useQuery } from '@apollo/client'

import Calendar from '../../Images/Calendar.svg'
import { POST_QUERY } from '../../GraphQL/Queries'

export const Post = ({ match }) => {
  const { loading, data } = useQuery(POST_QUERY, {
    variables: { id: match.params.id },
  })

  return loading ? (
    'Loading...'
  ) : (
    <div>
      <article className='post'>
        <h1>{data.post.title}</h1>
        <small>
          <img src={Calendar} alt='' />
          {new Date(data.post.createdAt).toLocaleDateString('en-US')}
        </small>
        <hr />
        <p>{data.post.body}</p>
      </article>
    </div>
  )
}
