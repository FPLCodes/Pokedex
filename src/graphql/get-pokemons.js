import gql from "graphql-tag";

export const GET_POKEMONS = gql`
  query pokemons($first: Int!) {
    pokemons(first: $first) {
      id
      name
      number
      image
      maxHP
      maxCP
      weight {
        maximum
      }
      height {
        maximum
      }
      classification
    }
  }
`;
