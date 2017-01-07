import React from 'react'
import Card from './Card'


export default class Projects extends React.Component {

  render() {
    return (
      <section>
        <Card
        title='Shoot The Breeze'
        link='dylanavery720/shoot-the-breeze'
        id='shoot-the-breeze'
        screenshot='../images/breeze.png'
        />
        <Card
        title='Weather Beat'
        link='dylanavery720/weatherly'
        id='weather-beat'
        screenshot='../images/weather.png'
        />
        {/* <Card
        title='Optimal Aging Coach'
        link='http://www.optimalagingcoach.com'
        id='optimal-aging-coach'
        screenshot='../images/frogger.png'
        />
        <Card
        title='Number Guesser'
        link='dylanavery720/number-guesser-react'
        id='number-guesser'
        screenshot='../images/2doBox.png'
        /> */}
        <Card
        title='Frogger'
        link='dylanavery720/frogger'
        id='frogger'
        screenshot='../images/frogger.png'
        />
        <Card
        title='2DoBox'
        link='dylanavery720/2DoBoxPivot'
        id='2dobox'
        screenshot='../images/2doBox.png'
        />
      </section>
)
  }
}
