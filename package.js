// package metadata file for Meteor.js
var packageName = 'swiper:swiper'; // https://atmospherejs.com/swiper/swiper
var where = ''; // where to install: 'client' or 'server'. For both, pass nothing.
var version = "2.7.5";

Package.describe({
  "name": packageName,
  "summary": 'iDangero.us Swiper (official) - lightweight mobile touch slider, hardware accelerated transitions.',
  "version": version,
  "git": 'https://github.com/MeteorPackaging/Swiper.git'
});

Package.onUse(function (api) {
  api.versionsFrom(['METEOR@0.9.0', 'METEOR@1.0']);
  
  api.addFiles([
    "dist/idangerous.swiper.css",
    "dist/idangerous.swiper.min.js",
    ], ["client"]
  );

  api.export('Swiper');
});

Package.onTest(function (api) {
  api.use(packageName, where);
  api.use('tinytest', where);
  api.addFiles('meteor/test.js', where);
});