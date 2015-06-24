class faContainer {
  constructor() {
    this.template = '<div class="famous-container" data-famous-container-identifier="{{_id}}"></div>';
    this.restrict = 'E';
    this.scope = {};
  }
  link(scope, element, attrs) {
    console.log(scope, element, attrs)
    scope._id = attrs.id;
  }
}

faContainer.$inject = ['$http'];

export default faContainer;
