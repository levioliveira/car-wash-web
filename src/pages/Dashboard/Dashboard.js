import React from 'react'
import { Wrapper, BigTitle, DashDailyRatio, DashTittle } from './styles'
import { Sidebar } from '../../components'

export const Dashboard = () => (
  <Wrapper>
    <BigTitle>Visão Geral</BigTitle>
    <Sidebar />
    <DashDailyRatio>
      <DashTittle>Relação Diária</DashTittle>
    </DashDailyRatio>
  </Wrapper>
)
