import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HowToStart = () => {


    return (

        <>
        
            <section className='HowToStart'>

                    <Container>

                        <Row>

                            <Col sm={12}>
                                
                                <div className="HowToStartContent">

                                    <Container>

                                        <Row>

                                            <Col sm={8}>
                                                <div className="headeer">

                                                    <h2>Not Sure How To Start ?</h2>
                                                    <p>Talk to one of our hosting specialist who will review your needs and propose a tailored hosting solution that will match your specific business reality and needs.</p>
                                                </div>
                                                
                                            </Col>

                                        </Row>
                                        
                                        <Row className='d_flex'>

                                            <Col xs={12} md={6} lg={6} className="first">
                                            
                                                <div className="HowToStartRight">

                                                    <Row>

                                                        <Col xs={6}>

                                                            <div className="HowToStartRightContent d_flex">
                                                                
                                                                <div className="img">
                                                                    <img src="assets/images/live-chat.png" alt="" />
                                                                </div>

                                                                <div className="text">
                                                                    <p>Sales Live Chat</p>
                                                                </div>

                                                            </div>

                                                        </Col>

                                                        <Col xs={6}>

                                                            <div className="HowToStartRightContent d_flex">
                                                                
                                                                <div className="img">
                                                                    <img src="assets/images/call_now.png" alt="" />
                                                                </div>

                                                                <div className="text">
                                                                    <p>Call Us Now</p>
                                                                </div>

                                                            </div>

                                                        </Col>

                                                        <Col xs={6}>

                                                            <div className="HowToStartRightContent d_flex">
                                                                
                                                                <div className="img">
                                                                    <img src="assets/images/ticket.png" alt="" />
                                                                </div>

                                                                <div className="text">
                                                                    <p>Support Tickets</p>
                                                                </div>

                                                            </div>

                                                        </Col>

                                                        <Col xs={6}>

                                                            <div className="HowToStartRightContent d_flex">
                                                                
                                                                <div className="img">
                                                                    <img src="assets/images/sms.png" alt="" />
                                                                </div>

                                                                <div className="text">
                                                                    <p>Send Us Email</p>
                                                                </div>

                                                            </div>

                                                        </Col>

                                                    </Row>

                                                </div>

                                            </Col>

                                            <Col xs={12} md={6} lg={6} className="secend">
                                            
                                                <div className="HowToStartImg">

                                                    <img src="assets/images/support_img.png" alt="" />

                                                </div>

                                            </Col>

                                        </Row>

                                    </Container>

                                </div>

                            </Col>

                        </Row>    

                        
                    </Container>

                <div className="section_gaps"></div>

            </section>

        </>
        
    )
  
}

export default HowToStart