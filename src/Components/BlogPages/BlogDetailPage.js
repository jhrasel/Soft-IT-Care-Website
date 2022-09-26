import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { BsCalendarCheck } from 'react-icons/bs'
import {FaFacebookF, FaLinkedinIn} from 'react-icons/fa';
import {AiOutlineInstagram, AiFillYoutube, AiOutlineBars} from 'react-icons/ai';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { baseUrl } from '../../Url';
import axios from 'axios';


const BlogDetailPage = () => {

    const{blog_id} = useParams();

    const [blogDetails, setBlogDetails] = useState([]);
    const [blogList, setBlogList] = useState([]);

    // blogDetails
    useEffect(() => {

        axios.get(baseUrl+`/blog/${blog_id}`).then(({data})=>{
            setBlogDetails(data.data);

        })

    },[])

    
    // blogList 
    useEffect(() => {

        axios.get(baseUrl+'/blog/list').then(({data})=>{
            setBlogList(data.data);

        })

    },[])


    return (

        <>
        

            <section className='BlogDetailPage'>

                <Container>

                    <Row className='d_flex'>

                        <Col xs={12} lg={12}>
                            
                            <div className="BlogDetailPageContent">

                                
                                <div className="Header">

                                    <h2>{blogDetails.title}</h2>
                                    
                                    <div className="CategoryTime d_flex">

                                        <h6>{blogDetails.category}</h6>

                                        <div className="Callender d_flex">
                                            <BsCalendarCheck/>
                                            <span>{blogDetails.created_at ? blogDetails.created_at.slice(0,10) : ''}</span>
                                        </div>

                                    </div>

                                </div>

                                <div className="img">
                                    <img src={`https://sitcdev.xyz/${blogDetails.thumbnail}`} alt="" />
                                </div>

                                <div className="description">

                                    <div dangerouslySetInnerHTML={{ __html: blogDetails.details }} />

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