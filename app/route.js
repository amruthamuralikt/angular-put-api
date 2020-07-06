var app=angular.module("app2", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/about", {
        templateUrl : "templates/about.html",
        controller: "aboutCtrl"
    
    });
});
    