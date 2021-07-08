import styled from 'styled-components'

export const Text = styled.span`
  font-family: Roboto, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
    sans-serif;
  color: ${({ theme }) => theme.colors.dark.dark};
  line-height: 2.2em;
  font-weight: ${({ semibold, bold, bolder }) => {
    switch (true) {
      case bold:
        return 'bold'
      case semibold:
        return '600'
      case bolder:
        return 'bolder'
      default:
        return 'normal'
    }
  }};
  font-size: ${({ big }) => (big ? 2.1 : 1.6)}em;
  color: ${({ theme, success, primary, secondary }) => {
    switch (true) {
      case success:
        return theme.colors.success.main
      case primary:
        return theme.colors.primary.main
      case secondary:
        return theme.colors.secondary.main
      default:
        return theme.colors.dark.main
    }
  }};
`

export const H1 = styled(Text)`
  font-size: 4.4em;
  font-weight: bold;
`

export const H2 = styled(Text)`
  font-size: 3.2em;
  font-weight: bolder;
`

export const H3 = styled(Text)`
  font-size: 2.8em;
  font-weight: bold;
`

export const H4 = styled(Text)`
  font-size: 2.4em;
  font-weight: bold;
`

export const H5 = styled(Text)`
  font-weight: bold;
  font-size: 2em;
`

export const H6 = styled(Text)`
  font-size: 1.6em;
  font-weight: bold;
`
