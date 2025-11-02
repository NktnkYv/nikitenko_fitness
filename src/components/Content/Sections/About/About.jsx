import '/src/styles/components/sections/about.scss';
import React, {useState} from "react";

function About() {
    const [items    ] = useState([
        { name: 'Championship of Chernihiv Region (Men’s Physique) 2017', icon: 'bi bi-1-circle', place: 1},
        { name: 'Championship of Ukraine (Men’s Physique) 2017', icon: 'bi bi-1-circle', place: 1},
        { name: 'Anniversary Cup of Ukraine (Men’s Physique) 2018', icon: 'bi bi-2-circle', place: 2},
        { name: 'Diamond Cup Warsaw (Men’s Physique) 2018', icon: 'bi bi-3-circle', place: 3},
        { name: 'Open Championship of Odesa Region (Men’s Physique) 2018', icon: 'bi bi-1-circle', place: 1},
        { name: 'Championship of Ukraine (Men’s Physique) 2018', icon: 'bi bi-3-circle', place: 3},
        { name: 'Kyiv Cup (Men’s Physique) 2019', icon: 'bi bi-1-circle', place: 1},
        { name: 'Cup of Ukraine (Men’s Physique) 2019', icon: 'bi bi-1-circle', place: 1},
        { name: 'European Championship (Men’s Physique) 2019', icon: 'bi bi-1-circle', place: 1},
        { name: 'Absolute Champion of Ukraine (Men’s Physique) 2019', icon: 'bi bi-1-circle', place: 1},
        { name: 'World Men’s Championship (UAE) (Men’s Physique) 2019 – Top 10', icon: 'bi-person-arms-up', place: 'other'},
        { name: 'Championship of Ukraine (Men’s Physique) 2020', icon: 'bi bi-1-circle', place: 1},
        { name: 'Arnold Classic Europe (Men’s Physique) 2021', icon: 'bi bi-2-circle', place: 2},
        { name: 'Evdikos Tournament (Men’s Physique) 2021', icon: 'bi bi-1-circle', place: 1},
        { name: 'Kharkiv Cup (Men’s Physique) 2021', icon: 'bi bi-1-circle', place: 1},
        { name: 'Championship of Ukraine (Men’s Physique) 2021', icon: 'bi bi-2-circle', place: 2},
        { name: 'World Championship (Men’s Physique) 2021', icon: 'bi bi-4-circle', place: 'other'},
        { name: 'Master of Sports of Ukraine of International Class', icon: 'bi bi-award', place: 'other'}
    ]);
    return (
        <section className="about p-80">
            <h1 className="title-text">About me</h1>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-8 about__me" data-aos="fade-right" data-aos-delay="300">
                        <h1> I’m Evgeniy Nikitenko, a certified fitness coach with over 12 years of experience.</h1>
                        <p>I help clients achieve their goals — from fat loss to muscle gain and overall body transformation.
                            I also specialize in athlete preparation for competitions and design custom programs tailored to each individual.</p>
                        <div className="about__awards">
                            <h1>Achievements:</h1>
                            <ul>
                                {items.map(item => (
                                    <li>
                                         <span className={'awards-' + item.place}>
                                            <i className={item.icon}></i>
                                        </span>
                                        <span className="awards-name">{item.name}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="col-4 about__image" data-aos="fade-left" data-aos-delay="300">
                        <img src={`${import.meta.env.BASE_URL}images/about-me.jpg`}/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About