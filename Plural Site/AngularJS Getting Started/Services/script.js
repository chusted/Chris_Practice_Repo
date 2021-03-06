(function() {
  var app = angular.module("githubViewer", []);
  
  var MainController = function($scope, github, $interval, $log, $anchorScroll, $location) {
    
    var onUserComplete = function(data) {
      $scope.user = data;
      github.getRepos($scope.user).then(onRepos, onError);
    };
    
    var onRepos = function(data) {
      $scope.repos = data;
      $location.hash("userDetails");
      $anchorScroll();
    };
    
    var onError = function(reason) {
      $scope.error = "Could not fetch the data";
    };
    
    $scope.search = function(username) {
      $log.info("Searching for " + username);
      github.getUser(username).then(onUserComplete, onError);
      if(countdownInterval) {
        $interval.cancel(countdownInterval);
        $scope.countDown = null;
      }
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
    $scope.message = "Github Viewer";
    $scope.repoSortOrder = "-stargazers_count"
    $scope.countDown = 5;
    startCountdown();
    
  };
  
  app.controller("MainController", MainController);
   
}());