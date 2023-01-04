import React from 'react'

class App extends React.Component {
  state = {
    count: 0,
    counterStep: 1,
  }

  changeCounter(action) {
    this.setState({
      count: action === 'increment' 
        ? this.state.count + this.state.counterStep
        : action === 'decrement' 
          ? this.state.count - this.state.counterStep
          : this.state.count
    })
  }

  changeCounterStep(event) {
    const target = Number(event.target.value)
    this.setState({counterStep: target > 1 ? target : 1})
  }

  render() {
    return (
      <div className="container">
        <h1>Hello! Change counter!</h1>
        <div className="counter-wrapper">
          <label>
            <span>Set counter step</span>
            <input 
              type="number"
              value={this.state.counterStep}
              onChange={(e) => this.changeCounterStep(e)}
            />
          </label>
          <div>
            <button onClick={() => this.changeCounter('decrement')}>-</button>
            <span className="counter-view">{this.state.count}</span>
            <button onClick={() => this.changeCounter('increment')}>+</button>
          </div>
        </div>
      </div>
    )
  }
}

export default App
