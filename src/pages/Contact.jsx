import { useState } from "react";
import "./Contact.css";


export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const mailtoLink = `mailto:mubarackfazal@gmail.com?subject=Contact from ${name}&body=From: ${email}%0A%0A${message}`;
    window.location.href = mailtoLink;

  };

  return (
    <div className="contact-page">
      <h2>Contact Us</h2>
      <p>Have questions? We’d love to hear from you.</p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <textarea
          placeholder="Your Message"
          rows="5"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}
