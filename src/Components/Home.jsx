import React from 'react';
import './Home.css';
import Image from './Photos/profile.jpg';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
const Home = () => {
    return (
        <>
        <div className="Hpage">
            <div className="Himage">
                <div className="HIimage">
                <img src={Image} alt="Ali's Photo" className="Himg" title="Ali"/>
                
                </div>   
    <div className="Hicons">
<a href="https://www.facebook.com/hafizsyedalihamdani" target="_balnk" rel="noopener noreferrer"><FacebookIcon/></a>
  <a href="https://www.linkedin.com/in/syedalihamdani" target="_balnk" rel="noopener noreferrer"><LinkedInIcon /></a>
  <a href="https://github.com/syedalihamdani" target="_balnk" rel="noopener noreferrer"><GitHubIcon /></a>
    </div>
            </div>
            <div className="Hdescription">
                <h1><span className="Hheading"> My name is ALI.</span></h1><br/><br/><br/><br/>
                <h1><span className="Hheading">Front End React Developer.</span></h1>

            </div>
            </div>
        </>
    )
}

export default Home;
