import React from 'react';
import Bio from './Bio';
import Skills from './Skills'

export default class About extends React.Component {

  render() {
    return (
    <section id="about">
    <Bio />
    <Skills />
    {/* <Contact /> */}
    </section>
  )
  }
}
