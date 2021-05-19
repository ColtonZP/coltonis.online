import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

import './App.css'
import { Post } from './components/Posts/Post'
import { Posts } from './components/Posts/Posts'
import { NewPost } from './components/Posts/NewPost'

const client = new ApolloClient({
  uri: 'https://api-us-west-2.graphcms.com/v2/ckovqxkol5h2u01xgauiqg9xo/master',
  cache: new InMemoryCache(),
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
