import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const OtherInfoForm = ({
  info,
  setInfo,
  page,
  setPage,
  FormTitles,
  handleSubmission,
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
                    {/* Salary */}
                    <div className="CustomeInput">
                      <label htmlFor="">Your Expected Salary</label>
                      <input
                        type="number"
                        placeholder="Your Expected Salary"
                        name="expected_salary"
                        value={info.expected_salary}
                        onChange={(e) => {
                          setInfo({ ...info, expected_salary: e.target.value });
                        }}
                      />
                    </div>

                    {/* Portfolio */}
                    <div className="CustomeInput">
                      <label htmlFor="">
                        Enter Your Portfolio Link/Github Link
                      </label>
                      <input
                        type="text"
                        placeholder="Your Portfolio Link/Github Link"
                        name="portfolio_or_github_link"
                        value={info.portfolio_or_github_link}
                        onChange={(e) => {
                          setInfo({
                            ...info,
                            portfolio_or_github_link: e.target.value,
                          });
                        }}
                      />
                    </div>

                    {/* Other Work/Project Links */}
                    <div className="CustomeInput">
                      <label htmlFor="">Other Work/Project Links</label>
                      <input
                        type="text"
                        placeholder="Your Other Work/Project Links"
                        name="project_link"
                        value={info.project_link}
                        onChange={(e) => {
                          setInfo({ ...info, project_link: e.target.value });
                        }}
                      />
                    </div>

                    {/* Enter Your LinkedIn Profile Link */}
                    <div className="CustomeInput">
                      <label htmlFor="">Enter Your LinkedIn Profile Link</label>
                      <input
                        type="text"
                        placeholder="Your LinkedIn Profile Link"
                        name="linkedIn_profile_link"
                        value={info.linkedIn_profile_link}
                        onChange={(e) => {
                          setInfo({
                            ...info,
                            linkedIn_profile_link: e.target.value,
                          });
                        }}
                      />
                    </div>

                    {/* What Makes You Fit For This Job */}
                    <div className="CustomeInput">
                      <label htmlFor="">What Makes You Fit For This Job</label>
                      <textarea
                        rows="5"
                        placeholder="Write What Makes You Fit For This Job"
                        name="why_fit_for_job"
                        value={info.why_fit_for_job}
                        onChange={(e) => {
                          setInfo({ ...info, why_fit_for_job: e.target.value });
                        }}
                      ></textarea>
                    </div>

                    <div className="CustomeInput">
                      <div className="VacancyDetailItem">
                        <div className="GoPages">
                          <button
                            className="bg"
                            disabled={page === 0}
                            onClick={() => {
                              setPage((currPage) => currPage - 1);
                            }}
                          >
                            Prev
                          </button>
                          <button
                            className="bg getLocation"
                            onClick={handleSubmission}
                            // onSubmit={handelSubmit}
                            // onClick={() => {
                            //   if (page === FormTitles.length - 1) {
                            //     alert("FORM SUBMITTED");
                            //     console.log(formData);
                            //   } else {
                            //     setPage((currPage) => currPage + 1);
                            //   }
                            // }}
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

export default OtherInfoForm;
