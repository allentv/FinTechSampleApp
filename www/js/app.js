/**
 * This is main file for AngularJS framework where it defines how the
 * application is setup including routes.
 *
 * @author: Allen Thomas Varghese
 */

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module(
  'FinTechApp',
  ['ionic', 'chart.js', 'ionic.utils']);

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider.state('Home', {
    url: '/',
    templateUrl: 'partials/HomeScreen.html',
    controller: 'HomeScreenCtrl'
  });

  $stateProvider.state('ExpenseTracker', {
    url: '/expenseTracker/',
    templateUrl: 'partials/ExpenseTracker.html',
    controller: 'ExpenseTrackerCtrl'
  });

  $stateProvider.state('ChartDisplay', {
    url: '/chartDisplay/',
    templateUrl: 'partials/ChartDisplay.html',
    controller: 'ChartDisplayCtrl'
  });

}]);
