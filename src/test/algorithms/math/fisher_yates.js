'use strict';

const math = require('../../..').Math;
const fisherYates = math.fisherYates;
const assert = require('assert');

describe('Fisher-Yates', () => {
  it('should shuffle the elements in the array in-place', () => {
    const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    fisherYates(a);
    assert.notDeepEqual(a, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  describe('should be able to be used as Array.suffle', () => {
    const a = [1, 2, 3, 4, 5];
    assert.equal(a.shuffle, undefined);
    /* eslint-disable no-extend-native */
    Array.prototype.shuffle = function() {
      fisherYates(this);
    };
    /* eslint-enable no-extend-native */
    a.shuffle();
    assert.notDeepEqual(a, [1, 2, 3, 4, 5]);
  });
});

