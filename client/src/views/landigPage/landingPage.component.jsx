import React from 'react'
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <>
    <div>
      <div>
        <h1>{"ALL DOGS :)"}</h1>
        <Link to="/home">
        <button>ENTRAR</button>
        </Link>
      </div>
    </div>
    </>
  )
}