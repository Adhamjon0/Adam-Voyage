import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import './Home.css';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import img1 from '../photos/registon.jpg';
import img2 from '../photos/bb.jpg';
import img3 from '../photos/A_T.jpg';
import img4 from '../photos/pr.jpg';
import img5 from '../photos/city.jpg';
import img6 from '../photos/cyti2.jpg';
import img7 from '../photos/food.webp';

const IMAGES = [img1, img2, img3, img4, img5, img6, img7];

const Home = () => {
    const { t } = useTranslation();
    const [currentSlide, setCurrentSlide] = useState(0);
    const [fade, setFade] = useState(true);

    const slides = t("home.slides", { returnObjects: true }).map((slide, idx) => ({
        ...slide,
        image: IMAGES[idx]
    }));

    const nextSlide = () => {
        setFade(false);
        setTimeout(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
            setFade(true);
        }, 400);
    };

    const prevSlide = () => {
        setFade(false);
        setTimeout(() => {
            setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
            setFade(true);
        }, 400);
    };

    // Auto slide every 6s
    useEffect(() => {
        const interval = setInterval(nextSlide, 6000);
        return () => clearInterval(interval);
    }, [currentSlide]);

    const { image, title, subtitle } = slides[currentSlide];

    return (
        <main className="home-hero">
            <Helmet>
                <title>{t('header.home')} | SamTour</title>
                <meta name="description" content={t('footer.description')} />
            </Helmet>

            <div className={`home-bg ${fade ? 'fade-in' : 'fade-out'}`} style={{ backgroundImage: `url(${image})` }} />
            <div className="home-overlay" />

            <div className="home-content">
                <h1 className="home-title">{title}</h1>
                <p className="home-subtitle">{subtitle}</p>

                <div className="home-actions">
                    <Link to="/contact" className="home-btn home-btn-primary">{t('home.get_in_touch')}</Link>
                    <Link to="/services" className="home-btn home-btn-secondary">{t('home.learn_more')}</Link>
                </div>

                <div className="home-slider">
                    <button onClick={prevSlide} className="home-slider-btn">{t('home.previous')}</button>
                    <button onClick={nextSlide} className="home-slider-btn">{t('home.next')}</button>
                </div>
            </div>
        </main>
    );
};

export default Home;
