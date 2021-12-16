import './Skills.css';
import reactImg from '../logo512.png';
import angularImg from '../angular.png';
import nativeImg from '../react-native.png';
import java from '../java.png';
import python from '../python.png';
import mysql from '../sql.png';
import android from '../android-logo.svg';
import git from '../git.png';
import photoshop from '../photoshop.png';


function Skills(){
    return(
        <div className = "skills">
            <div><h1 className = "decorated" ><span>SKILLS</span></h1></div>
            <div className = "skillsBox">
                <div className = "row">
                    <div className = "react">
                        <img className = "reactImgRotate" src = {reactImg}></img>
                        <div className = "skillTitle">React</div>
                    </div>
                    <div className = "react">
                        <img className = "reactImg" src = {angularImg}></img>
                        <div className = "skillTitle">Angular</div>
                    </div>
                    <div className = "react">
                        <img className = "reactImg" src = {nativeImg}></img>
                        <div className = "skillTitle">React Native</div>
                    </div>
                </div>

                <div className = "row">
                    <div className = "react">
                        <img className = "reactImg" src = {java}></img>
                        <div className = "skillTitle">Java</div>
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

                <div className = "row">
                    <div className = "react">
                        <img className = "reactImg" src = {android}></img>
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
    );
}

export default Skills;