import React from 'react';
import '.././App.css';
import DogBreedList from '.././components/DogBreedList';

function Dogs() {
  return (
    <div className="Dogs">
        <h2>Dogs Page</h2>
        <p>Woof, Woof!!</p>
        <DogBreedList />
   </div>
  );
}

export default Dogs;
