import React, { useState } from "react";
import axios from "axios";
import { TextField, Button, Card, CardContent } from "@mui/material";
import { LocationOn, Phone, Email } from "@mui/icons-material";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("https://691af3a62d8d78557570d735.mockapi.io/hospital", formData);

      alert("Message Sent Successfully!");
      console.log(res.data);

      // Form reset
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to send message!");
    }
  };

  return (
    <div className="w-full min-h-screen bg-gray-100 p-6">

      <h1 className="text-4xl font-bold text-center mb-8 text-blue-600">
        Contact Us
      </h1>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">

        <div>
          <Card className="mb-6">
            <CardContent>
              <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>

              <div className="flex items-center gap-3 mb-3">
                <LocationOn className="text-blue-600" />
                <p className="text-gray-700">
                  123 City Hospital Road, Lucknow, India
                </p>
              </div>

              <div className="flex items-center gap-3 mb-3">
                <Phone className="text-green-600" />
                <p className="text-gray-700">+91 98765 43210</p>
              </div>

              <div className="flex items-center gap-3 mb-3">
                <Email className="text-red-600" />
                <p className="text-gray-700">support@hospitalcare.com</p>
              </div>
            </CardContent>
          </Card>

          <div className="w-full h-64 rounded-xl overflow-hidden shadow-lg border">
            <iframe
              title="map"
              width="100%"
              height="100%"
              loading="lazy"
              allowFullScreen
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.943631226892!2d80.94458857530083!3d26.84669387668818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be2d3b46cc5bd%3A0xbcd1e2f0ca6c5849!2sLucknow%20City%20Hospital!5e0!3m2!1sen!2sin!4v1703409829034"
            ></iframe>
          </div>
        </div>

        <Card className="shadow-xl">
          <CardContent>

            <h2 className="text-2xl font-semibold mb-4">Send a Message</h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">

              <TextField
                label="Full Name"
                name="name"
                variant="outlined"
                fullWidth
                value={formData.name}
                onChange={handleChange}
              />

              <TextField
                label="Email"
                name="email"
                type="email"
                variant="outlined"
                fullWidth
                value={formData.email}
                onChange={handleChange}
              />

              <TextField
                label="Your Message"
                name="message"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                value={formData.message}
                onChange={handleChange}
              />

              <Button type="submit" variant="contained" color="primary" size="large">
                Send Message
              </Button>

            </form>

          </CardContent>
        </Card>

      </div>

    </div>
  );
}
