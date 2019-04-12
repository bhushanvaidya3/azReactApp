import React, { Component } from "react";
import CastEdit from "./CastEdit";

export default class StarCast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {}
    };
    this.handleRedirect = this.handleRedirect.bind(this);
  }

  async componentDidMount() {
    const response = await fetch(
      `https://swapi.co/api/people/${this.props.match.params.id}`
    );
    const person = await response.json();
    this.setState((prevState, props) => {
      return {
        person: person
      };
    });
  }

  handleRedirect() {
    window.history.back();
  }

  render() {
    return (
      <div>
        <h2>Person</h2>
        <hr />
        <CastEdit person={this.state.person} />
      </div>
    );
  }
}
