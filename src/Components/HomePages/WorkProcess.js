import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const WorkProcess = () => {


    return (


        <>
        
            <section className='WorkProcess'>

                <Container>

                    <Row>

                        <Col sm={12}>
                            
                            <div className="header">

                                <h2>Our <span>Work Process</span></h2>
                                <p>View our work solution process steps, how we work</p>

                            </div>

                        </Col>

                    </Row>


                    <div className="WorkProcessContent">

                        <Row>

                            <Col sm={12}>
                                
                                <div className="WorkProcessImg">

                                    <img src="assets/images/work_process.png" alt="" />

                                </div>

                            </Col>

                        </Row>    

                    </div>
                    
                </Container>

            </section>

        </>


    )


}

export default WorkProcess