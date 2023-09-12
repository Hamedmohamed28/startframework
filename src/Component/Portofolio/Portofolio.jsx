import React, { Component } from 'react'
import image1 from '../Assets/poert1.png'
import image2 from '../Assets/port2.png'
import image3 from '../Assets/port3.png'
import style from '../Portofolio/Portofolio.module.css'
export default class Portofolio extends Component {
  render() {
    return (
      <>
        <section1>
          <div className='container '>
            <div className="row g-5 ">   
                <h1 className='pt-5 pb-3 text-center'>PORTFOLIO COMPONENT</h1>
              <div className="col-md-4 text-center ">
                <img src={image1} className='w-100 rounded-4' />
              </div>
              <div className="col-md-4 text-center ">
                <img src={image2} className='w-100 rounded-4' />
              </div>
              <div className="col-md-4 text-center ">
                <img src={image3} className='w-100 rounded-4' />
              </div>
              <div className="col-md-4 text-center">
                <img src={image1} className='w-100 rounded-4' />
              </div>
              <div className="col-md-4 text-center">
                <img src={image2} className='w-100 rounded-4' />
              </div>
              <div className="col-md-4 text-center ">
                <img src={image2} className='w-100 rounded-4' />
              </div>
            </div>
          </div>
        </section1>
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
