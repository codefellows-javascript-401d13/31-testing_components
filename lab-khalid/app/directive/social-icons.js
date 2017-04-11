'use strict';

require('./_social-icons.scss');

module.exports = function(){
  return {
    restrict: 'EAC',
    template: require('./social-icons.html'),
    controller: ['$log', SocialIconController],
    bindToController: true,
    controllerAs: 'socialIconCtrl',
    scope: {
      tester: '@'
    }
  };
};

function SocialIconController() {
  this.icons = ['fb', 'google', 'pin'];
}