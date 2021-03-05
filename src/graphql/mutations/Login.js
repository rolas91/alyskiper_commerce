import { gql } from 'apollo-boost';

export const SINGIN = gql`
mutation IniciarSesion($email: String!, $password: String!){
  signin(input: {email: $email, password: $password }) {
    data {
      token
      firstname
      lastname
      username
      email
      phone_number
    },
    error{
      message,
      status
      ok
    }
  }
}`;