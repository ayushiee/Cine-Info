import React from 'react';
import styles from './Home.module.css';
import logo from '../../assets/logo.png';
import image from '../../assets/movieSvg.svg';

function Home() {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.logoContainer}>
                <img src={logo} className={styles.logo} alt='logo' />
            </div>
            <div className={styles.content}>
                <div className={styles.leftContainer}>
                    <span className={styles.title}>Cinephile.</span>
                    <span className={styles.subtitle}>All about movies and series!</span>
                    {/* <div className={styles.searchBar}> */}
                        <input type='text' name='search' placeholder='Search your favourite movies, series...' className={styles.searchBar} />
                    {/* </div> */}
                </div>
                <div className={styles.rightContainer}>
                    <img src={image} className={styles.image} alt='movie' />
                </div>
            </div>
        </div>
    )
}

export default Home; 