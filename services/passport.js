const mongoose = require('mongoose');

const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;

const keys = require('../config/keys');

const User = mongoose.model('User');

passport.serializeUser((user, done) => {
	done(null, user.id);
});

passport.deserializeUser((id, done) => {
	User.findById(id).then(user => {
		done(null, user);
	});
});

passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback',
    proxy: true
}, async (accessToken, refreshToken, profile, done) => {

	const existingUser = await User.findOne({ googleId: profile.id })
	
	if (existingUser) {
		// already have a record with given profile id
		// tell passport we finished, no error and here's the existing user
		return done(null, existingUser);
	} 
		// make a new record, when finished return no error and new created user
		const user = await new User({ googleId: profile.id }).save()
		done(null, user);
}));


passport.use(new FacebookStrategy({
    clientID: keys.facebookAppId,
    clientSecret: keys.facebookAppSecret,
    callbackURL: '/auth/facebook/callback',
    proxy: true
}, async (accessToken, refreshToken, profile, done) => {
	
	const existingUser = await User.findOne({ facebookId: profile.id })

	if (existingUser) {
		// already have a record with given profile id
		// tell passport we finished, no error and here's the existing user
		return done(null, existingUser);
	} 
		// make a new record, when finished return no error and new created user
	const user = await new User({ facebookId: profile.id }).save()
	done(null, user);

}));