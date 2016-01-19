(function () {
    'use strict';

    angular
        .module('app.results')
        .controller('ResultsController', ResultsController);

    ResultsController.$inject = ['$stateParams', 'logger'];
    /* @ngInject */
    function ResultsController($stateParams, logger) {
        var vm = this;

        vm.title = 'Results';
        vm.name = $stateParams.name;
        vm.description = $stateParams.description;

        activate();

        function activate() {
            logger.info('Activated Results View');
        }
    }
})();
