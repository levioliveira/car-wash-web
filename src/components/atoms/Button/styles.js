import styled from 'styled-components'
import { Text } from '../Text'

export const Wrapper = styled.button`
  padding: 10px 16px;
  border-radius: 8px;
  border: 2px solid ${({ theme }) => theme.colors.light.main};
  outline: none;
  background: ${({ theme, primary, secondary, success, danger, outline }) => {
    switch (true) {
      case outline:
        return 'transparent'
      case primary:
        return theme.colors.primary.main
      case secondary:
        return theme.colors.secondary.main
      case success:
        return theme.colors.success.main
      case danger:
        return theme.colors.danger.main
      default:
        return theme.colors.primary.main
    }
  }};
  border: 0.13em solid
    ${({ theme, primary, secondary, success, danger, noBorder, dark }) => {
      switch (true) {
        case noBorder:
          return 'transparent'
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
          return theme.colors.primary.main
      }
    }};
  cursor: pointer;
  box-sizing: border-box;
`

export const Label = styled(Text)`
  color: ${({ theme, primary, secondary, success, danger, dark, outline }) => {
    switch (true) {
      case primary && outline:
        return theme.colors.primary.main
      case secondary && outline:
        return theme.colors.secondary.main
      case success && outline:
        return theme.colors.success.main
      case danger && outline:
        return theme.colors.danger.main
      case dark && outline:
        return theme.colors.dark.main
      default:
        return theme.colors.light.main
    }
  }};
  font-size: 16px;
  line-height: 22px;
`
