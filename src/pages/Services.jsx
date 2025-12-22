import React from "react";
import "./Services.css";
import { Helmet } from "react-helmet";
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

import { useNavigate } from "react-router-dom";



const Services = () => {

    const navigate = useNavigate();
    return (
        <main className="services-page">
            <Helmet>
                <title>Adam Voyage — Xizmatlar</title>
                <meta
                    name="description"
                    content="Adam Voyage sayyohlik kompaniyasining professional xizmatlari"
                />
            </Helmet>

            <section className="services-section">
                {/* LEFT — SERVICES */}
                <div className="services-left">
                    <h1 className="services-title">🧭 Bizning xizmatlarimiz</h1>

                    <p className="services-text">
                        <strong>ADAM VOYAGE</strong> — sayohatni rejalashtirishdan tortib,
                        safarning muvaffaqiyatli yakunigacha bo‘lgan
                        barcha jarayonlarni puxta va mas’uliyat bilan
                        tashkil etuvchi professional sayyohlik kompaniyasidir.
                        Biz har bir xizmatimizni sayohatchining
                        qulayligi, xavfsizligi va yuqori darajadagi
                        qoniqishini ta’minlash asosida shakllantiramiz.
                    </p>

                    <p className="services-text">
                        Kompaniyamiz faoliyatida tayyor va andozaviy
                        paketlardan foydalanilmaydi.
                        Har bir sayohat individual yondashuv,
                        aniq reja va puxta o‘ylangan tafsilotlar
                        asosida ishlab chiqiladi.
                        Biz uchun har bir safar — alohida mas’uliyat
                        va alohida e’tibor talab qiladigan jarayondir.
                    </p>

                    <div className="services-list">
                        <div className="service-item">
                            <h3>🧭 Individual sayohat dasturlari</h3>
                            <p>
                                Mijozning qiziqishlari, vaqti va imkoniyatlarini
                                inobatga olgan holda tuziladigan
                                maxsus va moslashtirilgan marshrutlar.
                            </p>
                        </div>

                        <div className="service-item">
                            <h3>🏛 Tarixiy va madaniy sayohatlar</h3>
                            <p>
                                O‘zbekistonning boy tarixiy merosi,
                                me’moriy yodgorliklari va
                                milliy qadriyatlari bilan chuqur tanishuv.
                            </p>
                        </div>

                        <div className="service-item">
                            <h3>🏞 Tabiat va eko-turizm yo‘nalishlari</h3>
                            <p>
                                Tog‘lar, milliy bog‘lar, tabiiy maskanlar
                                va sokin muhitda hordiq chiqarishga
                                mo‘ljallangan sayohatlar.
                            </p>
                        </div>

                        <div className="service-item">
                            <h3>🐪 Sarguzasht va faol turizm</h3>
                            <p>
                                Cho‘l safari, trekking, ot minish,
                                tuyada sayr va noodatiy tajribalarni
                                o‘z ichiga olgan yo‘nalishlar.
                            </p>
                        </div>

                        <div className="service-item">
                            <h3>🏨 Mehmonxona va joylashtirish xizmati</h3>
                            <p>
                                Turli toifadagi mehmonxonalar,
                                mehmon uylari va milliy uslubdagi
                                joylashtirish maskanlarini tanlash va bron qilish.
                            </p>
                        </div>

                        <div className="service-item">
                            <h3>🚗 Transport va transfer xizmatlari</h3>
                            <p>
                                Aeroportdan kutib olish,
                                shaharlararo qulay va xavfsiz
                                transport bilan ta’minlash.
                            </p>
                        </div>

                        <div className="service-item">
                            <h3>🗺 Professional gid va tarjimon xizmati</h3>
                            <p>
                                Tajribali, malakali va chet tillarni
                                mukammal biladigan gidlar hamrohligida sayohat.
                            </p>
                        </div>

                        <div className="service-item">
                            <h3>🍽 Milliy gastronomik yo‘nalishlar</h3>
                            <p>
                                O‘zbek milliy taomlari, mahalliy
                                oshxona an’analari va gastronomik
                                tajribalarni o‘z ichiga olgan turlar.
                            </p>
                        </div>

                        <div className="service-item">
                            <h3>🎭 Madaniy tadbirlar va festivallar</h3>
                            <p>
                                Mahalliy bayramlar, festival va
                                madaniy tadbirlarda ishtirok etish
                                imkoniyatini taqdim etuvchi dasturlar.
                            </p>
                        </div>

                        <div className="service-item">
                            <h3>🤝 To‘liq tashkiliy hamrohlik</h3>
                            <p>
                                Sayohat davomida doimiy maslahat,
                                tashkiliy yordam va uzluksiz
                                aloqa orqali to‘liq qo‘llab-quvvatlash.
                            </p>
                        </div>

                        <div className="service-item">
                            <h3>🌐 Xalqaro hamkorlik asosidagi xizmatlar</h3>
                            <p>
                                Chet el sayyohlik kompaniyalari bilan
                                hamkorlikda tashkil etiladigan
                                yuqori darajadagi professional sayohatlar.
                            </p>
                        </div>
                    </div>

                    <p className="services-text">
                        Bizning asosiy maqsadimiz — har bir sayohatchi
                        uchun puxta rejalashtirilgan, qulay va
                        mukammal tashkil etilgan safar yaratishdir.
                        <strong>ADAM VOYAGE</strong> bilan sayohat —
                        bu ishonchli tanlov va esda qolarli natijadir.
                    </p>

                    <button
                        className="about-gold-btn"
                        onClick={() => window.location.href = "/contact"}
                    >
                        🤝 Hamkorlik uchun biz bilan bog‘laning
                    </button>
                </div>



                {/* RIGHT — REGIONS */}
                <div className="regions-grid">
                    <div
                        className="region-card"
                        onClick={() => navigate("/samarqand")}
                    >
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



            </section>
        </main>
    );
};

export default Services;
