import React from 'react'
import Card from './Card'


export default class Projects extends React.Component {

  render() {
    return (
      <section>
        <Card
          title='Shanagolden Management'
          link='http://www.shanagoldenmanagement.com'
          id='shanagolden-management'
          screenshot='../images/shana.png'
        />
        <Card
          title='Health and Happiness'
          link='http://www.healthandhappinessllc.org'
          id='health-and-happiness'
          screenshot='../images/health.png'
        />
        <Card
          title='Frogger'
          link='https://dylanavery720.github.io/frogger'
          id='frogger'
          screenshot='../images/frogger.png'
        />
        <Card
          title='Weather Beat (Repo)'
          link='http://github.com/dylanavery720/weatherly'
          id='weather-beat'
          screenshot='../images/weather.png'
        />
        <Card
          title='Shoot The Breeze'
          link='https://shoot-the-breeze-93d19.firebaseapp.com/'
          id='shoot-the-breeze'
          screenshot='../images/breeze.png'
        />
        <Card
          title='Optimal Aging Coach'
          link='http://optimalagingcoach.com/'
          id='optimal-aging-coach'
          screenshot='../images/oac.png'
        />
        <Card
          title='Number Guesser (Repo)'
          link='http://github.com/dylanavery720/number-guesser-react'
          id='number-guesser'
          screenshot='../images/number-guesser-react.png'
        />
        <Card
          title='Quasimoto (Static Comp)'
          link='https://dylanavery720.github.io/quasimoto/'
          id='quasimoto'
          screenshot='../images/quasimoto.png'
        />
      </section>
    )
  }
}
