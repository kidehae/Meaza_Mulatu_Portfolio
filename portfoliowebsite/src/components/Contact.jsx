import { Email, LocationOn, Phone } from "@mui/icons-material";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: null,
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        setTimeout(() => setSubmitSuccess(false), 5000);
      }, 1500);
    }
  };

  return (
    <section id="contact" className="py-5">
      <div className="container">
        <h2 className="section-title  mb-5">Get In Touch</h2>
        <div className="row">
          {/* Contact Information Column */}
          <div className="col-lg-5 mb-5 mb-lg-0">
            <div className="contact-cards">
              <div className="contact-card d-flex p-3 mb-3 bg-light rounded">
                <div className="icon-wrapper me-3 p-2 rounded-circle flex-shrink-0">
                  <Email fontSize="large" className="text-dark" />
                </div>
                <div>
                  <h3 className="h5 mb-1">Email</h3>
                  <p className="mb-0">meazatale5@gmail.com</p>
                </div>
              </div>

              <div className="contact-card d-flex p-3 mb-3 bg-light rounded">
                <div className="icon-wrapper me-3 p-2 rounded-circle flex-shrink-0">
                  <Phone fontSize="large" className="text-dark" />
                </div>
                <div>
                  <h3 className="h5 mb-1">Phone</h3>
                  <p className="mb-0">+251-911-588-121</p>
                </div>
              </div>

              <div className="contact-card d-flex p-3 bg-light rounded">
                <div className="icon-wrapper me-3 p-2 rounded-circle flex-shrink-0">
                  <LocationOn fontSize="large" className="text-dark" />
                </div>
                <div>
                  <h3 className="h5 mb-1">Location</h3>
                  <p className="mb-0"> Addis Ababa</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="col-lg-7">
            {submitSuccess ? (
              <div className="alert alert-success">
                <i className="bi bi-check-circle-fill me-2"></i>
                Thank you! Your message has been sent successfully.
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <div className="row g-3">
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="name"
                      className={`form-control ${
                        errors.name ? "is-invalid" : ""
                      }`}
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                    {errors.name && (
                      <div className="invalid-feedback">{errors.name}</div>
                    )}
                  </div>
                  <div className="col-md-6">
                    <input
                      type="email"
                      name="email"
                      className={`form-control ${
                        errors.email ? "is-invalid" : ""
                      }`}
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {errors.email && (
                      <div className="invalid-feedback">{errors.email}</div>
                    )}
                  </div>
                  <div className="col-12">
                    <input
                      type="text"
                      name="subject"
                      className={`form-control ${
                        errors.subject ? "is-invalid" : ""
                      }`}
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                    />
                    {errors.subject && (
                      <div className="invalid-feedback">{errors.subject}</div>
                    )}
                  </div>
                  <div className="col-12">
                    <textarea
                      name="message"
                      className={`form-control ${
                        errors.message ? "is-invalid" : ""
                      }`}
                      rows="5"
                      placeholder="Message"
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                    {errors.message && (
                      <div className="invalid-feedback">{errors.message}</div>
                    )}
                  </div>
                  <div className="col-12">
                    <button
                      type="submit"
                      className="btn btn-dark px-4 py-2"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <span
                            className="spinner-border spinner-border-sm me-2"
                            role="status"
                            aria-hidden="true"
                          ></span>
                          Sending...
                        </>
                      ) : (
                        "Send Message"
                      )}
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact-cards {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .contact-card {
          align-items: center;
          transition: all 0.3s ease;
        }
        .contact-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }
        .icon-wrapper {
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #f8f9fa; /* Light gray background */
          border: 1px solid #dee2e6; /* Subtle border */
        }
        @media (max-width: 991.98px) {
          .contact-cards {
            margin-bottom: 2rem;
          }
        }
      `}</style>
    </section>
  );
}
