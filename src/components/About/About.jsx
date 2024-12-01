import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import shreya_crop from '../../assets/shreya_crop.jpeg'

const About = () => {
  return (
    <div id='about' className='about'>
       <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
       </div>
       <div className="about-sections">
        <div className="about-left">
            <img src={shreya_crop} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
               <p>I am a passionate Frontend Developer with a strong foundation in building dynamic, responsive, and user-friendly web interfaces. </p>
               <p>Proficient in modern technologies like HTML, CSS, JavaScript, and frameworks like React.js, I strive to bridge the gap between design and functionality. </p> 
            </div>
            < div className="about-skills">
                <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"100%"}}/></div>
                <div className="about-skill"><p>React JS</p><hr style={{width:"70%"}}/></div>
                < div className="about-skill"><p>Javascript</p><hr style={{width:"60%"}}/></div>
                < div className="about-skill"><p>Java</p><hr style={{width:"60%"}}/></div>
                < div className="about-skill"><p>Linux</p><hr style={{width:"80%"}}/></div>
                < div className="about-skill"><p>OOPS</p><hr style={{width:"70%"}}/></div>



            </div>
         </div>
    </div>
    <div className="about-achievements">
        <div className="about-achievement">
            <h2>PAPER PUBLISHED</h2>
            <p>Prioritization of court cases in india</p>  
        </div>
        <hr/>
        <div className="about-achievement">
            <h2>INTERNSHIP</h2>
            <p>at Needibay</p>
            
        </div>
    </div>
</div>
)
}

export default About