import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BsCalendarCheck } from 'react-icons/bs'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import { baseUrl } from '../../Url';
import axios from 'axios';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


const Blog = () => {

    const [blogList, setBlogList] = useState([]);

    useEffect(() => {

        axios.get(baseUrl+'/blog/list').then(({data})=>{
            setBlogList(data.data);

        })

    },[])


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

                                                    {

                                                        blogList.map((item)=>(

                                                            <SwiperSlide>

                                                                <div className="BlogSliderItem">

                                                                <div className="img">
                                                                    <img src= {`https://sitcdev.xyz/${item.image}`} alt="" />
                                                                    <div className="overlay">
                                                                        <h6>{item.category}</h6>
                                                                    </div>
                                                                </div>

                                                                <div className="text">

                                                                    <div className="Callender d_flex">
                                                                        <BsCalendarCheck/>
                                                                        <span>{item.created_at ? item.created_at.slice(0,10) : ''}</span>
                                                                    </div>

                                                                    <h6> {item.title ? item.title.slice(0,70) : ''}</h6>

                                                                </div>

                                                                <Link to={`/blog-details/${item.id}`} className='bg'>Read More</Link>

                                                                </div>

                                                            </SwiperSlide>

                                                        ))

                                                    }


                                                </Swiper>


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