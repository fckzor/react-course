import React from 'react'

class App extends React.Component {
  state = {
    count: 0,
    status: 'stopped',
    startBtnText: 'Start',
  }

  toggleTimer() {
    this.setState({status: this.state.status === 'stopped' ? 'started' : 'stopped'})
    this.setState(
      (prevState) => ({startBtnText: prevState.status === 'started' ? 'Stop' : 'Start'}),
      () => {
        this.state.status === 'started' ? this.startTimer() : this.stopTimer()
      }
    )
  }

  startTimer() {
    this.timer = setInterval(() => {
      this.setState({count: this.state.count + 1})
    }, 1000)
  }

  stopTimer() {
    clearInterval(this.timer)
  }

  onResetCounter() {
    this.setState(
      {count: 0}, 
      () => { localStorage.setItem('timer', JSON.stringify(this.state.count)) }
    )
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
            <button onClick={() => this.toggleTimer()}>{this.state.startBtnText}</button>
            <button onClick={() => this.onResetCounter()}>Reset</button>
          </div>
        </div>
      </div>
    )
  }
}

export default App
