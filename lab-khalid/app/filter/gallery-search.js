'use strict';

module.exports = function(){

  return function( galleries, searchTerm){
    let fuzzyRegexp = genFuzzyRegex(searchTerm);

    return galleries.filter( gallery => {
      return fuzzyRegexp.test(gallery.name.toUpperCase());
    });
  };
};


  
function genFuzzyRegex(input){
  if(!input) return /.*/;
  let fuzzyString = '.*'+ input.toUpperCase().split('').join('.*') + '.*';
  return new RegExp(fuzzyString);
}


