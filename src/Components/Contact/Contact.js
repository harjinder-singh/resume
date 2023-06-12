import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from 'react-google-recaptcha';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import './Contact.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm("service_l7mfosa","template_qqmbe8l", form.current, "fRn0Gsc5GOaNJbJPu")
      .then((result) => {
          alert("Email sent!!");
          form.current.reset();
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section className="contact-section" id="contact">
        <h1>Contact</h1>
        <hr />
        <div className="contact-content">
            <Form ref={form} onSubmit={sendEmail}>
                <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" name="user_name" required />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email" name="user_email" required />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={3} name="message" required />
                </Form.Group>
                <Form.Group className="mb-3">
                    <ReCAPTCHA sitekey="6LfE2csjAAAAAIyKsUrivDJKJ1t5oZGA7n5yIhLh" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    </section>
  );
}

export default Contact;
