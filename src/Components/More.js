import './AboutMe.css';
import './Projects.css'
import './More.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import linkedIn from '../linkedin.png';
import gitHub from '../github.png';
import facebook from '../facebook.png';
import instagram from '../instagram.png';

function More(){
    AOS.init();
    return(
        <div className='more'>
            <head>
                <link rel="stylesheet" href="bower_components/aos/dist/aos.css" />
            </head>
            <script src="bower_components/aos/dist/aos.js"></script> 
            <div className='moreData' data-aos="fade-up" data-aos-duration="1000">
                <h1 className = "aboutMeText">Want to know more?</h1>
                <br></br>
                <br></br>
                <div className = "linksRow">
                    <a href = "https://www.linkedin.com/in/kavinrahal/" target="_blank" rel="noopener noreferrer"><img className='logoImg' src = {linkedIn}/></a>
                    <a href = "https://github.com/kavinrahal" target="_blank" rel="noopener noreferrer"><img className='logoImg' src = {gitHub}/></a>
                    <a href = "https://www.facebook.com/kavindya.abeysinghe.1/" target="_blank" rel="noopener noreferrer"><img className='logoImg' src = {facebook}/></a>
                    <a href = "https://www.instagram.com/freeekonaleash/" target="_blank" rel="noopener noreferrer"><img className='logoImg' src = {instagram}/></a>
                </div>
                <p className='rights'>© Kavindya Abeysinghe 2024. All rights reserved.</p>
            </div>
        </div>
    );
}

export default More;