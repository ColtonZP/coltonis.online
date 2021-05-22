import { gql, useMutation } from '@apollo/client'
import { settings } from '../../App'
import { PostForm } from './PostForm'

const UPDATE_POST = gql`
  mutation updatePost($id: ID!, $title: String!, $body: String!) {
    updatePost(where: { id: $id }, data: { title: $title, body: $body }) {
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

export const UpdatePost = ({ id, defaultValue }) => {
  const [updatePost] = useMutation(UPDATE_POST)
  const [publishPost] = useMutation(PUBLISH_POST)

  function onSubmit(title, body) {
    updatePost({ variables: { id, title, body } })
      .then(() => {
        settings({ isEditMode: false })
        publishPost({ variables: { id } }).catch((err) => console.log(err))
      })
      .catch((err) => console.log(err))
  }

  return (
    <div>
      <PostForm onSubmit={onSubmit} defaultValue={defaultValue} />
    </div>
  )
}
