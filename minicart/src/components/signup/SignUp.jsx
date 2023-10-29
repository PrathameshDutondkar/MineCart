import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./signup.scss";

const SignUp = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegistration = async () => {
    try {
      setLoading(true);

      
      if (name && email && password) {
        
        localStorage.setItem("password", password);
        localStorage.setItem("email", email);
        toast.success("Registration successful");
        navigate("/");
      } else {
        toast.error("Please fill in all the fields");
      }
    } catch (error) {
      toast.error("An error occurred during registration");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-container">
      <div className="background-image" />

      <div className="form-container">
        <h2 className="form-title">Sign Up</h2>
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={handleRegistration}
        >
          <Form.Item
            className="form-item"
            label="Name"
            name="name"
            rules={[
              { required: true, message: "Please input your name!" },
            ]}
          >
            <Input
              placeholder="Enter your name"
              className="input"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Item>

          <Form.Item
            className="form-item"
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Please input your email address!" },
              { type: "email", message: "Please enter a valid email address!" },
            ]}
          >
            <Input
              placeholder="Enter your email address"
              className="input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Item>

          <Form.Item
            className="form-item"
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!"}]}
          >
            <Input.Password
              placeholder="Enter your password"
              className="input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Item>

          <Form.Item className="form-button">
            <Button
              htmlType="submit"
              className="custom-button"
              loading={loading}
            >
              {loading ? "Registering" : "SignUp"}
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default SignUp;
