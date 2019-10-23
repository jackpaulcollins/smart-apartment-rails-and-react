import React from "react";
import { Link } from "react-router-dom";

class BillDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = { bill: [] };
  }

  componentDidMount() {
      const {
        match: {
          params: { id }
        }
      } = this.props;
  
      const url = `/api/v1/show/${id}`;
  
      fetch(url)
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          throw new Error("Network response was not ok.");
        })
        .then(response => this.setState({ bill: response }))
        .catch(() => this.props.history.push("/recipes"));
    }

    render() {
      const { bill} = this.state;
      console.log(bill.link)
  
      return (
        <div className="">
          <div className="hero position-relative d-flex align-items-center justify-content-center">
            <div className="overlay bg-dark position-absolute" />
            <h1 className="display-4 position-relative text-white">
              {bill.name}
            </h1>
          </div>
          <div className="container py-5">
            <div className="row">
              <div className="col-sm-12 col-lg-3">
                <ul className="list-group">
                  <h5 className="mb-2">Due Date</h5>
                  {bill.due}
                </ul>
              </div>
              <div className="col-sm-12 col-lg-7">
                <h5 className="mb-2">Amount</h5>
                {bill.amount}
              </div>
              <div className="col-sm-12 col-lg-7">
                <h5 className="mb-2">Owner</h5>
                {bill.owner}
              </div>
              <div className="col-sm-12 col-lg-7">
                <h5 className="mb-2">Link</h5>
                <a href={`http://${bill.link}`}>{bill.link}</a>
              </div>
              <div className="col-sm-12 col-lg-2">
                <button type="button" className="btn btn-danger">
                  Delete bill
                </button>
              </div>
            </div>
            <Link to="/bills" className="btn btn-link">
              Back to bills
            </Link>
          </div>
        </div>
      );
    }
  
  }

export default BillDetails;