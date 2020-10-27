import React from 'react'
import { Link } from 'react-router-dom'

export default function Button({text, type, to}) {
  return (
    <Link to={ to ? to : '/login' }>
      <button type={ type ? type : 'text' } className='btn-header' style={{ color: '#F5F5F5' }}>{text ? text : 'Login'}</button>
    </Link>
  )
}