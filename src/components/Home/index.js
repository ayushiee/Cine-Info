import React from 'react';
import './Home.css';
import logo from '../../assets/logo.png';
import image from '../../assets/movieSvg.svg';

function Home() {
    return (
        <div className='mainContainer'>
            <div className='logoContainer'>
                <img src={logo} className='logo' alt='logo' />
            </div>
            <div className='content'>
                <div className='leftContainer'>
                    <span className='title'>Cinefo.</span>
                    <span className='subtitle'>All about movies and series!</span>
                    <div className='search'>
                        <input type='text' name='search' placeholder='Search your favourite movies, series...' className='searchBar' />
                        <input type="button" value='Go' className='submitButton' />
                    </div>
                </div>
                <div className='rightContainer'>
                    <img src={image} className='image' alt='movie' />
                </div>
            </div>
        </div>
    )
}

export default Home; 