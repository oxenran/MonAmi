import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <h1>Welcome to Mon Ami Home Page - WE CAN HELP!</h1>

    <div className="clickbox">
      <Link to='/Assistants'>Find An Assistant Now!</Link>
    </div>
  </div>
)

export default Home;
