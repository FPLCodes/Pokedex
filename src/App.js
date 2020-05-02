import React from "react";
import "./App.css";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { PokedexContainer } from "./container/PokedexContainer";

function App() {
  const client = new ApolloClient({
    uri: "https://graphql-pokemon.now.sh/",
  });
  return (
    <ApolloProvider client={client}>
      <PokedexContainer />
    </ApolloProvider>
  );
}

export default App;
