import { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const Register = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        phone: "",
    });

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // 🛑 Check for empty fields
        if (!user.name || !user.email || !user.password || !user.confirmPassword || !user.phone) {
            alert("⚠️ All fields are required!");
            return;
        }

        // ❌ Check if passwords match
        if (user.password !== user.confirmPassword) {
            alert("❌ Passwords do not match!");
            return;
        }

        try {
            const response = await fetch("http://localhost:5000/api/users/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(user),
            });

            const data = await response.json();

            if (response.ok) {
                alert("✅ Registration Successful!");
                // 🔄 Reset the form after successful registration
                setUser({ name: "", email: "", password: "", confirmPassword: "", phone: "" });
            } else {
                alert(`❌ Registration Failed: ${data.message || "Please try again."}`);
            }
        } catch (error) {
            console.error("Error:", error);
            alert("❌ Registration failed. Server not responding!");
        }
    };

    return (
        <div
            style={{
                position: "relative",
                backgroundImage: "url('/images/bg_img.jpg')",
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
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(255, 255, 255, 0.5)",
                }}
            ></div>

            <Container style={{ position: "relative", zIndex: 1 }}>
                <Row className="justify-content-center">
                    <Col md={6} lg={4}>
                        <Card>
                            <Card.Body>
                                <h2 className="text-center">Register</h2>
                                <form onSubmit={handleSubmit}>
                                    <label>Enter Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Enter Full Name"
                                        className="form-control mb-2"
                                        onChange={handleChange}
                                        value={user.name}
                                        required
                                    />

                                    <label>Enter Mobile No.</label>
                                    <input
                                        type="number"
                                        name="phone"
                                        placeholder="Enter Contact Number"
                                        className="form-control mb-2"
                                        onChange={handleChange}
                                        value={user.phone}
                                        required
                                    />

                                    <label>Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Enter email"
                                        className="form-control mb-2"
                                        onChange={handleChange}
                                        value={user.email}
                                        required
                                    />

                                    <label>Password</label>
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="Enter password"
                                        className="form-control mb-3"
                                        onChange={handleChange}
                                        value={user.password}
                                        required
                                    />

                                    <label>Re-Enter Password</label>
                                    <input
                                        type="password"
                                        name="confirmPassword"
                                        placeholder="Enter password"
                                        className="form-control mb-4"
                                        onChange={handleChange}
                                        value={user.confirmPassword}
                                        required
                                    />

                                    <button type="submit" className="btn btn-primary w-100">Sign Up</button>
                                </form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Register;
