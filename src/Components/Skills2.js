import './AboutMe.css';
import './Skills.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import reactImg from '../KAvin react.png';
import nativeImg from '../react-native.png';
import python from '../python.png';
import mysql from '../sql.png';
import git from '../git.png';
import photoshop from '../photoshop.png';
import express from '../express.png';
import asp from '../asp.png';
import mongo from '../mongodb.png';
import java from '../java.png';
import graphql from '../graphql.png';
import azure from '../azure.png';
import nextjs from '../nextjs.png';

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
                            <img className = "reactImg" src = {graphql}></img>
                            <div className = "skillTitle">GraphQL</div>
                        </div>
                        <div className = "react">
                            <img className = "reactImg" src = {asp}></img>
                            <div className = "skillTitle">ASP.NET Core</div>
                        </div>
                    </div>

                    <div className = "row mobileRow" data-aos="fade-up" data-aos-duration="1000">
                        <div className = "react">
                            <img className = "reactImg" src = {nextjs}></img>
                            <div className = "skillTitle">Next.js</div>
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
                            <img className = "reactImg" src = {azure}></img>
                            <div className = "skillTitle">Azure</div>
                        </div>
                        <div className = "react">
                            <img className = "reactImg" src = {git}></img>
                            <div className = "skillTitle">Git</div>
                        </div>
                        <div className = "react">
                            <img className = "reactImg" src = {java}></img>
                            <div className = "skillTitle">Java</div>
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