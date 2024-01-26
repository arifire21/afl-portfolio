"use client"
import styles from '@/styles/page.module.css'
import {WorkCard, ProjectCard} from '@/components/card'
import { List, ListDivider, ListItem, Typography } from '@mui/joy'
import Navbar from '@/components/navbar'
import { SiFigma, SiHtml5, SiCss3, SiAmazonaws, SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiJquery, SiDjango, SiDiscord, SiGithub, SiDevpost, SiLinkedin, SiJira, SiTrello, SiCanva, SiPython, SiMysql, SiOracle, SiNotion, SiGimp, SiMui, SiBootstrap, SiNodedotjs, SiVisualstudiocode, SiVisualstudio, SiCplusplus, SiCsharp } from "react-icons/si";
import { FaJava } from 'react-icons/fa';
import { useEffect } from 'react';
// import EagleEyeLogo from '@/images/eagle-eye/logo_transparent_crop.png'
// import LEILogo from '@/images/loucks-eng/logo192.png'
// import SilviLogo from '@/images/silvi/silvi_logo.webp'
// import JustLearnLogo from '@/images/justlearn/justlearn_logo.webp'


// function enterNav(section:string){
//   document.getElementById(section)?.classList.add('active');
//   console.log(`${section} active`)
// }

// function leaveNav(section:string){
//   document.getElementById(section)?.classList.remove('active');
//   console.log(`${section} not active`)

// }

export default function Home() {
  useEffect(() => {
    // Function to handle scroll events
    // Get current scroll position
    let scrollTop = document.body.scrollTop;
  
    //get others
    let aboutPos = document.getElementById('about')!.offsetTop - 80;
    let experiencePos = document.getElementById('experience')!.offsetTop -80;
    let projectPos = document.getElementById('projects')!.offsetTop -80;
  
    const aboutNav = document.getElementById('about-nav');
    const experienceNav = document.getElementById('experience-nav');
    const projectNav = document.getElementById('project-nav');

    //set default
    if(scrollTop == 0){
      aboutNav?.classList.add('active')
    }
  
    const navActivateCallback = (e: Event) => {
      scrollTop = document.documentElement.scrollTop
  
      // console.log(`${scrollTop}, aboutPos ${aboutPos}, experiencePos ${experiencePos}, projectPos ${projectPos}`)
      
      if  ((!aboutNav?.classList.contains('active'))
          && (scrollTop == 0 || scrollTop > aboutPos && scrollTop < experiencePos)){
        aboutNav!.classList.add('active');
        console.log('aboutnav changed')
        experienceNav!.classList.remove('active');
      }
      else if((!experienceNav?.classList.contains('active'))
          && (scrollTop > aboutPos && scrollTop > experiencePos && scrollTop < projectPos)){
        aboutNav!.classList.remove('active');
        projectNav!.classList.remove('active');
        experienceNav!.classList.add('active');
        console.log('expnav changed')
      }
      else if((!projectNav?.classList.contains('active'))
        && (scrollTop > experiencePos && scrollTop > projectPos)){
        experienceNav!.classList.remove('active');
        projectNav!.classList.add('active');
        console.log('projectnav changed')
      }
    }
  
    //mount
    window.addEventListener("scroll", navActivateCallback);
  
    //clean-up, unmount
    return () => window.removeEventListener('scroll', navActivateCallback);
  
  }, []);

  return (
    <>
    <Navbar/>
    <main className={styles.main}>

      <section className={styles.genericCenter}
        // onMouseEnter={() => enterNav('about-section')}
        // onMouseLeave={() => leaveNav('about-section')}
      >
        <h1><a id='about'>Arianna Loucks</a></h1>
        <p>stuff</p>

        <h2>What I Use:</h2>
        <h3>Languages</h3>
        <List
          orientation='horizontal'
          variant='outlined'
          sx={{
              // flexGrow: 0,
              mx: 'auto',
              '--ListItem-paddingY': '1rem',
              borderRadius: 'md',
              width:'fit-content'
            }}
            >
              <ListItem><SiJavascript size={25}/>JavaScript</ListItem>
              <ListDivider inset='gutter'/>
              <ListItem><SiTypescript size={25}/>TypeScript</ListItem>
              <ListDivider inset='gutter'/>
              <ListItem><SiJquery size={25}/>jQuery</ListItem>
              <ListDivider inset='gutter'/>
              <ListItem><SiHtml5 size={25}/>HTML5</ListItem>
              <ListDivider inset='gutter'/>
              <ListItem><SiCss3 size={25}/>CSS/SCSS</ListItem>
              <ListDivider inset='gutter'/>
              <ListItem><SiPython size={25}/>Python</ListItem>
              <ListDivider inset='gutter'/>
              <ListItem><SiMysql size={25}/>MySQL</ListItem>
              <ListDivider inset='gutter'/>
              <ListItem><SiOracle size={25}/>Oracle SQL</ListItem>
              <ListDivider inset='gutter'/>
              <ListItem><FaJava size={25}/>Java</ListItem>
              <ListDivider inset='gutter'/>
              <ListItem><SiCplusplus size={25}/><SiCsharp size={25}/>C++/C#</ListItem>
          </List>

        <h3>Frameworks and Tools</h3>
        <List
        orientation='horizontal'
        variant='outlined'
        sx={{
            // flexGrow: 0,
            mx: 'auto',
            '--ListItem-paddingY': '1rem',
            borderRadius: 'md',
            width:'fit-content'
          }}
          >
            <ListItem><SiReact size={25}/>React.js</ListItem>
            <ListDivider inset='gutter'/>
            <ListItem><SiNextdotjs size={25}/>Next.js</ListItem>
            <ListDivider inset='gutter'/>
            <ListItem><SiNodedotjs size={25}/>Node.js</ListItem>
            <ListDivider inset='gutter'/>
            <ListItem><SiMui size={25}/>Material UI<Typography level='body-sm'>(MD, Joy, Base)</Typography></ListItem>
            <ListDivider inset='gutter'/>
            <ListItem><SiBootstrap size={25}/>Bootstrap</ListItem>
            <ListDivider inset='gutter'/>
            <ListItem><SiDjango size={25}/>Django</ListItem>
            <ListDivider inset='gutter'/>
            <ListItem><SiAmazonaws size={25}/>AWS<Typography level='body-sm'>(EC2, Lambda)</Typography></ListItem>
            <ListDivider inset='gutter'/>
            <ListItem><SiVisualstudiocode size={25}/>VSCode</ListItem>
            <ListDivider inset='gutter'/>
            <ListItem><SiVisualstudio size={25}/>Visual Studio</ListItem>
          </List>

          <h3>Design and Productivity</h3>
          <List
          orientation='horizontal'
          variant='outlined'
          sx={{
              // flexGrow: 0,
              mx: 'auto',
              '--ListItem-paddingY': '1rem',
              borderRadius: 'md',
              width:'fit-content'
            }}
            >
              <ListItem><SiFigma size={25}/>Figma</ListItem>
              <ListDivider inset='gutter'/>
              <ListItem><SiCanva size={25}/>Canva</ListItem>
              <ListDivider inset='gutter'/>
              <ListItem><SiGimp size={25}/>GIMP</ListItem>
              <ListDivider inset='gutter'/>
              <ListItem><SiJira size={25}/>Jira</ListItem>
              <ListDivider inset='gutter'/>
              <ListItem><SiNotion size={25}/>Notion</ListItem>
              <ListDivider inset='gutter'/>
              <ListItem><SiTrello size={25}/>Trello</ListItem>
            </List>
      </section>

      <section
        // onMouseEnter={() => enterNav('experience-section')}
        // onMouseLeave={() => leaveNav('experience-section')}
      >
        <h1><a id='experience'>Professional Experience</a></h1>
          {/* {/* <div className={styles.cardContainer}> */}
            {/* <WorkCard
              // logo={EagleEyeLogo}
              position='Website Designer and Developer'
              company='Eagle Eye Monitoring, LLC.'
              jobType='Freelance (Remote)'
              duration='Nov 2023 - Present'
              blurb='Figma | TypeScript | SCSS | Next.js | SendGrid | MaterialUI-Base'
              link='/professional/eagle-eye'
            /> */}

            {/* <WorkCard
              // logo={LEILogo}
              position='Website Developer'
              company='Loucks Engineering, Inc.'
              jobType='Part-Time'
              duration='May 2023 - Present'
              blurb='React.js | JavaScript | React-Bootstrap | JSON | CD/CI (Heroku)'
              link='/professional/loucks-eng'
            /> */}

            <WorkCard
              // logo={SilviLogo}
              position='Front-End Web Developer'
              company='Silvi'
              jobType='Part-Time (Remote)'
              duration='Jun 2022 - Jul 2023'
              blurb='Silvi is a web-app that allows for users to track reforestation progress and interact with the community.'
              // link='/professional/silvi'
              tools={['Next.js', 'TypeScript', 'SCSS', 'React-Bootstrap', 'Jira (Agile)']}
              buttons={[{
                          text:'View Live Site',
                          variant:'solid',
                          link:'https://www.silvi.earth/',
                          linkTo:'site'
                      }]}
            />

            <WorkCard
              // logo={JustLearnLogo}
              position='Front-End Web Developer'
              company='JustLearn'
              jobType='Internship & Part-Time (Remote)'
              duration='Nov 2021 - June 2022'
              blurb='Django | HTML5 | SCSS | JavaScript | Python | jQuery | Web APIs | Bootstrap'
              // link='/professional/justlearn'
              tools={['HTML5', 'SCSS', 'JavaScript', 'jQuery/jQueryUI', 'Web APIs', 'Django', 'Python', 'Bootstrap', 'Notion']}
            />
        {/* </div> */}
      </section>

      <section className={styles.genericCenter}
      // onMouseEnter={() => enterNav('s-section')}
      // onMouseLeave={() => leaveNav('project-section')}
      >
        <h1><a id='projects'>Projects</a></h1>
        {/* <div className={styles.cardContainer}>
          <ProjectCard
            projectTitle='Discord.js Bot'
            subtitle=''
            date='Nov 2022 - Present'
            blurb='Discord.js | Node.js | Axios | WikiMedia API'
            link='projects/other'
          />

          <ProjectCard
            projectTitle='Discord.js Bot'
            subtitle=''
            date='Nov 2022 - Present'
            blurb='Discord.js | Node.js | Axios | WikiMedia API'
            link='projects/other'
          />

          <ProjectCard
            projectTitle='Plant Watering Notification System'
            subtitle='Secure IoT Final Project'
            date='Apr - May 2021'
            blurb='Arduino Wifi 1000 | MailChimp'
            link='projects/arduino'
          />

          <ProjectCard
            projectTitle='Discord.js Bot'
            subtitle=''
            date='Nov 2022 - Present'
            blurb='Discord.js | Node.js | Axios | WikiMedia API'
            link='projects/other'
          />

          <ProjectCard
            projectTitle='Dog-Walking Alarm Clock'
            subtitle='Hands-On Engineering Design Final Project'
            date='Aug - Dec 2020'
            blurb='Arduino Uno R3 | Solidworks'
            link='projects/arduino'
          /> */}
        {/* </div> */}
      </section>
    </main>

    <section className='generic-center'>
      <p>Connect with me!</p>
      <a href='https://github.com/arifire21/' target='_blank'><SiGithub size={25}/>Github</a>
      <a href='https://www.linkedin.com/in/ariannaloucks/' target='_blank'><SiLinkedin size={25}/>Linkedin</a>
      <a href='https://devpost.com/afloucks' target='_blank'><SiDevpost size={25}/>Devpost</a>
    </section>

    <footer>
      <p>Website made with <span>Next.js</span> and <span>MUI's Joy UI</span></p>
    </footer>
    </>
  )
}
