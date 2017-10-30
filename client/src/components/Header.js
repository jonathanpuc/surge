import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
class Header extends Component {

	renderContent() {
		switch (this.props.auth) {
			case null:
				return; 
			case false:
				return (
					<ul className="navbar-right">
					<li><a href="/auth/google" className="button google-btn">Login With Google</a></li>
					<li><a href="/auth/facebook" className="button facebook-btn">Login With Facebook</a></li>
					</ul>
				)
			default:
				return (
					<ul className="navbar-right">
					<li><a href="/api/logout" className="button logout-btn">Logout</a></li>
					</ul>
				)
		}
	}

	render() {

		return (
			<nav className="navbar navbar-left navbar-fixed-bottom">
				<div className="container">
					<Link 
					to={this.props.auth ? '/surveys' : '/'} 
					className="navbar-brand"
					>
					Surge
					</Link>
						{this.renderContent()}
				</div>
			</nav>
		);
	}
}

function mapStateToProps({ auth }) {
	return { auth };
}

export default connect(mapStateToProps)(Header)