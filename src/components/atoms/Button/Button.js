import React from 'react'
import { Wrapper, Label } from './styles'

export const Button = ({
  label = '',
  onClick = () => null,
  outline,
  ...props
}) => (
  <Wrapper onClick={onClick} data-testid='button' outline={outline} {...props}>
    <Label outline={outline} {...props}>
      {label}
    </Label>
  </Wrapper>
)
