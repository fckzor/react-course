import React from "react"

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      card: '',
      email: '',
    }
    this.cardRef = React.createRef()
    this.emailRef = React.createRef()
  }
  
  componentDidMount() {
    this.cardRef.current.focus()
  }
  onChangeCard = (e) => {
    this.setState(() => ({card: e.target.value}), () => {
      if (this.state.card.length === 16) {
        this.emailRef.current.focus()
      }
    })
  }
  onChangeEmail = (e) => {
    this.setState({email: e.target.value})
  }

  render() {
    const { card, email } = this.state

    return (
      <div className="container">
        <input
          ref={this.cardRef}
          type="number"
          name="card"
          placeholder="Your card"
          value={card}
          onChange={this.onChangeCard}
        />
        <br />
        <input
          ref={this.emailRef}
          type="email"
          name="email"
          placeholder="Your email"
          value={email}
          onChange={this.onChangeEmail}
        />
      </div>
    )
  }
}

export default App
