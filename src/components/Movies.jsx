import axios from 'axios'
import React, { Fragment, useContext, useEffect, useState } from 'react'
import {AiFillPlayCircle} from 'react-icons/ai'
import {Container} from './NavBar'
import '../Styles/Videos.css'
import NoImg from './NoImage.png'

function Movies() {
  const {toggle} = useContext(Container)
  const [moviesData, setMoviesData] = useState([])
  const Api = 'https://api.themoviedb.org/3/discover/movie'
  const Images = 'https://image.tmdb.org/t/p/w500/'
  const MovieCall = async() => {
    const data = await axios.get(Api,{
      params: {
        api_key: '85c5f3add224c356a3494ef18a1d4dbc'
      }
    })
    const results = data.data.results
    setMoviesData(results)
  }
  useEffect(() => {
    MovieCall()
  }, [])
  return (
    <Fragment>
      <div className={toggle ? "mainBgColor" : 'secondaryBgColor'}>
        <div className="movies-container">
          {moviesData.map((movie) => {
            return (
            <Fragment>
              <div id='container'>
                <AiFillPlayCircle color='#fff' fontSize={40} id="playIcon"/>
                <img src={movie.poster_path ? `${Images}${movie.poster_path}` : NoImg} alt=''></img>
                <h3>{movie.title}</h3>
              </div>
            </Fragment>
            )
          })}
        </div>
      </div>
    </Fragment>  
  )
}

export default Movies