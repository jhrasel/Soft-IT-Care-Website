import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const OurVacancie = () => {


    return (
        

        <>
        
            <section className='OurVacancie'>

                <div className="section_gaps"></div>

                <Container>

                    <Row>
                        <Col sm={12}>
                            <div className="header">
                                <h2>Our <span>Vacancies</span></h2>
                                <p>View our all vacancies & details of our company</p>
                            </div>
                        </Col>
                    </Row>

                    {/* Content */}
                    <div className="OurVacancieContent">

                        <Row>

                            <Col sm={4}>

                                <div className="OurVacancieItem">
                                    
                                    <div className="text">
                                        <h3>Senior Software Engineer</h3>
                                        <ul>
                                            <li> <span>Salary:</span> BDT 50,000 - BDT 80,000</li>
                                            <li> <span>Experience:</span> 4 Years +</li>
                                        </ul>
                                    </div>

                                    <div className="view_details">
                                        <Link to='/carrer-details' className='bg'>View Details</Link>
                                    </div>

                                </div>

                            </Col>

                            <Col sm={4}>

                                <div className="OurVacancieItem">
                                    
                                    <div className="text">
                                        <h3>Senior Software Engineer</h3>
                                        <ul>
                                            <li> <span>Salary:</span> BDT 50,000 - BDT 80,000</li>
                                            <li> <span>Experience:</span> 4 Years +</li>
                                        </ul>
                                    </div>

                                    <div className="view_details">
                                        <Link to='/carrer-details' className='bg'>View Details</Link>
                                    </div>

                                </div>

                            </Col>

                            <Col sm={4}>

                                <div className="OurVacancieItem">
                                    
                                    <div className="text">
                                        <h3>Senior Software Engineer</h3>
                                        <ul>
                                            <li> <span>Salary:</span> BDT 50,000 - BDT 80,000</li>
                                            <li> <span>Experience:</span> 4 Years +</li>
                                        </ul>
                                    </div>

                                    <div className="view_details">
                                        <Link to='/carrer-details' className='bg'>View Details</Link>
                                    </div>

                                </div>

                            </Col>

                            <Col sm={4}>

                                <div className="OurVacancieItem">
                                    
                                    <div className="text">
                                        <h3>Senior Software Engineer</h3>
                                        <ul>
                                            <li> <span>Salary:</span> BDT 50,000 - BDT 80,000</li>
                                            <li> <span>Experience:</span> 4 Years +</li>
                                        </ul>
                                    </div>

                                    <div className="view_details">
                                        <Link to='/carrer-details' className='bg'>View Details</Link>
                                    </div>

                                </div>

                            </Col>

                            <Col sm={4}>

                                <div className="OurVacancieItem">
                                    
                                    <div className="text">
                                        <h3>Senior Software Engineer</h3>
                                        <ul>
                                            <li> <span>Salary:</span> BDT 50,000 - BDT 80,000</li>
                                            <li> <span>Experience:</span> 4 Years +</li>
                                        </ul>
                                    </div>

                                    <div className="view_details">
                                        <Link to='/carrer-details' className='bg'>View Details</Link>
                                    </div>

                                </div>

                            </Col>

                            <Col sm={4}>

                                <div className="OurVacancieItem">
                                    
                                    <div className="text">
                                        <h3>Senior Software Engineer</h3>
                                        <ul>
                                            <li> <span>Salary:</span> BDT 50,000 - BDT 80,000</li>
                                            <li> <span>Experience:</span> 4 Years +</li>
                                        </ul>
                                    </div>

                                    <div className="view_details">
                                        <Link to='/carrer-details' className='bg'>View Details</Link>
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

export default OurVacancie