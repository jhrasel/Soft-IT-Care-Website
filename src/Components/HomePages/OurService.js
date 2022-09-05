import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const OurService = () => {


    return (
        
        <>
        
            <section className='OurService'>

                <Container>

                    <Row>

                        <Col sm={12}>
                            
                            <div className="header">

                                <h2>Our <span>Services</span></h2>
                                <p>View our all services & details of our digital solutions</p>

                            </div>

                        </Col>

                    </Row>
                    
                    {/* OurService Content */}
                    <div className="OurServiceContent">
                        
                        <Row>

                            <Col sm={4} lg={3}>
                                
                                <div className="OurServiceItem">

                                    <Link to=''>
                                        <div className="img">
                                            <img src="assets/images/service-1.png" alt="" />
                                        </div>

                                        <div className="text">
                                            <h4>UI & UX <br /> Design</h4>
                                        </div>
                                    </Link>

                                </div>

                            </Col>

                            <Col sm={4} lg={3}>
                                
                                <div className="OurServiceItem">

                                    <Link to=''>
                                        <div className="img">
                                            <img src="assets/images/service-2.png" alt="" />
                                        </div>

                                        <div className="text">
                                            <h4>Website Design & <br /> Development</h4>
                                        </div>
                                    </Link>

                                </div>

                            </Col>

                            <Col sm={4} lg={3}>
                                
                                <div className="OurServiceItem">

                                    <Link to=''>
                                        <div className="img">
                                            <img src="assets/images/service-3.png" alt="" />
                                        </div>

                                        <div className="text">
                                            <h4>Mobile Application <br /> Solution</h4>
                                        </div>
                                    </Link>

                                </div>

                            </Col>

                            <Col sm={4} lg={3}>
                                
                                <div className="OurServiceItem">

                                    <Link to=''>
                                        <div className="img">
                                            <img src="assets/images/service-4.png" alt="" />
                                        </div>

                                        <div className="text">
                                            <h4>Software <br /> Solution</h4>
                                        </div>
                                    </Link>

                                </div>

                            </Col>

                            <Col sm={4} lg={3}>
                                
                                <div className="OurServiceItem">

                                    <Link to=''>
                                        <div className="img">
                                            <img src="assets/images/service-5.png" alt="" />
                                        </div>

                                        <div className="text">
                                            <h4>E-Commerce <br /> Solution</h4>
                                        </div>
                                    </Link>

                                </div>

                            </Col>

                            <Col sm={4} lg={3}>
                                
                                <div className="OurServiceItem">

                                    <Link to=''>
                                        <div className="img">
                                            <img src="assets/images/service-6.png" alt="" />
                                        </div>

                                        <div className="text">
                                            <h4>Motion Graphics <br /> Solution</h4>
                                        </div>
                                    </Link>

                                </div>

                            </Col>

                            <Col sm={4} lg={3}>
                                
                                <div className="OurServiceItem">

                                    <Link to=''>
                                        <div className="img">
                                            <img src="assets/images/service-7.png" alt="" />
                                        </div>

                                        <div className="text">
                                            <h4>Domain Hosting <br /> Service</h4>
                                        </div>
                                    </Link>

                                </div>

                            </Col>

                            <Col sm={4} lg={3}>
                                
                                <div className="OurServiceItem">

                                    <Link to=''>
                                        <div className="img">
                                            <img src="assets/images/service-8.png" alt="" />
                                        </div>

                                        <div className="text">
                                            <h4>Bulk SMS <br /> Service</h4>
                                        </div>
                                    </Link>

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

export default OurService