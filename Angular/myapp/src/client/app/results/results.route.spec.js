/* jshint -W117, -W030 */
describe('results routes', function () {
    describe('state', function () {
        var view = 'app/results/results.html';
        var url = '/results/Chris/Has%20broke%20the%20build';
        beforeEach(function() {
            module('app.results', bard.fakeToastr);
            bard.inject('$httpBackend', '$location', '$rootScope', '$state', '$templateCache');
        });

        beforeEach(function() {
            $templateCache.put(view, '');
        });

        it('should map state results to url /results ', function() {
            expect($state.href('results', {name: 'Chris',
                description: 'Has broke the build'})).to.equal(url);
        });

        it('should map /results route to results View template', function () {
            expect($state.get('results').templateUrl).to.equal(view);
        });

        it('of results should work with $state.go', function () {
            $state.go('results');
            $rootScope.$apply();
            expect($state.is('results'));
        });
    });
});
