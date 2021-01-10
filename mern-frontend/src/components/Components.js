import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Col, Container, Row, Nav, Navbar, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Helpers from "../helpers/Helpers.ts";

class Components {
  static Product({ product }) {
    return (
      <Card className="my-3 p-3 rounded">
        <Link to={`/product/${product["_id"]}`}>
          <Card.Img src={product["image"]} />
        </Link>

        <Card.Body>
          <Link to={`/product/${product["_id"]}`}>
            <Card.Title>
              <strong>{product["name"]}</strong>
            </Card.Title>
          </Link>

          <Card.Text as="div" className="mb-2">
            <Components.Rating value={product["rating"]} text={`${product["numReviews"]} reviews`} />
          </Card.Text>

          <Card.Text as="h3">${product["price"]}</Card.Text>
        </Card.Body>
      </Card>
    );
  }

  static Rating({ value, text, color }) {
    return (
      <div className="rating">
        <span>
          <i style={{ color: color }} className={value >= 1 ? "fas fa-star" : value >= 0.5 ? "fas fa-star-half-alt" : "far fa-star"}></i>
        </span>
        <span>
          <i style={{ color: color }} className={value >= 2 ? "fas fa-star" : value >= 1.5 ? "fas fa-star-half-alt" : "far fa-star"}></i>
        </span>
        <span>
          <i style={{ color: color }} className={value >= 3 ? "fas fa-star" : value >= 2.5 ? "fas fa-star-half-alt" : "far fa-star"}></i>
        </span>
        <span>
          <i style={{ color: color }} className={value >= 4 ? "fas fa-star" : value >= 3.5 ? "fas fa-star-half-alt" : "far fa-star"}></i>
        </span>
        <span>
          <i style={{ color: color }} className={value >= 5 ? "fas fa-star" : value >= 4.5 ? "fas fa-star-half-alt" : "far fa-star"}></i>
        </span>
        <span>{text && text}</span>
      </div>
    );
  }

  static Header() {
    return (
      <header>
        <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
          <Container>
            <LinkContainer to="/">
              <Navbar.Brand href="/">MasterShop</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <LinkContainer to="/cart">
                  <Nav.Link href="/cart">
                    <i className="fas fa-shopping-cart"></i> Cart
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to="/signin">
                  <Nav.Link href="/signin">
                    <i className="fas fa-user"></i> Sign In
                  </Nav.Link>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    );
  }

  static Footer() {
    return (
      <footer>
        <Container>
          <Row>
            <Col className="text-center py-3">Copyright {Helpers.footerDate()} &copy; MasterShop</Col>
          </Row>
        </Container>
      </footer>
    );
  }
}

Components.Rating.defaultProps = {
  color: "black",
};

export default Components;
