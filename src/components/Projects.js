import React, { Component } from 'react'
import { Tabs, Tab, Grid, Cell } from 'react-mdl'
import ReactProjects from './ProjectList.js/ReactProjects'
import NodeJSProjects from './ProjectList.js/NodeJSProjects'
import ReduxProjects from './ProjectList.js/ReduxProjects'
import PostgreSQLProjects from './ProjectList.js/PostgreSQLProjects'
import '../App.css';



class Projects extends Component {
  state = {
    activeTab: 0
  }
  toggleCategories = () => {
    if (this.state.activeTab === 0) {
      return (
        <ReactProjects />
      )
    } else if (this.state.activeTab === 1) {
      return (
        <div>This is Redux</div>
      )
    } else if (this.state.activeTab === 2) {
      return (
        <div>This is NodeJS</div>
      )
    } else if (this.state.activeTab === 3) {
      return (
        <div>This is PostgreSQL</div>
      )
    }
  }

  render() {
    return (
      <div className="category-abs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>React</Tab>
          <Tab>Redux</Tab>
          <Tab>NodeJS</Tab>
          <Tab>PostgreSQL</Tab>
        </Tabs>
        <div>
          <Grid>
            <Cell col={12}>
              <div className="content"> {this.toggleCategories()}</div>
            </Cell>
          </Grid>
        </div>



      </div>
    )
  }
}

export default Projects;



{/* <Card
            shadow={5}
            style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://miro.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png) center/cover' }}>React Project #1</CardTitle>
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus condimentum lorem sit amet massa dignissim, sed scelerisque eros volutpat. Nam non cursus justo. Fusce congue dolor in tellus hendrerit.
          </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          <Card
            shadow={5}
            style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://miro.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png) center/cover' }}>React Project #1</CardTitle>
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus condimentum lorem sit amet massa dignissim, sed scelerisque eros volutpat. Nam non cursus justo. Fusce congue dolor in tellus hendrerit.
          </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card> */}