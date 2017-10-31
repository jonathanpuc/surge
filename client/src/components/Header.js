import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Stripe from './Stripe';

class Header extends Component {

	renderContent() {
		switch (this.props.auth) {
			case null:
				return; 
			case false:
				return [
					<li><a href="/auth/google" className="button google-btn">Login With Google</a></li>,
					<li><a href="/auth/facebook" className="button facebook-btn">Login With Facebook</a></li>
				]
				
			default:
				return [
					<li key="1"><Stripe/></li>,
					<li key="2" className="credits">Credits: {this.props.auth.credits}</li>,
					<li key="3"><a href="/api/logout" className="logout-btn">Logout</a></li>
				]
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
					<ul className="navbar-right">
						{this.renderContent()}
					</ul>
				</div>
			</nav>
		);
	}
}

function mapStateToProps({ auth }) {
	return { auth };
}

export default connect(mapStateToProps)(Header)