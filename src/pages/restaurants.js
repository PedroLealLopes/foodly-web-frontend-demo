import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import Container from '../components/Container'
import ImageRestaurant from '../components/Article/image-restaurant.jpg'

function App() {
  document.title = "Foodly | Restaurants"
  window.scrollTo(0, 0);
  return (
    <>
      <Header />
      <Container className="restaurants-container">
        <form className="restaurants-form">
          {/* <label className="restaurants-searchbar-label">Search for Restaurant:</label>
          <input type="text" className="restaurants-searchbar" /> */}

          
        <div className="field">
          <input autoComplete="off" type="text" name="restaurant-name" id="restaurant-name" placeholder=" "/>
          <label htmlFor="restaurant-name">Search for Restaurant:</label>
        </div>

        </form>


        <div className="restaurant-card">
          <img src={ImageRestaurant} alt=""/>
          <div className="restaurant-card-body">
            <Link to="/restaurants/1">
              <h3>
                Nome de restaurante
              </h3>
            </Link>
            
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error vel fugit sit quo, fugiat reprehenderit iste nesciunt itaque officia placeat iusto quibusdam nisi sunt. Ipsa itaque reprehenderit quae illum nihil?
            </p>
          </div>
        </div>

        
        <div className="restaurant-card">
          <img src={ImageRestaurant} alt=""/>
          <div className="restaurant-card-body">
            <Link to="/restaurants/1">
              <h3>
                Nome de restaurante
              </h3>
            </Link>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error vel fugit sit quo, fugiat reprehenderit iste nesciunt itaque officia placeat iusto quibusdam nisi sunt. Ipsa itaque reprehenderit quae illum nihil?
            </p>
          </div>
        </div>

        
        <div className="restaurant-card">
          <img src={ImageRestaurant} alt=""/>
          <div className="restaurant-card-body">
            <Link to="/restaurants/1">
              <h3>
                Nome de restaurante
              </h3>
            </Link>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error vel fugit sit quo, fugiat reprehenderit iste nesciunt itaque officia placeat iusto quibusdam nisi sunt. Ipsa itaque reprehenderit quae illum nihil?
            </p>
          </div>
        </div>

        
        <div className="restaurant-card">
          <img src={ImageRestaurant} alt=""/>
          <div className="restaurant-card-body">
            <Link to="/restaurants/1">
              <h3>
                Nome de restaurante
              </h3>
            </Link>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error vel fugit sit quo, fugiat reprehenderit iste nesciunt itaque officia placeat iusto quibusdam nisi sunt. Ipsa itaque reprehenderit quae illum nihil?
            </p>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  )
}

export default App
