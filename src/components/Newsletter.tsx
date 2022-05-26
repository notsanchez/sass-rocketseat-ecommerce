import React from 'react'
import '../sass/app.sass';

function Newsletter() {
  return (
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
  )
}

export default Newsletter