import {faComponent, faContainer} from './lib/directives';

require('./lib/embed');

angular
  .module('ngFamous', [])
  .directive('faComponent', function() {
    return new faComponent();
  })
  .directive('faContainer', function() {
    return new faContainer();
  });
