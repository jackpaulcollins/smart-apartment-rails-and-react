import React from "react";
import Thing from './Thing';

class ThingsWeNeed extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      things: []
    }
    this.getThingsPromise = this.getThingsPromise.bind(this);
    this.getThingsToRender = this.getThingsToRender.bind(this);
  }
  
  componentDidMount() {
    this.getThingsPromise();
  }

  getThingsPromise() {
    const url = `/api/v1/things/index`;
    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then(response => this.setState({ things: response }))
      .catch(() => this.props.history.push("/"));
  }


  getThingsToRender(){
    let thingsToRender = [];
    for (let i = 0; i < this.state.things.length; i++) {
      thingsToRender.push(<Thing key={i}
                                 id={(i + 1)}
                                 name={this.state.things[i].name}
                                 quantity={this.state.things[i].quantity} 
                                 priority={this.state.things[i].priority}
                                />)
    }
    return thingsToRender;
  }

 

  render () {

    const thingsToRender = this.getThingsToRender();

      return (
        <div className='things'>
          { thingsToRender ? thingsToRender : 'NADA' }
        </div>
      )
    }
  }
 
export default ThingsWeNeed;

