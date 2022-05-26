import React from 'react'
import '../sass/app.sass';


function Footer() {
  return (
    <footer className="footer">
        <div className="footer-top">
          <div className="footer-top-about">
            <h3>Sobre nós</h3>
            <p>lorem ipsum texte loem impsuon dowdfrn </p>
            <p><i className="fas fa-location-arrow"> <a href='#'> Av. teste, 9821</a></i></p>
            <p><i className="fas fa-phone"> <a href='#'>(11)999999-99990</a></i></p>
            <p><i className="far fa-envelope"> <a href='#'>contato@rocketseat.com</a></i> </p>
          </div>
          <div className="footer-top-categories">
            <h3>Categoria</h3>
            <ul>
              <li>
                <a href='#'>Promoções</a>
              </li>
              <li>
                <a href='#'>Headsets</a>
              </li>
              <li>
                <a href='#'>PC Gamer</a>
              </li>
              <li>
                <a href='#'>Cameras</a>
              </li>
              <li>
                <a href='#'>Mouse e teclado</a>
              </li>
            </ul>
          </div>
          <div className="footer-top-information">
            <h3>Informações</h3>
            <ul>
              <li>
                <a href='#'>Sobre nós</a>
              </li>
              <li>
                <a href='#'>Entre em contato</a>
              </li>
              <li>
                <a href='#'>Politica de privacidade</a>
              </li>
              <li>
                <a href='#'>Pedidos e devoluções</a>
              </li>
              <li>
                <a href='#'>Termos e condições</a>
              </li>
            </ul>
          </div>
          <div className="footer-top-menu">
            <h3>Menu</h3>
            <ul>
              <li>
                <a href='#'>Minha conta</a>
              </li>
              <li>
                <a href='#'>Carrinho</a>
              </li>
              <li>
                <a href='#'>Lista de desejos</a>
              </li>
              <li>
                <a href='#'>Rastrear pedido</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-bottom-payments">
            <i className="fab fa-cc-mastercard"></i>
            <i className="fab fa-cc-visa"></i>
            <i className="fab fa-cc-diners-club"></i>
            <i className="fa-brands fa-cc-amazon-pay"></i>
            <i className="fab fa-cc-apple-pay"></i>
          </div>
          <p>Copyright &copy; 2022 - matheusmachado.dev</p>
        </div>
      </footer>
  )
}

export default Footer