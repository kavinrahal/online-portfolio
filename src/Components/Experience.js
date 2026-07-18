import './AboutMe.css';
import './Experience.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import epicLogo from '../epic-lanka-logo.png'
import kolmeoLogo from '../kolmeo-logo.png'
import willowLogo from '../willow-logo.png'
import programmedLogo from '../programmed-logo.png'

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
                    <h2>Software Engineer at Willow Inc.</h2>
                    <p>Duration: April 2025 - May 2026</p>
                    <p>I took full end to end ownership of App Status, a telemetry monitoring feature giving real time and historical visibility into the health of connectors, sensors, and digital twin entities across customer estates. I drove the feature from initial design through to delivery, iterating on it across multiple release cycles based on customer feedback, and it went on to become a key differentiator in commercial discussions. I designed and maintained full stack features using ASP.NET Core and React with TypeScript, built CI/CD pipelines with Azure DevOps and GitHub Actions, and worked extensively with Azure Data Explorer and Azure Digital Twins to handle high volume telemetry data. I also embedded AI assisted tooling such as Claude Code into daily engineering workflows, building custom agents and automations that meaningfully reduced cycle time on repetitive work.
                    </p>
                    <img className = "epicLogo" src = {willowLogo} alt="Willow Inc. logo"></img>

                </div>
                <br></br>
                <br></br>
                <div data-aos="fade-up" data-aos-duration="1000" className = "experienceText">
                    <h2>Freelance Software Engineer at Programmed</h2>
                    <p>Duration: November 2024 - April 2025</p>
                    <p>I was brought on to resolve a significant backlog of bugs in a legacy ASP.NET Core application built on .NET 8.0, Razor Pages, and Kendo UI, hosted on Azure. I focused on identifying and fixing critical issues across both the frontend and backend, modernised outdated code to work with current infrastructure, and adapted the application for mobile platforms with a responsive design. I was recognised for my performance and communication, becoming the only freelance engineer invited to participate in team meetings and sprint planning alongside the full time team, and worked closely with the engineering team through pair programming.
                    </p>
                    <img className = "epicLogo" src = {programmedLogo} alt="Programmed logo"></img>

                </div>
                <br></br>
                <br></br>
                <div data-aos="fade-up" data-aos-duration="1000" className = "experienceText">
                    <h2>Full Stack Developer</h2>
                    <p>Duration: July 2022 - July 2024</p>
                    <p>I was primarily part of the Payments team at Kolmeo, which has processed over $1 billion and handles between $15 and $20 million in transactions every week through an in house payments suite built on a TypeScript and React frontend, connected to an ASP.NET Core and GraphQL backend. I contributed heavily to building virtual account payment options as an alternative to BPay, helping the company cut related costs by almost $500,000 annually, and worked on the customer facing interface that let property managers switch tenants between payment methods. I also worked on Invoice Optimisation, improving EOFY statements, and building Owner Payment Advices, and was part of the Integrations team, helping Kolmeo connect with third party services such as Sorted, Bricks and Agent, Real Estate Australia, and Snug. Beyond feature work, I handled over 100 client support tickets, mentored newly joined junior developers, and presented my work to stakeholders across the company.
                    </p>
                    <img className = "epicLogo" src = {kolmeoLogo} alt="Kolmeo logo"></img>

                </div>
                <br></br>
                <br></br>
                <div data-aos="fade-up" data-aos-duration="1000" className = "experienceText">
                    <h2>UI/UX Design and Development Intern</h2>
                    <p>Duration: December 2020 - May 2021</p>
                    <p>I worked with the main team in charge of creating the User Interfaces for all of Epic Lanka Technologies’ products, having flown back to Sri Lanka during the COVID-19 pandemic to take up the role. I contributed to designing Doxpro Spaces, a cloudflow tool for small and medium sized enterprises, the Helaviru and Riyawiru mobile application that helps local farmers and distributors sell and manage their goods, and an application for the National Medicines Regulatory Authority of Sri Lanka used by officers to carry out inspections. I worked closely with business analysts, product managers, and other developers to design interface elements using Figma and Adobe Illustrator, and was also responsible for building out some of these components for the Angular based frontend.
                    </p>
                    <img className = "epicLogo" src = {epicLogo} alt="Epic Lanka Technologies logo"></img>

                </div>
            </div>

            <div className = "column aboutMeLeft" id = "rightSide">
                <div className = "line">
                    <hr data-aos="fade-up" data-aos-duration="1000" className = "vertLine aboutMeLine" width = "1" size = "170"></hr>
                </div>
                <div className = "deets">
                    <div data-aos="fade-up" data-aos-duration="1000" className = "titleAbout"><h1 className = "aboutMeText">EXPERIENCE</h1></div>
                    <img data-aos="fade-up" data-aos-duration="1000" className = "aboutImg" alt=""></img>
                </div>
            </div>
        </div>
        
    );
}

export default Experience;