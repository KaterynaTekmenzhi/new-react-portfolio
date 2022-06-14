import React from 'react'
import "./portfolio.scss"
import sproutspy from "../../assets/sproutspy.png"

export default function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
        <h1>Portfolio</h1>
        <ul>
            <li className="active">Featured</li>
            <li>Featured</li>
            <li>Featured</li>
            <li>Featured</li>
            <li>Featured</li>
            <li>Featured</li>
        </ul>
        <div className="container">
            <div className="item">
                <img src={ sproutspy } alt="sproutspy"/>
                <h3>Title</h3>
            </div>
        </div>
    </div>
  )
}
