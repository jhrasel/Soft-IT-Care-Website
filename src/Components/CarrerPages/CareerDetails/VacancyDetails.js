import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';


const VacancyDetails = () => {


    const [jobDetails, setJobDetails] = useState([]);

    const { carrerId } = useParams();

    useEffect(() => {


        axios.get(`https://career.softitdev.xyz/api/v1/job/${carrerId}`).then(({data})=>{

            setJobDetails(data.data);

        })

    },[])


    return (
    
        <>
        
            <section className='VacancyDetail'>

                <Container>

                    <Row>

                        <Col sm={6}>
                            
                            <div className="header">

                                <h2>Vacancy  <span>Details</span></h2>
                                <p>View our all vacancies details of our company</p>

                            </div>

                        </Col>

                    </Row>

                    <Row>

                        <Col sm={12}>
                            
                            <div className="VacancyDetailContent">

                                <div className="VacancyDetailItem">

                                   {jobDetails.details}

                                    <div className="GoPages">
                                        <Link to='/carrer-personal-info' className='bg getLocation'>Apply Now</Link>
                                    </div>

                                </div>

                            </div>

                        </Col>

                    </Row>
                    
                </Container>

                <div className="section_gaps"></div>

            </section>

        </>

    )

}

export default VacancyDetails