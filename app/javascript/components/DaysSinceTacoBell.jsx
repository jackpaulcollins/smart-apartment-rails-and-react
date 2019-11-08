import React from "react";
import CustomModal from "./CustomModal";
import { throws } from "assert";


class DaysSinceTacoBell extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      users: null,
      modalShowing: false
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.determineStreak = this.determineStreak.bind(this);
  }

  componentDidMount() {
    const url = '/api/v1/days_since_taco_bell/index';

    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then(response => this.setState({ lastDay: response }))
      .catch(() => this.props.history.push("/"));
  }

  toggleModal(){
    if (this.state.modalShowing) {
      this.setState({
        modalShowing: false
      })
    } else {
      this.setState({
        modalShowing: true
      })
    }
  }

  determineStreak(date){
    const lastDate = new Date(date)
    let today = new Date();
    const streak = (today - lastDate)
    const diffInDays = streak / (1000 * 3600 * 24)
    return diffInDays
  }

  
  render() {
    const jackStats = this.state.lastDay ? this.state.lastDay[0][0].lastday : ''
    const peteStats = this.state.lastDay ? this.state.lastDay[1][0].lastday : ''
    const jackStreak = this.determineStreak(jackStats)
    const peteStreak = this.determineStreak(peteStats)
    return (
      <div>
        <h1 className="display-4">Days Since Taco Bell</h1>
        <div className="lead">
          <p>Jack: {jackStreak}</p>
          <p>Pete: {peteStreak}</p>
        </div>
        <button type="button" className="btn btn-dark" onClick={this.toggleModal}>Reset you fat fuck</button>
        <div>
         <CustomModal toggleModal={this.toggleModal}
                      show={this.state.modalShowing}/>
        </div>
      </div>
    )
  }
}

export default DaysSinceTacoBell;