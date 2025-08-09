import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../assets/css/ClientLogoCarousel.css';

const ClientLogoCarousel = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    };

    const clients = [
        { img: './assets/images/Artboard-1.webp', text: 'Baroda U.P. Bank' },
        { img: './assets/images/Artboard-2.webp', text: 'Baroda U.P. Gramin Bank' },
        { img: './assets/images/Artboard-3.webp', text: 'Punjab National Bank' },
        { img: './assets/images/Artboard-4.webp', text: 'State Bank of India.' },
        { img: './assets/images/Artboard-5.webp', text: 'United Commercial Bank' },
        { img: './assets/images/Artboard-6.webp', text: 'Bank of Baroda' },
        // { img: './assets/images/she_cast.jpg', text: ' National Scheduled Castes Finance and Development Corporation ' },
        { img: './assets/images/turisam.png', text: 'Tourism in U.P' },
    ];

    return (
        <div className="client my-5">
            <h5 className="text-start fw-bold sectionhead">Our Clients</h5>
            <Slider {...settings}>
                {clients.map((client, index) => (
                    <div className="carousel-item  text-center" key={index}>
                        <img src={client.img} alt={client.text} className="img-fluid" />
                        <p className="mt-2">{client.text}</p>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default ClientLogoCarousel;
