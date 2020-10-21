import React from 'react'
import Container from './Container'
import IconOnlineSVG from './IconOnlineSVG'
import IconBudgetingSVG from './IconBudgetingSVG'
import IconOnboardingSVG from './IconOnboardingSVG'
import IconApiSVG from './IconApiSVG'

const ChooseEasybank = () => {
  return (
    <Container className='choose-easybank-container'>
      <div className='choose-easybank-header'>
        <h1>Why choose <strong>Foodly</strong></h1>
        <p>
          We take into account your allergies when you order your food. <br />
          Control your diet like never before.
        </p>
      </div>
      <div className='choose-easybank-list'>
        <div className='choose-easybank-list-item'>
          <IconOnlineSVG />
          <h3>Online Restaurant</h3>
          <p>
            Our modern web and mobile applications allow you to keep track of
            your favorite restaurants wherever you are in the world. Receive notifications about restaurant occupancy
          </p>
        </div>
        <div className='choose-easybank-list-item'>
          <IconBudgetingSVG />
          <h3>Simple User Experience</h3>
          <p>
            Simple design to push the user experience far beyond expectations. 
          </p>
        </div>
        <div className='choose-easybank-list-item'>
          <IconOnboardingSVG />
          <h3>Fast Ordering</h3>
          <p>
            We don't do physical menus. Open your app and pick
            your order right away. The kitchen will start preparing your food immediately while taking your allergies into account.
          </p>
        </div>
        <div className='choose-easybank-list-item'>
          <IconApiSVG />
          <h3>Open API</h3>
          <p>
            Manage your favorite restaurants, dishes and much more. Tracking your diet has never been easier.
          </p>
        </div>
      </div>
    </Container>
  )
}

export default ChooseEasybank
