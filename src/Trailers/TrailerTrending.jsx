import React, { Fragment } from 'react'
import { useState, useEffect } from 'react'
import ReactPlayer from 'react-player'
import movieTrailer from 'movie-trailer'
import '../Styles/TrailerMovies.css'

function TrailerTrending({trendTitle, toggle}) {
    const [video, setVideo] = useState("");
    const [videoURL, setVideoURL] = useState("");

    function handleSearch() {
        setVideo(trendTitle)
        movieTrailer(video).then((res) => {
        setVideoURL(res);
        });
    }
    useEffect(() => {
        handleSearch()
    },[videoURL])
  return (
    <Fragment>
        <div className='Container'>
        </div>
        <div className='player'>
            <h1 id={toggle ? 'TrailerMovie-name-dark' : 'TrailerMovie-name-light'}>{trendTitle}</h1>
            <ReactPlayer url={videoURL} controls={true} width={'1000px'} height={'780px'} />
        </div>
    </Fragment>
  )
}

export default TrailerTrending