import React, { useEffect, useRef } from 'react';
import './About.css';
import Avatar from "../../assets/3.png";
import LightAvater from "../../assets/2.png";
import Resume from '../../assets/resume.pdf';
import AboutBox from './AboutBox';
import SpinningFlower from './SpiningFlower';

const About = () => {
    const aboutSectionRef = useRef(null);

    const downloadResume = async () => {
        window.open(Resume, '_blank');
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        if (entry.target.classList.contains('box-left')) {
                            entry.target.classList.add('show-left');
                        } else if (entry.target.classList.contains('box-right')) {
                            entry.target.classList.add('show-right');
                        }
                    } else {
                        entry.target.classList.remove('show-left', 'show-right');
                    }
                });
            },
            { threshold: 0.1 }
        );

        const section = aboutSectionRef.current;
        const elementsToAnimate = section.querySelectorAll('.box-left, .box-right');

        elementsToAnimate.forEach((el) => observer.observe(el));

        return () => {
            elementsToAnimate.forEach((el) => observer.unobserve(el));
        };
    }, []);

    return (
        <section className="about container section" id="about" ref={aboutSectionRef}>
            <div className="section__name">
                <SpinningFlower />
                <h2 className="section__title">About Me</h2>
            </div>

            <div className="about__container grid">
                <img src={LightAvater} alt="" className="about__img box box-left" />

                <div className="about__data grid box box-right">
                    <div className="about__info">
                        <p className="about__description">
                            Hello! I'm Quynh. I studied at PTIT, where I will complete my diploma in Software
                            Development.<br /><br />
                            Here are a few technologies I’ve been working with recently:
                        </p>
                        <ul className="about__list">
                            <li>JavaScript</li>
                            <li>ReactJs</li>
                            <li>Ant design</li>
                            <li>HTML, CSS/SCSS</li>
                            <li>Bootstrap</li>
                            <li>Git,Github</li>
                        </ul>
                        <button className="btn" onClick={downloadResume}>
                            Download CV
                        </button>
                    </div>
                </div>
            </div>

            {/* <AboutBox className="box box-left" /> */}
        </section>
    );
};

export default About;
