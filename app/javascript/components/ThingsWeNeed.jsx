import React from "react";

class ThingsWeNeed extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      things: []
    }
    this.getThingsPromise = this.getThingsPromise.bind(this);
    this.fetchThings = this.fetchThings.bind(this);
  }
  
  componentDidMount() {
    this.fetchThings();
  }

  getThingsPromise() {
    return new Promise((resolve, reject) => {
      const url = "/api/v1/things/index";
      fetch(url).then(response => {
       if (response.ok) {
        return response.json();
      }
      throw new Error('Network response was not ok.');
      }).then(response => resolve(response))
    })
  }

  fetchThings() {
    this.getThingsPromise().then((response) => {
      this.setState({ things: response})
    })
  }

  render () {
    console.log(this.state.things)
      return (
        <div>
          Things
        </div>
      )
    }
  }
 
export default ThingsWeNeed;

