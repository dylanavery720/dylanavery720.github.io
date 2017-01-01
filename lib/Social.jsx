import React from 'react'


export default class Social extends React.Component {

  render() {
    return (
      <a href={this.props.link}>
        <img src={this.props.icon} alt={this.props.alt} className='social'/>
      </a>
)
  }
}
