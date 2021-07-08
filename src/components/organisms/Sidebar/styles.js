import styled from 'styled-components'
import { Link } from 'react-router-dom'
import {
  VscGraph,
  VscListUnordered,
  VscOutput,
  VscSettingsGear,
} from 'react-icons/vsc'

export const Wrapper = styled.div`
  display: flex;
  position: absolute;
  width: 99%;
  height: 98.1vh;
  left: 8px;
  top: 11px;

  background: #ffffff;
`
export const WrapperSideBar = styled.section`
  display: flex;
  position: fixed;
  text-align: justify;
  left: 8px;
  width: 23em;
  height: 99.3vh;
  top: 0;
  flex-direction: row;
  border-right: 2px solid #f8f8f8;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.466);
`

export const Logo = styled.img`
  position: absolute;
  width: 96px;
  left: 55px;
  top: 33px;
`

export const MenuItems = styled.section`
  margin-top: 140px;
  margin-left: 35px;
  height: 60%;
  width: 100%;
  justify-content: center;
`
export const Item = styled.section`
  display: flex;
  margin: 0 0 0 7px;
  align-content: stretch;
  justify-content: flex-start;
  align-items: center;
`
export const ItemLink = styled(Link)`
  color: #c7c7c7;
  display: flex;
  justify-content: start;
  text-decoration: none;
  align-items: center;
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 45px;
`
export const SpanVisGeral = styled(VscGraph)`
  width: 30px;
  height: 30px;
`
export const SpanAgenda = styled(VscListUnordered)`
  width: 30px;
  height: 30px;
`
export const SpanRel = styled(VscOutput)`
  width: 30px;
  height: 30px;
`
export const SpanConfig = styled(VscSettingsGear)`
  width: 30px;
  height: 30px;
`
export const Text = styled.p`
  margin-left: 12px;
`
