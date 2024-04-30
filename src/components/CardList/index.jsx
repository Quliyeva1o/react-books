import CardItem from '../CardItem';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import styles from './index.module.scss'


const CardList = ({ movies, setMovies }) => {


    return (
        <>
            <div className={` container  ${styles.card}`}>
                <div className=" cards d-flex gap-3">
                <CardItem movies={movies} setMovies={setMovies} /></div>
            </div>
        </>
    );

}

export default CardList
