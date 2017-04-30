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
    $scope.selectedRace = "";
    $scope.name = "Mysterious";
    $scope.player = "Rando";
    $scope.lang = ["Corp."];
    $scope.strVal = 2;
    $scope.strBon = 0;
    $scope.rfxVal = 2;
    $scope.rfxBon = 0;
    $scope.movVal = 2;
    $scope.movBon = 0;
    $scope.focVal = 2;
    $scope.focBon = 0;
    $scope.intVal = 2;
    $scope.intBon = 0;
    $scope.perVal = 2;
    $scope.perBon = 0;
    $scope.fate = 2;
    $scope.fateBon = 0;
    $scope.level = 1;
    $scope.resources = 2 + $scope.level;
    $scope.currentRes = $scope.resources;
    $scope.influence = 2 + $scope.level;
    $scope.currentInf = $scope.influence;
    $scope.totalAttr = 18 - $scope.strVal - $scope.rfxVal - $scope.movVal - $scope.focVal -$scope.intVal - $scope.perVal;
    $scope.traits = 1;
    $scope.numSkills = 0;
    $scope.primarySkills = {wealth:false, conversation:false, leadership:false, culture:false, physical:false,
        resolve:false, awareness:false, survival:false, mechanics:false, electronics: false, programming:false,
        bio_tech:false, medicine:false, psychology:false, astronomy:false, planetoids:false};
    $scope.numCombatSkills = 0;
    $scope.combatSkills = {smlArmsFrst:false, smlArmsSec:false, hvyArmsFrst:false, hvyArmsSec:false, tactFrst:false,
        tactSec:false, exoFrst:false, exoSec:false};
    $scope.numVehicleSkills = 0;
    $scope.vehicleSkills = {cmdFrst:false, cmdSec:false, engFrst:false, engSec:false, operFrst:false, operSec:false,
        gunFrst:false, gunSec:false};

    //Functions below
    $scope.resetStates = function () {
        $scope.totalAttr = 18 - 12;
        $scope.strVal = $scope.strVal + $scope.strBon;
        $scope.rfxVal = $scope.rfxVal + $scope.rfxVal;
        $scope.movVal = $scope.movVal + $scope.movBon;
        $scope.focVal = $scope.focVal + $scope.focBon;
        $scope.intVal = $scope.intVal + $scope.intBon;
        $scope.perVal = $scope.perVal + $scope.perBon;
        //build reset parts for skills as well

    };
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
        if ($scope.totalAttr > 0 && $scope.strVal < 5) {
            $scope.totalAttr = $scope.totalAttr - 1;
            $scope.strVal = $scope.strVal + 1;
        }
    };
    $scope.remStr = function () {
        if ($scope.limit($scope.strVal)){
            $scope.totalAttr = $scope.totalAttr + 1;
            $scope.strVal = $scope.strVal - 1;
        }
    };
    $scope.addRfx = function () {
        if ($scope.totalAttr > 0 && $scope.rfxVal < 5) {
            $scope.totalAttr = $scope.totalAttr - 1;
            $scope.rfxVal = $scope.rfxVal + 1;;
        }
    };
    $scope.remRfx = function () {
        if ($scope.limit($scope.rfxVal)){
            $scope.totalAttr = $scope.totalAttr + 1;
            $scope.rfxVal = $scope.rfxVal - 1;
        }
    };
    $scope.addMov = function () {
        if ($scope.totalAttr > 0 && $scope.movVal < 5) {
            $scope.totalAttr = $scope.totalAttr - 1;
            $scope.movVal = $scope.movVal + 1;
        }
    };
    $scope.remMov = function () {
        if ($scope.limit($scope.movVal)){
            $scope.totalAttr = $scope.totalAttr + 1;
            $scope.movVal = $scope.movVal - 1;
        }
    };
    $scope.addFoc = function () {
        if ($scope.totalAttr > 0 && $scope.focVal < 5) {
            $scope.totalAttr = $scope.totalAttr - 1;
            $scope.focVal = $scope.focVal + 1;
        }
    };
    $scope.remFoc = function () {
        if ($scope.limit($scope.focVal)){
            $scope.totalAttr = $scope.totalAttr + 1;
            $scope.focVal = $scope.focVal - 1;
        }
    };
    $scope.addInt = function () {
        if ($scope.totalAttr > 0 && $scope.intVal < 5) {
            $scope.totalAttr = $scope.totalAttr - 1;
            $scope.intVal = $scope.intVal + 1;
        }
    };
    $scope.remInt = function () {
        if ($scope.limit($scope.intVal)){
            $scope.totalAttr = $scope.totalAttr + 1;
            $scope.intVal = $scope.intVal - 1;
        }
    };
    $scope.addPer = function () {
        if ($scope.totalAttr > 0 && $scope.perVal < 5) {
            $scope.totalAttr = $scope.totalAttr - 1;
            $scope.perVal = $scope.perVal + 1;
        }
    };
    $scope.remPer = function () {
        if ($scope.limit($scope.perVal)){
            $scope.totalAttr = $scope.totalAttr + 1;
            $scope.perVal = $scope.perVal - 1;
        }
    };
    $scope.maxPrimary = function (testVal) {
        return $scope.numSkills >= 6 && !testVal;
    };
    $scope.maxCombat = function (testVal) {
        return $scope.numCombatSkills >= 2 && !testVal;
    };
    $scope.maxVehicle = function (testVal) {
        return $scope.numVehicleSkills >= 2 && !testVal;
    };
    $scope.changeNumSkills = function (skill) {
        if (skill) {
            $scope.numSkills = $scope.numSkills + 1;
        }
        else {
            $scope.numSkills = $scope.numSkills - 1;
        }
    };
    $scope.changeNumCombatSkills = function (skill) {
        if (skill) {
            $scope.numCombatSkills = $scope.numCombatSkills + 1;
        }
        else {
            $scope.numCombatSkills = $scope.numCombatSkills - 1
        }
    };
    $scope.changeNumVehicleSkills = function (skill) {
        if (skill) {
            $scope.numVehicleSkills = $scope.numVehicleSkills + 1;
        }
        else {
            $scope.numVehicleSkills = $scope.numVehicleSkills - 1
        }
    };
    //Need to use racial bonus modifier
    $scope.adjustRace = function() {
        if ($scope.selectedRace === "Corporation") {
            $scope.strVal = $scope.strVal - 2;
            $scope.fate = $scope.fate - 1;
            $scope.resources = $scope.resources + 2;
            $scope.influence = $scope.influence + 2;
            $scope.primarySkills.wealth = true;
            $scope.combatSkills.tactSec = true;
            $scope.vehicleSkills.operSec = true;
            //Insert complication for Kaltorans
        }
        else if ($scope.selectedRace === "Kaltoran") {
            $scope.fate = $scope.fate + 1;
            $scope.primarySkills.awareness = true;
            $scope.combatSkills.smlArmsSec = true;
            $scope.vehicleSkills.cmdSec = true;
            //Insert complication for Corporates
        }
        else if ($scope.selectedRace === "Legion") {
            $scope.movVal = $scope.movVal - 2;
            $scope.primarySkills.resolve = true;
            $scope.combatSkills.hvyArmsSec = true;
            $scope.vehicleSkills.gunSec = true;
            //Additional complications need to be considered
        }
        else if ($scope.selectedRace === "Nephilim") {
            $scope.primarySkills.bio_tech = true;
            $scope.combatSkills.exoSec = true;
            $scope.vehicleSkills.engSec = true;
        }
        else if ($scope.selectedRace === "Palantor") {

        }
        else if ($scope.selectedRace === "Remnant") {

        }
        else if ($scope.selectedRace === "Twi-Far") {

        }
        else if ($scope.selectedRace === "Zhou") {

        }
    };

    //Test bed section for functions
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
});
