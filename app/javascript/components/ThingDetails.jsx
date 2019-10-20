import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "react";

class ThingDetails extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(this.props)
    return (
      <div className="thing">
       thing
      </div>
    )
  }
}

export default ThingDetails;