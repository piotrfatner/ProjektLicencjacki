// create the module and name it app
// create the module and name it app
// also include ngRoute for all our routing needs
var app = angular.module('app', ['ngRoute']);

// configure our routes
app.config(function($routeProvider) {
    $routeProvider

    // route for the home page
        .when('/', {
            templateUrl : 'views/home.html',
            controller  : 'mainController'
        })

        // route for the about page
        .when('/treatments', {
            templateUrl : 'views/treatments.html',
            controller  : 'aboutController'
        })

        .when('/login', {
            templateUrl : 'views/login.html',
            controller  : 'loginController'
        })

        .when('/userHome', {
            templateUrl : 'views/userHome.html',
            controller  : 'userController'
        })

        // route for the contact page
        .when('/contact', {
            templateUrl : 'views/contact.html',
            controller  : 'contactController'
        });

});

// create the controller and inject Angular's $scope
app.controller('mainController', function($scope) {
    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';
});

app.controller('aboutController', function($scope) {
    $scope.message = 'Look! I am an about page.';
});

/*
app.controller('contactController', function($scope) {
    $scope.message = 'Contact us! JK. This is just a demo.';
});*/
