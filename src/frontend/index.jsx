require('file-loader?name=[name].[ext]!./index.html');

/* React Framework Components */
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

/* Custom React Components */
import HomePage from './components/pages/HomePage.jsx';
import FormPage from './components/pages/FormPage.jsx';
import ProjectListPage from './components/pages/ProjectListPage.jsx';

const AppRouter = () => (

  <Router>
    <div>
    <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">OpenSourceForum</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1} href="/submit">Submit</NavItem>
          <NavItem eventKey={2} href="/projects">Projects</NavItem>
        </Nav>
      </Navbar>

      <hr/>

      <Route exact path="/" component={HomePage}/>
      <Route path = "/submit" component={FormPage}/>
      <Route path = "/projects" component={ProjectListPage}/>
    </div>
  </Router>
)
ReactDOM.render(
  <AppRouter />, document.getElementById("react-app"));
