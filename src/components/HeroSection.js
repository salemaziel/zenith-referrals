import React from "react";
import Section from "./Section";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SectionHeader from "./SectionHeader";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import "./HeroSection.scss";
import { useRouter } from "./../util/router.js";



function HeroSection(props) {
  const router = useRouter();

  return (
    <Section
      bg={props.bg}
      textColor={props.textColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container>
        <Row className="align-items-center">
          <Col lg={5} className="text-center text-lg-left">
            <SectionHeader
              title={props.title}
              subtitle={props.subtitle}
              size={1}
              spaced={true}
            ></SectionHeader>
            <Button
              variant={props.buttonColor}
              size="lg"
              /*onClick={props.buttonOnClick}*/
              onClick={() => {
                // Navigate to pricing page
                router.push("/auth/signin");
              }}
              style={{
                backgroundColor: '#0d4879',
                color: 'white',
              }}
            >
              Login
            </Button>
            <div style={{ display: "inline-flex", width: "15px" }}></div>
            <Button
              variant={props.buttonColor}
              size="lg"
              /*onClick={props.buttonOnClick}*/
              onClick={() => {
                // Navigate to pricing page
                router.push("/auth/signup");
              }}
              
              style={{
                backgroundColor: '#ff9900',
                color: 'white',

              }}
            >
              Sign Up
            </Button>
          </Col>
          <Col></Col>
          <Col className="offset-lg-1 mt-5 mt-lg-0 ">
            <figure className="HeroSection__image-container mx-auto">
              <Image src={props.image} fluid={true}></Image>
            </figure>
          </Col>
        </Row>
      </Container>
    </Section>
  );
}

export default HeroSection;
