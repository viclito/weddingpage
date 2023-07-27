import React from 'react'
import "./Home.scss"
import frontimg from "../../assets/frontimg.jpg"
import CountUp from 'react-countup'
import {AiFillStar} from 'react-icons/ai'


const Home = () => {
  return (
    <div className='home flex'>
        <div className="h-content flex">
            <h1>Dream your special day big and make it big</h1>
            <div className="inputbox flex">
                <div className="whatinput">
                <input type="text" 
                placeholder='search for'/>
                </div>

                <div className="placeinput">
                <input type="text" 
                placeholder='in where?'/>
                </div>

                <button className='btn h-btn'>Find</button>
            </div>
            <div className="expressions flex">
                <div className="left  expression">
                        <span className='title'>Orders</span>
                        <span className='content'>Over the period of time succesfully placed orders</span>
                        
                        <span className='count'><CountUp start ={4000} end ={5000}/>+</span>      
                    
                </div>

                <div className="middle expression">
                    <span className='title'>happy customer</span>
                    <span className='content'>Become glad when they remember their day</span>
                    <span className='count'><CountUp start ={500} end ={1500}/>+</span>      
                    
                </div>

                <div className="right expression">
                    <span className='title'>Rating</span>
                    <span className='content star'><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/></span>
                    <span className='count count3'><CountUp start ={1} end ={5} duration={5}/></span>

                </div>
            </div>
        </div>
        <div className="image flex">
            <img src={frontimg} alt="" />
        </div>
    </div>
  )
}

export default Home