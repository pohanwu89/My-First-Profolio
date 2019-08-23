import React, { Component } from 'react'
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl'

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Po Han Wu</h2>
            <img src="https://icon-library.net//images/male-avatar-icon/male-avatar-icon-29.jpg" alt="avatar" style={{ height: '250px' }} />
            <p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenan convallis.To embed your selected fonts into a webpage, copy this code into the of your HTML document.
            </p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{ fontSize: '25px', fontFamily: 'Anton' }} >
                    <i className="fa fa-phone-square" aria-hidden="true" />
                    (123)5674901-302-322
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent style={{ fontSize: '25px', fontFamily: 'Anton' }} >
                    <i className="fa fa-envelope" aria-hidden="true" />
                    hankwu0930@gmail.com
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent style={{ fontSize: '25px', fontFamily: 'Anton' }} >
                    <i className="fa fa-skype" aria-hidden="true" />
                    hank7xx9
                  </ListItemContent>
                </ListItem>
              </List>
            </div>


          </Cell>
        </Grid>
      </div>
    )
  }
}


export default Contact;