import React from "react"

class App extends React.Component {

  cardRef = React.createRef()
  emailRef = React.createRef()

  onSubmit = (e) => {
    e.preventDefault()

    if (this.cardRef.current.value.length < 16) {
      alert('invalid card value')
      return
    }

    // send

    // clear
    this.cardRef.current.value = ''
    this.emailRef.current.value = ''
  }

  render() {
    return (
      <form className="container" onSubmit={this.onSubmit}>
        <input
          ref={this.cardRef}
          type="number"
          name="card"
          placeholder="Your card"
        />
        <br />
        <input
          ref={this.emailRef}
          type="email"
          name="email"
          placeholder="Your email"
        />
        <br />
        <button>send form</button>
      </form>
    )
  }
}

export default App
