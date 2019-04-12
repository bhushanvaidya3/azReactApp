import React, { Component } from "react";
import { withRouter } from 'react-router-dom'


class StarCard extends Component {
  constructor(props) {
    super(props);
    this.handleRedirect = this.handleRedirect.bind(this);
  }
  handleRedirect() {
    this.props.history.push(`/starcast/${this.props.starData.id}`);
  }

  render() {

    return (
      <div className="card" style={{ width: "18rem", margin: "0.5rem" }}>
        <div className="card-header">{this.props.starData.name}</div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{this.props.starData.height}</li>
          <li className="list-group-item">{this.props.starData.eye_color}</li>
          <li className="list-group-item">{this.props.starData.hair_color}</li>
          <li className="list-group-item">
            <button className="btn btn-primary" onClick={this.handleRedirect}>
              Edit
            </button>
          </li>
        </ul>
      </div>
    );
  }
}

export default withRouter(StarCard);
