angular.module('tgabbert')
.controller('spotAssignCtrl', function($scope) {
	$scope.project = {
		title: "Spot Assign"
		, description: "Donec non orci ac nulla aliquam rhoncus ut tincidunt nulla. Fusce et justo elit. Phasellus risus ligula, convallis bibendum accumsan nec, mollis vitae quam. Curabitur in leo augue."
		, github: "https://github.com/SpotAssign/SpotAssign"
		, hosted: {
			status: false,
			link: null
		}
		, video: "https://www.youtube.com/embed/wsJQygJNCgQ"
		, skills: ["Webpack", "Angular Components", "JavaScript", "NodeJS", "CSS", "Mongoose", "Express", "Passport", "jQuery"]
	}
});
