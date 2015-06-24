import faComponent from './faComponent';
import faContainer from './faContainer';

var script = document.createElement('script');
script.src =  'https://assets-te.famo.us/embed/embed.js';
document.body.appendChild(script);

module.exports = {
  faComponent: faComponent,
  faContainer: faContainer,
};
