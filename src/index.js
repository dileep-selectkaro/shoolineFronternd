import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import ReactGA from 'react-ga';
import TagManager from 'react-gtm-module'

const tagManagerArgs = {
    gtmId: 'AW-11424779185'
}

TagManager.initialize(tagManagerArgs)

const root = document.getElementById('root');

ReactGA.initialize("G-D865D3WQW2");

const SendAnalytics = () => {
  ReactGA.send({
    hitType: "pageview",
    page: window.location.pathname,
  });
};

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

SendAnalytics();
reportWebVitals();


