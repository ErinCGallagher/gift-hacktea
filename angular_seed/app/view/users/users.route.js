(function (){
    'use strict';

    var routerApp = angular.module('faver.users');
    routerApp.config(function($stateProvider, $urlRouterProvider) {
    
    //$urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('users', {
            url: '/users',
            templateUrl: 'app/view/users/users.html',
            controller: 'UsersController',
            controllerAs: 'vm'
        })
     
});
    
})();