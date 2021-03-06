import React, { Fragment } from 'react'

import { Link } from 'react-router-dom'

import Axios from 'axios'

export default class CatBreedList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            catBreeds: [],
        }
    }

    componentDidMount() {
        Axios.get('https://api.thecatapi.com/v1/breeds').then((res) => {
            console.log(res)
            this.setState({
                catBreeds: res.data,
            })
        })
    }
    render() {
        return (
            <Fragment>
                A long list of cat breeds:
                <ul>
                    {this.state.catBreeds.map((catBreed) => {
                        return (
                            <li key={catBreed.id} className={catBreed.id}>
                                <Link to={`/cats/${catBreed.id}`}>
                                    {catBreed.name}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </Fragment>
        )
    }
}
