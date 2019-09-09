import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl'
import '../App.css'

class LandingPage extends Component {
  render() {
    return (
      <div style={{ width: '100%', marginTop: 'auto' }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://icon-library.net//images/male-avatar-icon/male-avatar-icon-29.jpg"
              className="avatar-img"
              alt="avatar" />
            <div className="banner-text">
              <h3>Po Han Wu</h3>
              <h5>Full Stack Web Developer </h5>
              <hr />
              <p>HTML | CSS | Javascript | React | NodeJS | Express | PostgreSQL | Bootsrap</p>
              <div className="social-links">
                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>
                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>
                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-facebook-square" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>

        {/* <Grid className="landing-grid">
          <Cell col={12}>
          introA
          </Cell>
        </Grid>
       
        <Grid className="landing-grid">
          <Cell col={12}>
            introB
            <div></div>
          </Cell>
        </Grid>
      
        <Grid className="landing-grid">
          <Cell col={12}>
            introC
          </Cell>
        </Grid> */}
      </div>
    )
  }
}

export default LandingPage;