import React from "react"

class App extends React.Component {
  state = {
    email: '',
    isValidEmail: false,
    isAgreeWithTerms: false,
  }

  onChangeEmail = (e) => {
    this.setState({email: e.target.value})
  }
  onChangeAgreement = (e) => {
    this.setState({isAgreeWithTerms: e.target.checked})
  }
  validateEmail = (e) => {
    const regex = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/ig

    if (regex.test(this.state.email)) {
      e.target.classList.remove('valid-error')
      this.setState({isValidEmail: true})
    } else {
      e.target.classList.add('valid-error')
      this.setState({isValidEmail: false})
    }
  }
  onSubmit = () => {
    if (!this.state.isValidEmail) {
      alert('Please enter valid email')
    }
    else if (!this.state.isAgreeWithTerms) {
      alert('Please checked agreement conditions')
    }
    else {
      alert('Submit success!')
    }
  }

  render() {
    const { email, isAgreeWithTerms } = this.state

    return (
      <div className="container">
        <input
          type="email"
          name="email"
          placeholder="Your email"
          value={email}
          onChange={this.onChangeEmail}
          onBlur={this.validateEmail}
        />
        <br />
        <label>
          <input
            type="checkbox"
            name="isAgreeWithTerms"
            checked={isAgreeWithTerms}
            onChange={this.onChangeAgreement}
          />
          I agree with terms and conditions
        </label>
        <br />
        <button onClick={this.onSubmit}>Send</button>
      </div>
    )
  }
}

export default App
