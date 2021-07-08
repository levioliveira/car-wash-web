import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  background: #fff;
`

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 970px;
  margin: 0 auto;
`

export const Right = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Logo = styled.img`
  width: 70px;
`

export const ListLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

export const MenuLink = styled.li`
  display: inline;
  margin: 20px;
`

export const Entrar = styled.button`
  border: none;
  padding: 15px 48px;
  color: #fff;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.primary.main};
`
