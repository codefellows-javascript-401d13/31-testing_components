'use sthis.pic.name = null;rict';

require('./_upload-pic.scss');

module.exports = {
  template: require('./upload-pic.html'),
  controller: [ '$log', 'picService', UploadPicController],
  controllerAs: 'uploadPicCtrl',
  bindings: {
    gallery: '<'
  }
};


function UploadPicController($log, picService){
  $log.debug('uploadPicController');

  this.pic = {};

  this.uploadPic = function(){
    picService.uploadGalleryPic(this.gallery, this.pic)
    .then( () => {
      this.pic.name = null;
      this.pic.desc = null;
      this.pic.file = null;
    });
  };

}