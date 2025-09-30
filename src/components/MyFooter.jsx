import { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

class MyFooter extends Component {
  render() {
    return (
      <footer className="bg-light text-dark py-3 mt-5">
        <Container>
          <Row>
            <Col className="text-center">
              <p className="mb-0">© 2025 La Mia Azienda. Tutti i diritti riservati.</p>
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }
}

export default MyFooter;
