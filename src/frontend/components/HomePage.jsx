const React = require("react");

export default class HomePage extends React.Component {
  render() {

    return (
      <div>
        <Hello/>
      </div>
    );
  }
}

class Hello extends React.Component {

  render() {
    return (
      <h1>OpenSourceForum</h1>
    );
  }
}
