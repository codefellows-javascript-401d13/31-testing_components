'use strict';

require('./scss/main.scss');

const
  path = require('path'),
  angular = require('angular'),
  camelcase = require('camelcase'),
  pascalcase = require('pascalcase'),
  uiRouter = require('angular-ui-router'),
  ngTouch = require('angular-touch'),
  ngAnimate = require('angular-animate'),
  ngFileUpload = require('ng-file-upload'),
  uiBootstrap = require('angular-ui-bootstrap'),

  cfgram = angular.module('cfgram', [ngTouch, ngAnimate, uiRouter, ngFileUpload, uiBootstrap]);

let context = require.context('./config/', true, /\.js$/);
// console.log('CONTEXT', context);
context.keys().forEach( key => {
  // console.log('k',key);
  cfgram.config(context(key));
});

context = require.context('./view/', true, /\.js$/);
// console.log('CONTEXT2', context);
context.keys().forEach( key => {
  // console.log('k',key);
  let name = pascalcase(path.basename(key, '.js'));
  let module = context(key);
  cfgram.controller(name, module);
});

context = require.context('./service/', true, /\.js$/);
context.keys().forEach(key => {
  //  console.log('k',key);
  let name = camelcase(path.basename(key, '.js'));
  let module = context(key);
  cfgram.service(name, module);
});

context = require.context('./component', true, /\.js$/);
context.keys().forEach( key => {
   console.log('000000000000000000000000');
  let name = camelcase(path.basename(key, '.js'));
  let module = context(key);
  cfgram.component(name, module);
});

context = require.context('./filter/', true, /\.js$/);
context.keys().forEach( key => {
  let name = camelcase(path.basename(key, '.js'));
  let module = context(key);
  console.log('name is ',name);
  cfgram.filter(name, module);
});

context = require.context('./directive/', true, /\.js$/);
context.keys().forEach( key => {
  let name = camelcase(path.basename(key, '.js'));
  let module = context(key);
  cfgram.directive(name, module);
});