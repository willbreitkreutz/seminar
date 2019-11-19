import React, { useState, useEffect } from 'react';

const App = () => {
  const [ cnt, setCnt ] = useState(0);
  const [ width, setWidth ] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className="App">
      <h1>Hello World from App2</h1>
      <p>{ cnt }</p>
      <button onClick={ () => { setCnt(cnt + 1) } }>Add 1</button>
      <button onClick={ () => { setCnt(cnt - 1) } }>Minus 1</button>
      <hr />
      <p>{ `The screen width is ${width}` }</p>
    </div>
  );
}

class AppTwo extends React.Component {
  state = {
    cnt: 0,
    width: window.innerWidth
  }

  increment = () => {
    this.setState({
      cnt: this.state.cnt + 1
    })
  }

  decrement = () => {
    this.setState({
      cnt: this.state.cnt - 1
    })
  }

  handleResize = () => {
    this.setState({
      width: window.innerWidth
    })
  }

  componentDidMount(){
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount(){
    window.removeEventListener('resize', this.handleResize);
  }

  render(){
    return (
      <div className="App">
        <h1>Hello World from App2</h1>
        <p>{ this.state.cnt }</p>
        <button onClick={ this.increment }>Add 1</button>
        <button onClick={ this.decrement }>Minus 1</button>
        <hr />
        <p>{ `The screen width is ${this.state.width}` }</p>
      </div>
    )
  }
}

export default App;
