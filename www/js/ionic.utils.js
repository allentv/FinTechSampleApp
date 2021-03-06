/*
 * Add support for Ionic based stuff
 *
 * Currently available : Local Storage
 *
 * Reference: http://learn.ionicframework.com/formulas/localstorage/
 */
angular.module('ionic.utils', [])

.factory('$localstorage', ['$window', function($window) {
  return {
    set: function(key, value) {
      $window.localStorage[key] = value;
    },
    get: function(key, defaultValue) {
      return $window.localStorage[key] || defaultValue;
    },
    setObject: function(key, value) {
      $window.localStorage[key] = JSON.stringify(value);
    },
    getObject: function(key) {
      return JSON.parse($window.localStorage[key] || '{}');
    },
    setObjectList: function(key, value) {
      $window.localStorage[key] = JSON.stringify(value);
    },
    getObjectList: function(key) {
      return JSON.parse($window.localStorage[key] || '[]');
    }
  }
}]);
