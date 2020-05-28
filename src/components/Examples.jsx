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
                <p>
                  Interactive, collaborative and customizable learning
                  environment designed to enable users to code, chat, draw,
                  video call and more all in one shared space.
                </p>
                <p>
                  Built using Google Cloud FireStore, React and Material UI.
                </p>
              </Col>

              <Col sm="6">
                <a
                  to="https://breakeven.dev/blackjack"
                  href="https://breakeven.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    alt="..."
                    className="img-raised"
                    src={require('assets/img/blackjack.jpeg')}
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                </a>
                <Button
                  className="btn-simple btn-round"
                  color="primary"
                  href="https://breakeven.dev"
                  id="special-color"
                  target="_blank"
                >
                  BlackJack
                </Button>
                <p>
                  Casino BlackJack with a focus on fluid UI transitions,
                  including card counter and basic strategy derived hints
                  inspired by my late GrandFather Don.
                </p>
                <p>Built using Svelte, TypeScript, and Bulma.</p>
              </Col>
            </Row>
            <br />
            <br />
            <Row>
              <Col sm="6">
                <a
                  to="https://svelte-ts.firebaseapp.com/timeline"
                  href="https://svelte-ts.firebaseapp.com/timeline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    alt="..."
                    className="img-raised"
                    src={require('assets/img/covidtimeline.jpeg')}
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                </a>
                <Button
                  className="btn-simple btn-round"
                  color="primary"
                  href="https://svelte-ts.firebaseapp.com/timeline"
                  id="special-color"
                  target="_blank"
                >
                  Covid19 Live Stats
                </Button>
                <p>
                  Stats tracker that pulls live data related to Covid19, as well
                  as plotting a real-time, interactive and graphical timeline.
                </p>
                <p>Built using Svelte, TypeScript, ChartJs and Bulma.</p>
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
                    src={require('assets/img/nba-playoff-simulator.jpeg')}
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
                <p>
                  Predictive NBA Playoff Simulator which enables users to adjust
                  the weights of the stats dynamically and simulate the 2018 NBA
                  Playoffs.
                </p>
                <p>Build using Node.js, Express, PostgreSQL and React.</p>
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
                    src={require('assets/img/graceshopper-shoelala.jpeg')}
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
                <p>
                  Online shopping website with fully functioning cart and
                  checkout.
                </p>
                <p>
                  Built using Node.js, Express, React, PostgreSQL, Material
                  Design and Stripe.
                </p>
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
                    src={require('assets/img/get-stuff-done.jpeg')}
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
                <p>
                  Todo list app built to production quality featuring 100% PWA
                  rating, cross-platform mobile responsiveness and a native
                  desktop experience.
                </p>
                <p>
                  Built using Google Cloud FireStore, React, Material UI, and
                  Electron.
                </p>
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
              <Col lg="6" md="3">
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
                  Angular, Svelte, Elm, Firebase, JavaScript, TypeScript, Java,
                  Pyton, C#, .NET, .NET Core, Haskell, Go, Ruby, Ruby on Rails,
                  PostgreSQL, Node.JS, CI/CD, Functional Programming, OO
                  programming, Web Development and various other technologies
                  and frameworks. If you would like to get in contact with me
                  you can reach me at liamgneville@gmail.com
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
                      <Progress max="100" value="80"></Progress>
                    </div>

                    <div className="progress-container progress-info">
                      <span className="progress-badge">Svelte</span>
                      <Progress max="100" value="60"></Progress>
                    </div>

                    <div className="progress-container progress-info">
                      <span className="progress-badge">C# .NET Framework</span>
                      <Progress max="100" value="90"></Progress>
                    </div>

                    <div className="progress-container progress-info">
                      <span className="progress-badge">Java</span>
                      <Progress max="100" value="85"></Progress>
                    </div>

                    <div className="progress-container progress-info">
                      <span className="progress-badge">TypeScript</span>
                      <Progress max="100" value="90"></Progress>
                    </div>

                    <div className="progress-container progress-info">
                      <span className="progress-badge">Python</span>
                      <Progress max="100" value="70"></Progress>
                    </div>

                    <div className="progress-container progress-info">
                      <span className="progress-badge">Haskell</span>
                      <Progress max="100" value="50"></Progress>
                    </div>

                    <div className="progress-container progress-info">
                      <span className="progress-badge">Rust</span>
                      <Progress max="100" value="65"></Progress>
                    </div>

                    <div className="progress-container progress-info">
                      <span className="progress-badge">
                        Relational Databases
                      </span>
                      <Progress max="100" value="75"></Progress>
                    </div>

                    <div className="progress-container progress-info">
                      <span className="progress-badge">Cloud Technologies</span>
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
