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
    this.fetchThing();
  }

  getThingPromise() {
    return new Promise((resolve, reject) => {
      const id = this.props.match.params.id
      const url = `/api/v1/show/${id}`
      fetch(url).then(response => {
        console.log(response)
       if (response.ok) {
        return response.json();
      }
      throw new Error('Network response was not ok.');
      }).then(response => resolve(response))
    })
  }

  fetchThing() {
    this.getThingPromise().then((response) => {
      this.setState({ thing: response})
    })
  }

  render() {
    const name = this.state.thing.name ? this.state.thing.name : 'loading';
    const quantity = this.state.thing.quantity ? this.state.thing.quantity : 'loading';
    const priority = this.state.thing.priority ? this.state.thing.priority : 'loading';
    return (
      <div className="thing">
       <h1>{name}</h1>
       <p>Amount needed: {quantity}</p>
       <p>Priority: {priority}</p>
      </div>
    )
  }
}

export default ThingDetails;