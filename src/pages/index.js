import React from 'react'
import Header from '../components/Header'
import NextGen from '../components/NextGen'
import ChooseEasybank from '../components/ChooseEasybank'
import LatestArticles from '../components/LatestArticles'
import Footer from '../components/Footer'

function App() {
  document.title = "Foodly | Home"
  return (
    <>
      <Header />
      <NextGen />
      <ChooseEasybank />
      <LatestArticles />
      <Footer />
    </>
  )
}

export default App
