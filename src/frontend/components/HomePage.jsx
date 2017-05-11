const React = require("react");

export default class HomePage extends React.Component {
  render() {

    return (
      <div>
        <Hello/>
        <Bye/>
      </div>
    );
  }
}

class Hello extends React.Component {

  render() {
    return (
      <h1>Hello!</h1>
    );
  }
}
class Bye extends React.Component {
  render() {
    return (
      <h3>Bye!</h3>
    );
  }
}
