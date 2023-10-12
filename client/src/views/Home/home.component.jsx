
import './home.styles.css';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getDogs } from '../../redux/actions';
import Cards from "../../components/Cards/Cards.component"
import NavBar from '../../components/NavBar/NavBar.component';

function Home() {


  const dispatch = useDispatch()
  

  useEffect(()=>{
    dispatch(getDogs());
}, [dispatch])


  return (
    <div className="home">
      <h2 className="home-title">Home</h2>
      <NavBar/>
      <Cards />
      
    </div>
  );
}

export default Home;