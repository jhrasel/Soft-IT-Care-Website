import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const WhyUs = () => {


    return (

        
        <>
        
            <section className='WhyUs'>

                    <Container>

                        <Row>

                            <Col xs={8}>
                                
                                <div className="header">
                                    <h2>Why <span>Soft It Care ?</span></h2>
                                    <p>Our Web Design and Development Company team has strong technical and analytical skills. They are also experts in software languages, platforms, and modern methodologies.</p>
                                </div>

                            </Col>

                        </Row>

                        <Row className='d_flex'>

                            <Col sm={6}>
                                
                                <div className="WhyUsContent">

                                    <div className="WhyUsContentItem">
                                        
                                        <Row>
                                            
                                            <Col xs={6}>

                                                <div className="WhyUsContentItemPart fst">

                                                    <div className="img">
                                                        <img src="assets/images/why_us_item-1.png" alt="" />
                                                    </div>

                                                    <div className="text">
                                                        <p>Affordable & Fully Trustworthy Service</p>
                                                    </div>

                                                </div>

                                            </Col>

                                            <Col xs={6}>

                                                <div className="WhyUsContentItemPart snd">

                                                    <div className="img">
                                                        <img src="assets/images/why_us_item-2.png" alt="" />
                                                    </div>

                                                    <div className="text">
                                                        <p>Expert Tech Team & Consultancy</p>
                                                    </div>

                                                </div>

                                            </Col>

                                            <Col xs={6}>

                                                <div className="WhyUsContentItemPart trd">

                                                    <div className="img">
                                                        <img src="assets/images/why_us_item-3.png" alt="" />
                                                    </div>

                                                    <div className="text">
                                                        <p>Completely Secured & Encrypted Solution</p>
                                                    </div>

                                                </div>

                                            </Col>

                                            <Col xs={6}>

                                                <div className="WhyUsContentItemPart">

                                                    <div className="img">
                                                        <img src="assets/images/why_us_item-4.png" alt="" />
                                                    </div>

                                                    <div className="text">
                                                        <p>Years Of Experience With Expert Team</p>
                                                    </div>

                                                </div>

                                            </Col>

                                        </Row>

                                    </div>

                                </div>

                            </Col>

                            <Col sm={6}>
                            
                                <div className="WhyUsContentImg">
                                    
                                    <img src="assets/images/why_us.png" alt="" />

                                </div>
                                
                            </Col>

                        </Row>    

                        
                    </Container>

                <div className="section_gaps"></div>

            </section>

        
        </>


    )


}

export default WhyUs