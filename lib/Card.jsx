import React from 'react'


export default class Card extends React.Component {

  render() {
    return (
      <article className='cards'>
        <h4 className="underlines">{this.props.title}</h4>
        <a href={this.props.link} target='_blank'>
        <img className='screens'
        id={this.props.id}
        src={this.props.screenshot}
        alt={this.props.id}/></a>
        <p>{this.props.description}</p>
      </article>
)
  }
}
