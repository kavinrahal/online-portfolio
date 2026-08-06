import './AboutMe.css';
import './Skills.css';
import './Projects.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import reactImg from '../KAvin react.png';
import postgresql from '../postgresql-icon.png';
import mysql from '../sql.png';
import git from '../git.png';
import asp from '../asp.png';
import claudeCode from '../claude-code.png';
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
            <div className = "projectRow mobileProject">
                <div className = "line">
                    <hr data-aos="fade-up" data-aos-duration="1000" className = "projectVertLine" width = "1" size = "170"></hr>
                </div>
                <div className = "deets">
                    <div data-aos="fade-up" data-aos-duration="1000" className = "titleAbout"><h1 className = "aboutMeText">SKILLS</h1></div>
                    <img data-aos="fade-up" data-aos-duration="1000" className = "aboutImg" alt=""></img>
                </div>
            </div>

            <div className = "projectRow">
                <div className = "skillsBox">
                    <div className = "row mobileRow" data-aos="fade-up" data-aos-duration="1000">
                        <div className = "react">
                            <img className = "reactImg" src = {asp} alt="ASP.NET Core"></img>
                            <div className = "skillTitle">ASP.NET Core</div>
                        </div>
                        <div className = "react">
                            <img className = "reactImgRotate" src = {reactImg} alt="React"></img>
                            <div className = "skillTitle">React</div>
                        </div>
                        <div className = "react">
                            <img className = "reactImg" src = {mysql} alt="MySQL"></img>
                            <div className = "skillTitle">MySQL</div>
                        </div>
                    </div>

                    <div className = "row mobileRow" data-aos="fade-up" data-aos-duration="1000">
                        <div className = "react">
                            <img className = "reactImg" src = {postgresql} alt="PostgreSQL"></img>
                            <div className = "skillTitle">PostgreSQL</div>
                        </div>
                        <div className = "react">
                            <img className = "reactImg" src = {azure} alt="Azure"></img>
                            <div className = "skillTitle">Azure</div>
                        </div>
                        <div className = "react">
                            <img className = "reactImg" src = {git} alt="Git"></img>
                            <div className = "skillTitle">Git</div>
                        </div>
                    </div>

                    <div className = "row mobileRow" data-aos="fade-up" data-aos-duration="1000">
                        <div className = "react">
                            <img className = "reactImg" src = {claudeCode} alt="Claude Code"></img>
                            <div className = "skillTitle">Claude Code</div>
                        </div>
                        <div className = "react">
                            <img className = "reactImg" src = {graphql} alt="GraphQL"></img>
                            <div className = "skillTitle">GraphQL</div>
                        </div>
                        <div className = "react">
                            <img className = "reactImg" src = {nextjs} alt="Next.js"></img>
                            <div className = "skillTitle">Next.js</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Skills2;