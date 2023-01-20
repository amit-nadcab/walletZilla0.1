import React from 'react'
import { Link } from 'react-router-dom'



export const Header = () => {
	return (
		<>
			<nav class="navbar navbar-expand-lg header-fixed" >
				<div class="container">
				<a className="navbar-brand" href="/"><img className='ms-1' width={window.innerWidth<500 ? 60 : 80} src="assets/images/walletZilla_logo.png" alt="" /></a>
					<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span class="navbar-toggler-icon">
							<img src="assets/images/svg/menu.svg" alt=''/>
						</span>
					</button>
					<div class="collapse navbar-collapse" id="navbarSupportedContent">
						<ul class="navbar-nav ms-auto mb-2 mb-lg-0">
							<li class="nav-item header-buttons">
								<Link class="nav-link active text-white text-center" aria-current="page" to="/Auth">Signin</Link>
							</li>
							<li class="nav-item header-buttons">
								<a class="nav-link text-white text-center" href="..\..\../Walletzilla.pdf" target='_blank'>Download Plan</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	)
}
