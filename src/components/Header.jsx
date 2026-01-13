import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FiPhone, FiMenu, FiX, FiSun, FiMoon } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";
import Logo from "./Logo";
import "./Header.css";

const LANGUAGES = [
    { code: "uz", label: "O‘zbek" },
    { code: "en", label: "English" },
    { code: "fr", label: "Français" },
    { code: "ru", label: "Русский" },
    { code: "de", label: "Deutsch" },
    { code: "es", label: "Español" },
    { code: "it", label: "Italiano" },
    { code: "ja", label: "日本語" },
    { code: "zh", label: "中文" },
    { code: "ko", label: "한국어" }
];

export default function Header() {
    const { t } = useTranslation();
    const [menuOpen, setMenuOpen] = useState(false);
    const [isDarkIcon, setIsDarkIcon] = useState(false);
    const menuRef = useRef(null);

    const handleLangChange = (e) => {
        const lang = e.target.value;
        i18n.changeLanguage(lang);
        localStorage.setItem("i18nextLng", lang);
    };

    const toggleThemeIcon = () => {
        setIsDarkIcon(prev => !prev);
    };

    const closeMenu = () => {
        setMenuOpen(false);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setMenuOpen(false);
            }
        };

        if (menuOpen) {
            document.addEventListener("mousedown", handleOutsideClick);
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
            document.body.style.overflow = "auto";
        };
    }, [menuOpen]);

    return (
        <header className="header">
            <div className="header-container">

                {/* LOGO */}
                <NavLink to="/" className="logo" onClick={closeMenu}>
                    <Logo />
                </NavLink>

                {/* DESKTOP NAV */}
                <nav className="nav-desktop">
                    <NavLink to="/" end className="nav-link">{t("nav.home")}</NavLink>
                    <NavLink to="/about" className="nav-link">{t("nav.about")}</NavLink>
                    <NavLink to="/services" className="nav-link">{t("nav.services")}</NavLink>
                    <NavLink to="/uzb" className="nav-link">{t("O'zbekiston")}</NavLink>
                    <NavLink to="/gallery" className="nav-link">{t("nav.gallery")}</NavLink>
                </nav>

                {/* DESKTOP ACTIONS */}
                <div className="header-actions">

                    <NavLink to="/contact" className="contact-btn">
                        <FiPhone /> {t("nav.contact")}
                    </NavLink>

                    <select
                        className="lang-select"
                        onChange={handleLangChange}
                        value={localStorage.getItem("i18nextLng") || "en"}
                    >
                        {LANGUAGES.map(l => (
                            <option key={l.code} value={l.code}>
                                {l.label}
                            </option>
                        ))}
                    </select>

                    <button className="theme-toggle" onClick={toggleThemeIcon}>
                        {isDarkIcon ? <FiMoon /> : <FiSun />}
                    </button>
                </div>

                {/* HAMBURGER */}
                <button className="menu-btn" onClick={() => setMenuOpen(true)}>
                    <FiMenu />
                </button>
            </div>

            {/* OVERLAY */}
            <div
                className={`overlay ${menuOpen ? "show" : ""}`}
                onClick={closeMenu}
            />

            {/* MOBILE MENU */}
            <aside
                ref={menuRef}
                className={`mobile-menu ${menuOpen ? "open" : ""}`}
            >
                <button className="mobile-close" onClick={closeMenu}>
                    <FiX />
                </button>

                <nav className="mobile-inner">
                    <NavLink to="/" end onClick={closeMenu}>{t("nav.home")}</NavLink>
                    <NavLink to="/about" onClick={closeMenu}>{t("nav.about")}</NavLink>
                    <NavLink to="/services" onClick={closeMenu}>{t("nav.services")}</NavLink>
                    <NavLink to="/uzb" onClick={closeMenu}>{t("O'zbekiston")}</NavLink>
                    <NavLink to="/gallery" onClick={closeMenu}>{t("nav.gallery")}</NavLink>

                    <NavLink
                        to="/contact"
                        className="contact-btn mobile-cta"
                        onClick={closeMenu}
                    >
                        <FiPhone /> {t("nav.contact")}
                    </NavLink>

                    <select
                        className="mobile-select"
                        onChange={handleLangChange}
                        value={localStorage.getItem("i18nextLng") || "en"}
                    >
                        {LANGUAGES.map(l => (
                            <option key={l.code} value={l.code}>
                                {l.label}
                            </option>
                        ))}
                    </select>

                    <button
                        className="theme-toggle mobile-theme"
                        onClick={toggleThemeIcon}
                    >
                        {isDarkIcon ? <FiMoon /> : <FiSun />}
                    </button>
                </nav>
            </aside>
        </header>
    );
}
