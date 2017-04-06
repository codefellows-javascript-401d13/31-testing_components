'use strict';

describe( 'Edit gallery component test', function(){

  beforeEach( () => {
    angular.mock.module('cfgram');
    angular.mock.inject(($rootScope, $componentController, $httpBackend, authService) => {
      this.$rootScope = $rootScope;
      this.$componentController = $componentController;
      this.$httpBackend = $httpBackend;
      this.authService = authService;
    });
  });

  it('should contain the proper component binding', () => {
    let mockBinding = {
      gallery: {
        name: 'test name gallery',
        desc: 'test gallery description'
      }
    };

    let editGalleryCtrl = this.$componentController('editGallery', null, mockBinding);
    expect(editGalleryCtrl.gallery.name).toEqual(mockBinding.gallery.name);
    expect(editGalleryCtrl.gallery.desc).toEqual(mockBinding.gallery.desc);

    this.$rootScope.$apply();
  });

  describe('editGalleryController.updateGallery', () => {
    it('should make a valid put request', ()=> {
      let url = 'http://localhost:8088/api/gallery/12345';
      let headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer test token'
      };

      this.$httpBackend.expectPUT(url, {
        _id: '12345',
        name: 'updated name',
        desc: 'updated desc'
      }, headers).respond(200);

      let mockBinding = {
        gallery: {
          _id: '12345',
          name: 'updated name',
          desc: 'updated description'
        }
      };

      let editGalleryCtrl = this.$componentController('editGallery', null, mockBinding);
      editGalleryCtrl.gallery.name = 'updated name';
      editGalleryCtrl.gallery.desc = 'updated desc';
      editGalleryCtrl.updateGallery();
      this.$httpBackend.flush();
      this.$rootScope.$apply();

    });
  });
});
