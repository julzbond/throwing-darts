var chai = require('chai');
var expect = chai.expect;
var should = chai.should();

var scoreThrows = require ('../throwingdarts.js');

describe ("scoreThrows", function(){

  it('should be a function', function(){
    expect(scoreThrows).to.be.a('function');
  })

  it('should return the correct number of points', function(){
    expect(scoreThrows([1, 5, 11])).to.equal(15);
  });

});