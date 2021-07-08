import React, { useRef } from 'react'
import { Wrapper, Input, PreBadge } from './styles'

export const InputField = ({
  ref = null,
  icon = false,
  preBadge = false,
  className,
  ...props
}) => {
  const input = useRef(null)
  const onClick = () => input.current.focus()

  return (
    <Wrapper className={className} onClick={onClick}>
      {!!preBadge && <PreBadge>{preBadge}</PreBadge>}
      {!!icon && <PreBadge>{icon}</PreBadge>}
      <Input ref={ref || input} {...props} />
    </Wrapper>
  )
}
