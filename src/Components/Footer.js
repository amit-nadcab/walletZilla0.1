import React from 'react'
import {BsFacebook} from 'react-icons/bs'
import {AiFillTwitterCircle, AiFillYoutube} from 'react-icons/ai'
import {FaTelegram} from 'react-icons/fa'

export const Footer = () => {
  return (
    <>
    <div class="footer-middle pt-80 pb-3"> 
	<div class="container">
		<div class="row footer-bottom mt-65">
			<div class="col-lg-6 col-md-6 col-sm-12">
				<div class="footer-bottom-content">
					<div class="footer-bottom-content-copy">
						<p>© All Rights Reserved. By: <span>WalletZilla</span></p>
					</div>
				</div>
			</div>
			<div class="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center">
				<div class="footer-bottom-content ">
					<div class="footer-bottom-content-copy">
						<AiFillTwitterCircle color='white' className="socilMedia-icons" size={22}/>
						<BsFacebook color='white' className="socilMedia-icons" size={20}/>
						<FaTelegram color='white' className="socilMedia-icons" size={20}/>
						<AiFillYoutube color='white' className="socilMedia-icons" size={24}/>
					</div>
				</div>
			</div>
		</div>
    </div>
</div>	
    </>
  )
}
