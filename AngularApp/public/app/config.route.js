(function () {
    'use strict';

    angular
        .module('angularApp')
        .config(routeConfig);

    /*@ngInject*/
    function routeConfig($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/index.html',
                controller: 'Index',
                controllerAs: 'index'
            })
            .otherwise({
                redirectTo: '/'
            });
    }
})();
