import React, { Component } from 'react'
import style from './About.module.css'
export default class About extends Component {
  render() {
    return (
      <>
        <section className={`${style.section1} ${style.texts2}`}>
          <div className='container '>
            <div className="row">
              <div className="col-md-12 text-center ">
              <h1 className='pt-5'>ABOUT COMPONENT</h1>
              </div>
              <div className="col-md-6 pt-5">
                <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
              </div>
              <div className="col-md-6 pt-5">
                <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
              </div>
            </div>
          </div>
        </section>
        
        <section className={`${style.section2} ${style.texts2}`}>
        <div className='container '>
            <div className="row  ">
              <div className="col-md-3 m-auto pt-5 pb-5">
                <div>
                  <h2>LOCATION</h2>
                  <h6 >2215 John Daniel Drive</h6>
                  <p>Clark, MO 65243</p>
                </div>
              </div>
              <div className="col-md-3 m-auto pt-5 pb-5">
                <div>
                  <h2>AROUND THE WEB</h2>
                  <div className='fs-3 m-3  text-center'>
                  <i class="fa-brands fa-facebook m-1  "></i>
                  <i class="fa-brands fa-twitter m-1 "></i>
                  <i class="fa-brands fa-linkedin m-1"></i>
                  <i class="fa-solid fa-globe m-1"></i>
                  </div>

                </div> 
              </div>
              <div className="col-md-3 m-auto pt-5 pb-5">
                <div>
                  <h2 >ABOUT FREELANCER</h2>
                  <p >Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer >
          <div className={style.fotr}>
            <h6 className='text-center text-light pt-4'>Copyright © Your Website 2021</h6>
          </div>
        </footer>
      </>
    )
  }
}
