import React, { useState } from 'react'

export const PostForm = ({ onSubmit, defaultValue }) => {
  const [title, updateTitle] = useState(defaultValue ? defaultValue.title : '')
  const [body, updateBody] = useState(defaultValue ? defaultValue.body : '')

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
