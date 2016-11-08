angular.module('tgabbert')
.controller('somethingCtrl', function($scope) {
	$scope.project = {
		title: "Guest Speaker on MongoDB"
		, description: "I was asked to speak on the basics on back end web development for the Dallas chapter of Women Who Code on 9/16/2016. If you would like to attend please check the Dallas chapter of Women Who Code website for more information."
		, github: ""
		, hosted: {
			status: false,
			link: null
		}
		, video: ""
		, skills: ["JavaScript", "NodeJS", "Mongoose", "Express", "MongoDB"]
	}
});
