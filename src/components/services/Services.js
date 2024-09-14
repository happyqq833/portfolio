import React, { useState } from 'react';
import './Services.css';
import Image1 from '../../assets/service-1.svg'
import Image2 from '../../assets/service-2.svg'
import SpinningFlower from '../about/SpiningFlower';
import TextEffect from './TextEffect';


const data = [
    {
        id: 1,
        image: Image1,
        title: "Responsive design",
        description:
            " Ensuring that the website/mobile app is responsive across all platforms",
    },
    {
        id: 2,
        image: Image2,
        title: "Web Development",
        description:
            " Ensuring that a website meets the correct standards, and also ensuring it's well maintained",
    },
];

const Services = () => {
    const [hoveredId, setHoveredId] = useState(null);

    return (
        <section className="services container section" id="services">
            <div className='section__name'>
                <SpinningFlower />
                <h2 className="section__title">Services</h2>
            </div>
           
            <div className="services__container grid">
                {data.map(({ id, image, title, description }) => (
                    <div
                        className="services__card"
                        key={id}
                        onMouseEnter={() => setHoveredId(id)}
                        onMouseLeave={() => setHoveredId(null)}
                    >
                        <img src={image} alt='' className='services__img' width="80" />
                        <h3 className="services__title">{title}</h3>
                        {/* <p className="services__description">see more</p> */}
                        {hoveredId === id && (
                            <div className="hover-details">
                                <TextEffect text={description} />
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Services;