import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {FaFacebookF, FaLinkedinIn} from 'react-icons/fa';
import {AiOutlineInstagram, AiFillYoutube, AiOutlineFieldTime} from 'react-icons/ai';
import {MdLocationOn} from 'react-icons/md';
import {BsTelephone} from 'react-icons/bs';
import {FaEnvelope} from 'react-icons/fa';
import {MdAccessTime} from 'react-icons/md';

const Footer = () => {


    return (


        <>
        
            <section className='Footer'>

                <div className="section_gaps"></div>

                <Container>

                    <Row className="justify-content-center">

                        <Col sm={12}>

                            <div className="MenuItem">

                                <ul>

                                    <li> <Link to=''>Home</Link> </li>
                                    <li> <Link to=''>Services</Link> </li>
                                    <li> <Link to=''>Portfolio</Link> </li>
                                    <li> <Link to=''>About Us</Link> </li>
                                    <li> <Link to=''>Career</Link> </li>
                                    <li> <Link to=''>Contact Us</Link> </li>

                                </ul>

                            </div>

                        </Col>

                    </Row>

                    <div className="FooterContent">

                        <Row className="">

                            <Col sm={12} lg={4}>

                                <div className="FooterItem left">

                                    <div className="img">
                                        <img src="assets/images/footer_logo.png" alt="" />
                                    </div>

                                    <p>Our mantra is to bring an evolution in the business world providing top-class services and game changing innovations.</p>

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

                                </div>

                            </Col>

                            <Col sm={12} lg={8}>

                                <div className="FooterItem right">
                                    
                                    <h3>
                                        Our All Offices Branch
                                    </h3>

                                    <div className="OfficeAddress d_flex">
                                        
                                        <div className="OfficeAddressItem">
                                            
                                            <div className="svg">
                                                <MdLocationOn/>
                                            </div> 

                                            <div className="text">
                                                <h4>Head Office</h4>
                                                <p>Level: 5, House: 32/34, Road: 07, Block: C, Niketan, Gulshan – 1, Dhaka – 1212</p>
                                            </div>

                                        </div>

                                        <div className="OfficeAddressItem">
                                            
                                            <div className="svg">
                                                <MdLocationOn/>
                                            </div> 

                                            <div className="text">
                                                <h4>Chittagong Branch</h4>
                                                <p>Level-5, 225 /A Chowdhury Center, CDA Avenue, Muradpur(GEC Circle), Chittagong - 7077</p>
                                            </div>

                                        </div>

                                        <div className="OfficeAddressItem">
                                            
                                            <div className="svg">
                                                <MdLocationOn/>
                                            </div> 

                                            <div className="text">
                                                <h4>Dubai Branch</h4>
                                                <p>Level-5, 225 /A Chowdhury Center, CDA Avenue, Muradpur(GEC Circle), Chittagong - 7077</p>
                                            </div>

                                        </div>

                                    </div>

                                </div>               

                            </Col>

                        </Row>


                    </div>
                    
                </Container>

            </section>

            <section className='TinyFooter'>
                
                <Container>

                    <Row>

                        <Col sm={4}>

                            <div className="Support d_flex">

                                <div className="svg">
                                    <BsTelephone/>
                                </div>

                                <div className="text">
                                    <a href="tel:0 123 456 789">+880 123 456 789</a>
                                    <a href="tel:0 987 654 321">+880 987 654 321</a>
                                </div>

                            </div>

                        </Col>

                        <Col sm={4}>

                            <div className="Support d_flex">

                                <div className="svg">
                                    <FaEnvelope/>
                                </div>

                                <div className="text">
                                    <a href="mailto:support@softitcare.com">support@softitcare.com</a>
                                    <a href="mailto:office@softitcare.com">office@softitcare.com</a>
                                </div>

                            </div>

                        </Col>

                        <Col sm={4}>

                            <div className="Support d_flex">

                                <div className="svg">
                                    <MdAccessTime/>
                                </div>

                                <div className="text">
                                    <p>Office Hour: 9:30 PM - 6:00 PM</p>
                                    <p>Saturday - Thursday</p>
                                </div>

                            </div>

                        </Col>

                    </Row>

                </Container>

            </section>

        </>


    )


}

export default Footer