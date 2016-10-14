import React, { Component } from 'react'

export default class Home extends Component {
  render(){
    return(
      <div>
        <h3 style={{textAlign:'center', backgroundColor:'lightblue'}}>Ese's React-Redux starter kit w/ React router</h3>
        <h1 style={{textAlign:'center'}}> You are at the <span style={{backgroundColor:'pink',padding:'5px'}}>Home Page</span></h1>
        <p style={{padding:'0px 5px',textAlign:'center'}}>Welcome to the most simple, most basic React-Redux starter. The only one you'll ever need wooo!!</p>
      </div>
    )
  }
}
