import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { FiMail } from 'react-icons/fi';
import { StyledContactSection } from '@/styles/contact';

export default function Contact() {
  return (

    <StyledContactSection>
    <h2>Contact me</h2>
    <p>Let's create something amazing together.</p>
    <div>
    <a target='_blank' href='https://github.com/erminiogabriel' rel="noreferrer"><BsGithub size={30}/></a>
    <a target='_blank' href='https://linkedin.com' rel="noreferrer"><BsLinkedin size={30}/> </a>
    <a href='mailto:gabriel.erminio02@gmail.com' rel="noreferrer"><FiMail size={30}/></a>
    </div>
    </StyledContactSection>
  );
}
