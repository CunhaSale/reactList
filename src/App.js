import React from 'react';
import Router from './routes';

import './style.css';

import Header from './components/Header'

const App = () => (
  <div>
    <Header />
    <Router />
  </div>
)

export default App;
