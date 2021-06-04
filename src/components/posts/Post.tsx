import { useQuery } from '@apollo/client'
import { Helmet } from 'react-helmet'
import ReactMarkdown from 'react-markdown'
import { RouteComponentProps } from 'react-router-dom'

import calendar from '../../images/calendar.svg'
import { POST_QUERY } from '../../GraphQL/Queries'
import { Links } from '../Links'

interface RouteParams {
  id: string
}

interface Props extends RouteComponentProps<RouteParams> {}

export const Post = ({ match }: Props) => {
  const { loading, data } = useQuery(POST_QUERY, {
    variables: { id: match.params.id },
  })

  return loading ? (
    <>Loading...</>
  ) : (
    <div>
      <Helmet>
        <meta name='twitter:description' content={data.post.title} />
      </Helmet>
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
