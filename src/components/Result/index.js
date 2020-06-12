import React from 'react';
import './Result.css';
import Header from '../header';

function Result() {
    return (
        <div className='mainContainer'>
            <Header />
            <div className='content'>
                <div className='leftContainer'>
                    <img src='https://m.media-amazon.com/images/M/MV5BMTI1MTY2OTIxNV5BMl5BanBnXkFtZTYwNjQ4NjY3._V1_SX300.jpg'
                        className='poster' alt='poster'/>
                </div>
                <div className='rightContainer'>
                    <h1 className='title'>title</h1>
                    <label className='text' > <span className='subTitle'>Year:</span><span className='subText'> 2015</span></label>
                    <label className='text' > <span className='subTitle'>Certification:</span><span className='subText'> dlkfgm</span></label>
                    <label className='text' ><span className='subTitle'>Rating: </span><span className='subText'>s ndjfnlk </span></label>
                    <label className='text' ><span className='subTitle'>Genre: </span><span className='subText'>s ndjfnlk </span></label>
                    <label className='text' ><span className='subTitle'>Runtime: </span><span className='subText'>s ndjfnlk </span></label>
                    <label className='text' ><span className='subTitle'>Director: </span><span className='subText'>s ndjfnlk </span></label>
                    <label className='text' ><span className='subTitle'>Cast: </span><span className='subText'>s ndjfnlk </span></label>
                    <label className='text' ><span className='subTitle'>Plot summary: </span><span className='subText'>s ndjfnlk </span></label>
                    <label className='text' ><span className='subTitle'>Language: </span><span className='subText'>s ndjfnlk </span></label>

                </div>
            </div>
        </div>
    )
}

export default Result;