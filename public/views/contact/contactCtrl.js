angular.module('tgabbert')
.controller('contactCtrl', function($scope, $http, appService) {

	 $scope.send = function () {
		 const newMessage = {
		   to: 'taryngabbert@gmail.com'
		   , from: $scope.from
		   , subject: $scope.subject
		   , text: $scope.message
		}
		 appService.sendMessage(newMessage).then( response => {
			$scope.from=""
			$scope.subject=""
			$scope.message=""
			alert("Your message has been sent!")
		})
	 }
});
