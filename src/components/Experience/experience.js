import React from 'react'
import "./experience.css";
import vnr from "../../assets/vnr.png"
import purecode from "../../assets/purecode.png"

const Experience = () => {
  return (
    <section id="exp">
        <span className="expTitle">Education <span className='and'>& </span>Experience</span>
        <span className='expDesc'>I completed my B.Tech in Computer Science and Engineering, and I have extensive experience in frontend development. </span>
        <div className='expBars'>
            <div className='expBar'>
                <img src={vnr} alt="VNRIMAGE" className='expBarImg'/>
                <div className='expBarText'>
                    <h2>Graduation</h2>
                    <p> I completed my graduation in CSE with an aggregate CGPA of 8.4.</p>
                </div>
            </div>

            <div className='expBar'>
                <img src={purecode} alt="PURECODEIMAGE" className='expBarImg'/>
                <div className='expBarText'>
                    <h2>Internship</h2>
                    <p>
                    This experience has strengthened my skills in creating dynamic, responsive web applications..</p>
                </div>
            </div>

           
        </div>
    </section>
  )
}

export default Experience