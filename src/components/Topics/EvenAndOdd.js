import React, { Component } from 'react';

export default class EvenAndOdd extends Component {
//This is a constructor
//   |
//   V
  constructor() {
// allows the function to recieve its parent's variables through 'this'?
//   |
//   V
    super();
//This generate the default state
//   |
//   V
    this.state = {
      evenArray: [],
      oddArray: [],
      userInput: ''
    }

    this.handleChange = this.handleChange.bind(this)
  }
//This is method on the class to change the state base on the user input
//   |
//   V
  handleChange(val) {
    this.setState({ userInput: val });
  }
//this is a method on the class that  separate the user input and
// sort them base on if they are even or odd
//   |
//   V
  assignEvenAndOdds(userInput) {
    let arr = userInput.split(',');
    let evens = [];
    let odds = [];

    for ( let i = 0; i < arr.length; i++ ) {
      if ( arr[i] % 2 === 0 ) {
        evens.push( parseInt(arr[i], 10) );
      } else {
        odds.push( parseInt(arr[i], 10) );
      }
    }
//This actualice the state base on the user input's sort result
//   |
//   V
    this.setState({ evenArray: evens, oddArray: odds });
  }
//render du-oh
//   |
//   V
  render() {
    return (
      <div className="puzzleBox evenAndOddPB">
        <h4> Evens and Odds </h4>
        <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
        <button className="confirmationButton" onClick={ () =>  this.assignEvenAndOdds(this.state.userInput) }> Split </button>
        <span className="resultsBox"> Evens: { JSON.stringify(this.state.evenArray) } </span>
        <span className="resultsBox"> Odds: { JSON.stringify(this.state.oddArray) } </span>
      </div>
    )
  }
}