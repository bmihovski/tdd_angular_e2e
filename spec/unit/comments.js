describe('', function() {
	beforeEach(function() {
		module('comments');
		inject(function($controller) {
			$controller('CommentController', {$scope:scope});
			scope.add('any Comment');
		});
	});
	it('', function() {
		expect(scope.comments[0]).toBe('any Comment');

	});
});