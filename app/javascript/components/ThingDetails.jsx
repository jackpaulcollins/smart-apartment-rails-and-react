import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "react";

class ThingDetails extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      thing: {}
    };
  }

  componentDidMount() {
    this.getThingPromise();
  }

  getThingPromise() {
  const id = this.props.match.params.id
  const url = `/api/v1/show/${id}`;
  fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("Network response was not ok.");
    })
    .then(response => this.setState({ thing: response }))
    .catch(() => this.props.history.push("/"));
  }

  addHtmlEntities(str) {
    return String(str)
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">");
  }

  render() {
    const name = this.state.thing.name ? this.state.thing.name : 'loading';
    const quantity = this.state.thing.quantity ? this.state.thing.quantity : 'loading';
    const priority = this.state.thing.priority ? this.state.thing.priority : 'loading';
    return (
      <div className="thing-detail">
       <h1>{name}</h1>
       <p>Amount needed: {quantity}</p>
       <p>Priority: {priority}</p>
       <button>Delete</button><button>Update</button>
      </div>
    )
  }
}

export default ThingDetails;