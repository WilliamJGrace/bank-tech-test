module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'src/*.js',
      'spec/*.js'
    ],
    plugins: [
          'karma-jasmine',
          'karma-coverage',
          'karma-chrome-launcher'

      ],
    browsers: ['Chrome'],
    singleRun: true,
    reporters: ['progress', 'coverage'],
    preprocessors: { 'src/*.js': ['coverage'] },
    coverageReporter: {
            includeAllSources: true,
            dir: 'coverage/',
            reporters: [
                { type: 'html', subdir: 'html' },
                { type: 'text-summary' }
              ]
            }
            })
};
