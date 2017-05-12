import React from 'react';

import ProjectForm from '../ProjectForm.jsx'

export default class FormPage extends React.Component {
  render() {

    //Placeholder for the submit page
    return (
      <div className="jumbotron">
        <h1>Project Submit</h1>
        <p>In this page users can submit new projects</p>
        <br/>
        <ProjectForm />
      </div>
    );
  }
}
