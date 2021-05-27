import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

import { Post } from './Components/Posts/Post'
import { Posts } from './Components/Posts/Posts'
import { About } from './Components/About'

const client = new ApolloClient({
  uri: 'https://api-us-west-2.graphcms.com/v2/ckovqxkol5h2u01xgauiqg9xo/master',
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
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
          <nav>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
          </nav>

          <Link to='/'>
            <h1>coltonpemberton.dev</h1>
          </Link>
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
