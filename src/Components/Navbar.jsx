import React, { useEffect, useState } from 'react';
import './Navbar.css';
import {NavLink} from 'react-router-dom';
const style3={
  position:"absolute",
  right:"5px",
  top:"8%",
  listStyle:"none",
 
}
const listStyle={
  textAlign:"center",
  background:"#172525",
  fontSize:"23px",
//   fontWeight:"Bold",
  borderRadius:"8px",
  borderBottom:"8px",
  padding:"5px",
//   border:"px solid white"
};

const List=(props)=>{
  return  (<ul style={props.style}
  >
  <li style={listStyle}><NavLink exact activeclassName="active" className="unactive" to="/"> Home</NavLink></li>
  <li style={listStyle}><NavLink exact activeClassName="active" className="unactive" to="/about">About Me</NavLink></li>
  <li style={listStyle}><NavLink exact activeClassName="active" className="unactive" to="/work">Portfolio</NavLink></li>
  <li style={listStyle}><NavLink exact activeClassName="active" className="unactive" to="/certification">Certifications</NavLink></li>
  <li style={listStyle}><NavLink exact activeClassName="active" className="unactive" to="/contact">Contact Me</NavLink> </li>
  </ul>
  )
};

const Mobilelist=()=>{
  const [active,setactive]=useState(false);
  return(
    <>
    <button style={{
      width:"20%",
      justifySelf:"end",
      color:"white",
      backgroundColor:"#172525",
      border:"2px solid #172525",
      fontSize:"30px"
    }}
     onClick={()=>{
      setactive(!active);
    }
     }
      >
        &#9776;
          </button>
    {active && <List style={style3}/>}
    </>
  )
}

const Navbar=()=>{
const [ismoblie,setismobile]=useState(
  window.matchMedia('(max-width:1025px)').matches
);
 useEffect(()=>{
   window.addEventListener("resize",()=>{
     setismobile( window.matchMedia('(max-width:1025px)').matches);
   })
 })
  return(
    <>
    <nav style={{
       width:'100vw',
      display:'grid',
      gridTemplateColumns:'20% 80%  ',
      alignItems:'center',
      backgroundColor:'#172525',
    }}>
     <h1 style={{color:"white",
    display:"flex",
    justifyContent:"flex-start",
    marginLeft:"5px"}}>HAFIZ SAYYED ALI HAMDANI</h1>

      {ismoblie ? <Mobilelist/> : <List
      style={{
        display:'flex',
        justifyContent:"space-evenly",
        listStyle:"none",
        paddingRight:"10px",
        
    
      }
    }
      />}
     
    </nav>
    </>
  )
}
export default Navbar;