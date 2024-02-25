import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquarePhone } from '@fortawesome/free-solid-svg-icons'
import { faMapLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";



const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('', '', form.current, {
        publicKey: '',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="name" name="name" />
      <label>Email</label>
      <input type="email" name="email" />
      <label>Phone</label>
      <input type="phone" name="phone" />
      <label>City</label>
      <input type='city' name='city' />
      <label>Subject</label>
      <input type='text' name='subject' />
      <label>Message</label>
      <textarea name="message" />
      <label>Upload</label>
      <input type='file' name='upload' />
      <input type="submit" value="Send" />
    </form>
  );
};
export default Contact;