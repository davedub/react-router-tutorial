import React, { Fragment } from 'react'

import { Link } from 'react-router-dom'

import Axios from 'axios'

export default class DogBreedList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dogBreeds: [],
        }
    }

    componentDidMount() {
        Axios.get('https://api.thedogapi.com/v1/breeds').then((res) => {
            console.log(res)
            this.setState({
                dogBreeds: res.data,
            })
        })
    }
    render() {
        return (
            <Fragment>
                A list of dog breeds:
                <ul>
                    {this.state.dogBreeds.map((dogBreed) => {
                        return (
                            <li key={dogBreed.id} className={dogBreed.id}>
                                <Link to={`/dogs/${dogBreed.id}`}>
                                    {dogBreed.name}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </Fragment>
        )
    }
}
