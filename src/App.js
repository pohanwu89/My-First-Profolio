import React from 'react';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl'
import Main from './components/Main'
import LandingPage from './components/LandingPage'
import AboutMe from './components/AboutMe'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Projects from './components/Projects'
import { Switch, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './App.css'


function App() {
  return (
    <div className="demo-big-content" >
      <Layout>
        <Header className="header-color" title="Profolio" scroll>
          <Navigation>
            <Link to="/">Home</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
          </Navigation>
        </Header>
        <Drawer title="Profolio">
          <Navigation>
            <Link to="/">Home</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
          </Navigation>
        </Drawer>
        <Content>
          <div className="page-content">
            <Switch>
              <Route path="/aboutme" component={AboutMe} />
              <Route path="/contact" component={Contact} />
              <Route path="/projects" component={Projects} />
              <Route path="/resume" component={Resume} />
              <Route path="/" exact component={LandingPage} />
            </Switch>
          </div>
        </Content>
      </Layout>
    </div >
  )
}

export default App;
