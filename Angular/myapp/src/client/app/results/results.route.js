(function() {
    'use strict';

    angular
        .module('app.results')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'results',
                config: {
                    url: '/results/:name/:description',
                    templateUrl: 'app/results/results.html',
                    controller: 'ResultsController',
                    controllerAs: 'vm',
                    title: 'Results',
                    settings: {
                        content: '<i class="fa fa-lock"></i> Results'
                    }
                }
            }
        ];
    }
})();
