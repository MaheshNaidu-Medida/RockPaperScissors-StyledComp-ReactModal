import {
  HeaderBar,
  HeaderTextContainer,
  HeaderText,
  ScoreCard,
  ScoreText,
  Score,
} from './styledComponents'

const Header = props => {
  const {score} = props

  return (
    <HeaderBar>
      <HeaderTextContainer>
        <HeaderText>
          ROCK <br /> <br /> <br />
          PAPER <br /> <br /> <br />
          SCISSORS
        </HeaderText>
      </HeaderTextContainer>
      <ScoreCard>
        <ScoreText>Score</ScoreText>
        <Score>{score}</Score>
      </ScoreCard>
    </HeaderBar>
  )
}
export default Header
