import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  makeVar,
} from '@apollo/client'

import { Post } from './Components/Posts/Post'
import { Posts } from './Components/Posts/Posts'
import { About } from './Components/Pages/About'
import { Nav } from './Components/Nav'

const initialSettings = {
  theme: 'light',
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
    <div className='container'>
      <ApolloProvider client={client}>
        <Router>
          <Nav />
          <Switch>
            <Route exact path='/' component={Posts} />
            <Route exact path='/about' component={About} />
            <Route path='/post/:id' component={Post} />
          </Switch>
        </Router>
      </ApolloProvider>
    </div>
  )
}

export default App
