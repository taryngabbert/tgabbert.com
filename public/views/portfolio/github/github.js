angular.module('tgabbert')
.controller('githubCtrl', function($scope) {
	$scope.project = {
		title: "Github Mini Lecture"
		, description: "During my time as a mentor at DevMountain I was given the opportunity to give a mini lecture on how to work with groups in GitHub. The lecture was very hands on with a live demo of what to do when you encounter merge conflicts and how to avoid them in a group setting."
		, github: "https://github.com/taryngabbert/githubLesson"
		, hosted: {
			status: false,
			link: null
		}
		, video: ""
		, skills: ["GitHub"]
	}
});
