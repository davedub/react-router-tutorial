import React from "react";
import Axios from "axios";

export default class CatBreedList extends React.Component {
    state = {
        catBreeds: []
    }

componentDidMount() {
    Axios.get('https://api.thecatapi.com/v1/breeds')
    .then(res => {
        console.log(res);
        this.setState({ catBreeds: res.data });
    })
}
render() {
    return (
        <ul>{this.state.catBreeds.map(catBreed => 
        <div>
        <li className="catBreedName" key={catBreed.name}>{catBreed.name} cats are ... {catBreed.temperament}</li>
        <hr/>
        </div>)}
    </ul>
    )}
}
