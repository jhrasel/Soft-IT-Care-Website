import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const BlogBanner = () => {


    return (


        <>
        

            <section className='CarrerBanner BlogBanner'>

                <Container>

                    <Row className='d_flex'>

                        <Col xs={12} lg={5}>
                            
                            <div className="CarrerBannerContent">

                                <h1>Our <span>Events & Celebrations</span> Are Featured In <span>Our Blogs</span> Read & Get Updated</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor ut magna volutpat sapien quam odio magnis quam. Diam estibulum a tristique cras potenti scelerisque leo quis tristique.</p>

                                <div className="GoPages">
                                    <Link to='' className='bg'>Contact Us</Link>
                                    <Link to='' className='bg getLocation'>Get Location</Link>
                                </div>

                            </div>

                        </Col>

                        <Col xs={12} lg={7}>
                            
                            <div className="CarrerBannerImg">

                                <img src="assets/images/Blog_banner.png" alt="Blog_banner" />

                            </div>

                        </Col>

                    </Row>
                    
                </Container>

            </section>


        </>

    )


}

export default BlogBanner