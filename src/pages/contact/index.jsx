import React from 'react'
import { Container, Content } from './style'
import { FaLinkedin, FaGithub, FaGitlab, FaEnvelope } from 'react-icons/fa'
import ItemContact from '../../../components/itemContact'

export default function Contact() {
  return (
    <Container>
      <Content>
        <ItemContact 
          IconFa={FaLinkedin} 
          LinkContact="https://www.linkedin.com/in/felipe-augusto-moreira-792a01160/" 
        />
        <ItemContact 
          IconFa={FaGithub} 
          LinkContact="https://github.com/felipeAEMO" 
        />
        <ItemContact 
          IconFa={FaGitlab} 
          LinkContact="https://gitlab.com/FelipeAugustoMoreira" 
        />
        <ItemContact 
          IconFa={FaEnvelope} 
          LinkContact="felipeaemoreira@gmail.com" 
        />
      </Content>
    </Container>
  )
}