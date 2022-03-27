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
                <div className = "projectRow">
                    <div className = "line">
                        <hr data-aos="fade-up" data-aos-duration="1000" className = "projectVertLine" width = "1" size = "170"></hr>
                    </div>
                    <div className = "deets">
                        <div data-aos="fade-up" data-aos-duration="1000" className = "titleAbout"><h1 className = "aboutMeText">PROJECTS</h1></div>
                        <img data-aos="fade-up" data-aos-duration="1000" className = "aboutImg"></img>
                    </div>
                </div>

                <div className = "projectRow">
                    <div data-aos="fade-up" data-aos-duration="1000" className = "projectText">
                        <h2>Vibe Check</h2>
                        <p>A Social Network for university students to interact with each other during the COVID-19 pandemic. 
                        Students can sign up and login to share their thoughts and share pictures alongside. Furthermore, just 
                        like any social network, users can like and dislike other users’ posts and follow and unfollow other users
                         as well. </p>

                        <br></br>

                        <h2>CarShareScheme</h2>
                        <p>Car renting made ever so easy. CarShareScheme was made as part of my Final Year Project, where I was in charge of 
                        designing and developing the front end of the Web Application. CarShareScheme allows users to book a vehicle within their 
                        vicinity, based on their liking and get directions to it using Google maps. Vehicles can be used for the period they have booked it 
                        for, after which they must return the vehicle by stopping the vehicle in a safe area and ending their trip in order to make their 
                        payment through a medium they prefer.</p>
                        <br></br>

                        <h2>AGME</h2>
                        <p>AGME is a booking system that allows customers to sign up to and create bookings for a particular business that is registered. 
                        Users can sign up to access all kinds of product and service providers, ranging from vehicle repairs to hair stylists. 
                        They can make a booking for an upcoming date, depending on the availability of the service and also choose the employee 
                        they prefer to do the service for them. Subsequently, the employee’s and the business’ schedules are updated. 
                        Business Owners also have the freedom to manage their employees and assign working hours.  </p>
                        <br></br>

                        <h2>IMBD</h2>
                        <p>IMBD contains information about various movies, actors, and other information about various programs available on the database.
                         Users can sign up and view information about any movie on the website. Admins can manage any entry made into the website by adding, 
                         removing or editing information about any movie or actor.</p>
                        <br></br>
                    </div>
                </div>            
            </div>
            
        </div>
        
    );
}

export default Projects;