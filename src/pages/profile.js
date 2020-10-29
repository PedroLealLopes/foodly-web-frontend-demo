import React from 'react'
import Header from '../components/Header'
import Container from '../components/Container'
import Button from '../components/Button'

function App() {
  document.title = "Foodly | Login"
  return (
    <>
      <Header />
      <Container className="profile-container">
        <div className='profile-header'>
          <div className='profile-header__image' />
          <div className='profile-header__info'>
            <h1>
              Pedro Lopes
            </h1>
            <h4>
              23 anos
            </h4>
            <h4>
              Leiria
            </h4>
          </div>
          <Button className='profile-header__editBtn' text='Editar'/>
        </div>
        <div className='profile-body'>
          <h1>
            Description
          </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis ad ratione, reprehenderit rerum inventore porro quas, magnam accusantium nemo nobis, dolore corporis nam delectus. Consequuntur, vero! Dolorem expedita explicabo cum?
          </p>
        </div>
      </Container>
    </>
  )
}

export default App
