import React from "react";
import "./About.css";
import { Helmet } from "react-helmet";

import img1 from "../photos/A_T.jpg";
import img2 from "../photos/bb.jpg";
import img3 from "../photos/observatoria.jpg";

const About = () => {
    return (
        <main className="about-page">
            <Helmet>
                <title>Adam Voyage — Biz haqimizda</title>
                <meta
                    name="description"
                    content="Adam Voyage — O‘zbekiston bo‘ylab individual va mazmunli sayohatlar"
                />
            </Helmet>

            <section className="about-section">
                {/* LEFT */}
                <div className="about-left">
                    <h1 className="about-title">🌍 Biz haqimizda</h1>

                    <p className="about-text">
                        <strong>ADAM VOYAGE</strong> — O‘zbekiston bo‘ylab yuqori sifatli,
                        individual va puxta rejalashtirilgan sayohatlar tashkil etuvchi
                        professional sayyohlik kompaniyasidir.
                        Biz uchun sayohat — bu shunchaki manzil emas,
                        balki <strong>inson xotirasida uzoq saqlanib qoladigan mazmunli tajriba</strong>.
                    </p>

                    <p className="about-text">
                        ✨ Har bir safar aniq maqsad asosida ishlab chiqiladi.
                        Sayohatchining qiziqishlari, vaqti va kutilmalariga mos
                        <strong>moslashtirilgan dastur</strong> yaratiladi.
                        Tayyor shablonlardan foydalanilmaydi —
                        har bir marshrut o‘ziga xos va betakrordir.
                    </p>

                    <p className="about-text">
                        🤝 Biz faoliyatimizda ishonch va mas’uliyatni ustuvor deb bilamiz.
                        Shu sababli barcha jarayonlar shaffof,
                        tushunarli va professional tarzda olib boriladi.
                        Sayohatchining o‘zini xotirjam va ishonchli his qilishi
                        biz uchun eng muhim mezondir.
                    </p>

                    <p className="about-text">
                        🏛 ADAM VOYAGE bilan siz O‘zbekistonni
                        oddiy tomoshabin sifatida emas,
                        balki <strong>mahalliy muhitni his etgan holda</strong> kashf etasiz.
                        Tarixiy obidalar, buyuk ajdodlar merosi
                        va me’moriy yodgorliklar siz uchun
                        jonli va mazmunli hikoyaga aylanadi.
                    </p>

                    <p className="about-text">
                        🌿 Sayohatlarimiz faqat shaharlar bilan cheklanib qolmaydi.
                        Tog‘ manzaralari, sokin qishloq hayoti
                        va mahalliy aholi bilan muloqot
                        safaringizni yanada boy va unutilmas qiladi.
                    </p>

                    <h2 className="about-heading">🚀 Nima uchun aynan ADAM VOYAGE?</h2>

                    <ul className="about-list">
                        <li>🧭 Har bir mijoz uchun individual va moslashtirilgan marshrutlar</li>
                        <li>🏛 Tarix, madaniyat va milliy merosga chuqur yondashuv</li>
                        <li>🏞 Tabiat qo‘ynida sokin va mazmunli sayohatlar</li>
                        <li>🐪 Noodatiy va esda qolarli sarguzashtlar</li>
                        <li>💬 Sayohat davomida doimiy aloqa va to‘liq qo‘llab-quvvatlash</li>
                    </ul>

                    <p className="about-text">
                        🌐 ADAM VOYAGE chet elda faoliyat yuritayotgan
                        sayyohlik kompaniyalari bilan hamkorlikni
                        strategik yo‘nalish sifatida rivojlantiradi.
                        Xalqaro hamkorlar bilan ishlash orqali
                        biz zamonaviy tajribalarni joriy etib,
                        xizmatlar sifatini doimiy ravishda oshirib boramiz.
                    </p>

                    <p className="about-text">
                        ✈️ Agar siz xorijda faoliyat yuritayotgan
                        sayyohlik kompaniyasi bo‘lsangiz yoki
                        ishonchli xalqaro hamkor izlayotgan bo‘lsangiz,
                        biz siz bilan hamkorlikni yo‘lga qo‘yishdan mamnunmiz.
                    </p>

                    <button
                        className="about-gold-btn"
                        onClick={() => window.location.href = "/contact"}
                    >
                        🤝 Hamkorlik uchun biz bilan bog‘laning
                    </button>

                    <p className="about-text">
                        🎯 Bizning asosiy maqsadimiz —
                        har bir sayohatchida yana qaytish istagini uyg‘otadigan,
                        chuqur va samimiy tajriba yaratishdir.
                        ADAM VOYAGE bilan har bir safar
                        chinakam qoniqish va yorqin xotiralar bilan yakunlanadi.
                    </p>

                    <p className="about-text">
                        🌟 ADAM VOYAGE bilan sayohat —
                        puxta o‘ylangan reja,
                        aniqlik bilan tashkil etilgan jarayon
                        va yuqori sifat natijasidir.
                    </p>

                    <p className="about-text">
                        ✨ Biz sizga O‘zbekistonni
                        boshqalardan farqli tarzda,
                        chuqur mazmun va samimiy muhitda
                        kashf etish imkoniyatini taqdim etamiz.
                    </p>

                    <p className="about-text">
                        ADAM VOYAGE uzoq muddatli va barqaror hamkorlikka
                        asoslangan professional munosabatlarni rivojlantiradi.
                        Biz mahalliy va xorijiy turizm vakillari bilan
                        o‘zaro manfaatli, ochiq va ishonchli aloqalar
                        o‘rnatishni muhim deb bilamiz.
                        Aynan shu yondashuv xizmatlarimiz sifatini
                        doimiy ravishda yuqori darajada saqlashga xizmat qiladi.
                    </p>

                </div>


                {/* RIGHT */}
                <div className="about-right">
                    <div className="about-image-card">
                        <img src={img1} alt="Amir Temur maqbarasi (Gur-e Amir) — Samarqand" />
                        <p className="about-image-caption">
                            Amir Temur maqbarasi (Gur-e Amir) — Samarqand
                        </p>
                    </div>

                    <div className="about-image-card">
                        <img src={img2} alt="Bibi-Xonim masjidi — Samarqand" />
                        <p className="about-image-caption">
                            Bibi-Xonim masjidi — Samarqand
                        </p>
                    </div>

                    <div className="about-image-card">
                        <img src={img3} alt="Mirzo Ulug‘bek rasadxonasi — Samarqand" />
                        <p className="about-image-caption">
                            Mirzo Ulug‘bek rasadxonasi — Samarqand
                        </p>
                    </div>
                </div>
            </section>
        </main >
    );
};

export default About;
