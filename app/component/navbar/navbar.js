'use strict';

require('./navbar.scss');

module.exports = {
  template: require('./navbar.html');
  controller: ['$log', '$location', '$rootScope', 'authService', NavbarController];
  controllerAs: 'navbarCtrl'
};

function NavbarController($log, $location, $rootScope, authService) {
  $log.debug('NavbarController');

  this.checkPath = function() {
    $log.debug('NavbarController.checkPath');

    let path = $location.path();
    if (path === '/join') {
      this.hidebuttons = true;
    }

    if (path !== '/join') {
      this.hideButtons = false;
      authService.getToken()
      .catch( err => {
        $location.url('/join#login');
      })
    }
  };

  this.checkPath();

  $rootScope.$on('$locationChangeSuccess', () => {
    this.checkPath();
  })

  this.logout = function() {
    $log.log('navbarCtrl.logout');

    this.hidebuttons = true;
    authService.logout()
    .then( () => {
      $location.url('/');
    })
  };
};
