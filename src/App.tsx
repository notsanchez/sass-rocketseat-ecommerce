import './sass/app.sass';

function App() {
  return (
    <>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" />

      {/* HEADER */}
      <header className="header">
        <div className="header-top">
          <div className="header-top-container">
            <div className="store-info-container">
              <span><i className='fas fa-phone'> (11) 999999-9999</i></span>
              <span><i className='far fa-envelope'> contato@rocketseat.com </i></span>
              <span><i className='fas fa-map-marker-alt'> Av. teste, 9821 </i></span>
            </div>
            <div className="header-user-top-menu">
              <span><i className='fas fa-dollar sign'> <a href='#'>BRL</a></i></span>
              <span><i className='fas fa-user'> <a href='#'>Minha Conta</a> </i></span>
            </div>
          </div>
        </div>
        <div className="main-header">
          <div className="main-header-container">
            <img src={require('./img/logo_rocketseat.png')} id='brand' alt="" />
            
            <form action="" id='search-form'>
              <input type="text" id='search' placeholder='Busque aqui' />
              <input type="submit" className='btn btn-half' value="Pesquisar" />
            </form>
            <div className="header-acttions-menu">
              <div className="wishlist-container">
                <span className="qty">0</span>
                <i className="far fa-heart"></i>
                <a href='#'>Favoritos</a>
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
      {/* BANNERS */}
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
      {/* PRODUTOS */}
      <div className="products-grid">
          <h2>Produtos Novos</h2>
          <div className="products-grid-container">
            <div className="products-grid-card">
              <span className="label new">New</span>
              <img src={require('./img/prod-1.jpg')} alt="" />
              <p className="category">Categoria</p>
              <h3 className="product-name">Nome do Produto</h3>
              <p className="product-price">R$ 124,90</p>
              <div className="rating-box">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <button className="btn">Comprar</button>
            </div>

            <div className="products-grid-card">
              <span className="label new">New</span>
              <img src={require('./img/prod-2.jpg')} alt="" />
              <p className="category">Categoria</p>
              <h3 className="product-name">Nome do Produto</h3>
              <p className="product-price">R$ 124,90</p>
              <div className="rating-box">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <button className="btn">Comprar</button>
            </div>

            <div className="products-grid-card">
              <span className="label new">New</span>
              <img src={require('./img/prod-3.jpg')} alt="" />
              <p className="category">Categoria</p>
              <h3 className="product-name">Nome do Produto</h3>
              <p className="product-price">R$ 124,90</p>
              <div className="rating-box">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <button className="btn">Comprar</button>
            </div>

            <div className="products-grid-card">
              <span className="label new">New</span>
              <img src={require('./img/prod-4.jpg')} alt="" />
              <p className="category">Categoria</p>
              <h3 className="product-name">Nome do Produto</h3>
              <p className="product-price">R$ 124,90</p>
              <div className="rating-box">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <button className="btn">Comprar</button>
            </div>
          </div>
      </div>
      {/* DEAL */}
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
      {/* MAIS VENDIDOS */}
      <div className="products-grid">
          <h2>Mais Vendidos</h2>
          <div className="products-grid-container">
            <div className="products-grid-card">
              <span className="label hot">HOT</span>
              <img src={require('./img/prod-5.jpg')} alt="" />
              <p className="category">Categoria</p>
              <h3 className="product-name">Nome do Produto</h3>
              <p className="product-price">R$ 124,90</p>
              <div className="rating-box">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <button className="btn">Comprar</button>
            </div>

            <div className="products-grid-card">
              <span className="label hot">HOT</span>
              <img src={require('./img/prod-6.jpg')} alt="" />
              <p className="category">Categoria</p>
              <h3 className="product-name">Nome do Produto</h3>
              <p className="product-price">R$ 124,90</p>
              <div className="rating-box">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <button className="btn">Comprar</button>
            </div>

            <div className="products-grid-card">
              <span className="label hot">HOT</span>
              <img src={require('./img/prod-7.jpg')} alt="" />
              <p className="category">Categoria</p>
              <h3 className="product-name">Nome do Produto</h3>
              <p className="product-price">R$ 124,90</p>
              <div className="rating-box">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <button className="btn">Comprar</button>
            </div>

            <div className="products-grid-card">
              <span className="label hot">HOT</span>
              <img src={require('./img/prod-8.jpg')} alt="" />
              <p className="category">Categoria</p>
              <h3 className="product-name">Nome do Produto</h3>
              <p className="product-price">R$ 124,90</p>
              <div className="rating-box">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <button className="btn">Comprar</button>
            </div>
          </div>
      </div>
      {/* RECEBA PROMOÇÕES */}
      <div className="newsletter-container">
        <h2>Receba <span>Promoções todos os dias</span> por email</h2>
        <form action="">
          <input type="email" name='email' id='email' placeholder='Digite seu email'/>
          <input type="submit" className='btn btn-half' value="Assinar"/>
        </form>
        <div className="social-media">
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-pinterest-p"></i>
        </div>
      </div>
      {/* FOOTER */}
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
    </>
  );
}

export default App;
