import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import Product from "../components/Product";
import axios from "axios";

function HomeScreen() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    const { data } = await axios.get("/api/products");

    setProducts(data);
  }

  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
}

export default HomeScreen;
