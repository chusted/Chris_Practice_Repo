(function() {
  var app = angular.module("githubViewer");
  
  var MainController = function($scope, $interval, $location) {
    
    $scope.search = function(username) {
      if(countdownInterval) {
        $interval.cancel(countdownInterval);
        $scope.countDown = null;
      }
      $location.path("/user/" + username);
    };
    
    var decrementCountdown = function() {
      $scope.countDown -= 1;
      if($scope.countDown < 1) {
        $scope.search($scope.username);
      }
    };
    
    var countdownInterval = null;
    var startCountdown = function() {
      countdownInterval = $interval(decrementCountdown, 1000, $scope.countDown);
    }
    
    $scope.username = "angular";
    $scope.countDown = 5;
    startCountdown();
    
  };
  
  app.controller("MainController", MainController);
   
}());