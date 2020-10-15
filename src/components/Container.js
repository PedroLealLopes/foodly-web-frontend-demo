import React from 'react'

export default function Container({children, className}) {
  return (
    <section className={'container ' + (className ? className : '')}>
      {children}
    </section>
  )
}
