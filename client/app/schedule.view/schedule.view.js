'use strict';

angular.module('ulyssesApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('schedule.view', {
        url: '/view',
        templateUrl: 'app/schedule.view/schedule.view.html',
        controller: 'ScheduleViewCtrl'
      });
  });
