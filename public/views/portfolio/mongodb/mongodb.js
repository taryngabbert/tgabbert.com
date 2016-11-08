angular.module('tgabbert')
.controller('mongodbCtrl', function($scope) {
	$scope.project = {
		title: "Guest Speaker on MongoDB"
		, description: "Gopher was a personal project much like the current app TAKL. It was designed to help everyday people find help for the things they need to do, now."
		, github: "https://github.com/taryngabbert/provider"
		, hosted: {
			status: false,
			link: null
		}
		, video: ""
		, skills: ["JavaScript", "NodeJS", "Mongoose", "Express", "MongoDB"]
	}
});
