/* jshint -W117, -W030 */
describe('GeneratorController', function() {
    var controller;

    beforeEach(function() {
        bard.appModule('app.generator');
        bard.inject('$controller', '$log', '$q', '$rootScope', '$location');
    });

    beforeEach(function () {
        controller = $controller('GeneratorController');
    });

    describe('Generator controller', function() {
        it('should be created successfully', function () {
            expect(controller).to.be.defined;
        });

        describe('after activate', function() {
            it('should have title of Generator', function () {
                expect(controller.title).to.equal('Generator');
            });

            it('should generate a url', function () {
                controller.generate('Chris', 'broke the build');
                expect(controller.url).to.match(/Chris\/broke the build/);
            });

            it('should generate the base url', function() {
                expect(controller.path).to.equal('http://server');
            });
        });
    });
});
