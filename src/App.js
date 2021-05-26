import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  makeVar,
} from '@apollo/client'

import { Post } from './Components/Posts/Post'
import { Posts } from './Components/Posts/Posts'

const initialSettings = {
  isEditMode: false,
}

export const settings = makeVar(initialSettings)

const client = new ApolloClient({
  uri: 'https://api-us-west-2.graphcms.com/v2/ckovqxkol5h2u01xgauiqg9xo/master',
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          settings: {
            read() {
              return settings()
            },
          },
          posts: {
            keyArgs: false,
            merge(existing = [], incoming) {
              return [...existing, ...incoming]
            },
          },
        },
      },
      Post: {
        keyFields: ['title', 'id'],
      },
    },
  }),
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Link to='/'>
          <h1>/coltonpemberton.dev</h1>
        </Link>
        <Switch>
          <Route exact path='/' component={Posts} />
          <Route path='/post/:id' component={Post} />
        </Switch>
      </Router>
    </ApolloProvider>
  )
}

export default App
