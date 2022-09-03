import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CarrerSuccessfulForm = () => {

    return (



        <>
        
            <section className='PersonalInfoForm'>

                <div className="section_gaps"></div>

                <Container>

                    <from>

                        <Row>

                            <Col sm={12}>
                                
                                <div className="PersonalInfoFormContent">

                                    
                                    <div className="CarrerSuccessFull">

                                        <div className="img">
                                            <img src="assets/images/successfull.png" alt="" />
                                        </div>
                                        
                                        <div className="text">

                                            <h4>Your Job Application Successful !</h4>
                                            <p>Your job application for Senior Software Engineer (Team Lead, PHP) at Soft IT Care has successfully completed. After initial screening process we will get back to you.</p>

                                            <div className="GoPages">
                                                <Link to='/' className='bg'>Back To Homepage</Link>
                                                <Link to='/carrer' className='bg getLocation'>Back To Job Circular</Link>
                                            </div>

                                        </div>

                                    </div>


                                </div>

                            </Col>

                        </Row>    

                    </from>

                    
                </Container>

                <div className="section_gaps"></div>

            </section>

        </>



    )

}

export default CarrerSuccessfulForm