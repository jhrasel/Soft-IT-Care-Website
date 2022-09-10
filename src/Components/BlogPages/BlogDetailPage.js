import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BsCalendarCheck } from 'react-icons/bs'
import {FaFacebookF, FaLinkedinIn} from 'react-icons/fa';
import {AiOutlineInstagram, AiFillYoutube, AiOutlineBars} from 'react-icons/ai';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


const BlogDetailPage = () => {


    return (

        <>
        

            <section className='BlogDetailPage'>

                <Container>

                    <Row className='d_flex'>

                        <Col xs={12} lg={12}>
                            
                            <div className="BlogDetailPageContent">

                                
                                <div className="Header">

                                    <h2>Nunc tincidunt dolor et sollicitudin et tincidunt bibendum</h2>
                                    
                                    <div className="CategoryTime d_flex">

                                        <h6>Technology</h6>

                                        <div className="Callender d_flex">
                                            <BsCalendarCheck/>
                                            <span>July 25, 2022</span>
                                        </div>

                                    </div>

                                </div>

                                <div className="img">
                                    <img src="assets/images/blog_single.png" alt="" />
                                </div>

                                <div className="description">
                                    
                                    <p>Soft IT Care is a Web design and development service providing company in Bangladesh. It has versatile functions. It is the only Best Web Design and Development Company which has all in one. We specialize in Software Development, e-Commerce, Graphic Design, Marketing and SEO, Website Security, Mobile Application Development, and the list goes on.</p>

                                    <p>The projects we provide are unique and creative. From the very beginning to till now, we have been working in this field with the highest success and client satisfaction. Our team is highly expert and we use digital technology to provide services.</p>

                                    <p>Soft IT Care is a Web design and development service providing company in Bangladesh. It has versatile functions. It is the only Best Web Design and Development Company which has all in one. We specialize in Software Development, e-Commerce, Graphic Design, Marketing and SEO, Website Security, Mobile Application Development, and the list goes on.</p>

                                    <p>The projects we provide are unique and creative. From the very beginning to till now, we have been working in this field with the highest success and client satisfaction. Our team is highly expert and we use digital technology to provide services.</p>

                                </div>

                                <h2>Share This On <span>Social Media</span></h2>

                                 <div className="SocialIcon d_flex">

                                    <div className="svg fb">
                                        <Link to=''><FaFacebookF /></Link>
                                    </div>

                                    <div className="svg instagram">
                                        <Link to=''><AiOutlineInstagram /></Link>
                                    </div>

                                    <div className="svg linkdin">
                                        <Link to=''><FaLinkedinIn /></Link>
                                    </div>

                                    <div className="svg youtube">
                                        <Link to=''><AiFillYoutube /></Link>
                                    </div>

                                </div>

                                <div className="BlogContent">

                                    {/* Blog Pat */}
                                    <div className="header">

                                        <h2>Related <span>Blogs</span></h2>

                                        <p>View our all services & details of our digital solutions</p>

                                    </div>

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
                                                                <div className="overlay">
                                                                    <h6>Technology</h6>
                                                                </div>
                                                            </div>

                                                            <div className="text">

                                                                <div className="Callender d_flex">
                                                                    <BsCalendarCheck/>
                                                                    <span>July 25, 2022</span>
                                                                </div>

                                                                <h6>Nunc tincidunt dolor et sollicitudin et tincidunt bibendum.....</h6>

                                                            </div>

                                                            <Link to='/blog-details' className='bg'>Read More</Link>

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


                            </div>

                        </Col>

                    </Row>
                    
                </Container>

                <div className="section_gaps"></div>

            </section>


        </>


    )


}

export default BlogDetailPage