/*
    Final Project for CSCI 344 | Fragged Empire Character Creation Tool
    Created by Ashley Dodson, Leng Ghuy, Michael Scott, Jacob Frizzell
    April 2017

    Purpose of this page: AngularJS module for the website to utilize
*/
var app = angular.module("app", []);

app.controller('ctrl', function ($scope) {
    $scope.races = ["Corporation", "Kaltoran", "Legion", "Nephilim", "Palantor", "Remnant", "Twi-Far", "Zhou"];
    $scope.name = "Test";
    $scope.player = "Example";
    $scope.lang = ["Corp."];
    $scope.addLang = function () {
        $scope.lang.push($scope.addMe);
    }
    $scope.remLang = function (x) {
        $scope.lang.splice(x, 1);
    }
});
