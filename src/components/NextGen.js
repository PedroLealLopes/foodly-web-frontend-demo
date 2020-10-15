import React from 'react'
import Button from './Button'
import Container from './Container'
import BackgroundSVG from './BackgroundSVG'

export default function Nextgen() {
  return (
    <div style={{ marginTop: '81px' }}>
      <Container>
        <div className='next-gen-container'>
          <h1>
            Next generation <br /> restaurant system
          </h1>
          <p>
            All the information of your favorite restaurant at your<br /> disposal in your smartphone. Statistics, best dishes, <br /> average price per person, and many more.
          </p>
          <Button />
        </div>
        <BackgroundSVG isDesktop={true} style={{ position: 'absolute', left: '50%' }} />
      </Container>
    </div>
  )
}
