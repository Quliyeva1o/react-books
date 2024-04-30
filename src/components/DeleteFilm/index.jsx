import React from 'react'
import { delOne } from '../../API/requests/requests'
import { endpoints } from '../../API/endpoints/constants';
import styles from './index.module.scss'

const DeleteFilm = ({ movie, setMovies, movies }) => {
    return (
        <>
            <button className={`btn btn-danger ${styles.delbtn}`} onClick={
                async () => {
                    await delOne(endpoints.films, movie.id);
                    setMovies(movies.filter((x) => x.id != movie.id))
                }
            }
            >del</button>
        </>
    )
}

export default DeleteFilm
