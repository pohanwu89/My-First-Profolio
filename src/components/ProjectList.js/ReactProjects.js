import React, { Component } from 'react'
import CardArea from './projectcards/CardArea'
import '../../App.css'
// import Card from './projectcards/Card'


class ReactProjects extends Component {
  state = {
    projects: [
      {
        title: 'Robot Friends',
        text: 'My first React app that lets users filter robots by name.',
        img: 'https://miro.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png',
        githubUrl: 'https://github.com/pohanwu89/robotfriends'
      },
      {
        title: 'Smart Brain',
        text: 'A  full stack web application that detects faces from an input image URL.',
        img: 'https://miro.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png',
        githubUrl: 'https://github.com/pohanwu89/smart-brain-react'
      },
      {
        title: 'Burger Builder',
        text: 'A web application designed using React. It allows users to sign-up and order burgers.',
        img: 'https://miro.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png',
        githubUrl: 'https://github.com/pohanwu89/Burger-Builder'
      }
    ]
  }
  render() {

    return (
      <div className="app-card-list" >

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

export default ReactProjects;