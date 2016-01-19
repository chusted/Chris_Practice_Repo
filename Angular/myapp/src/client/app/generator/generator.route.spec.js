/* jshint -W117, -W030 */
describe('generator routes', function () {
    describe('state', function () {
        var view = 'app/generator/generator.html';

        beforeEach(function() {
            module('app.generator', bard.fakeToastr);
            bard.inject('$httpBackend', '$location', '$rootScope', '$state', '$templateCache');
        });

        beforeEach(function() {
            $templateCache.put(view, '');
        });

        bard.verifyNoOutstandingHttpRequests();

        it('should map state generator to url / ', function() {
            expect($state.href('generator', {})).to.equal('/');
        });

        it('should map /generator route to generator View template', function () {
            expect($state.get('generator').templateUrl).to.equal(view);
        });

        it('of generator should work with $state.go', function () {
            $state.go('generator');
            $rootScope.$apply();
            expect($state.is('generator'));
        });
    });
});
