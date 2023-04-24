// Write your code here
import './index.css'
import {Component} from 'react'

class ShowHide extends Component {
  state = {firstName: null, lastName: null}

  functionJoe = () => {
    const {firstName} = this.state

    if (firstName === null) {
      return this.setState({firstName: 'Joe'})
    }
    return this.setState({firstName: null})
  }

  functionJonas = () => {
    const {lastName} = this.state

    if (lastName === null) {
      return this.setState({lastName: 'Jonas'})
    }
    return this.setState({lastName: null})
  }

  render() {
    const {firstName, lastName} = this.state

    const firstNamedIn = () => {
      if (firstName === null) {
        return false
      }
      return true
    }

    const lastNamedIn = () => {
      if (lastName === null) {
        return false
      }
      return true
    }

    return (
      <div className="bg-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="button-items">
          <button type="button" className="button" onClick={this.functionJoe}>
            Show/Hide Firstname
          </button>
          <button type="button" className="button" onClick={this.functionJonas}>
            Show/Hide Lastname
          </button>
        </div>
        <div className="name-items">
          {firstNamedIn() ? (
            <p className="name">{firstName}</p>
          ) : (
            <p className="naming">{firstName}</p>
          )}
          {lastNamedIn() ? (
            <p className="name">{lastName}</p>
          ) : (
            <p className="naming">{lastName}</p>
          )}
        </div>
      </div>
    )
  }
}

export default ShowHide
