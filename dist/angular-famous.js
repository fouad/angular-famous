/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _libDirectives = __webpack_require__(1);

	__webpack_require__(4);

	angular.module('ngFamous', []).directive('faComponent', function () {
	  return new _libDirectives.faComponent();
	}).directive('faContainer', function () {
	  return new _libDirectives.faContainer();
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _faComponent = __webpack_require__(2);

	var _faComponent2 = _interopRequireDefault(_faComponent);

	var _faContainer = __webpack_require__(3);

	var _faContainer2 = _interopRequireDefault(_faContainer);

	var script = document.createElement('script');
	script.src = 'https://assets-te.famo.us/embed/embed.js';
	document.body.appendChild(script);

	module.exports = {
	  faComponent: _faComponent2['default'],
	  faContainer: _faContainer2['default']
	};

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var faComponent = function faComponent() {
	  _classCallCheck(this, faComponent);

	  this.template = '<div>hello from best component</div>';
	  this.restrict = 'E';
	  this.scope = {};
	};

	faComponent.$inject = [];

	exports['default'] = faComponent;
	module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var faContainer = (function () {
	  function faContainer() {
	    _classCallCheck(this, faContainer);

	    this.template = '<div class="famous-container" data-famous-container-identifier="{{_id}}"></div>';
	    this.restrict = 'E';
	    this.scope = {};
	  }

	  _createClass(faContainer, [{
	    key: 'link',
	    value: function link(scope, element, attrs) {
	      console.log(scope, element, attrs);
	      scope._id = attrs.id;
	    }
	  }]);

	  return faContainer;
	})();

	faContainer.$inject = ['$http'];

	exports['default'] = faContainer;
	module.exports = exports['default'];

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var require;var require;/* WEBPACK VAR INJECTION */(function(global) {"use strict";

	(function e(t, n, r) {
	  function s(o, u) {
	    if (!n[o]) {
	      if (!t[o]) {
	        var a = typeof require == "function" && require;if (!u && a) return require(o, !0);if (i) return i(o, !0);var f = new Error("Cannot find module '" + o + "'");throw (f.code = "MODULE_NOT_FOUND", f);
	      }var l = n[o] = { exports: {} };t[o][0].call(l.exports, function (e) {
	        var n = t[o][1][e];return s(n ? n : e);
	      }, l, l.exports, e, t, n, r);
	    }return n[o].exports;
	  }var i = typeof require == "function" && require;for (var o = 0; o < r.length; o++) s(r[o]);return s;
	})({ 1: [function (require, module, exports) {
	    "use strict";function copyContainer(e) {
	      return regeneratorRuntime.async(function (_) {
	        for (;;) switch (_.prev = _.next) {case 0:
	            return (_.next = 2, _request2["default"]({ method: _HOST$CONTAINER_BASE_URI$COPY_URI$COPY_METHOD$FAMOUS_USER_HEADER.COPY_METHOD, url: _HOST$CONTAINER_BASE_URI$COPY_URI$COPY_METHOD$FAMOUS_USER_HEADER.HOST + _HOST$CONTAINER_BASE_URI$COPY_URI$COPY_METHOD$FAMOUS_USER_HEADER.CONTAINER_BASE_URI + e + _HOST$CONTAINER_BASE_URI$COPY_URI$COPY_METHOD$FAMOUS_USER_HEADER.COPY_URI, json: !0, headers: _defineProperty({}, _HOST$CONTAINER_BASE_URI$COPY_URI$COPY_METHOD$FAMOUS_USER_HEADER.FAMOUS_USER_HEADER, "foo") }));case 2:
	            return _.abrupt("return", _.sent);case 3:case "end":
	            return _.stop();}
	      }, null, this);
	    }var _interopRequireWildcard = function _interopRequireWildcard(e) {
	      return e && e.__esModule ? e : { "default": e };
	    },
	        _defineProperty = function _defineProperty(e, _, r) {
	      return Object.defineProperty(e, _, { value: r, enumerable: null == _ || "undefined" == typeof Symbol || _.constructor !== Symbol, configurable: !0, writable: !0 });
	    };Object.defineProperty(exports, "__esModule", { value: !0 }), exports["default"] = copyContainer;var _request = require("./request"),
	        _request2 = _interopRequireWildcard(_request),
	        _HOST$CONTAINER_BASE_URI$COPY_URI$COPY_METHOD$FAMOUS_USER_HEADER = require("../config");module.exports = exports["default"];
	  }, { "../config": 15, "./request": 8 }], 2: [function (require, module, exports) {
	    "use strict";function assetURL(e) {
	      var _ = e.block,
	          S = e.version,
	          E = e.filePath;return _ASSETS_HOST$BLOCK_BASE_URI$VERSION_URI$ASSET_URI$FETCH_METHOD.ASSETS_HOST + _ASSETS_HOST$BLOCK_BASE_URI$VERSION_URI$ASSET_URI$FETCH_METHOD.BLOCK_BASE_URI + _ + _ASSETS_HOST$BLOCK_BASE_URI$VERSION_URI$ASSET_URI$FETCH_METHOD.VERSION_URI + S + _ASSETS_HOST$BLOCK_BASE_URI$VERSION_URI$ASSET_URI$FETCH_METHOD.ASSET_URI + "/" + E;
	    }function fetchAsset(e) {
	      var _ = e.block,
	          S = e.version,
	          E = e.path,
	          t = e.name,
	          r = (E + t).replace(/^\//, "");return _request2["default"]({ json: !0, method: _ASSETS_HOST$BLOCK_BASE_URI$VERSION_URI$ASSET_URI$FETCH_METHOD.FETCH_METHOD, url: assetURL({ block: _, version: S, filePath: r }) }).then(function (e) {
	        return { name: r, content: e };
	      });
	    }var _interopRequireWildcard = function _interopRequireWildcard(e) {
	      return e && e.__esModule ? e : { "default": e };
	    };Object.defineProperty(exports, "__esModule", { value: !0 }), exports["default"] = fetchAsset;var _request = require("./request"),
	        _request2 = _interopRequireWildcard(_request),
	        _ASSETS_HOST$BLOCK_BASE_URI$VERSION_URI$ASSET_URI$FETCH_METHOD = require("../config");module.exports = exports["default"];
	  }, { "../config": 15, "./request": 8 }], 3: [function (require, module, exports) {
	    "use strict";function fetchAssets(e) {
	      var t,
	          r = e.assets,
	          s = _objectWithoutProperties(e, ["assets"]);return regeneratorRuntime.async(function (e) {
	        for (;;) switch (e.prev = e.next) {case 0:
	            return (t = r.map(function (e) {
	              return _fetchAsset2["default"](e);
	            }), e.next = 3, Promise.all(t));case 3:
	            return (e.t0 = e.sent, e.abrupt("return", _extends({ assets: e.t0 }, s)));case 5:case "end":
	            return e.stop();}
	      }, null, this);
	    }var _interopRequireWildcard = function _interopRequireWildcard(e) {
	      return e && e.__esModule ? e : { "default": e };
	    },
	        _objectWithoutProperties = function _objectWithoutProperties(e, t) {
	      var r = {};for (var s in e) t.indexOf(s) >= 0 || Object.prototype.hasOwnProperty.call(e, s) && (r[s] = e[s]);return r;
	    },
	        _extends = Object.assign || function (e) {
	      for (var t = 1; t < arguments.length; t++) {
	        var r = arguments[t];for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s]);
	      }return e;
	    };Object.defineProperty(exports, "__esModule", { value: !0 }), exports["default"] = fetchAssets;var _fetchAsset = require("./fetch-asset"),
	        _fetchAsset2 = _interopRequireWildcard(_fetchAsset);module.exports = exports["default"];
	  }, { "./fetch-asset": 2 }], 4: [function (require, module, exports) {
	    "use strict";function fetchContainerBlocks(e) {
	      var t = e.identifier;return _fetchContainer2["default"](t).then(function (e) {
	        var r = e.block,
	            n = e.production_mode;return { container: t, block: r.id, version: r.head.ref, assets: r.head.assets, productionMode: n };
	      });
	    }var _interopRequireWildcard = function _interopRequireWildcard(e) {
	      return e && e.__esModule ? e : { "default": e };
	    };Object.defineProperty(exports, "__esModule", { value: !0 }), exports["default"] = fetchContainerBlocks;var _fetchContainer = require("./fetch-container"),
	        _fetchContainer2 = _interopRequireWildcard(_fetchContainer);module.exports = exports["default"];
	  }, { "./fetch-container": 5 }], 5: [function (require, module, exports) {
	    "use strict";function fetchContainer(e) {
	      var r = { method: _FETCH_METHOD$HOST$CONTAINER_BASE_URI.FETCH_METHOD, url: _FETCH_METHOD$HOST$CONTAINER_BASE_URI.HOST + _FETCH_METHOD$HOST$CONTAINER_BASE_URI.CONTAINER_BASE_URI + e, json: !0 };return _request2["default"](r).then(function (e) {
	        var r = e.container;return r;
	      });
	    }var _interopRequireWildcard = function _interopRequireWildcard(e) {
	      return e && e.__esModule ? e : { "default": e };
	    };Object.defineProperty(exports, "__esModule", { value: !0 }), exports["default"] = fetchContainer;var _request = require("./request"),
	        _request2 = _interopRequireWildcard(_request),
	        _FETCH_METHOD$HOST$CONTAINER_BASE_URI = require("../config");module.exports = exports["default"];
	  }, { "../config": 15, "./request": 8 }], 6: [function (require, module, exports) {
	    "use strict";var request = require("./request"),
	        fetchLocalAsset = function fetchLocalAsset(t, e) {
	      request({ method: "GET", url: "http://localhost:1339/" + e, json: !0, headers: { Accept: "application/json" } }, function (e, s) {
	        e ? t(e) : t(null, s.body);
	      });
	    },
	        fetchAssets = (function (t) {
	      function e() {
	        return t.apply(this, arguments);
	      }return (e.toString = function () {
	        return t.toString();
	      }, e);
	    })(function (t, e) {
	      t = t || "", fetchLocalAsset(function (s, n) {
	        if (n instanceof Array) for (var c = 0; c < n.length; c++) fetchAssets(t ? t + "/" + n[c] : n[c]);else block = { name: t, content: n }, assets.push(block);e && e();
	      }, t);
	    }),
	        fetchAllLocalAssets = function fetchAllLocalAssets(t) {
	      fetchAssets(null, t);
	    };module.exports = fetchAllLocalAssets;
	  }, { "./request": 8 }], 7: [function (require, module, exports) {
	    "use strict";var _interopRequireWildcard = function _interopRequireWildcard(e) {
	      return e && e.__esModule ? e : { "default": e };
	    };Object.defineProperty(exports, "__esModule", { value: !0 });var _copyContainer2 = require("./copy-container"),
	        _copyContainer3 = _interopRequireWildcard(_copyContainer2);exports.copyContainer = _copyContainer3["default"];var _fetchAsset2 = require("./fetch-asset"),
	        _fetchAsset3 = _interopRequireWildcard(_fetchAsset2);exports.fetchAsset = _fetchAsset3["default"];var _fetchAssets2 = require("./fetch-assets"),
	        _fetchAssets3 = _interopRequireWildcard(_fetchAssets2);exports.fetchAssets = _fetchAssets3["default"];var _fetchContainer2 = require("./fetch-container"),
	        _fetchContainer3 = _interopRequireWildcard(_fetchContainer2);exports.fetchContainer = _fetchContainer3["default"];var _fetchContainerBlocks2 = require("./fetch-container-blocks"),
	        _fetchContainerBlocks3 = _interopRequireWildcard(_fetchContainerBlocks2);exports.fetchContainerBlocks = _fetchContainerBlocks3["default"];var _fetchLocal2 = require("./fetch-local"),
	        _fetchLocal3 = _interopRequireWildcard(_fetchLocal2);exports.fetchLocal = _fetchLocal3["default"];var _request2 = require("./request"),
	        _request3 = _interopRequireWildcard(_request2);exports.request = _request3["default"];var _save2 = require("./save"),
	        _save3 = _interopRequireWildcard(_save2);exports.save = _save3["default"];
	  }, { "./copy-container": 1, "./fetch-asset": 2, "./fetch-assets": 3, "./fetch-container": 5, "./fetch-container-blocks": 4, "./fetch-local": 6, "./request": 8, "./save": 9 }], 8: [function (require, module, exports) {
	    "use strict";function request(e) {
	      return new Promise(function (r, t) {
	        var o = _xhr2["default"](e, function (e, o) {
	          var u = o.statusCode,
	              s = o.body;return e ? t(e) : u >= 400 ? t(e) : void r(s);
	        });e.onprogress && (o.onprogress = e.onprogress);
	      });
	    }var _interopRequireWildcard = function _interopRequireWildcard(e) {
	      return e && e.__esModule ? e : { "default": e };
	    };Object.defineProperty(exports, "__esModule", { value: !0 }), exports["default"] = request;var _xhr = require("xhr"),
	        _xhr2 = _interopRequireWildcard(_xhr);module.exports = exports["default"];
	  }, { xhr: 22 }], 9: [function (require, module, exports) {
	    "use strict";function saveConfig(e, _, E) {
	      var r, S;return regeneratorRuntime.async(function (A) {
	        for (;;) switch (A.prev = A.next) {case 0:
	            if (e.length) {
	              A.next = 2;break;
	            }throw new Error("error posting files: none in memory");case 2:
	            return (r = new FormData(), e.forEach(function (e) {
	              e.name !== _HOST$BLOCK_BASE_URI$VERSION_URI$FILES_PARAM$SCHEMA_FILE_NAME.SCHEMA_FILE_NAME && formData.append(_HOST$BLOCK_BASE_URI$VERSION_URI$FILES_PARAM$SCHEMA_FILE_NAME.FILES_PARAM, e.content, e.name);
	            }), formData.append(_HOST$BLOCK_BASE_URI$VERSION_URI$FILES_PARAM$SCHEMA_FILE_NAME.FILES_PARAM, JSON.serialize(_), _HOST$BLOCK_BASE_URI$VERSION_URI$FILES_PARAM$SCHEMA_FILE_NAME.SCHEMA_FILE_NAME), A.prev = 5, A.next = 8, _request2["default"]({ method: "POST", url: _HOST$BLOCK_BASE_URI$VERSION_URI$FILES_PARAM$SCHEMA_FILE_NAME.HOST + _HOST$BLOCK_BASE_URI$VERSION_URI$FILES_PARAM$SCHEMA_FILE_NAME.BLOCK_BASE_URI + E + _HOST$BLOCK_BASE_URI$VERSION_URI$FILES_PARAM$SCHEMA_FILE_NAME.VERSION_URI, headers: { "Content-Type": "application/json", "X-FAMOUS-USER-ID": "1" }, body: r, onprogress: function onprogress(e) {
	                return console.log(e);
	              } }));case 8:
	            S = A.sent, console.log("Ref saved: ", S), A.next = 15;break;case 12:
	            A.prev = 12, A.t1 = A["catch"](5), console.error("there was an error saving the ref");case 15:case "end":
	            return A.stop();}
	      }, null, this, [[5, 12]]);
	    }var _interopRequireWildcard = function _interopRequireWildcard(e) {
	      return e && e.__esModule ? e : { "default": e };
	    };Object.defineProperty(exports, "__esModule", { value: !0 }), exports["default"] = saveConfig;var _request = require("./request"),
	        _request2 = _interopRequireWildcard(_request),
	        _HOST$BLOCK_BASE_URI$VERSION_URI$FILES_PARAM$SCHEMA_FILE_NAME = require("../config"),
	        BASE_URI = _HOST$BLOCK_BASE_URI$VERSION_URI$FILES_PARAM$SCHEMA_FILE_NAME.HOST + _HOST$BLOCK_BASE_URI$VERSION_URI$FILES_PARAM$SCHEMA_FILE_NAME.BLOCK_BASE_URI;module.exports = exports["default"];
	  }, { "../config": 15, "./request": 8 }], 10: [function (require, module, exports) {
	    "use strict";function addContainerToComlink(e) {
	      var o = e.el,
	          i = e.identifier;window.famouscomlink || (window.famouscomlink = new _Comlink2["default"]()), window.famouscomlink.addContainer(o, i);
	    }var _interopRequireWildcard = function _interopRequireWildcard(e) {
	      return e && e.__esModule ? e : { "default": e };
	    };Object.defineProperty(exports, "__esModule", { value: !0 }), exports["default"] = addContainerToComlink;var _Comlink = require("./comlink"),
	        _Comlink2 = _interopRequireWildcard(_Comlink);module.exports = exports["default"];
	  }, { "./comlink": 11 }], 11: [function (require, module, exports) {
	    "use strict";function comlink() {
	      this.containers = {}, this.addEventListener();
	    }var Socket = require("./socket"),
	        messageHandler = require("./messageHandler"),
	        SOCKET_PATH = "wss://api-te.famo.us/comlink/v1/sockets",
	        POSTMESSAGE_EVENT_METHOD = window.addEventListener ? "addEventListener" : "attachEvent",
	        POSTMESSAGE_EVENT_LISTENER = window[POSTMESSAGE_EVENT_METHOD],
	        POSTMESSAGE_API_EVENT_KEY = "attachEvent" == POSTMESSAGE_EVENT_METHOD ? "onmessage" : "message",
	        POSTMESSAGE_DOMAIN = "*";comlink.prototype.addEventListener = function () {
	      POSTMESSAGE_EVENT_LISTENER(POSTMESSAGE_API_EVENT_KEY, (function (e) {
	        messageHandler(e);var n = JSON.parse(e.data),
	            t = n.containerIdentifier;this.socket.send(JSON.stringify({ "comlink-relay": t, "container-id": t, label: "message-event", message: e.data }));
	      }).bind(this), !1);
	    }, comlink.prototype.addContainer = function (e, n) {
	      this.containers[n] = e, this.addSocket(n);
	    }, comlink.prototype.addSocket = function (e) {
	      this.socket ? this.socket.send(JSON.stringify({ "comlink-relay": e, "container-id": e, label: "connection-open", message: "open-sesame" })) : this.initializeSocket(e);
	    }, comlink.prototype.initializeSocket = function (e) {
	      var n = this.socket = new Socket(SOCKET_PATH);n.onopen = (function () {
	        this.socket.send(JSON.stringify({ "comlink-relay": e, "container-id": e, label: "connection-open", message: "open-sesame" }));
	      }).bind(this), n.onmessage = (function (e) {
	        var n = JSON.parse(e.data);this.postToAll(n.message);
	      }).bind(this);
	    }, comlink.prototype.postToContainer = function (e, n) {
	      this.containers[e].getElementsByTagName("iframe")[0].contentWindow.postMessage(n, POSTMESSAGE_DOMAIN);
	    }, comlink.prototype.postToAll = function (e) {
	      for (var n in this.containers) this.containers[n].getElementsByTagName("iframe")[0].contentWindow.postMessage(e, POSTMESSAGE_DOMAIN);
	    }, module.exports = comlink;
	  }, { "./messageHandler": 12, "./socket": 13 }], 12: [function (require, module, exports) {
	    "use strict";var messageHandler = function messageHandler(e) {
	      switch (e.data.event) {case "LOG_IN_SUCCESS":
	          sessionStorage.setItem("hub_authentication_token", e.data.hub_authentication_token), sessionStorage.setItem("hub_email", e.data.hub_email), window.location.replace("<URL FOR HUB ADMIN DASHBOARD UI>");}
	    };module.exports = messageHandler;
	  }, {}], 13: [function (require, module, exports) {
	    "use strict";function SuperSocket(t, o, e) {
	      this.url = t, attachConstant(this, "CONNECTING", 0), attachConstant(this, "OPEN", 1), attachConstant(this, "CLOSING", 2), attachConstant(this, "CLOSED", 3), attachConstant(this, "readyState", this.CONNECTING), this.protocols = o || [], this.options = e || {}, this.messageQueue = [], _patchOptions(this.options), this.connect();
	    }var _patchOptions = function _patchOptions(t) {
	      for (var o in defaults) void 0 === t[o] && (t[o] = defaults[o]);
	    },
	        defaults = { delay: 0 },
	        attachConstant = function attachConstant(t, o, e) {
	      Object.defineProperty(t, o, { value: e, writable: !1, enumerable: !0, configurable: !0 });
	    };SuperSocket.prototype.connect = function () {
	      var t = new WebSocket(this.url, this.protocols);t.onopen = (function (t) {
	        attachConstant(this, "readyState", this.OPEN), this.onopen(t), this.messageQueue.length && this.emptyQueue();
	      }).bind(this), t.onclose = (function (t) {
	        this.CLOSED ? this.onclose(t) : (attachConstant(this, "readyState", this.CONNECTING), this.oninterruption(t), window.setTimeout(this.connect.bind(this), this.options.delay));
	      }).bind(this), t.onconnecting = (function (t) {
	        console.log(t), this.onconnecting(t);
	      }).bind(this), t.onmessage = (function (t) {
	        console.log(t), this.onmessage(t);
	      }).bind(this), t.onerror = (function (t) {
	        console.log(t), this.onerror(t);
	      }).bind(this), this.send = function (o) {
	        this.readyState === this.OPEN ? t.send(o) : this.messageQueue.push(o);
	      }, this.close = function () {
	        attachConstant(this, "readyState", this.CLOSED), t.close();
	      };
	    }, SuperSocket.prototype.emptyQueue = function () {
	      for (var t = this.messageQueue.length; t--;) this.send(this.messageQueue.shift());
	    }, SuperSocket.prototype.onopen = function () {}, SuperSocket.prototype.onclose = function () {}, SuperSocket.prototype.oninterruption = function () {}, SuperSocket.prototype.onconnecting = function () {}, SuperSocket.prototype.onmessage = function () {}, SuperSocket.prototype.onerror = function () {}, module.exports = SuperSocket;
	  }, {}], 14: [function (require, module, exports) {
	    module.exports = { ASSETS_HOST: "https://assets-te.famo.us/codemanager", ASSET_URI: "/assets", BLOCK_BASE_URI: "/v1/blocks/", CONTAINER_BASE_URI: "/v1/containers/", COPY_METHOD: "POST", COPY_URI: "/copy/", EMBED_URI: "https://assets-te.famo.us/embed/embed.js", FAMOUS_USER_HEADER: "X-FAMOUS-USER-ID", FETCH_METHOD: "GET", FILES_PARAM: "files[]", HOST: "https://api-te.famo.us/codemanager", SCHEMA_FILE_NAME: "schema.json", SHARE_URI: "/share", VERSION_URI: "/versions/" };
	  }, {}], 15: [function (require, module, exports) {
	    "use strict";var _interopRequireWildcard = function _interopRequireWildcard(e) {
	      return e && e.__esModule ? e : { "default": e };
	    };Object.defineProperty(exports, "__esModule", { value: !0 });var _config = require("./config.json"),
	        _config2 = _interopRequireWildcard(_config);exports["default"] = _config2["default"], module.exports = exports["default"];
	  }, { "./config.json": 14 }], 16: [function (require, module, exports) {
	    "use strict";var _interopRequireWildcard = function _interopRequireWildcard(e) {
	      return e && e.__esModule ? e : { "default": e };
	    };Object.defineProperty(exports, "__esModule", { value: !0 });var _manage2 = require("./manage"),
	        _manage3 = _interopRequireWildcard(_manage2);exports.manage = _manage3["default"];
	  }, { "./manage": 17 }], 17: [function (require, module, exports) {
	    "use strict";function manage(e) {
	      if (!e.dataset.isFamous) {
	        e.dataset.isFamous = !0;var r = e.dataset.famousContainerIdentifier,
	            t = { identifier: r, el: e };_addContainer2["default"](t), _fetchContainerBlocks.fetchContainerBlocks(t).then(function (r) {
	          return _renderIframe2["default"](_extends({ target: e }, r));
	        });
	      }
	    }var _interopRequireWildcard = function _interopRequireWildcard(e) {
	      return e && e.__esModule ? e : { "default": e };
	    },
	        _extends = Object.assign || function (e) {
	      for (var r = 1; r < arguments.length; r++) {
	        var t = arguments[r];for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
	      }return e;
	    };Object.defineProperty(exports, "__esModule", { value: !0 }), exports["default"] = manage;var _fetchContainerBlocks = require("../api-client"),
	        _addContainer = require("../com-link/add-container"),
	        _addContainer2 = _interopRequireWildcard(_addContainer),
	        _renderIframe = require("./render-iframe"),
	        _renderIframe2 = _interopRequireWildcard(_renderIframe);module.exports = exports["default"];
	  }, { "../api-client": 7, "../com-link/add-container": 10, "./render-iframe": 18 }], 18: [function (require, module, exports) {
	    "use strict";function renderIframe(e) {
	      var r = e.target,
	          t = e.assets,
	          n = e.container,
	          o = e.block,
	          a = e.version,
	          i = (e.baseURL, t.filter(function (e) {
	        return "index.html" === e.name;
	      })[0]);return _fetchAsset.fetchAsset(_extends({ block: o, version: a }, i)).then(function (e) {
	        var t = e.content;if (!t) throw new Error("Container has nothing to render");for (; r.firstChild;) r.removeChild(r.firstChild);var i = t.split("<head>"),
	            S = _slicedToArray(i, 2),
	            _ = S[0],
	            s = S[1],
	            c = _ASSETS_HOST$BLOCK_BASE_URI$VERSION_URI$ASSET_URI.ASSETS_HOST + _ASSETS_HOST$BLOCK_BASE_URI$VERSION_URI$ASSET_URI.BLOCK_BASE_URI + o + _ASSETS_HOST$BLOCK_BASE_URI$VERSION_URI$ASSET_URI.VERSION_URI + a + _ASSETS_HOST$BLOCK_BASE_URI$VERSION_URI$ASSET_URI.ASSET_URI,
	            l = "" + _ + "\n                            <head>\n                            <base href=\"" + c + "/\">\n                        " + s,
	            d = document.createElement("iframe");r.appendChild(d);var f = d.contentWindow;f.containerIdentifier = n;var u = f.document;return (u.open(), u.write(l), u.close(), "rendered");
	      });
	    }var _slicedToArray = function _slicedToArray(e, r) {
	      if (Array.isArray(e)) return e;if (Symbol.iterator in Object(e)) {
	        var t = [],
	            n = !0,
	            o = !1,
	            a = void 0;try {
	          for (var i, S = e[Symbol.iterator](); !(n = (i = S.next()).done) && (t.push(i.value), !r || t.length !== r); n = !0);
	        } catch (_) {
	          o = !0, a = _;
	        } finally {
	          try {
	            !n && S["return"] && S["return"]();
	          } finally {
	            if (o) throw a;
	          }
	        }return t;
	      }throw new TypeError("Invalid attempt to destructure non-iterable instance");
	    },
	        _extends = Object.assign || function (e) {
	      for (var r = 1; r < arguments.length; r++) {
	        var t = arguments[r];for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
	      }return e;
	    };Object.defineProperty(exports, "__esModule", { value: !0 }), exports["default"] = renderIframe;var _fetchAsset = require("../api-client"),
	        _ASSETS_HOST$BLOCK_BASE_URI$VERSION_URI$ASSET_URI = require("../config");module.exports = exports["default"];
	  }, { "../api-client": 7, "../config": 15 }], 19: [function (require, module, exports) {
	    var css = "@font-face {\n    font-family: 'OpenSans';\n    src: url('https://demo.famo.us/hub/container/fonts/open-sans/OpenSans-Regular.ttf') format('truetype'),\n      /* url('https://share.famo.us.s3-us-west-2.amazonaws.com/zackbrown/hub/assets/OpenSans-Regular.ttf') format('truetype'); */\n    font-weight: normal;\n    font-style: normal;\n}\n\n.backfaceVisibility {\n  -webkit-backface-visibility: visible;\n  backface-visibility: visible;\n}\n\n[data-famous-container-identifier] iframe {\n    width: 100%;\n    height: 100%;\n    border: 0;\n    margin: 0;\n    padding: 0;\n    overflow: hidden\n}\n\n";require("/Users/adamcmiel/Documents/famous/hub/container/node_modules/cssify")(css), module.exports = css;
	  }, { "/Users/adamcmiel/Documents/famous/hub/container/node_modules/cssify": 21 }], 20: [function (require, module, exports) {
	    "use strict";require("./app.css");
	  }, { "./app.css": 19 }], 21: [function (require, module, exports) {
	    module.exports = function (e, t) {
	      var r = t || document;if (r.createStyleSheet) {
	        var n = r.createStyleSheet();return (n.cssText = e, n.ownerNode);
	      }var a = r.getElementsByTagName("head")[0],
	          l = r.createElement("style");return (l.type = "text/css", l.styleSheet ? l.styleSheet.cssText = e : l.appendChild(r.createTextNode(e)), a.appendChild(l), l);
	    }, module.exports.byUrl = function (e) {
	      if (document.createStyleSheet) return document.createStyleSheet(e).ownerNode;var t = document.getElementsByTagName("head")[0],
	          r = document.createElement("link");return (r.rel = "stylesheet", r.href = e, t.appendChild(r), r);
	    };
	  }, {}], 22: [function (require, module, exports) {
	    "use strict";function createXHR(e, r) {
	      function n() {
	        4 === i.readyState && s();
	      }function o() {
	        var e = void 0;if ((i.response ? e = i.response : "text" !== i.responseType && i.responseType || (e = i.responseText || i.responseXML), h)) try {
	          e = JSON.parse(e);
	        } catch (r) {}return e;
	      }function t(e) {
	        clearTimeout(d), e instanceof Error || (e = new Error("" + (e || "unknown"))), e.statusCode = 0, r(e, a);
	      }function s() {
	        clearTimeout(d);var e = 1223 === i.status ? 204 : i.status,
	            n = a,
	            t = null;0 !== e ? (n = { body: o(), statusCode: e, method: c, headers: {}, url: p, rawRequest: i }, i.getAllResponseHeaders && (n.headers = parseHeaders(i.getAllResponseHeaders()))) : t = new Error("Internal XMLHttpRequest Error"), r(t, n, n.body);
	      }var a = { body: void 0, headers: {}, statusCode: 0, method: c, url: p, rawRequest: i };if (("string" == typeof e && (e = { uri: e }), e = e || {}, "undefined" == typeof r)) throw new Error("callback argument missing");r = once(r);var i = e.xhr || null;i || (i = e.cors || e.useXDR ? new XDR() : new XHR());var u,
	          d,
	          p = i.url = e.uri || e.url,
	          c = i.method = e.method || "GET",
	          l = e.body || e.data,
	          w = i.headers = e.headers || {},
	          f = !!e.sync,
	          h = !1;if (("json" in e && (h = !0, w.Accept || (w.Accept = "application/json"), "GET" !== c && "HEAD" !== c && (w["Content-Type"] = "application/json", l = JSON.stringify(e.json))), i.onreadystatechange = n, i.onload = s, i.onerror = t, i.onprogress = function () {}, i.ontimeout = t, i.open(c, p, !f), i.withCredentials = !!e.withCredentials, !f && e.timeout > 0 && (d = setTimeout(function () {
	        i.abort("timeout");
	      }, e.timeout + 2)), i.setRequestHeader)) for (u in w) w.hasOwnProperty(u) && i.setRequestHeader(u, w[u]);else if (e.headers) throw new Error("Headers cannot be set on an XDomainRequest object");return ("responseType" in e && (i.responseType = e.responseType), "beforeSend" in e && "function" == typeof e.beforeSend && e.beforeSend(i), i.send(l), i);
	    }function noop() {}var window = require("global/window"),
	        once = require("once"),
	        parseHeaders = require("parse-headers"),
	        XHR = window.XMLHttpRequest || noop,
	        XDR = "withCredentials" in new XHR() ? XHR : window.XDomainRequest;module.exports = createXHR;
	  }, { "global/window": 23, once: 24, "parse-headers": 28 }], 23: [function (require, module, exports) {
	    (function (global) {
	      module.exports = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
	    }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
	  }, {}], 24: [function (require, module, exports) {
	    function once(n) {
	      var o = !1;return function () {
	        return o ? void 0 : (o = !0, n.apply(this, arguments));
	      };
	    }module.exports = once, once.proto = once(function () {
	      Object.defineProperty(Function.prototype, "once", { value: function value() {
	          return once(this);
	        }, configurable: !0 });
	    });
	  }, {}], 25: [function (require, module, exports) {
	    function forEach(r, t, o) {
	      if (!isFunction(t)) throw new TypeError("iterator must be a function");arguments.length < 3 && (o = this), "[object Array]" === toString.call(r) ? forEachArray(r, t, o) : "string" == typeof r ? forEachString(r, t, o) : forEachObject(r, t, o);
	    }function forEachArray(r, t, o) {
	      for (var n = 0, a = r.length; a > n; n++) hasOwnProperty.call(r, n) && t.call(o, r[n], n, r);
	    }function forEachString(r, t, o) {
	      for (var n = 0, a = r.length; a > n; n++) t.call(o, r.charAt(n), n, r);
	    }function forEachObject(r, t, o) {
	      for (var n in r) hasOwnProperty.call(r, n) && t.call(o, r[n], n, r);
	    }var isFunction = require("is-function");module.exports = forEach;var toString = Object.prototype.toString,
	        hasOwnProperty = Object.prototype.hasOwnProperty;
	  }, { "is-function": 26 }], 26: [function (require, module, exports) {
	    function isFunction(o) {
	      var t = toString.call(o);return "[object Function]" === t || "function" == typeof o && "[object RegExp]" !== t || "undefined" != typeof window && (o === window.setTimeout || o === window.alert || o === window.confirm || o === window.prompt);
	    }module.exports = isFunction;var toString = Object.prototype.toString;
	  }, {}], 27: [function (require, module, exports) {
	    function trim(r) {
	      return r.replace(/^\s*|\s*$/g, "");
	    }exports = module.exports = trim, exports.left = function (r) {
	      return r.replace(/^\s*/, "");
	    }, exports.right = function (r) {
	      return r.replace(/\s*$/, "");
	    };
	  }, {}], 28: [function (require, module, exports) {
	    var trim = require("trim"),
	        forEach = require("for-each"),
	        isArray = function isArray(r) {
	      return "[object Array]" === Object.prototype.toString.call(r);
	    };module.exports = function (r) {
	      if (!r) return {};var e = {};return (forEach(trim(r).split("\n"), function (r) {
	        var t = r.indexOf(":"),
	            i = trim(r.slice(0, t)).toLowerCase(),
	            o = trim(r.slice(t + 1));"undefined" == typeof e[i] ? e[i] = o : isArray(e[i]) ? e[i].push(o) : e[i] = [e[i], o];
	      }), e);
	    };
	  }, { "for-each": 25, trim: 27 }], 29: [function (require, module, exports) {
	    "use strict";require("./interface/styles");var _manage = require("./interface");document.addEventListener("DOMContentLoaded", function () {
	      var e = document.querySelectorAll("div[data-famous-container-identifier]");Array.prototype.forEach.call(e, _manage.manage);
	    });
	  }, { "./interface": 16, "./interface/styles": 20 }] }, {}, [29]);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }
/******/ ]);