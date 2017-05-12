import React from 'react';

import ProjectForm from '../ProjectForm.jsx'

export default class FormPage extends React.Component {
  render() {

    //Placeholder for the submit page
    return (
      <div>
      <div className="container">
        <h1 className="header center">Project Submit</h1>
        <div className="row center">
        <p className="header col s12">In this page users can submit new projects</p>
        </div>
        </div>
        <div className="container col s6 offset-s3">
        <ProjectForm />
        </div>
      </div>
    );
  }
}
