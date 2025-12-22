import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./Home.css";

import img1 from "../photos/registon.jpg";
import img2 from "../photos/bb.jpg";
import img3 from "../photos/A_T.jpg";
import img4 from "../photos/pr.jpg";
import img5 from "../photos/city.jpg";
import img6 from "../photos/cyti2.jpg";
import img7 from "../photos/food.webp";

const IMAGES = [img1, img2, img3, img4, img5, img6, img7];

export default function Home() {
    const { t } = useTranslation();
    const [index, setIndex] = useState(0);
    const [fade, setFade] = useState(true);

    const slides = t("home.slides", { returnObjects: true });

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
            <Helmet>
                <title>{t("header.home")} | Adam Voyage</title>
                <meta name="description" content={t("footer.description")} />
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
                <h1 className="home-title">{slides[index]?.title}</h1>
                <p className="home-subtitle">{slides[index]?.subtitle}</p>

                <div className="home-actions">
                    <Link to="/contact" className="home-btn primary">
                        {t("home.get_in_touch")}
                    </Link>
                    <Link to="/about" className="home-btn outline">
                        {t("home.learn_more")}
                    </Link>
                </div>
            </div>
        </main>
    );
}
