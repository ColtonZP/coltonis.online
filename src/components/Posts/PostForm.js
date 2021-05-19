import React, { useState } from 'react'

export const PostForm = ({ onSubmit }) => {
  const [title, updateTitle] = useState('')
  const [body, updateBody] = useState('')

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        onSubmit(title, body)
        updateTitle('')
        updateBody('')
      }}>
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
