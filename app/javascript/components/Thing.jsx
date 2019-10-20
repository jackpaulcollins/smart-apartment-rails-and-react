import React from "react";
import PropTypes from "react";

class Thing extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="thing">
        <h3>{this.props.name}</h3>
        <p>{this.props.quantity}</p>
        <p>{this.props.priority}</p>
      </div>
    )
  }
}

Thing.prototypes = {
  name: PropTypes.string,
  quantity: PropTypes.number,
  priority: PropTypes.string
}

export default Thing;