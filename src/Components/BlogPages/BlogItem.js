import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BsCalendarCheck } from 'react-icons/bs'


const BlogItem = () => {
    
    return (

        
        <>
        
            <section className='BlogItem'>

                <div className="section_gaps"></div>

                <Container>

                    <Row>

                        <Col xs={12} md={6} lg={4}>
                            
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

                        </Col>

                        <Col xs={12} md={6} lg={4}>
                            
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

                        </Col>

                        <Col xs={12} md={6} lg={4}>
                            
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

                        </Col>

                        <Col xs={12} md={6} lg={4}>
                            
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

                        </Col>

                        <Col xs={12} md={6} lg={4}>
                            
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

                        </Col>

                        <Col xs={12} md={6} lg={4}>
                            
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

                        </Col>

                    </Row>
                    
                </Container>

                <div className="section_gaps"></div>

            </section>

        </>


    )
    
}

export default BlogItem