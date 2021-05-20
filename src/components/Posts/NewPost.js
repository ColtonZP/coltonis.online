import { PostForm } from './PostForm'
import { useMutation, gql } from '@apollo/client'

const ADD_POST = gql`
  mutation addPost($title: String!, $body: String!) {
    createPost(data: { title: $title, body: $body }) {
      title
      body
      id
    }
  }
`

const PUBLISH_POST = gql`
  mutation publishPost($id: ID!) {
    publishPost(where: { id: $id }, to: PUBLISHED) {
      id
      title
      body
    }
  }
`

export const NewPost = () => {
  const [addPost] = useMutation(ADD_POST)
  const [publishPost] = useMutation(PUBLISH_POST)

  function onSubmit(title, body) {
    addPost({ variables: { title, body } })
      .then((res) => {
        const { id } = res.data.createPost
        publishPost({ variables: { id } }).catch((err) => console.log(err))
      })
      .catch((err) => console.log(err))
  }

  return (
    <div>
      <h1>New Post</h1>
      <PostForm onSubmit={onSubmit} />
    </div>
  )
}