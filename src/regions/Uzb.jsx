import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import "./Uzb.css";

import im1 from "../photos/reg.jpg";
import im2 from "../photos/buxoroArk.jpg";
import im3 from "../photos/xiva.jpg";
import im4 from "../photos/shahrisabz.jpg";
import im5 from "../photos/toshkent.jpg";
import im6 from "../photos/qoqon.png";
import im7 from "../photos/margilan.png";
import im8 from "../photos/termiz.png";
import im9 from "../photos/nuk_ser.jpg";
import im10 from "../photos/far_ser.jpg";


/**
 * Uzb page component
 * @returns {React.ReactElement} The Uzb page component
 */
export default function Uzb() {
    const navigate = useNavigate();

    return (
        <>
        {/* SEO */ }
        <Helmet>
            <title>Uzbekistan | Adam Voyage</title>
            <meta
                name="description"
                content="Discover Uzbekistan with Adam Voyage. Explore Samarkand, Bukhara, Khiva and more."
            />
        </Helmet>
        

        {/* HERO */ }
        <section className="uzb-hero">
            <div className="uzb-hero-inner">
                <h1>Discover Uzbekistan</h1>
                <p>
                    A land of ancient cities, rich culture and unforgettable journeys
                    along the Silk road.
                </p>
            </div>
        </section>

        {/* ABOUT */ }
        <section className="uzb-about">
            <h2>About Uzbekistan</h2>
            <p>
                {/* bu yerga keyin o‘zingiz matn yozasiz */}
                Uzbekistan is a unique destination where history, architecture and
                traditions meet modern life.
            </p>
        </section>

        {/* REGIONS */ }
        <div className="regions-grid">
            <div className="region-card" onClick={() => navigate("/samarqand")}>
                <img src={im1} alt="Samarqand" className="region-img" />
                <div className="region-name">Samarqand</div>
            </div>

            <div className="region-card">
                <img src={im2} alt="Buxoro" className="region-img" />
                <div className="region-name">Buxoro</div>
            </div>

            <div className="region-card">
                <img src={im3} alt="Xiva" className="region-img" />
                <div className="region-name">Xiva</div>
            </div>

            <div className="region-card">
                <img src={im4} alt="Shahrisabz" className="region-img" />
                <div className="region-name">Shahrisabz</div>
            </div>

            <div className="region-card">
                <img src={im5} alt="Toshkent" className="region-img" />
                <div className="region-name">Toshkent</div>
            </div>

            <div className="region-card">
                <img src={im6} alt="Qo‘qon" className="region-img" />
                <div className="region-name">Qo‘qon</div>
            </div>

            <div className="region-card">
                <img src={im7} alt="Marg‘ilon" className="region-img" />
                <div className="region-name">Marg‘ilon</div>
            </div>

            <div className="region-card">
                <img src={im8} alt="Termiz" className="region-img" />
                <div className="region-name">Termiz</div>
            </div>
            <div className="region-card">
                <img src={im9} alt="Nukus" className="region-img" />
                <div className="region-name">Nukus</div>
            </div>

            <div className="region-card">
                <img src={im10} alt="Farg‘ona" className="region-img" />
                <div className="region-name">Farg‘ona</div>
            </div>
        </div>
        {/* CTA */ }
        <section className="uzb-cta">
            <h2>Plan Your Journey</h2>
            <p>
                Contact us and let us create a personalized travel experience for you.
            </p>
            <Link to="/contact" className="cta-btn">
                Contact Us
            </Link>
        </section>
        </>
    );
}
