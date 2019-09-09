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
              Self-taught JavaScript developer, passionate about the web development and looking to join a team of like-minded people in an environment that promotes teamwork and fosters personal and professional growth.
            </p>
          </Cell>
          <Cell col={6} className="contact-list">
            <h2>Contact Me</h2>
            <hr />
            <List>
              <ListItem>
                <ListItemContent icon="phone">+81 07033085678</ListItemContent>
              </ListItem>
              <ListItem>
                <ListItemContent icon="mail">hankwu0930@gmail.com</ListItemContent>
              </ListItem>
              <ListItem>
                <ListItemContent icon="message">hank7xx9(skype)</ListItemContent>
              </ListItem>
            </List>


          </Cell>
        </Grid>
      </div>
    )
  }
}


export default Contact;