import React, { Component } from 'react';
import axios from 'axios';
import './App.css'

class App extends Component {

  state = {
    baseURL: "http://jservice.io/",
    api: "api/",
    random: "random",
    data: [],
    score: "0",
    currScore: "0",
    toggle: false
  }

  handleSubmit = e => {
    e.preventDefault()
    axios.get(`http://jservice.io/api/${this.state.random}`)
      .then(res => this.setState({data: res.data[0]}))
  }



  render() {
    return (
      <div className='outer'>

        <div className='main'>
          <h1>Welcome to Jeopardy</h1>

          <div className='points'>
            <h2>Score: <span className='first'>{this.state.score}</span></h2>
            <button onClick={() => this.setState({score: this.state.data.value})}>+</button>
            <button>-</button>
          </div>

          <form onSubmit={this.handleSubmit}>
            <button type='submit'>Get Question</button>
          </form>

          <div className='question'>
            <h4>Question: <br></br> <span className='second'>{this.state.data.question}</span></h4>
            <h4>Points: <br></br> <span className='first'>{this.state.data.value}</span></h4>
          </div>

          <div className='answer'>
            
            <button onClick={() => this.setState({toggle: !this.state.toggle})}>Show Answer</button>
            {
              this.state.toggle ? <h4>Answer: <br></br> <span className='second'>{this.state.data.answer}</span></h4> : null
            }
          </div>
        
        </div>

        <div className="extra">
          <h1>Stretch Goals</h1>
        </div>

      </div>
    );
  }
}

export default App;
