import React from 'react'

export default function Button({text}) {
  return (
      <button className='btn-header' style={{ color: '#F5F5F5' }}>{text ? text : 'Download Now'}</button>
  )
}
