import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Helpers from "../helpers/Helpers.ts";

function Footer() {
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

//test

export default Footer;
