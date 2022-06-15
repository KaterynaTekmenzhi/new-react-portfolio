import React from 'react'
import "./portfolioli.scss"

export default function PortfolioLi({ id, title, active, setSelected }) {
  return (
    <li 
        className={active ? "portfolioli active" : "portfolioli"}
        onClick={() => setSelected(id)}
    >
        {title}
    </li>
  )
}
