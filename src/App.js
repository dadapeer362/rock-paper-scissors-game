import Game from './Game'
import './App.css'

const choicesList = [
  {
    id: 'ROCK',
    image:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    image:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    image:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]
const App = () => {
  return (
  <div>
    <div dangerouslySetInnerHTML={{ __html: comment }} />
    <Game choicesList={choicesList} />
  </div>
)
}

export default App
