import React from 'react'
import Container from './Container'
import Article from './Article/Article'
import ImageConfetti from './Article/image-confetti.jpg'
import ImageCurrency from './Article/image-currency.jpg'
import ImagePlane from './Article/image-plane.jpg'
import ImageRestaurant from './Article/image-restaurant.jpg'

var articles = [ 
  {
    author: 'By Claire Robinson',
    title: 'Receive money in any currency with no fees',
    content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam sit vitae vel nostrum quibusdam cum fuga asperiores, quia rem quae itaque culpa nisi eaque incidunt maxime labore illo inventore. Neque?',
  },
  {
    author: 'By Wilson Hutton',
    title: 'Treat yourself without worrying about money',
    content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam sit vitae vel nostrum quibusdam cum fuga asperiores, quia rem quae itaque culpa nisi eaque incidunt maxime labore illo inventore. Neque?',
  },
  {
    author: 'By Wilson Hutton',
    title: 'Take your Easybank card wherever you go',
    content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam sit vitae vel nostrum quibusdam cum fuga asperiores, quia rem quae itaque culpa nisi eaque incidunt maxime labore illo inventore. Neque?',
  },
  {
    author: 'By Claire Robinson',
    title: 'Our invite-only Beta accounts are now live!',
    content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam sit vitae vel nostrum quibusdam cum fuga asperiores, quia rem quae itaque culpa nisi eaque incidunt maxime labore illo inventore. Neque?',
  },

];

const LatestArticles = () => {
  return (
    <Container className="latest-articles-container">
          <h1>Latest Restaurants</h1>
          <div className="latest-articles-articles">
            <Article img={ImageCurrency} alt="Article image of currency" article={articles[0]} />
            <Article img={ImageRestaurant} alt="Article image of a restaurant" article={articles[1]} />
            <Article img={ImagePlane} alt="Article image of a plane" article={articles[2]} />
            <Article img={ImageConfetti} alt="ArtiArticle image of a confetti" article={articles[3]} />
          </div>
    </Container>
  )
}

export default LatestArticles
