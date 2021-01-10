import React, { useState, useEffect, useRef } from "react";
import { Col, Row } from "react-bootstrap";
import Product from "../components/Product";
import Components from "../components/Components";
import axios from "axios";

function HomeScreen() {
  let isFetched = useRef(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();

    return () => {
      isFetched.current = true;
    };
  }, []);

  async function fetchProducts() {
    const { data } = await axios.get("/api/products");

    if (!isFetched.current) setProducts(data);
  }

  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} lg={4} xl={3}>
            <Components.Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
}

export default HomeScreen;
