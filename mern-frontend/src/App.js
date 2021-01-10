import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import HomeScreen from "./views/HomeScreen";
import ProductScreen from "./views/ProductScreen";
import Components from "./components/Components";

function App() {
  return (
    <Router>
      <Components.Header />
      <main className="py-3">
        <Container>
          <Route path="/" component={HomeScreen} exact />
          <Route path="/product/:id" component={ProductScreen} exact />
        </Container>
      </main>
      <Components.Footer />
    </Router>
  );
}

export default App;
