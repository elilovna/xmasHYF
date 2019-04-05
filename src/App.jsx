import React, { Component } from 'react'
import InputName from "./components/inputName"
import Greeting from "./components/greeting"
import Randomazer from './components/randomizer'

class App extends Component {
  state = {
    name: null,
    page: 'name'
  }

  presentCurrentPage() {
    switch (this.state.page) {
      case 'name':
        return <InputName setName={name => {
          this.setState({
            name: name,
            page: "greeting"
          })
        }} />
      case 'greeting':
        return <Greeting name={this.state.name} onClick={e => {
          this.setState({ page: 'randomizer' })
        }} />
      case 'randomizer':
        return <Randomazer name={this.state.name}/>
      default:
        throw new Error("Unexpected page state")
    }
  }

  render() {
    return (
      <div>
        
        {this.presentCurrentPage()}
      </div>
    )
  }
}

export default App
