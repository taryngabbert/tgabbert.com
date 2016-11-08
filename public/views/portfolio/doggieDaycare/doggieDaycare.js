angular.module('tgabbert')
.controller('doggieDaycareCtrl', function($scope) {
	$scope.project = {
		title: "Doggie Daycare"
		, description: "Doggie Daycare was a web application that I built in three days using Angular and Firebase. I created a website with the ability to create a dog profile and schedule appointments with your doggie daycare. The admin side of the app could approve or deny appointments."
		, github: "https://github.com/taryngabbert/downtownDog"
		, hosted: {
			status: false,
			link: null
		}
		, video: "https://www.youtube.com/embed/NWGo4BC3034"
		, skills: ["Firebase", "Angular", "JavaScript", "SASS", "Bootstrap", "HTML"]
	}
});
