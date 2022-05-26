import '../sass/app.sass';
import React from 'react'

function Navbar() {
  return (
    <header className="header">
        <div className="header-top">
          <div className="header-top-container">
            <div className="store-info-container">
              <span><i className='fas fa-map-marker-alt'> FRETE GRATIS PARA SAO PAULO! </i></span>
            </div>
            <div className="header-user-top-menu">
            </div>
          </div>
        </div>
        <div className="main-header">
          <div className="main-header-container">
            <img src={require('../img/logo_rocketseat.png')} id='brand' alt="" />
            
            <form action="" id='search-form'>
              <input type="text" id='search' placeholder='Busque aqui' />
              <input type="submit" className='btn btn-half' value="Pesquisar" />
            </form>
            <div className="header-acttions-menu">
              <div className="wishlist-container">
                <i className="fas fa-user"></i>
                <a href='#'>Minha conta</a>
              </div>
              <div className="header-cart-container">
                <span className="qty">0</span>
                <i className="fas fa-shopping-cart"></i>
                <a href='#'>Carrinho</a>
              </div>
            </div>
          </div>
        </div>
        <div className="header-bottom">
          <nav>
            <ul>
              <li>
                <a href='#'>Home</a>
              </li>
              <li>
                <a href='#'>Promoções</a>
              </li>
              <li>
                <a href='#'>Notebooks</a>
              </li>
              <li>
                <a href='#'>Celulares</a>
              </li>
              <li>
                <a href='#'>Câmeras</a>
              </li>
              <li>
                <a href='#'>Acessórios</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
  )
}

export default Navbar