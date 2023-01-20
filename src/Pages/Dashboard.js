import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
// import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

export const Dashboard = () => {

  useEffect(() => {
    var btn = document.querySelector('.toggle');
    var btnst = true;
    btn.onclick = function () {
      if (btnst == true) {
        document.querySelector('.toggle span').classList.add('toggle');
        document.getElementById('sidebar').classList.add('sidebarshow');
        btnst = false;
      } else if (btnst == false) {
        document.querySelector('.toggle span').classList.remove('toggle');
        document.getElementById('sidebar').classList.remove('sidebarshow');
        btnst = true;
      }
    }
  }, [])


  return (
    <>
      <header class="header">
        <div class="header_in d-flex align-items-center container">
          <div>
            <Link to='/'>
          <img src="assets/images/walletZilla_logo.png" alt="logo" className="img img-fluid" style={{ width: "80px" }} />
          </Link>
          </div>
          {/* <div>
          <a
            href="#"
            className="grad_btn btn-block text-light my-2 "
            style={{ padding: "10px 55px" }}
          >
            Download Plan
          </a>
          </div> */}
          <div className='ms-auto'>
          <button type="button" className="toggle sidebar-button" id="toggle">
            <span></span>
          </button>
          </div>
        </div>
      </header>

{/* Sidebar-Start */}
      <div class="sidebar" id='sidebar'>
        <ul>
          <li><a href="">Staking</a></li>
          <li><a href="">Level Income</a></li>
          <li><a href="">Referral Income</a></li>
          <li><a href="">Royalty Income</a></li>
        </ul>
      </div>
{/* Sidebar-End */}
      {/* <div className="container text-center mt-4">
        <div className="row">
          <div className="col-md-12 col-sm-12 col-lg-6 d-flex justify-content-start" style={{ fontSize: "30px" }}>
            <img src="assets/images/walletZilla_logo.png" alt="logo" className="img img-fluid" style={{ width: "100px" }} />
          </div>
          <div className="col-md-12 col-sm-12 col-lg-6 ">
            <div className="row">
              <div
                className="col-md-6 col-lg-6 col-sm-12 asm"
                style={{ flexDirection: "column" }}
              >
                <a class="grad_btn btn-block text-light my-2" style={{ fontSize: "0.875rem" }}
                 onClick={()=>window.addNetwork("web3")}
                >
                  <img class="mr-1" width={24} src="https://bscscan.com/images/svg/brands/metamask.svg" alt="Metamask" /> Add to Metamask
                </a>

              </div>
              <div
                className="col-md-6 col-lg-6 col-sm-12 d-flex justify-content-center"
                style={{ flexDirection: "column" }}
              >
                <a
                  href="#"
                  className="grad_btn btn-block text-light my-2 "
                  style={{ padding: "10px 55px" }}
                >
                  Download Plan
                </a>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* <section className="banner_section pt_50 pb_50 mt-5">
        <div className="container">
          <div className="banner_text text-center middle_text">
            <h1 className="tirw">Turn Your Dreams Into Realty With Walletzilla</h1>
            <h5>BDLT COMMUNITY DEVELOPMENT PROGRAM</h5>
            <p>
              {" "}
              The first decentralized Marketplace which makes simplifies and standardizes data with blockchain technology. We provides user friendly, efficient and secure crypto solutions and utilizing blockchain technology.
            </p>
          </div>
        </div>
      </section> */}
      <section className='mt-5 pt-5'>
        <div className="container mt-3">
          <div className="row cus_row">
            <div className="col-md-6 col-sm-6 col-6">
              <div className="Personal_Details_inner">
                <h4> Smart Contract Address </h4>
                <h5><a href="#" style={{ color: "white", textDecoration: "none" }}>{0x0000000}
                  {/* <FiExternalLink size={18} className="mx-1 pb-1" color="white" /> */}
                </a></h5>
              </div>
            </div>

            <div className="col-md-6 col-sm-6 col-6">
              <div className="Personal_Details_inner">
                <h4>Contract Balance </h4>
                <h5>{123}</h5>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pb_50">
        <div className="container">
          <div className="row cus_row">
            <div className="col-md-3 col-sm-3 col-6">
              <div className="Personal_Details_inner">
                <h4>Total Community Member</h4>
                <h5>{5}+</h5>
              </div>
            </div>
            <div className="col-md-3 col-sm-3 col-6">
              <div className="Personal_Details_inner">
                <h4> Total Staking </h4>
                <h5>{5}</h5>
              </div>
            </div>
            <div className="col-md-3 col-sm-3 col-6">
              <div className="Personal_Details_inner">
                <h4> Total Withdrawal Distributed</h4>
                <h5>{5}</h5>
              </div>
            </div>
            <div className="col-md-3 col-sm-3 col-6">
              <div className="Personal_Details_inner">
                <h4> Price </h4>
                <h5>$ {5}</h5>
              </div>
            </div>
          </div>
        </div>
      </section>
      {5 == 0 ? (
        <section className="pt_50 pb_50">
          <div
            className="row"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          ></div>

          <div className="container">
            <div className="all_heading text-center">
              <h2>
                <span>Join Us now</span>&nbsp;
              </h2>
              <div
                className="small_heading my-3"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
                <h6>
                  Wallet address -{" "}
                  <span style={{ fontSize: "15px" }}>
                    0x000000
                    {/* {wallet_address
                      ? wallet_address.substr(0, 10) +
                      "......." +
                      wallet_address.substr(25)
                      : "Press Refresh for Wallet Address if Metamask is connected"} */}
                  </span>{" "}
                </h6>
                {false ? (
                  <button
                    className="grad_btn btn-block mx-4"
                    style={{ padding: "10px 15px" }}
                  // onClick={() => {
                  //   onConnect()
                  //     .then((d) => {
                  //       console.log(d);
                  //       setBalance(round(d?.balance));
                  //       setContract(d?.contract);
                  //       setWalletAddress(d?.userAddress);
                  //       setJoiningPackage(d?.joiningPackage);
                  //     })
                  //     .catch((e) => console.log(e));
                  // }}
                  >
                    Connect Wallet
                  </button>
                ) : (
                  <></>
                )}
              </div>
            </div>

            <div className="container">
              <div className="row">
                <div
                  className="text-light"
                  style={{ margin: "10px 0px", fontSize: "15px" }}
                >
                  Wallet Balance: {" " + 5 + " "}
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Joining Package{" "}
                  {": " + parseInt(5000000000000000000 / 1e18)}  ($ 100)
                </div>
                <div className="col-md-8 col-lg-8 col-sm-8">
                  <div className="form-group">
                    {1 != 0 ? null : (
                      <input
                        className="cus_input"
                        type="text"
                        name="sponsor_address"
                        placeholder="Enter Refferer Id "
                        // onChange={(e) => {
                        //   setref_id1(e.target.value);
                        // }}
                        // value={ref_id1 ? ref_id1 : ""}
                        value={5}
                      />
                    )}
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 col-sm-4">
                  <div className="form-group">
                    {1 != 0 ? null : (
                      <button
                        className="grad_btn btn-block"
                        style={{ padding: "10px 95px" }}
                        onClick={() => {
                          if (3 > 2) {
                            if (1) {
                              // setdisable(true);
                              // onRegistration(contract, wallet_address);
                            } else {
                              console.log("Please provide Referral Id");
                              // NotificationManager.info(
                              //   "Please provide Referral Id"
                              // );
                            }
                          } else {
                            console.log("Please Connect  Wallet!!");
                            // NotificationManager.info(
                            //   "Please Connect  Wallet!!"
                            // );
                          }
                        }}
                        disabled={false}
                      >
                        {/* <span className={`${spin} mx-2`}></span> */}
                        <span className={`mx-2`}></span>
                        Join Now
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className="pt_50 pb_50">
          <div
            className="row"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          ></div>

          <div className="container">
            <div className="all_heading text-center">
              {/* <h2>
                <span></span>&nbsp;
              </h2> */}
              <div
                className="small_heading my-3"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
                <h6>
                  Your Wallet address -{" "}
                  <span style={{ fontSize: "15px" }}>
                    0x000000000000
                    {/* {wallet_address
                      ? wallet_address.substr(0, 10) +
                      "......." +
                      wallet_address.substr(25)
                      : "Press Refresh for Wallet Address if Metamask is connected"} */}
                  </span>{" "}
                </h6>
                <h6>
                  Your Wallet Balance -{" "}
                  <span style={{ fontSize: "15px" }}>
                    {0}
                  </span>{" "}
                </h6>
                {0 > 5 ? (
                  <button
                    className="grad_btn btn-block mx-4"
                    style={{ padding: "10px 15px" }}
                  // onClick={() => {
                  //   onConnect()
                  //     .then((d) => {
                  //       console.log(d);
                  //       setBalance(round(d?.balance));
                  //       setContract(d?.contract);
                  //       setWalletAddress(d?.userAddress);
                  //       setJoiningPackage(d?.joiningPackage);
                  //     })
                  //     .catch((e) => console.log(e));
                  // }}
                  >
                    Connect Wallet
                  </button>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="pb_50">
        <div className="container">
          <div className=" text-center">
            <h2>
              <span className='busd-stake-gradiant'>Dashboard</span>
            </h2>
          </div>
          <div className="row cus_row">
            <div className="col-md-4 col-sm-4 col-6">
              <div className="Personal_Details_inner Personal_bg">
                <h4>User Id</h4>
                <h5>222</h5>
              </div>
            </div>
            <div className="col-md-4 col-sm-4 col-6">
              <div className="Personal_Details_inner">
                <h4> Direct Sponsor </h4>
                <h5>123</h5>
              </div>
            </div>
            <div className="col-md-4 col-sm-4 col-12">
              <div className="Personal_Details_inner">
                <h4>Referred By</h4>
                <h5>
                  0x00000000000000
                  {/* {refferer.substr(0, 5)}......{refferer.substr(-8)} */}
                </h5>
              </div>
            </div>
          </div>
          {/* second row */}
          <div className="row cus_row">
            <div className="col-md-4 col-sm-4 col-6">
              <div className="Personal_Details_inner">
                <h4>Direct Sponsor Income</h4>
                <h5>5</h5>
              </div>
            </div>
            <div className="col-md-4 col-sm-4 col-6">
              <div className="Personal_Details_inner">
                <h4>Stair Income</h4>
                <h5>5</h5>
              </div>
            </div>
            <div className="col-md-4 col-sm-4 col-12">
              <div className="Personal_Details_inner">
                <h4>Total Available Income</h4>
                <h5>5</h5>
              </div>
            </div>
          </div>
          {/* Third row */}
          <div className="row cus_row">
            <div className="col-md-6 col-sm-6 col-lg-6">
              <div className="Personal_Details_inner Personal_bg">
                <h4>Total Income</h4>
                <h5>5</h5>
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-lg-6">
              <div className="Personal_Details_inner">
                <h4>Total Withdrawal</h4>
                <h5>5</h5>
              </div>
            </div>
          </div>
          {/* fourth row*/}
          <div className="row cus_row">
            <div className="col-md-6 col-sm-6 col-lg-6">
              <div className="Personal_Details_inner Personal_bg">
                <h4>Roi Income</h4>
                <h5>5</h5>
                <button className="grad_btn my-2"
                // onClick={onWithdraw}
                >
                  Withdraw Roi
                </button>
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-lg-6">
              <div className="Personal_Details_inner Personal_bg">
                <h4>Royalty Income</h4>
                <h5> Royalty Wallet</h5>
                <button className="grad_btn my-2"
                // onClick={onRoyaltyWithdraw}
                >
                  Withdraw Royalty
                </button>
              </div>
            </div>
          </div>
        </div>

      </section>
    </>
  )
}
