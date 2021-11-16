import UtbBannerHeader from 'components/Headers/utbbannerHeader';
import FinalNavbar from 'components/Navbars/FinalNavbar';
import React from 'react'
import img0 from '../img/1.jpeg'
import img1 from '../img/2.jpeg'
import img2 from '../img/3.jpeg'
import img3 from '../img/4.jpeg'
import img4 from '../img/5.jpeg'
import img5 from '../img/6.jpeg'
import img6 from '../img/7.jpeg'
///import '../assets/scss/paper-kit/_utbatg.scss'



function utbAtG() {
    return (
      
   
      <div class="utbatg">
        <FinalNavbar/>
        <UtbBannerHeader/>
          <br />
          <br />
          <br />
          <br />
          <br />


      
        <div className="content-img">

          <img src={img0} alt="" />
          <img src={img1} alt="" />
          <img src={img2} alt="" />
          <img src={img3} alt="" />
          <img src={img4} alt="" />
          <img src={img5} alt="" /> 
          <img src={img6} alt="" />             
        </div>

        
      </div>



    );
}

export default utbAtG
