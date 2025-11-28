import React, { useState } from 'react';
import './Contact.css';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import { FaInstagram, FaWhatsapp, FaFacebookF, FaTelegramPlane, FaEnvelope } from 'react-icons/fa';

const TELEGRAM_BOT_TOKEN = "8412702421:AAGLCClgQnB69xfsmg8ScusCAtsMhXjgkzg";
const CHAT_ID = "8419894563";

const Contact = () => {
    const { t } = useTranslation();

    const [form, setForm] = useState({
        fullName: '',
        country: '',
        phone: '',
        email: '',
        date: '',
        message: ''
    });

    const [status, setStatus] = useState(null);
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: '' });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        let newErrors = {};

        Object.entries(form).forEach(([key, value]) => {
            if (!value.trim()) {
                newErrors[key] = t('contact.form.errorField');
            }
        });

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            setStatus({ type: 'error', msg: t('contact.form.error') });
            return;
        }

        const messageText = `
<b>📝 Yangi kontakt formasi:</b>\n
👤 <b>Ism:</b> ${form.fullName}
🌍 <b>Davlat:</b> ${form.country}
📞 <b>Telefon:</b> ${form.phone}
📧 <b>Email:</b> ${form.email}
📅 <b>Sana:</b> ${form.date}
💬 <b>Xabar:</b> ${form.message}
        `;

        try {
            const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    chat_id: CHAT_ID,
                    text: messageText,
                    parse_mode: "HTML"
                })
            });

            if (response.ok) {
                setStatus({ type: 'success', msg: t('contact.form.success') });
                setForm({
                    fullName: '',
                    country: '',
                    phone: '',
                    email: '',
                    date: '',
                    message: ''
                });
            } else {
                throw new Error("Telegram API xatosi");
            }
        } catch (error) {
            console.error("Telegram error:", error);
            setStatus({ type: 'error', msg: "❌ Xatolik yuz berdi, qayta urinib ko‘ring." });
        }
    };

    return (
        <div className="contact-container">
            <Helmet>
                <title>SamTour — Contact Us</title>
                <meta
                    name="description"
                    content="Get in touch with SamTour for personalized travel planning in Uzbekistan. We are here to help you create unforgettable memories."
                />
            </Helmet>

            <div className="social-icons">
                <a href="https://instagram.com/__adhamjon18" target="_blank" rel="noreferrer">
                    <FaInstagram />
                </a>
                <a href="https://wa.me/998917077291" target="_blank" rel="noreferrer">
                    <FaWhatsapp />
                </a>
                <a href="https://www.facebook.com/gayrat.qilichev.9" target="_blank" rel="noreferrer">
                    <FaFacebookF />
                </a>
                <a href="https://t.me/the_adhamjon" target="_blank" rel="noreferrer">
                    <FaTelegramPlane />
                </a>
                <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=sodiqovadhamjon0@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ cursor: 'pointer' }}
                    className="social-icon1">
                    <FaEnvelope />
                </a>
            </div>

            <h1 className="contact-title">{t('contact.title')}</h1>
            <p className="contact-description">{t('contact.description')}</p>

            <form onSubmit={handleSubmit} className="contact-form">
                {status && (
                    <div className={`form-status ${status.type}`}>
                        {status.msg}
                    </div>
                )}

                {['fullName', 'country', 'phone', 'email', 'date', 'message'].map((field) => (
                    <label key={field}>
                        {t(`contact.form.${field}`)}
                        {field !== 'message' ? (
                            <input
                                type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : field === 'date' ? 'date' : 'text'}
                                name={field}
                                value={form[field]}
                                onChange={handleChange}
                                className={errors[field] ? 'error' : ''}
                            />
                        ) : (
                            <textarea
                                name={field}
                                value={form[field]}
                                onChange={handleChange}
                                placeholder={t('contact.form.message_placeholder')}
                                className={errors[field] ? 'error' : ''}
                            />
                        )}
                        {errors[field] && <span className="error-text">{errors[field]}</span>}
                    </label>
                ))}

                <button type="submit" className="submit-btn">
                    {t('contact.form.submit')}
                </button>
            </form>
        </div>
    );
};

export default Contact;
