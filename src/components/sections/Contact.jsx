import React, { useRef } from 'react';
import styled from 'styled-components';
import emailjs from '@emailjs/browser';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 1;
  padding: 50px 20px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 900px;
  position: relative;
`;

const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};

  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 20px;
  text-align: center;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary};
  margin: 20px 0 50px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const ContactForm = styled.form`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: rgba(17, 25, 40, 0.83);
  border: 1px solid rgba(255, 255, 255, 0.125);
  padding: 32px;
  border-radius: 12px;
  box-shadow: rgba(23, 92, 230, 0.1) 0px 4px 24px;
  margin-top: 28px;
`;

const ContactTitle = styled.div`
  font-size: 28px;
  margin-bottom: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`;

const ContactInput = styled.input`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary + 50};
  outline: none;
  font-size: 16px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 8px;
  padding: 12px 16px;
  margin-bottom: 16px;
  &::placeholder {
    color: ${({ theme }) => theme.text_secondary + 70};
  }
  &:focus {
    border: 1px solid ${({ theme }) => theme.text_primary};
  }
`;

const ContactTextarea = styled.textarea`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary + 50};
  outline: none;
  font-size: 16px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 8px;
  padding: 12px 16px;
  margin-bottom: 16px;
  resize: vertical;
  min-height: 120px;
  &::placeholder {
    color: ${({ theme }) => theme.text_secondary + 70};
  }
  &:focus {
    border: 1px solid ${({ theme }) => theme.text_primary};
  }
`;

const ContactButton = styled.button`
  width: 100%;
  text-decoration: none;
  text-align: center;
  background: hsla(271, 100%, 50%, 1);
  padding: 13px 16px;
  margin-top: 2px;
  border-radius: 12px;
  border: none;
  color: ${({ theme }) => theme.text_secondary};
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: hsla(271, 100%, 60%, 1);
  }
`;

const Contact = () => {
    const form = useRef();
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      emailjs.sendForm(
        'service_cztdqdk',
        'template_4u2grqr',
        form.current,
        'co4beJyzQRnuEWfM8'
      )
        .then((result) => {
          alert('Message sent successfully!');
          form.current.reset();
        })
        .catch((error) => {
          alert('Something went wrong: ' + error.text);
        });
    };
  
    return (
      <Container id="Contact">
        <Wrapper>
          <Title>Contact</Title>
          <Desc>
            Please feel free to reach out to me for any questions or opportunities!
          </Desc>
          <ContactForm ref={form} onSubmit={handleSubmit}>
            <ContactTitle>Email Me</ContactTitle>
            <ContactInput type="email" placeholder="Your Email" name="from_email" required />
            <ContactInput type="text" placeholder="Your Name" name="from_name" required />
            <ContactInput type="text" placeholder="Subject" name="subject" />
            <ContactTextarea placeholder="Your Message" name="message" rows={4} required />
            <ContactButton type="submit">Send</ContactButton>
          </ContactForm>
        </Wrapper>
      </Container>
    );
  };
  
export default Contact;