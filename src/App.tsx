import React, {useState} from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink
} from "@apollo/client";

import {
  BrowserRouter, Routes, Route
} from "react-router-dom";

import Polls from "./pages/polls";
import EditPoll from "./pages/edit";
import {createTheme, ThemeProvider} from "@mui/material";

const createApolloClient = () => {
  return new ApolloClient({
    link: new HttpLink({
      uri: 'http://localhost:8080/v1/graphql',
    }),
    cache: new InMemoryCache(),
  });
};

function App() {
  const [client] = useState(createApolloClient())
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route index element={<Polls/>}/>
          <Route path="edit/:pollId" element={<EditPoll/>}/>
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
