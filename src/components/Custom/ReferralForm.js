import React from "react"
import Form from "react-bootstrap/Form"
import Row from 'react-bootstrap/Row'
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"
import { useRouter } from "../../util/router.js";
import FormField from '../FormField'


import referralformStyles from "./referralform.module.css"
import Container from "react-bootstrap/Container"

///const referralform = (props) => (

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

export default function ReferralForm() {
  const [state, setState] = React.useState({})

  const router = useRouter();

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then(() => router.push(form.getAttribute("action")))
      .catch((error) => alert(error))
  }

  return (
    <>
    <Container>
      <div className={referralformStyles.formBox}>
          <div className="item-heading">
            <h3 className={referralformStyles.title}>Send A Referral</h3>
          </div>
          <form
            name="Referralform"
            method="post"
            action="/success"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="Referralform" />

            <Row>
              <Col>
                <Form.Group>
                  <label style={{display: 'none'}} htmlFor="name">Client's First Name</label>
                  <input type="text" name="firstname" id="firstname" placeholder="Client's First Name" required />
                </Form.Group>
                <Form.Group>
                  <label htmlFor="name" style={{display: 'none'}} >Client's Last Name</label>
                  <input
                    type="text"
                    name="clientlastname"
                    id="clientlastname"
                    placeholder="Client's Last Name"
                    required
                    onClick={handleChange}
                  />
                </Form.Group>
                </Col>
              </Row>

            <Row>
            <Col>
                <Form.Group>
                  <label htmlFor="email" style={{display: 'none'}}>Client's Email</label>
                  <input
                    type="email"
                    name="clientemail"
                    id="clientemail"
                    placeholder="Client's Email"
                    required
                    onChange={handleChange}
                  />
                </Form.Group>
              
 
                <Form.Group>
                  <label htmlFor="tel" style={{display: 'none'}}>Client's Phone</label>
                  <input
                    type="tel"
                    name="clientphone"
                    id="clientphone"
                    placeholder="Client's Phone"
                    required
                    onChange={handleChange}
                  />
                </Form.Group>
                </Col>
              </Row>

            <Row>
            <Col>
            <Form.Group>
                  <label htmlFor="streetname" style={{display: 'none'}}>Street Address</label>
                  <input
                    type="text"
                    name="streetname"
                    id="streetname"
                    placeholder="123 Clients Street"
                    required
                    onChange={handleChange}
                  />
                </Form.Group>
                </Col>
            </Row>
            <Form.Row>
            <Col xs={6}>
            <Form.Group>
                  <label htmlFor="city" style={{display: 'none'}}>City</label>
                  <input
                    type="text"
                    name="clientcity"
                    id="clientcity"
                    placeholder="Client's City"
                    required
                    onChange={handleChange}
                  />
                </Form.Group>
                </Col>
                <Col xs={2}>
            <Form.Group>
                  <label htmlFor="state" style={{display: 'none'}}>State</label>
                  <input
                    type="text"
                    name="clientstate"
                    id="clientstate"
                    value="CA"
                    required
                    onChange={handleChange}
                  />
                </Form.Group>
                </Col>
                <Col xs={4}>
            <Form.Group>
                  <label htmlFor="address" style={{display: 'none'}}>Zip Code</label>
                  <input
                    type="text"
                    name="clientzipcode"
                    id="clientzipcode"
                    placeholder="Client's Zip Code"
                    required
                    onChange={handleChange}
                  />
                </Form.Group>
                </Col>


            </Form.Row>

            <Row>
              <Col>
                <Form.Group>
                  <label style={{display: 'none'}} htmlFor="name">Your First Name</label>
                  <input type="text" name="referrersfirstname" id="referrersfirstname" placeholder="Your First Name" required />
                </Form.Group>
              
                </Col>
                <Col>
                <Form.Group>
                  <label htmlFor="name" style={{display: 'none'}} >Your Last Name</label>
                  <input
                    type="text"
                    name="referrerslastname"
                    id="referrerslastname"
                    placeholder="Your Last Name"
                    required
                    onClick={handleChange}
                  />
                </Form.Group>
                </Col>
            </Row>

            <Form.Group>
              <div className="actions">
                  <Button
                    type="submit"
                    value="Send Message"
                    className="special"
                    className={referralformStyles.referralSubmit}
                    onChange={handleSubmit}
                  >
                    Submit{" "}
                  </Button>
              </div>
            </Form.Group>
          </form>
      </div>
      </Container>
    </>
  )
}
