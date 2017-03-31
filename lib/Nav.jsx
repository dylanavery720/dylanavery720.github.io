import React from 'react'


export default class Nav extends React.Component {

  render() {
    return (
      <nav className='navlink'>
        <h3 onClick={this.props.handleClick}>{this.props.text}</h3>
      </nav>
)
  }
}
