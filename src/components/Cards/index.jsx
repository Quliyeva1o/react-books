import React, { useState, useEffect } from 'react';
import styles from './index.module.scss';
import CardList from '../CardList';

const Cards = ({ movies, filteredMovies, setFilteredMovies, setMovies }) => {

    const [activeGenre, setActiveGenre] = useState(null);

    const filterMoviesByGenre = (genre) => {
        if (genre === null) {
            setFilteredMovies(movies);
        } else {
            setFilteredMovies(movies.filter(movie => movie.genre === genre));
        }
        setActiveGenre(genre);
    };


    useEffect(() => {
        setFilteredMovies(movies);
    }, [movies]);

    return (
        <>
            <div className={`d-flex container ${styles.cards}`}>
                <h2>Latest Published items</h2>
                <div className="row">
                    <ul className={`d-flex list-unstyled ${styles['card-filter']}`}>
                        <li><a href="#" className={activeGenre === null ? styles['card-active'] : ''} onClick={() => filterMoviesByGenre(null)}>All</a></li>
                        <li><a href="#" className={activeGenre === 'Horror' ? styles['card-active'] : ''} onClick={() => filterMoviesByGenre('Horror')}>Horror</a></li>
                        <li><a href="#" className={activeGenre === 'Thriller' ? styles['card-active'] : ''} onClick={() => filterMoviesByGenre('Thriller')}>Thriller</a></li>
                        <li><a href="#" className={activeGenre === 'Science Fiction' ? styles['card-active'] : ''} onClick={() => filterMoviesByGenre('Science Fiction')}>Science Fiction</a></li>
                        <li><a href="#" className={activeGenre === 'History' ? styles['card-active'] : ''} onClick={() => filterMoviesByGenre('History')}>History</a></li>
                    </ul>
                </div>
            </div>

            <CardList movies={filteredMovies} setMovies={setMovies} />
        </>
    );
};

export default Cards;
