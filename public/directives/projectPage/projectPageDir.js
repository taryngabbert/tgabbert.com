angular.module('tgabbert')
.directive('projectDir', function() {
	return {
		  templateUrl: 'directives/projectPage/projectPage.html'
		, restrict: 'E'
		, scope: {
			project: "="
		}
		, controller: function($scope, $sce) {
			$scope.currentProjectUrl = $sce.trustAsResourceUrl($scope.project.video);
		}
		, link: function() {

		}
	};
});
