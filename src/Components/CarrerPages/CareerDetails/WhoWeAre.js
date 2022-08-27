import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';


const WhoWeAre = () => {

    return (


        <>

            <section className='WhoWeAre'>

                <div className="section_gaps"></div>

                <Container>

                    <Row>

                        <Col sm={6}>
                            
                            <div className="header">

                                <h2>Who <span>We Are</span></h2>
                                <p>View our all vacancies & details of our company</p>

                            </div>

                        </Col>

                    </Row>

                    <div className="VideoPlayerContent">

                        <Row>

                            <Col sm={12}>

                                <div className="VideoPlayerItem">
                                    <ReactPlayer url='https://youtu.be/wXWcZicdslM' />
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

export default WhoWeAre