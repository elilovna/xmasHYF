import React, { Component } from 'react'
import './randomItem.css'

class RandomItem extends Component {
   constructor(props) {
      super(props)
      this.state = {
         randomMovie: this.random()
      }
      this.handleClick = this.handleClick.bind(this)
   }

   random() {
      const el = this.props.array[Math.floor(Math.random() * this.props.array.length)];
      return el
   }

   handleClick() {
      this.setState({ randomMovie: this.random() })
   }

   render() {
      if (!this.state.randomMovie.link) {
         return (
            <>
               <button className='randomBtn' onClick={this.handleClick}>{this.state.randomMovie.name}</button>
            </>
         );
      } else {
         return (
            <>
               <button className='randomBtn' onClick={this.handleClick}>{this.state.randomMovie.name} </button>
               <a className='link' href={this.state.randomMovie.link} target="_blank" rel="noopener noreferrer">from this link</a>
            </>
         )
      }
   }
}

export default RandomItem;
