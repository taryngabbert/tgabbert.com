angular.module('tgabbert')
.controller('doggieDaycareCtrl', function($scope) {
	$scope.project = {
		title: "Doggie Daycare"
		, description: "Donec non orci ac nulla aliquam rhoncus ut tincidunt nulla. Fusce et justo elit. Phasellus risus ligula, convallis bibendum accumsan nec, mollis vitae quam. Curabitur in leo augue."
		, github: "https://github.com/taryngabbert/downtownDog"
		, hosted: {
			status: false,
			link: null
		}
		, video: "https://www.youtube.com/embed/NWGo4BC3034"
		, skills: ["Firebase", "Angular", "JavaScript", "SASS", "Bootstrap", "HTML"]
	}
});
