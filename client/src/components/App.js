import React, { Component } from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Header from './Header';
import Landing from './Landing';
import '../css/App.css';
const Dashboard = () => <h2>DASHBOARD</h2>
const SurveyNew = () => <h2>SURVEY NEW</h2>


class App extends Component {

	componentDidMount() {
		this.props.fetchUser();
	}

	render () {
		return (
			<div>
				<BrowserRouter>
					<div>
						<Route exact path="/" component={Landing}/>
						<Route exact path="/surveys" component={Dashboard}/>
						<Route path="/surveys/new" component={SurveyNew}/>
						<Header/>
					</div>
				</BrowserRouter>
			</div>
		);
	}
}

export default connect(null, actions)(App);