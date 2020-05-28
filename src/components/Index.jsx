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

// core components
import IndexNavbar from './IndexNavbar'
import PageHeader from './PageHeader'
import Footer from './Footer'
import Examples from './Examples'
import Typography from './Typography'

class Index extends React.Component {
  componentDidMount() {
    document.body.classList.toggle('index-page')
  }
  componentWillUnmount() {
    document.body.classList.toggle('index-page')
  }
  render() {
    return (
      <div>
        <IndexNavbar />
        <div className="wrapper">
          <PageHeader />
          <div className="main">
            <Typography />
            <Examples />
          </div>
          <Footer />
        </div>
      </div>
    )
  }
}

export default Index
