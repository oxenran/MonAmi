import React from 'react';
import { Link } from 'react-router-dom';
import { Image, Col } from 'react-bootstrap';

const Home = () => (
  <div className="homepage">
    <Image id="homepage-background" src="https://images.unsplash.com/photo-1476611317561-60117649dd94?auto=format&fit=crop&w=1050&q=80" responsive />
    <Col xs={12} md={10} lg={8}>
    <div className="clickbox">
      <h2 className="clickbox-text"><Link to='/Assistants'>In a world full of people, no one should be alone. Find a friend who can help now!</Link></h2>
    </div>
    </Col>
  </div>
)

export default Home;
