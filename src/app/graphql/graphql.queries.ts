import { gql } from 'apollo-angular'

const GET_SWAPI = gql`
{
  allFilms {
    films {
      title
    }
  }
}
`

export { GET_SWAPI }