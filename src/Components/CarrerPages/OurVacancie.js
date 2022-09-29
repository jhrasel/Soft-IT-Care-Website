import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { baseUrl } from '../../Url';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';




const OurVacancie = () => {

    let [isLoad, setIsLoad] = useState(true);

    const [jobList, setJobList] = useState([]);

    useEffect(() => {

        axios.get(baseUrl+'/job/list').then(({data})=>{

            setJobList(data.data);
            setIsLoad(false)
        })

    },[]);

   


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

                        <SkeletonTheme>

                            {

                                isLoad
                                ?
                                <>
                                
                                    <Row>

                                        {

                                            jobList.map((item, key)=>(

                                                <Col sm={4} key={key}>

                                                    <div className="OurVacancieItem">
                                                        
                                                        <div className="text">
                                                            <h3><Skeleton/></h3>
                                                            <ul>
                                                                <li> <Skeleton/></li>
                                                                <li> <Skeleton/></li>
                                                            </ul>
                                                        </div>

                                                        <div className="view_details">
                                                            <Link to='' className='bg'><Skeleton/></Link>
                                                        </div>

                                                    </div>

                                                </Col>

                                            ))

                                        }



                                    </Row>

                                </>
                                :
                                <>
                                
                                    <Row>

                                        {

                                            jobList.map((item, key)=>(

                                                <Col sm={4} key={key}>

                                                    <div className="OurVacancieItem">
                                                        
                                                        <div className="text">
                                                            <h3>{item.title ? item.title.slice(0,75) : ''}</h3>
                                                            <ul>
                                                                <li> <span>Salary:</span> BDT {item.min_salary} - BDT {item.max_salary}</li>
                                                                <li> <span>Experience:</span> {item.experience}</li>
                                                            </ul>
                                                        </div>

                                                        <div className="view_details">
                                                            <Link to={`/carrer-details/${item.id}`} className='bg'>View Details</Link>
                                                        </div>

                                                    </div>

                                                </Col>

                                            ))

                                        }



                                    </Row>

                                </>

                            }

                        </SkeletonTheme>

                    </div>
                    
                </Container>

                <div className="section_gaps"></div>

            </section>

        </>


    )


}

export default OurVacancie