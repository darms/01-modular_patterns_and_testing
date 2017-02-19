'use strict';

const greet = require('./lib/greet.js');
const assert = require('assert');

descirbe('Wassup Module', function() {
  describe('#holla', function(){
    it('should return hello darcy!', function(){
      var endResult = greet.holla('darcy');
    });
  });
});
