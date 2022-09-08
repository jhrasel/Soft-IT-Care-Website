import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import axios from 'axios';

const CarrerDetailsBanner = () => {


    const [jobDetails, setJobDetails] = useState([]);

    useEffect(() => {

        axios.get(`https://career.softitdev.xyz/api/v1/job/list`).then(({data})=>{

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
                                    <li><span>Deadline:</span>July 23, 2022</li>
                                    <li><span>Published On:</span>June 30, 2022</li>
                                    <li><span>Vacancy:</span>03</li>
                                    <li><span>Experience:</span>3 To 5 Years</li>
                                    <li><span>Salary:</span>BDT 50,000 - BDT 60,000</li>
                                    <li><span>Office Time:</span>09:30 AM - 06:00 PM</li>
                                    <li><span>Location:</span>Level: 5, House: 32/34, Road: 07, Block: C, Niketan, Gulshan – 1, Dhaka – 1212</li>
                                
                                </ul>

                            </div>

                        </Col>

                        <Col xs={12} lg={7}>
                            
                            <div className="CarrerBannerImg">

                                <img src="assets/images/Carrer_banner.png" alt="Carrer_banner" />

                            </div>

                        </Col>

                    </Row>
                    
                </Container>

            </section>

        </>


    )


}

export default CarrerDetailsBanner