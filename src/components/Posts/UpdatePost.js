import { useMutation } from '@apollo/client'

import { PUBLISH_POST } from '../../GraphQL/Mutations'
import { UPDATE_POST } from '../../GraphQL/Mutations'

import { settings } from '../../App'
import { PostForm } from './PostForm'

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
