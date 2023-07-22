import './styles.css'
import { cardText } from "../../constants"
import Card from '../Card/Card'

export default function Game() {
  return(
    <div className="game">
      <h1>{cardText.title}</h1>
      <button>{cardText.btnText}</button>
      <div className="cardBoard">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <p className="result">{cardText.winner}</p>
    </div>
  )
}