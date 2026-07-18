import './AboutMe.css';
import './Projects.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Projects(){
    AOS.init();
    return(
        <div className = "projects">
            <head>
                <link rel="stylesheet" href="bower_components/aos/dist/aos.css" />
            </head>
            <script src="bower_components/aos/dist/aos.js"></script> 
            <div className='projectData'>
                <div className = "projectRow mobileProject">
                    <div className = "line">
                        <hr data-aos="fade-up" data-aos-duration="1000" className = "projectVertLine" width = "1" size = "170"></hr>
                    </div>
                    <div className = "deets">
                        <div data-aos="fade-up" data-aos-duration="1000" className = "titleAbout"><h1 className = "aboutMeText">PROJECTS</h1></div>
                        <img data-aos="fade-up" data-aos-duration="1000" className = "aboutImg" alt=""></img>
                    </div>
                </div>

                <div className = "projectRow">
                    <div data-aos="fade-up" data-aos-duration="1000" className = "projectText">

                        <div className='btn hvr-grow'>
                            <span></span>
                            <h2>Job Search Agent</h2>
                            <p>An always on, agentic system that manages my job search end to end. It monitors Gmail for job related emails, discovers
                            and evaluates postings against a configurable set of criteria, and generates tailored CVs and cover letters on demand, all
                            surfaced through a Telegram bot and a React dashboard. Built with a C# and ASP.NET Core API and worker service, a React,
                            TypeScript, and Tailwind frontend, and PostgreSQL for storage, with every agent behaviour defined in markdown skill files
                            that both services read from at runtime and driven end to end by Claude through the Anthropic SDK for email classification,
                            job evaluation, and content generation. This is the project I’m most proud of when it comes to agent driven development,
                            designing and orchestrating AI agents that reason over real tasks rather than just generate text.</p>
                            <a className='redirect redirectHover' href='https://github.com/kavinrahal/job-search-agent' target="_blank" rel="noopener noreferrer">Go to Github</a>
                        </div>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>

                        <div className='btn hvr-grow'>
                            <span></span>
                            <h2>Hide&Seek</h2>
                            <p>As the name suggests, a hide and seek game taken to the next level, where users can sign up and play hide and seek in large
                            public spaces with a defined play area that shrinks over time. Uses a React based frontend, an ExpressJS backend with web socket
                            functionality, and the Google Maps API to define play areas, track players, mark hiders as found, and alert hiders when a seeker
                            is nearby. A React Native mobile app is planned.</p>
                        </div>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>

                        <div className='btn hvr-grow'>
                            <span></span>
                            <h2>CarShareScheme</h2>
                            <p>Car renting made ever so easy. CarShareScheme was made as part of my Final Year Project, where I was in charge of
                            designing and developing the front end of the Web Application. CarShareScheme allows users to book a vehicle within their
                            vicinity, based on their liking and get directions to it using Google maps. Vehicles can be used for the period they have booked it
                            for, after which they must return the vehicle by stopping the vehicle in a safe area and ending their trip in order to make their
                            payment through a medium they prefer. I also contributed to the ASP.NET Core backend and helped host the application on an Azure
                            Cloud Server, which meant self learning ASP.NET Core in a four week period.</p>
                            <a className='redirect redirectHover' href='https://github.com/kavinrahal/PP1-MON1630-Team6' target="_blank" rel="noopener noreferrer">Go to Github</a>

                        </div>
                        <br></br>
                    </div>
                </div>            
            </div>
            
        </div>
        
    );
}

export default Projects;