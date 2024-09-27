import './AboutMe.css';
import './Experience.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import epicLogo from '../epic-lanka-logo.png'
import kolmeoLogo from '../kolmeo-logo.png'

function Experience(){
    AOS.init();
    return(
        <div className = "experience">
            <head>
                <link rel="stylesheet" href="bower_components/aos/dist/aos.css" />
            </head>
            <script src="bower_components/aos/dist/aos.js"></script> 
            <div className = "column leftSide" id = "leftSide">
            <div data-aos="fade-up" data-aos-duration="1000" className = "experienceText">
                    <h2>Full Stack Software Engineer</h2>
                    <p>Duration: July 2022 - June 2024</p>
                    <p>I was primarily part of the Payments team at Kolmeo, which handled $5 - 6 million dollars in transactions every week. 
                    I contributed heavily towards various features such as Invoice Optimization, Improving EOFY statements and Owner Payment Advice generation.
                    Furthermore, I was also part of the Integrations team, of which I was one of the initiating members of. Here, I helped Kolmeo to integrate with
                    all kinds of 3rd party services such REA (Real Estate Australia), Snug, and Domain.com.
                    Such projects helped the business streamline payments, and rise above its competitors due to its robust in-house payments suite. Being heavily involved in such
                    projects helped me gain priceless experience and expertise in developing robust react based frontend and ASP.NETCore and GraphQL backend applications, as well as agile practices
                    in a demanding environment. 
                    </p>
                    <img className = "epicLogo" src = {kolmeoLogo}></img>

                </div>
                <br></br>
                <br></br>
                <div data-aos="fade-up" data-aos-duration="1000" className = "experienceText">
                    <h2>UI/UX Design and Development Intern</h2>
                    <p>Duration: December 2020 - May 2021</p>
                    <p>I worked with the main team in charge of creating the User Interfaces for all of Epic Lanka Technologies’ products. 
                    I was in charge of working with the team to fine tune designs created by senior engineers and communicating with 
                    business analysts in order to truly find the essence of what the application is set to achieve, by using design tools 
                    such as Figma and Adobe Photoshop. Furthermore, I was also given the responsibility of developing certain components 
                    of the Web Applications and Mobile Applications made as part of projects carried out by the company using AngularJS.
                    </p>
                    <img className = "epicLogo" src = {epicLogo}></img>

                </div>
            </div>

            <div className = "column aboutMeLeft" id = "rightSide">
                <div className = "line">
                    <hr data-aos="fade-up" data-aos-duration="1000" className = "vertLine aboutMeLine" width = "1" size = "170"></hr>
                </div>
                <div className = "deets">
                    <div data-aos="fade-up" data-aos-duration="1000" className = "titleAbout"><h1 className = "aboutMeText">EXPERIENCE</h1></div>
                    <img data-aos="fade-up" data-aos-duration="1000" className = "aboutImg"></img>
                </div>
            </div>
        </div>
        
    );
}

export default Experience;