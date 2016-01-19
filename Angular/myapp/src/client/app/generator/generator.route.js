(function() {
    'use strict';

    angular
        .module('app.generator')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'generator',
                config: {
                    url: '/',
                    templateUrl: 'app/generator/generator.html',
                    controller: 'GeneratorController',
                    controllerAs: 'vm',
                    title: 'generator',
                    settings: {
                        content: '<i class="fa fa-generator"></i> Generator'
                    }
                }
            }
        ];
    }
})();
