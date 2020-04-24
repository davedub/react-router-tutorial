import React, { useState, useEffect } from 'react'

function CatDetails({ match }) {
    useEffect((props) => {
      fetchItem()
      console.log(match)
    })
    const [items] = useState({})

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
    }
    return (
        <div>
            <h2>Cat Item</h2>
        </div>
    )
}
export default CatDetails
