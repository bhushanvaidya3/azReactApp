import React, { Component } from "react";
import { css } from "@emotion/core";
import { BeatLoader } from "react-spinners";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

export default class Loading extends Component {
  render() {
    return (
      <div className="sweet-loading">
        <BeatLoader
          css={override}
          sizeUnit={"px"}
          size={10}
          color={"#123abc"}
          loading={this.props.isLoading}
        />
      </div>
    );
  }
}
