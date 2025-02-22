import React, { useState } from "react";
import { Container, Form, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const CreateCampaign = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    goal: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === "file" ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

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
        <Card style={{ maxWidth: "500px", margin: "auto", padding: "20px", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}>
          <Card.Body>
            <h2 className="text-center mb-4">Start a Campaign</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Campaign Title</Form.Label>
                <Form.Control type="text" placeholder="Enter campaign title" name="title" value={formData.title} onChange={handleChange} required />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Describe your campaign..." name="description" value={formData.description} onChange={handleChange} required />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Funding Goal ($)</Form.Label>
                <Form.Control type="number" placeholder="Enter funding goal" name="goal" value={formData.goal} onChange={handleChange} required />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Upload Image</Form.Label>
                <Form.Control type="file" name="image" onChange={handleChange} />
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100">
                Create Campaign
              </Button>
            </Form>
            <div className="text-center mt-3">
              <Link to="/" className="text-decoration-none">
                Back to Home
              </Link>
            </div>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default CreateCampaign;
