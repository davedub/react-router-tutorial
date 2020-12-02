import React, { Component } from 'react';
import axios from 'axios';


const catInstance = axios.create({
  baseURL: 'https://api.thecatapi.com/v1',
  timeout: 1000,
  headers: {'X-Custom-Header': 'catbar'}
})


catInstance.defaults.headers.common['x-api-key'] = 'c6a198ac-b16a-42af-a129-29a17bfe0424';

class CatDetails extends Component {

  async getBreeds() {
      const res = await catInstance('/breeds');
      return res.data;
  }
  async getCatsImagesByBreed(breed_id, amount) {
      const res = await catInstance('/images/search?breed_ids='+breed_id + "&limit="+ amount);
      
      console.table(res.data)
      return res.data;
  }

  async loadBreedImages() {
    console.log('Load Breed Images:', this.state.selected_breed)

    let breed_images = await this.getCatsImagesByBreed(this.state.selected_breed, 5)

    this.setState({ images: breed_images });
  }

  constructor(...args) {

      super(...args);
      this.state = {
        images: [],
        breeds: [], 
        selected_breed: 0
      };

    this.onBreedSelectChange = this.onBreedSelectChange.bind(this);
  }
  async onBreedSelectChange(e) {
    console.log("Breed Selected. ID:",e.target.value)
    await this.setState({selected_breed:e.target.value});
    await this.loadBreedImages();
  }
  componentDidMount() {
      if (this.state.breeds.length===0) {
          (async () => {
              try {
                  this.setState({breeds: await this.getBreeds()});
              } catch (e) {
                  //...handle the error...
                  console.error(e)
              }
          })();
      }
  }
  render() {
      return (
        <div>

      <select value={this.state.selected_breed} 
              onChange={this.onBreedSelectChange}>
        {this.state.breeds.map((breed) => <option key={breed.id} value={breed.id}>{breed.name}</option>)}
      </select>

      <div>
      <p>Choose the breed to see pictures</p>
     {this.state.images.map((image) => <img className="cat-image" alt="" src={image.url} height="50%" width="50%"></img>)}
     </div>

     </div>
      );
  }
}

export default CatDetails;