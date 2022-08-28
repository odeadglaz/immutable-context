import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './page/App'
import './index.css'

const container = document.getElementById('app');

ReactDOM.hydrateRoot(container as HTMLElement, <App/>);
