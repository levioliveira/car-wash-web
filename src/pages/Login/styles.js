import styled from 'styled-components'
import { H1 } from '../../components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex: 1;
  height: 100vh;
  min-height: 340px;
  margin: 0 auto;
  background-color: #333;
`

export const TitlePage = styled.h1`
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 2em;
  margin-bottom: 2em;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 50px;
    height: 4px;
    background-color: #ccc;
  }
`

export const Logo = styled.img`
  width: 300px;
  margin: 40px auto;
`

export const WrapperForm = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 70em;
  padding: 2em;
  padding-left: 5em;
  padding-right: 5em;
  background-color: #fff;
`

export const ContentInput = styled.div`
  margin-top: 10px;
  margin-bottom: 20px;
`

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 2em auto;
  margin-top: 4em;
`
export const Fields = styled.div`
  margin-bottom: 2.5em;
`

export const WrapperBanner = styled.section`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 10em;
  flex: 1;
  background: url(${({ src }) => src}) no-repeat center;
  /* background: url('')
    no-repeat center; */
  background-size: cover;
  position: relative;
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(8, 86, 202, 0.7);
`

export const BigTitle = styled(H1)`
  color: ${({ theme }) => theme.colors.secondary.main};
  line-height: 1em;
  text-align: right;
  font-size: 6em;
  z-index: 1;
`
