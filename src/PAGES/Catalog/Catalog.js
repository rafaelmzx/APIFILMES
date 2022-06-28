import React, { useEffect, useState } from 'react'
import * as ApiTmbService from '../../services/apiTmdb'

function Catalog() {
  const [popularMovies, setPopularMovies] = useState([])

  const imgUrl = 'https://image.tmdb.org/t/p/w300_and_h450_bestv2'

  useEffect(() => {
    ApiTmbService.getPolular()
      .then((response) => setPopularMovies(response.results))
  }, [])

  return <>
    <h1>Catalogo</h1>
    <div className='categoria'>
      <h4 className='categoria-titulo'>Populares</h4>

      <div className='categoria-lista'>
        {
          popularMovies.map((popularMovie) => {
            return <>
              <img className='lista-imagens' src={imgUrl + popularMovie.poster_path} alt={popularMovie.title} />
            </>
          })
        }

      </div>
    </div>
  </>
}

export default Catalog