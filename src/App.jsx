import { useState } from 'react'
import Cards from './components/Cards'
import Footer from './components/Footer'
import Join from './components/Join'
import NavLinks from './components/NavLinks'
import Navbar from './components/Navbar'
import Slider from './components/Slider'

function App() {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  return (
    <>
      <Navbar filteredMovies={filteredMovies} setFilteredMovies={setFilteredMovies}/>
      <NavLinks/>
      <Slider/>
      <Cards movies={movies} setFilteredMovies={setFilteredMovies} setMovies={setMovies} filteredMovies={filteredMovies}/>
      <Join/>
      <Footer/>
    </>
  )
}

export default App
