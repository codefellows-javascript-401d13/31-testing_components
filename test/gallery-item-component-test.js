'use strict';

describe('FRONT END GALLERY ITEM COMPONENT TESTING =======', function() {
  beforeEach(() => {
    angular.mock.module('cfgram');
    angular.mock.inject(($rootScope, $componentController, $httpBackend, authService) => {
      this.$rootScope = $rootScope;
      this.$httpBackend = $httpBackend;
      this.$componentController = $componenController;
      this.authService = authService;
    })
  });

  describe('galleryItemCtrl.deleteDone (Show Edits Basically)', () => {
    it('should successfully call this function', () => {
      let mockBindings = {
        gallery: {
          _id: 'magic mike',
          name: 'galleryz',
          desc: 'oh sh*t! itz dat gallery bruh!',
          pics: []
        },

        deleteDone: function(data) {
          expect(data.galleryData._id).toEqual('magic mike');
        }
      };

      let galleryItemCtrl = this.$componenController('galleryItem', null, mockBindings);
      galleryItemCtrl.deleteDone({galleryData: galleryItemCtrl.gallery});

      this.$rootScope.$apply();
    });
  });

  it('should call the deleteDone function with a gallery after the galleryDelete', () => { // naming convention of these two functions and their functionality is confusing
    let url = `${__API_URL__}`; // recall saying this will work, will run tests to confirm
    let headers = {
      Authorization: 'Bearer test token', // wont work unless auth services tests have already been set up first.
      Accept: 'application/json, text/plain, */*' // bruh why accept changing up on me
    };

    let mockBindings = {
      gallery: {
        _id: 'magic mike',
        name: 'galleryz',
        desc: 'oh sh*t! itz dat gallery bruh!',
        pics: []
      },
      deleteDone: function(data) {
        expect(data.galleryData._id).toEqual(mockBindings.gallery._id);
      }
    }

    this.$httpBackend.expectDELETE(url, headers).respond(204);

    let galleryItemCtrl = this.$componentController('galleryItem', null, mockBindings);
    galleryItemCtrl.deleteGallery();

    this.$httpBackend.flush();
    this.$rootScope.$apply();
  });
})
