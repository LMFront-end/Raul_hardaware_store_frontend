import React from 'react'
import { Footer } from '../../components/Footer/Footer'
import { NavbarPages } from '../../components/navbarPages/NavbarPages'
import '../../App.css';
import { HardwareService } from '../../components/hardwareService/HardwareService';

const HardwareStore = () => {
  return (
    <>
    <NavbarPages />
    <div className="hero">
            <div className="card bg-dark text-white image_home">
                <img className="welcome"/>
            <div className="card-img-overlay d-flex flex-column justify-content-center">

                <div className="container">

                    <h5 className="card-title display-3 fw-bolder mb-0">Don't hold on to a problem, the world is full of solutions.</h5>

                    <p className="card-text lead fs-2">
                    Your wish, good quality.
                    </p>
                </div>
            </div>
        </div>
        <HardwareService />
        <Footer />
        </div>
    </>
  )
}

export default HardwareStore