import React, { Component } from 'react'
import { Tabs, Tab, Grid, Cell } from 'react-mdl'
import ReactProjects from './ProjectList.js/ReactProjects'
import ExpressJsProjects from './ProjectList.js/ExpressJsProjects'

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
        <ExpressJsProjects />
      )
    }

  }


  render() {
    return (
      <div className="category-abs">
        <Tabs
          className="sticky"
          activeTab={this.state.activeTab}
          onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>React/Redux</Tab>
          <Tab>ExpressJS</Tab>
        </Tabs>
        {/* <div className="project-intro"style={{ padding: '100px', textAlign: 'center', backgroundColor:'gray',marginBottom:'30px', marginTop:'45px'}}>
          Project Intro
        </div> */}

        <div>

          <div className="content"> {this.toggleCategories()}</div>

        </div>



      </div>
    )
  }
}
export default Projects;

