require('file-loader?name=[name].[ext]!./index.html');

/* React Framework Components */
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

/* Custom React Components */
import HomePage from './components/pages/HomePage.jsx';
import FormPage from './components/pages/FormPage.jsx';
import ProjectListPage from './components/pages/ProjectListPage.jsx';

const AppRouter = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/submit">Submit</Link></li>
        <li><Link to="/projects">Projects</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={HomePage}/>
      <Route path = "/submit" component={FormPage}/>
      <Route path = "/projects" component={ProjectListPage}/>
    </div>
  </Router>
)
ReactDOM.render(
  <AppRouter />, document.getElementById("react-app"));
