import React, { useState, useContext } from 'react'
import { FiUser, FiLock } from 'react-icons/fi'
import { useHistory } from 'react-router-dom'
import { CarwashContext } from '../../context'
import Banner from '../../assets/images/banner-01.jpeg'
import ImgLogo from '../../assets/images/logo-v1.png'
import { Button, InputField } from '../../components'
import {
  Wrapper,
  WrapperForm,
  ContentInput,
  WrapperBanner,
  Overlay,
  TitlePage,
  Logo,
  Container,
  Form,
  Fields,
  BigTitle,
} from './styles'

export const Login = () => {
  const history = useHistory()
  const { loginDispacth } = useContext(CarwashContext)
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (event) => {
    event.preventDefault()
    loginDispacth({
      type: '@setLogin',
    })
    history.push('/')
  }

  const goNewAccount = (event) => {
    event.preventDefault()
    history.push('/nova-conta')
  }

  return (
    <Wrapper>
      <WrapperForm>
        <Container>
          <Logo src={ImgLogo} />
          <Form>
            <TitlePage>Acessar</TitlePage>
            <Fields>
              <ContentInput>
                <InputField
                  value={user}
                  icon={<FiUser />}
                  placeholder='Usuário'
                  onChange={(event) => {
                    const { target } = event
                    setUser(target.value)
                  }}
                />
              </ContentInput>
              <ContentInput>
                <InputField
                  type='password'
                  value={password}
                  onChange={(event) => {
                    const { target } = event
                    setPassword(target.value)
                  }}
                  icon={<FiLock />}
                  placeholder='Password'
                />
              </ContentInput>
            </Fields>
            <Button label='Acessar' onClick={handleLogin} primary />
            <br />
            <Button
              label='Cadastrar-se'
              onClick={goNewAccount}
              dark
              outline
              noBorder
            />
          </Form>
        </Container>
      </WrapperForm>
      <WrapperBanner src={Banner}>
        <Overlay />
        <BigTitle>
          <cite>Seu Lava Jato</cite>
          <br />
          <big>+</big> Produtivo
        </BigTitle>
      </WrapperBanner>
    </Wrapper>
  )
}
