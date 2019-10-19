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
import { Link } from 'react-router-dom'
// reactstrap components
import {
  Button,
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
} from 'reactstrap'

class ComponentsNavbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      collapseOpen: false,
      color: 'navbar-transparent',
    }
  }
  componentDidMount() {
    window.addEventListener('scroll', this.changeColor)
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.changeColor)
  }
  changeColor = () => {
    if (
      document.documentElement.scrollTop > 99 ||
      document.body.scrollTop > 99
    ) {
      this.setState({
        color: 'bg-info',
      })
    } else if (
      document.documentElement.scrollTop < 100 ||
      document.body.scrollTop < 100
    ) {
      this.setState({
        color: 'navbar-transparent',
      })
    }
  }
  toggleCollapse = () => {
    document.documentElement.classList.toggle('nav-open')
    this.setState({
      collapseOpen: !this.state.collapseOpen,
    })
  }
  onCollapseExiting = () => {
    this.setState({
      collapseOut: 'collapsing-out',
    })
  }
  onCollapseExited = () => {
    this.setState({
      collapseOut: '',
    })
  }
  scrollToDownload = () => {
    document
      .getElementById('download-section')
      .scrollIntoView({ behavior: 'smooth' })
  }
  render() {
    return (
      <Navbar
        className={'fixed-top ' + this.state.color}
        color-on-scroll="100"
        expand="lg"
      >
        <Container>
          <div className="navbar-translate">
            <NavbarBrand
              data-placement="bottom"
              to="/"
              rel="noopener noreferrer"
              tag={Link}
            >
              Modern Fullstack Software Solutions
            </NavbarBrand>
            <button
              aria-expanded={this.state.collapseOpen}
              className="navbar-toggler navbar-toggler"
              onClick={this.toggleCollapse}
            >
              <span className="navbar-toggler-bar bar1" />
              <span className="navbar-toggler-bar bar2" />
              <span className="navbar-toggler-bar bar3" />
            </button>
          </div>
          <Collapse
            className={'justify-content-end ' + this.state.collapseOut}
            navbar
            isOpen={this.state.collapseOpen}
            onExiting={this.onCollapseExiting}
            onExited={this.onCollapseExited}
          >
            <div className="navbar-collapse-header">
              <Row>
                <Col className="collapse-brand" xs="6">
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    Modern Fullstack Software Solutions
                  </a>
                </Col>
                <Col className="collapse-close text-right" xs="6">
                  <button
                    aria-expanded={this.state.collapseOpen}
                    className="navbar-toggler"
                    onClick={this.toggleCollapse}
                  >
                    <i className="tim-icons icon-simple-remove" />
                  </button>
                </Col>
              </Row>
            </div>
            <Nav navbar>
              <NavItem className="p-0">
                <NavLink
                  data-placement="bottom"
                  href="https://medium.com/@lineville"
                  rel="noopener noreferrer"
                  target="_blank"
                  title="Follow me on Medium"
                >
                  <i className="fab fa-medium" />
                  <p className="d-lg-none d-xl-none">Medium</p>
                </NavLink>
              </NavItem>
              <NavItem className="p-0">
                <NavLink
                  data-placement="bottom"
                  href="https://www.github.com/lineville"
                  rel="noopener noreferrer"
                  target="_blank"
                  title="Follow me on GitHub"
                >
                  <i className="fab fa-github" />
                  <p className="d-lg-none d-xl-none">GitHub</p>
                </NavLink>
              </NavItem>
              <NavItem className="p-0">
                <NavLink
                  data-placement="bottom"
                  href="https://www.linkedin.com/in/liam-neville/"
                  rel="noopener noreferrer"
                  target="_blank"
                  title="Add me on LinkedIn"
                >
                  <i className="fab fa-linkedin" />
                  <p className="d-lg-none d-xl-none">LinkedIn</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <a href="Liam-Neville-Resume.pdf" download>
                  <Button
                    className="nav-link d-none d-lg-block"
                    color="default"
                  >
                    <i className="tim-icons icon-cloud-download-93" /> Resume
                  </Button>
                </a>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    )
  }
}

export default ComponentsNavbar
