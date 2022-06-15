import React from 'react'
import { useEffect, useState } from 'react';
import "./portfolio.scss"
import PortfolioLi from '../portfolioli/PortfolioLi';
const data =  require("../../data");

export default function Portfolio() {
    const [data, setData] = useState(data);
    console.log("data");
    // const [selected, setSelected] = useState("featured");
    // const [data, setData] = useState([]);
    // const list = [
    //     {
    //       id: "featured",
    //       title: "Featured",
    //     },
    //     {
    //       id: "web",
    //       title: "Web App",
    //     },
    //     {
    //       id: "repository",
    //       title: "Repository",
    //     },
    // ];

    // useEffect(() => {
    //     switch (selected) {
    //         case "featured":
    //             setData(featuredPortfolio);
    //             break;
    //         case "web":
    //             setData(webApp);
    //             break;
    //         case "repository":
    //             setData(webRepo);
    //             break;
    //         default:
    //             setData(featuredPortfolio);
    //     }

    // }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
        <h1>Portfolio</h1>
        <ul>
        </ul>
        {/* <div className="container">
            {projectData.map((d) => (
                <div className="item">
                    <img src={d.img} alt="sproutspy"/>
                    <h3>{d.title}</h3>
                </div>
            ))}
        </div> */}
        <div className="container">
            {data.map((item) => (<h1>hello</h1>))}
        </div>
    </div>
  )
}
