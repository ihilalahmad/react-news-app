import React, { Component } from "react";
import loading from "../loading.gif";

export class Spinner extends Component {
  render() {
    return (
      <div className="text-center">
        <img src={loading} alt="loading" width={100} height={100} />
      </div>
    );
  }
}

export default Spinner;
