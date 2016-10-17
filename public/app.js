angular.module('tgabbert', ['ui.router', 'ui.bootstrap'])


.config( function ($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/');
	$stateProvider
	.state("home", {
	  url: "/",
	  templateUrl: "public/views/home/home.html",
	  controller: "homeCtrl"
	})
	.state("about", {
	  url: "/about",
	  templateUrl: "public/views/about/about.html",
	  controller: "aboutCtrl"
	})
	.state("blog", {
	  url: "/blog",
	  templateUrl: "public/views/blog/blog.html",
	  controller: "blogCtrl"
	})
	.state("contact", {
	  url: "/contact",
	  templateUrl: "public/views/contact/contact.html",
	  controller: "contactCtrl"
	})
	.state("portfolio", {
	  url: "/portfolio",
	  templateUrl: "public/views/portfolio/portfolio.html",
	  controller: "portfolioCtrl"
  })
  	.state("spotAssign", {
		url: "/portfolio/spotAssign",
		templateUrl: "public/views/portfolio/SpotAssign/spotAssign.html",
		controller: "spotAssignCtrl"
	})

})
