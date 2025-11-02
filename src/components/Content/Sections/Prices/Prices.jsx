import React, { useState } from 'react';

import '/src/styles/components/sections/prices.scss';

function Prices() {
    const [items    ] = useState([
        { delay: 300, name: 'Single Training', price: '10', services: [
                {name: "1 hour individual training",
                    available: true},
                {name: "Personal trainings plan creation", available: true},
                {name: "Meal and diet plan creation", available: false},
                {name: "Free support and advice", available: false},
                {name: "Health monitoring", available: false}]
        },
        { delay: 600, name: 'Weekly', price: '30',
            services: [
                {name: "3 hour individual training",
                    available: true},
                {name: "Personal trainings plan creation", available: true},
                {name: "Meal and diet plan creation", available: true},
                {name: "Free support and advice", available: false},
                {name: "Health monitoring", available: false}]
        },
        { delay: 900, name: 'Month', price: '120',
            services: [
                {name: "12 hour individual training",
                    available: true},
                {name: "Personal trainings plan creation", available: true},
                {name: "Meal and diet plan creation", available: true},
                {name: "Free support and advice", available: true},
                {name: "Health monitoring", available: true}]
        },
        { delay: 1200, name: 'Online', price: '60',
            services: [
                {name: "Online training support",
                    available: true},
                {name: "Personal trainings plan creation", available: true},
                {name: "Meal and diet plan creation", available: true},
                {name: "Free support and advice", available: true},
                {name: "Health monitoring", available: true}]},
    ]);

    return (
        <section className="prices p-80">
            <div className="prices__header">
                <p>Training prices</p>
                <h2 className="title-text">Book Your Trainings</h2>
            </div>
            <div className="container-fluid prices__cards">
                <div className="row row-gap-4">
                    {items.map(item => (
                        <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-6" data-aos="flip-left" data-aos-delay={item.delay}>
                            <div className="prices-card">
                                <div className="prices-card__header">
                                    <p> {item.name}</p>
                                    <h1> {item.price}<span>$</span></h1>
                                </div>
                                <ul>
                                    {item.services.map(item => (
                                        <li>
                                            {item.available ? <i className="bi bi-check2"></i> :
                                                <i className="bi bi-x"></i>}
                                            <span>{item.name}</span>
                                        </li>
                                    ))}
                                </ul>
                                <button className="book-now">Book now</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )


}

export default Prices