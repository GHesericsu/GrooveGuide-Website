/* eslint-disable camelcase */
import { useState } from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { useForm, SubmitHandler } from 'react-hook-form';
import emailjs from 'emailjs-com';

const Container = styled.div`
  min-height: 600px;
  height: auto;
  width: 100%;
`;

const ContactHeading = styled.h2`

`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`

`;

interface InputProps {
  message?: boolean;
}

const Input = styled.input<InputProps>`
  width: 100%;
  height: 30px;
  margin-bottom: 15px;
  &:focus {
    background: var(--white);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 140px;
  margin-bottom: 15px;
  &:focus {
    background: var(--white);
  }
  
`;

const ErrorMsg = styled.p`
  color: #c11919;
`;

const SubmitButton = styled.button`
  width: 100%;
  height: 50px;
  align-items: center;
  cursor: pointer;
  border-radius: 15px;
  margin-top: 10px;
  font-style: inherit;
  font-weight: 700;
  font-size: 1.1em;
`;

interface FormDataProps {
  user_name: string;
  user_email: string;
  message: string;
  question: number;
}

export const Contact = (): JSX.Element => {
  const [successMessage, setSuccessMessage] = useState('');

  const {
    register, handleSubmit, errors, reset,
  } = useForm<FormDataProps>();

  const onSubmit: SubmitHandler<FormDataProps> = (data: FormDataProps, e) => {
    if (e) {
      e.preventDefault();
    }
    emailjs.send('service_32bexug', 'template_vrqfrqr', data, process.env.NEXT_PUBLIC_EMAILJSID)
      .then((result) => {
        console.log('Email Sent Success', result.text);
        setSuccessMessage(`Thank you ${data.user_name} for your message`);
        reset();
      }, (error) => {
        console.log(error.text);
        setSuccessMessage(`Sorry ${data.user_name}, there's a problem with this. Please contact us in a different way.`);
      });
  };

  const errorMessage = (inputName: string) => (
    <ErrorMsg>{`Invalid ${inputName}`}</ErrorMsg>
  );

  return (
    <>
      <Head>
        <title>Contact Us</title>
      </Head>
      <Container>
        <ContactHeading>
          Contact Us
        </ContactHeading>
        <br />
        <FormContainer>
          <Form onSubmit={handleSubmit(onSubmit)}>
            {errors.user_name && errorMessage('Name')}
            <Label htmlFor="user_name">Name:</Label>
            <Input
              name="user_name"
              ref={register({ required: true, maxLength: 80, pattern: /^[a-z ,.'-]+$/i })}
            />
            {errors.user_email && errorMessage('Email')}
            <Label htmlFor="user_email">Email:</Label>
            <Input
              name="user_email"
              ref={register({ required: true, maxLength: 200, pattern: /^\S+@\S+\.\S+$/ })}
            />
            {errors.message && errorMessage('Message')}
            <Label htmlFor="message">Message:</Label>
            <TextArea
              name="message"
              ref={register({ required: true, maxLength: 1000 })}
            />
            {errors.question && errorMessage('Answer')}
            <Label htmlFor="question">How many question marks are here ????</Label>
            <Input
              name="question"
              ref={register({ required: true, max: 4, min: 4 })}
            />
            <SubmitButton type="submit">{'Submit ->'}</SubmitButton>
          </Form>
          {successMessage}
        </FormContainer>
      </Container>
    </>
  );
};

export default Contact;
