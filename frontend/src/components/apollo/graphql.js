import gql from "graphql-tag"

export const USER_FRAGMENT = gql`
  fragment UserFragment on User {
    id
    email
    password
    lists {
      id
      title
      places {
        id
        placeSanityId
        placeName
        placeImageUrl
        placeSlug
      }
    }
  }
`

export const LIST_FRAGMENT = gql`
  fragment ListFragment on List {
    id
    title
    places {
      id
      placeSanityId
      placeName
      placeImageUrl
      placeSlug
    }
  }
`

export const IS_LOGGED_IN = gql`
  query IS_LOGGED_IN {
    isLoggedIn @client
  }
`

export const CURRENT_USER_QUERY = gql`
  query CURRENT_USER_QUERY {
    me {
      ...UserFragment
    }
  }
  ${USER_FRAGMENT}
`

export const SIGN_UP_MUTATION = gql`
  mutation SIGN_UP_MUTATION($email: String!, $password: String!) {
    signup(email: $email, password: $password) {
      token
      user {
        ...UserFragment
      }
    }
  }
  ${USER_FRAGMENT}
`

export const LOGIN_MUTATION = gql`
  mutation LOGIN_MUTATION($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        ...UserFragment
      }
    }
  }
  ${USER_FRAGMENT}
`

export const CREATE_LIST_MUTATION = gql`
  mutation CREATE_LIST_MUTATION(
    $title: String!
    $placeSanityId: String!
    $placeName: String!
    $placeImageUrl: String!
    $placeSlug: String!
  ) {
    createList(
      title: $title
      placeSanityId: $placeSanityId
      placeName: $placeName
      placeImageUrl: $placeImageUrl
      placeSlug: $placeSlug
    ) {
      ...ListFragment
    }
  }
  ${LIST_FRAGMENT}
`

// TOGGLE_PLACE_MUTATION
