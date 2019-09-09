import React from 'react';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl'
import Main from './components/Main'
import ProjectIntro from './components/intro/ProjectIntro'
import ResumeIntro from './components/intro/ResumeIntro'
import ContactIntro from './components/intro/ContactIntro'
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
            <Main />
          </div>
        </Content>
      </Layout>
    </div >
  )
}

export default App;
