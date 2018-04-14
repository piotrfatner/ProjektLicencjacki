app.controller('loginController', function($scope,$http) {
    $scope.message = 'Contact us! JK. This is just a demo.';
    var self = this;
    $scope.login = function () {
        console.log("click!");
        $http.get('/login2').then(function(response) {
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