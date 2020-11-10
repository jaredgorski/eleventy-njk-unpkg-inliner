function unpkgInliner(path) {
  const url = 'https://unpkg.com/' + path;
  return new Promise((resolve, reject) => {
    require('https').get(url, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        data = data.toString('utf8').trim();

        if ((/^Cannot find package/).test(data)) {
          reject(new Error(data));
        }

        resolve(data);
      });
    }).on('error', (e) => {
      throw new Error(e);
    });
  });
}

module.exports = unpkgInliner;
