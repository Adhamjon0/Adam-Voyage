import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import './Footer.css';
import {
    FaInstagram,
    FaFacebookF,
    FaTelegramPlane,
    FaWhatsapp,
    FaEnvelope
} from 'react-icons/fa'; // ✅ Oddiy va ishonchli iconlar

export default function Footer() {
    const { t } = useTranslation();

    return (
        <footer className="site-footer minimal-footer">
            <div className="footer-inner">
                <div className="footer-section">
                    <h4 className="footer-title">SamTour</h4>
                    <p className="footer-text">
                        {t("footer.description")}
                    </p>
                </div>

                <div className="footer-section">
                    <h4 className="footer-title">{t("footer.quick_links")}</h4>
                    <ul className="footer-links">
                        <li><Link to="/" className="footer-link">{t("nav.home")}</Link></li>
                        <li><Link to="/about" className="footer-link">{t("nav.about")}</Link></li>
                        <li><Link to="/services" className="footer-link">{t("nav.services")}</Link></li>
                        <li><Link to="/contact" className="footer-link">{t("nav.contact")}</Link></li>
                        <li><Link to="/gallery" className="footer-link">{t("nav.gallery")}</Link></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4 className="footer-title">{t("footer.connect")}</h4>
                    <div className="socials icons-only">
                        <a href="https://instagram.com/__adhamjon18" className="social-icon" target="_blank" rel="noopener noreferrer">
                            <FaInstagram />
                        </a>
                        <a href="https://www.facebook.com/adhamjon.sodiqov.2025/" className="social-icon" target="_blank" rel="noopener noreferrer">
                            <FaFacebookF />
                        </a>
                        <a href="https://wa.me/998917077291" className="social-icon" target="_blank" rel="noopener noreferrer">
                            <FaWhatsapp />
                        </a>
                        <a href="https://t.me/the_adhamjon" className="social-icon" target="_blank" rel="noopener noreferrer">
                            <FaTelegramPlane />
                        </a>
                        <a href="mailto:sodiqovadhamjon0@gmail.com" className="social-icon">
                            <FaEnvelope />
                        </a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="copyright">
                    © {new Date().getFullYear()} SamTour. {t("footer.rights")}
                </div>
            </div>
        </footer>
    );
}
