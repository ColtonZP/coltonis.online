import { gql } from '@apollo/client'

export const ADD_POST = gql`
  mutation addPost($title: String!, $body: String!) {
    createPost(data: { title: $title, body: $body }) {
      title
      body
      id
    }
  }
`

export const PUBLISH_POST = gql`
  mutation publishPost($id: ID!) {
    publishPost(where: { id: $id }, to: PUBLISHED) {
      id
      title
      body
    }
  }
`
export const UPDATE_POST = gql`
  mutation updatePost($id: ID!, $title: String!, $body: String!) {
    updatePost(where: { id: $id }, data: { title: $title, body: $body }) {
      title
      body
      id
    }
  }
`
