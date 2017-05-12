require('file-loader?name=[name].[ext]!./static/index.html');
require('file-loader?name=[name].[ext]!./static/404.html');
require('file-loader?name=[name].[ext]!./static/404.css');

/* React Framework Components */
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
//import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

/* Custom React Components */
import HomePage from './components/pages/HomePage.jsx';
import FormPage from './components/pages/FormPage.jsx';
import ProjectListPage from './components/pages/ProjectListPage.jsx';

const AppRouter = () => (

  <Router>
    <div>
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link className="navbar-brand" to="/">Open Source Forum</Link>
          </div>
          <ul className="nav navbar-nav">
            <li><Link to="/submit">Submit a Project</Link></li>
            <li><Link to="/projects">All the Projects</Link></li>
          </ul>
          </div>
      </nav>


      <Route exact path="/" component={HomePage}/>
      <Route path = "/submit" component={FormPage}/>
      <Route path = "/projects" component={ProjectListPage}/>
    </div>
  </Router>
)
ReactDOM.render(
  <AppRouter />, document.getElementById("react-app"));
