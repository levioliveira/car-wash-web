import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  border: 2px solid #e0e0e0;
  border-color: ${({ hasFocus }) => (hasFocus ? 'red' : '#e0e0e0')};
  box-sizing: border-box;
  border-radius: 7px;
  cursor: pointer;
`

export const Input = styled.input`
  display: flex;
  width: 100%;
  font-family: Roboto, Ubuntu, 'Open Sans', sans-serif;
  border: none;
  font-style: normal;
  font-weight: normal;
  color: ${({ theme, primary, secondary, success, danger, dark }) => {
    switch (true) {
      case primary:
        return theme.colors.primary.main
      case secondary:
        return theme.colors.secondary.main
      case success:
        return theme.colors.success.main
      case danger:
        return theme.colors.danger.main
      case dark:
        return theme.colors.dark.main
      default:
        return theme.colors.dark.main
    }
  }};
  font-size: 16px;
  line-height: 22px;
  padding: 10px 12px;

  &::placeholder {
    color: #bbb;
  }
`

export const PreBadge = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e1e1e1;
  padding: 0.7em;
  font-size: 2em;
  opacity: 0.5;
  border-right: 2px solid #ccc;
`
