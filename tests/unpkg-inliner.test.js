const unpkgInliner = require('../dist');

const IS_POSITIVE_MODULE_DATA = String.raw`
'use strict';

module.exports = function (n) {
	if (typeof n !== 'number') {
		throw new TypeError('Expected a number');
	}

	return n >= 0;
};
`.trim();

describe('eleventy-njk-unpkg-inliner', () => {
  it('should download and return data from a valid unpkg path', async () => {
    const expectedModuleData = IS_POSITIVE_MODULE_DATA;
    const data = await unpkgInliner('is-positive@1.0.0/index.js');

    expect(data).toMatch(expectedModuleData);
  });

  it('should throw error when passed an invalid unpkg path', async () => {
    await expect(async () => {
      await unpkgInliner('zzzz-is-very-invalid-zzzz');
    })
      .rejects
      .toThrow();
  });
});
