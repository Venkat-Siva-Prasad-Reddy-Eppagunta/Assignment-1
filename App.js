import logo from './images/logo.svg';
import image1 from './images/image1.jpg';
import image2 from './images/image2.jpg';
import image3 from './images/image3.jpg';
import React from 'react';
import './App.css';


function App() {
  return (
    <div className="App">
      <header>
        <h1>FED React: Assignment 1: State, Event Handling</h1>
      </header>
      <hr></hr>
      <Assignment1> </Assignment1>
    </div>
  );
}

class Assignment1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { images : [image1, image2, image3, logo], index : 0 };

    this.previous = this.previous.bind(this);
    this.next = this.next.bind(this);
  }
  previous () {
    const {length} = this.state.images;
    const index = this.state.index;
    const newindex = index === 0 ? length - 1 : index - 1;
    this.setState({index : newindex});
  }
  next () {
    const {length} = this.state.images;
    const index = this.state.index;
    const newindex = index === length -1 ? 0 : index + 1;
    this.setState({index : newindex});
  }
  render() {
    return (
      
    <div>
      <button onClick =  {this.previous}> Previous </button>
      <img src = {this.state.images[this.state.index]} alt ="" width="400" height ="300"></img>
      <button onClick =  {this.next}> Next </button>
      <h4> {this.state.index} </h4>
    </div>
    )
  }
}
export default App;

