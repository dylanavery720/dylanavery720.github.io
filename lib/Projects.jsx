import React from 'react'
import Card from './Card'


export default class Projects extends React.Component {

  render() {
    return (
      <section class='cards'>
        <Card
        title='Frogger'
        link='jksmall0631/frogger'
        id='frogger'
        screenshot='../images/frogger.png'
        />
        <Card
        title='2DoBox'
        link='dylanavery720/2DoBoxPivot'
        id='dobox'
        screenshot='../images/2dobox.png'
        />
      </section>
)
  }
}
