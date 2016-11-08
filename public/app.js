angular.module('tgabbert', ['ui.router', 'ui.bootstrap'])


.config(function ($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/');
	$stateProvider
	.state("home", {
	  url: "/",
	  templateUrl: "views/home/home.html",
	  controller: "homeCtrl"
	})
	.state("about", {
	  url: "/about",
	  templateUrl: "views/about/about.html",
	  controller: "aboutCtrl"
	})
	.state("blog", {
	  url: "/blog",
	  templateUrl: "views/blog/blog.html",
	  controller: "blogCtrl"
	})
	.state("contact", {
	  url: "/contact",
	  templateUrl: "views/contact/contact.html",
	  controller: "contactCtrl"
	})
	.state("portfolio", {
	  url: "/portfolio",
	  templateUrl: "views/portfolio/portfolio.html",
	  controller: "portfolioCtrl"
  })
  	.state("spotAssign", {
		url: "/portfolio/spotAssign",
		templateUrl: "views/portfolio/SpotAssign/spotAssign.html",
		controller: "spotAssignCtrl"
	})
	.state("doggieDaycare", {
		url: "/portfolio/doggieDaycare",
		templateUrl: "views/portfolio/doggieDaycare/doggieDaycare.html",
		controller: "doggieDaycareCtrl"
	})
	.state("gopher", {
		url: "/portfolio/gopher",
		templateUrl: "views/portfolio/gopher/gopher.html",
		controller: "gopherCtrl"
	})
	.state("sass", {
		url: "/portfolio/SASS",
		templateUrl: "views/portfolio/sass/sass.html",
		controller: "sassCtrl"
	})
	.state("github", {
		url: "/portfolio/github",
		templateUrl: "views/portfolio/github/github.html",
		controller: "githubCtrl"
	})
	.state("mongodb", {
		url: "/portfolio/mongoDB",
		templateUrl: "views/portfolio/mongodb/mongodb.html",
		controller: "mongodbCtrl"
	})
})

.constant('ref', {
// url: "http://harrypotterbookclub.xyz"  //unblock when you want to host again
	url: "http://localhost:4040"
})
