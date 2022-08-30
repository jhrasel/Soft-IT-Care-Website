import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AboutUs = () => {

    return (


        <>
        
            <section className='AboutUs'>

                    <Container>

                        <Row className='d_flex'>

                            <Col sm={6}>
                                
                                <div className="AboutUsImg">

                                    <img src="assets/images/home_about.png" alt="" />

                                </div>

                            </Col>

                            <Col sm={6}>
                                
                                <div className="AboutUsContent">

                                    <h2>About <span>Us</span></h2>

                                    <p>Soft IT Care is a Web design and development service providing company in Bangladesh. It has versatile functions. It is the only Best Web Design and Development Company which has all in one. We specialize in Software Development, e-Commerce, Graphic Design, Marketing and SEO, Website Security, Mobile Application Development, and the list goes on.</p>
                                    
                                    <p>The projects we provide are unique and creative. From the very beginning to till now, we have been working in this field with the highest success and client satisfaction. Our team is highly expert and we use digital technology to provide services.</p>

                                </div>

                            </Col>

                        </Row>    

                        
                    </Container>

                <div className="section_gaps"></div>

            </section>

        </>

        
    )

}

export default AboutUs