import './AboutMe.css';
import './Projects.css';
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
            <div className = "projectRow mobileProject">
                <div className = "line">
                    <hr data-aos="fade-up" data-aos-duration="1000" className = "projectVertLine" width = "1" size = "170"></hr>
                </div>
                <div className = "deets">
                    <div data-aos="fade-up" data-aos-duration="1000" className = "titleAbout"><h1 className = "aboutMeText">ABOUT ME</h1></div>
                    <img data-aos="fade-up" data-aos-duration="1000" className = "aboutImg" alt=""></img>
                </div>
            </div>

            <div className = "projectRow">
                <div data-aos="fade-up" data-aos-duration="1000" className = "projectText">
                    <p>Hey there! I’m Kavin, an IT graduate from the Royal Melbourne Institute of Technology, currently with four years of experience across full stack roles. Most recently I worked at Willow Inc, helping build out their digital twin platform, and before that I spent two years on the Payments team at Kolmeo, where I also mentored newly joined junior developers and regularly presented my work to stakeholders. At this point in my career I’m fully full stack, if anything a little more backend inclined these days, connecting robust ASP.NetCore and GraphQL back-end infrastructure with React and TypeScript front-ends, along with hands on work in UI/UX design, cloud integration, and API development. Agentic programming has become a genuine part of my daily work life too. I build and orchestrate AI agents such as Claude Code into everything from feature delivery and code review to production debugging, writing custom skills and MD context files that shape how these agents reason about a codebase, and wiring up MCP server integrations to connect them into internal tooling. It’s not something I just dabble in, it’s become one of the biggest levers in how I actually ship work now, from automating recurring engineering tasks to building entire AI powered applications like my Job Search Agent project.</p>
                    <p>A bit about myself, I’m very much a team player and love getting to know new people and share my experiences with them and hearing their experiences and points of views as well. I’ve carried this into mentoring too, whether guiding junior developers at Kolmeo or acting as a student mentor back at RMIT, and a few years before that I was PR manager for two fundraising projects with Sri Lanka Unites, raising funds and goods for underprivileged children in rural Sri Lanka.
                    New perspectives fascinate me, and I love looking at things through these different perspectives, which helps me with the designing process that is very important for UI design, and with resolving conflict when it comes up in a team setting.</p>
                    <p>My work ethic is simple. I simply will not rest, till my responsibilities have been fulfilled, regardless of how daunting the task may be. Willing to take up all types of challenges,
                    I consider attention to detail, accountability, and reliability the biggest pillars of my success so far, and I put a lot of stock in clear communication and good time management to make sure nothing falls through the cracks when working in and amongst a team.
                    </p>
                </div>
            </div>
        </div>

    );
}

export default AboutMe;