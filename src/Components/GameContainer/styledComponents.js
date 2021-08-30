import styled from 'styled-components'

export const HomeContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #223a5f;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
`
export const RulesButton = styled.button`
  background-color: #ffffff;
  border: none;
  border-radius: 8px;
  padding: 12px 22px 12px 22px;
  color: #223a5f;
  font-family: 'Bree Serif';
  font-size: 18px;
  font-weight: 500;
  align-self: flex-end;
  margin-top: 30px;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    margin-right: 2px;
  }
`
export const PlayViewContainer = styled.ul`
  width: 95%;
  padding-left: 0px;
  margin-left: 0px;
  max-width: 600px;
  margin-top: 100px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
`
export const Item = styled.li`
  list-style-type: none;
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    width: 35%;
  }
`
export const Image = styled.img`
  width: 90%;
  margin: 20px;
  @media screen and (min-width: 768px) {
  }
`
export const Button = styled.button`
  border: none;
  padding: 0px;
  background: transparent;
  cursor: pointer;
  width: 100%;
`
export const PopupImage = styled.img`
  width: 65%;
  align-self: center;
  margin-top: 3px;
`
export const Modal = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px;
`
export const PopupContainer = styled.div`
  width: 60%;
`
export const ModalButton = styled(Button)`
  align-self: flex-end;
`
