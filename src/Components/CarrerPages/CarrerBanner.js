import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const CarrerBanner = () => {


    return (


        <>
        
            <section className='CarrerBanner'>

                <Container>

                    <Row className='d_flex'>

                        <Col sm={5}>
                            
                            <div className="CarrerBannerContent">

                                <h1>Get Your <span>Career Boosted</span> Up With Our Team With <span>Large Facilities</span></h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor ut magna volutpat sapien quam odio magnis quam. Diam estibulum a tristique cras potenti scelerisque leo quis tristique.</p>

                                <div className="GoPages">
                                    <Link to='' className='bg'>Contact Us</Link>
                                    <Link to='' className='bg getLocation'>Get Location</Link>
                                </div>

                            </div>

                        </Col>

                        <Col sm={7}>
                            
                            <div className="CarrerBannerImg">

                                <img src="assets/images/Carrer_banner.png" alt="Carrer_banner" />

                            </div>

                        </Col>

                    </Row>
                    
                </Container>

            </section>

        </>


    )

}

export default CarrerBanner
