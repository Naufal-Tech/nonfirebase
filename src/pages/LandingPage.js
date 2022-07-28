import React, { Fragment } from 'react'

import NavigationBar from '../components/Navbar'
import Footer from '../components/Footer'
import style from '../styles/LandingPage.module.css'
import rps from '../rps.jpg'

function Profile() {
    return (
        <Fragment>
            <NavigationBar />
            <section id={ style["judul"]}>
                            <br />
                <div className="container">
                    <div className="row d-flex justify-content-center align-items-center" style={{ height: "50vh" }}>
                        <div className="col-8 d-flex flex-column justify-content-center">
                            <br />
                            <br />
                            <h1 className="text-center text-uppercase" style={{ color: "white" }}>PLAYING GAME IS Not A CRIME, LETS ENJOY THE GAME!</h1>
                            <br />
                            <br />
                            <video src='/videos/video-4.mp4' autoPlay loop muted />
                            <a href="/login" className="btn  mt-5"
                                style={{ color: "white", backgroundColor: "#000000", marginLeft: "auto", marginRight: "auto" }}>PLAY NOW!</a>
                        </div>
                    </div>
                </div>
            </section>
            <div className="waves">

                <svg style={{ backgroundColor: "#00ccff" }} xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 320">
                    <path fill="#ff00ff" fill-opacity="1"
                        d="M0,160L360,224L720,224L1080,288L1440,224L1440,0L1080,0L720,0L360,0L0,0Z"></path>
                </svg>
            </div>
            <section id={ style["list-game"]}>
                <div className="container">
                    <div className="row d-flex justify-content-start align-items-center" style={{ height: "50vh" }}>
                        <div className="col-md-6 d-flex flex-column justify-content-center">
                            <h1 className=" text-uppercase" style={{ color: "white" }}>PLEASE PICK YOUR FAVORITE GAME</h1>

                            <a href="/listgames" className="btn  mt-5" style={{ color: "white", backgroundColor: "#000000", width: "200px" }}>CHOOSE THE GAME</a>
                        </div>
                        <div className="col-md-6">
                            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-indicators">
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                                        className="active" aria-current="true" aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                                        aria-label="Slide 2"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                                        aria-label="Slide 3"></button>
                                </div>
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src={ rps} className="d-block w-100" alt="..."></img>
                                    </div>
                                    <div className="carousel-item">
                                        <img src={ rps} className="d-block w-100" alt="..."></img>
                                    </div>
                                    <div className="carousel-item">
                                        <img src={ rps} className="d-block w-100" alt="..."></img>
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                                    data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                                    data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <svg xmlns="http://www.w3.org/2000/svg" style={{ backgroundColor: "#00ccff" }} viewBox="0 0 1440 320"><path fill="#ff7300" fill-opacity="1" d="M0,96L288,160L576,160L864,64L1152,160L1440,160L1440,320L1152,320L864,320L576,320L288,320L0,320Z"></path></svg>
            <section id={ style["register-page"]}>
                <div className="container">
                    <div className="row d-flex justify-content-center align-items-center" style={{ height: "50vh" }}>
                        <div className="col-8 d-flex flex-column justify-content-center">
                            <h1 className="text-center text-uppercase" style={{ color: "white" }}>Let's Play!</h1>

                            <a href="/register" className="btn  mt-5"
                                style={{ color: "white", backgroundColor: "#000000", marginLeft: "auto", marginRight: "auto" }}>Sign Up Now!</a>
                        </div>
                    </div>
                </div>

            </section>
            <Footer />
        </Fragment>
    )
}

export default Profile
