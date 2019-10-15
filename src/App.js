import React, { Fragment } from 'react';

import Router from './routes/Router'
import Navbar from './components/Navbar'
import { GlobalStyle } from './styles'

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Router>
        <Navbar />
      </Router>
    </Fragment>
  );
}

export default App;
