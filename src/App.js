import React, { useState, useEffect } from "react";
import "./App.css";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { PokedexContainer } from "./container/PokedexContainer";

function App() {
  const [loading, setLoading] = useState(false);

  const client = new ApolloClient({
    uri: "https://graphql-pokemon.now.sh/",
  });

  useEffect(() => {
    setLoading(true);
    setInterval(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div>
      <ApolloProvider client={client}>
        <PokedexContainer />
      </ApolloProvider>
      {loading && <h1>Loading...</h1>}
    </div>
  );
}

export default App;
