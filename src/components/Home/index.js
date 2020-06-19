import React, { useState } from 'react';
import './Home.css';
import image from '../../assets/movieSvg.svg';
import { useHistory } from 'react-router-dom';

function Home() {
  const [key, setKey] = useState('');
  const history = useHistory();

  const onClick = () => {
    if (key === '') {
      alert('Please enter a name');
    } else {
      history.push(`/${key}`);
      setKey('');
    }
  };

  return (
    <div className='mainContainer'>

      <div className='content'>
        <div className='leftContainer'>
          <span className='title'>Cine-Info</span>
          <span className='subtitle'>All about movies and series!</span>
          <form className='search' onSubmit={onClick}>
            <input
              type='text'
              name='search'
              placeholder='Search your favourite movies, series...'
              className='searchBar'
              onChange={event => setKey(event.target.value)}
            />
            <button type='submit' className='submitButton'>Go!</button>
          </form>
        </div>
        <div className='rightContainer'>
          <img src={image} className='image' alt='movie' />
        </div>
      </div>
    </div>
  );
}

export default Home;