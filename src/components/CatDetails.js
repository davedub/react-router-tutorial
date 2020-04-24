import React, { useState, useEffect } from 'react';

import axios from 'axios';

function CatDetails() {
  const [data, setData] = useState({ catData: [] });
  useEffect(() => {
    const catData = async () => axios(
      'https://api.thecatapi.com/v1/breeds/',
    );
    const data = catData(setData);
    console.log(data);
  }, [])
  return (
    <ul>
      {data.catData.map(item => (
        <li key={item.name}>
          {item.name}
        </li>
      ))}
  <p>the item name should go here</p>
      </ul>
 )
}
export default CatDetails;