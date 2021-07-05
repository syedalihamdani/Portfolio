import React from 'react';
import './Certifications.css';
import Bc from './Photos/BC.pdf';
import Py from './Photos/PY.pdf';
import Bcphoto from './Photos/Bcphoto.png';
import Pyphoto from './Photos/Pyphoto.png';


const Certifications = () => {
    return (
        <>
        <div className="Cpage">

        <div className="Cp">
      <img src={Bcphoto} className="Cimg" alt="Photos"/>
  <a href={Bc} target="_balnk" rel="noopener noreferrer"><button className="Cbtn">Download Certificate</button></a>
    </div>
    <div className="Cp">
      <img src={Pyphoto} className="Cimg" alt="Photos"/>
  <a href={Py} target="_balnk" rel="noopener noreferrer"><button className="Cbtn">Download Certificate</button></a>
    </div>
</div>
            
        </>
    )
}

export default Certifications;
