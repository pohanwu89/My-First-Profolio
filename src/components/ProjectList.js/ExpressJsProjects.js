import React, { Component } from 'react'
import CardArea from './projectcards/CardArea'
import '../../App.css'
// import Card from './projectcards/Card'


class ExpressJsProjects extends Component {
  state = {
    projects: [
      {
        title: 'Smart Brain Serverside',
        text: 'Used Express to write RESTful api for Smart Brain project',
        img: 'https://miro.medium.com/max/1200/1*alZcSIb0lcN7gQIx2tJ_tg.png',
        githubUrl: 'https://github.com/pohanwu89/smart-brain-api'
      }
    ]
  }
  render() {

    return (
      <div className="app-card-list">

        {this.state.projects.map((project) => {
          return (
            <div className="card-container">
              <CardArea
                project={project}
                url={project.img}
                github={project.githubUrl} />
            </div>

          )
        })}

      </div >
    )
  }

}

export default ExpressJsProjects;