import React from 'react'


export default class Footer extends React.Component {

render() {
  return(
    <footer id='contact'>
      <a href='https://www.linkedin.com/in/dylan-avery-17336055'>
        <img src='images/linkedin.png' alt='LinkedIn Logo' id='linkedin'/>
      </a>
      <a href='https://twitter.com/dylanavery720' className='twitter-follow-button' data-show-count='false'>
        <img src='images/black_twitter.png' alt='Twitter.com/dylanavery720' id='tweet'/>
      </a>
      <a href="https://www.instagram.com/coloradodylan/" target='_blank'>
        <img src="http://freevector.co/wp-content/uploads/2013/10/87390-instagram-logo-200x200.png" alt="Instagram Logo" id='insta'/>
      </a>
      <p className='concert'>&copy; Copyright 2016 Dylan Avery</p>
      <img src='../images/hipsterlogogenerator.png'/>
    </footer>
)
}
}
