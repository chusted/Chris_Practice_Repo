(function () {
    'use strict';

    angular
        .module('app.generator')
        .controller('GeneratorController', GeneratorController);

    GeneratorController.$inject = ['$location', 'logger'];
    /* @ngInject */
    function GeneratorController($location, logger) {
        var vm = this;

        vm.description = '';
        vm.name = '';
        vm.title = 'Generator';
        vm.url = '';
        vm.path = path();

        vm.generate = generate;

        activate();

        function activate() {
            logger.info('Activated Generator View');
        }

        function generate(inputName, inputDescription) {
            logger.info('inside generate');
            vm.url = '/results/' + inputName + '/' + inputDescription;
            logger.info(vm.url);
        }

        function path() {
            logger.info('inside path');
            return $location.absUrl().substr(0, $location.absUrl().length - 1);
        }
    }
})();
