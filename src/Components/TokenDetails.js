import React from 'react'

export const TokenDetails = () => {
    return (
        <>
            <div class="about-area pt-100 pb-100 position-relative" id="about">
            <img className='rt-img position-absolute' src='assets/images/myImage/decor-3.svg' alt=''/>
                <div class="container">
                <div className='row'>
                        <div className='col-12'>
                            <h1 className='text-center mb-5 banner-gradiant'>Token Details</h1>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-6 col-md-6 col-sm-12" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <div class="dreamit-section-title pb-5" data-wow-delay=".5s">
                                <h4>WZT Tokenomics</h4>
                                <table class="table">
                                    <tbody>
                                        <tr>
                                            <td className='section-text'>Token Name</td>
                                            <td>WalletZilla </td>
                                        </tr>
                                        <tr>
                                            <td>Token Symbol</td>
                                            <td>WZT</td>
                                        </tr>
                                        <tr>
                                            <td>Token Supply</td>
                                            <td>5 Miiilion WZT</td>
                                        </tr>
                                        <tr>
                                            <td>Decimal</td>
                                            <td>18</td>
                                        </tr>
                                        <tr>
                                            <td>Token Address</td>
                                            <td>0x000000000000000000</td>
                                        </tr>
                                    </tbody>
                                </table>
                                {/* <p class="section-text">
                                    This whole platform is designed to work in the
                                    finance environment with any governing parties, and
                                    project owner inputs. The platform is built on self
                                    sustain smart contract technology.
                                </p> */}
                                <p class="section-text">
                                Walletzilla is one of the most transformative technologies since the invention of the Smart Contracts. Walletzilla stands firmly in support of financial freedom and the liberty that Walletzilla provides globally for anyone to voluntarily participate in a permissionless and decentralized network.
                                </p>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-12">
                            <div className="dreamit-about-thumb" data-wow-delay=".4s">
                                {/* <img className='img-fluid position-absolute about-logo-img w-25 vert-move' src="assets/images/myImage/Asset 6.png" alt="" /> */}
                                <img  src="assets/images/myImage/Hero2.gif" alt="" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>

    )
}
