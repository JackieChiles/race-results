'use strict';

var app = angular.module('RaceResultsApp', ['ngAnimate', 'ngTouch', 'ui.grid']);

app.controller('RaceResultsController', function ($scope, uiGridConstants) {
    $scope.gridOptions = {
        enableSorting: true,
        enableColumnResizing: true,
        enableFiltering: true,
        enableGridMenu: true,
        columnDefs: [
            { field: 'name' },
            { field: 'gender' }
        ],
        data: [
            {
                "name": "Alan Albertson",
                "gender": "male"
            },
            {
                "name": "Betty Brooks",
                "gender": "female"
            },
            {
                "name": "Carl Colander",
                "gender": "male"
            }
        ]
    };
});