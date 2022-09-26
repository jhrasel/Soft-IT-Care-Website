import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { baseUrl } from "../../../Url";

import VacancyDetails from "./VacancyDetails";
import WhoWeAre from "./WhoWeAre";

const CarrerDetailsBanner = () => {
  const [jobDetails, setJobDetails] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const url = baseUrl+`/job/${id}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setJobDetails(data.data));
  }, []);

  const {
    type,
    title,
    salary_type,
    deadline,
    created_at,
    vacancy,
    max_salary,
    min_salary,
    details,
  } = jobDetails;

  return (
    <>
    
      <section className="CarrerBanner CarrerDetailsBanner
      mt-4">
        <Container>
          <Row className="d_flex">
            <Col xs={12} lg={5}>
              <div className="CarrerDetailsBannerContent">
                <h2>{title}</h2>

                <ul>
                  <li>
                    <span>Job Type:</span>
                    { type == "full_time" ? "Full Time" : " "}
                  </li>
                  <li>
                    <span>Deadline:</span>
                    {deadline?deadline.slice(0, 10): ""}
                  </li>
                  <li>
                    <span>Published On:</span>
                    {created_at?created_at.slice(0, 10): []}
                  </li>
                  <li>
                    <span>Vacancy:</span>
                    {vacancy}
                  </li>
                  <li>
                    <span>Experience:</span>3 To 5 Years
                  </li>
                  {salary_type === "negotiable" ? (
                    <li>
                      <span>Salary:</span>Negotiable
                    </li>
                  ) : (
                    <li>
                      <span>Salary: </span>BDT{" "}
                      {min_salary?.toLocaleString("en-US") || ""} - BDT{" "}
                      {max_salary?.toLocaleString("en-US") || ""}
                    </li>
                  )}

                  <li>
                    <span>Office Time:</span>09:30 AM - 06:00 PM
                  </li>
                  <li>
                    <span>Location:</span>SAR Bhaban, Level-5, Ka-78, Pragati Sarani, Kuril, Vatara, 1229 Dhaka, Bangladesh
                  </li>
                </ul>
              </div>
            </Col>

            <Col xs={12} lg={7}>
              <div className="CarrerBannerImg">
                <img
                  src="../assets/images/Carrer_banner.png"
                  alt="Carrer_banner"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <WhoWeAre></WhoWeAre>

      <VacancyDetails text={details}></VacancyDetails>
      
      <div >
        <Container>
        <Row>
        <Col sm={12}>
          <div className="VacancyDetailContent">
            <div className="VacancyDetailItem">
              <div className="GoPages">
                <Link to={'/job_application/'+ id} className="bg getLocation">
                  Apply Now
                </Link>
              </div>
            </div>
          </div>
        </Col>
      </Row>
        </Container>
      </div>

      <div className="section_gaps"></div>
    </>
  );
};

export default CarrerDetailsBanner;