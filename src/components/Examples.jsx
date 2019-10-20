/*!

=========================================================
* BLK Design System React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from 'react'
import {
  Button,
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardHeader,
  Progress,
} from 'reactstrap'

class Examples extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <div className="section section-examples" data-background-color="black">
          <img
            alt="..."
            className="path"
            src={require('assets/img/path1.png')}
          />
          {/* <div className="space-20" /> */}
          <Container className="text-center">
            <Row>
              <Col sm="6">
                <a
                  to="https://sensical.herokuapp.com"
                  href="https://sensical.herokuapp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    alt="..."
                    className="img-raised"
                    src={require('assets/img/sensical.jpeg')}
                    target="_blank"
                  />
                </a>
                <Button
                  className="btn-simple btn-round"
                  color="primary"
                  href="https://sensical.herokuapp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="special-color"
                >
                  Sensical
                </Button>
              </Col>

              <Col sm="6">
                <a
                  to="https://nba-playoff-simulator.herokuapp.com/"
                  href="https://nba-playoff-simulator.herokuapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    alt="..."
                    className="img-raised"
                    src={require('assets/img/nba-playoff-simulator.JPG')}
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                </a>
                <Button
                  className="btn-simple btn-round"
                  color="primary"
                  href="https://nba-playoff-simulator.herokuapp.com/"
                  target="_blank"
                  id="special-color"
                >
                  NBA Playoff Simulator
                </Button>
              </Col>
            </Row>
            <br />
            <br />
            <Row>
              <Col sm="6">
                <a
                  to="https://graceshopper-shoelala.herokuapp.com/"
                  href="https://graceshopper-shoelala.herokuapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    alt="..."
                    className="img-raised"
                    src={require('assets/img/graceshopper-shoelala.JPG')}
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                </a>
                <Button
                  className="btn-simple btn-round"
                  color="primary"
                  href="https://graceshopper-shoelala.herokuapp.com/"
                  id="special-color"
                  target="_blank"
                >
                  E-Commerce App
                </Button>
              </Col>

              <Col sm="6">
                <a
                  to="https://getstuffdone-82116.firebaseapp.com/"
                  href="https://getstuffdone-82116.firebaseapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    alt="..."
                    className="img-raised"
                    src={require('assets/img/get-stuff-done.JPG')}
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                </a>
                <Button
                  className="btn-simple btn-round"
                  color="primary"
                  href="https://getstuffdone-82116.firebaseapp.com/"
                  id="special-color"
                  target="_blank"
                >
                  Todo FireStore-React App
                </Button>
              </Col>
            </Row>
          </Container>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />

        <div className="section" data-background-color="black page-header">
          <img
            alt="..."
            className="dots"
            src={require('assets/img/dots.png')}
          />
          <img
            alt="..."
            className="path"
            src={require('assets/img/path4.png')}
          />
          <Container className="align-items-center">
            <Row>
              <Col lg="6" md="6">
                <h1 className="profile-title text-left">Liam Neville</h1>
                <h3 className="text-on-back">About Me</h3>
                <p className="profile-description">
                  Silicon Valley Software Developer with 5+ years of programming
                  experience. I'm a self starter who's built various projects
                  solo and in teams using a wide variety of languages,
                  technologies, frameworks and design patterns. I currently work
                  as a Software Engineer for a solid-state battery start up in
                  San Jose where I develop internal applications using
                  Angular.JS, C#, .Net, EntityFramework, MySql, Kendo-UI and
                  other tools every day. I have extensive experience with React,
                  Firebase, JavaScript, TypeScript, Java, Pyton, C#, Haskell,
                  Go, Ruby, Ruby on Rails, PostgreSQL, Node.JS, CI/CD,
                  Functional Programming, OO programming, Web Development and
                  various other technologies and frameworks. If you would like
                  to get in contact with me you can reach me at
                  liamgneville@gmail.com
                </p>
              </Col>
              <Col className="ml-auto mr-auto" lg="4" md="6">
                <Card className="card-coin card-plain">
                  <CardHeader>
                    <img
                      alt="..."
                      className="img-center img-fluid rounded-circle"
                      src={require('assets/img/liam.jfif')}
                      z-index={2}
                    />
                    <h4 className="title text-center" id="special-color">
                      Skills
                    </h4>
                  </CardHeader>

                  <CardBody>
                    <div className="progress-container progress-info">
                      <span className="progress-badge">React</span>
                      <Progress max="100" value="85"></Progress>
                    </div>

                    <div className="progress-container progress-info">
                      <span className="progress-badge">Angular</span>
                      <Progress max="100" value="75"></Progress>
                    </div>

                    <div className="progress-container progress-info">
                      <span className="progress-badge">Java</span>
                      <Progress max="100" value="80"></Progress>
                    </div>

                    <div className="progress-container progress-info">
                      <span className="progress-badge">TypeScript</span>
                      <Progress max="100" value="90"></Progress>
                    </div>

                    <div className="progress-container progress-info">
                      <span className="progress-badge">Python</span>
                      <Progress max="100" value="60"></Progress>
                    </div>

                    <div className="progress-container progress-info">
                      <span className="progress-badge">Haskell</span>
                      <Progress max="100" value="40"></Progress>
                    </div>

                    <div className="progress-container progress-info">
                      <span className="progress-badge">C#</span>
                      <Progress max="100" value="80"></Progress>
                    </div>

                    <div className="progress-container progress-info">
                      <span className="progress-badge">
                        Relational Databases
                      </span>
                      <Progress max="100" value="75"></Progress>
                    </div>

                    <div className="progress-container progress-info">
                      <span className="progress-badge">Cloud Firebase</span>
                      <Progress max="100" value="65"></Progress>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    )
  }
}

export default Examples
