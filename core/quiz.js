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
    $scope.corp = false;
    $scope.kalt = false;
    $scope.legn = false;
    $scope.neph = false;
    $scope.pala = false;
    $scope.remn = false;
    $scope.twif = false;
    $scope.zhou = false;

    $scope.combine = function() {
        if ($scope.question1 !== '') {
            if ($scope.question2 !== '') {
                if ($scope.question3 !== '') {
                    if ($scope.question4 !== '') {
                        if ($scope.question5 !== '') {
                            if ($scope.question6 !== '') {
                                if ($scope.question7 !== '') {
                                    if ($scope.results.length === 0){
                                        $scope.results.push($scope.question1);
                                        $scope.results.push($scope.question2);
                                        $scope.results.push($scope.question3);
                                        $scope.results.push($scope.question4);
                                        $scope.results.push($scope.question5);
                                        $scope.results.push($scope.question6);
                                        $scope.results.push($scope.question7);
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    };
    $scope.finished = function() {

        $scope.combine();
        if ($scope.results.length >= 7) {
            return false;
        }
        else {
            return true;
        }
    };
    $scope.find_results = function () {
        console.log($scope.results);
        var corp = 0;
        var kalt = 0;
        var legn = 0;
        var neph = 0;
        var pala = 0;
        var remn = 0;
        var twif = 0;
        var zhou = 0;
        var max = 0;

        for (var i = 0; i < 7; i++) {
            if ($scope.results[i] === "corp"){
                corp++;
            }
            else if ($scope.results[i] === "kalt") {
                kalt++;
            }
            else if ($scope.results[i] === "legn") {
                legn++;
            }
            else if ($scope.results[i] === "neph") {
                neph++;
            }
            else if ($scope.results[i] === "pala") {
                pala++;
            }
            else if ($scope.results[i] === "remn") {
                remn++;
            }
            else if ($scope.results[i] === "twif") {
                twif++;
            }
            else if ($scope.results[i] === "zhou") {
                zhou++;
            }
        }

        max = Math.max(corp, legn, neph, pala, remn, twif, zhou);

        if (corp === max) {
            $scope.corp = true;
        }
        else if (kalt === max) {
            $scope.kalt = true;
        }
        else if (legn === max) {
            $scope.legn = true;
        }
        else if (neph === max) {
            $scope.neph = true;
        }
        else if (pala === max) {
            $scope.pala = true;
        }
        else if (remn === max) {
            $scope.remn = true;
        }
        else if (twif === max) {
            $scope.twif = true;
        }
        else if (zhou === max) {
            $scope.zhou = true;
        }
    };
});