import { useState } from 'react'
import './styles.css'

export default function Card () {
  const [cardState, setCardState] = useState('card')
  const filpCard = () => {
    setCardState('card flipped')
  }
  return (
    <div className={cardState} onClick={filpCard}>
      
       <img className="front" src="images/banana.jpeg" alt="Card Back"></img>
      <img className="back" src="images/back.jpeg" alt="Card Back"></img>
    </div>
  ) 
}