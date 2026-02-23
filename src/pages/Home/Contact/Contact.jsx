import React, { useState } from "react";
import Swal from "sweetalert2";
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdAccessTime,
  MdSend,
} from "react-icons/md";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      Swal.fire({
        title: "Success!",
        text: "Your message has been sent successfully. We'll get back to you soon.",
        icon: "success",
        confirmButtonColor: "#e63946",
        confirmButtonText: "Great!",
        timer: 3000,
        timerProgressBar: true,
      });

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-base-200 py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Contact <span className="text-primary">Us</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with us. We'd love to hear from you!
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Phone */}
          <div className="card bg-base-100 shadow-lg hover:shadow-xl transition">
            <div className="card-body items-center text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <MdPhone className="text-3xl text-primary" />
              </div>
              <h3 className="font-bold text-lg">Phone</h3>
              <p className="text-gray-600">+880 1712-345678</p>
              <p className="text-gray-600">+880 1812-345678</p>
            </div>
          </div>

          {/* Email */}
          <div className="card bg-base-100 shadow-lg hover:shadow-xl transition">
            <div className="card-body items-center text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <MdEmail className="text-3xl text-primary" />
              </div>
              <h3 className="font-bold text-lg">Email</h3>
              <p className="text-gray-600">info@yourcompany.com</p>
              <p className="text-gray-600">support@yourcompany.com</p>
            </div>
          </div>

          {/* Address */}
          <div className="card bg-base-100 shadow-lg hover:shadow-xl transition">
            <div className="card-body items-center text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <MdLocationOn className="text-3xl text-primary" />
              </div>
              <h3 className="font-bold text-lg">Address</h3>
              <p className="text-gray-600">Mirpur-1</p>
              <p className="text-gray-600">Dhaka-1216, Bangladesh</p>
            </div>
          </div>

          {/* Working Hours */}
          <div className="card bg-base-100 shadow-lg hover:shadow-xl transition">
            <div className="card-body items-center text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <MdAccessTime className="text-3xl text-primary" />
              </div>
              <h3 className="font-bold text-lg">Working Hours</h3>
              <p className="text-gray-600">Mon-Fri: 9AM - 6PM</p>
              <p className="text-gray-600">Sat: 10AM - 4PM</p>
              <p className="text-gray-600">Sunday: Closed</p>
            </div>
          </div>
        </div>

        {/* Map & Form Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Google Map */}
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title text-2xl text-primary mb-4">
                Our Location
              </h2>
              <div className="rounded-lg overflow-hidden h-[400px]">
                <iframe
                  title="Google Map"
                  src="https://www.google.com/maps?q=Mirpur-1,+Dhaka-1216,+Bangladesh&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                ></iframe>
              </div>

              {/* Address Details */}
              <div className="mt-6 space-y-3">
                <div className="flex items-start gap-3">
                  <MdLocationOn className="text-primary text-xl mt-1" />
                  <div>
                    <p className="font-semibold">Head Office</p>
                    <p className="text-gray-600">
                      Mirpur-1
                      <br />
                      Dhaka-1216
                      <br />
                      Bangladesh
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <MdPhone className="text-primary text-xl" />
                  <p className="text-gray-600">
                    +880 1712-345678 (Customer Support)
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <MdEmail className="text-primary text-xl" />
                  <p className="text-gray-600">contact@yourcompany.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title text-2xl text-primary mb-4">
                Send us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="input input-bordered w-full"
                  required
                />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="input input-bordered w-full"
                  required
                />

                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className="input input-bordered w-full"
                  required
                />

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  className="textarea textarea-bordered h-32"
                  required
                ></textarea>

                <button
                  type="submit"
                  className="btn btn-primary w-full"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <span className="loading loading-spinner loading-sm"></span>
                      Sending...
                    </>
                  ) : (
                    <>
                      <MdSend className="mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-6">Follow Us</h3>
          <div className="flex justify-center gap-4">
            <a href="#" className="btn btn-circle btn-outline">
              <FaFacebook />
            </a>
            <a href="#" className="btn btn-circle btn-outline">
              <FaTwitter />
            </a>
            <a href="#" className="btn btn-circle btn-outline">
              <FaLinkedin />
            </a>
            <a href="#" className="btn btn-circle btn-outline">
              <FaGithub />
            </a>
            <a href="#" className="btn btn-circle btn-outline">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
