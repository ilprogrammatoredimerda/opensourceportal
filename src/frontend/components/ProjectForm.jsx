import React from 'react';
//const unirest = require('unirest');

export default class ProjectForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      url: '',
      language: '',
      tags: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    switch (event.target.id) {
      case "name":
          this.setState({name: event.target.value});
        break;
      case "desc":
          this.setState({description: event.target.value});
        break;
      case "url":
          this.setState({url: event.target.value});
        break;
      case "tags":
        this.setState({tags: event.target.value});
        break;
      case "lang":
        this.setState({language: event.target.value});
        break;
      default:
        console.error("Wrong id in form");
    }
  }

  handleSubmit(event) {
    /*unirest.post("/api/newProject")
           .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
           .send(this.state)
           .end((res) => {
             alert(res)
           })*/
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label>
            Name:
            <input cols="50" id="name" placeholder="Project name" type="text" value={this.state.name} onChange={this.handleChange} className="form-control" autofocus/>
          </label>
          </div>
          <div className="form-group">
          <label>
            Description:
            <textarea id="desc" rows="4" cols="50" type="text" placeholder="Project description" value={this.state.value} onChange={this.handleChange} className="form-control"/>
          </label>
          </div>
          <div className="form-group">
          <label>
            URL:
            <input id="url" cols="50" type="text" placeholder="Project website" value={this.state.value} onChange={this.handleChange} className="form-control"/>
          </label>
          </div>
          <div className="form-group">
          <label>
            Programming Language:
            <input id="lang" cols="50" type="text" placeholder="Project main language" value={this.state.value} onChange={this.handleChange} className="form-control"/>
          </label>
          </div>
          <div className="form-group">
          <label>
            Tags:
            <input id="tags" cols="50" type="text" placeholder="Related tags" value={this.state.value} onChange={this.handleChange} className="form-control"/>
          </label>
          </div>
          <button className="btn btn-primary" type="submit">Submit</button>
      </form>
    );
  }
}
