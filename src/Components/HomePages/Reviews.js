import React, { useRef, useState } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


const Reviews = () => {


    return (

        <>
        
            <section className='Review'>

                <Container>

                    <Row>

                        <Col sm={12}>
                            
                            <div className="ReviewSlider">

                                <Swiper
                                    spaceBetween={30}
                                    slidesPerGroup={2}
                                    breakpoints={{
                                        999: {
                                            slidesPerView: 1,
                                            },
                                            // when window width is >= 768px
                                            1000: {
                                            slidesPerView: 2,
                                        },

                                        }}
                                    loop={true}
                                    loopFillGroupWithBlank={true}
                                    pagination={{
                                    clickable: true,
                                    }}
                                    navigation={true}
                                    modules={[Pagination, Navigation]}
                                    className="mySwiper"
                                >

                                    <SwiperSlide>

                                        <div className="ReviewSliderItem d_flex d_justify">

                                            <div className="img">
                                                
                                                <img src="assets/images/review-1.png" alt="" />

                                                <div className="ReviewSliderOverlay">
                                                    
                                                    <h3>Mr. James Smith</h3>
                                                    <p>Founder & CEO Online Tech Academy</p>

                                                </div>

                                            </div>
                                            
                                            <div className="text">
                                                <p><span>SoftITCare is on top of their game, go above and beyond,</span> and leave no stone un-turned when dealing with our many issues. We subscribed to their <span>web development service and later mobile app solutions.</span> And our business got boosted up with their service. And also they are good listener, that helped me get business solution.</p>
                                                <h6>We are a 100% satisfied customer of theirs.</h6>
                                            </div>

                                        </div>

                                    </SwiperSlide>

                                    <SwiperSlide>

                                        <div className="ReviewSliderItem d_flex d_justify">

                                            <div className="img">
                                                
                                                <img src="assets/images/review-2.png" alt="" />

                                                <div className="ReviewSliderOverlay">
                                                    
                                                    <h3>Mr. James Smith</h3>
                                                    <p>Founder & CEO Online Tech Academy</p>

                                                </div>

                                            </div>
                                            
                                            <div className="text">
                                                <p><span>SoftITCare is on top of their game, go above and beyond,</span> and leave no stone un-turned when dealing with our many issues. We subscribed to their <span>web development service and later mobile app solutions.</span> And our business got boosted up with their service. And also they are good listener, that helped me get business solution.</p>
                                                <h6>We are a 100% satisfied customer of theirs.</h6>
                                            </div>

                                        </div>

                                    </SwiperSlide>

                                    <SwiperSlide>

                                        <div className="ReviewSliderItem d_flex d_justify">

                                            <div className="img">
                                                
                                                <img src="assets/images/review-1.png" alt="" />

                                                <div className="ReviewSliderOverlay">
                                                    
                                                    <h3>Mr. James Smith</h3>
                                                    <p>Founder & CEO Online Tech Academy</p>

                                                </div>

                                            </div>
                                            
                                            <div className="text">
                                                <p><span>SoftITCare is on top of their game, go above and beyond,</span> and leave no stone un-turned when dealing with our many issues. We subscribed to their <span>web development service and later mobile app solutions.</span> And our business got boosted up with their service. And also they are good listener, that helped me get business solution.</p>
                                                <h6>We are a 100% satisfied customer of theirs.</h6>
                                            </div>

                                        </div>

                                    </SwiperSlide>

                                    <SwiperSlide>

                                        <div className="ReviewSliderItem d_flex d_justify">

                                            <div className="img">
                                                
                                                <img src="assets/images/review-2.png" alt="" />

                                                <div className="ReviewSliderOverlay">
                                                    
                                                    <h3>Mr. James Smith</h3>
                                                    <p>Founder & CEO Online Tech Academy</p>

                                                </div>

                                            </div>
                                            
                                            <div className="text">
                                                <p><span>SoftITCare is on top of their game, go above and beyond,</span> and leave no stone un-turned when dealing with our many issues. We subscribed to their <span>web development service and later mobile app solutions.</span> And our business got boosted up with their service. And also they are good listener, that helped me get business solution.</p>
                                                <h6>We are a 100% satisfied customer of theirs.</h6>
                                            </div>

                                        </div>

                                    </SwiperSlide>

                                </Swiper>

                            </div>

                        </Col>

                    </Row>    

                    
                </Container>

                <div className="section_gaps"></div>

            </section>

        </>
        
    )

}

export default Reviews