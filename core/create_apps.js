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
    $scope.rfxVal = 2;
    $scope.movVal = 2;
    $scope.focVal = 2;
    $scope.intVal = 2;
    $scope.perVal = 2;
    $scope.fate = 2;
    $scope.level = 1;
    $scope.corp = false;
    $scope.kalt = false;
    $scope.legn = false;
    $scope.neph = false;
    $scope.pala = false;
    $scope.remn = false;
    $scope.twif = false;
    $scope.zhou = false;
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
    $scope.pSkillPoints = [];
    $scope.numCombatSkills = 0;
    $scope.combatSkills = {smlArmsFrst:false, smlArmsSec:false, hvyArmsFrst:false, hvyArmsSec:false, tactFrst:false,
        tactSec:false, exoFrst:false, exoSec:false};
    $scope.cSkillPoints = [];
    $scope.numVehicleSkills = 0;
    $scope.vehicleSkills = {cmdFrst:false, cmdSec:false, engFrst:false, engSec:false, operFrst:false, operSec:false,
        gunFrst:false, gunSec:false};
    $scope.vSkillPoints = [];

    //Functions below
    $scope.resetStates = function () {
        $scope.totalAttr = 18 - 12;
        $scope.strVal = 2;
        $scope.rfxVal = 2;
        $scope.movVal = 2;
        $scope.focVal = 2;
        $scope.intVal = 2;
        $scope.perVal = 2;
        $scope.fate = 2;
        $scope.resources = 2 + $scope.level;
        $scope.currentRes = $scope.resources;
        $scope.influence = 2 + $scope.level;
        $scope.currentInf = $scope.influence;

        $scope.lang = ["Corp"];

        for (var i = 0; i < 16; i++) {
            $scope.pSkillPoints[i] = -2;
            if (i < 4) {
                $scope.cSkillPoints[i] = -2;
                $scope.vSkillPoints[i] = -2;
            }
        }

        $scope.primarySkills.wealth = false;
        $scope.primarySkills.conversation = false;
        $scope.primarySkills.leadership = false;
        $scope.primarySkills.culture = false;
        $scope.primarySkills.physical = false;
        $scope.primarySkills.resolve = false;
        $scope.primarySkills.awareness = false;
        $scope.primarySkills.survival = false;
        $scope.primarySkills.mechanics = false;
        $scope.primarySkills.electronics = false;
        $scope.primarySkills.programming = false;
        $scope.primarySkills.bio_tech = false;
        $scope.primarySkills.medicine = false;
        $scope.primarySkills.psychology = false;
        $scope.primarySkills.astronomy = false;
        $scope.primarySkills.planetoids = false;

        $scope.combatSkills.smlArmsSec = false;
        $scope.combatSkills.hvyArmsSec = false;
        $scope.combatSkills.tactSec = false;
        $scope.combatSkills.exoSec = false;

        $scope.vehicleSkills.cmdSec = false;
        $scope.vehicleSkills.engSec = false;
        $scope.vehicleSkills.operSec = false;
        $scope.vehicleSkills.gunSec = false;

        $scope.corp = false;
        $scope.kalt = false;
        $scope.legn = false;
        $scope.neph = false;
        $scope.pala = false;
        $scope.remn = false;
        $scope.twif = false;
        $scope.zhou = false;
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
        $scope.resetStates();

        if ($scope.selectedRace === "Corporation") {
            $scope.corp = true;
            $scope.strVal = $scope.strVal - 2;
            $scope.fate = $scope.fate - 1;
            $scope.resources = $scope.resources + 2;
            $scope.influence = $scope.influence + 2;
            $scope.pSkillPoints[0]++;
            $scope.cSkillPoints[2]++;
            $scope.vSkillPoints[2]++;
            //Insert complication for Kaltorans
        }
        else if ($scope.selectedRace === "Kaltoran") {
            $scope.kalt = true;
            $scope.fate = $scope.fate + 1;
            for (var i = 1; i < 16; i++) {
                $scope.pSkillPoints[i] = -1;
            }
            $scope.pSkillPoints[0]--;
            $scope.pSkillPoints[6]++;
            $scope.cSkillPoints[0]++;
            $scope.vSkillPoints[0]++;
            //Insert complication for Corporates
        }
        else if ($scope.selectedRace === "Legion") {
            $scope.legn = true;
            $scope.movVal = $scope.movVal - 2;
            $scope.pSkillPoints[5]++;
            $scope.cSkillPoints[1]++;
            $scope.vSkillPoints[3]++;
            $scope.lang.push("Legion");
            //Additional complications need to be considered
        }
        else if ($scope.selectedRace === "Nephilim") {
            $scope.neph = true;
            $scope.pSkillPoints[11]++;
            $scope.pSkillPoints[1]--;
            $scope.pSkillPoints[3] = $scope.pSkillPoints[3] - 2;
            $scope.cSkillPoints[3]++;
            $scope.vSkillPoints[1]++;
            //Insert complication for Kaltorans and Legion
        }
        else if ($scope.selectedRace === "Palantor") {
            //You are a robot!
            //Gain a professional skill, Secret Knowledge or moderate Perk
            //Max int at 3
            $scope.pala = true;
            $scope.pSkillPoints[10]++;
            $scope.cSkillPoints[2]++;
            $scope.vSkillPoints[1]++;
            $scope.pSkillPoints[12] = $scope.pSkillPoints[12] - 2;
            $scope.lang.push["Palantor Code"];
            //Add complications around psycological condition and Remnant
        }
        else if ($scope.selectedRace === "Remnant") {
            $scope.remn = true;
            $scope.totalAttr = $scope.totalAttr + 2;
            $scope.pSkillPoints[13]++;
            $scope.cSkillPoints[0]++;
            $scope.vSkillPoints[3]++;
            $scope.lang.push("Ursai");
            //Need race maxes to reflex and perception
            //Complications from Corporation and Legion
            //Other tweaks need to summarized in race info tag or something
        }
        else if ($scope.selectedRace === "Twi-Far") {
            $scope.twif = true;
            $scope.pSkillPoints[14]++;
            $scope.cSkillPoints[1]++;
            $scope.vSkillPoints[0]++;
            $scope.vSkillPoints[2]++;
            $scope.lang.push("Twilinger");
            //A lot of race information needs to be handed off
        }
        else if ($scope.selectedRace === "Zhou") {
            $scope.zhou = true;
            $scope.pSkillPoints[4]++;
            $scope.pSkillPoints[7]++;
            $scope.cSkillPoints[3]++;
            $scope.pSkillPoints[9] = Scope.pSkillPoints[9] - 2;
            $scope.pSkillPoints[10] = $scope.pSkillPoints[10] - 2;
            //Complication from Nephilim
            //A lot of race information needs to be handed off
        }
    };

    //Test bed section for functions
    $scope.primarySkillList = {
        wealth: ["Finance", "Money", "Macroeconomics", "Contracts", "Trade"],
        conversation: ["Diplomacy", "Rumours", "High Society", "Inquiry", "Deception (acting)"],
        leadership: ["Command", "Interrogation", "Oratory", "Intimidation", "Teamwork"],
        culture: ["Customs (language)", "Governments and Organizations", "Legalese (bureaucratic/legal)", "Ideologies", "Archaeology (history)"],
        physical: ["Resilience", "Athletics", "Acrobatics", "Endurance", "Brawn"],
        resolve: ["Bravery", "Conviction", "Self-reflection", "Perseverance", "Psionics"],
        awareness: ["Seeing", "Hearing", "Insight", "Searching", "Investigation"],
        survival: ["Survival", "Salvaging", "Improvising", "Cooking", "Tracking"]
    };
    $scope.professionalSkillList = {
        mechanics: ["Mechanical Engineering","Hydraulics", "Chemical Engineering", "Architecture"],
        electronics: ["Digital Electronics", "Electrical Engineering", "Applied Physics", "Telecommunications", "Optics"],
        programming: ["Software Engineering", "Hacking", "Artificial Intelligence", "Security Systems", "Datastream"],
        bio_tech: ["Genetic Engineering", "Bio-Weaponry", "Biological Systems", "Bio-Chemistry", "Augmentation"],
        medicine: ["Medical Care", "Pharmacology", "Surgery", "Physiotherapy", "Anatomy"],
        psychology: ["Psionchology", "Psychology", "Psychiatry", "Synaptronics", "Behavioural Science"],
        astronomy: ["Navigation", "Cosmology", "Ley Lines", "Stellar Science", "Gravitation"],
        planetoids: ["Flora and Fauna", "Geology", "Meteorology", "Ecosystems", "Magnets"]
    };
    $scope.combatSkillList = {
        smallArms: ["Pistols", "Sub-machine Guns", "Rifles", "Assault Rifles", "Shotguns"],
        heavyArms: ["Grenades", "Grenade Launchers", "Satchels", "Cannons", "Auto Cannons", "Chemical Throwers"],
        tactical: ["Your Mind", "Targeting Lasers", "Tactical Computers", "Turrets", "Swarm Drones", "Combat Drones", "Assault Drones", "Electro-Gravity Gauntlets", "Disruptor Rifles"],
        exotic: ["Melee", "Prototype", "Other"]
    };
    $scope.vehicleSkillList = {
        command: ["Boarding Parties", "Bomber Squads", "Combat Squads", "Sentries"],
        engineering: ["Shields", "Power Systems", "Repair"],
        operations: ["Swarm Warheads", "Missiles", "Rockets", "Torpedoes", "Mines"],
        gunnery: ["Point Defenses", "Blasters", "Burst Batteries", "Artillery"]
    };
});
