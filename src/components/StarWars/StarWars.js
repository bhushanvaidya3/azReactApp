import React, { Component } from "react";
import StarCard from "./StarCard";
import Loading from "../common/Loading";

export default class StarWars extends Component {
  constructor(props) {
    super(props);
    this.state = {
      starData: [],
      isLoading: true
    };
  }

  async componentDidMount() {
    const response = await fetch("https://swapi.co/api/people");
    const data = await response.json();
    this.setState((prevState, props) => {
      return {
        starData: data.results,
        isLoading: false
      };
    });
  }

  render() {
    let count = 1;
    if (this.state.isLoading) {
      return <Loading isLoading={this.state.isLoading} />;
    }
    const starCardComponents = this.state.starData.map(r => {
      r.id = count++;
      return <StarCard key={r.id} starData={r} />;
    });
    return (
      <div className="container-fluid">
        <h2>Star Wars</h2>
        <hr />
        <div className="row">{starCardComponents}</div>
      </div>
    );
  }
}
