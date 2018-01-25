import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, ButtonGroup, Grid, Col, Row } from 'react-bootstrap';

// The Header creates links that can be used to navigate
// between routes.
class Header extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      logButtonText: ''
    }
  }

  componentWillMount() {
    if (!this.props.getToken()) {
      this.setState({logButtonText: "Login"});
    }else{
      this.setState({logButtonText: "Logout"});
    }
  }

  componentWillReceiveProps() {
    if (!this.props.getToken()) {
      this.setState({logButtonText: "Login"});
    }else{
      this.setState({logButtonText: "Logout"});
    }
  }

  handleLog() {
    if (this.props.getToken()) {
      this.props.onLogout();
      this.setState({logButtonText: "Login"});
    }
  }

  render(){

    return(
      <header className="headerstyle">
        <h2 id="header-text"><span><Link to='/' id="mon-ami">Mon Ami</Link></span> - providing assistance for the elderly</h2>
        <nav className="navbar navbar-toggleable-sm navbar-light">
          <button id="nav-toggler" className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" id="toggler-icon"></span>
          </button>
          <a className="navbar-brand" href="#"></a>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <Grid>
            <Row>
              <Col xs={12} md={12} lg={12} navbar-nav>
                  <ButtonGroup bsClass="justified">
                    <ul>
                      <li> <Button><Link to='/BecomeAssistant'>Become an Assistant</Link></Button>
                      </li>
                      <li> <Button className={ !this.props.getToken() ? 'hidden' : '' }><Link to='/Dashboard'>Dashboard</Link></Button>
                      </li>
                      <li><Button><Link to='/Assistants'>Find Assistant</Link></Button>
                      </li>
                      <li> <Button className={ this.props.getToken() ? 'hidden' : '' }><Link to='/Signup'>Sign Up</Link></Button>
                      </li>
                      <li> <Button className="log" onClick={this.handleLog.bind(this)}><Link to='/Login'>{this.state.logButtonText}</Link></Button>
                      </li>
                    </ul>
                  </ButtonGroup>
              </Col>
            </Row>
          </Grid>
        </div>
      </nav>
    </header>
    )
  }
}

export default Header;
