angular.module('tgabbert')
.controller('maggieCtrl', function($scope) {
	$scope.interval = 4000;
	$scope.slides = [
		 {
			 image: 'assets/images/maggie/IMG_6644.JPG'
		 },
		 {
			 image: 'assets/images/maggie/maggie1.jpg'
		 },
		 {
			 image: 'assets/images/maggie/maggie2.jpg'
		 },
		 {
			 image: 'assets/images/maggie/maggie3.jpg'
		 }
	 ];
});
