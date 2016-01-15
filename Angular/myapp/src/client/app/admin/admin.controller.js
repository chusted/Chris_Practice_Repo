(function () {
    'use strict';

    angular
        .module('app.admin')
        .controller('AdminController', AdminController);

    AdminController.$inject = ['$stateParams', 'logger'];
    /* @ngInject */
    function AdminController($stateParams, logger) {
        var vm = this;

        vm.title = 'Admin';
        vm.name = $stateParams.name;
        vm.description = $stateParams.description;


        activate();

        function activate() {
            logger.info('Activated Admin View');
        }
    }
})();
