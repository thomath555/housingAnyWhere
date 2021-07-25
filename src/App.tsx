// Core
import React from 'react';

// Components
import AppRouter from './routes'

// Style
import { GlobalStyle } from './assets/styles/globalStyles';


const App = () => {
  return (
    <>
      <GlobalStyle />
      <AppRouter />
    </>
  );
}

export default App;
