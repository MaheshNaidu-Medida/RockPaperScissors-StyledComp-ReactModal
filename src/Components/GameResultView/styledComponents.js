import styled from 'styled-components'

export const Image = styled.img`
  width: 100%;
  margin: 30px;
`
export const GameViewContainer = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  @media screen and (min-width: 768px) {
    width: 50%;
    margin-top: 150px;
  }
`
export const GameItemContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0px;
`
export const GameItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;
`
export const PlayerText = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 0px;
  line-height: 0;
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`
export const GameResultText = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 28px;
  font-weight: bold;
  text-align: center;
  line-height: 0.5;
  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
`
export const PlayAgainButton = styled.button`
  background-color: #ffffff;
  border: none;
  border-radius: 12px;
  padding: 15px 35px 15px 35px;
  color: #223a5f;
  font-family: 'Bree Serif';
  font-size: 14px;
  font-weight: 500;
  margin-top: 5px;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    padding: 15px 50px 15px 50px;
    font-size: 18px;
  }
`
