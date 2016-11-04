angular.module('tgabbert')
.directive('footer', function() {
	return {
		  templateUrl: 'directives/footer/footer.html'
		, restrict: 'E'
		, controller: function($scope, $state) {
		}
		, link: function() {

		}
	};
});
