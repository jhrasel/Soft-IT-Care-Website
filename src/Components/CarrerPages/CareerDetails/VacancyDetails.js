import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const VacancyDetails = () => {

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

                                    <h3>What We Are Looking For</h3>
                                    <p>Soft IT Care is a Web design and development service providing company in Bangladesh. It has versatile functions. It is the only Best Web Design and Development Company which has all in one. We specialize in Software Development, e-Commerce, Graphic Design, Marketing and SEO, Website Security, Mobile Application Development, and the list goes on.</p>

                                </div>

                                {/* Job Responsibilities */}
                                <div className="VacancyDetailItem">

                                    <h3>Job Responsibilities</h3>
                                    
                                    <ul>
                                        <li>Soft IT Care is a Web design and development service providing company in Bangladesh. It has versatile functions. It is the only Best Web Design and Development Company which has all in one. We specialize in Software Development.</li>
                                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit fermentum nisi, convallis adipiscing leo nisl faucibus egestas.</li>
                                        <li>Aliquam aenean sed sit sed. Faucibus turpis urna, etiam at turpis odio viverra tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit fermentum nisi, convallis adipiscing leo nisl faucibus egestas.</li>
                                        <li>A dolor placerat arcu, auctor in pharetra, nunc. Vel leo viverra aliquet et. Ullamcorper integer dictum urna, eu, enim nibh netus. Hendrerit facilisis urna enim, ipsum, congue enim leo, diam.</li>
                                        <li>Soft IT Care is a Web design and development service providing company in Bangladesh. It has versatile functions. It is the only Best Web Design and Development Company which has all in one. We specialize in Software Development.</li>
                                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit fermentum nisi, convallis adipiscing leo nisl faucibus egestas.</li>
                                        <li>Aliquam aenean sed sit sed. Faucibus turpis urna, etiam at turpis odio viverra tristique.</li>
                                        <li>A dolor placerat arcu, auctor in pharetra, nunc. Vel leo viverra aliquet et. Ullamcorper integer dictum urna, eu, enim nibh netus. Hendrerit facilisis urna enim, ipsum, congue enim leo, diam.</li>
                                    </ul>

                                </div>

                                {/* Educational Requirements */}
                                <div className="VacancyDetailItem">

                                    <h3>Educational Requirements</h3>
                                    
                                    <ul>
                                        <li>Soft IT Care is a Web design and development service providing company in Bangladesh. It has versatile functions. It is the only Best Web Design and Development Company which has all in one. We specialize in Software Development.</li>
                                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit fermentum nisi, convallis adipiscing leo nisl faucibus egestas.</li>
                                    </ul>

                                </div>

                                {/* Skills That You Need To Have */}
                                <div className="VacancyDetailItem">

                                    <h3>Skills That You Need To Have</h3>
                                    
                                    <ul>
                                        <li>Soft IT Care is a Web design and development service providing company in Bangladesh. It has versatile functions. It is the only Best Web Design and Development Company which has all in one. We specialize in Software Development.</li>
                                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit fermentum nisi, convallis adipiscing leo nisl faucibus egestas.</li>
                                        <li>Aliquam aenean sed sit sed. Faucibus turpis urna, etiam at turpis odio viverra tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit fermentum nisi, convallis adipiscing leo nisl faucibus egestas.</li>
                                        <li>A dolor placerat arcu, auctor in pharetra, nunc. Vel leo viverra aliquet et. Ullamcorper integer dictum urna, eu, enim nibh netus. Hendrerit facilisis urna enim, ipsum, congue enim leo, diam.</li>
                                    </ul>

                                </div>

                                {/* What We Offer */}
                                <div className="VacancyDetailItem">

                                    <h3>What We Offer</h3>
                                    
                                    <ul>
                                        <li>Soft IT Care is a Web design and development service providing company in Bangladesh. It has versatile functions. It is the only Best Web Design and Development Company which has all in one. We specialize in Software Development.</li>
                                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit fermentum nisi, convallis adipiscing leo nisl faucibus egestas.</li>
                                        <li>Aliquam aenean sed sit sed. Faucibus turpis urna, etiam at turpis odio viverra tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit fermentum nisi, convallis adipiscing leo nisl faucibus egestas.</li>
                                        <li>A dolor placerat arcu, auctor in pharetra, nunc. Vel leo viverra aliquet et. Ullamcorper integer dictum urna, eu, enim nibh netus. Hendrerit facilisis urna enim, ipsum, congue enim leo, diam.</li>
                                    </ul>

                                </div>

                                {/* What We Offer */}
                                <div className="VacancyDetailItem">

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