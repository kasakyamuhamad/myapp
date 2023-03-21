import '/card.css'

import React from 'react'

const Card = ({children}) => {
  return (
    <article className={`card ${className}`} onClick={onClick}>
        {children}
    </article>
  )
}

export default Card