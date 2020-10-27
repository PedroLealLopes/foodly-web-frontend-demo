import React from 'react'
import Header from '../components/Header'
import Container from '../components/Container'
import Button from '../components/Button'

function App() {
  document.title = "Foodly | Login"
  return (
    <>
      <Header />
      <Container className="login-container">
        <div className='login'>
          <form className='login-form'>
            <label htmlFor="">Username</label>
            <input type="text"/>
            <label htmlFor="">Password</label>
            <input type="password"/>
            <Button to='/login-auth' type="submit"></Button>
          </form>
        </div>
        
      </Container>
    </>
  )
}

export default App
