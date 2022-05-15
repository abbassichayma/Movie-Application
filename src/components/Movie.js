import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function Movie({getMovies,searsh}) {
    let [movies,setMovies] = useState([])
    
    const getMovie = async () => {
        try {
            const {data} = await axios.get('https://movie-app-gmc.herokuapp.com/api/movies')
            setMovies(data)
        } catch (error) {
            console.error(error)
        }
    }
    useEffect(() => {
        getMovie()
        
    }, [])

    
    if(Object.keys(getMovies).length != 0 ){
        movies = [...movies,{...getMovies,_id:Math.random()}]
    }
    
    const deletMovie = (ID) =>{
        setMovies(movies.filter(el => el._id != ID))
    }
    return (
        <div className='movie'>
            {movies?.filter((ele)=>ele.title.toLowerCase().includes(searsh.toLowerCase())).map((ele, key) => <div>
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={ele.imgUrl} />
                <Card.Body>
                    <Card.Title>{ele.title}</Card.Title>
                    <Card.Text>
                    {ele.description}
                    </Card.Text>
                   <Link to={`/Details/${ele._id}`}> <Button variant="primary">Details</Button></Link>
                   <Button variant="danger" onClick={()=> deletMovie(ele._id)}>Delete</Button>
                </Card.Body>
            </Card>
            </div>)}
        </div>
    )
}

export default Movie
