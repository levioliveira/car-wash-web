import styled from 'styled-components'
import { H2 } from '../Text'

export const TitlePage = styled(H2)`
  width: 100%;
  text-align: center;
  font-weight: 900;
  position: relative;

  &::before {
    content: '';
    display: block;
    background-color: ${({ theme }) => theme.colors.light.light};
    width: 4.5em;
    height: 5px;
    position: absolute;
    bottom: 0;
    right: 35%;
  }
`
