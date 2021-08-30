import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'

import Header from '../Header'

import GameResultView from '../GameResultView'

import {
  HomeContainer,
  RulesButton,
  PlayViewContainer,
  Item,
  Image,
  Button,
  PopupImage,
  Modal,
  ModalButton,
} from './styledComponents'

class GameContainer extends Component {
  state = {score: 0, play: false, you: '', opponent: '', result: ''}

  getResult = (youId, oppId) => {
    let result = ''
    switch (youId) {
      case 'ROCK':
        if (oppId === 'ROCK') {
          result = 'IT IS DRAW'
        } else if (oppId === 'PAPER') {
          result = 'YOU LOSE'
        } else if (oppId === 'SCISSORS') {
          result = 'YOU WON'
        }
        break
      case 'PAPER':
        if (oppId === 'PAPER') {
          result = 'IT IS DRAW'
        } else if (oppId === 'SCISSORS') {
          result = 'YOU LOSE'
        } else if (oppId === 'ROCK') {
          result = 'YOU WON'
        }
        break
      case 'SCISSORS':
        if (oppId === 'SCISSORS') {
          result = 'IT IS DRAW'
        } else if (oppId === 'ROCK') {
          result = 'YOU LOSE'
        } else if (oppId === 'PAPER') {
          result = 'YOU WON'
        }
        break
      default:
        result = ''
        break
    }

    return result
  }

  onClickYou = id => {
    const {choicesList} = this.props
    let {score} = this.state
    const youObject = choicesList.find(each => id === each.id)
    const randomIndex = Math.floor(Math.random() * 3)
    const opponentObject = choicesList[randomIndex]
    const result = this.getResult(youObject.id, opponentObject.id)
    if (result === 'YOU WON') {
      score += 1
    } else if (result === 'YOU LOSE') {
      score -= 1
    }
    this.setState({
      you: youObject.id,
      opponent: opponentObject.id,
      result,
      play: true,
      score,
    })
  }

  onClickPlay = () => {
    this.setState(prevState => ({play: !prevState.play}))
  }

  renderGameResultsView = () => {
    const {you, opponent, result} = this.state

    const {choicesList} = this.props

    return (
      <GameResultView
        you={you}
        opponent={opponent}
        result={result}
        choicesList={choicesList}
        onClickPlay={this.onClickPlay}
      />
    )
  }

  renderPlayView = () => {
    const {choicesList} = this.props
    return (
      <PlayViewContainer>
        {choicesList.map(each => this.renderPlayviewItem(each))}
      </PlayViewContainer>
    )
  }

  renderPlayviewItem = each => {
    const {id, image} = each
    const onClickYourChoice = () => this.onClickYou(id)
    const testid = id.toLowerCase()
    return (
      <Item key={id}>
        <Button
          type="button"
          onClick={onClickYourChoice}
          data-testid={`${testid}Button`}
        >
          <Image src={image} alt={id} />
        </Button>
      </Item>
    )
  }

  renderView = () => {
    const {play} = this.state
    if (play) {
      return this.renderGameResultsView()
    }
    return this.renderPlayView()
  }

  render() {
    const {score} = this.state
    return (
      <HomeContainer>
        <Header score={score} />
        {this.renderView()}
        <Popup modal trigger={<RulesButton type="button">RULES</RulesButton>}>
          {close => (
            <Modal>
              <ModalButton type="button" onClick={() => close()}>
                <RiCloseLine size={30} />
              </ModalButton>
              <PopupImage
                src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                alt="rules"
              />
            </Modal>
          )}
        </Popup>
      </HomeContainer>
    )
  }
}
export default GameContainer
