import React from "react";

const SmsContactForm = () => {
  const sendSMS = (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    if (!name || !email || !message) {
        alert("Please fill in all fields.");
        return;
        }
    if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }
    
    const fullMessage = `Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
    const phoneNumber = "+91 8872869920"; // Replace with your SMS receiver number

    const smsLink = `sms:${phoneNumber}?body=${encodeURIComponent(fullMessage)}`;
    window.location.href = smsLink;
  };

  const inputStyle = {
    width: "100%",
    padding: "8px",
  };

  const containerStyle = {
    maxWidth: "600px",
  };

  const buttonStyle = {
    backgroundColor: "red",
    color: "#fff",
    padding: "10px 20px",
    border: "none",
    cursor: "pointer",
  };

  const fieldStyle = {
    marginBottom: "1rem",
  };

  return (
    <form onSubmit={sendSMS} style={containerStyle}>
      <div style={fieldStyle}>
        <label>Name:</label>
        <br />
        <input type="text" id="name" placeholder="Your Name" style={inputStyle} />
      </div>
      <div style={fieldStyle}>
        <label>Email:</label>
        <br />
        <input type="email" id="email" placeholder="Your Email" style={inputStyle} />
      </div>
      <div style={fieldStyle}>
        <label>Message:</label>
        <br />
        <textarea
          id="message"
          placeholder="Your Message"
          rows="5"
          style={inputStyle}
        ></textarea>
      </div>
      <button type="submit" style={buttonStyle}>
        Send via SMS
      </button>
    </form>
  );
};

export default SmsContactForm;
