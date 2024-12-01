import React from 'react'
import './Hero.css'
import shreya_crop from '../../assets/shreya_crop.jpeg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Resume from '../../assets/Resume.pdf'

const Hero = () => {
    return (
        <div id='home' className='hero'>
            <img src={shreya_crop} alt="" />
            <h1><span>I'm Shreya Patel</span>,Frontend Developer</h1>
            <p></p>
            <div className="hero-action">
                <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
                <div className="hero-resume">
                    <a href={Resume} target='_blank' rel="noopener noreferrer">My Resume</a></div>
            </div>

        </div>
    )
}

export default Hero