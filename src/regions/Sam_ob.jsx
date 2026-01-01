import "./Sam_ob.css";

export default function Sam_ob() {
    return (
        <section className="heritage-section">

            <h2 className="heritage-title">
                Samarqandning tarixiy obidalari
            </h2>

            {/* Registon */}
            <article className="heritage-card">
                <div className="heritage-image">
                    {/* rasm keyin ulanadi */}
                </div>

                <div className="heritage-content">
                    <h3>Registon maydoni</h3>
                    <p>
                        Registon Samarqandning markazi bo‘lib, Ulug‘bek,
                        Sherdor va Tillakori madrasalaridan tashkil topgan
                        tarixiy majmuadir.
                    </p>
                </div>
            </article>

            {/* Go‘ri Amir */}
            <article className="heritage-card">
                <div className="heritage-image"></div>

                <div className="heritage-content">
                    <h3>Go‘ri Amir maqbarasi</h3>
                    <p>
                        Go‘ri Amir — Amir Temur va uning avlodlari dafn
                        etilgan mashhur maqbara bo‘lib, temuriylar
                        me’morchiligining durdonasidir.
                    </p>
                </div>
            </article>

            {/* Shohi Zinda */}
            <article className="heritage-card">
                <div className="heritage-image"></div>

                <div className="heritage-content">
                    <h3>Shohi Zinda majmuasi</h3>
                    <p>
                        Shohi Zinda — qadimiy maqbaralar majmuasi bo‘lib,
                        rang-barang koshinlari va muqaddasligi bilan mashhur.
                    </p>
                </div>
            </article>

            {/* Bibixonim */}
            <article className="heritage-card">
                <div className="heritage-image"></div>

                <div className="heritage-content">
                    <h3>Bibixonim masjidi</h3>
                    <p>
                        Bibixonim masjidi Amir Temur davrida qurilgan
                        bo‘lib, o‘z davrining eng ulkan masjidlaridan
                        biri hisoblanadi.
                    </p>
                </div>
            </article>

        </section>
    );
}
