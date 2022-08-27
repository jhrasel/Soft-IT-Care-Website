import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


const WeOffer = () => {


    return (


        <>
        
            <section className='WeOffer'>

                <Container>

                    <div className="WeOfferContent">

                        <Row>
                            <Col sm={12}>
                                <div className="header">
                                    <h2>What <span>We Offer</span></h2>
                                    <p>View our all offers of our company</p>
                                </div>
                            </Col>
                        </Row>

                        <div className="WeOfferPart">
                            
                            <Row>

                                <Col sm={6}>

                                    <Row>

                                        {/* Item 1 */}
                                        <Col sm={6} className="pd_b">

                                            <div className="Coffee">
                                                
                                                <div className="">
                                                    <div className="imgHeight">
                                                        <img src="assets/images/tea-cup.png" alt="" />
                                                    </div>
                                                    
                                                    <div className="text">
                                                        <h4>Tea,Coffee & Breakfast</h4>
                                                    </div>
                                                </div>

                                            </div>

                                        </Col>

                                        <Col sm={6} className="pd_b">

                                            <div className="WeOfferImg">
                                                <img src="assets/images/carrer_we_offer-1.png" alt="WeOffer" />
                                            </div>

                                        </Col>

                                        {/* item 2 */}

                                        <Col sm={6}>

                                            <div className="WeOfferImg">
                                                <img src="assets/images/carrer_we_offer-3.png" alt="WeOffer" />
                                            </div>

                                        </Col>

                                        <Col sm={6}>

                                            <div className="YearlyTour">
                                                
                                                <div className="">
                                                    <div className="imgHeight">
                                                        <img src="assets/images/travel.png" alt="" />
                                                    </div>
                                                    
                                                    <div className="text">
                                                        <h4>Yearly Tour Country/Abroad</h4>
                                                    </div>
                                                </div>

                                            </div>

                                        </Col>

                                    </Row>

                                </Col>

                                <Col sm={6}>

                                    <Row>

                                        {/* Item 1 */}
                                        <Col sm={6} className="pd_b">

                                            <div className="FestiveBirthday">
                                                
                                                <div className="">
                                                    <div className="imgHeight">
                                                        <img src="assets/images/birthday-cake.png" alt="" />
                                                    </div>
                                                    
                                                    <div className="text">
                                                        <h4>Festive Birthday Celebration</h4>
                                                    </div>
                                                </div>

                                            </div>

                                        </Col>

                                        <Col sm={6} className="pd_b">

                                            <div className="WeOfferImg">
                                                <img src="assets/images/carrer_we_offer-2.png" alt="WeOffer" />
                                            </div>

                                        </Col>

                                        {/* item 2 */}

                                        <Col sm={6}>

                                            <div className="WeOfferImg">
                                                <img src="assets/images/carrer_we_offer-4.png" alt="WeOffer" />
                                            </div>

                                        </Col>

                                        <Col sm={6}>

                                            <div className="FrequentPizza">
                                                
                                                <div className="">
                                                    <div className="imgHeight">
                                                        <img src="assets/images/pizza.png" alt="" />
                                                    </div>
                                                    
                                                    <div className="text">
                                                        <h4>Frequent Pizza Party</h4>
                                                    </div>
                                                </div>

                                            </div>

                                        </Col>

                                    </Row>

                                </Col>

                            </Row>

                        </div>


                    </div>

                    
                    
                </Container>

                <div className="section_gaps"></div>

            </section>

        </>

        
    )


}

export default WeOffer