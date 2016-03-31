var app = angular.module('myApp', ['ngRoute', 'ngAnimate'])

		app.config(function($routeProvider) {
			$routeProvider
				.when('/', {
					templateUrl: 'partials/home.html',
					controller: 'MainController'
				})
				.otherwise('/')
		})


var $header = $('.header');
var $artInner = $('.header-inner');
var $body = $('body');
var $wrap = $('.wrap');
var scrollTop;

$body.css({
  'background-color': 'rgba(0,0,0,'+ (.1 - scrollTop / 6000) + ')'
});

$(window).scroll(function(){
	var scrollTop = $(window).scrollTop();

	$header.css({
		'background-position' : 'center ' + (-scrollTop/6)+"px"
	});

	$artInner.css({
		'opacity': 1 - scrollTop / 600 ,
		'margin-top' : scrollTop/ 2 + 'px'
	});

  $body.css({
    'background-color': 'rgba(0,0,0,'+ (.1 - scrollTop / 6000) + ')'
  });

});
