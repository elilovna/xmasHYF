import React, { Component } from 'react'
import RandomItem from './randomItem'
import './randomaizer.css'

class Randomazer extends Component {
    state = {
        movies: null,
        songs: null,
        dishes: null,
        presents: null,
        costumes: null,
        drinks: null,
    }

    componentWillMount() {
        const rootUrl = 'https://xmas-back.herokuapp.com/'
        const endPoints = ['movies', 'songs', 'dishes', 'drinks', 'costumes', 'presents']

        endPoints.forEach(endPoint => {
            fetch(`${rootUrl}${endPoint}`)
                .then(res => res.json())
                .then(data => {
                    this.setState({ [endPoint]: data })
                    console.log(this.state)
                })
                .catch((error) => {
                    console.log(error)
                })
        })
    }

    render() {
        const { movies, songs, dishes, presents, costumes, drinks } = this.state
        const { name } = this.props
        if (!movies || !songs || !dishes || !presents || !costumes || !drinks) {
            return null
        }
        return <div className='randomContainer'>
            <div>{name} has an awesome plan for this Christmas.
            At first, {name} will prepare <RandomItem array={dishes} title="dish" />,
            while listening to <RandomItem array={songs} title="song" />.{name} will wear
            <RandomItem array={costumes} title="costumes" /> costume.
            Invited friends will joing late evening to watch
            <RandomItem array={movies} title="movie" /> and drink
            <RandomItem array={drinks} title="drink" /> .
            They will tell warm stories and laugh a lot.
            At the midnight, {name} will receive a <RandomItem array={presents} title="presents" />
            for being a nice person </div>
        </div>
    }
}

export default Randomazer;


