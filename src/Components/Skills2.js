import './AboutMe.css';
import './Skills.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import reactImg from '../KAvin react.png';
import nativeImg from '../react-native.png';
import figma from '../figma.png';
import python from '../python.png';
import mysql from '../sql.png';
import android from '../android.png';
import git from '../git.png';
import photoshop from '../photoshop.png';
import express from '../express.png';

function Skills2(){
    AOS.init();
    return(
        <div className = "skills">
            <head>
                <link rel="stylesheet" href="bower_components/aos/dist/aos.css" />
            </head>
            <script src="bower_components/aos/dist/aos.js"></script> 
            <div className = "column" id = "leftSide">
                <div className = "skillsBox">
                    <div className = "row mobileRow" data-aos="fade-up" data-aos-duration="1000">
                        <div className = "react">
                            <img className = "reactImgRotate" src = {reactImg}></img>
                            <div className = "skillTitle">React</div>
                        </div>
                        <div className = "react">
                            <img className = "reactImg" src = {express}></img>
                            <div className = "skillTitle">Express</div>
                        </div>
                        <div className = "react">
                            <img className = "reactImg" src = {nativeImg}></img>
                            <div className = "skillTitle">React Native</div>
                        </div>
                    </div>

                    <div className = "row mobileRow" data-aos="fade-up" data-aos-duration="1000">
                        <div className = "react">
                            <img className = "reactImg" src = {figma}></img>
                            <div className = "skillTitle">Figma</div>
                        </div>
                        <div className = "react">
                            <img className = "reactImg" src = {python}></img>
                            <div className = "skillTitle">Python</div>
                        </div>
                        <div className = "react">
                            <img className = "reactImg" src = {mysql}></img>
                            <div className = "skillTitle">MySQL</div>
                        </div>
                    </div>

                    <div className = "row mobileRow" data-aos="fade-up" data-aos-duration="1000">
                        <div className = "react">
                            <img className = "androidImg" src = {android}></img>
                            <div className = "skillTitle">Android</div>
                        </div>
                        <div className = "react">
                            <img className = "reactImg" src = {git}></img>
                            <div className = "skillTitle">Git</div>
                        </div>
                        <div className = "react">
                            <img className = "reactImg" src = {photoshop}></img>
                            <div className = "skillTitle">Photoshop</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className = "column mobileRight" id = "rightSide">
                
                <div className = "line">
                    <hr data-aos="fade-up" data-aos-duration="1000" className = "vertLine skillsLine" width = "1" size = "170"></hr>
                </div>
                <div className = "deets">
                    <div data-aos="fade-up" data-aos-duration="1000" className = "titleAbout"><h1 className = "aboutMeText">SKILLS</h1></div>
                    <img data-aos="fade-up" data-aos-duration="1000" className = "aboutImg"></img>
                </div>
            </div>
        </div>
        
    );
}

export default Skills2;