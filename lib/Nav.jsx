import React from 'react'


export default class Nav extends React.Component {

  render() {
    return (
    <header>
      <h1>Dylan P. Avery</h1>
      <h2></h2>
      <nav>
        <a href="#past" className="navs">Past</a>
        <a href="#passion" className="navs">Passion</a>
        <a href="#future" className="navs">Future</a>
        <a href="project.html" className="navs">Projects</a>
      </nav>
    </header>
)
  }
}
