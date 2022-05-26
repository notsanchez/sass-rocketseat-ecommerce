import React from 'react'
import '../sass/app.sass';

function CTA() {
  return (
    <div className="deal-container">
        <div className="deal-container-content">
          <div className="deal-container-content-timer">
          <div className="deal-container-timer">
            <span className="deal-container-timer-time">02</span>
            <span className="deal-container-timer-word">Dias</span>
          </div>
          <div className="deal-container-timer">
            <span className="deal-container-timer-time">12</span>
            <span className="deal-container-timer-word">Horas</span>
          </div>
          <div className="deal-container-timer">
            <span className="deal-container-timer-time">25</span>
            <span className="deal-container-timer-word">Minutos</span>
          </div>
          <div className="deal-container-timer">
            <span className="deal-container-timer-time">33</span>
            <span className="deal-container-timer-word">Segundos</span>
          </div>
          </div>
          <h2 className="deal-container-content-title">Promoção de Fone Gamer</h2>
          <p className="deal-container-content-subtitle">Toda a linha gamer com 33% de desconto</p>
          <button className="btn">Comprar Agora</button>
        </div>
      </div>
  )
}

export default CTA