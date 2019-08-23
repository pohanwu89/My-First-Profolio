import React, { Component } from 'react'
import CardArea from './projectcards/CardArea'
import '../../App.css'
// import Card from './projectcards/Card'


class ReactProjects extends Component {
  state = {
    projects: [
      {
        title: 'a',
        text: '1234',
        img: 'https://miro.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png',
        githubUrl: 'http:google.com'
      },
      {
        title: 'b',
        text: 'b1234',
        img: 'https://miro.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png',
        githubUrl: 'http:google.com'
      },
      {
        title: 'c',
        text: 'c1234',
        img: 'https://miro.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png',
        githubUrl: 'http:google.com'
      }
    ]
  }
  render() {
    return (
      <div>
        <div className="projects-grid">
          <CardArea
            project={this.state.projects[0]} />

          <CardArea
            project={this.state.projects[1]} />

          <CardArea
            project={this.state.projects[2]} />
        </div>
      </div>
    )
  }

}

export default ReactProjects;