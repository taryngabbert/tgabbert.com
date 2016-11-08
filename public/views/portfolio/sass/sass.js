angular.module('tgabbert')
.controller('sassCtrl', function($scope) {
	$scope.project = {
		title: "SASS Mini Lecture"
		, description: "During my time at DevMountain, I gave a few different mini lessons. In this lesson I demonstrated how to use and install SASS, and went over some of the basic functionalities that makes this preprocessor a great tool to use."
		, github: "https://github.com/taryngabbert/CSSpreprocessors"
		, hosted: {
			status: false,
			link: null
		}
		, video: ""
		, skills: ["SASS", "CSS"]
	}
});
