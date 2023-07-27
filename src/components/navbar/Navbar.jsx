import React,{useState} from "react";
import "./Navbar.scss";
import logo from "../../assets/logo.png"
import { HashLink as Link } from "react-router-hash-link";
import {CgMenuGridR } from "react-icons/cg"

const Navbar = () => {

    const [bg , addbg] = useState('nav')
    const navOnScroll =() =>{
        if(window.scrollY >=70){
            addbg('nav nav-scroll')
        }else{
            addbg('nav')
        }
    }
    window.addEventListener('scroll',navOnScroll)

    const [active,setActive] = useState('lists')

    const showNavbar = ()=>{
      setActive('lists newlist')
    }
    const hideNavbar =() =>{
      setActive('lists')
    }
    

  return (

    <div  className={bg}>
    <div className="navbar flex">

      <div className="logo flex">
        <img src={logo} alt=""/>
      </div>
      <div className="contents">
        <div className={active}>
          <ul onClick={hideNavbar} className="flex n_list">
            <li onClick={hideNavbar}> <Link className='list' to='#venue'>Wed Venue</Link>  </li>
            <li onClick={hideNavbar}><Link className='list' to='#decorators'>Wed Decorators</Link></li>
            <li onClick={hideNavbar} ><Link className='list' to='#photography'>Wed Photography</Link></li>
            <li onClick={hideNavbar} ><Link className='list' to='#cater'>Wed Caters</Link></li>
          </ul>
          <button onClick={hideNavbar} className="btn n-btn">Register</button>
        </div>
      </div>

      <CgMenuGridR className="grid" onClick={showNavbar}/>
    </div>
    </div>
  );
};

export default Navbar;
