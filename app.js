angular.module('myApp', ['ui.bootstrap','ui.calendar','ngRoute']);

angular.module('myApp')
.config(function ($routeProvider){          
    $routeProvider
    .when("/", {
        templateUrl: "app/calendrier/calendrier.html",
        controller: "calendrierController",
        controllerAs: "calendrierCtrl"
    })
    .when("/repertoire", {
        templateUrl: "app/repertoire/repertoire.html",
        controller: "repertoireController",
        controllerAs: "repertoireCtrl"
    })
    .when("/contact/:id", {
        templateUrl: "app/contact/contact.html",
        controller: "contactController",
        controllerAs: "contactCtrl"
    })
    .when("/nouveauContact", {
        templateUrl: "app/nouveauContact/nouveauContact.html",
        controller: "nouveauContactController",
        controllerAs: "nouveauContactCtrl"
    })
    .otherwise("/");
});