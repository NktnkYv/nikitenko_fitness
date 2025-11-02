import '/src/styles/components/sections/motivation.scss';

function Motivation() {
    return (
        <section className="motivation">

            <div className="container-fluid">
                <div className="motivation__heading">
                    <h1 data-aos="fade-right" data-aos-delay="300">Train smarter. Eat better.
                        <br/>Live stronger!</h1>
                    <p data-aos="fade-right" data-aos-delay="600">Join personalized coaching that transforms your body and mindset.
                        <br/>Results you can see — and feel.</p>
                </div>
                <div className="row row-gap-4 motivation__content">
                    <div className="col-xl-4 col-lg-4 col-md-7 content-item" data-aos="fade-right" data-aos-delay="900">
                        <div className="content-item__image">
                            <img src={`${import.meta.env.BASE_URL}images/dumbbell.png`}/>
                        </div>
                        <div className="content-item__info">
                            <h4>Build power with precision.</h4>
                            <p>Custom strength plans to increase muscle, boost performance, and keep you
                                injury-free.</p>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-7 content-item" data-aos="fade-right" data-aos-delay="1200">
                        <div className="content-item__image">
                            <img src={`${import.meta.env.BASE_URL}images/dinner.png`}/>
                        </div>
                        <div className="content-item__info">
                            <h4>Cardio that works.</h4>
                            <p>Dynamic training sessions to burn fat, sharpen endurance, and keep your energy high all
                                day.</p>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-7 content-item" data-aos="fade-right" data-aos-delay="1500">
                        <div className="content-item__image">
                            <img src={`${import.meta.env.BASE_URL}images/dinner.png`}/>
                        </div>
                        <div className="content-item__info">
                            <h4>Fuel your progress. Recover right.</h4>
                            <p>Smart nutrition and recovery guidance that maximizes every workout and keeps you in peak
                                shape.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Motivation