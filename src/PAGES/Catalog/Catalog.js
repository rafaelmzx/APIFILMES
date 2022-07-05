import React, { useEffect, useState, useRef } from 'react'
import * as ApiTmbService from '../../services/apiTmdb'
import Title from '../../components/texts/Title'
import List from '../../components/property/List'


function Catalog() {
  const [popularMovies, setPopularMovies] = useState([])
  const listaRef = useRef()

  const imgUrl = 'https://image.tmdb.org/t/p/w300_and_h450_bestv2'

  useEffect(() => {
    ApiTmbService.getPolular()
      .then((response) => { 
        const movieImgs = response.results.map((result) => {
          return imgUrl + result.poster_path
        })
        setPopularMovies(movieImgs)
      })
  }, [])

  return <>
    <Title>Catalogo</Title>
    <List moviesImg={popularMovies}/>
  </>
}

export default Catalog