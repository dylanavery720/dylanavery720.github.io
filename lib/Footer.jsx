import React from 'react';
import Social from './Social';

export default class Footer extends React.Component {
  render() {
    return (
      <footer id="contact">
        <Social
          link="https://www.linkedin.com/in/dylan-avery-17336055"
          icon="images/linkedin.png"
          alt="LinkedIn Logo"
        />
        <Social
          link="https://www.instagram.com/coloradodylan/"
          icon="https://freevector.co/wp-content/uploads/2013/10/87390-instagram-logo-200x200.png"
          alt="Instagram Logo"
        />
        <Social
          link="https://medium.com/@dylanavery720"
          icon="images/medium.png"
          alt="Medium Logo"
        />
        <Social
          link="https://twitter.com/dylanavery303"
          icon="images/black_twitter.png"
          alt="Twitter Logo"
        />
        <p className="concert">&copy; Copyright 2018 Dylan Avery</p>
      </footer>
    );
  }
}
