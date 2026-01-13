import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import "./Home.css";

import img1 from "../photos/registon.jpg";
import img2 from "../photos/bb.jpg";
import img3 from "../photos/A_T.jpg";
import img4 from "../photos/pr.jpg";
import img5 from "../photos/city.jpg";
import img6 from "../photos/cyti2.jpg";
import img7 from "../photos/food.webp";

const IMAGES = [img1, img2, img3, img4, img5, img6, img7];

const SLIDES = [
    {
        title: "Discover Uzbekistan",
        subtitle: "Travel with expert guides and unforgettable experiences"
    },
    {
        title: "Explore Ancient Cities",
        subtitle: "Samarqand, Buxoro, Xiva and the Silk Road"
    },
    {
        title: "Authentic Culture & Food",
        subtitle: "Feel the real spirit of Uzbekistan"
    }
];

export default function Home() {
    const [index, setIndex] = useState(0);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false);
            setTimeout(() => {
                setIndex((prev) => (prev + 1) % IMAGES.length);
                setFade(true);
            }, 400);
        }, 7000);

        return () => clearInterval(interval);
    }, []);

    return (
        <main className="home-hero">
            {/* 🔥 SEO — GOOGLE UCHUN ENG MUHIM JOY */}
            <Helmet>
                <title>Adam Voyage | Uzbekistan Travel Agency</title>
                <meta
                    name="description"
                    content="Adam Voyage - is a professional travel agency in Uzbekistan, offering exclusive tours across Samarkand, Bukhara, Khiva, and the legendary Silk Road. Discover authentic culture, rich history, and unforgettable travel experiences with experienced local guides with over 20 years of expertise.."
                />
            </Helmet>

            {/* BACKGROUND IMAGE */}
            <div
                className={`home-bg ${fade ? "fade-in" : "fade-out"}`}
                style={{ backgroundImage: `url(${IMAGES[index]})` }}
            />

            {/* OVERLAY */}
            <div className="home-overlay" />

            {/* CONTENT */}
            <div className="home-content">

                {/* 🔥 ASOSIY H1 — O‘ZGARMAS */}
                <h1 className="home-title">
                    Adam Voyage – Uzbekistan Travel Agency
                </h1>

                {/* SLIDE TITLE (H2) */}
                <h2 className="home-subtitle">
                    {SLIDES[index % SLIDES.length].title}
                </h2>

                {/* SLIDE TEXT */}
                <p className="home-text">
                    {SLIDES[index % SLIDES.length].subtitle}
                </p>

                <div className="home-actions">
                    <Link to="/contact" className="home-btn primary">
                        Get in touch
                    </Link>
                    <Link to="/about" className="home-btn outline">
                        Learn more
                    </Link>
                </div>
            </div>
        </main>
    );
}
