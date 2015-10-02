/**
 * All controllers for the application are added below.
 *
 * @author: Allen Thomas Varghese
 */
app.controller(
  'HomeScreenCtrl',
  ['$scope', '$state', '$ionicModal', '$ionicPopup',
  function($scope, $state, $ionicModal, $ionicPopup) {
    $scope.showExpenseTracker = function() {
      $state.go("ExpenseTracker");
    };
    $scope.showExpensesList = function() {
      $state.go("ExpensesList");
    };
    $scope.showChart = function() {
      $state.go("ChartDisplay");
    };

    // An alert dialog
    $scope.showAlert = function() {
     var alertPopup = $ionicPopup.alert({
       title: 'About Us',
       template: 'This is a sample mobile app created for FinTech Weekend<br><br>@IdeaStarter + @Qualtrics + TES'
     });
    };
  }
  ]
);

app.controller(
  'ExpenseTrackerCtrl',
  ['$scope', '$state', '$localstorage',
  function($scope, $state, $localstorage) {
    // TODO: Save information
    $scope.saveExpense = function(
      expense_name, expense_amount, expense_category
    ) {
      // Data is saved as a list of JSON objects, each representing one expense
      var expensesListData = $localstorage.getObjectList("expenses");
      expensesListData.push(
        {
          "name": expense_name,
          "amount": expense_amount,
          "category": expense_category
        }
      );
      // Save the list of expenses to Local Storage
      $localstorage.setObjectList("expenses", expensesListData);
      $state.go("Home");
    };
  }
  ]
);

app.controller(
  'ExpensesListCtrl',
  ['$scope', '$state', '$localstorage',
  function($scope, $state, $localstorage) {
    $scope.expensesDataList = $localstorage.getObjectList("expenses");
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
