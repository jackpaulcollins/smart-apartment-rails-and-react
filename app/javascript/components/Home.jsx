import React from "react";
import { Link } from "react-router-dom";
import ThingsWeNeed from './ThingsWeNeed';
import ThingDetails from './ThingDetails';
import Bills from './Bills';
import DaysSinceTacoBell from './DaysSinceTacoBell';

const Home = () => {
 return (
  <div className="vw-100 vh-100 primary-color d-flex align-items-center justify-content-center">
  <div className="jumbotron jumbotron-fluid bg-transparent">
    <div className="container secondary-color">
      <h1 className="display-4">Things We Need</h1>
      <p className="lead">
        A curated list of shit we need to buy.
      </p>
      <hr className="my-4" />
      <Link
        to="/things"
        className="btn btn-lg custom-button"
        role="button"
      >
        View Things We Need
      </Link>
    </div>
  </div>
</div>
    )
 }

export default Home;