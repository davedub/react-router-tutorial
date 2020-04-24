import React, { useState, useEffect } from 'react'
import './App.css'

function About() {
    useEffect(() => {
        fetchItems()
    }, [])

    const [set, setItems] = useState([])
    const [search, setSearch] = useState('')

    const fetchItems = async () => {
        const data = await fetch(
            'http://www.ongccreditsociety.com/api/circular.php'
        )

        const set = await data.json()
        console.log(set)
        setItems(set)
    }

    const onchange = (e) => {
        setSearch(e.target.value)
    }

    const filter = set.filter((country) => {
        return (
            country.Description.toLowercase().indexOf(search.toLowercase()) !=
            -1
        )
    })

    return (
        <div className="items">
            <div className="col">
                <input label="search" icon="search" onChange={onchange} />
            </div>
            {filter.map((item) => (
                <p>{item.Description}</p>
            ))}
        </div>
    )
}

export default About
