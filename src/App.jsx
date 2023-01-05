import React from "react"

class App extends React.Component {
  state = {
    email: '',
    isAgreeWithTerms: false,
  }
  onChangeEmail = (e) => {
    this.setState({email: e.target.value})
  }
  onChangeAgreement = (e) => {
    this.setState({isAgreeWithTerms: e.target.checked})
  }
  validateEmail = () => {
    const regex = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/ig
    return regex.test(this.state.email) 
  }
  onSubmit = () => {
    const isValidEmail = this.validateEmail()

    if (!isValidEmail) {
      alert('Please enter valid email')
      return
    }
    if (!this.state.isAgreeWithTerms) {
      alert('Please checked agreement conditions')
      return
    }
    
    this.setState({email: '', isAgreeWithTerms: false})
    alert('Submit success!')
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
