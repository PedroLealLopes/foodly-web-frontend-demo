import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Container from '../components/Container'

function App() {
  document.title = "Foodly | Nome Restaurante"
  return (
    <>
      <Header />
      <Container className="restaurant-container">
        <div className="restaurant-image">
          <div className="restaurant-image__name">
            Nome de Restaurante
          </div>
        </div>
        <div className="restaurant-body">
          <div className="restaurant-body__header">
            <span>
              Urbanização Casal Custódio Parceiros 2400-441, Leiria 
            </span>
            <span>
              Pizzaria
            </span>
            <span>
              Preço médio: 15€
            </span>
            <span>
              12/30
            </span>
          </div>
          <div className="restaurant-body__info">
            <h3>
              Description
            </h3>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem minima, iste facilis, accusantium quisquam fugit repellat alias odio in itaque cupiditate dignissimos, eligendi ipsum nemo. Amet atque doloribus itaque voluptatem.
          </div>
        </div>
      </Container>
      <Footer />
    </>
  )
}

export default App
