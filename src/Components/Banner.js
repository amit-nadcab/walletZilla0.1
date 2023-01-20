import React,{useEffect} from 'react'
import '../boxPrticles.css'
import Typewriter from 'typewriter-effect';
import Lottie from "lottie-react";
import walletZilla from './main.json'
import { Link } from 'react-router-dom';


export const Banner = () => {

   

    return (
        <>
            <div class="clearfix" style={{ clear: "both" }}></div>
            <div id="">
                <div id="webcoderskull">
                    <div class="hero-section">
                        {/* <Particals/> */}
                        
                        <div class="container">
                            <div className='mt-5 mb-5 '>
                            <div className={window.innerWidth<769 ? "row align-items-center mt-5 mb-5 flex-column-reverse pt-3 pb-3" : "row align-items-center "}>
                                <div class="col-md-6">
                                    <div class="hero-content" data-wow-delay=".4s">
                                        <div class="hero-title">
                                            {/* <span>
                    <img className='img-fluid' width={20} src='assets/images/myImage/wallet_zilla.gif' alt='' />
                    </span> */}

                                            <h4>Safe & Secure and Decentralized</h4>
                                        </div>
                                        <h1 className='hero'>
                                            <Typewriter
                                                options={{
                                                    strings: ['Turn Your Dreams', 'Into Realty With'],
                                                    autoStart: true,
                                                    loop: true,
                                                }}
                                            />
                                        </h1>

                                        <h1 className='banner-gradiant'> Walletzilla</h1>
                                        {/* <h1 class="">Turn Your Dreams </h1>
                    <h1 class="">Into Realty With Walletzilla</h1> */}


                                        <div class="hero-text">
                                            <p>
                                                A decentralized Marketplace which makes simplifies and standardizes data with blockchain technology. We provides user friendly, efficient and secure crypto solutions and utilizing blockchain technology.
                                            </p>
                                        </div>

                                        <div class="hero-button">
                                            <Link to="/Auth">Join Us</Link>
                                            <a href="..\..\../Walletzilla.pdf" target="_blank">Download Plan</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="dreamit-hero-thumb" data-wow-delay=".5s">
                                        <img className='img-fluid' src='assets/images/myImage/wallet_zilla.gif' alt='' />
                                        {/* <Lottie animationData={walletZilla}  autoplay={true}/>; */}

                                        {/* <div class="hero-main-thumb">
                    <img src="assets/images/slider/main.png" alt='logo' />
                </div>
                <div class="hero-main-thumb" >
                    <img src="assets/images/3dgifmaker44460.gif" alt="logo" width="400" class="gifRespnse" />
                </div>
                <div class="hero-thumb-inner1 bounce-animate4">
                    <img src="assets/images/slider/img1.png" alt="" />
                </div>
                <div class="hero-thumb-inner2 bounce-animate">
                    <img src="assets/images/slider/img2.png" alt="" />
                </div>
                <div class="hero-thumb-inner3 bounce-animate3">
                    <img src="assets/images/slider/img3.png" alt="" />
                </div> */}
                                    </div>
                                </div>
                            </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div class="clearfix" style={{ clear: "both" }}></div>
        </>
    )
}
