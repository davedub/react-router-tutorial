import React from 'react';
import '.././App.css';
import CatBreedList from '.././components/CatBreedList';

function Cats() {
  return (
    <div className="Cats">
        <h2>Cats Page</h2>
        <p>Meow, Meow!!</p>
        <CatBreedList />
    </div>
  );
}

export default Cats;