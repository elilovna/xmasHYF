import React, { Component } from 'react'
import './inputName.css'

class InputName extends Component {
    state = {
        value: ''
    }

    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleClick = (e) => {
        this.props.setName(this.state.value.toUpperCase())
    }

    handleChange = (e) => {
        this.setState({ value: e.target.value })
    }

    submitHandler = (e) => {
        e.preventDefault();
    }

    render() {
        return (
            <div className='container' >
                <input className='userInput' placeholder="Name" type="text" value={this.state.value} onChange={this.handleChange} />
                <button className="add-btn" onClick={this.handleClick}>Add</button>
            </div>
        );
    }
}

export default InputName;