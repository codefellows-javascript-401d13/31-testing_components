'use strict';

describe('WE IN THE GALLERY COMPONENT TEST BABY BAYYBAYY', function() => {

  beforeEach(() => {
    angular.mock.module('cfgram');
    angular.mock.inject(($rootScope, $componentController, $httpBackend, authService) => {
      this.$rootScope = $rootScope;
      this.$componentController = $componentController;
      this.$httpBackend = $httpBackend;
      this.authService = authService;
    })
  });

  it('SHOULD BIND THAT SEXY SONOFABISH', () => {
    let mockBindings = {
      gallery: {
        name: 'TO THE WINDOWWWWWW',
        desc: 'TO THE WAAAAALLLLL'
      }
    };

    let editGalleryCtrl = this.$componentController('editGallery', null, mockBindings);
    expect(editGalleryCtrl.gallery.name).toEqual(mockBindings.gallery.name);
    expect(editGalleryCtrl.gallery.desc).toEqual(mockBindings.gallery.desc);

    this.$rootScope.$apply();
  })

  describe('editGalleryCtrl.updateGallery()', () => {
    it('happy tests for a newly updated gallery mayne', () => {
      let url = 'http://localhost:8000/api/gallery/12345',
      let headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer this token'
      };

      this.$httpBackend.expectPUT(url, {
        _id: '12345',
        name: 'DIS A NEW NAME',
        desc: 'DIS A NEW DESCRIPTION'
      }, headers).respond(200);

      let mockBindings = {
        gallery: {
          _id: '12345',
          name: 'DIS A NEW NAME',
          desc: 'DIS A NEW DESCRIPTION'
        },
      };

      let editGalleryCtrl = this.$componentController('editGallery', null, mockBindings);
      editGalleryCtrl.gallery.name = 'DIS A NEW NAME';
      editGalleryCtrl.gallery.desc = 'DIS A NEW DESCRIPTION';
      editGalleryCtrl.updateGallery();
      // TODO: AYYYY THROW SOME TESTS UP IN THIS BISH

      this.$httpBackend.flush();
      this.$rootScope.$apply();
    })
  })
})
