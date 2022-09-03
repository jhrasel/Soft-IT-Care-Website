import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const OurClients = () => {

    return (


        <>
        
            <section className='OurClient'>

                    <Container>

                        <Row>

                            <Col sm={6}>
                                
                                <div className="header">

                                    <h2>Our <span>Clients</span></h2>
                                    <p>Our valuable clients who availed our services</p>

                                </div>

                            </Col>

                        </Row>
                        
                        <div className="OurClientContent">

                            <Row>
                                
                                <Col sm={4} lg={2}>

                                    <div className="OurClientItem">

                                        <div className="img">
                                            <img src="assets/images/client-1.png" alt="" />
                                        </div>

                                        <div className="text">
                                            <h4>Bangladesh <br /> Government</h4>
                                        </div>

                                    </div>

                                </Col>

                                <Col sm={4} lg={2}>

                                    <div className="OurClientItem">

                                        <div className="img">
                                            <img src="assets/images/client-2.png" alt="" />
                                        </div>

                                        <div className="text">
                                            <h4>Bangladesh <br /> Railway</h4>
                                        </div>

                                    </div>

                                </Col>

                                <Col sm={4} lg={2}>

                                    <div className="OurClientItem">

                                        <div className="img">
                                            <img src="assets/images/client-3.png" alt="" />
                                        </div>

                                        <div className="text">
                                            <h4>Al Haramain <br /> Perfumes</h4>
                                        </div>

                                    </div>

                                </Col>

                                <Col sm={4} lg={2}>

                                    <div className="OurClientItem">

                                        <div className="img">
                                            <img src="assets/images/client-4.png" alt="" />
                                        </div>

                                        <div className="text">
                                            <h4>Hamko <br /> Group</h4>
                                        </div>

                                    </div>

                                </Col>

                                <Col sm={4} lg={2}>

                                    <div className="OurClientItem">

                                        <div className="img">
                                            <img src="assets/images/client-5.png" alt="" />
                                        </div>

                                        <div className="text">
                                            <h4>UCC University <br /> Admission</h4>
                                        </div>

                                    </div>

                                </Col>

                                <Col sm={4} lg={2}>

                                    <div className="OurClientItem">

                                        <div className="img">
                                            <img src="assets/images/client-6.png" alt="" />
                                        </div>

                                        <div className="text">
                                            <h4>CIVA Freedomn Internation School</h4>
                                        </div>

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

export default OurClients