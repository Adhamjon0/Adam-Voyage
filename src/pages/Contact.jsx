import React, { useState } from "react";
import "./Contact.css";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import {
    FaInstagram,
    FaWhatsapp,
    FaFacebookF,
    FaTelegramPlane,
    FaEnvelope,
    FaPhoneAlt,
    FaMapMarkerAlt
} from "react-icons/fa";

/* TELEGRAM CONFIG */
const TELEGRAM_BOT_TOKEN = "YOUR_BOT_TOKEN";
const CHAT_ID = "YOUR_CHAT_ID";

const Contact = () => {
    const { t } = useTranslation();

    const [form, setForm] = useState({
        fullName: "",
        country: "",
        phone: "",
        email: "",
        date: "",
        message: ""
    });

    const [status, setStatus] = useState(null);
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: "" });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        let newErrors = {};

        Object.entries(form).forEach(([key, value]) => {
            if (!value.trim()) {
                newErrors[key] = t("contact.form.errorField");
            }
        });

        if (Object.keys(newErrors).length) {
            setErrors(newErrors);
            setStatus({ type: "error", msg: t("contact.form.error") });
            return;
        }

        const messageText = `
<b>📩 New Contact Request</b>

👤 Name: ${form.fullName}
🌍 Country: ${form.country}
📞 Phone: ${form.phone}
📧 Email: ${form.email}
📅 Date: ${form.date}
💬 Message: ${form.message}
        `;

        try {
            const res = await fetch(
                `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        chat_id: CHAT_ID,
                        text: messageText,
                        parse_mode: "HTML"
                    })
                }
            );

            if (!res.ok) throw new Error();

            setStatus({ type: "success", msg: t("contact.form.success") });
            setForm({
                fullName: "",
                country: "",
                phone: "",
                email: "",
                date: "",
                message: ""
            });
        } catch {
            setStatus({ type: "error", msg: "❌ Error. Try again." });
        }
    };

    return (
        <section className="contact-section">
            <Helmet>
                <title>Adam Voyage — Contact</title>
                <meta
                    name="description"
                    content="Contact Adam Voyage to plan your unforgettable journey in Uzbekistan."
                />
            </Helmet>

            <div className="contact-wrapper">

                {/* LEFT */}
                <div className="contact-left">

                    <div className="personal-card">
                        <div className="personal-avatar">AV</div>

                        <h3 className="personal-name">
                            Adhamjon
                            <span className="verified-badge">✔ Verified</span>
                        </h3>

                        <span className="personal-role">
                            Founder • Local Tour Guide
                        </span>

                        <p className="personal-tagline">
                            Authentic journeys across Uzbekistan, guided by locals.
                        </p>

                        <div className="personal-stats">
                            <div><strong>5+</strong><span>Years</span></div>
                            <div><strong>120+</strong><span>Guests</span></div>
                            <div><strong>4.9★</strong><span>Rating</span></div>
                        </div>

                        <div className="languages">
                            🌍 Languages:
                            <span>🇬🇧 EN</span>
                            <span>🇫🇷 FR</span>
                            <span>🇷🇺 RU</span>
                        </div>

                        <div className="response-badge">
                            ⚡ Replies within 5 minutes
                        </div>

                        <a
                            href="https://wa.me/998900000000"
                            target="_blank"
                            rel="noreferrer"
                            className="personal-cta"
                        >
                            Chat on WhatsApp
                        </a>

                        <div className="trust-note">
                            🔒 Your information is private & secure
                        </div>
                    </div>

                    <div className="contact-info">
                        <div><FaPhoneAlt /> +998 90 000 00 00</div>
                        <div><FaEnvelope /> info@adamvoyage.com</div>
                        <div><FaMapMarkerAlt /> Samarkand, Uzbekistan</div>
                    </div>

                    <div className="social-icons">
                        <a href="#"><FaInstagram /></a>
                        <a href="#"><FaWhatsapp /></a>
                        <a href="#"><FaFacebookF /></a>
                        <a href="#"><FaTelegramPlane /></a>
                        <a href="#"><FaEnvelope /></a>
                    </div>

                    <div className="social-proof">
                        “Best guide in Uzbekistan. Highly recommended!”
                        <span>— John, UK 🇬🇧</span>
                    </div>

                </div>

                {/* RIGHT */}
                <form className="contact-form" onSubmit={handleSubmit}>
                    {status && (
                        <div className={`form-status ${status.type}`}>
                            {status.msg}
                        </div>
                    )}

                    {["fullName", "country", "phone", "email", "date", "message"].map((field) => (
                        <label key={field}>
                            {t(`contact.form.${field}`)}

                            {field !== "message" ? (
                                <input
                                    type={
                                        field === "email" ? "email" :
                                            field === "phone" ? "tel" :
                                                field === "date" ? "date" : "text"
                                    }
                                    name={field}
                                    value={form[field]}
                                    onChange={handleChange}
                                    className={errors[field] ? "error" : ""}
                                />
                            ) : (
                                <textarea
                                    name={field}
                                    value={form[field]}
                                    onChange={handleChange}
                                    className={errors[field] ? "error" : ""}
                                />
                            )}

                            {errors[field] && (
                                <span className="error-text">{errors[field]}</span>
                            )}
                        </label>
                    ))}

                    <button type="submit" className="submit-btn">
                        {t("contact.form.submit")}
                    </button>
                </form>

            </div>
            {/* TESTIMONIALS */}
            <div className="testimonials-grid">

                <div className="testimonial-box">
                    <p>
                        “Perfect organization and very clear communication.
                        We felt comfortable and safe during the whole journey.
                        Truly a premium experience.”
                    </p>

                    <div className="stars">★★★★★</div>

                    <div className="author">
                        Claire — France 🇫🇷
                    </div>
                </div>

                <div className="testimonial-box">
                    <p>
                        “Everything was planned professionally.
                        Flexible schedule, deep cultural knowledge
                        and excellent local recommendations.”
                    </p>

                    <div className="stars">★★★★★</div>

                    <div className="author">
                        Markus — Germany 🇩🇪
                    </div>
                </div>

                <div className="testimonial-box">
                    <p>
                        “Very high level of service.
                        This was not a typical tourist tour,
                        but a real cultural experience.”
                    </p>

                    <div className="stars">★★★★★</div>

                    <div className="author">
                        James — United Kingdom 🇬🇧
                    </div>
                </div>

                <div className="testimonial-box">
                    <p>
                        “Excellent balance between comfort and authenticity.
                        Hotels, transport and food were perfectly chosen.”
                    </p>

                    <div className="stars">★★★★★</div>

                    <div className="author">
                        Sophie — Switzerland 🇨🇭
                    </div>
                </div>

                <div className="testimonial-box">
                    <p>
                        “Everything felt smooth and stress-free.
                        We always knew what was next and why.
                        Highly professional approach.”
                    </p>

                    <div className="stars">★★★★★</div>

                    <div className="author">
                        Piotr — Poland 🇵🇱
                    </div>
                </div>

                <div className="testimonial-box">
                    <p>
                        “Very kind and attentive guide.
                        The explanations helped us understand
                        Uzbek history and culture deeply.”
                    </p>

                    <div className="stars">★★★★★</div>

                    <div className="author">
                        Yuki — Japan 🇯🇵
                    </div>
                </div>

                <div className="testimonial-box">
                    <p>
                        “Professional service with personal attention.
                        Everything was adapted to our pace and interests.”
                    </p>

                    <div className="stars">★★★★★</div>

                    <div className="author">
                        Min-seo — South Korea 🇰🇷
                    </div>
                </div>

                <div className="testimonial-box">
                    <p>
                        “From planning to the last day, everything was clear.
                        A reliable company for international travelers.”
                    </p>

                    <div className="stars">★★★★★</div>

                    <div className="author">
                        Li Wei — China 🇨🇳
                    </div>
                </div>

                <div className="testimonial-box">
                    <p>
                        "Impeccable organization from the first contact to the last day. We felt respected, listened to, and genuinely welcomed. This was not just a trip, but a real human experience.",
                    </p>

                    <div className="stars">★★★★★</div>

                    <div className="author">
                        "Antoine — France 🇫🇷"
                    </div>
                </div>

                <div className="testimonial-box">
                    <p>
                        "Everything was handled with professionalism and elegance. Clear planning, excellent timing, and deep cultural insight. One of the best travel experiences we have ever had.",
                    </p>

                    <div className="stars">★★★★★</div>

                    <div className="author">
                        "Hannah — Sweden 🇸🇪"
                    </div>
                </div>

            </div>


        </section>
    );
};

export default Contact;
