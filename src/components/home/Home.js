import React from 'react';
import './Home.css';
import Me from '../../assets/avatar.png';
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
import TextEffect from './TextEffect';


const Home = () => {
    return (
        <section className="home container" id='home'>
            <div className='home__content'>
            <div className='home__desc'>
                    
                <TextEffect text=" Hi, I am Nguyen Ngoc Quynh" />
                <br></br>
                    <span className="home__education">Web Developer</span>

                    <HeaderSocials />

                    <a href="#contact" className="btn"> Contact Me</a>
                </div>
            <div className="intro">
                <img src={Me} alt="" className='home__img' />
            </div>
            </div>
            <ScrollDown />
          
        </section>
    )
}

export default Home