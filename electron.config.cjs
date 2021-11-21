module.exports = {
  appId: 'com.electron.organizr',
  productName: 'Organizr',
  directories: {
    output: 'dist',
  },
  files: [
    'src/electron.cjs',
    {
      from: 'build',
      to: '',
    },
  ],
};
