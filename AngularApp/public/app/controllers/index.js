
(function () {
    'use strict';

    angular
      .module('angularApp')
      .controller('Index', Index);

    /**
      * @ngdoc controller
      * @name angularApp.controller:Index
      * @description
      *
      */
    /*@ngInject*/
    function Index() {
        var vm = this;

        // PUBLIC PROPERTIES
        vm.title = 'The Index';


        // PUBLIC FUNCTIONS
        vm.doSomething = doSomething;


        // init
        activate();


        //
        // PRIVATE FUNCTIONS

        function activate() { }

        function doSomething() { }
    }
})();
