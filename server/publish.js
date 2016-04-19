import User from '/imports/classes/user.js';
import Setting from '/imports/classes/setting.js';

Meteor.publish('users', function() {
	return User.find();
});

Meteor.publish('user', function(id) {
	return User.find(id);
});

Meteor.publish('settings', function() {
	return Setting.find();
});
