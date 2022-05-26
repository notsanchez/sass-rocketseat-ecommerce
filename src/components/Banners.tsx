import React from 'react'
import '../sass/app.sass';

function Banners() {
  return (
    <div className="banners">
        <div className="banner" id='banner-1'>
          <div className="banner-cover">
            <div className="banner-content">
              <h2>Promoção de Notebooks</h2>
              <a href='#'>Ver Mais <i className="fas fa-arrow-circle-right"></i></a>
            </div>
          </div>
        </div>
        <div className="banner" id='banner-2'>
          <div className="banner-cover">
            <div className="banner-content">
              <h2>Lançamento de Acessórios</h2>
              <a href='#'>Ver Mais <i className="fas fa-arrow-circle-right"></i></a>
            </div>
          </div>
        </div>
        <div className="banner" id='banner-3'>
          <div className="banner-cover">
            <div className="banner-content">
              <h2>Câmeras Potentes</h2>
              <a href='#'>Ver Mais <i className="fas fa-arrow-circle-right"></i></a>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Banners