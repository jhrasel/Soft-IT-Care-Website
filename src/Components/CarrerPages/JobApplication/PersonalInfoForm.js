import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const PersonalInfoForm = () => {


    return (
        
        
        <>
        
            <section className='PersonalInfoForm'>

                <div className="section_gaps"></div>

                <Container>

                    <from>

                        <Row>

                            <Col sm={12}>
                                
                                <div className="PersonalInfoFormContent">

                                    <h2 className='text-center'>Job Application For “Senior Software Engineer”</h2>

                                    <div className="FormItem">

                                        {/* Name */}
                                        <div className="CustomeInput">
                                            <label htmlFor="">Full name</label>
                                            <input type="text" placeholder='Full name' />
                                        </div>

                                        {/* Email */}
                                        <div className="CustomeInput">
                                            <label htmlFor="">Email Address</label>
                                            <input type="text" placeholder='you@company.com' />
                                        </div>

                                        {/* Phone number */}
                                        <div className="CustomeInput">
                                            <label htmlFor="">Phone number</label>
                                            <input type="text" placeholder='+1 (555) 000-0000' />
                                        </div>

                                        {/* Upload CV */}
                                        <div className="CustomeInput">
                                            <label htmlFor="">Upload CV</label>
                                            <input type="file" placeholder='you@company.com' />
                                        </div>

                                        {/* Upload CV */}
                                        <div className="CustomeInput agree d_flex">

                                            <div class="checkbox bounce">
                                                <input type="checkbox" />
                                                <svg viewBox="0 0 21 21">
                                                    <polyline points="5 10.75 8.5 14.25 16 6"></polyline>
                                                </svg>
                                            </div>

                                            <label htmlFor="">You agree to our friendly <Link to=''>privacy policy</Link> .</label>

                                        </div>

                                        <div className="CustomeInput">

                                            <div className="VacancyDetailItem">

                                                <div className="GoPages">
                                                    <Link to='/carrer-other-info' className='bg getLocation'>Continue</Link>
                                                </div>

                                            </div>

                                        </div>

                                        <div className="CustomeInput">

                                            <div className="img">
                                                <img src="assets/images/job_application.png" alt="" />
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

export default PersonalInfoForm