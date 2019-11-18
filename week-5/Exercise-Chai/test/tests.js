var chai = require('chai');
var should = require('chai').should();
var expect = chai.expect;
var BMI = require('../exercise.js');

describe('BMI tests', function(){
    it('should return 24.9 if the  weight is 90 and the height 1.9', function(){
        var height = 1.9;
        var weight = 90;

        var expected = 24.9;
        var actual = BMI(height, weight);

        actual.should.equal(expected);
    })
})