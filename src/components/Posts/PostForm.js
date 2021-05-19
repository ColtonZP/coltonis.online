import React, { useState } from 'react'
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
    }
  }
`

export const PostForm = () => {
  const [title, updateTitle] = useState('')
  const [body, updateBody] = useState('')
  const [addPost] = useMutation(ADD_POST)
  const [publishPost] = useMutation(PUBLISH_POST)

  const handleSubmit = (e) => {
    e.preventDefault()
    addPost({ variables: { title, body } }).then((res) => {
      const { id } = res.data.createPost
      console.log(id)
      publishPost({ variables: { id } })
        .then(() => {
          updateTitle('')
          updateBody('')
        })
        .catch((err) => console.log(err))
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='title'
        value={title}
        onChange={(e) => updateTitle(e.target.value)}
      />

      <textarea
        type='text'
        placeholder='body'
        value={body}
        onChange={(e) => updateBody(e.target.value)}
      />

      <input type='submit' value='Submit' />
    </form>
  )
}
