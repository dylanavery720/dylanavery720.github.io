import React from 'react'


export default class Nav extends React.Component {

  render() {
    return (
    <header>
      <nav className='navlink'>
        <h2 onClick={this.props.handleClick}>{this.props.text}</h2>
      </nav>
    </header>
)
  }
}
