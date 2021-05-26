import { useMutation } from '@apollo/client'

import { PUBLISH_POST } from '../../GraphQL/Mutations'
import { ADD_POST } from '../../GraphQL/Mutations'

import { PostForm } from './PostForm'

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
