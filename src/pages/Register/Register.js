import React from 'react'
import { useHistory } from 'react-router-dom'
import { FiUser, FiLock, FiMail, FiCompass } from 'react-icons/fi'
import Banner from '../../assets/images/banner-02.jpeg'
import { Button, InputField } from '../../components'
import {
  Wrapper,
  WrapperForm,
  ContentInput,
  WrapperBanner,
  Overlay,
  TitlePage,
  Container,
  Form,
  Fields,
  BigTitle,
} from './styles'

export const Register = () => {
  const history = useHistory()
  const handleLogin = (event) => {
    event.preventDefault()
  }

  return (
    <Wrapper onClick={handleLogin}>
      <WrapperBanner src={Banner}>
        <Overlay />
        <BigTitle>
          Acelere os processos do seu
          <br />
          <cite>LAVA-JATO</cite>
        </BigTitle>
      </WrapperBanner>
      <WrapperForm>
        <Container>
          <Form>
            <TitlePage>Cadastra-se</TitlePage>
            <Fields>
              <ContentInput>
                <InputField icon={<FiUser />} placeholder='Seu nome' />
              </ContentInput>
              <ContentInput>
                <InputField
                  type='email'
                  icon={<FiMail />}
                  placeholder='Seu e-mail'
                />
              </ContentInput>
              <ContentInput>
                <InputField
                  icon={<FiCompass />}
                  placeholder='00.000.000/0000-00'
                />
              </ContentInput>
              <ContentInput>
                <InputField
                  type='password'
                  icon={<FiLock />}
                  placeholder='Nova senha'
                />
              </ContentInput>
            </Fields>
            <Button label='Criar minha conta' primary />
            <br />
            <Button
              label='Voltar'
              onClick={history.goBack}
              dark
              outline
              noBorder
            />
          </Form>
        </Container>
      </WrapperForm>
    </Wrapper>
  )
}
