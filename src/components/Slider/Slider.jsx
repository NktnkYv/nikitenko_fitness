import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import '/src/styles/components/slider.scss';
import React, {useState} from "react";

export default function Slider() {
    const [items    ] = useState([
        { image: 'client-1'},
        { image: 'client-2'},
        { image: 'client-3'},
        { image: 'client-4'},
        { image: 'client-5'},
        { image: 'client-6'},
        { image: 'client-7'},
    ]);

    return (
        <section className="clients p-80">
            <div className="clients__header">
                <p>You can more</p>
                <h2 className="title-text">Clients</h2>
            </div>

            <div className="container-fluid">
            <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-10">
                        <Swiper
                            modules={[Navigation, Pagination, Autoplay]}
                            spaceBetween={24}
                            slidesPerView={3}
                            autoplay={{
                                delay: 2000,
                                disableOnInteraction: false,
                            }}
                            loop={true}
                            speed={800}
                            navigation
                            pagination={{clickable: true}}
                        >
                            {items.map(item => (
                                <SwiperSlide>
                                    <img src={`/images/clients/${item.image}.jpg`} alt="1"/>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>

            </div>
        </section>
    );
}