'use strict';

describe('WE IN THEM AUTH SERVICES BABY', function() {

  beforeEach(() => {
    angular.mock.module('cfgram');
    angular.mock.inject(($rootScope, $httpBackend, $window, authService) => {
      this.$window = $window;
      this.$rootScope = $rootScope;
      this.$httpBackend = $httpBackend;
      this.authService = authService;
    });
  });

  describe('WE GETTING THAT TOKEN BRUH', () => {
    it('happy tests for all! You get a happy test! YOU get a happy test!', () => {
      this.authService.token = null;
      this.$window.localStorage.setItem('token', 'test token');

      authService.getToken()
      .then( token => {
        expect(token).toEqual('test token');
      })
      .catch( err => {
        expect(token).toEqual(null);
      });

      this.$rootScope.$apply();
    })
  })
})
