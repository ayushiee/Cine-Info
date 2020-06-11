import React from 'react';
import styles from './Home.module.css';
import logo from '../../assets/logo.png';
import {ReactComponent as image} from '../../assets/movieSvg.svg';

function Home() {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.logoContainer}>
                <img src={logo} className={styles.logo} alt="logo" />
            </div>
            <div className={styles.content}>
                <div className={styles.leftContainer}>
                    <span className={styles.title}>Cinephile.</span>
                    <span className={styles.subtitle}>Movies. Series. And more!</span>
                </div>
                <div className={styles.rightContainer}>
                    <svg src={image} style={styles.image} />
                </div>
            </div>
        </div>
    )
}

export default Home; 