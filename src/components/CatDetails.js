import React, { useState, useEffect } from 'react'
import Axios from 'axios'

function CatDetails({ match }) {
    useEffect((props) => {
        fetchItem(match.params.id)
        console.log(match)
    })

    const [item] = useState({})

    const fetchItem = async () => {
        const fetchItem = await Axios.get(
            `https://api.thecatapi.com/v1/breeds/search?q=${match.params.id}`,
            {
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json, charset=utf-8',
                    'x-api-key': '54415849-f1f8-41e0-9024-a766ad625326',
                },
            }
        )
        const item = fetchItem.data
        console.log(item)
    }
    return (
        <div>
            <h2>Cat Item</h2>
        </div>
    )
}
export default CatDetails
