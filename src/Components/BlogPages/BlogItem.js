import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BsCalendarCheck } from 'react-icons/bs'
import { baseUrl } from '../../Url';
import axios from 'axios';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';


const BlogItem = () => {


    const [blogList, setBlogList] = useState([]);

    let [isLoad, setIsLoad] = useState(true);

    useEffect(() => {

        axios.get(baseUrl+'/blog/list').then(({data})=>{
            setBlogList(data.data);
            setIsLoad(false)
        })

    },[])

    
    return (

        
        <>
        
            <section className='BlogItem'>

                <div className="section_gaps"></div>

                <Container>

                    <SkeletonTheme>

                        {

                            isLoad
                            ?

                            <Row>

                                <Col xs={12} md={6} lg={4} >
                                    
                                    <div className="BlogSliderItem">

                                        <div className="img">
                                            <Skeleton variant="rectangular" style={{"height" : "100%", "width" : "100%"}} />
                                            <h6><Skeleton /></h6>
                                        </div>
                                        
                                        <div className="text">

                                            <div className="Callender d_flex">
                                                <Skeleton />
                                            </div>

                                            <h6> <Skeleton /></h6>

                                        </div>
                                        
                                        <Link to='' className='bg'><Skeleton /></Link>

                                    </div>

                                </Col>

                            </Row>

                            :

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

                            </Row>

                        }

                        

                    </SkeletonTheme>
                    
                </Container>

                <div className="section_gaps"></div>

            </section>

        </>


    )
    
}

export default BlogItem