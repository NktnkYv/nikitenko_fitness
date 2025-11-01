import React, {useState} from "react";

import '/src/styles/components/sections/reviews.scss';

function Reviews() {
    const [items    ] = useState([
        { name: 'Vadym', message: 'I’m a professional coach myself, but I believe that every coach who wants to grow and evolve needs a mentor. For me, that person is Yevhen. Together we prepare for my competitions, and through his guidance, I continue to develop — both physically and mentally.', delay: 300},
        { name: 'Dmitrii', message: 'Yevhen and I have been training together for over four years, achieving numerous podium finishes and victories at various competitions. At the moment, we’ve wrapped up our performances on the national stage and are preparing to make our debut on the world level.', delay: 600},
        { name: 'Yaroslav', message: 'When I started training with Yevhen two years ago, I made great progress and soon began coaching others myself. Now I’m preparing for future competitions, improving my form, and striving to get better every single day.', delay: 900},
        { name: 'Kael', message: 'I came to New Zealand and immediately noticed coach Yevhen. After seeing the impressive results of his athletes, I knew I wanted to train with him. It’s been three years now that we’ve been working together on improving my physique.', delay: 1200},
    ]);

    return (
        <section className="reviws p-80">
            <div className="reviews__header">
                <p>People says</p>
                <h2 className="title-text">Reviews</h2>
            </div>
            <div className="container-fluid reviews__cards">
                <div className="row row-gap-4 justify-content-center">
                    <div className="col-md-10 col-lg-10 d-flex gap-4">
                        {items.map(item => (
                            <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-6" data-aos="flip-left"
                                 data-aos-delay={item.delay}>
                                <div className="review-card">
                                    <img src={`/images/reviews/${item.name.toLocaleLowerCase()}.jpg`} alt="1"/>
                                    <div className="review-card__info">
                                        <p>{item.message}</p>
                                        <h4>{item.name}</h4>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
)
}

export default Reviews