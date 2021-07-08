import React from 'react'
import LogoImg from '../../../assets/images/Logo.png'
import {
  Wrapper,
  Container,
  Right,
  Entrar,
  MenuLink,
  ListLinks,
  Logo,
} from './sytles'

export const Header = () => {
  const handleEnter = () => {
    console.info('abrir o modal/pagina de login')
  }
  return (
    <Wrapper>
      <Container>
        <Logo src={LogoImg} alt='Logo app' />
        <Right>
          <ListLinks>
            <MenuLink>Baixa o App</MenuLink>
            <MenuLink>Sobre nós</MenuLink>
            <MenuLink>Planos</MenuLink>
          </ListLinks>
          <Entrar onClick={handleEnter}>Entrar</Entrar>
        </Right>
      </Container>
    </Wrapper>
  )
}
