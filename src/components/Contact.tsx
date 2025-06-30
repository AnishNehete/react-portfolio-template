import React, { useRef, useState } from 'react';
import '../assets/styles/Contact.scss';
import emailjs from '@emailjs/browser';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';

function Contact() {

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const form = useRef();

  const sendEmail = (e: any) => {
    e.preventDefault();
  
    setNameError(name === '');
    setEmailError(email === '');
    setMessageError(message === '');
  
    if (name !== '' && email !== '' && message !== '') {
      const currentTime = new Date().toLocaleString(); // or format as needed
  
      const templateParams = {
        name: name,
        time: currentTime,
        message: message
      };
  
      emailjs.send('service_51qndns', 'template_2c5z0pp', templateParams, 'WHajf3smtZZ-WjyRW').then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          alert('Message sent successfully!');
        },
        (error) => {
          console.log('FAILED...', error);
          alert('Failed to send message.');
        }
      );
  
      setName('');
      setEmail('');
      setMessage('');
    }
  };
  

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>Got a project waiting to be realized? Let's collaborate and make it happen!</p>
          <Box
            ref={form}
            component="form"
            noValidate
            autoComplete="off"
            className='contact-form'
          >
            <div className='form-flex'>
              <TextField
                required
                id="name-field"
                label="Your Name"
                placeholder="What's your name?"
                value={name}
                onChange={(e) => {
                  console.log('Name changed:', e.target.value);
                  setName(e.target.value);
                }}
                error={nameError}
                helperText={nameError ? "Please enter your name" : ""}
                variant="outlined"
                fullWidth
              />
              <TextField
                required
                id="email-field"
                label="Email / Phone"
                placeholder="How can I reach you?"
                value={email}
                onChange={(e) => {
                  console.log('Email changed:', e.target.value);
                  setEmail(e.target.value);
                }}
                error={emailError}
                helperText={emailError ? "Please enter your email or phone number" : ""}
                variant="outlined"
                fullWidth
              />
            </div>
            <TextField
              required
              id="message-field"
              label="Message"
              placeholder="Send me any inquiries or questions"
              multiline
              rows={10}
              className="body-form"
              value={message}
              onChange={(e) => {
                console.log('Message changed:', e.target.value);
                setMessage(e.target.value);
              }}
              error={messageError}
              helperText={messageError ? "Please enter the message" : ""}
              variant="outlined"
              fullWidth
            />
            <Button variant="contained" endIcon={<SendIcon />} onClick={sendEmail}>
              Send
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;