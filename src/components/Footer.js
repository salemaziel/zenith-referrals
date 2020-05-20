import React from "react";
import Section from "./Section";
import Container from "react-bootstrap/Container";
import { Link } from "./../util/router.js";
import "./Footer.scss";

function Footer(props) {
  return (
    <Section
      bg={props.bg}
      textColor={props.textColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
      style={{
        backgroundColor: '#0d4879',
        color: 'white',
      }}
    >
      <Container>
        <div className="FooterComponent__inner">
          <div className="brand left">
            <Link to="/">
              <img src={props.logo} alt="Logo"></img>
            </Link>
          </div>
          <div className="links right">
            <Link to="/about">About</Link>
            <Link to="/faq">FAQ</Link>
            <Link to="/contact">Contact</Link>
           {/* <a
              target="_blank"
              href="https://medium.com"
              rel="noopener noreferrer"
            >
              Blog
           </a>*/}
          </div>
          <div className="social right">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icon">
                <i className="fab fa-twitter"></i>
              </span>
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icon">
                <i className="fab fa-facebook-f"></i>
              </span>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icon">
                <i className="fab fa-instagram"></i>
              </span>
            </a>
          </div>
          <div className="copyright left">{props.copyright}</div>
        </div>
      </Container>
    </Section>
  );
}

export default Footer;
