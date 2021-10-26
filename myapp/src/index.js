import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import AppTwo from './components/appTwo/appTwo';
import './index.css'

ReactDOM.render(
    <StrictMode>
      <App/>
      <AppTwo/>
    </StrictMode>,
  document.getElementById('root')
);