import React from "react";

const AboutUs = () => {
  const webName = "Online Services";
  const webNamestyle = {
    color: "red",
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h1>
        <strong>
          About <span style={webNamestyle}>{webName}</span>
        </strong>
      </h1>

      <p>
        Welcome to <span style={webNamestyle}>{webName}</span> – your trusted platform for availing a range of essential digital services from the comfort of your home.
      </p>

      <h3>Who We Are</h3>
      <p>
        <span style={webNamestyle}>{webName}</span> is an independent digital platform committed to simplifying access to various day-to-day services such as:
      </p>
      <ul>
        <li>Voter ID Application Assistance</li>
        <li>PAN Card Services</li>
        <li>Residence Certificate Forms</li>
        <li>Government Form Filling Help</li>
        <li>And other important citizen services</li>
      </ul>

      <h3>Our Mission</h3>
      <p>
        Our mission is to bridge the gap between citizens and complex application procedures by offering clear, fast, and accessible service support. Whether you're from a rural area or a busy city, we make sure you can access essential services with ease.
      </p>

      <h3>What Makes Us Different</h3>
      <ul>
        <li>
          <strong>User-Friendly Interface:</strong> Easily navigate through services.
        </li>
        <li>
          <strong>Secure Data Handling:</strong> All data including Aadhaar, mobile number, and address is securely encrypted.
        </li>
        <li>
          <strong>Zero Government Affiliation:</strong> We are a private service provider and not affiliated with any government body.
        </li>
        <li>
          <strong>Transparent Process:</strong> No hidden charges or misleading claims.
        </li>
      </ul>

      <h3>Our Vision</h3>
      <p>
        To become a reliable and inclusive digital assistant for every Indian household, supporting them in accessing and managing government-related services without complexity.
      </p>

      <h3>Contact Us</h3>
      <p>
        If you have any queries or need help with a service, don’t hesitate to reach out:
      </p>
      <ul>
        <div><li>Email: <a href="mailto:phagwara.deepak33@gmail.com">{webName}</a></li></div>
        <div><li>Phone: <a href="tel:+91 8872869920"> +91 8872869920</a></li></div>
        <li><strong>Address:</strong> Chainpur Ward No. 5, Near Anganwadi Centre, Bihar – 841226
            <div style={{ marginTop: "1rem" }}>
            <iframe
              title="Our Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2533.937991418305!2d84.87154038893698!3d26.08176984342145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3992cde5f00fd5fb%3A0xb0cc9bc0c48dc22c!2sAANGANWADI%20CODE%20128%20CHAINPUR%20WADR%2005!5e0!3m2!1sen!2sin!4v1748504068331!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div></li>
      </ul>

      <blockquote style={{ fontStyle: "italic", color: "#666" }}>
      Disclaimer: <a href="/"><span style={webNamestyle}>{webName}</span> </a>is not affiliated with any official government agency. We only assist users in the application and form submission process through our secure platform.
      </blockquote>
    </div>
  );
};

export default AboutUs;
