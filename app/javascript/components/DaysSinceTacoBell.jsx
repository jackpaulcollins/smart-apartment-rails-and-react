import React from "react";
import CustomModal from "./CustomModal";
import { throws } from "assert";


class DaysSinceTacoBell extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      jackStreak: null,
      peteStreak: null,
      modalShowing: false
    };
    this.toggleModal = this.toggleModal.bind(this)
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
  
  render() {
    return (
      <div>
        <h1 className="display-4">Days Since Taco Bell</h1>
        <div className="lead">
          <p>Jack: 14</p>
          <p>Pete: 3</p>
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