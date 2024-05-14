import './AboutMe.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function AboutMe(){
    AOS.init();
    return(
        <div className = "aboutMe">
            <head>
                <link rel="stylesheet" href="bower_components/aos/dist/aos.css" />
            </head>
            <script src="bower_components/aos/dist/aos.js"></script> 
            <div className = "column aboutMeLeft" id = "leftSide">
                <div className = "line">
                    <hr data-aos="fade-up" data-aos-duration="1000" className = "vertLine aboutMeLine" width = "1" size = "170"></hr>
                </div>
                <div className = "deets">
                    <div data-aos="fade-up" data-aos-duration="1000" className = "titleAbout"><h1 className = "aboutMeText">ABOUT ME</h1></div>
                    <img data-aos="fade-up" data-aos-duration="1000" className = "aboutImg"></img>
                </div>
            </div>

            <div className = "column" id = "rightSide">
                <div data-aos="fade-up" data-aos-duration="1000" className = "aboutText">
                    <p>Hey there! I’m Kavindya, an IT graduate from the Royal Melbourne Institute of Technology, currently with almost 2 years of experience. As my time as a full stack developer, I mainly worked 
                    on the payments team and focused on seamlessly connecting robust GraphQL and ASP.NetCore back-end infrastructure with React front-end.</p>
                    <p>A bit about myself, I’m very much a team player and love getting to know new people and share my experiences with them and hearing their experiences and points of views as well. 
                    New perspectives fascinate me, and I love looking at things through these different perspectives, which helps me with the designing process that is very important for UI design.</p>
                    <p>My work ethic is simple. I simply will not rest, till my responsibilities have been fulfilled, regardless of how daunting the task may be. Willing to take up all types of challenges, 
                    I consider taking responsibility and reliability the two biggest pillars of my success so far, when working in and amongst a team.
                    </p>
                </div>
            </div>
        </div> 
        
    );
}

export default AboutMe;