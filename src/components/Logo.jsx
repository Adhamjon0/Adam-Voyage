import "./Logo.css";
import logo from "../photos/logo_av.png";

export default function Logo() {
    return (
        <div className="logo-wrap">
            <img src={logo} alt="Adam Voyage logo" className="logo-img" />

            <div className="logo-text">
                <span className="logo-name">
                    Adam <span>Voyage</span>
                </span>
                <span className="logo-tagline">
                    Discover Uzbekistan with us
                </span>
            </div>
        </div>
    );
}
