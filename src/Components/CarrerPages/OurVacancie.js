import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { baseUrl } from '../../Url';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';




const OurVacancie = () => {

    let [isLoad, setIsLoad] = useState(true);

    const [jobList, setJobList] = useState([]);

    useEffect(() => {

        axios.get(baseUrl+'/job/list').then(({data})=>{

            setJobList(data.data);
            setIsLoad(false)
        })

    },[]);

   


    return (
        

        <>
        
            <section className='OurVacancie'>

                <div className="section_gaps"></div>

                <Container>

                    <Row>
                        <Col sm={12}>
                            <div className="header">
                                <h2>Our <span>Vacancies</span></h2>
                                <p>View our all vacancies & details of our company</p>
                            </div>
                        </Col>
                    </Row>

                    {/* Content */}
                    <div className="OurVacancieContent">

                        <SkeletonTheme>

                            {

                                isLoad
                                ?
                                <>
                                
                                    <Row>

                                        {

                                            jobList.map((item, key)=>(

                                                <Col sm={4} key={key}>

                                                    <div className="OurVacancieItem">
                                                        
                                                        <div className="text">
                                                            <h3><Skeleton/></h3>
                                                            <ul>
                                                                <li> <Skeleton/></li>
                                                                <li> <Skeleton/></li>
                                                            </ul>
                                                        </div>

                                                        <div className="view_details">
                                                            <Link to='' className='bg'><Skeleton/></Link>
                                                        </div>

                                                    </div>

                                                </Col>

                                            ))

                                        }



                                    </Row>

                                </>
                                :
                                <>
                                
                                    <Row>

                                        {

                                            jobList.map((item, key)=>(

                                                <Col sm={4} key={key}>

                                                    <div className="OurVacancieItem">
                                                        
                                                        <div className="text">
                                                            <h3>{item.title ? item.title.slice(0,75) : ''}</h3>
                                                            <ul>
                                                                <li> <span>Salary:</span> BDT {item.min_salary} - BDT {item.max_salary}</li>
                                                                <li> <span>Experience:</span> {item.experience}</li>
                                                            </ul>
                                                        </div>

                                                        <div className="view_details">
                                                            <Link to={`/carrer-details/${item.id}`} className='bg'>View Details</Link>
                                                        </div>

                                                    </div>

                                                </Col>

                                            ))

                                        }



                                    </Row>

                                </>

                            }

                        </SkeletonTheme>

                    </div>
                    
                </Container>

                <div className="section_gaps"></div>

            </section>

        </>


    )


}

export default OurVacancie




<section id="delivary" className='MobileDelivary'>

                <Container>
                    
                    <Row className='d_flex'>

                        <Col lg={4} sm={4}>

                            <div className="delivary_item">

                                <div className="img">
                                    <img src="frontend_asset/images/delivary-1.png" alt="" />
                                </div>

                                <div className="text">
                                    <h3>সারাদেশে ডেলিভারী চার্জ ফ্রি</h3>
                                </div>

                                {/* border */}
                                <div className="delivary_border">
                                    <img src="frontend_asset/images/delivary_border.png" alt="" />
                                </div>

                            </div>

                        </Col>

                        <Col lg={4} sm={4}>

                            <div className="delivary_item">

                                <div className="img">
                                    <img src="frontend_asset/images/delivary-2.png" alt="" />
                                </div>

                                <div className="text">
                                    <h3>প্রিমিয়াম প্যাকেজিং</h3>
                                </div>

                                {/* border */}
                                <div className="delivary_border">
                                    <img src="frontend_asset/images/delivary_border.png" alt="" />
                                </div>
                                
                            </div>

                        </Col>

                        <Col lg={4} sm={4}>

                            <div className="delivary_item">

                                <div className="img">
                                    <img src="frontend_asset/images/delivary-3.png" alt="" />
                                </div>

                                <div className="text">
                                    <h3>ক্যাশ অন ডেলিভারী</h3>
                                </div>

                                {/* border */}
                                <div className="delivary_border">
                                    <img src="frontend_asset/images/delivary_border.png" alt="" />
                                </div>
                                
                            </div>

                        </Col>

                    </Row>

                </Container>

                <div className="fram">
                    <img src="frontend_asset/images/delivary_fram.png" alt="" />
                </div>


            </section>

            <section id="customer_review">

                {/* section gaps */}
                <div className="section_gaps" />
      
                <Container>
                    
                    <Row className='justify-content-md-center'>

                        <Col lg={6}>
                            <div className="header text-center">
                                <h2>আমাদের কাস্টমার রিভিউ</h2>
                            </div>
                        </Col>

                    </Row>

                    {/* video */}
                    <div className="customer_review_content ReviewSlider">

                        <Row>

                            <Col lg={12}>

                                        
                                
                                <Swiper
                                    breakpoints={{
                                        650: {
                                          slidesPerView: 1,
                                          spaceBetween: 0,
                                        },
                                        651: {
                                          slidesPerView: 2,
                                          spaceBetween: 30,
                                        },
                                        1000: {
                                          slidesPerView: 3,
                                          spaceBetween: 30,
                                        },
                                    }}
                                    pagination={{
                                    clickable: true,
                                    }}
                                    
                                    modules={[Pagination]}
                                    className="mySwiper"
                                >

                                    <SwiperSlide>
                                        <div className="Video">
                                            <ReactPlayer
                                            controls={true}
                                            muted={true}
                                            url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
                                            />
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <div className="Video">
                                            <ReactPlayer
                                            controls={true}
                                            muted={true}
                                            url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
                                            />
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <div className="Video">
                                            <ReactPlayer
                                            controls={true}
                                            muted={true}
                                            url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
                                            />
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <div className="Video">
                                            <ReactPlayer
                                            controls={true}
                                            muted={true}
                                            url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
                                            />
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <div className="Video">
                                            <ReactPlayer
                                            controls={true}
                                            muted={true}
                                            url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
                                            />
                                        </div>
                                    </SwiperSlide>

                                </Swiper>

                            </Col>

                        </Row>
                    
                    </div>

                    {/* photo */}
                    <div className="customer_review_content">

                        <Row>

                            <Col lg={6} sm={6}>
                                <div className="img">
                                    <img src="frontend_asset/images/review-1.png" alt="" />
                                </div>
                            </Col>

                            <Col lg={6} sm={6}>
                                <div className="img">
                                    <img src="frontend_asset/images/review-1.png" alt="" />
                                </div>
                            </Col>

                            <Col lg={6} sm={6}>
                                <div className="img">
                                    <img src="frontend_asset/images/review-1.png" alt="" />
                                </div>
                            </Col>

                            <Col lg={6} sm={6}>
                                <div className="img">
                                    <img src="frontend_asset/images/review-1.png" alt="" />
                                </div>
                            </Col>

                        </Row>
                    
                    </div>

                </Container>

            </section>