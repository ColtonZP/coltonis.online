import { gql } from '@apollo/client'

export const POSTS_QUERY = gql`
  query allPosts($skip: Int, $first: Int) {
    posts(orderBy: createdAt_DESC, skip: $skip, first: $first) {
      id
      title
      createdAt
    }
  }
`
export const POST_QUERY = gql`
  query post($id: ID!) {
    post(where: { id: $id }) {
      id
      title
      createdAt
      body
    }
  }
`
