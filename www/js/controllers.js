/**
 * All controllers for the application are added below.
 *
 * @author: Allen Thomas Varghese
 */
app.controller(
  'HomeScreenCtrl',
  ['$scope', '$state',
  function($scope, $state) {
    $scope.showExpenseTracker = function() {
      $state.go("ExpenseTracker");
    };
    $scope.showChart = function() {
      $state.go("ChartDisplay");
    };
    $scope.showAbout = function() {
      //TODO: Add code for popup display
    };
  }
  ]
);

app.controller(
  'ExpenseTrackerCtrl',
  ['$scope', '$state', '$localstorage',
  function($scope, $state, $localstorage) {

  }
  ]
);

app.controller(
  'ChartDisplayCtrl',
  ['$scope', '$state', '$interval',
  function($scope, $state, $interval) {
    $scope.labels = [
      "January", "February", "March", "April", "May"
    ];
    init_data = FinTechAppSettings.chart_data;
    $scope.chart_data = [init_data];
    $interval(function () {
      $scope.$evalAsync(function() {
        init_data.push(Utils.randomIntBetween(50, 100));
        init_data.splice(1, 1);
        $scope.chart_data = [init_data];
      });
    }, 5000);
  }
  ]
);
