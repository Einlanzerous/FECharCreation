/*
 Final Project for CSCI 344 | Fragged Empire Character Creation Tool
 Created by Ashley Dodson, Leng Ghuy, Michael Scott, Jacob Frizzell
 May 2017

 Purpose of this page: AngularJS module for the quiz.html to utilize
 */

var app = angular.module('quiz', []);

app.controller('quizCtrl', function ($scope) {
    $scope.question1 = '';
    $scope.question2 = '';
    $scope.question3 = '';
    $scope.question4 = '';
    $scope.question5 = '';
    $scope.question6 = '';
    $scope.question7 = '';
    $scope.results = [];
    $scope.combine = function() {
        $scope.results = [$scope.question1, $scope.question2, $scope.question3, $scope.question4, $scope.question5, $scope.question6, $scope.question7];
        console.log($scope.results);
    };

    $scope.find_results = function () {
        console.log("Is this starting?");
        $scope.combine();
        for (var i = 0; i < 7; i++) {
            console.log("test");
        }
    };
});