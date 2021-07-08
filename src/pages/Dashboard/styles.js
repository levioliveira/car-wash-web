import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { H3 } from '../../components'

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
  width: 118px;
  left: 47px;
  top: 33px;
`

export const MenuItems = styled.section`
  margin-top: 140px;
  margin-left: 40px;
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
  padding: 0 7px;
  color: #c7c7c7;
  display: flex;
  justify-content: start;
  text-decoration: none;
  align-items: center;
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 45px;
`
export const Span = styled.img`
  width: 30px;
  height: 30px;
  display: inline;
  padding: 0 10px
  align-items: center;
`
export const WrapperContent = styled.section`
  background: #4f4f4f;
`
export const BigTitle = styled(H3)`
  color: #404040;
  line-height: 1.2em;
  font-size: 4em;
  position: absolute;
  margin-left: 6.5em;
  margin-top: 1em;

  font-family: Encode Sans;
  font-style: normal;
  font-weight: 500;
  size: 43, 37px;
`
export const DashDailyRatio = styled.span`
  position: absolute;
  width: 596.66px;
  height: 363.12px;
  left: 278px;
  top: 183.87px;

  background: linear-gradient(180deg, #ffffff 0%, #ffffff 100%);
  /* 1 */

  box-shadow: 0px 9px 24px rgba(0, 0, 0, 0.06), 0px 2px 6px rgba(0, 0, 0, 0.04),
    0px 0px 1px rgba(0, 0, 0, 0.04);
  border-radius: 28px;
`
export const DashTittle = styled.p`
  position: absolute;
  width: 125px;
  height: 25px;
  left: 30px;
  top: 30px;

  font-family: Encode Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 20.1118px;
  line-height: 25px;
`
