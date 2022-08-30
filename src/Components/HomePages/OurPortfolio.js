import React from 'react';
import { Container, Row, Col, } from 'react-bootstrap';
import { Link } from 'react-router-dom';



const OurPortfolio = () => {


    return (
        

        <>
        
            <section className='OurPortfolio'>

                    <Container>

                        <Row>

                            <Col sm={12}>
                                
                                <div className="header">

                                    <h2>Our <span> Portfolio</span></h2>
                                    <p>Check out our projects and portfolio here</p>

                                </div>

                            </Col>

                        </Row>

                        <div className="OurPortfolioContent">

                            <Row>

                                <Col sm={12}>
                                    
                                
                                    <div className="OurPortfolioTabs">

                                        

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

export default OurPortfolio