angular.module('tgabbert')
.controller('contactCtrl', function($scope, $http, appService) {

	 $scope.send = function () {
		 const newMessage = {
		   to: 'taryngabbert@gmail.com'
		   , from: $scope.from
		   , subject: $scope.subject
		   , text: $scope.message
		   , name: $scope.name
		}
		 appService.sendMessage(newMessage).then( response => {
			$scope.from=""
			$scope.subject=""
			$scope.message=""
			$scope.name=""
			alert("Your message has been sent!")
		})
	 }
});
