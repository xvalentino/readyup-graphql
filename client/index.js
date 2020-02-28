import React from "react";
import { render } from "react-dom";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const client = new ApolloClient({
  uri: "http://localhost:4466/"
});

const ALL_USERS = gql`
  {
    users {
      first_name
    }
  }
`;

const AllUsers = () => {
  const { loading, error, data } = useQuery(ALL_USERS);
  if (loading) {
    return "loading";
  }
  if (error) {
    return "error";
  }
  return JSON.stringify(data);
};

const App = () => (
  <ApolloProvider client={client}>
    <AllUsers />
  </ApolloProvider>
);

render(<App />, document.getElementById("app"));
