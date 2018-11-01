import React from 'react'
import Card from './Card'


export default class Projects extends React.Component {

  render() {
    return (
      <section>
        <Card
          title='Frogger'
          link='https://dylanavery720.github.io/frogger'
          id='frogger'
          screenshot='../images/frogger.png'
        />
        <Card
          title='Weather Beat'
          link='https://dylanavery720.github.io/weatherly/'
          id='weather-beat'
          screenshot='../images/weather.png'
        />
        <Card
          title='Future Grooves'
          link='http://futuregrooves.herokuapp.com/'
          id='future-grooves'
          screenshot='../images/futuregrooves.png'
        />
        <Card
          title='Quasimoto (Static Comp)'
          link='https://dylanavery720.github.io/quasimoto/'
          id='quasimoto'
          screenshot='../images/quasimoto.png'
        />
        <Card
          title='Shoot The Breeze'
          link='https://shoot-the-breeze-93d19.firebaseapp.com/'
          id='shoot-the-breeze'
          screenshot='../images/breeze.png'
        />
        <Card
          title='Shanagolden Management'
          link='http://www.shanagoldenmanagement.com'
          id='shanagolden-management'
          screenshot='../images/shana.png'
        />
      </section>
    )
  }
}
