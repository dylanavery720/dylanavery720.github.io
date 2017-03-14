import React, { Component } from 'react';
import { render } from 'react-dom';
import Nav from './Nav'
import Footer from './Footer'
import Projects from './Projects'
import About from './About'

export default class Main extends React.Component {

  constructor() {
    super()
    this.state = {
      about: false,
      projects: false,
    }
    this.showAbout = this.showAbout.bind(this)
    this.showProj = this.showProj.bind(this)
  }

  showAbout() {
    this.setState({ about: true, projects: false })
  }

  showProj() {
    this.setState({ projects: true, about: false })
  }

  render() {
    return (
    <section id="landing">
      <h1>Dylan P. Avery</h1>
      <h4>"Web Developer"</h4>
        <Nav text='About' handleClick={this.showAbout}/>
        <Nav text='Projects' handleClick={this.showProj}/>
      { this.state.about && <About /> }
      { this.state.projects && <Projects /> }
        <Footer />
    </section>
  )
  }
}

render(<Main />, document.getElementById('application'))
