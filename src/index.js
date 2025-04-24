import ReactDom from 'react-dom/client';
// import { createRoot } from 'react-dom/client';
import App from './components/app/App';
import './style/style.scss';
import React from 'react';

// const container = document.getElementById('root');
// const root = createRoot(container);
// root.render(<App />);

ReactDom.createRoot(document.getElementById('root')).render(<App />);
