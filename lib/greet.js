'use strict';

module.exports = exports = {};

exports.holla = function (name) {
  if (arguments.length === 0) throw new Error ('No name found here');
  console.log(`hello ${name}.`);
};
 exports.adieu = function (){
   console.log('see ya later!');
 };
