import React, { useState } from 'react';
import './Home.css';
import logo from '../../assets/logo.png';
import image from '../../assets/movieSvg.svg';

function Home() {
    const [key, setKey] = useState('');

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
                        <input
                            type='text'
                            name='search'
                            placeholder='Search your favourite movies, series...'
                            className='searchBar'
                            onChange={event => setKey(event.target.value)}
                        />
                        {console.log(key)}
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