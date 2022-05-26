import React from 'react'
import '../sass/app.sass';

function ProductsCard() {


    return (
        <div className="products-grid">
            <h2>Produtos Novos</h2>
            <div className="products-grid-container">
                <div className="products-grid-card">
                <span className="label new">New</span>
                <img src={require('../img/prod-1.jpg')} alt="" />
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
                <img src={require('../img/prod-2.jpg')} alt="" />
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
                <img src={require('../img/prod-3.jpg')} alt="" />
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
                <img src={require('../img/prod-4.jpg')} alt="" />
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
    )
}

export default ProductsCard