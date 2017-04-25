/*
    Final Project for CSCI 344 | Fragged Empire Character Creation Tool
    Created by Ashley Dodson, Leng Ghuy, Michael Scott, Jacob Frizzell
    April 2017

    Purpose of this page: AngularJS module for the create.html to utilize
*/

var app = angular.module("app", []);

app.controller('ctrl', function ($scope) {
    //Declare variables
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
    $scope.level = 1;
    $scope.resources = 2 + $scope.level;
    $scope.currentRes = $scope.resources;
    $scope.influence = 2 + $scope.level;
    $scope.currentInf = $scope.influence;
    $scope.totalAttr = 18;
    $scope.traits = 1;
    $scope.numSkills = 0;

    //Functions below
    $scope.limit = function (val) {
        return (Math.min(5, Math.max(0, val)));
    };
    $scope.addLang = function () {
        $scope.lang.push($scope.addMe);
    };
    $scope.remLang = function (x) {
        $scope.lang.splice(x, 1);
    };
    //Level functions will be changed over time
    $scope.incLevel = function () {
        $scope.level = $scope.level + 1;
        $scope.resources = $scope.resources + 1;
        $scope.influence = $scope.influence + 1;
        $scope.traits = $scope.traits + 1;
    };
    $scope.decLevel = function () {
        if ($scope.level === 1) {
            $scope.level = 1;
        }
        else {
            $scope.level = $scope.level - 1;
            $scope.resources = $scope.resources -1;
            $scope.influence = $scope.influence - 1;
            $scope.traits = $scope.traits - 1;
        }
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
    $scope.primarySkills = {wealth:false, conversation:false, leadership:false, culture:false, physical:false,
    resolve:false, awareness:false, survival:false, mechanics:false, electronics: false, programming:false,
    bio_tech:false, medicine:false, psychology:false, astronomy:false, planetoids:false};
    $scope.maxPrimary = function (testVal) {
        if ($scope.numSkills >= 2 && !testVal){
            return true;
        }
        else{
            return false;
        }
    };
    $scope.changeNumSkills = function(skill) {
        if (skill){
            $scope.numSkills = $scope.numSkills + 1;
        }
        else {
            $scope.numSkills = $scope.numSkills - 1;
        }
    };
    /*$scope.traitList = [
        {
            skill: {
                type: "category",
                theme: "narrow",
                adjust: function() {
                    //adjust stats
                }
            }
        }
    ];*/
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
