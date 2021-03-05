/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import Navigation from './src/navigation';
import { ApolloClient } from 'apollo-boost';

import { ApolloProvider } from '@apollo/react-hooks';
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

const client = new ApolloClient({
  link: createHttpLink(
    {
      uri:'https://serene-lake-64396.herokuapp.com/graphql',
    },
  ),
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <ApolloProvider client={client}>
        <Navigation />
    </ApolloProvider>
  );
};


