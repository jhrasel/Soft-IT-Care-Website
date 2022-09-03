import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const OurConcern = () => {

    return (

        <>
        
            <section className='OurConcern'>

                    <Container>

                        <Row>

                            <Col sm={12}>
                                
                                <div className="header">

                                    <h2>Our <span>Concerns</span></h2>
                                    <p>Our sister concerns available for you</p>

                                </div>

                            </Col>

                        </Row>

                        <div className="OurConcernContent">

                            <Row className='d_flex'>

                                <Col xs={12} md={6} lg={3}>
                                
                                    <div className="OurConcernImg">
                                        <img src="assets/images/hosting.png" alt="" />
                                    </div>

                                </Col>

                                <Col xs={12} md={6} lg={3}>
                                
                                    <div className="OurConcernImg">
                                        <img src="assets/images/soft_ems.png" alt="" />
                                    </div>

                                </Col>

                                <Col xs={12} md={6} lg={3}>
                                
                                    <div className="OurConcernImg">
                                        <img src="assets/images/orbit.png" alt="" />
                                    </div>

                                </Col>

                                <Col xs={12} md={6} lg={3}>
                                
                                    <div className="OurConcernImg">
                                        <img src="assets/images/travel_birds.png" alt="" />
                                    </div>

                                </Col>

                            </Row>    

                        </div>  

                        
                    </Container>

            </section>

        </>
        
    )

}

export default OurConcern