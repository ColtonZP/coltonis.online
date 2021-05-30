import { useQuery } from '@apollo/client'
import ReactMarkdown from 'react-markdown'

import calendar from '../../images/calendar.svg'
import { POST_QUERY } from '../../GraphQL/Queries'
import { Links } from '../Links'

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
          <img className='calendar' src={calendar} alt='' />
          {new Date(data.post.createdAt).toLocaleDateString('en-US')}
        </small>
        <hr />
        <ReactMarkdown>{data.post.body}</ReactMarkdown>
        <Links />
      </article>
    </div>
  )
}
