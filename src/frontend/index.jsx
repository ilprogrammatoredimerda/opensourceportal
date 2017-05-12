require('file-loader?name=[name].[ext]!./static/index.html');
require('file-loader?name=[name].[ext]!./static/404.html');
require('file-loader?name=[name].[ext]!./static/404.css');
require('file-loader?name=[name].[ext]!./static/fixedsys.ttf');


/* React Framework Components */
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom';
//import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

/* Custom React Components */
import HomePage from './components/pages/HomePage.jsx';
import FormPage from './components/pages/FormPage.jsx';
import ProjectListPage from './components/pages/ProjectListPage.jsx';

const AppRouter = () => (

  <Router>
    <div>
      <nav className="light-blue lighten-1">
        <div className="nav-wrapper container">
          <Link className="brand-logo" to="/">Open Source Forum</Link>
          <Link to="#" data-activates="mobile-menu" className="button-collapse">
            <i className="material-icons">menu</i>
          </Link>
          <ul className="right hide-on-med-and-down">
            <li>
              <Link to="/submit">Submit a Project</Link>
            </li>
            <li>
              <Link to="/projects">All the Projects</Link>
            </li>
          </ul>
          <ul className="side-nav" id="mobile-menu">
            <li>
              <Link to="/">Home Page</Link>
            </li>
            <li>
              <Link to="/submit">Submit a Project</Link>
            </li>
            <li>
              <Link to="/projects">All the Projects</Link>
            </li>
          </ul>
        </div>
      </nav>

      <Route exact path="/" component={HomePage}/>
      <Route path="/submit" component={FormPage}/>
      <Route path="/projects" component={ProjectListPage}/>
    </div>
  </Router>
)
ReactDOM.render(
  <AppRouter/>, document.getElementById("react-app"));
