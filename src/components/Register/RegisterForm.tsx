import React, { useState } from "react";
import axios, { AxiosError } from "axios";
import "./RegisterForm.css";

interface RegistrationData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const RegisterForm: React.FC = () => {
  const [formData, setFormData] = useState<RegistrationData>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post<string>(
        "http://localhost:8080/api/register/save",
        formData
      );
      console.log(response.data);
      // Handle successful registration, e.g., show success message
    } catch (error: any) {
      const axiosError = error as AxiosError;
      if (axiosError.response) {
        console.error("Registration failed:", axiosError.response.data);
      } else {
        console.error("Registration failed:", error.message);
      }
      // Handle registration failure, e.g., display error message
    }
  };

  return (
    <div className="register-form-container">
      {" "}
      {/* Apply a class for styling */}
      <form onSubmit={handleSubmit} className="register-form">
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterForm;
