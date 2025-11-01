import '/src/styles/components/header.scss';
import React from "react";
import MapComponent from "../Map/Map.jsx";

function Header() {
    return (
        <header className="header">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-9 col-lg-9">
                        <div className="header__info">
                            <h1 data-aos="fade-right" data-aos-delay="300">Personal training and online coaching.</h1>
                            <p data-aos="fade-right" data-aos-delay="900">Transform your body.</p>
                            <button className="book-now" data-aos="fade-right" data-aos-delay="1800">Start Training</button>
                        </div>
                    </div>
                    <div className="col-md-3 col-lg-3" data-aos="fade-left" data-aos-delay="2700">
                        <div className="header__map">
                            <MapComponent/>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header