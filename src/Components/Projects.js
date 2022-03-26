import './AboutMe.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Projects(){
    AOS.init();
    return(
        <div className = "aboutMe">
            <head>
                <link rel="stylesheet" href="bower_components/aos/dist/aos.css" />
            </head>
            <script src="bower_components/aos/dist/aos.js"></script> 
            <div className = "column" id = "leftSide">
                <div className = "line">
                    <hr data-aos="fade-up" data-aos-duration="1000" className = "vertLine" width = "1" size = "170"></hr>
                </div>
                <div className = "deets">
                    <div data-aos="fade-up" data-aos-duration="1000" className = "titleAbout"><h1 className = "aboutMeText">PROJECTS</h1></div>
                    <img data-aos="fade-up" data-aos-duration="1000" className = "aboutImg"></img>
                </div>
            </div>

            <div className = "column" id = "rightSide">
                <div data-aos="fade-up" data-aos-duration="1000" className = "aboutText">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nunc erat, auctor et dictum vel, aliquet at lorem. Sed sit amet est fringilla, molestie eros at, auctor mauris. Integer id malesuada ligula. In et porttitor libero. Donec velit felis, eleifend quis lacinia id, elementum sed felis. Pellentesque finibus turpis ante, sit amet pellentesque lectus dapibus vel. Vestibulum sagittis, leo sit amet pharetra maximus, sem arcu semper dui, at dictum justo dui eget tortor. Maecenas dapibus sapien ut ex viverra interdum. Aenean dictum ipsum eu lacus facilisis, eu aliquet lorem convallis.</p>
                </div>
            </div>
        </div>
        
    );
}

export default Projects;