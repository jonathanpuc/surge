import React, { Component } from 'react';

export default class Header extends Component {
	render() {
		return (
			<nav>
				<div className="nav-wrapper">
					<a href="#" className="left brand-logo">
						Surge
					</a>
					<ul className="right">
						<li>
							<a href="#">Login With Google</a>
						</li>
						<li>
							<a href="#">Login With Facebook</a>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}