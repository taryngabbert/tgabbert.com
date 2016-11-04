angular.module('tgabbert')
.directive('carouselDir', function() {
	return {
		  templateUrl: 'directives/carousel/carousel.html'
		, restrict: 'E'
		, controller: function($scope, $state) {
		}
		, link: function() {

		}
		, scope: {
			interval: "="
			, slides: "="
		}
	};
});
