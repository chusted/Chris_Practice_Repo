(function () {
    'use strict';

    angular
        .module('app.dashboard')
        .controller('DashboardController', DashboardController);

    DashboardController.$inject = ['$location', 'logger'];
    /* @ngInject */
    function DashboardController($location, logger) {
        var vm = this;

        vm.description = '';
        vm.name = '';
        vm.title = 'Dashboard';
        vm.url = '';
        vm.path = path();

        vm.generate = generate;

        activate();

        function activate() {
            logger.info('Activated Dashboard View');
        }

        function generate(inputName, inputDescription) {
            logger.info('inside generate');
            vm.url = '/admin/' + inputName + '/' + inputDescription;
            logger.info(vm.url);
        }

        function path() {
            logger.info('inside path');
            return $location.absUrl().substr(0, $location.absUrl().length - 1);
        }
    }
})();
