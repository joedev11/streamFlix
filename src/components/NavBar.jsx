import React, { Fragment, useState} from 'react'
import {HiSearch} from 'react-icons/hi'
import { Routes, Route, NavLink } from 'react-router-dom'
import Movies from './Movies'
import TvShows from './TvShows'
import Trends from './Trends'
import Pricing from './Pricing'
import '../Styles/NavBarStyles.css'

export const Container = React.createContext()

function NavBar() {
    const [toggle, setToggle] = useState(true)
  return (
    <Container.Provider value={toggle}>
    <Fragment>
        <nav id={toggle ? '' : 'navBarColor'}>
            <div className='nav-options'>
                <h1 id={toggle ? '' : 'heading'}>JOEL-FLIX</h1>
                <NavLink to="" style={({isActive}) => {return{color:isActive ? '#fff' : '#EE9B00'}}}>
                    <span id={toggle ? 'Movies' : 'MoviesLight'}>Movies</span>
                </NavLink>
                <NavLink to="/TvShows" style={({isActive}) => {return{color:isActive ? '#fff' : '#EE9B00'}}}>
                    <span id={toggle ? 'Movies' : 'MoviesLight'}>TV Shows</span>
                </NavLink>
                <NavLink to="/Trends" style={({isActive}) => {return{color:isActive ? '#fff' : '#EE9B00'}}}>
                    <span id={toggle ? 'Movies' : 'MoviesLight'}>Trending</span>
                </NavLink>
                <NavLink to="/Pricing" style={({isActive}) => {return{color:isActive ? '#fff' : '#EE9B00'}}}>
                    <span id={toggle ? 'Movies' : 'MoviesLight'}>Pricing</span>
                </NavLink>
            </div>
            <div className='input-group'>
            <input type="text" placeholder="Search Whatever You Want"></input>
            <HiSearch fontSize={21} color="black" id="search"/>
            <div id='Color-switcher' onClick={() => setToggle(!toggle)}>
                <div id={toggle ? 'Color-switcher-mover' : 'Color-switcher-moved'}></div>
            </div>
            </div>
        </nav>
        <Routes>
            <Route path='' element={<Movies />}/>
            <Route path='TvShows' element={<TvShows />}/>
            <Route path='Trends' element={<Trends />}/>
            <Route path='Pricing' element={<Pricing />}/>
        </Routes>
    </Fragment>
    </Container.Provider>
  )
}

export default NavBar