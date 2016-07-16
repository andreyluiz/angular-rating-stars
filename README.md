# angular-rating-stars
A simple Angular JS directive to show star ratings.

## Usage

1) Install via bower:

`bower install angular-rating-stars --save`

2) Add it to your `index.html`:

`<script src="bower_components/angular-rating-stars/angular-rating-stars.js"></script>`

3) Register the dependency in the desired angular module:

`angular.module('myApp', ['rating-stars']);`

4) Use it:

`<rating-stars rating="rating" max-rating="maxRatingNumber"></rating-stars>`

## Result with rating of 4.5

![](http://i.imgur.com/8yGvw54.png)

## Advice
A half star takes from 0.1 to 0.9. So, the 4.1 rating will still show as the result above.
