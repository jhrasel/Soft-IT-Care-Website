import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const BusinessProfile = () => {


    return (

        <>
        
            <section className='BusinessProfile'>

                <div className="section_gaps"></div>

                    <Container>

                        <Row className='d_flex'>

                            <Col xm={12} lg={6}>
                                
                                <div className="BusinessProfileContent">

                                    <h2>Check Out <span>Our Business Profile</span></h2>

                                    <p>Our Web Design and Development Company team has strong technical and analytical skills. They are also experts in software languages, platforms, and modern methodologies.</p>
                                    <p>We work for the satisfaction of customers. We understand user needs, develop software solutions, monitor performance, and modify the program as needed. There are some processes to develop software in our Company. Here the processes of software development are explained.</p>

                                    <div className="GoPages">
                                        <Link to='' className='bg'>Download Business Profile</Link>
                                        <Link to='' className='bg getLocation'>Contact Us</Link>
                                    </div>

                                </div>

                            </Col>

                            <Col xm={12} lg={6}>
                                
                                <div className="BusinessProfileImg">

                                    <img src="assets/images/business_profile.png" alt="" />

                                </div>

                            </Col>

                        </Row>    

                        
                    </Container>

                <div className="section_gaps"></div>

            </section>

        </>
        
    )


}

export default BusinessProfile