import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react';
import {BrowserRouter} from 'react-router-dom';
import  AuthcontextProvider  from './Components/product_page/ContextApi/AuthcontextProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider>
    <BrowserRouter>
    <AuthcontextProvider>
      <App />
    </AuthcontextProvider>
    </BrowserRouter>
  </ChakraProvider>
);


