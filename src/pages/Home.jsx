import React, {useState, useEffect} from "react";
import Helmet from "../components/Helmet/Helmet";
import {Container, Row, Col, ListGroup, ListGroupItem} from "reactstrap";
import "../styles/hero-section.css";
import "../styles/home.css";
import {Link} from "react-router-dom";
import Category from "../components/UI/category/Category";

import featureImg01 from "../assets/images/service-01.png";
import featureImg02 from "../assets/images/service-02.png";
import featureImg03 from "../assets/images/service-03.png";

import products from "../assets/fake-data/products";

import foodCategoryImg01 from "../assets/images/hamburger.png";
import foodCategoryImg02 from "../assets/images/pizza.png";
import foodCategoryImg03 from "../assets/images/bread.png";

import ProductCard from "../components/UI/product-card/ProductCard";
import "../styles/product-card.css";

import whyImg from "../assets/images/location.png";

import TestimonialSlider from "../components/UI/slider/TestimonialSlider";

const featureData = [
  {
    title: "Quick Delivery",
    imgUrl: featureImg01,
    desc: "Experience lightning-fast delivery services that bring your favorite dishes right to your doorstep.",
  },
  {
    title: "Super Dine In",
    imgUrl: featureImg02,
    desc: "Indulge in a delightful dine-in experience with our cozy ambiance and a menu that caters to all taste buds.",
  },
  {
    title: "Easy Pick Up",
    imgUrl: featureImg03,
    desc: "Conveniently pick up your orders with our easy and efficient takeaway services for those on the go.",
  },
];

const Home = () => {
  const [category, setCategory] = useState("ALL");
  const [allProducts, setAllProducts] = useState(products);

  const [hotPizza, setHotPizza] = useState([]);

  useEffect(() => {
    const filteredPizza = products.filter((item) => item.category === "Pizza");
    const slicePizza = filteredPizza.slice(0, 4);
    setHotPizza(slicePizza);
  }, []);

  useEffect(() => {
    if (category === "ALL") {
      setAllProducts(products);
    }

    if (category === "BURGER") {
      const filteredProducts = products.filter(
        (item) => item.category === "Burger"
      );
      setAllProducts(filteredProducts);
    }

    if (category === "PIZZA") {
      const filteredProducts = products.filter(
        (item) => item.category === "Pizza"
      );
      setAllProducts(filteredProducts);
    }

    if (category === "BREAD") {
      const filteredProducts = products.filter(
        (item) => item.category === "Bread"
      );
      setAllProducts(filteredProducts);
    }
  }, [category]);

  return (
    <Helmet title="Home">
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <h5 className="mb-4">Delicious Pizza Awaits</h5>
                <h1 className="mb-4 hero__title">
                  <span>CRAVING?</span> Satisfy it <br />
                  with<span> our pizza</span>
                </h1>
                <p>
                  Indulge in the irresistible taste of our signature pizzas,
                  <br />
                  crafted just for you!
                </p>
                <div className="hero__btns d-flex align-items-center gap-4">
                  <button className="order__btn  d-flex align-items-center justify-content-between">
                    Order Now <i className="ri-arrow-right-s-line"></i>
                  </button>
                  <button className="all__foods-btn">
                    <Link to="/foods">See all foods</Link>
                  </button>
                </div>
                <div className="hero__service d-flex align-items-center gap-5 mt-5">
                  <p className="d-flex align-items-center gap-2">
                    <span className="shipping__icon">
                      <i className="ri-car-line"></i>
                    </span>
                    No shipping charge
                  </p>
                  <p className="d-flex align-items-center gap-2">
                    <span className="shipping__icon">
                      <i className="ri-shield-check-line"></i>
                    </span>
                    100% secure checkout
                  </p>
                </div>
              </div>
            </Col>
            <Col lg="6" md="6">
              <img
                src={require("../assets/images/hero.png")}
                alt="hero-img"
                className="w-100 hero"
              />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <Category />
      </section>

      <section className="bckg">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h5 className="feature__subtitle mb-4">Discover Our Menu</h5>
              <h2 className="feature__title">Indulge from Home</h2>
              <h2 className="feature__title">
                Let Us <span>Serve You</span>
              </h2>
              <p className="mb-1 mt-4 feature__text">
                Delight in our delectable offerings made with passion and
                precision.
              </p>
              <p>
                Explore an exquisite culinary journey, where every bite is an
                experience.
              </p>
            </Col>
            {featureData.map((item, index) => (
              <Col lg="4" md="6" sm="6" key={index} className="mt-5">
                <div className="feature__item text-center px-5 py-3">
                  <img
                    src={item.imgUrl}
                    alt="feature-img"
                    className="w-25 mb-3"
                  />
                  <h5 className="fw-bold mb-3">{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2>Popular Foods</h2>
            </Col>
            <Col lg="12">
              <div className="food__category d-flex align-items-center justify-content-center gap-3">
                <button
                  className={`all__btn ₦{
                    category === "ALL" ? "foodBtnActive" : ""
                  }`}
                  onClick={() => setCategory("ALL")}
                >
                  All
                </button>

                <button
                  className={`d-flex align-items-center gap-2 ₦{
                    category === "BURGER" ? "foodBtnActive" : ""
                  }`}
                  onClick={() => setCategory("BURGER")}
                >
                  <img src={foodCategoryImg01} alt="" />
                  Burger
                </button>

                <button
                  className={`d-flex align-items-center gap-2 ₦{
                    category === "PIZZA" ? "foodBtnActive" : ""
                  }`}
                  onClick={() => setCategory("PIZZA")}
                >
                  <img src={foodCategoryImg02} alt="" />
                  Pizza
                </button>

                <button
                  className={`d-flex align-items-center gap-2 ₦{
                    category === "BREAD" ? "foodBtnActive" : ""
                  }`}
                  onClick={() => setCategory("BREAD")}
                >
                  <img src={foodCategoryImg03} alt="" />
                  Bread
                </button>
              </div>
            </Col>

            {allProducts.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mt-5">
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="bckg why__choose-us">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <img src={whyImg} alt="why-tasty-treat" className="w-100" />
            </Col>
            <Col lg="6" md="6">
              <div className="why__tasty-treat">
                <h2 className="tasty__treat-title mb-4">
                  Why <span>Tasty Treat</span>
                </h2>
                <p className="tasty__treat-desc">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea
                  facere temporibus voluptate veritatis tenetur sint similique
                  beatae corrupti quae tempore debitis, consectetur culpa nobis
                  cum aperiam magni. Recusandae quis saepe odit excepturi esse,
                  tenetur, commodi pariatur maxime, adipisci molestiae ea
                  dolorum illum rerum. Doloremque, autem.
                </p>

                <ListGroup className="mt-4">
                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose__us-title d-flex align-items-center gap-2">
                      <i className="ri-checkbox-circle-line"></i>Fresh and
                      Delicious Foods
                    </p>
                    <p className="choose__us-desc">
                      Savor our culinary delights, crafted with the finest
                      ingredients for a delightful dining experience.
                    </p>
                  </ListGroupItem>

                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose__us-title d-flex align-items-center gap-2">
                      <i className="ri-checkbox-circle-line"></i> Quality
                      Customer Support
                    </p>
                    <p className="choose__us-desc">
                      Experience dedicated support from our team, ensuring your
                      satisfaction and enjoyment.
                    </p>
                  </ListGroupItem>

                  <ListGroupItem className="border-0 ps-0">
                    <p className=" choose__us-title d-flex align-items-center gap-2">
                      <i className="ri-checkbox-circle-line"></i> Convenient
                      Ordering from Anywhere
                    </p>
                    <p className="choose__us-desc">
                      Place your orders hassle-free, from the comfort of your
                      home or on the go, using our user-friendly platform.
                    </p>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="bckg pt-0 hot__pizza">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h2>Hot Pizza</h2>
            </Col>

            {hotPizza.map((item) => (
              <Col lg="3" md="4" key={item.id}>
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="testimonial">
                <h5 className="testimonial__subtitle mb-4">Testimonial</h5>
                <h2 className="testimonial__title mb-4cd">
                  What our <span>Customers</span> are saying
                </h2>
                <p className="testimonial__desc">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga
                  fugit, sunt neque, quo architecto mollitia nulla assumenda
                  accusantium placeat voluptatum tempore impedit ea laudantium
                  esse corrupti doloribus? Totam, architecto recusandae?
                </p>

                <TestimonialSlider />
              </div>
            </Col>

            <Col lg="6" md="6">
              <img
                src={require("../assets/images/network.png")}
                alt="testimonial-img"
                className="img w-100"
              />
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
