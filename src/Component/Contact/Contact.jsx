import React, { Component } from 'react'
import style from './Content.module.css'

export default class Contact extends Component {
  render() {
    return (
      <>
        <section className={style.section1}>
          <div className="container">
            <div className="row">
              <div className="col-md-6 m-auto pt-5">
                <div class="mb-3 mt-5 text-center fw-bold ">
                  <label for="exampleFormControlInput1" class="form-label">Email address</label>
                  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                </div>
                <div class="mb-3 text-center fw-bold">
                  <label for="exampleFormControlTextarea1" class="form-label">enter your masseg</label>
                  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                  <button className='btn btn-danger mt-4'>send</button>
                </div>
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
