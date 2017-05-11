require('file-loader?name=[name].[ext]!./index.html');
const rootDir = "../../"
import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from './components/HomePage.jsx';

ReactDOM.render(<HomePage />, document.getElementById("react-app"));
