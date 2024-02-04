import React from "react";
import {Container, Row, Col, ListGroup, ListGroupItem} from "reactstrap";
import "../../styles/footer.css";

import {Link} from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3" md="4" sm="6">
            <div className="logo footer__logo text-start">
              <img
                src={require("../../assets/images/res-logo.png")}
                alt="logo"
                className="img"
              />
              <h5>Tasty Treat</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia quisquam tempore placeat imped.
              </p>
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Delivery Time</h5>
            <ListGroup className="deliver__time-list">
              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <span>Sunday - Thursday</span>
                <p>10:00am - 11:00pm</p>
              </ListGroupItem>

              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <span>Friday - Saturday</span>
                <p>Off day</p>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="3" md="4" sm="6">
            {/* Add your content here */}
            <h5 className="footer__title">Contact</h5>
            <ListGroup className="deliver__time-list">
              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <p>Location: Victoria Island, Lagos.</p>
                <span>Phone: +23481400000000</span>
              </ListGroupItem>

              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <span>Email:pizzashop@gmail.com</span>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="3" md="4" sm="6">
            {/* Add your content here */}
            <h5 className="footer__title">Newsletter</h5>
            <p>Subscribe to our Newsletter</p>
            <div className="newsletter">
              <input type="email" placeholder="Enter your Email" />
              <span>
                <i className="ri-send-plane-line"></i>
              </span>
            </div>
          </Col>
        </Row>

        <Row className="mt-5 footer__bottom">
          <Col lg="6" md="6">
            <div className="social__links d-flex align-items-center gap-4 justify-content-left">
              <p className="m-0">Follow:</p>
              <span>
                <Link to="https://www.facebook.com/pizza">
                  <i className="ri-facebook-line"></i>
                </Link>
              </span>

              <span>
                <Link to="https://www.instagram.com/pizza">
                  <i className="ri-instagram-line"></i>
                </Link>
              </span>

              <span>
                <Link to="https://www.pinterest.com/pizza">
                  <i className="ri-pinterest-line"></i>
                </Link>
              </span>

              <span>
                <Link to="https://www.youtube.com/pizza">
                  <i className="ri-youtube-line"></i>
                </Link>
              </span>

              <span>
                <Link to="https://wwww.linkedincom/pizza">
                  <i className="ri-linkedin-line"></i>
                </Link>
              </span>
            </div>
          </Col>
          <Col lg="6" md="6">
            <p className="copyright__text">
              Copyright - 2024, Developed by Adeoluwa Adeoye. All Rights
              Reserved.
            </p>
          </Col>
          <Col lg="6" md="6"></Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
