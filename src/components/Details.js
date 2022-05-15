import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
function Details() {
    const {id} = useParams()
    const [movies,setMovies] = useState([])
    const getMovies = async () => {
        try {
            const {data} = await axios.get('https://movie-app-gmc.herokuapp.com/api/movies/'+id)
            setMovies(data)
        } catch (error) {
            console.error(error)
        }
    }
    useEffect(() => {
        getMovies()
    }, [])
    
    return (
        <div>
            <h1>{movies.title}</h1>
            <div class="card mb-3" > 
            <img src={movies.imgUrl} style={{ width: '40rem',margin:'0 auto' }} class="card-img-top" alt={movies.title} />
            <div class="card-body">
                <h5 class="card-title">{movies.title}</h5>
                <p class="card-text">{movies.description}</p>
                <p class="card-text"><small class="text-muted">{movies.rate}</small></p>
            </div>
            </div>
        </div>
    )
}

export default Details
