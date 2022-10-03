import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const WorkProcess = () => {


    return (


        <>
        
            <section className='WorkProcess'>

                <Container>

                    <Row>

                        <Col sm={12}>
                            
                            <div className="header">

                                <h2>Our <span>Work Process</span></h2>
                                <p>View our work solution process steps, how we work</p>

                            </div>

                        </Col>

                    </Row>


                    <div className="WorkProcessContent">

                        <Row>

                            <Col sm={12}>
                                
                                <div className="WorkProcessContentPart d_flex d_justify">

                                    {/* Item */}
                                    <div className="WorkProcessItem">

                                        <div className="WorkProcessImg">
                                            <img src="assets/images/yellow.svg" alt="" />
                                        </div>
                                        
                                        <div className="checklist">
                                            <img src="assets/images/checklist.png" alt="" />
                                        </div>
                                        
                                        <div className="text">
                                            <h4>Requirement <br /> Analysis</h4>
                                        </div>

                                        <div className="overlay">
                                            <span>01</span>
                                        </div>

                                    </div>

                                    {/* Item */}
                                    <div className="WorkProcessItem orange">

                                        <div className="WorkProcessImg">
                                            <img src="assets/images/orange.svg" alt="" />
                                        </div>
                                        
                                        <div className="checklist">
                                            <img src="assets/images/ux-interface.png" alt="" />
                                        </div>
                                        
                                        <div className="text">
                                            <h4>UX/UI <br /> Design</h4>
                                        </div>

                                        <div className="overlay">
                                            <span>02</span>
                                        </div>

                                    </div>

                                    {/* Item */}
                                    <div className="WorkProcessItem pink">

                                        <div className="WorkProcessImg">
                                            <img src="assets/images/pink.svg" alt="" />
                                        </div>
                                        
                                        <div className="checklist">
                                            <img src="assets/images/coding.png" alt="" />
                                        </div>
                                        
                                        <div className="text">
                                            <h4>Project <br /> Development</h4>
                                        </div>

                                        <div className="overlay">
                                            <span>03</span>
                                        </div>

                                    </div>

                                    {/* Item */}
                                    <div className="WorkProcessItem blue">

                                        <div className="WorkProcessImg">
                                            <img src="assets/images/blue.svg" alt="" />
                                        </div>
                                        
                                        <div className="checklist">
                                            <img src="assets/images/app-development.png" alt="" />
                                        </div>
                                        
                                        <div className="text">
                                            <h4>Testing <br /> & Delivery</h4>
                                        </div>

                                        <div className="overlay">
                                            <span>04</span>
                                        </div>

                                    </div>

                                    {/* Item */}
                                    <div className="WorkProcessItem purple">

                                        <div className="WorkProcessImg">
                                            <img src="assets/images/purple.svg" alt="" />
                                        </div>
                                        
                                        <div className="checklist">
                                            <img src="assets/images/support.png" alt="" />
                                        </div>
                                        
                                        <div className="text">
                                            <h4>Support & <br /> Maintenance</h4>
                                        </div>

                                        <div className="overlay">
                                            <span>05</span>
                                        </div>

                                    </div>

                                </div>

                            </Col>

                        </Row>    

                    </div>
                    
                </Container>

            </section>

        </>


    )


}

export default WorkProcess