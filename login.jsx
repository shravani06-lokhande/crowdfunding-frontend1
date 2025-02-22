import React from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

const Login = () => {
  return (

        <div
      style={{
        position: "relative",
        backgroundImage: "url('/images/bg_img.jpg')", // 🔹 Change this to your actual image path
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
    >
         {/* 🔹 Overlay Effect */}
  <div
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(255, 255, 255, 0.5)", // White overlay (50% opacity)
    }}
  ></div>
      <Container>
        <Row className="justify-content-center">
          <Col md={6} lg={4}>
            <Card className="shadow-lg">
              <Card.Body>
                <h3 className="text-center mb-4" style={{ fontWeight: "bold", color: "#333" }}>
                  Login
                </h3>
                <Form>
                  <Form.Group controlId="formBasicEmail" className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" required />
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword" className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter password" required />
                  </Form.Group>

                  <div className="d-grid">
                    <Button variant="primary" type="submit">
                      Login
                    </Button>
                  </div>
                </Form>
                <p className="text-center mt-3">
                  Don't have an account? <a href="/register">Sign up</a>
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
