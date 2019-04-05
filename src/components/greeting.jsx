import React, { Component } from 'react'
import './greeting.css'

class Greeting extends Component {

    handleClick() {
        this.props.onClick()
    }

    render() {
        return (
            <div className='mainDiv'>
                <h2>
                    <span className='txt'>Hello {this.props.name}:)  Let's make CHRISTMAS planning for you!</span>
                </h2>
                <button className='btnLetsGo' onClick={() => this.handleClick()}>LET'S GO</button>
            </div>
        );
    }
}



export default Greeting;