import React from 'react'
import Computer from "../ws_computation/computer"
import { Image, Container } from 'semantic-ui-react'
import WebsiteBody from '../ws_computation/body'



const ImageExampleImage = () => (
  <Image src='./assets/images/astolfo.jpg' size="tiny" />
)

function WebsiteMenu() {
  return (
    <Container>
      <div class="ui sidebar inverted vertical menu">
        <a class="item">
          what
        </a>
        <a class="item">
          2
        </a>
        <a class="item">
          3
        </a>
      </div>
      <div class="pusher">
        hello there bb
      </div>
    </Container>
  )
}


function WebsiteTop() {
  return (
  <Container>
    <div class="ui text container">
      <h1 class="ui inverted header">
        Welcome to Autumn's Playground
      </h1>
      <h2>a place to explore and have fun O.O</h2>
    </div>
  </Container>
  );
}

function WebsiteLogo() {
  return (
  <Container>
    <div class="ui center alligned padded grid">
      <div class="columns">
      {ImageExampleImage()}       
      </div>
      <div class="columns">
        hello!
      </div>
    </div>
  </Container>
  
  );
}

function WebsiteMetaStructure() {
  return (
      <Container>
        <div>
          {WebsiteTop()}
          {WebsiteLogo()}
          {WebsiteMenu()}
        </div>
        <body>
          <Computer />
        </body>
      </Container>
  );
}



export default WebsiteMetaStructure