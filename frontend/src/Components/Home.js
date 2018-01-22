import React from 'react';
import { Link } from 'react-router-dom';
import { Image, Col } from 'react-bootstrap';

const Home = () => (
  <div className="homepage">
    <Image id="homepage-background" src="https://image.ibb.co/mC9xRw/homepageimage.jpg"></Image>
    <Col className="clickbox" xs={12} md={10} lg={8}>

      <h2 className="clickbox-text"><Link to='/Assistants'>In a world full of people, no one should be alone. Find a friend who can help now!</Link></h2>

    </Col>
  </div>
)

export default Home;
