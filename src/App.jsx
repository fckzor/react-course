import React from 'react'

class App extends React.Component {
  state = {
    count: 0,
    isCounting: false,
  }
  toggleTimer() {
    this.setState({isCounting: !this.state.isCounting})

    !this.state.isCounting 
      ? this.startTimer()
      : this.stopTimer()
  }
  startTimer() {
    this.timerId = setInterval(() => {
      this.setState({count: this.state.count + 1})
    }, 1000)
  }
  stopTimer() {
    clearInterval(this.timerId)
  }
  onResetCounter() {
    this.stopTimer()
    this.setState({isCounting: false, count: 0})
    localStorage.setItem('timer', JSON.stringify(0))
  }
  componentDidMount() {
    const timer = JSON.parse(localStorage.getItem('timer'))
    this.setState({count: timer ? timer : 0})
  }
  componentDidUpdate() {
    localStorage.setItem('timer', JSON.stringify(this.state.count))
  }
  componentWillUnmount() {
    this.stopTimer()
  }
  render() {
    return (
      <div className="container">
        <h1>Timer</h1>
        <div>
          <div className="counter-view">{this.state.count}</div>
          <div>
            <button onClick={() => this.toggleTimer()}>{this.state.isCounting ? 'Stop' : 'Start'}</button>
            <button onClick={() => this.onResetCounter()}>Reset</button>
          </div>
        </div>
      </div>
    )
  }
}

export default App
