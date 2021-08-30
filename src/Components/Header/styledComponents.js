import styled from 'styled-components'

export const HeaderBar = styled.div`
  width: 95%;
  max-width: 850px;
  border: 3px solid #ffffff;
  border-radius: 15px;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: center;
  @media screen and (min-width: 768px) {
    padding: 25px;
  }
`
export const HeaderTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
export const HeaderText = styled.h1`
  color: #ffffff;
  font-family: 'Bree Serif';
  font-size: 22px;
  font-weight: 500;
  line-height: 0.5;
  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
`
export const ScoreCard = styled.div`
  background-color: #ffffff;
  width: 40%;
  height: 80%;
  padding: 20px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-left: 10px;
  @media screen and (min-width: 768px) {
    width: 25%;
  }
`
export const ScoreText = styled.p`
  color: #223a5f;
  font-family: 'Bree Serif';
  font-size: 22px;
  font-weight: 500;
  line-height: 0;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 28px;
  }
`
export const Score = styled.p`
  color: #223a5f;
  font-family: 'Roboto';
  font-size: 44px;
  font-weight: bold;
  text-align: center;
  line-height: 0;
  margin-top: 35px;
  margin-bottom: 15px;
  @media screen and (min-width: 768px) {
    font-size: 54px;
  }
`
