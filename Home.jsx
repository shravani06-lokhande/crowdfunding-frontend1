import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";

const Home = () => {
  return (
    <div style={{ backgroundColor: "#FFFFFF", minHeight: "100vh", paddingBottom: "40px" }}>
      <Container className="mt-5">
        {/* Welcome Section */}
        <Row className="text-center mb-5">
          <Col>
            <h1 style={{ fontWeight: "bold", color: "#333" }}>Welcome to Crowdfund</h1>
            <p style={{ fontSize: "18px", color: "#666" }}>
              Empower projects and make dreams come true through crowdfunding.
            </p>
            <Button variant="primary" href="/create-campaign" size="lg">
              Start a Campaign
            </Button>
          </Col>
        </Row>

        {/* Featured Campaigns */}
        <Row className="justify-content-center">
          <Col md={4} className="mb-4">
            <Card className="shadow-sm">
              <Card.Img variant="top" src="/images/edu_fund.jpg" alt="Education Fund" />
              <Card.Body>
                <Card.Title style={{ fontWeight: "bold" }}>Education Fund</Card.Title>
                <Card.Text>Help students get access to quality education.</Card.Text>
                <Button variant="success">Support</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="shadow-sm">
              <Card.Img variant="top" src="/images/medical_fund.jpg" alt="Medical Assistance" />
              <Card.Body>
                <Card.Title style={{ fontWeight: "bold" }}>Medical Assistance</Card.Title>
                <Card.Text>Support medical treatments for those in need.</Card.Text>
                <Button variant="success">Support</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="shadow-sm">
              <Card.Img variant="top" src="/images/startup_fund.jpg" alt="Startup Funding" />
              <Card.Body>
                <Card.Title style={{ fontWeight: "bold" }}>Startup Funding</Card.Title>
                <Card.Text>Help innovative startups bring their ideas to life.</Card.Text>
                <Button variant="success">Support</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
