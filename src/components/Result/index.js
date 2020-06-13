import React from 'react';
import './Result.css';
import Header from '../header';

function Result() {
    return (
        <div className='resultContainer'>
            <Header />
            <div className='resultContent'>
                <div className='leftContent'>
                    <img src='https://m.media-amazon.com/images/M/MV5BMTI1MTY2OTIxNV5BMl5BanBnXkFtZTYwNjQ4NjY3._V1_SX300.jpg'
                        className='poster' alt='poster' />
                </div>
                <div className='rightContent'>
                    <h1 className='PosterTitle'>title</h1>
                    <label className='text'>
                        <span className='resSubTitle'>Year:</span>
                        <span className='subText'> 2015</span>
                    </label>
                    <label className='text'>
                        <span className='resSubTitle'>Certification:</span>
                        <span className='subText'> dlkfgm</span>
                    </label>
                    <label className='text'>
                        <span className='resSubTitle'>Rating: </span>
                        <span className='subText'>s ndjfnlk </span>
                    </label>
                    <label className='text'>
                        <span className='resSubTitle'>Genre: </span>
                        <span className='subText'>s ndjfnlk </span>
                    </label>
                    <label className='text'>
                        <span className='resSubTitle'>Runtime: </span>
                        <span className='subText'>s ndjfnlk </span>
                    </label>
                    <label className='text'>
                        <span className='resSubTitle'>Director: </span>
                        <span className='subText'>s ndjfnlk </span>
                    </label>
                    <label className='text'>
                        <span className='resSubTitle'>Cast: </span>
                        <span className='subText'>s ndjfnlk </span>
                    </label>
                    <label className='text'>
                        <span className='resSubTitle'>Plot summary: </span>
                        <span className='subText'>s ndjfnlk </span>
                    </label>
                    <label className='text'>
                        <span className='resSubTitle'>Language: </span>
                        <span className='subText'>s ndjfnlk </span>
                    </label>

                </div>
            </div>
        </div>
    )
}

export default Result;