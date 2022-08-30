import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Banner = () => {


    return (

        
        <>
        
            <section className='Banner'>

                <div className="section_gaps"></div>

                    <Container>

                        <Row className='d_flex'>

                            <Col sm={6}>
                                
                                <div className="BannerContent">

                                    <h1>We Are <span>The Best</span> In Transforming Your Business To <span>A Digital Business</span></h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor ut magna volutpat sapien quam odio magnis quam. Diam estibulum a tristique cras potenti scelerisque leo quis tristique.</p>

                                    <div className="GoPages">
                                        <Link to='' className='bg'>Contact Us</Link>
                                        <Link to='' className='bg getLocation'>Get Location</Link>
                                    </div>

                                </div>

                            </Col>

                            <Col sm={6}>
                                
                                <div className="BannerImg">

                                    <img src="assets/images/home_banner.png" alt="Carrer_banner" />

                                </div>

                            </Col>

                        </Row>

                        {/*Achievement */}
                        <div className="Achievement">

                            <Row>

                                <Col>
                                
                                    <div className="AchievementItem">
                                        
                                        <div className="img">
                                            <img src="assets/images/achievementItem-1.png" alt="Carrer_banner" />
                                        </div>

                                        <div className="text d_flex">

                                            <h3>600+</h3>
                                            <p>Happy Clients</p>

                                        </div>

                                    </div>

                                </Col>

                                <Col>
                                
                                    <div className="AchievementItem">
                                        
                                        <div className="img">
                                            <img src="assets/images/achievementItem-2.png" alt="Carrer_banner" />
                                        </div>

                                        <div className="text d_flex">

                                            <h3>03</h3>
                                            <p>Years Of Experience</p>

                                        </div>

                                    </div>

                                </Col>    

                                <Col>
                                
                                    <div className="AchievementItem">
                                        
                                        <div className="img">
                                            <img src="assets/images/achievementItem-3.png" alt="Carrer_banner" />
                                        </div>

                                        <div className="text d_flex">

                                            <h3>1000+</h3>
                                            <p>Project Delivered</p>

                                        </div>

                                    </div>

                                </Col>    

                                <Col>
                                
                                    <div className="AchievementItem">
                                        
                                        <div className="img">
                                            <img src="assets/images/achievementItem-4.png" alt="Carrer_banner" />
                                        </div>

                                        <div className="text d_flex">

                                            <h3>50+</h3>
                                            <p>Expert Tech Team Members</p>

                                        </div>

                                    </div>

                                </Col>    

                                <Col>
                                
                                    <div className="AchievementItem">
                                        
                                        <div className="img">
                                            <img src="assets/images/achievementItem-5.png" alt="Carrer_banner" />
                                        </div>

                                        <div className="text d_flex">

                                            <h3>30+</h3>
                                            <p>Overseas Companies</p>

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

export default Banner