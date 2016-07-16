angular.module('rating-stars', [])
  .directive('ratingStars', function() {
    return {
      restrict: 'E',
      scope: {
        rating: '=',
        maxRating: '='
      },
      template: '<div ng-bind-html="mountTemplate(rating)"></div>',
      controller: ['$scope', function($scope) {
        function createStarsModel(rating) {
          var ratingStr = rating + '';
          var fullStars = 0;
          var emptyStars = $scope.maxRating;
          var hasHalfStar = false;
          var model = [];
          if (ratingStr.indexOf('.') !== -1) {
            fullStars = parseInt(ratingStr.split('.')[0]);
            hasHalfStar = true;
            emptyStars -= (fullStars + 1); // One more because has one half star.
          } else {
            fullStars = rating;
            emptyStars -= fullStars;
          }
          for (var i = 0; i < fullStars; i++) {
            model.push('*');
          }
          if (hasHalfStar) {
            model.push('~');
          }
          for (var i = 0; i < emptyStars; i++) {
            model.push('-');
          }
          return model;
        }

        function mountTemplate(rating) {
          var template = '';
          var fullStar = '<i class="ion-android-star custom-star"></i>';
          var halfStar = '<i class="ion-android-star-half custom-star"></i>';
          var emptyStar = '<i class="ion-android-star-outline custom-star"></i>';

          var model = createStarsModel(rating);

          for (var i = 0; i < model.length; i++) {
            switch (model[i]) {
              case '*':
                model[i] = fullStar;
                break;
              case '~':
                model[i] = halfStar;
                break;
              default:
                model[i] = emptyStar;
            }
          }

          return model.join('');
        }

        $scope.mountTemplate = mountTemplate;
      }]
    }
  });
