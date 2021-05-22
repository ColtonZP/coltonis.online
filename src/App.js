import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  makeVar,
} from '@apollo/client'
import { offsetLimitPagination } from '@apollo/client/utilities'

import './App.css'
import { Post } from './components/Posts/Post'
import { Posts } from './components/Posts/Posts'
import { NewPost } from './components/Posts/NewPost'

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
    },
  }),
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Link to='/'>
          <h1>HOME</h1>
        </Link>
        <Link to='/post/new'>New Post</Link>
        <Switch>
          <Route exact path='/' component={Posts} />
          <Route exact path='/post/new' component={NewPost} />
          <Route path='/post/:id' component={Post} />
        </Switch>
      </Router>
    </ApolloProvider>
  )
}

export default App
