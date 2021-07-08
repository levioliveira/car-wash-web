import React from 'react'
import ImgLogo from '../../../assets/images/logo-v1.png'
// import ImgVGeral from '../../../assets/images/vetor_visaogeral.png'
import {
  Logo,
  WrapperSideBar,
  MenuItems,
  Item,
  ItemLink,
  Text,
  SpanVisGeral,
  SpanAgenda,
  SpanRel,
  SpanConfig,
} from './styles'

export const Sidebar = () => (
  <WrapperSideBar>
    <Logo src={ImgLogo} />
    <MenuItems>
      <Item>
        <ItemLink to='/visaogeral'>
          <SpanVisGeral />
          <Text>Visão Geral</Text>
        </ItemLink>
      </Item>
      <Item>
        <ItemLink to='/agendamento'>
          <SpanAgenda />
          <Text>Agendamentos</Text>
        </ItemLink>
      </Item>
      <Item>
        <ItemLink to='/relatorios'>
          <SpanRel />
          <Text>Relatórios</Text>
        </ItemLink>
      </Item>
      <Item>
        <ItemLink to='/configuracoes'>
          <SpanConfig />
          <Text>Configurações</Text>
        </ItemLink>
      </Item>
    </MenuItems>
  </WrapperSideBar>
)
