angular.module('comments').controller('CommentController',
		[ '$scope', function($scope) {
			$scope.comments = [];
			$scope.add = function(commentToAdd) {
				$scope.comments.unshift(commentToAdd);
			};
		} ]);