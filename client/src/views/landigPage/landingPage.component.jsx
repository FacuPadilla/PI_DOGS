import React from 'react'
import { Link } from "react-router-dom";
import "./landingPage.style.css"

export default function LandingPage() {
  return (
    <>
    <div className="landingg">
      <div >
        <h1>{"THE DOGS WORLD"}</h1>
        <Link to="/home">
        <button>ENTRAR</button>
        </Link>
      </div>
    </div>
    </>
  )
}