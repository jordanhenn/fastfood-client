import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { FastFoodProvider } from './contexts/FastFoodContext'
import App from './components/App/App'
import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <FastFoodProvider>
      <App />
    </FastFoodProvider>
</BrowserRouter>, document.getElementById('root'));