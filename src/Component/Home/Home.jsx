import React, { Component } from 'react'
import img from '../Assets/avataaars.svg'
import style from './Home.module.css'
export default class Home extends Component {
  render() {
    return (
      <>
        <section className={style.section1}>
          <div className="container">
            <div className="row">
              <div className="col-md-6 text-center m-auto pt-5">
                <img src={img} className='w-50' />
                <h1 className='pt-5 fw-bolder'>START FRAMEWORK</h1>
                <p className='pt-2'>Graphic Artist - Web Designer - Illustrator</p>
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
