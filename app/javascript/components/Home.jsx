import React from "react";
import ThingsWeNeed from './ThingsWeNeed';
import Bills from './Bills';
import DaysSinceTacoBell from './DaysSinceTacoBell';

const Home = () => {
 return (
    <div>
      <ThingsWeNeed/>
      <Bills/>
      <DaysSinceTacoBell/>
    </div>
    )
 }

export default Home;