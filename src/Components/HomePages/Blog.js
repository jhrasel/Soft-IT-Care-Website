import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BsCalendarCheck } from 'react-icons/bs'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


const Blog = () => {


    return (

        <>
        
            <section className='Blog'>

                    <Container>

                        <Row>

                            <Col xm={12} lg={6}>
                                
                                <div className="header">

                                    <h2>Our <span>Blogs</span></h2>

                                    <p>Check out our projects and portfolio here</p>

                                </div>

                            </Col>

                        </Row>   

                        <div className="BlogContent">

                            <Row>

                                <Col sm={12}>
                                    
                                    <div className="BlogSlider">

                                        <Swiper
                                            spaceBetween={30}
                                            slidesPerGroup={3}
                                            breakpoints={{
                                                650: {
                                                    slidesPerView: 1,
                                                },
                                                999: {
                                                    slidesPerView: 2,
                                                },
                                                1000: {
                                                    slidesPerView: 3,
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

                                                <div className="BlogSliderItem">

                                                    <div className="img">
                                                        <img src="assets/images/blog-1.png" alt="" />
                                                    </div>
                                                    
                                                    <div className="text">

                                                        <div className="Callender d_flex">
                                                            <BsCalendarCheck/>
                                                            <span>July 25, 2022</span>
                                                        </div>

                                                        <h6>Nunc tincidunt dolor et sollicitudin et tincidunt bibendum.....</h6>

                                                    </div>

                                                    <a href="" className='bg'>Read More</a>

                                                </div>

                                            </SwiperSlide>

                                            <SwiperSlide>

                                                <div className="BlogSliderItem">

                                                    <div className="img">
                                                        <img src="assets/images/blog-2.png" alt="" />
                                                    </div>
                                                    
                                                    <div className="text">

                                                        <div className="Callender d_flex">
                                                            <BsCalendarCheck/>
                                                            <span>July 25, 2022</span>
                                                        </div>

                                                        <h6>Nunc tincidunt dolor et sollicitudin et tincidunt bibendum.....</h6>

                                                    </div>

                                                    <a href="" className='bg'>Read More</a>

                                                </div>

                                            </SwiperSlide>

                                            <SwiperSlide>

                                                <div className="BlogSliderItem">

                                                    <div className="img">
                                                        <img src="assets/images/blog-3.png" alt="" />
                                                    </div>
                                                    
                                                    <div className="text">

                                                        <div className="Callender d_flex">
                                                            <BsCalendarCheck/>
                                                            <span>July 25, 2022</span>
                                                        </div>

                                                        <h6>Nunc tincidunt dolor et sollicitudin et tincidunt bibendum.....</h6>

                                                    </div>

                                                    <a href="" className='bg'>Read More</a>

                                                </div>

                                            </SwiperSlide>


                                        </Swiper>

                                    </div>

                                </Col>

                            </Row>     
                        
                        </div> 

                        
                    </Container>

                <div className="section_gaps"></div>

            </section>

        </>
        
    )


}

export default Blog