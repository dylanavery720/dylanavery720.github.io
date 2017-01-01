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
    }
    this.shower = this.shower.bind(this)
  }

  shower() {
    console.log('clicked')
    this.setState({ about: true })
  }

  render() {
    return (
    <section id="landing">
      <h1>Dylan P. Avery</h1>
        <Nav text='About' handleClick={this.shower}/>
      { this.state.about && <About /> }
        <Projects />
        <Footer />
    </section>
  )
  }
}

render(<Main />, document.getElementById('application'))
