import React from 'react';
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';

const Home = () => (
  <div className="homepage">
    <Image id="homepage-background" src="https://images.unsplash.com/photo-1476611317561-60117649dd94?auto=format&fit=crop&w=1050&q=80" responsive />
    <h1>Welcome to Mon Ami Home Page - WE CAN HELP!</h1>

    <div className="clickbox">
      <h2 className="clickbox-text"><Link to='/Assistants'>In a world full of people, no one should be alone. Find a friend who can help now!</Link></h2>
    </div>
  </div>
)

export default Home;
