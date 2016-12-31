import React from 'react'


export default class Card extends React.Component {

  render() {
    return (
      <article className='cards'>
        <h2 className="underlines">{this.props.title} (gitHub)</h2>
        <a href={'http://github.com/' + this.props.link} target="_blank">
        <img className='screens' id={this.props.id} src={this.props.screenshot} alt='github cat'/></a>
        <p>{this.props.description}</p>
      </article>
)
  }
}
