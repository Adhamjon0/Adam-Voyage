// Intro.jsx
import React, { useEffect, useState } from 'react';
import './Intro.css';
import bgImage from '../photos/registon.jpg';
// logo keyin siz qo‘shasiz
import logo from '../photos/adam_logo.png';

const Intro = ({ onFinish }) => {
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setFadeOut(true);
            setTimeout(() => onFinish(), 1000); // fade-out tugagach
        }, 3000); // intro 3s turadi

        return () => clearTimeout(timer);
    }, [onFinish]);

    return (
        <div className={`intro-wrapper ${fadeOut ? 'fade-out' : ''}`}>
            <img src={bgImage} alt="Registan" className="intro-bg" />
            <div className="overlay"></div>

            <div className="intro-content">
                {/* 🔽 LOGO JOYI (siz keyin img qo‘shasiz) */}
                <div className="logo-box">
                    <img src={logo} alt="Adam Voyage Logo" />
                </div>

                <p className="slogan">
                    Discover the Timeless Beauty of Uzbekistan
                </p>
            </div>
        </div>
    );
};

export default Intro;
