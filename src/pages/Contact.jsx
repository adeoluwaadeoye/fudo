import React from "react";
import {Container, Row, Col, Form, FormGroup, Label, Input} from "reactstrap";
import {FaPhone, FaEnvelope, FaMapMarkerAlt} from "react-icons/fa";
import "../styles/contact.css";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic for form submission here
    console.log("Form submitted!");
  };

  return (
    <Helmet title="Contact">
      <CommonSection title="Contact Us" />
      <section className="contact-section">
        <Container>
          <Row>
            <Col lg="6">
              <h2 className="section-heading mb-4">Contact Us</h2>
              <p className="mb-4">
                We'd love to hear from you! Reach out to us for any inquiries or
                to place an order.
              </p>
              <ul className="contact-info-list">
                <li>
                  <FaPhone className="contact-icon" />
                  <span>+234 (814) 123-4567</span>
                </li>
                <li>
                  <FaEnvelope className="contact-icon" />
                  <span>tastypizza@gmail.com</span>
                </li>
                <li>
                  <FaMapMarkerAlt className="contact-icon" />
                  <span>12 Dave Street, Lekki - Ajah Road, Lagos</span>
                </li>
              </ul>
            </Col>
            <Col lg="6">
              <Form onSubmit={handleSubmit}>
                <FormGroup>
                  <Label for="name">Your Name</Label>
                  <Input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter Full Names"
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="email">Your Email</Label>
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter Your Email"
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="message">Your Message</Label>
                  <Input
                    type="textarea"
                    name="message"
                    id="message"
                    rows="5"
                    required
                  />
                </FormGroup>
                <button type="submit" className="addTOCart__btn login__btn">
                  Send Message
                </button>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Contact;
