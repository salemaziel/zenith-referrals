import React from "react";
import Section from "./Section";
import Container from "react-bootstrap/Container";
import SectionHeader from "./SectionHeader";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { useAuth } from "./../util/auth.js";
import "./DashboardPlaceholder.scss";

function DashboardPlaceholder(props) {
  const auth = useAuth();
  if (!auth.user) return null;

  return (
    <Section
      bg={props.bg}
      textColor={props.textColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container>
        <SectionHeader
          title={`Hey there 👋`}
          subtitle={`You are logged in as ${auth.user.email}`}
          size={1}
          spaced={true}
          className="text-center"
        ></SectionHeader>
        <Row className="align-items-center mt-5">
          <Col lg={6}>
            This would be a good place to build your custom product features
            after exporting your codebase.
            <br />
            <br />
            You can grab the current user, query your database, render custom
            components, and anything else you'd like.
            <br />
            <br />
            Divjoy sets you up with everything you need so that you can get
            right to work on building your web app.
          </Col>
          <Col className="mt-5 mt-lg-0">
            <figure className="DashboardPlaceholder__image-container mx-auto">
              <Image
                src="https://uploads.divjoy.com/undraw-personal_settings_kihd.svg"
                fluid={true}
              ></Image>
            </figure>
          </Col>
        </Row>
      </Container>
    </Section>
  );
}

export default DashboardPlaceholder;
