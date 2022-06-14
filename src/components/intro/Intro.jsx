import React from 'react'
import "./intro.scss"
import Kat from "../../assets/Kat.png"
import arrow from "../../assets/Shutterstock_366984632.png"
import { init } from "ityped";
import { useEffect, useRef } from 'react';

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef, {
      showCursor: false,
      strings: ["Hi, I'm Kat!"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src={Kat} alt="Kat" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hello and welcome, I am</h2>
          <h1>Kateryna Tekmenzhi</h1>
          <h3>Web <span>Developer</span></h3>
        </div>
        <a href="#portfolio">
          <img src={arrow} alt="arrow" />
        </a>
      </div>
    </div>
  )
}
