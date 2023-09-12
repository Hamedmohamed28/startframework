import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
  render() {
    return (
      <>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark ">
          <div className="container">
            <a className="navbar-brand" href="#">START FRAMEWORK</a>
            <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link" to="About">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="Portofolio">Portofolio</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="Contact">Contact</Link>
                    </li>
                </ul>

            </div>
        </div>
      </nav>
      
      
      
      </>
    )
  }
}
