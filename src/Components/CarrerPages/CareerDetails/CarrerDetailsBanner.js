import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

import axios from 'axios';

const CarrerDetailsBanner = () => {


    const [jobDetails, setJobDetails] = useState([]);

    const { carrerId } = useParams();

    useEffect(() => {


        axios.get(`https://career.softitdev.xyz/api/v1/job/${carrerId}`).then(({data})=>{

            setJobDetails(data.data);

        })

    },[])



    return (


        <>
        
            <section className='CarrerBanner CarrerDetailsBanner'>

                <Container>

                    <Row className='d_flex'>

                        <Col xs={12} lg={5}>
                            
                            <div className="CarrerDetailsBannerContent">

                                <h2>Senior Software Engineer</h2>

                                <ul>

                                    <li><span>Job Type:</span>{jobDetails.type}</li>
                                    <li><span>Deadline:</span>{jobDetails.deadline}</li>
                                    <li><span>Published On:</span>{jobDetails.created_at}</li>
                                    <li><span>Vacancy:</span>{jobDetails.vacancy}</li>
                                    <li><span>Experience:</span>{jobDetails.experience}</li>
                                    <li><span>Salary:</span>BDT {jobDetails.min_salary} - BDT {jobDetails.max_salary}</li>
                                    <li><span>Office Time:</span>09:30 AM - 06:00 PM</li>
                                    <li><span>Location:</span>{jobDetails.location}</li>
                                
                                </ul>

                            </div>

                        </Col>

                        <Col xs={12} lg={7}>
                            
                            <div className="CarrerBannerImg">

                                <img src="../assets/images/Carrer_banner.png" alt="Carrer_banner" />

                            </div>

                        </Col>

                    </Row>
                    
                </Container>

            </section>

        </>


    )


}

export default CarrerDetailsBanner