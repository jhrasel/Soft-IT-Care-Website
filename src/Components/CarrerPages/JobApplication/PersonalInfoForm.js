import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const PersonalInfoForm = ({
  info,
  setInfo,
  handleFile,
  page,
  setPage,
  FormTitles,
}) => {
  return (
    <>
      <section className="PersonalInfoForm">
        <div className="section_gaps"></div>

        <Container>
          <from>
            <Row>
              <Col sm={12}>
                <div className="PersonalInfoFormContent">
                  <h2 className="text-center">
                    Job Application For “Senior Software Engineer”
                  </h2>

                  <div className="FormItem">
                    {/* Name */}
                    <div className="CustomeInput">
                      <label htmlFor="">Full name</label>
                      <input
                        type="text"
                        placeholder="Full name"
                        name="full_name"
                        value={info.full_name}
                        onChange={(e) => {
                          setInfo({ ...info, full_name: e.target.value });
                        }}
                      />
                    </div>

                    {/* Email */}
                    <div className="CustomeInput">
                      <label htmlFor="">Email Address</label>
                      <input
                        type="email"
                        placeholder="you@company.com"
                        name="email_address"
                        value={info.email_address}
                        onChange={(e) => {
                          setInfo({ ...info, email_address: e.target.value });
                        }}
                      />
                    </div>

                    {/* Phone number */}
                    <div className="CustomeInput">
                      <label htmlFor="">Phone number</label>
                      <input
                        type="number"
                        placeholder="+1 (555) 000-0000"
                        name="phone_number"
                        value={info.phone_number}
                        onChange={(e) => {
                          setInfo({ ...info, phone_number: e.target.value });
                        }}
                      />
                    </div>

                    {/* Upload CV */}
                    <div className="CustomeInput">
                      <label htmlFor="">Upload CV</label>
                      <input type="file" name="file" onChange={handleFile} />
                    </div>

                    {/* Upload CV */}
                    <div className="CustomeInput agree d_flex">
                      <div class="checkbox bounce">
                        <input type="checkbox" />
                        <svg viewBox="0 0 21 21">
                          <polyline points="5 10.75 8.5 14.25 16 6"></polyline>
                        </svg>
                      </div>

                      <label htmlFor="">
                        You agree to our friendly{" "}
                        <Link to="">privacy policy</Link> .
                      </label>
                    </div>

                    <div className="CustomeInput">
                      <div className="VacancyDetailItem">
                        <div className="GoPages">
                          
                          <button
                            className="bg"
                            onClick={() => {
                              if (page === FormTitles.length - 1) {
                                alert("FORM SUBMITTED");
                                // console.log(formData);
                              } else {
                                setPage((currPage) => currPage + 1);
                              }
                            }}
                          >
                            {page === FormTitles.length - 1 ? "Submit" : "Next"}
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="CustomeInput">
                      <div className="img">
                        <img
                          src="../assets/images/job_application.png"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </from>
        </Container>

        <div className="section_gaps"></div>
      </section>
    </>
  );
};

export default PersonalInfoForm;
