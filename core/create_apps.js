/*
    Final Project for CSCI 344 | Fragged Empire Character Creation Tool
    Created by Ashley Dodson, Leng Ghuy, Michael Scott, Jacob Frizzell
    April 2017

    Purpose of this page: AngularJS module for the create.html to utilize
*/

var app = angular.module("app", []);

app.controller('ctrl', function ($scope) {
    $scope.races = ["Corporation", "Kaltoran", "Legion", "Nephilim", "Palantor", "Remnant", "Twi-Far", "Zhou"];
    $scope.name = "Test";
    $scope.player = "Example";
    $scope.lang = ["Corp."];
    $scope.strVal = 2;
    $scope.rfxVal = 2;
    $scope.movVal = 2;
    $scope.focVal = 2;
    $scope.intVal = 2;
    $scope.perVal = 2;
    $scope.faeVal = 2;
    $scope.limit = function (val) {
        return (Math.min(5, Math.max(0, val)));
    };
    $scope.addLang = function () {
        $scope.lang.push($scope.addMe);
    };
    $scope.remLang = function (x) {
        $scope.lang.splice(x, 1);
    };
    $scope.addStr = function () {
        $scope.strVal = $scope.strVal + 1;
        $scope.strVal = $scope.limit($scope.strVal);
    };
    $scope.remStr = function () {
        $scope.strVal = $scope.strVal - 1;
        $scope.strVal = $scope.limit($scope.strVal);
    };
    $scope.addRfx = function () {
        $scope.rfxVal = $scope.rfxVal + 1;
        $scope.rfxVal = $scope.limit($scope.rfxVal);
    };
    $scope.remRfx = function () {
        $scope.rfxVal = $scope.rfxVal - 1;
        $scope.rfxVal = $scope.limit($scope.rfxVal);
    };
    $scope.addMov = function () {
        $scope.movVal = $scope.movVal + 1;
        $scope.movVal = $scope.limit($scope.movVal);
    };
    $scope.remMov = function () {
        $scope.movVal = $scope.movVal - 1;
        $scope.movVal = $scope.limit($scope.movVal);
    };
    $scope.addFoc = function () {
        $scope.focVal = $scope.focVal + 1;
        $scope.focVal = $scope.limit($scope.focVal);
    };
    $scope.remFoc = function () {
        $scope.focVal = $scope.focVal - 1;
        $scope.focVal = $scope.limit($scope.focVal);
    };
    $scope.addInt = function () {
        $scope.intVal = $scope.intVal + 1;
        $scope.intVal = $scope.limit($scope.intVal);
    };
    $scope.remInt = function () {
        $scope.intVal = $scope.intVal - 1;
        $scope.intVal = $scope.limit($scope.intVal);
    };
    $scope.addPer = function () {
        $scope.perVal = $scope.perVal + 1;
        $scope.perVal = $scope.limit($scope.perVal);
    };
    $scope.remPer = function () {
        $scope.perVal = $scope.perVal - 1;
        $scope.perVal = $scope.limit($scope.perVal);
    };

    //Test bed section for functions
    $scope.attributes = [
        {
            str: 2,
            rfx: 2,
            mov: 2,
            foc: 2,
            int: 2,
            per: 2,
            fae: 2
        }];
    $scope.addAttribute = function (attribute) {
        $scope.attributes[attribute] = $scope.attributes[attribute] + 1;
    }
});
