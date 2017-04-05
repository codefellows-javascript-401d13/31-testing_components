![cf](https://i.imgur.com/7v5ASc8.png) Lab 31 - Testing Components
======

## To Submit this Assignment
  * work on a new branch from your previous fork
  * push to your repository
  * submit a pull request to this repository
  * submit a link to your PR in canvas
  * write a question and observation on canvas

## Include
  * `.eslintrc`
  * `.babelrc`
  * `.gitignore`
  * `package.json`
    * create an npm `build` script for running `webpack`
    * create an npm `build-watch` script for running `webpack-dev-server --inline --hot`
    * create an npm `test` script for running karma and all associated tests
    * create an npm `test-watch` script for running karma on file system changes
    * create an npm `lint` script for linting your JS with `eslint`
  * **ignore the build directory**
  * `webpack.config.js`
    * this should include all of the production environment configurations used in lecture code
  * `karma.config.js`

## Description
  * Create a series of tests for deleting a gallery
  * Write a series of tests for each method on your `edit-gallery` component
  * Write a series of tests for each method on your `gallery-item` component
  * **Note:** Be creative with your tests - there is no minimum or maximum number of tests required for this assignment as long as realistic tests have been created for each method on each component
