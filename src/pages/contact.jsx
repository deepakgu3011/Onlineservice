import React from "react";
import SmsContactForm from "./contactform";
const Contact = () => {
  const webName = "Online Services";
  const webNamestyle = { color: "red" };
    
  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h1>
        <strong>
          Contact <span style={webNamestyle}>{webName}</span>
        </strong>
      </h1>

      <p>
        We're here to help! If you have any questions, feedback, or require assistance with any of our services, feel free to reach out using the details below.
      </p>

      <h3>Get in Touch</h3>
      <ul>
        
        <div><li>Email: <a href="mailto:phagwara.deepak33@gmail.com">{webName}</a></li></div>
        <div><li>Phone: <a href="tel:+91 8872869920"> +91 8872869920</a></li></div>
        <li>
          <strong>Address:</strong> Chainpur Ward No. 5, Near Anganwadi Centre, Bihar – 841226
        </li>
      </ul>

      <h3>Our Location</h3>
      <div style={{ marginTop: "1rem" }}>
        <iframe
          title="Office Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2533.937991418305!2d84.87154038893698!3d26.08176984342145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3992cde5f00fd5fb%3A0xb0cc9bc0c48dc22c!2sAANGANWADI%20CODE%20128%20CHAINPUR%20WADR%2005!5e0!3m2!1sen!2sin!4v1748504068331!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <h3 style={{ marginTop: "2rem" }}>Contact Form</h3>
      {/* <form style={{ maxWidth: "600px" }}>
        <div style={{ marginBottom: "1rem" }}>
          <label>Name:</label><br />
          <input type="text" placeholder="Your Name" style={{ width: "100%", padding: "8px" }} />
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <label>Email:</label><br />
          <input type="email" placeholder="Your Email" style={{ width: "100%", padding: "8px" }} />
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <label>Message:</label><br />
          <textarea placeholder="Your Message" rows="5" style={{ width: "100%", padding: "8px" }}></textarea>
        </div>
        <button type="submit" style={{ backgroundColor: "red", color: "#fff", padding: "10px 20px", border: "none", cursor: "pointer" }}>
          Send Message
        </button>
      </form> */}
        <SmsContactForm />
      <blockquote style={{ fontStyle: "italic", color: "#666" }}> 

      Disclaimer: <a href="/"><span style={webNamestyle}>{webName}</span> </a>is not affiliated with any official government agency. We only assist users in the application and form submission process through our secure platform.
      </blockquote>

    </div>
  );
};

export default Contact;
