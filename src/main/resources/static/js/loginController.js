app.controller('loginController', function($scope,$http) {
    $scope.message = 'Contact us! JK. This is just a demo.';
    var self = this;
    $scope.login = function () {
        console.log("click!");
        console.log($scope.username+"   "+$scope.password);
        $http.get('/login2' ,{headers : { authorization : "Basic "
        + btoa($scope.username
            + ":" + $scope.password)}}).then(function(response) {
            console.log(response.data);
        }).catch(function (reason) {  console.log("Not valid!");
            console.log(reason)})};

    $scope.logout = function() {
        $http.post("/logout").then(function() {
            self.hide = false;
            self.greeting = {};
            window.location.href = "/";
        });
    };
});