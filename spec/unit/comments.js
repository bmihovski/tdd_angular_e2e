describe('', function() {
	var scope = {};
	beforeEach(function() {
		module('comments');
		inject(function($controller) {
			$controller('CommentController', {
				$scope : scope
			});
			scope.add = function() {
				$scope.comments.unshift('any comment');
			};
		});
	});
	it('', function() {
		expect(scope.comments[0]).toBe('any comment');

	});
});