angular.module('tgabbert')
.directive('navBar', function() {
	return {
		  templateUrl: 'directives/navBar/navBar.html'
		, restrict: 'E'
		, controller: function($scope, $state) {
			console.log($state.current.url)
			$scope.currentUrl = $state.current.url;
		}
		, link: function() {

		}
	};
});
