import { Component } from "react";

import LibriFantasy from "../../data/fantasy.json";
import LibriHistory from "../../data/history.json";
import LibriHorror from "../../data/horror.json";
import LibriRomance from "../../data/romance.json";
import LibriScifi from "../../data/scifi.json";
import { Badge, Col, Container, Row, Card } from "react-bootstrap";

class AllTheBooks extends Component {
  render() {
    return (
      <Container>
        <Row xs={2} md={4} xl={6} className="justify-content-center mt-3 g-3">
          {LibriFantasy.map((libriF) => (
            <Col key={libriF.asin}>
              <Card className="h-100 d-flex flex-column">
                <Card.Img variant="top" src={libriF.img} />
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{libriF.title}</Card.Title>
                  <Card.Text className="flex-grow-1">
                    <strong>Category: </strong>
                    {libriF.category}
                  </Card.Text>
                  <Badge className="mt-auto">{libriF.price}€</Badge>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default AllTheBooks;
