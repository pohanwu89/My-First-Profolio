import React from 'react'
import LandingPage from './LandingPage'
import AboutMe from './AboutMe'
import Resume from './Resume'
import Contact from './Contact'
import Projects from './Projects'
import { Switch, Route } from 'react-router-dom'

const Main = () => {
  return (
    <Switch>
      <Route path="/aboutme" component={AboutMe} />
      <Route path="/contact" component={Contact} />
      <Route path="/projects" component={Projects} />
      <Route path="/resume" component={Resume} />
      <Route path="/" exact component={LandingPage} />
    </Switch>
  )

}

export default Main;