import './Landing.css';
import { Icon, InlineIcon } from '@iconify/react';
import heavyMultiplicationX from '@iconify-icons/emojione-monotone/heavy-multiplication-x';


function Landing(){
    return(
        <div className = "landing">

        <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
        </head>
            <div className = "column" id = "leftSide">
                
            </div>

            <div className = "column" id  = "rightSide">
                <div className = "name animate__animated animate__fadeInUp animate__delay-2s"><h1>KAVINDYA ABEYSINGHE</h1></div>
                <div className = "frontend animate__animated animate__fadeInUp animate__delay-2s"><label>Front-End Developer/UI Designer</label></div>
            </div>

            <div className = "plusSignL"><div className = "xSign"><Icon icon={heavyMultiplicationX} color="orange" rotate="90deg" /></div></div>
            <div className = "plusSignRT"><div className = "xSign"><Icon icon={heavyMultiplicationX} color="orange" rotate="90deg" /></div></div>
            <div className = "plusSignR"><div className = "xSign"><Icon icon={heavyMultiplicationX} color="orange" rotate="90deg" /></div></div>
            <div className = "plusSignLB"><div className = "xSign"><Icon icon={heavyMultiplicationX} color="orange" rotate="90deg" /></div></div>
            
        </div>
    );
}

export default Landing;