import React from 'react'
import { useState } from 'react'
import './Search.css'

const Search = ({onSearch}) => {

        const [city, setCity] = useState("");
        return (
                <form onSubmit={(e) => {
                        e.preventDefault();
                        onSearch(city);
                }}>
                        <input
                                className="inputSearch"
                                type="text"
                                placeholder="Search city..."
                                value={city}
                                onChange={e => setCity(e.target.value)}
                        />
                        {/* <input className='searchButton' type="submit" value="Agregar" /> */}
                </form>
        )
}

export default Search;