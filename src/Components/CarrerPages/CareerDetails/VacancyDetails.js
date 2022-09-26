import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../../../Url";

const VacancyDetails = (props) => {


  return (
    <>
      <section className="VacancyDetail">
        <Container>
          <Row>
            <div dangerouslySetInnerHTML={{ __html: props.text }} />
          </Row>
        </Container>
      </section>
    </>
  );
};

export default VacancyDetails;
