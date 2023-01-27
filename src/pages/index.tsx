import { FaArrowRight } from 'react-icons/fa'
import { Container, Content, Infos, Name, Function, Intro, LinkProjects, Logo, Img } from '../../styles/indexStyle'
import Link from 'next/link'


export default function Home() {
  return (
   <Container>
     <Content>
      <Infos>
        <Name>Meu nome é Felipe Augusto da Encarnação Moreira</Name>
        <Function>Estudante de Engenharia de Software</Function>
        <Intro>Tenho 23 anos de idade e procuro um estágio ou uma oportunidade como desenvolvedor junior para exercer minha profissão e sempre evoluir como um desenvolvedor full stack no futuro.
        Durante meus periodos letivos tive contato com muitas ferramentas de modelagem e de desenvolvimento, onde aprendi o uso da linguagem java com o framework spring boot, e o uso do postgreSQL como banco de dados.
        Desenvolvimento para a web utilizando o React js com node js para uso das APIs.
        
        
        </Intro>
        <Link href="projects">
          <LinkProjects>PROJETOS: <FaArrowRight /></LinkProjects>
        </Link>
      </Infos>
      <Logo>
        <Img src="/public/images/logo.jfif" alt="logo" />
      </Logo>
     </Content>
   </Container>
  )
}