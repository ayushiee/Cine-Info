import React, { useState, useEffect } from 'react';
import './Result.css';
import Header from '../header';

function Result() {
    const [data, setData] = useState({});
    const [error, setError] = useState(false);
    const apiKey = '262773bd';
    const key = '500 days ';

    async function fetchData() {
        const url = `http://www.omdbapi.com/?t=${key}&apikey=${apiKey}`;
        const res = await fetch(url);
        res
            .json()
            .then(res => setData(res))
            .catch(err => setError(err));
    }

    useEffect(() => {
        fetchData();
    });

    const { 
        Title, 
        Year, 
        Rated, 
        Poster, 
        Genre, 
        Director, 
        Actors, 
        Plot, 
        Language, 
        imdbRating, 
        Runtime } = data;

    return (
        <div className='resultContainer'>
            <Header />
            <div className='resultContent'>
                <div className='leftContent'>
                    <img src={Poster}
                        className='poster' 
                        alt='poster' 
                    />
                </div>
                <div className='rightContent'>
                    <label className='posterTitle'>{Title}</label>
                    <div className='info'>
                    <label className='text'>
                        <span className='resSubTitle'>Year:</span>
                        <span className='subText'> {Year}</span>
                    </label>
                    <label className='text'>
                        <span className='resSubTitle'>Certification:</span>
                        <span className='subText'> {Rated}</span>
                    </label>
                    <label className='text'>
                        <span className='resSubTitle'>Rating: </span>
                        <span className='subText'>{imdbRating} </span>
                    </label>
                    <label className='text'>
                        <span className='resSubTitle'>Genre: </span>
                        <span className='subText'>{Genre} </span>
                    </label>
                    <label className='text'>
                        <span className='resSubTitle'>Runtime: </span>
                        <span className='subText'>{Runtime}</span>
                    </label>
                    <label className='text'>
                        <span className='resSubTitle'>Director: </span>
                        <span className='subText'>{Director} </span>
                    </label>
                    <label className='text'>
                        <span className='resSubTitle'>Cast: </span>
                        <span className='subText'>{Actors} </span>
                    </label>
                    <label className='text'>
                        <span className='resSubTitle'>Plot summary: </span>
                        <span className='subText'>{Plot} </span>
                    </label>
                    <label className='text'>
                        <span className='resSubTitle'>Language: </span>
                        <span className='subText'>{Language}</span>
                    </label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Result;