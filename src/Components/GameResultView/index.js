import {
  GameViewContainer,
  GameItemContainer,
  GameItem,
  PlayerText,
  Image,
  GameResultText,
  PlayAgainButton,
} from './styledComponents'

const GameResultView = props => {
  const {you, opponent, choicesList, result, onClickPlay} = props
  const youObject = choicesList.find(each => each.id === you)

  const opponentObject = choicesList.find(each => each.id === opponent)

  const OnClickPlayButton = () => onClickPlay()

  return (
    <GameViewContainer>
      <GameItemContainer>
        <GameItem>
          <PlayerText>YOU</PlayerText>
          <Image src={youObject.image} alt="your choice" />
        </GameItem>
        <GameItem>
          <PlayerText>OPPONENT</PlayerText>
          <Image src={opponentObject.image} alt="opponent choice" />
        </GameItem>
      </GameItemContainer>
      <GameResultText>{result}</GameResultText>
      <PlayAgainButton type="button" onClick={OnClickPlayButton}>
        PLAY AGAIN
      </PlayAgainButton>
    </GameViewContainer>
  )
}
export default GameResultView
