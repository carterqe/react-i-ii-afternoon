import React from 'react';
import './App.css';
import data from './data'
import {Card, Header, Controls} from './components'

export default class App extends React.Component {
  constructor(props) {
    super (props)
    this.state = {
      index: 0
    }
  }

  increment() {
    if (this.state.index < 24 && this.state.index >= 0) {
      this.setState({
        index: this.state.index + 1
      })
    }
  }

  decrement() {
    if (this.state.index > 0){
      this.setState({
        index: this.state.index - 1
      })
    }
  }


render() {
  return (
    <div className="app">
      <Header />
      <div className="app-body">
        <Card person={data[this.state.index]} index={this.state.index} length={data.length}/>
        <Controls handleIncrement={() => this.increment()} handleDecrement={() => this.decrement()} />
      </div>
    </div>
    );
  }
}


