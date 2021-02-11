import './Landing.css';
import { Icon, InlineIcon } from '@iconify/react';
import heavyMultiplicationX from '@iconify-icons/emojione-monotone/heavy-multiplication-x';
import AOS from 'aos';
import 'aos/dist/aos.css';


function Landing(){
    AOS.init();
    return(
        <div className = "landing">

        <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
        <link rel="stylesheet" href="bower_components/aos/dist/aos.css" />
        </head>
        <script src="bower_components/aos/dist/aos.js"></script> 
            <div className = "column" id = "leftSide">
                <img className = "myPic animate__animated animate__fadeInUp animate__delay-2s"></img>
            </div>

            <div className = "column" id  = "rightSide">
                <div className = "name animate__animated animate__fadeInUp animate__delay-2s" data-aos="fade-up" data-aos-duration="1000"><h1>KAVINDYA ABEYSINGHE</h1></div>
                <div className = "frontend animate__animated animate__fadeInUp animate__delay-2s" data-aos="fade-up" data-aos-duration="1000"><label>Front-End Developer/UI Designer</label></div>
            </div>

            <div className = "plusSignL"><div className = "xSign"><Icon icon={heavyMultiplicationX} color="orange" rotate="90deg" /></div></div>
            <div className = "plusSignRT"><div className = "xSign"><Icon icon={heavyMultiplicationX} color="orange" rotate="90deg" /></div></div>
            <div className = "plusSignR"><div className = "xSign"><Icon icon={heavyMultiplicationX} color="orange" rotate="90deg" /></div></div>
            <div className = "plusSignLB"><div className = "xSign"><Icon icon={heavyMultiplicationX} color="orange" rotate="90deg" /></div></div>
            
        </div>
    );
}

export default Landing;