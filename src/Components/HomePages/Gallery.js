import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Gallery = () => {


    return (

        <>
        
            <section className=''>

                    <Container>

                        <Row>
                            <Col xm={12} lg={6}>
                            <div className="header">
                                <h2>
                                Our <span> Gallery</span>
                                </h2>

                                <p>Check out our gallery section & relive the moments of our company</p>
                            </div>
                            </Col>
                        </Row>

                        <div className="GalleryContent">
                            
                            <Row>

                                {/* Img */}
                                <Col sm={3}>

                                    <div className="GalleryImg">
                                        <img src="assets/images/gal1.png" alt="" />
                                    </div>

                                </Col>

                                {/* col-lg 9 */}
                                <Col sm={9}>
                                    
                                    <Row>

                                        {/* Img */}
                                        <Col sm={4}>

                                            <div className="GalleryImg">
                                                <img src="assets/images/gal2.png" alt="" />
                                            </div>

                                        </Col>

                                        {/* Img */}
                                        <Col sm={4}>

                                            <div className="GalleryImg">
                                                <img src="assets/images/gal3.png" alt="" />
                                            </div>

                                        </Col>

                                        {/* Img */}
                                        <Col sm={4}>

                                            <div className="GalleryImg">
                                                <img src="assets/images/gal4.png" alt="" />
                                            </div>

                                        </Col>

                                        {/* Img */}
                                        <Col sm={4}>

                                            <div className="GalleryImg">
                                                <img src="assets/images/gal5.png" alt="" />
                                            </div>

                                        </Col>

                                        {/* Img */}
                                        <Col sm={4}>

                                            <div className="GalleryImg">
                                                <img src="assets/images/gal2.png" alt="" />
                                            </div>

                                        </Col>

                                        {/* Img */}
                                        <Col sm={4}>

                                            <div className="GalleryImg">
                                                <img src="assets/images/gal5.png" alt="" />
                                            </div>

                                        </Col>

                                    </Row>

                                </Col>

                            </Row>  

                        </div>  

                        
                    </Container>

                <div className="section_gaps"></div>

            </section>

        </>
        
    )


}

export default Gallery