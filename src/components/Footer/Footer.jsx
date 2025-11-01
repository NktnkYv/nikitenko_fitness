import '/src/styles/components/footer.scss';

import React from "react";

function Footer() {
    return (
        <footer className="footer p-80">
            <h1 className="title-text">Contact me</h1>
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-xl-10 row-gap-4">
                        <div className="row row-gap-4 align-items-center footer-contacts" >
                            <div className="col-xl-6 col-lg-6" data-aos="fade-right" data-aos-delay="300">
                                <div className="contact-info">
                                    <div className="heading">
                                        <h4>Let’s Build Your Best Shape!</h4>
                                        <p>Got questions about training, nutrition, or programs? Reach out — I’m here to
                                            help you start
                                            strong and stay consistent. Expect a reply within 24 hours on weekdays!</p>
                                    </div>
                                    <div className="info">
                                        <div className="info-item">
                                            <i className="bi bi-geo-alt"></i>
                                            <div>
                                                <h6>Address:</h6>
                                                <a href="https://maps.app.goo.gl/6Db97Jo74ee7wiPe7"> 55
                                                    Myloradovychiv St., Chernihiv, Chernihiv
                                                    Oblast, Ukraine </a>
                                            </div>

                                        </div>
                                        <div className="info-item">
                                            <i className="bi bi-telephone"></i>
                                            <div>
                                                <h6>Phone:</h6>
                                                <a href="tel:+380937878289"> +380 93 787 82 89</a>
                                            </div>

                                        </div>
                                        <div className="info-item">
                                            <i className="bi bi-envelope"></i>
                                            <div>
                                                <h6>Email:</h6>
                                                <a href="mailto:nikitenkoyevgeniy@gmail.com">nikitenkoyevgeniy@gmail.com</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6" data-aos="flip-right" data-aos-delay="300">
                                <div className="contact-me">
                                    <form method="post" className="contact-form" noValidate="novalidate">
                                        <div className="form-wrapper">
                                            <h4>Let’s Start Your Fitness Journey!</h4>
                                            <p>Got a question about training, nutrition, or programs?
                                                Send me a message — I’ll help you take the first step today.</p>
                                            <div className="row row-gap-3">
                                                <div className="col-md-6">
                                                    <div className="input-block">
                                                        <input type="text" name="name" id="firstName"
                                                               className="form-control"
                                                               required=""
                                                               placeholder="First Name"/>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="input-block">
                                                        <input type="email" name="email" id="e-mail"
                                                               className="form-control"
                                                               required=""
                                                               placeholder="Your Email"/>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="input-block">
                                                        <input type="tel" name="phone" id="phone"
                                                               className="form-control"
                                                               required=""
                                                               placeholder="Phone"/>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="input-block">
                                    <textarea name="message" id="comments" className="form-control"
                                              placeholder="Write Your Message"></textarea>
                                                    </div>
                                                </div>
                                            </div>
                                            <button type="submit">
                                                Submit
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="row align-items-center footer-socials">
                            <div className="col-xl-6 col-lg-6">
                                <p>© 2025 Evgeniy Nikitenko. All rights reserved.</p>
                            </div>
                            <div className="col-xl-6 col-lg-6">
                                <ul className="social-links">
                                    <li>
                                        <a href="https://www.instagram.com/nktnk.yv/">
                                            <i className="bi bi-instagram"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://t.me/Nktnk_j">
                                            <i className="bi bi-telegram"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.facebook.com/NikitenkoEvgeniy">
                                            <i className="bi bi-facebook"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <i className="bi bi-messenger"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer