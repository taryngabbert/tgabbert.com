angular.module('tgabbert')
.controller('spotAssignCtrl', function($scope) {
	$scope.project = {
		title: "Spot Assign"
		, description: "Spot Assign was a project I worked with 4 other students during my time at DevMountain. We were given three weeks to build out a fully functional web application that would be able to take booth reservations for large events . I built out the backendwith Node.JS and did some of the functionality in the front end. To learn more, and see the app in action check out my code on Github or the viedo of the app in action."
		, github: "https://github.com/SpotAssign/SpotAssign"
		, hosted: {
			status: false,
			link: null
		}
		, video: "https://www.youtube.com/embed/wsJQygJNCgQ"
		, skills: ["Webpack", "Angular Components", "JavaScript", "NodeJS", "CSS", "Mongoose", "Express", "Passport", "jQuery"]
	}
});
