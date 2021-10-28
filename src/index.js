// CORE
import React from 'react';
import { hydrate, render } from "react-dom";
// COMPONENTS
import App from './App';
// STYLES
import './styles/reset.css';
import './styles/index.css';

const rootElement = document.getElementById("root");

if (rootElement.hasChildNodes()) {
    hydrate(<App />, rootElement);
} else {
    render(<App />, rootElement);
}
