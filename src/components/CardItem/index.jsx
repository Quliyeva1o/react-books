import React, { useEffect, useState } from 'react'
import { getAll } from '../../API/requests/requests'
import { endpoints } from '../../API/endpoints/constants'
import styles from './index.module.scss'
import 'bootstrap/dist/css/bootstrap.css';
import DeleteFilm from '../DeleteFilm';


const CardItem = ({ movies, setMovies }) => {

    const getMovies = () => {

        getAll(endpoints.films).then((res) => {
            setMovies(res.data)
        })
    }
    useEffect(() => {

        getMovies()
    }, []);


    return (
        <>
            {

                movies.map((movie, idx) => (


                    <div className={`col-xl-2 col-lg-3 col-md-4 col-sm-6 ${styles.card}`} key={idx}>
                        <img src={movie.img} alt="" />
                        <div className={styles.content}>
                            <h2>{movie.name}</h2>
                            <h5 className='text-danger'>{movie.genre}</h5>
                            <p>{movie.author}</p>
                            <p>id:{movie.id}</p>
                            <div className='d-flex justify-content-between '>
                                <div>
                                    <span>{movie.review} review</span>
                                </div>
                                <span>50</span> </div><DeleteFilm movie={movie} setMovies={setMovies} movies={movies} />
                        </div>

                    </div>


                ))}
        </>
    )
}

export default CardItem
