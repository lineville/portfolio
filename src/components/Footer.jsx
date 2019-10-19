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
import React from "react";
// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
} from "reactstrap";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <Container>
          <Row>
            <Col md="6">
              <h3 className="title">Modern Fullstack Software Solutions</h3>
            </Col>
            <Col md="1">
              <Nav>
                <NavItem>
                  <NavLink href="https://opensource.org/licenses/MIT">
                    License
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>
            <Col md="3">
              <h3 className="title">Follow me</h3>
              <div className="btn-wrapper profile">

                <Button
                  className="btn-icon btn-round"
                  color="medium"
                  href="https://medium.com/@lineville"
                  target="_blank"
                >
                  <i className="fab fa-medium" />
                </Button>
                <Button
                  className="btn-icon btn-round"
                  color="github"
                  href="https://www.github.com/lineville"
                  target="_blank"
                >
                  <i className="fab fa-github" />
                </Button>
                <Button
                  className="btn-icon btn-round"
                  color="linkedin"
                  href="https://www.linkedin.com/in/liam-neville/"
                  target="_blank"
                >
                  <i className="fab fa-linkedin" />
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }
}

export default Footer;
