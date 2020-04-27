import React, { useState, useEffect } from 'react'

function CatDetails({ match }) {
    useEffect((props) => {
      fetchItem()
      console.log(match)
    })
    // const setItem = useState({})
    const catDetails = useState([])
    catDetails.props = []

    const fetchItem = async () => {
        const fetchItem = await fetch(
            `https://api.thecatapi.com/v1/breeds/search?q=${match.params.id}`,
            {
                headers: {
                  mode: 'cors',
                  'Content-Type': 'application/json, charset=utf-8',
                  'x-api-key': '54415849-f1f8-41e0-9024-a766ad625326',
                },
              },
              )
            const items = await fetchItem.json()
            console.log(items)
            function arrayToObject(arr) {
              var obj = {};
              for (var i = 0; i < arr.length; ++i){
              obj[i] = arr[i];
              }
              return obj;
          }
          const catDetails = arrayToObject(items)
          console.log(catDetails)
          console.log(typeof catDetails)
          for (let keys in catDetails) {
            console.log(catDetails[keys]);
          }
          const catID = Object.keys(catDetails)
          console.log(catID)
        }
    return (
      Object.entries(catDetails).map(([key,value])=>{
        return (
          <div className={key}>Value: {value}</div>
        )}
      ))
  }

export default CatDetails
