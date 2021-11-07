import React from 'react';
import './About.css';
import Image from './Photos/profile.jpg';
import cv from './Photos/cv.pdf';

const About = () => {
    return (
        <>
        <div className="Apage">
        <div className="resume">
  <div className="resume_left">
    <div className="resume_profile">
      <img src={Image} alt="profile_pic" />
    </div>
    <div className="resume_content">
      <div className="resume_item resume_info">
        <div className="title">
          <p className="bold">Hafiz Sayyed Ali Hamdani</p>
          <p className="regular">Front End React Developer</p>
        </div>
        <ul>
          <li>
            <div className="icon">
            <i className="fa fa-map-marker" aria-hidden="true" />

            </div>
            <div className="data">
              Kasur,Punjab<br />Pakistan
            </div>
          </li>
          <li>
            <div className="icon">
            <i className="fa fa-phone" aria-hidden="true" />
            </div>
            <div className="data">
              +92-307-0164814
            </div>
          </li>
          <li>
            <div className="icon">
            <i className="fa fa-envelope" aria-hidden="true" />
            </div>
            <div className="data">
              alihamdani61@yahoo.com
            </div>
          </li>
          <li>
            <div className="icon">
            <i className="fa fa-globe" aria-hidden="true" />
            </div>
            <div className="data">
              www.Syedalihamdani.com
            </div>
          </li>
        </ul>
      </div>
      <div className="resume_item resume_skills">
        <div className="title">
          <p className="bold">skill's</p>
        </div>
        <ul>
          <li>
            <div className="skill_name">
              HTML
            </div>
            <div className="skill_progress">
              <span style={{width: '80%'}} />
            </div>
            <div className="skill_per">80%</div>
          </li>
          <li>
            <div className="skill_name">
              CSS
            </div>
            <div className="skill_progress">
              <span style={{width: '70%'}} />
            </div>
            <div className="skill_per">70%</div>
          </li>
          <li>
            <div className="skill_name">
              JS
            </div>
            <div className="skill_progress">
              <span style={{width: '80%'}} />
            </div>
            <div className="skill_per">80%</div>
          </li>
          <li>
            <div className="skill_name">
              Reactjs
            </div>
            <div className="skill_progress">
              <span style={{width: '88%'}} />
            </div>
            <div className="skill_per">88%</div>
          </li>
          <li>
            <div className="skill_name">
              Python
            </div>
            <div className="skill_progress">
              <span style={{width: '67%'}} />
            </div>
            <div className="skill_per">67%</div>
          </li>
          <li>
            <div className="skill_name">
              Solidity
            </div>
            <div className="skill_progress">
              <span style={{width: '70%'}} />
            </div>
            <div className="skill_per">70%</div>
          </li>
        </ul>
      </div>
      <div className="resume_item resume_social">
        <div className="title">
          <p className="bold">Social</p>
        </div>
        <ul>
          <li>
            <div className="icon">
            <i className="fa fa-facebook-official" aria-hidden="true" />

            </div>
            <div className="data">
              <p className="semi-bold">Facebook</p>
              <p><a href="https://www.facebook.com/hafizsyedalihamdani" target="_blank" rel="noopener noreferrer">Visit to Linkedin</a></p>
            </div>
          </li>
          <li>
            <div className="icon">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
            </div>
            <div className="data">
              <p className="semi-bold">Linkedin</p>
              <p><a href="https://www.linkedin.com/in/syedalihamdani" target="_blank" rel="noopener noreferrer">Visit to Linkedin</a></p>
            </div>
          </li>
          <li>
            <div className="icon">
            <i className="fa fa-github" aria-hidden="true" />

            </div>
            <div className="data">
              <p className="semi-bold">GitHub</p>
              <p><a href="https://github.com/syedalihamdani" target="_blank" rel="noopener noreferrer">Visit to Linkedin</a></p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div className="resume_right">
    <div className="resume_item resume_about">
      <div className="title">
        <p className="bold">About Me</p>
      </div>
      <p>Hi!
I am a Certified Blockchain Developer.Currently doing freelancing.
I make make ERC20 fungible , ERC721 non_fungible , ERC777 , ERC1155 and all kinds of Dapps(Decentralized Apps) on Ethereum ,
 Binance Smart Chain and other blockchain networks.
 I look forward to make my career in blockchain industry.
  I have done my Bachelor Degree in Civil Engineering then 
  I start to learn Blockchain technologies. I am fluent in many languages like English,
   Chinese, and Urdu.
      </p>
    </div>
    <div className="resume_item resume_work">
      <div className="title">
        <p className="bold">Work Experience</p>
      </div>
      <ul>
      <li>
          <div className="date">(&nbsp;Currently&nbsp;) Freelancer</div> 
          <div className="info">
            {/* <p className="semi-bold">ON Fiverr</p>  */}
            <p>
            I am doing freelancing. I have provided the services as a Python
	developer, Front end developer, React developer, Solidity developer and as
	a Blockchain developer. I have build tokens including Fungible tokens ,non
	fungible tokens and Dapps, I have also build frontend websites and web apps
	using React.
            </p>
          </div>
        </li>
        {/* <li>
          <div className="date">(&nbsp;2020, aug05 –2021,june 30&nbsp;)Site Engineer</div> 
          <div className="info">
            <p className="semi-bold">CH.AMAN ULLAH BUILDERS & DEVELOPER</p> 
            <p>
                Handling the project & checking the everyone’s work. Manage HR Activities.<br/>
                Plane all the construction activities of project  & Fill the quotations<br/>
                Finding solution of different problems and meet the deadline. Fill the quotations
            </p>
          </div>
        </li> */}
        <li>
          <div className="date">(&nbsp;2019, aug05 –2020,june 30&nbsp;)Project Engineer</div> 
          <div className="info">
            <p className="semi-bold">CH.AMAN ULLAH BUILDERS & DEVELOPER</p> 
            <p>
                Handling the project & checking the everyone’s work. Manage HR Activities.<br/>
                Plane all the construction activities of project  & Fill the quotations.<br/>
                Finding solution of different problems and meet the deadline. Fill the quotations
            </p>
          </div>
        </li>
        <li>
          <div className="date">(&nbsp;4 feb,2019 -30 june,2019&nbsp;)Site Engineer</div> 
          <div className="info">
            <p className="semi-bold">M/S SYED SAJJAD HAYDER BUKHARI</p> 
            <p>Plane all the construction activities of project  & Fill the quotations.<br/>
            Finding solution of different problems and meet the deadline. Fill the quotations.
            </p>
          </div>
        </li>
       
     
      
      </ul>
    </div>
    <div className="resume_item resume_education">
      <div className="title">
        <p className="bold">Education</p>
      </div>
      <ul>
        <li>
          <div className="date">(Currently)BSC Block Chain Technologies</div> 
          <div className="info">
            <p className="semi-bold">Presidential Initiative for Artificial Intelligence & Computing (PIAIC), Pakistan</p> 
            <p>BlockChian is the emerging technology.I am learning how to make Smart Contracts, Tokens and Decentralized Apps. </p>
          </div>
        </li>
        <li>
          <div className="date">  (2014-18) BSC CIVIL ENGINEERING</div>
          <div className="info">
            <p className="semi-bold">CHANGSHA UNIVERSITY OF SCIENCE &TECHNOLOGY, CHINA</p> 
            <p>I have done my Bsc Civil Engineering from China.In that period,I have also learn C programming language.</p>
          </div>
        </li>
      </ul>
    </div>
    <div className="resume_item resume_hobby">
    <a download target="_blank" href={cv} rel="noopener noreferrer"><button className="cv" >Download CV</button></a>
    </div>
  </div>
</div>   

        </div>
       
        </>
    )
}

export default About;
