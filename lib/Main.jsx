import React, { Component } from 'react';
import { render } from 'react-dom';
import Nav from './Nav'
import Footer from './Footer'
import Projects from './Projects'

export default class Main extends React.Component {

  render() {
    return (
    <section id="landing">
      <Nav />
      <Projects />
      <Footer />
    </section>
  )
  }
}

render(<Main />, document.getElementById('application'))
