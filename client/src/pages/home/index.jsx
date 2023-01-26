import React from 'react'
import "./index.scss"
import education from "../../img/education.svg"
import teaching from "../../img/teaching.svg"
import Cards from '../../components/cards'
import {Helmet} from "react-helmet";

const Home = () => {
  return (
    <div id='Home'>
      <div className="bgImg">
        <div className="container">
           <Helmet>
                <meta charSet="utf-8" />
                <title>Home</title>
            </Helmet>
        <div className="homeHeaderInfo">
          <div className="headerTxt">
          <h1 className='headerH1'>Learn From The Expert</h1>
          <p className='headerParag'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Maxime ipsa nulla sed quis rerum amet natus quas necessitatibus.</p>
          <button className='homeHeaderBtn'> ADMISSION NOW </button>
          </div>

          {/* Sign Up Section */}

          <div className="sign-up">
            <h2 className='SignUpH2'>Sign Up</h2>
            <div className="signInput">
            <input type="text"  placeholder='Email Address'/>
            </div>

            <div className="signInput">
            <input type="password"  placeholder='Password'/>
            </div>

            <div className="signInput">
            <input type="password" placeholder='Re-type Password'/>
            </div>
            <button className='homeHeaderBtn'> SIGN UP </button>
            
          </div>
        </div>
        </div>
      </div>
        {/* Second Section */}
        <div className="container">
        <div className="ourPrograms">
          <div className="programsTitle">
           <h1 className='programsH1'>Our Programs</h1>
           <p className='secondSectionParag'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam repellat aut neque! Doloribus sunt non aut reiciendis, vel recusandae obcaecati hic
             dicta repudiandae in quas quibusdam ullam, illum sed veniam!</p>
          </div>

          <div className="excellentInEducation">
            <div className="ex-img">
            <img src={education} alt="" width={"650px"}/>
            </div>
 
            <div className="ex-txt">
              <h2 className='ex-txt-h2'>We Are Excellent In Education</h2>
              <p className='ex-txt-parag'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Rem maxime nam porro possimus fugiat quo molestiae illo.</p>

                 <div className="cap-uni">
                  <div className="icon">
                 <i className="fa-solid fa-graduation-cap"></i>
                  </div>
                 <span>22,931 Yearly Graduates</span>
                 </div>

                 <div className="cap-uni">
                  <div className="icon">
                  <i className="fa-solid fa-building-columns"></i>                  </div>
                 <span>150 Universities Worldwide</span>
                 </div>
            </div>

          </div>
        </div>

        {/* Third Section*/}
            <div className="strive">

            <div className="excellentTeaching">
            <div className="ex-txt">
              <h2 className='ex-txt-h2'>Strive for Excellent</h2>
              <p className='ex-txt-parag'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Rem maxime nam porro possimus fugiat quo molestiae illo.</p>

                 <div className="cap-uni">
                  <div className="icon">
                 <i className="fa-solid fa-graduation-cap"></i>
                  </div>
                 <span>22,931 Yearly Graduates</span>
                 </div>

                 <div className="cap-uni">
                  <div className="icon">
                  <i className="fa-solid fa-building-columns"></i>                  </div>
                 <span>150 Universities Worldwide</span>
                 </div>
            </div>

            <div className="ex-img">
            <img src={teaching} alt="" width={"650px"}/>
            </div>
          </div>
            </div>


            {/* Four Section */}
            <div className="ourTeachers">
              <h1 className='ourTeachersHeader'>Our Teachers</h1>
              <p className='ourTeachersParag'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam repellat aut neque! Doloribus sunt non aut reiciendis, 
                vel recusandae obcaecati hic dicta repudiandae in quas quibusdam ullam, illum sed veniam!</p>

                <Cards/>
            </div>

            {/* Registr Section */}

            <div className="messageUs">
              <div className="messageInfo">
              <h1 className='messageH1'>Message Us</h1>
              <p className='messageParag'>Natus totam voluptatibus animi aspernatur ducimus quas obcaecati mollitia quibusdam temporibus culpa dolore molestias blanditiis consequuntur sunt nisi.</p>
              </div>

              <form action="">
                <div className="two-inputs">
                  <input type="text" placeholder='First Name'/>
                  <input type="text" placeholder='Last Name'/>
                </div>

                <input type="text" placeholder='Subject'/><br/>
                <input type="email" placeholder='Email'/>
                <textarea name="" id="" cols="75" rows="10" placeholder='Write your message here.'></textarea>
              </form>
              <button className='sendMessageBtn'> SEND MESSAGE </button>
            </div>

        </div>
      
    </div>
  )
}

export default Home