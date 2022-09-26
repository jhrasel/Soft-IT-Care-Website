import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BsCalendarCheck } from 'react-icons/bs'
import { baseUrl } from '../../Url';
import axios from 'axios';


const BlogItem = () => {


    const [blogList, setBlogList] = useState([]);

    useEffect(() => {

        axios.get(baseUrl+'/blog/list').then(({data})=>{
            setBlogList(data.data);

        })

    },[])

    
    return (

        
        <>
        
            <section className='BlogItem'>

                <div className="section_gaps"></div>

                <Container>

                    <Row>

                        {

                            blogList.map((item, key)=>(

                                <Col xs={12} md={6} lg={4} key={key}>
                            
                                    <div className="BlogSliderItem">

                                        <div className="img">
                                            <img src= {`https://sitcdev.xyz/${item.image}`} alt="" />
                                            <div className="overlay">
                                                <h6>{item.category}</h6>
                                            </div>
                                        </div>
                                        
                                        <div className="text">

                                            <div className="Callender d_flex">
                                                <BsCalendarCheck/>
                                                <span>{item.created_at ? item.created_at.slice(0,10) : ''}</span>
                                            </div>

                                            <h6> {item.title ? item.title.slice(0,85) : ''}</h6>

                                        </div>
                                        
                                        <Link to={`/blog-details/${item.id}`} className='bg'>Read More</Link>

                                    </div>

                                </Col>

                            ))

                        }

                        

                        {/* <Col xs={12} md={6} lg={4}>
                            
                            <div className="BlogSliderItem">

                                <div className="img">
                                    <img src="assets/images/blog-2.png" alt="" />
                                </div>
                                
                                <div className="text">

                                    <div className="Callender d_flex">
                                        <BsCalendarCheck/>
                                        <span>July 25, 2022</span>
                                    </div>

                                    <h6>Nunc tincidunt dolor et sollicitudin et tincidunt bibendum.....</h6>

                                </div>

                                <Link to='/blog-details' className='bg'>Read More</Link>

                            </div>

                        </Col> */}

                    </Row>
                    
                </Container>

                <div className="section_gaps"></div>

            </section>

        </>


    )
    
}

export default BlogItem