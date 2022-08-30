/* eslint-disable eqeqeq */
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {FaFacebookF, FaLinkedinIn} from 'react-icons/fa';
import {AiOutlineInstagram, AiFillYoutube} from 'react-icons/ai';


const Menubar = (props) => {


    return (


        <>
        
            <section className='Menubar'>

                <Container>
                    
                    <div className="MenubarContent">

                        <Row className='d_flex'>

                            {/* logo */}
                            <Col sm={2}>

                                <div className="logo">
                                    <Link to='/'><img src="assets/images/logo.png" alt="logo" /></Link>
                                </div>

                            </Col>

                            <Col sm={7}>
                                
                                <div className="MenuItem">

                                    <ul>

                                        <li className={props.active ==  'home' && 'active'}> <Link to='/'>Home</Link> </li>
                                        <li className={props.active == 'service' && 'active'}> <Link to=''>Services</Link> </li>
                                        <li className={props.active == 'portfolio' && 'active'}> <Link to=''>Portfolio</Link> </li>
                                        <li className={props.active == 'aboutus' && 'active'}> <Link to=''>About Us</Link> </li>
                                        <li className={props.active == 'career' && 'active'}> <Link to='/carrer'>Career</Link> </li>
                                        <li className={props.active == 'contactus' && 'active'}> <Link to=''>Contact Us</Link> </li>

                                    </ul>

                                </div>

                            </Col>

                            <Col sm={3}>

                                <div className="SocialIcon d_flex">

                                    <div className="svg fb">
                                        <Link to=''><FaFacebookF /></Link>
                                    </div>

                                    <div className="svg instagram">
                                        <Link to=''><AiOutlineInstagram /></Link>
                                    </div>

                                    <div className="svg linkdin">
                                        <Link to=''><FaLinkedinIn /></Link>
                                    </div>

                                    <div className="svg youtube">
                                        <Link to=''><AiFillYoutube /></Link>
                                    </div>

                                </div>

                            </Col>

                        </Row>

                    </div>
                    
                </Container>

            </section>

        </>

        
    )


}

export default Menubar