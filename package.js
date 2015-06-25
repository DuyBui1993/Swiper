// package metadata file for Meteor.js
var packageName = 'swiper:swiper'; // https://atmospherejs.com/swiper/swiper
var where = ''; // where to install: 'client' or 'server'. For both, pass nothing.
var version = '3.0.8';

Package.describe({
  'name': packageName,
  'summary': 'iDangero.us Swiper (official) - lightweight mobile touch slider, hardware accelerated transitions.',
  'version': version,
  'git': 'https://github.com/MeteorPackaging/Swiper.git'
});

Package.onUse(function (api) {
  api.versionsFrom('1.1.0.2');
  
  api.addFiles([
    'dist/css/swiper.min.css',
    'dist/js/swiper.js'
    ], ['client']
  );

  api.export('Swiper');
});

Package.onTest(function (api) {
  api.use(packageName, where);
  api.use('tinytest', where);
  api.addFiles('meteor/test.js', where);
});