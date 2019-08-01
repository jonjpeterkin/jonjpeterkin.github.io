/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/setimmediate/setImmediate.js":
/*!***************************************************!*\
  !*** ./node_modules/setimmediate/setImmediate.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/timers-browserify/main.js":
/*!************************************************!*\
  !*** ./node_modules/timers-browserify/main.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(/*! setimmediate */ "./node_modules/setimmediate/setImmediate.js");
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "index.html";

/***/ }),

/***/ "./src/scripts/app/CacheController.js":
/*!********************************************!*\
  !*** ./src/scripts/app/CacheController.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class CacheController {

  constructor () {
    this.caches = {};
    this.cvObjects = [];
  }

  getCache (base = {}, seed) {
    const id = this._getCacheId(base, seed);
    
    if (this.caches[id]) {
      return this.caches[id];
    } else {
      return this._createCache(id);
    }
  }

  _getCacheId (base, seed) {
    const unhashedData = [seed].concat(this._flattenToArray(base));

    const hashSum = unhashedData.reduce((prev, cur) => {
      return prev + this._bitwiseHash(cur);
    }, 0);

    return (hashSum & hashSum).toString(); // Convert to 32bit integer to normalize length
  }

  clear () {
    this.caches = {};
    this.cvObjects.forEach((obj) => obj.delete());
    this.cvObjects = [];
  }

  _createCache (id) {
    const group = this._getCacheObject();

    this.caches[id] = group;

    return group;
  }

  _getCacheObject () {
    return {
      use (name, definition) { // to be used to initialize a value in the cacheGroup 
        let item = this[name];

        if (!item && item !== null) {
          item = definition();
          this[name] = item;
        } else {
          return item;
        }

        // TODO: explain this
        if (item && typeof item.delete === 'function') {
          instance.cvObjects.push(item); // save for deletion
        }
        return item
      }
    };
  }

  _flattenToArray (obj) {
    const flattened = [];

    Object.keys(obj).forEach((key) => {
      if (typeof obj[key] === 'object' && obj[key] !== null) {
        Object.assign(flattened, this._flattenToArray(obj[key]));
      } else {
        flattened.push(`${key}:${obj[key]}`);
      }
    });

    return flattened;
  }

  // based on https://werxltd.com/wp/2010/05/13/javascript-implementation-of-javas-string-hashcode-method/
  _bitwiseHash (unhashed) {
    let hash = 0;

    for (let i = 0, len = unhashed.length; i < len; ++i) {
      const char = unhashed.charCodeAt(i);
      hash = ((hash << 5) - hash) + char; // effectively, hash * 31 - hash + char
    }

    return hash;
  }
}

const instance = new CacheController();

/* harmony default export */ __webpack_exports__["default"] = (instance);

/***/ }),

/***/ "./src/scripts/app/CanvasOut.js":
/*!**************************************!*\
  !*** ./src/scripts/app/CanvasOut.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CanvasOut; });
/* harmony import */ var _CacheController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CacheController */ "./src/scripts/app/CacheController.js");


class CanvasOut {
  constructor (conf) {
    this.input  = conf.input;
    this.output = conf.output;
    this.data   = conf.data || this._getData();
    this.transforms = null; // transforms are set through setTransforms()
    this.ticking = false;
    
    this.context = null;

    this.state = {
      streaming: false,
      width: 0,
      height: 0
    };

    this.getBaseMat = this.getBaseMat.bind(this); // needed since we call getBaseMat from some transforms
  }

  play () {
    if (this.state.streaming) { return };

    this._setup();
    this.state.streaming = true;
    this.streamInputToOutput();
  }

  pause () {
    if (!this.state.streaming) { return };

    this.state.streaming = false;
    this._cleanupCv();
    _CacheController__WEBPACK_IMPORTED_MODULE_0__["default"].clear();
  }

  streamInputToOutput (time) {
    this.timeSinceTransform = this.timeSinceTransform || time;
    if (!this.state.streaming) {
      return;
    }

    if (time - this.timeSinceTransform >= 1000/this.state.frameRate) {

      this.context.drawImage(this.input.getOutput(), 0, 0, this.state.width, this.state.height);
      this.src.data.set(this.context.getImageData(0, 0, this.state.width, this.state.height).data);
      
      this._applyTransforms();

      cv.imshow(this.output, this.dst);
      
      this.timeSinceTransform = time;
    }

    requestAnimationFrame((t) => {
      this.streamInputToOutput(t);
    });

  }

  setTransforms (transforms) {
    this.transforms = this._getTransforms(transforms)
  }

  _setup () {
    this.state.frameRate = this.input.getFrameRate();
    this.state.width  = this.input.getWidth();
    this.state.height = this.input.getHeight();

    this.output.width  = this.state.width;
    this.output.height = this.state.height;

    this.data.width  = this.state.width;
    this.data.height = this.state.height;

    this.src = this.getBaseMat();
    this.dst = this.getBaseMat();

    this.context = this.data.getContext('2d');
  }

  _cleanupCv () {
    this.src.delete();
    this.dst.delete();
  }

  _getData () {
    if (!this.data) {
      const canvas = document.createElement('canvas');
      this.data = canvas;
    }

    return this.data;
  }

  getBaseMat () {
    return new cv.Mat(this.state.height, this.state.width, cv.CV_8UC4);
  }

  _getTransforms (factoryTransforms = () => []) {
    let transforms = factoryTransforms().map((transform) => {
      return transform.bind(this);
    });
    transforms.unshift(this._copySrcToDst); // perpend a setup transform to the queue

    return transforms;
  }

  _applyTransforms () {
    this.transforms.forEach((transform) => {
      transform(this.src, this.dst); // apply transform
      this._matchMatType(this.src, this.dst); // convert dst type to match src
      this.src.data.set(this.dst.data); // set src to dst, so tranforms can chain their outputs together
    });
  }

  _matchMatType (src, dst) {
    const colorTypes = {
      1: 'GRAY',
      3: 'RGB',
      4: 'RGBA'
    };

    const srcType = colorTypes[src.channels()];
    const dstType = colorTypes[dst.channels()];

    if (srcType !== dstType) {
      const conversion = cv[`COLOR_${dstType}2${srcType}`];
      cv.cvtColor(dst, dst, conversion);
    }
  }

  _copySrcToDst (src, dst) {
    dst.data.set(src.data);
  }
}

/***/ }),

/***/ "./src/scripts/app/Composer.js":
/*!*************************************!*\
  !*** ./src/scripts/app/Composer.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Composer; });
/* harmony import */ var _transforms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transforms */ "./src/scripts/app/transforms/index.js");
/* harmony import */ var _settings_schemas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings/schemas */ "./src/scripts/app/settings/schemas.js");
/* harmony import */ var _lib_dragula__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/dragula */ "./src/scripts/lib/dragula.js");
/* harmony import */ var _lib_dragula__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_lib_dragula__WEBPACK_IMPORTED_MODULE_2__);




class Composer {

  constructor (outputController) {
    this.outputController = outputController;
    this.el = document.querySelector('.Composer');
    this.inventoryEl = document.querySelector('.ComposerInventory');
    this.queueEl = document.querySelector('.ComposerQueue');
    this.queue = [];
    this.composition = () => [];

    this._init();
  }

  _init () {
    this._setupDragula();
    this._renderInventory();
    this._setupEventHandlers();
  }

  _renderInventory () {
    this.inventoryEl.innerHTML = _settings_schemas__WEBPACK_IMPORTED_MODULE_1__["default"].reduce((acc, cur) => {
      return acc + this._inventoryItemHtml(cur);
    }, '');
    this.inventoryItemEls = this.inventoryEl.querySelectorAll('.ComposerItem');
  }

  _setupDragula () {
    this.drake = _lib_dragula__WEBPACK_IMPORTED_MODULE_2___default()([this.inventoryEl, this.queueEl], {
      copySortSource: true,
      removeOnSpill: true,
      copy: (el, source) => {
        return source === this.inventoryEl;
      },
      accepts: (el, target, source, sibling) => {
        const queueToQueue = source === this.queueEl && target === this.queueEl;
        const invToQueue = source === this.inventoryEl && target === this.queueEl;
        return invToQueue || queueToQueue;
      },
    });
  }

  _setupEventHandlers () {
    this._onDrop = this._onDrop.bind(this);
    this.drake.on('drop', this._onDrop);

    this._onRemove = this._onRemove.bind(this);
    this.drake.on('remove', this._onRemove);
  }

  _onDrop (el, target, source, sibling) {
    this._readQueue();
    this._updateComposition();
  }

  _onRemove (el, container, source) {
    this._readQueue();
    this._updateComposition();
  }

  _readQueue () {
    this.queue = Array.from(this.queueEl.children);
  }

  _updateComposition () {
    const composedList = this.queue.map((item) => {
      const type = item.dataset.transformType;
      const name = item.dataset.transformName;
      const schema = _settings_schemas__WEBPACK_IMPORTED_MODULE_1__["default"].find((schema) => schema.type === type && schema.name === name);
      const transform = _transforms__WEBPACK_IMPORTED_MODULE_0__["default"][type] && _transforms__WEBPACK_IMPORTED_MODULE_0__["default"][type][name];

      if (!schema || !transform) {
        console.log('Transform or schema does not exist: ', type, name);
      }

      return transform(schema.defaultConf);
    });

    this.composition = () => composedList;
    this.outputController.setTransforms(this.composition);
  }

  _inventoryItemHtml (schema) {
    return `
      <li class="composer-item controls-button ComposerItem"
        data-transform-type="${schema.type}"
        data-transform-name="${schema.name}"
        draggable="true"
      >
        ${schema.name}
      </li>
    `;
  }

}

/***/ }),

/***/ "./src/scripts/app/OutputController.js":
/*!*********************************************!*\
  !*** ./src/scripts/app/OutputController.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OutputController; });
/* harmony import */ var _transforms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transforms */ "./src/scripts/app/transforms/index.js");
/* harmony import */ var _settings_schemas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings/schemas */ "./src/scripts/app/settings/schemas.js");
/* harmony import */ var _settings_compositions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings/compositions */ "./src/scripts/app/settings/compositions.js");
/* harmony import */ var _Composer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Composer */ "./src/scripts/app/Composer.js");






class OutputController {

  constructor (conf) {
    this.output = conf.output;
    this.playEl = document.querySelector('.ControlsPlay');
    this.pauseEl = document.querySelector('.ControlsPause');
    this.compositionsContainerEl = document.querySelector('.ControlsCompositionsContainer');

    this._init();
  }

  _init () {
    this.composer = new _Composer__WEBPACK_IMPORTED_MODULE_3__["default"](this);

    this._setupControls();
    this._setupEventHandlers();
  }

  _setupEventHandlers () {
    this._onCompositionClick = this._onCompositionClick.bind(this);
    this.compositionEls.forEach((el) => {
      el.addEventListener('click', this._onCompositionClick);
    });

    this.playEl.addEventListener('click', this.play.bind(this));
    this.pauseEl.addEventListener('click', this.pause.bind(this));
  }

  play () {
    this.output.play();
  }

  pause () {
    this.output.pause();
  }

  setTransforms (tfs) {
    this.output.setTransforms(tfs);
  }

  _onCompositionClick (e) {
    const compositionId = e.target.dataset.compositionId;
    const tfs = _settings_compositions__WEBPACK_IMPORTED_MODULE_2__["default"][compositionId].transforms;

    this.output.pause();
    this.output.setTransforms(tfs);
    this.output.play();
  }

  _setupControls () {
    this.compositionsContainerEl.innerHTML = _settings_compositions__WEBPACK_IMPORTED_MODULE_2__["default"].reduce((acc, cur, idx) => {
      return acc + this._compositionHtml(idx, cur.name);
    }, '');
    this.compositionEls = document.querySelectorAll('.ControlsComposition');
  }

  _compositionHtml (idx, name) {
    return `<button class="controls-button ControlsComposition" data-composition-id="${idx}">${name}</button>`;
  }

}

/***/ }),

/***/ "./src/scripts/app/Webcam.js":
/*!***********************************!*\
  !*** ./src/scripts/app/Webcam.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Webcam; });
class Webcam {
  constructor (opts) {
    this.output = opts.output || this.getOutput();
    this.stream = null;

    this.state = {
      readyToStream: false
    };
  }

  getOutput () {
    if (!this.output) {
      this.output = document.createElement('video');
    }
    return this.output;
  }

  getWidth () {
    const dim = this._getDimensions();
    return dim.width;
  }

  getHeight () {
    const dim = this._getDimensions();
    return dim.height;
  }

  getFrameRate () {
    const dim = this._getDimensions();
    return dim.frameRate;
  }

  initializeCamera () {
    return new Promise((resolve, reject) => {
      return navigator.mediaDevices.getUserMedia({ 
        audio: false,
        video: {width: {min: 1280}, height: {min: 720}}
      })
      .then((stream) => {
        this.stream = stream;
        resolve();
      })    
      .catch((err) => {
        console.log("An error occurred! " + err);
        reject();
      });
    });
  }

  beginStream () {
    this.output.srcObject = this.stream;
    this.output.play();
    return new Promise((resolve, reject) => {
      this.output.onloadedmetadata = () => {
        this._getDimensions(true);
        resolve();
      }
    });
  }

  _getDimensions (force) {
    if (this.dimensions && !force) { return this.dimensions; } 
      
    this.dimensions = {
      width: this.output.videoWidth, 
      height: this.output.videoHeight,
      frameRate: this.stream && this.stream.getVideoTracks()[0].getSettings().frameRate
    };

    return this.dimensions;
  }
}

/***/ }),

/***/ "./src/scripts/app/index.js":
/*!**********************************!*\
  !*** ./src/scripts/app/index.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Webcam__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Webcam */ "./src/scripts/app/Webcam.js");
/* harmony import */ var _CanvasOut__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CanvasOut */ "./src/scripts/app/CanvasOut.js");
/* harmony import */ var _OutputController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OutputController */ "./src/scripts/app/OutputController.js");
/* harmony import */ var _transforms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./transforms */ "./src/scripts/app/transforms/index.js");





const COMPOSITION = () => [
  // transforms.arithmetic.absoluteDifference(),
  // transforms.alter.setChannel({
  //   idx: 3,
  //   val: 255
  // }),
  // transforms.threshold.inRange({
  //   lo: 40,
  //   hi: 255
  // }),
  // function (src, dst) {
  //   this.whitePlane = this.whitePlane || (() => {
  //     const color = new cv.Scalar(255);
  //     return new cv.Mat(src.rows, src.cols, cv.CV_8U, color);
  //   })();

  //   this.blackPlane = this.blackPlane || (() => {
  //     const color = new cv.Scalar(0);
  //     return new cv.Mat(src.rows, src.cols, cv.CV_8U, color);
  //   })();

  //   const planes = new cv.MatVector();

  //   cv.split(src, planes);
  //   planes.set(2, this.blackPlane);
  //   planes.set(3, this.whitePlane);
  //   cv.merge(planes, dst);

  //   planes.delete();
  // },
];

document.body.addEventListener('OPENCV_BUILT', () => {
  cv['onRuntimeInitialized'] = () => {
    // const video  = document.getElementById('videoInput');
    const output = document.getElementById('canvasOutput');
    const data   = document.getElementById('data');

    const webcam = new _Webcam__WEBPACK_IMPORTED_MODULE_0__["default"]({
      // output: video
    });

    const canvasOut = new _CanvasOut__WEBPACK_IMPORTED_MODULE_1__["default"]({
      input: webcam,
      output: output,
      data: data,
    });

    const outputController = new _OutputController__WEBPACK_IMPORTED_MODULE_2__["default"]({
      output: canvasOut,
    });

    webcam.initializeCamera()
    .then(() => {
      return webcam.beginStream();
    })
    .then(() => {
      outputController.setTransforms(COMPOSITION); // initial transforms
      outputController.play();
    });
  }
});


/***/ }),

/***/ "./src/scripts/app/settings/compositions.js":
/*!**************************************************!*\
  !*** ./src/scripts/app/settings/compositions.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _transforms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../transforms */ "./src/scripts/app/transforms/index.js");



const compositions = [

  {
    name: 'Grayscale',
    transforms: () => [
      _transforms__WEBPACK_IMPORTED_MODULE_0__["default"].alter.grayscale(),
    ],
    // schema: {
    //   ---SOON!---
    // },
  },

  {
    name: 'T-Rex Vision',
    transforms: () => [
      _transforms__WEBPACK_IMPORTED_MODULE_0__["default"].histogram.clahe(),
      _transforms__WEBPACK_IMPORTED_MODULE_0__["default"].arithmetic.absoluteDifference(),
      _transforms__WEBPACK_IMPORTED_MODULE_0__["default"].alter.setChannel({
        idx: 3,
        val: 255
      }),
    ],
  },

  {
    name: 'adaptiveGaussian (smoothed)',
    transforms: () => [
      _transforms__WEBPACK_IMPORTED_MODULE_0__["default"].smooth.median({
        size: 5,
      }),
      _transforms__WEBPACK_IMPORTED_MODULE_0__["default"].threshold.adaptiveGaussian({
        ksize: 5,
        c: 0,
      }),
      _transforms__WEBPACK_IMPORTED_MODULE_0__["default"].alter.setChannel({
        idx: 3,
        val: 255,
      }),
    ]
  },

  {
    name: 'Canny',
    transforms: () => [
      _transforms__WEBPACK_IMPORTED_MODULE_0__["default"].featureDetect.canny({
        t1: 50,
        t2: 50,
      }),
    ]
  },

  {
    name: 'Binary Inverse',
    transforms: () => [
      _transforms__WEBPACK_IMPORTED_MODULE_0__["default"].threshold.binary({
        t1: 100,
        t2: 0,
      }),
      _transforms__WEBPACK_IMPORTED_MODULE_0__["default"].alter.setChannel({
        idx: 3,
        val: 255,
      }),
    ]
  },

  {
    name: 'Line Flow',
    transforms: () => [
      _transforms__WEBPACK_IMPORTED_MODULE_0__["default"].smooth.median({
        size: 101,
        anchor: -1,
      }),
      _transforms__WEBPACK_IMPORTED_MODULE_0__["default"].featureDetect.canny({
        t1: 10,
        t2: 10,
      }),
    ]
  },

  {
    name: 'Better Line Flow',
    transforms: () => [
      _transforms__WEBPACK_IMPORTED_MODULE_0__["default"].histogram.equalize(),
      _transforms__WEBPACK_IMPORTED_MODULE_0__["default"].smooth.median({
        size: 47,
      }),
      _transforms__WEBPACK_IMPORTED_MODULE_0__["default"].featureDetect.canny({
        t1: 10,
        t2: 10,
      }),
    ]
  },

  {
    name: 'thing',
    transforms: () => [
      _transforms__WEBPACK_IMPORTED_MODULE_0__["default"].threshold.inRange({
        lo: 100,
        hi: 255,
      }),
      _transforms__WEBPACK_IMPORTED_MODULE_0__["default"].featureDetect.canny({
        t1: 220,
        t2: 220,
      }),
      _transforms__WEBPACK_IMPORTED_MODULE_0__["default"].morph.gradient({
        kernel: 3,
        anchor: -1,
        iterations: 1,
      }),
      _transforms__WEBPACK_IMPORTED_MODULE_0__["default"].featureDetect.canny({
        t1: 2,
        t2: 2,
      }),
    ]
  }

];

/* harmony default export */ __webpack_exports__["default"] = (compositions);

/***/ }),

/***/ "./src/scripts/app/settings/schemas.js":
/*!*********************************************!*\
  !*** ./src/scripts/app/settings/schemas.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const schemas = [

  {
    type: 'alter',
    name: 'setChannel',
    defaultConf: {
      idx: 3,
      val: 255,
    },
  },
  {
    type: 'alter',
    name: 'grayscale',
    defaultConf: {},
  },

  {
    type: 'arithmetic',
    name: 'absoluteDifference',
    defaultConf: {},
  },

  {
    type: 'featureDetect',
    name: 'canny',
    defaultConf: {
      t1: 50,
      t2: 50,
    },
  },

  {
    type: 'histogram',
    name: 'equalize',
    defaultConf: {},
  },
  {
    type: 'histogram',
    name: 'clahe',
    defaultConf: {},
  },

  {
    type: 'imageGradient',
    name: 'sobel',
    defaultConf: {
      dx: 10,
      dy: 10,
      ksize: 5,
    },
  },
  // not working
  // {
  //   type: 'imageGradient',
  //   name: 'scharr',
  //   defaultConf: {
  //     dx: 10,
  //     dy: 10,
  //     scale: 1,
  //     delta: 0,
  //   },
  // },
  {
    type: 'imageGradient',
    name: 'laplacian',
    defaultConf: {
      ksize: 5,
      scale: 1,
      delta: 0,
    },
  },

  {
    type: 'morph',
    name: 'erode',
    defaultConf: {
      ksize: 5,
      anchor: -1,
    },
  },
  {
    type: 'morph',
    name: 'dilate',
    defaultConf: {
      ksize: 5,
      anchor: -1,
    },
  },
  {
    type: 'morph',
    name: 'open',
    defaultConf: {
      ksize: 5,
      anchor: -1,
    },
  },
  {
    type: 'morph',
    name: 'close',
    defaultConf: {
      ksize: 5,
      anchor: -1,
    },
  },
  {
    type: 'morph',
    name: 'gradient',
    defaultConf: {
      ksize: 5,
      anchor: -1,
    },
  },
  {
    type: 'morph',
    name: 'topHat',
    defaultConf: {
      ksize: 5,
      anchor: -1,
    },
  },
  {
    type: 'morph',
    name: 'blackHat',
    defaultConf: {
      ksize: 5,
      anchor: -1,
    },
  },

  {
    type: 'smooth',
    name: 'blur',
    defaultConf: {
      ksize: 5,
      anchor: -1,
    },
  },
  {
    type: 'smooth',
    name: 'gaussian',
    defaultConf: {
      ksize: 5,
    },
  },
  {
    type: 'smooth',
    name: 'median',
    defaultConf: {
      size: 5,
    },
  },
  {
    type: 'smooth',
    name: 'bilateral',
    defaultConf: {
      size: 5,
      sigmaColor: 1,
      sigmaSpace: 1,
    },
  },

  {
    type: 'smooth',
    name: 'median',
    defaultConf: {
      size: 7,
      anchor: -1,
    },
  },

  {
    type: 'threshold',
    name: 'binary',
    defaultConf: {
      t1: 100,
      t2: 0,
    },
  },

];

/* harmony default export */ __webpack_exports__["default"] = (schemas);

/***/ }),

/***/ "./src/scripts/app/transforms/alter.js":
/*!*********************************************!*\
  !*** ./src/scripts/app/transforms/alter.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CacheController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../CacheController */ "./src/scripts/app/CacheController.js");
// direct changes to the src


/* harmony default export */ __webpack_exports__["default"] = ({
  // sets the channel at conf.idx to conf.val
  setChannel (conf) {
    const cache = _CacheController__WEBPACK_IMPORTED_MODULE_0__["default"].getCache(conf, 'setChannel');

    return function (src, dst) {
      cache.use('newPlane', () => {
        const color = new cv.Scalar(conf.val);
        return new cv.Mat(src.rows, src.cols, cv.CV_8U, color);
      });

      const planes = new cv.MatVector();

      cv.split(src, planes);
      planes.set(conf.idx, cache.newPlane);
      cv.merge(planes, dst);

      planes.delete();
    } 
  },
  abs () { // does nothing to mats with unsigned type
    return function (src, dst) {
      cv.convertScaleAbs(src, dst, 1, 0);
    }
  },
  grayscale () {
    return function (src, dst) {
      cv.cvtColor(src, dst, cv.COLOR_RGBA2GRAY);
    }
  },
});


/***/ }),

/***/ "./src/scripts/app/transforms/arithmetic.js":
/*!**************************************************!*\
  !*** ./src/scripts/app/transforms/arithmetic.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// https://docs.opencv.org/3.4.3/dd/d4d/tutorial_js_image_arithmetics.html

/* harmony default export */ __webpack_exports__["default"] = ({
  absoluteDifference (conf) {
    return function (src, dst) {
      this.frameCount = this.frameCount || 0;
      this.prevSrc = this.prevSrc || this.getBaseMat();
      cv.absdiff(src, this.prevSrc, dst);
      this.frameCount++;

      if (this.frameCount == 1) {
        this.prevSrc.data.set(this.src.data);
        this.frameCount = 0;
      }

    }
  }
});

/***/ }),

/***/ "./src/scripts/app/transforms/featureDetect.js":
/*!*****************************************************!*\
  !*** ./src/scripts/app/transforms/featureDetect.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  canny (conf) {
    // https://docs.opencv.org/3.1.0/dd/d1a/group__imgproc__feature.html#ga04723e007ed888ddf11d9ba04e2232de
    return function (src, dst) {
      cv.Canny(src, dst, conf.t1, conf.t2, 3, true); // Aperture seems to only work at 3.
    }
  },

  houghLines (src, dst) {
    // let lines = new cv.Mat();

    // console.log('prehough')

    // cv.HoughLines(
    //   src, lines, 1, Math.PI / 180,
    //   30, 0, 0, 0, Math.PI
    // );

    // console.log('posthough')

    // let color = new cv.Scalar(255);
    // for (let i = 0; i < lines.rows; ++i) {
    //   let rho = lines.data32F[i * 2];
    //   let theta = lines.data32F[i * 2 + 1];
    //   let a = Math.cos(theta);
    //   let b = Math.sin(theta);
    //   let x0 = a * rho;
    //   let y0 = b * rho;
    //   let startPoint = {x: x0 - 1000 * b, y: y0 + 1000 * a};
    //   let endPoint = {x: x0 + 1000 * b, y: y0 - 1000 * a};
    //   cv.line(dst, startPoint, endPoint, color);
    // }

    // lines.delete();
  },

  houghLinesP (src, dst) {
    // let lines = new cv.Mat();
    // cv.Mat.zeros(src.rows, src.cols, cv.CV_8UC3);

    // cv.HoughLinesP(src, lines, 1, Math.PI / 180, 2, 0, 0);
    // // draw lines
    // for (let i = 0; i < lines.rows; ++i) {
    //   let startPoint = new cv.Point(lines.data32S[i * 4], lines.data32S[i * 4 + 1]);
    //   let endPoint = new cv.Point(lines.data32S[i * 4 + 2], lines.data32S[i * 4 + 3]);
    //   cv.line(dst, startPoint, endPoint, color);
    // }

    // lines.delete();
  }
});

//HOUGH P
// let src = cv.imread('canvasInput');
// let dst = cv.Mat.zeros(src.rows, src.cols, cv.CV_8UC3);
// let lines = new cv.Mat();
// let color = new cv.Scalar(255, 0, 0);
// cv.cvtColor(src, src, cv.COLOR_RGBA2GRAY, 0);
// // cv.Canny(src, src, 50, 200, 3);
// // You can try more different parameters
// cv.HoughLinesP(src, lines, 1, Math.PI / 180, 2, 0, 0);
// // draw lines
// for (let i = 0; i < lines.rows; ++i) {
//     let startPoint = new cv.Point(lines.data32S[i * 4], lines.data32S[i * 4 + 1]);
//     let endPoint = new cv.Point(lines.data32S[i * 4 + 2], lines.data32S[i * 4 + 3]);
//     cv.line(dst, startPoint, endPoint, color);
// }
// cv.imshow('canvasOutput', dst);
// src.delete(); dst.delete(); lines.delete();

/***/ }),

/***/ "./src/scripts/app/transforms/histogram.js":
/*!*************************************************!*\
  !*** ./src/scripts/app/transforms/histogram.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CacheController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../CacheController */ "./src/scripts/app/CacheController.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  equalize (conf) {
    // https://docs.opencv.org/3.1.0/d5/daf/tutorial_py_histogram_equalization.html
    return (src, dst) => {
      cv.cvtColor(src, dst, cv.COLOR_RGBA2GRAY);
      cv.equalizeHist(dst, dst);
    }
  },
  clahe (conf) {
    const cache = _CacheController__WEBPACK_IMPORTED_MODULE_0__["default"].getCache(conf, 'clahe');
    return (src, dst) => {
      cache.use('ksize', () => new cv.Size(8, 8));

      cv.cvtColor(src, dst, cv.COLOR_RGBA2GRAY);
      const clahe = new cv.CLAHE(2.0, cache.ksize);
      clahe.apply(dst, dst);
    }
  }
});

/***/ }),

/***/ "./src/scripts/app/transforms/imageGradient.js":
/*!*****************************************************!*\
  !*** ./src/scripts/app/transforms/imageGradient.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// https://docs.opencv.org/3.1.0/d5/d0f/tutorial_py_gradients.html

/* harmony default export */ __webpack_exports__["default"] = ({
  sobel (conf) {
    return function (src, dst) {
      cv.Sobel(src, dst, cv.CV_64F, conf.dx, conf.dy, conf.ksize);
      if (conf.edges === 2) {
        cv.convertScaleAbs(dst, dst, 1, 0);
      } else {
        dst.convertTo(dst, cv.CV_8UC4);
      }
    }
  },
  scharr (conf) {
    // Cannot get this one to work. Not sure what the issue is.
    return function (src, dst) {
      cv.Scharr(src, dst, cv.CV_U8, conf.dx, conf.dy, conf.scale || 1, conf.delta || 0);
    }
  },
  laplacian (conf) {
    return function (src, dst) {
      cv.Laplacian(src, dst, cv.CV_64F, conf.ksize, conf.scale || 1, conf.delta || 0);
      if (conf.edges === 2) {
        cv.convertScaleAbs(dst, dst, 1, 0);
      } else {
        dst.convertTo(dst, cv.CV_8UC4);
      }
    }
  },
});

/***/ }),

/***/ "./src/scripts/app/transforms/index.js":
/*!*********************************************!*\
  !*** ./src/scripts/app/transforms/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _arithmetic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arithmetic */ "./src/scripts/app/transforms/arithmetic.js");
/* harmony import */ var _threshold__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./threshold */ "./src/scripts/app/transforms/threshold.js");
/* harmony import */ var _smooth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./smooth */ "./src/scripts/app/transforms/smooth.js");
/* harmony import */ var _featureDetect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./featureDetect */ "./src/scripts/app/transforms/featureDetect.js");
/* harmony import */ var _morph__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./morph */ "./src/scripts/app/transforms/morph.js");
/* harmony import */ var _imageGradient__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./imageGradient */ "./src/scripts/app/transforms/imageGradient.js");
/* harmony import */ var _alter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./alter */ "./src/scripts/app/transforms/alter.js");
/* harmony import */ var _histogram__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./histogram */ "./src/scripts/app/transforms/histogram.js");









/* harmony default export */ __webpack_exports__["default"] = ({
  arithmetic: _arithmetic__WEBPACK_IMPORTED_MODULE_0__["default"],
  threshold: _threshold__WEBPACK_IMPORTED_MODULE_1__["default"],
  smooth: _smooth__WEBPACK_IMPORTED_MODULE_2__["default"],
  featureDetect: _featureDetect__WEBPACK_IMPORTED_MODULE_3__["default"],
  morph: _morph__WEBPACK_IMPORTED_MODULE_4__["default"],
  imageGradient: _imageGradient__WEBPACK_IMPORTED_MODULE_5__["default"],
  alter: _alter__WEBPACK_IMPORTED_MODULE_6__["default"],
  histogram: _histogram__WEBPACK_IMPORTED_MODULE_7__["default"]
});

/***/ }),

/***/ "./src/scripts/app/transforms/morph.js":
/*!*********************************************!*\
  !*** ./src/scripts/app/transforms/morph.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CacheController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../CacheController */ "./src/scripts/app/CacheController.js");


// https://docs.opencv.org/3.1.0/d9/d61/tutorial_py_morphological_ops.html

function morph (src, dst, morphType, conf) {
  const cache = _CacheController__WEBPACK_IMPORTED_MODULE_0__["default"].getCache(conf, morphType);

  cache.use('ksize', () => new cv.Size(conf.ksize, conf.ksize));
  cache.use('kernel', () => cv.getStructuringElement(cv.MORPH_RECT, cache.ksize));
  cache.use('anchor', () => new cv.Point(conf.anchor, conf.anchor));

  cv.morphologyEx(src, dst, morphType, cache.kernel);
}


/* harmony default export */ __webpack_exports__["default"] = ({
  erode (conf) {
    return function (src, dst) {
      morph.call(this, src, dst, cv.MORPH_ERODE, conf);
    }
  },
  dilate (conf) {
    return function (src, dst) {
      morph.call(this, src, dst, cv.MORPH_DILATE, conf);
    }
  },
  open (conf) {
    return function (src, dst) {
      morph.call(this, src, dst, cv.MORPH_OPEN, conf);
    }
  },
  close (conf) {
    return function (src, dst) {
      morph.call(this, src, dst, cv.MORPH_CLOSE, conf);
    }
  },
  gradient (conf) {
    return function (src, dst) {
      morph.call(this, src, dst, cv.MORPH_GRADIENT, conf);
    }
  },
  topHat (conf) {
    return function (src, dst) {
      morph.call(this, src, dst, cv.MORPH_TOPHAT, conf);
    }
  },
  blackHat (conf) {
    return function (src, dst) {
      morph.call(this, src, dst, cv.MORPH_BLACKHAT, conf);
    }
  },
});

/***/ }),

/***/ "./src/scripts/app/transforms/smooth.js":
/*!**********************************************!*\
  !*** ./src/scripts/app/transforms/smooth.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CacheController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../CacheController */ "./src/scripts/app/CacheController.js");


// https://docs.opencv.org/3.4/dd/d6a/tutorial_js_filtering.html

/* harmony default export */ __webpack_exports__["default"] = ({
  blur (conf) {
    const cache = _CacheController__WEBPACK_IMPORTED_MODULE_0__["default"].getCache(conf, 'blur');

    return function (src, dst) {
      cache.use('ksize', () => new cv.Size(conf.ksize, conf.ksize));
      cache.use('anchor', () => new cv.Point(conf.anchor, conf.anchor));

      cv.boxFilter(src, dst, -1, cache.ksize, cache.anchor, true, cv.BORDER_DEFAULT);
    }
  },
  gaussian (conf) {
    const cache = _CacheController__WEBPACK_IMPORTED_MODULE_0__["default"].getCache(conf, 'gaussian');

    return function (src, dst) {
      cache.use('ksize', () => new cv.Size(conf.ksize, conf.ksize)); // must be an odd number

      cv.GaussianBlur(src, dst, cache.ksize, 10, 10, cv.BORDER_DEFAULT);
    }
  },
  median (conf) {
    return function (src, dst) {
      cv.medianBlur(src, dst, conf.size); //last argument must be an odd number
    }
  },
  bilateral (conf) {
    const cache = _CacheController__WEBPACK_IMPORTED_MODULE_0__["default"].getCache(conf, 'bilateral');

    return function (src, dst) {
      cache.use('bilateralSrc', () => new cv.Mat(src.rows, src.cols, cv.CV_8UC3));
  
      cv.cvtColor(src, cache.bilateralSrc, cv.COLOR_RGBA2RGB);

      cv.bilateralFilter(cache.bilateralSrc, dst, conf.size, conf.sigmaColor, conf.sigmaSpace, cv.BORDER_DEFAULT);
    }
  }
});

/***/ }),

/***/ "./src/scripts/app/transforms/threshold.js":
/*!*************************************************!*\
  !*** ./src/scripts/app/transforms/threshold.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CacheController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../CacheController */ "./src/scripts/app/CacheController.js");


// https://docs.opencv.org/3.4.1/d7/dd0/tutorial_js_thresholding.html

function threshold (src, dst, threshType, conf) { // a lot of unclear details on this stuff
  // valid conf.flag values are OTSU and TRIANGLE
  // OTSU and TRIANGLE are algorithms used to choose the optimal threshhold (t1) value
  const flag = conf.flag ? cv[`THRESH_${conf.flag.toUpperCase()}`] : 0;

  if (flag) {
    cv.cvtColor(src, dst, cv.COLOR_RGBA2GRAY); // OTSU and TRIANGLE both require src and dst mats to be single-channel
    cv.threshold(dst, dst, conf.t1, conf.t2 || 255, threshType | flag); // yes, a bitwise or is used to append the flag.
  } else {
    cv.threshold(src, dst, conf.t1, conf.t2 || 255, threshType);
  }
}

function adaptive (src, dst, adaptiveMethod, conf) {
  cv.cvtColor(src, dst, cv.COLOR_RGBA2GRAY, 0); // must be single-channel
  cv.adaptiveThreshold(dst, dst, 255, adaptiveMethod, cv.THRESH_BINARY, conf.ksize, conf.c || 0);
}

/* harmony default export */ __webpack_exports__["default"] = ({
  inRange (conf) {
    const cache = _CacheController__WEBPACK_IMPORTED_MODULE_0__["default"].getCache(conf, 'inRange');

    return function (src, dst) {
      cache.use('lo', () => new cv.Mat(src.rows, src.cols, src.type(), [conf.lo,conf.lo,conf.lo,255]));
      cache.use('hi', () => new cv.Mat(src.rows, src.cols, src.type(), [conf.hi,conf.hi,conf.hi,255]));

      cv.inRange(src, cache.lo, cache.hi, dst);
    }
  },
  binary (conf) {
    return function (src, dst) {
      threshold.call(this, src, dst, cv.THRESH_BINARY, conf);
    }
  },
  binaryInv (conf) {
    return function (src, dst) {
      threshold.call(this, src, dst, cv.THRESH_BINARY_INV, conf);
    }
  },
  trunc (conf) {
    return function (src, dst) {
      threshold.call(this, src, dst, cv.THRESH_TRUNC, conf);
    }
  },
  toZero (conf) {
    return function (src, dst) {
      threshold.call(this, src, dst, cv.THRESH_TOZERO, conf);
    }
  },
  toZeroInv (conf) {
    return function (src, dst) {
      threshold.call(this, src, dst, cv.THRESH_TOZERO_INV, conf);
    }
  },
  adaptiveMean (conf) {
    return function (src, dst) {
      adaptive.call(this, src, dst, cv.ADAPTIVE_THRESH_MEAN_C, conf);
    }
  },
  adaptiveGaussian (conf) {
    return function (src, dst) {
      adaptive.call(this, src, dst, cv.ADAPTIVE_THRESH_GAUSSIAN_C, conf);
    }
  },
});

/***/ }),

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/index.scss */ "./src/styles/index.scss");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/index */ "./src/scripts/app/index.js");
// styles


// application


/***/ }),

/***/ "./src/scripts/lib/dragula.js":
/*!************************************!*\
  !*** ./src/scripts/lib/dragula.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, setImmediate) {var require;var require;!function(e){if(true)module.exports=e();else { var n; }}(function(){return function e(n,t,r){function o(u,c){if(!t[u]){if(!n[u]){var a="function"==typeof require&&require;if(!c&&a)return require(u,!0);if(i)return i(u,!0);var f=new Error("Cannot find module '"+u+"'");throw f.code="MODULE_NOT_FOUND",f}var l=t[u]={exports:{}};n[u][0].call(l.exports,function(e){var t=n[u][1][e];return o(t?t:e)},l,l.exports,e,n,t,r)}return t[u].exports}for(var i="function"==typeof require&&require,u=0;u<r.length;u++)o(r[u]);return o}({1:[function(e,n,t){"use strict";function r(e){var n=u[e];return n?n.lastIndex=0:u[e]=n=new RegExp(c+e+a,"g"),n}function o(e,n){var t=e.className;t.length?r(n).test(t)||(e.className+=" "+n):e.className=n}function i(e,n){e.className=e.className.replace(r(n)," ").trim()}var u={},c="(?:^|\\s)",a="(?:\\s|$)";n.exports={add:o,rm:i}},{}],2:[function(e,n,t){(function(t){"use strict";function r(e,n){function t(e){return-1!==le.containers.indexOf(e)||fe.isContainer(e)}function r(e){var n=e?"remove":"add";o(S,n,"mousedown",O),o(S,n,"mouseup",L)}function c(e){var n=e?"remove":"add";o(S,n,"mousemove",N)}function m(e){var n=e?"remove":"add";w[n](S,"selectstart",C),w[n](S,"click",C)}function h(){r(!0),L({})}function C(e){ce&&e.preventDefault()}function O(e){ne=e.clientX,te=e.clientY;var n=1!==i(e)||e.metaKey||e.ctrlKey;if(!n){var t=e.target,r=T(t);r&&(ce=r,c(),"mousedown"===e.type&&(p(t)?t.focus():e.preventDefault()))}}function N(e){if(ce){if(0===i(e))return void L({});if(void 0===e.clientX||e.clientX!==ne||void 0===e.clientY||e.clientY!==te){if(fe.ignoreInputTextSelection){var n=y("clientX",e),t=y("clientY",e),r=x.elementFromPoint(n,t);if(p(r))return}var o=ce;c(!0),m(),D(),B(o);var a=u(W);Z=y("pageX",e)-a.left,ee=y("pageY",e)-a.top,E.add(ie||W,"gu-transit"),K(),U(e)}}}function T(e){if(!(le.dragging&&J||t(e))){for(var n=e;v(e)&&t(v(e))===!1;){if(fe.invalid(e,n))return;if(e=v(e),!e)return}var r=v(e);if(r&&!fe.invalid(e,n)){var o=fe.moves(e,r,n,g(e));if(o)return{item:e,source:r}}}}function X(e){return!!T(e)}function Y(e){var n=T(e);n&&B(n)}function B(e){$(e.item,e.source)&&(ie=e.item.cloneNode(!0),le.emit("cloned",ie,e.item,"copy")),Q=e.source,W=e.item,re=oe=g(e.item),le.dragging=!0,le.emit("drag",W,Q)}function P(){return!1}function D(){if(le.dragging){var e=ie||W;M(e,v(e))}}function I(){ce=!1,c(!0),m(!0)}function L(e){if(I(),le.dragging){var n=ie||W,t=y("clientX",e),r=y("clientY",e),o=a(J,t,r),i=q(o,t,r);i&&(ie&&fe.copySortSource||!ie||i!==Q)?M(n,i):fe.removeOnSpill?R():A()}}function M(e,n){var t=v(e);ie&&fe.copySortSource&&n===Q&&t.removeChild(W),k(n)?le.emit("cancel",e,Q,Q):le.emit("drop",e,n,Q,oe),j()}function R(){if(le.dragging){var e=ie||W,n=v(e);n&&n.removeChild(e),le.emit(ie?"cancel":"remove",e,n,Q),j()}}function A(e){if(le.dragging){var n=arguments.length>0?e:fe.revertOnSpill,t=ie||W,r=v(t),o=k(r);o===!1&&n&&(ie?r&&r.removeChild(ie):Q.insertBefore(t,re)),o||n?le.emit("cancel",t,Q,Q):le.emit("drop",t,r,Q,oe),j()}}function j(){var e=ie||W;I(),z(),e&&E.rm(e,"gu-transit"),ue&&clearTimeout(ue),le.dragging=!1,ae&&le.emit("out",e,ae,Q),le.emit("dragend",e),Q=W=ie=re=oe=ue=ae=null}function k(e,n){var t;return t=void 0!==n?n:J?oe:g(ie||W),e===Q&&t===re}function q(e,n,r){function o(){var o=t(i);if(o===!1)return!1;var u=H(i,e),c=V(i,u,n,r),a=k(i,c);return a?!0:fe.accepts(W,i,Q,c)}for(var i=e;i&&!o();)i=v(i);return i}function U(e){function n(e){le.emit(e,f,ae,Q)}function t(){s&&n("over")}function r(){ae&&n("out")}if(J){e.preventDefault();var o=y("clientX",e),i=y("clientY",e),u=o-Z,c=i-ee;J.style.left=u+"px",J.style.top=c+"px";var f=ie||W,l=a(J,o,i),d=q(l,o,i),s=null!==d&&d!==ae;(s||null===d)&&(r(),ae=d,t());var p=v(f);if(d===Q&&ie&&!fe.copySortSource)return void(p&&p.removeChild(f));var m,h=H(d,l);if(null!==h)m=V(d,h,o,i);else{if(fe.revertOnSpill!==!0||ie)return void(ie&&p&&p.removeChild(f));m=re,d=Q}(null===m&&s||m!==f&&m!==g(f))&&(oe=m,d.insertBefore(f,m),le.emit("shadow",f,d,Q))}}function _(e){E.rm(e,"gu-hide")}function F(e){le.dragging&&E.add(e,"gu-hide")}function K(){if(!J){var e=W.getBoundingClientRect();J=W.cloneNode(!0),J.style.width=d(e)+"px",J.style.height=s(e)+"px",E.rm(J,"gu-transit"),E.add(J,"gu-mirror"),fe.mirrorContainer.appendChild(J),o(S,"add","mousemove",U),E.add(fe.mirrorContainer,"gu-unselectable"),le.emit("cloned",J,W,"mirror")}}function z(){J&&(E.rm(fe.mirrorContainer,"gu-unselectable"),o(S,"remove","mousemove",U),v(J).removeChild(J),J=null)}function H(e,n){for(var t=n;t!==e&&v(t)!==e;)t=v(t);return t===S?null:t}function V(e,n,t,r){function o(){var n,o,i,u=e.children.length;for(n=0;u>n;n++){if(o=e.children[n],i=o.getBoundingClientRect(),c&&i.left+i.width/2>t)return o;if(!c&&i.top+i.height/2>r)return o}return null}function i(){var e=n.getBoundingClientRect();return u(c?t>e.left+d(e)/2:r>e.top+s(e)/2)}function u(e){return e?g(n):n}var c="horizontal"===fe.direction,a=n!==e?i():o();return a}function $(e,n){return"boolean"==typeof fe.copy?fe.copy:fe.copy(e,n)}var G=arguments.length;1===G&&Array.isArray(e)===!1&&(n=e,e=[]);var J,Q,W,Z,ee,ne,te,re,oe,ie,ue,ce,ae=null,fe=n||{};void 0===fe.moves&&(fe.moves=l),void 0===fe.accepts&&(fe.accepts=l),void 0===fe.invalid&&(fe.invalid=P),void 0===fe.containers&&(fe.containers=e||[]),void 0===fe.isContainer&&(fe.isContainer=f),void 0===fe.copy&&(fe.copy=!1),void 0===fe.copySortSource&&(fe.copySortSource=!1),void 0===fe.revertOnSpill&&(fe.revertOnSpill=!1),void 0===fe.removeOnSpill&&(fe.removeOnSpill=!1),void 0===fe.direction&&(fe.direction="vertical"),void 0===fe.ignoreInputTextSelection&&(fe.ignoreInputTextSelection=!0),void 0===fe.mirrorContainer&&(fe.mirrorContainer=x.body);var le=b({containers:fe.containers,start:Y,end:D,cancel:A,remove:R,destroy:h,canMove:X,dragging:!1});return fe.removeOnSpill===!0&&le.on("over",_).on("out",F),r(),le}function o(e,n,r,o){var i={mouseup:"touchend",mousedown:"touchstart",mousemove:"touchmove"},u={mouseup:"pointerup",mousedown:"pointerdown",mousemove:"pointermove"},c={mouseup:"MSPointerUp",mousedown:"MSPointerDown",mousemove:"MSPointerMove"};t.navigator.pointerEnabled?w[n](e,u[r],o):t.navigator.msPointerEnabled?w[n](e,c[r],o):(w[n](e,i[r],o),w[n](e,r,o))}function i(e){if(void 0!==e.touches)return e.touches.length;if(void 0!==e.which&&0!==e.which)return e.which;if(void 0!==e.buttons)return e.buttons;var n=e.button;return void 0!==n?1&n?1:2&n?3:4&n?2:0:void 0}function u(e){var n=e.getBoundingClientRect();return{left:n.left+c("scrollLeft","pageXOffset"),top:n.top+c("scrollTop","pageYOffset")}}function c(e,n){return"undefined"!=typeof t[n]?t[n]:S.clientHeight?S[e]:x.body[e]}function a(e,n,t){var r,o=e||{},i=o.className;return o.className+=" gu-hide",r=x.elementFromPoint(n,t),o.className=i,r}function f(){return!1}function l(){return!0}function d(e){return e.width||e.right-e.left}function s(e){return e.height||e.bottom-e.top}function v(e){return e.parentNode===x?null:e.parentNode}function p(e){return"INPUT"===e.tagName||"TEXTAREA"===e.tagName||"SELECT"===e.tagName||m(e)}function m(e){return e?"false"===e.contentEditable?!1:"true"===e.contentEditable?!0:m(v(e)):!1}function g(e){function n(){var n=e;do n=n.nextSibling;while(n&&1!==n.nodeType);return n}return e.nextElementSibling||n()}function h(e){return e.targetTouches&&e.targetTouches.length?e.targetTouches[0]:e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:e}function y(e,n){var t=h(n),r={pageX:"clientX",pageY:"clientY"};return e in r&&!(e in t)&&r[e]in t&&(e=r[e]),t[e]}var b=e("contra/emitter"),w=e("crossvent"),E=e("./classes"),x=document,S=x.documentElement;n.exports=r}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./classes":1,"contra/emitter":5,crossvent:6}],3:[function(e,n,t){n.exports=function(e,n){return Array.prototype.slice.call(e,n)}},{}],4:[function(e,n,t){"use strict";var r=e("ticky");n.exports=function(e,n,t){e&&r(function(){e.apply(t||null,n||[])})}},{ticky:9}],5:[function(e,n,t){"use strict";var r=e("atoa"),o=e("./debounce");n.exports=function(e,n){var t=n||{},i={};return void 0===e&&(e={}),e.on=function(n,t){return i[n]?i[n].push(t):i[n]=[t],e},e.once=function(n,t){return t._once=!0,e.on(n,t),e},e.off=function(n,t){var r=arguments.length;if(1===r)delete i[n];else if(0===r)i={};else{var o=i[n];if(!o)return e;o.splice(o.indexOf(t),1)}return e},e.emit=function(){var n=r(arguments);return e.emitterSnapshot(n.shift()).apply(this,n)},e.emitterSnapshot=function(n){var u=(i[n]||[]).slice(0);return function(){var i=r(arguments),c=this||e;if("error"===n&&t["throws"]!==!1&&!u.length)throw 1===i.length?i[0]:i;return u.forEach(function(r){t.async?o(r,i,c):r.apply(c,i),r._once&&e.off(n,r)}),e}},e}},{"./debounce":4,atoa:3}],6:[function(e,n,t){(function(t){"use strict";function r(e,n,t,r){return e.addEventListener(n,t,r)}function o(e,n,t){return e.attachEvent("on"+n,f(e,n,t))}function i(e,n,t,r){return e.removeEventListener(n,t,r)}function u(e,n,t){var r=l(e,n,t);return r?e.detachEvent("on"+n,r):void 0}function c(e,n,t){function r(){var e;return p.createEvent?(e=p.createEvent("Event"),e.initEvent(n,!0,!0)):p.createEventObject&&(e=p.createEventObject()),e}function o(){return new s(n,{detail:t})}var i=-1===v.indexOf(n)?o():r();e.dispatchEvent?e.dispatchEvent(i):e.fireEvent("on"+n,i)}function a(e,n,r){return function(n){var o=n||t.event;o.target=o.target||o.srcElement,o.preventDefault=o.preventDefault||function(){o.returnValue=!1},o.stopPropagation=o.stopPropagation||function(){o.cancelBubble=!0},o.which=o.which||o.keyCode,r.call(e,o)}}function f(e,n,t){var r=l(e,n,t)||a(e,n,t);return h.push({wrapper:r,element:e,type:n,fn:t}),r}function l(e,n,t){var r=d(e,n,t);if(r){var o=h[r].wrapper;return h.splice(r,1),o}}function d(e,n,t){var r,o;for(r=0;r<h.length;r++)if(o=h[r],o.element===e&&o.type===n&&o.fn===t)return r}var s=e("custom-event"),v=e("./eventmap"),p=t.document,m=r,g=i,h=[];t.addEventListener||(m=o,g=u),n.exports={add:m,remove:g,fabricate:c}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./eventmap":7,"custom-event":8}],7:[function(e,n,t){(function(e){"use strict";var t=[],r="",o=/^on/;for(r in e)o.test(r)&&t.push(r.slice(2));n.exports=t}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],8:[function(e,n,t){(function(e){function t(){try{var e=new r("cat",{detail:{foo:"bar"}});return"cat"===e.type&&"bar"===e.detail.foo}catch(n){}return!1}var r=e.CustomEvent;n.exports=t()?r:"function"==typeof document.createEvent?function(e,n){var t=document.createEvent("CustomEvent");return n?t.initCustomEvent(e,n.bubbles,n.cancelable,n.detail):t.initCustomEvent(e,!1,!1,void 0),t}:function(e,n){var t=document.createEventObject();return t.type=e,n?(t.bubbles=Boolean(n.bubbles),t.cancelable=Boolean(n.cancelable),t.detail=n.detail):(t.bubbles=!1,t.cancelable=!1,t.detail=void 0),t}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],9:[function(e,n,t){var r,o="function"==typeof setImmediate;r=o?function(e){setImmediate(e)}:function(e){setTimeout(e,0)},n.exports=r},{}]},{},[2])(2)});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../../../node_modules/timers-browserify/main.js */ "./node_modules/timers-browserify/main.js").setImmediate))

/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 0:
/*!*****************************************************!*\
  !*** multi ./src/scripts/index.js ./src/index.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./src/scripts/index.js */"./src/scripts/index.js");
module.exports = __webpack_require__(/*! ./src/index.html */"./src/index.html");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2V0aW1tZWRpYXRlL3NldEltbWVkaWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdGltZXJzLWJyb3dzZXJpZnkvbWFpbi5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5odG1sIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2FwcC9DYWNoZUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvYXBwL0NhbnZhc091dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9hcHAvQ29tcG9zZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvYXBwL091dHB1dENvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvYXBwL1dlYmNhbS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9hcHAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvYXBwL3NldHRpbmdzL2NvbXBvc2l0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9hcHAvc2V0dGluZ3Mvc2NoZW1hcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9hcHAvdHJhbnNmb3Jtcy9hbHRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9hcHAvdHJhbnNmb3Jtcy9hcml0aG1ldGljLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2FwcC90cmFuc2Zvcm1zL2ZlYXR1cmVEZXRlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvYXBwL3RyYW5zZm9ybXMvaGlzdG9ncmFtLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2FwcC90cmFuc2Zvcm1zL2ltYWdlR3JhZGllbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvYXBwL3RyYW5zZm9ybXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvYXBwL3RyYW5zZm9ybXMvbW9ycGguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvYXBwL3RyYW5zZm9ybXMvc21vb3RoLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2FwcC90cmFuc2Zvcm1zL3RocmVzaG9sZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9saWIvZHJhZ3VsYS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3M/MzVjMSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFDQUFxQzs7QUFFckM7QUFDQTtBQUNBOztBQUVBLDJCQUEyQjtB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Ozs7Ozs7O0FDbEVEO0FBQUE7QUFBdUM7OztBQUd2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLG1EQUFVO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUixHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLE1BQU0sbURBQVU7QUFDaEIsTUFBTSxtREFBVTtBQUNoQixNQUFNLG1EQUFVO0FBQ2hCO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLE1BQU0sbURBQVU7QUFDaEI7QUFDQSxPQUFPO0FBQ1AsTUFBTSxtREFBVTtBQUNoQjtBQUNBO0FBQ0EsT0FBTztBQUNQLE1BQU0sbURBQVU7QUFDaEI7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsTUFBTSxtREFBVTtBQUNoQjtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxNQUFNLG1EQUFVO0FBQ2hCO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsTUFBTSxtREFBVTtBQUNoQjtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxNQUFNLG1EQUFVO0FBQ2hCO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsTUFBTSxtREFBVTtBQUNoQjtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxNQUFNLG1EQUFVO0FBQ2hCLE1BQU0sbURBQVU7QUFDaEI7QUFDQSxPQUFPO0FBQ1AsTUFBTSxtREFBVTtBQUNoQjtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxNQUFNLG1EQUFVO0FBQ2hCO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsTUFBTSxtREFBVTtBQUNoQjtBQUNBO0FBQ0EsT0FBTztBQUNQLE1BQU0sbURBQVU7QUFDaEI7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLE1BQU0sbURBQVU7QUFDaEI7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBOztBQUVlLDJFQUFZLEU7Ozs7Ozs7Ozs7OztBQ3pIM0I7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQixHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQixHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUixNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7O0FBRWUsc0VBQU8sRTs7Ozs7Ozs7Ozs7O0FDckx0QjtBQUFBO0FBQUE7QUFDaUQ7O0FBRWxDO0FBQ2Y7QUFDQTtBQUNBLGtCQUFrQix3REFBZTs7QUFFakM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEs7QUFDQSxHQUFHO0FBQ0gsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOzs7Ozs7Ozs7Ozs7O0FDakNEO0FBQUE7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ2pCQTtBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0Esb0RBQW9EO0FBQ3BEO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esc0JBQXNCLGdCQUFnQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0IseUJBQXlCO0FBQ3pCO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0JBQXNCLGdCQUFnQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQyxFQUFDOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGdCQUFnQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLGNBQWMsZ0I7Ozs7Ozs7Ozs7OztBQ3BFOUI7QUFBQTtBQUFpRDs7QUFFbEM7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxrQkFBa0Isd0RBQWU7QUFDakM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFOzs7Ozs7Ozs7Ozs7QUNwQkQ7QUFBQTs7QUFFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQzs7Ozs7Ozs7Ozs7O0FDN0JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFzQztBQUNGO0FBQ047QUFDYztBQUNoQjtBQUNnQjtBQUNoQjtBQUNROztBQUVyQjtBQUNmLEVBQUUsK0RBQVU7QUFDWixFQUFFLDZEQUFTO0FBQ1gsRUFBRSx1REFBTTtBQUNSLEVBQUUscUVBQWE7QUFDZixFQUFFLHFEQUFLO0FBQ1AsRUFBRSxxRUFBYTtBQUNmLEVBQUUscURBQUs7QUFDUCxFQUFFLDZEQUFTO0FBQ1gsQ0FBQyxFOzs7Ozs7Ozs7Ozs7QUNsQkQ7QUFBQTtBQUFpRDs7QUFFakQ7O0FBRUE7QUFDQSxnQkFBZ0Isd0RBQWU7O0FBRS9CO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILEM7Ozs7Ozs7Ozs7OztBQ25EQTtBQUFBO0FBQWlEOztBQUVqRDs7QUFFZTtBQUNmO0FBQ0Esa0JBQWtCLHdEQUFlOztBQUVqQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLGtCQUFrQix3REFBZTs7QUFFakM7QUFDQSxvRUFBb0U7O0FBRXBFO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLHlDQUF5QztBQUN6QztBQUNBLEdBQUc7QUFDSDtBQUNBLGtCQUFrQix3REFBZTs7QUFFakM7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUN4Q0E7QUFBQTtBQUFpRDs7QUFFakQ7O0FBRUEsaURBQWlEO0FBQ2pEO0FBQ0E7QUFDQSx3Q0FBd0Msd0JBQXdCOztBQUVoRTtBQUNBLDhDQUE4QztBQUM5Qyx1RUFBdUU7QUFDdkUsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLCtDQUErQztBQUMvQztBQUNBOztBQUVlO0FBQ2Y7QUFDQSxrQkFBa0Isd0RBQWU7O0FBRWpDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILEM7Ozs7Ozs7Ozs7OztBQ3BFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQzhCOztBQUU5Qjs7Ozs7Ozs7Ozs7O0FDSEEsaUdBQWEsR0FBRyxJQUFvRCxvQkFBb0IsS0FBSyxVQUF3TCxDQUFDLFlBQVkseUJBQXlCLGdCQUFnQixVQUFVLFVBQVUsMENBQTBDLGdCQUFnQixPQUFDLE9BQU8sb0JBQW9CLDhDQUE4QyxrQ0FBa0MsWUFBWSxZQUFZLG1DQUFtQyxpQkFBaUIsZ0JBQWdCLHNCQUFzQixvQkFBb0Isa0RBQWtELFdBQVcsWUFBWSxTQUFTLEVBQUUsbUJBQW1CLGFBQWEsY0FBYyxXQUFXLHNEQUFzRCxnQkFBZ0Isa0JBQWtCLDBEQUEwRCxnQkFBZ0IsaURBQWlELFFBQVEsNkJBQTZCLFdBQVcsWUFBWSxHQUFHLHFCQUFxQixhQUFhLGFBQWEsZ0JBQWdCLGNBQWMsdURBQXVELGNBQWMsdUJBQXVCLHdDQUF3QyxjQUFjLHVCQUF1QixxQkFBcUIsY0FBYyx1QkFBdUIsMENBQTBDLGFBQWEsVUFBVSxFQUFFLGNBQWMsdUJBQXVCLGNBQWMsMEJBQTBCLHFDQUFxQyxPQUFPLHNCQUFzQix5RUFBeUUsY0FBYyxPQUFPLDRCQUE0QixFQUFFLDJFQUEyRSxnQ0FBZ0MsZ0VBQWdFLGVBQWUsU0FBUyxtQkFBbUIsV0FBVyxpRkFBaUYsY0FBYyw0QkFBNEIsWUFBWSxtQkFBbUIsRUFBRSwwQkFBMEIsb0JBQW9CLFdBQVcsd0JBQXdCLDJCQUEyQixZQUFZLG1CQUFtQixjQUFjLGFBQWEsY0FBYyxXQUFXLFFBQVEsY0FBYyx3SkFBd0osYUFBYSxTQUFTLGFBQWEsZ0JBQWdCLFlBQVksV0FBVyxhQUFhLGtCQUFrQixjQUFjLG9CQUFvQixvRUFBb0Usd0VBQXdFLGdCQUFnQixXQUFXLHlHQUF5RyxhQUFhLGdCQUFnQixtQkFBbUIsNkRBQTZELGNBQWMsZ0JBQWdCLGtFQUFrRSxxSEFBcUgsYUFBYSxZQUFZLDJJQUEySSxnQkFBZ0IsTUFBTSxrREFBa0Qsa0JBQWtCLGFBQWEsV0FBVyxtQkFBbUIsbUNBQW1DLGdDQUFnQyxZQUFZLFFBQVEsUUFBUSxTQUFTLGNBQWMsY0FBYyxrQkFBa0IsYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLG1CQUFtQixtREFBbUQsdUNBQXVDLHFEQUFxRCw4QkFBOEIsV0FBVyxrRUFBa0UsZUFBZSx5QkFBeUIsS0FBSyxrRUFBa0UsU0FBUyxvRkFBb0YsY0FBYyxrQkFBa0IsY0FBYyxnQ0FBZ0MsYUFBYSxPQUFPLGdDQUFnQyxvUEFBb1AsYUFBYSx1R0FBdUcsZ0JBQWdCLFlBQVksZ0JBQWdCLFFBQVEsb0JBQW9CLG9CQUFvQixhQUFhLDhCQUE4QixRQUFRLElBQUksS0FBSyw4RUFBOEUsbUNBQW1DLFlBQVksYUFBYSxnQ0FBZ0MsMkNBQTJDLGNBQWMsZ0JBQWdCLGtEQUFrRCxTQUFTLGdCQUFnQixxREFBcUQsdUJBQXVCLHlDQUF5QyxxREFBcUQsdWlCQUF1aUIsVUFBVSx5RkFBeUYsRUFBRSxpRUFBaUUsb0JBQW9CLE9BQU8sZ0VBQWdFLElBQUksb0VBQW9FLElBQUksMkVBQTJFLG1IQUFtSCxjQUFjLDhDQUE4QyxnREFBZ0QsdUNBQXVDLGVBQWUsNkNBQTZDLGNBQWMsZ0NBQWdDLE9BQU8sa0ZBQWtGLGdCQUFnQixrRUFBa0Usa0JBQWtCLGFBQWEsZUFBZSx5RUFBeUUsYUFBYSxTQUFTLGFBQWEsU0FBUyxjQUFjLCtCQUErQixjQUFjLGdDQUFnQyxjQUFjLDBDQUEwQyxjQUFjLDhFQUE4RSxjQUFjLGlGQUFpRixjQUFjLGFBQWEsUUFBUSxtQkFBbUIseUJBQXlCLFNBQVMsaUNBQWlDLGNBQWMsa0lBQWtJLGdCQUFnQixjQUFjLGlDQUFpQyxrREFBa0QsMkZBQTJGLFlBQVksZ0hBQWdILEVBQUUsRUFBRSw2Q0FBNkMscUJBQXFCLHdCQUF3Qix3Q0FBd0MsR0FBRyxxQkFBcUIsYUFBYSxpQkFBaUIsMEJBQTBCLGdCQUFnQix1QkFBdUIsR0FBRyxFQUFFLFFBQVEscUJBQXFCLGFBQWEsa0NBQWtDLHdCQUF3QixXQUFXLE1BQU0sd0JBQXdCLHFCQUFxQixvQ0FBb0Msc0JBQXNCLDhCQUE4QixxQkFBcUIsdUJBQXVCLHFCQUFxQixtQkFBbUIsS0FBSyxXQUFXLGVBQWUseUJBQXlCLFNBQVMsbUJBQW1CLG1CQUFtQixrREFBa0QsK0JBQStCLDBCQUEwQixrQkFBa0IsNkJBQTZCLHNFQUFzRSw2QkFBNkIsa0RBQWtELEtBQUssSUFBSSxFQUFFLHNCQUFzQixxQkFBcUIsYUFBYSxhQUFhLG9CQUFvQixpQ0FBaUMsa0JBQWtCLHNDQUFzQyxvQkFBb0Isb0NBQW9DLGtCQUFrQixlQUFlLHdDQUF3QyxrQkFBa0IsYUFBYSxNQUFNLHNIQUFzSCxhQUFhLGdCQUFnQixTQUFTLEVBQUUsZ0NBQWdDLHlEQUF5RCxrQkFBa0IsbUJBQW1CLGlCQUFpQiw4RUFBOEUsaUJBQWlCLGlEQUFpRCxrQkFBa0IseUNBQXlDLGtCQUFrQix5QkFBeUIsZUFBZSxnQ0FBZ0MsSUFBSSxrQkFBa0IsZUFBZSxNQUFNLG1CQUFtQix3QkFBd0Isa0JBQWtCLFFBQVEsUUFBUSxXQUFXLDJEQUEyRCxvRUFBb0UseUNBQXlDLDRCQUE0QixnSEFBZ0gsRUFBRSxFQUFFLGdDQUFnQyxxQkFBcUIsYUFBYSxhQUFhLHNCQUFzQix5Q0FBeUMsWUFBWSxnSEFBZ0gsRUFBRSxHQUFHLHFCQUFxQixhQUFhLGFBQWEsSUFBSSxtQkFBbUIsUUFBUSxXQUFXLEVBQUUsMkNBQTJDLFVBQVUsU0FBUyxvQkFBb0Isc0VBQXNFLDBDQUEwQyxrR0FBa0csZUFBZSxtQ0FBbUMsd0pBQXdKLGdIQUFnSCxFQUFFLEdBQUcscUJBQXFCLHdDQUF3QyxnQkFBZ0IsZ0JBQWdCLGFBQWEsZ0JBQWdCLGFBQWEsR0FBRyxFQUFFLEdBQUcsU0FBUyxFOzs7Ozs7Ozs7Ozs7QUNBbG9XLHVDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIiwiKGZ1bmN0aW9uIChnbG9iYWwsIHVuZGVmaW5lZCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgaWYgKGdsb2JhbC5zZXRJbW1lZGlhdGUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBuZXh0SGFuZGxlID0gMTsgLy8gU3BlYyBzYXlzIGdyZWF0ZXIgdGhhbiB6ZXJvXG4gICAgdmFyIHRhc2tzQnlIYW5kbGUgPSB7fTtcbiAgICB2YXIgY3VycmVudGx5UnVubmluZ0FUYXNrID0gZmFsc2U7XG4gICAgdmFyIGRvYyA9IGdsb2JhbC5kb2N1bWVudDtcbiAgICB2YXIgcmVnaXN0ZXJJbW1lZGlhdGU7XG5cbiAgICBmdW5jdGlvbiBzZXRJbW1lZGlhdGUoY2FsbGJhY2spIHtcbiAgICAgIC8vIENhbGxiYWNrIGNhbiBlaXRoZXIgYmUgYSBmdW5jdGlvbiBvciBhIHN0cmluZ1xuICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIGNhbGxiYWNrID0gbmV3IEZ1bmN0aW9uKFwiXCIgKyBjYWxsYmFjayk7XG4gICAgICB9XG4gICAgICAvLyBDb3B5IGZ1bmN0aW9uIGFyZ3VtZW50c1xuICAgICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgYXJnc1tpXSA9IGFyZ3VtZW50c1tpICsgMV07XG4gICAgICB9XG4gICAgICAvLyBTdG9yZSBhbmQgcmVnaXN0ZXIgdGhlIHRhc2tcbiAgICAgIHZhciB0YXNrID0geyBjYWxsYmFjazogY2FsbGJhY2ssIGFyZ3M6IGFyZ3MgfTtcbiAgICAgIHRhc2tzQnlIYW5kbGVbbmV4dEhhbmRsZV0gPSB0YXNrO1xuICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUobmV4dEhhbmRsZSk7XG4gICAgICByZXR1cm4gbmV4dEhhbmRsZSsrO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsZWFySW1tZWRpYXRlKGhhbmRsZSkge1xuICAgICAgICBkZWxldGUgdGFza3NCeUhhbmRsZVtoYW5kbGVdO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJ1bih0YXNrKSB7XG4gICAgICAgIHZhciBjYWxsYmFjayA9IHRhc2suY2FsbGJhY2s7XG4gICAgICAgIHZhciBhcmdzID0gdGFzay5hcmdzO1xuICAgICAgICBzd2l0Y2ggKGFyZ3MubGVuZ3RoKSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgY2FsbGJhY2soYXJnc1swXSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgY2FsbGJhY2soYXJnc1swXSwgYXJnc1sxXSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgY2FsbGJhY2soYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGNhbGxiYWNrLmFwcGx5KHVuZGVmaW5lZCwgYXJncyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJ1bklmUHJlc2VudChoYW5kbGUpIHtcbiAgICAgICAgLy8gRnJvbSB0aGUgc3BlYzogXCJXYWl0IHVudGlsIGFueSBpbnZvY2F0aW9ucyBvZiB0aGlzIGFsZ29yaXRobSBzdGFydGVkIGJlZm9yZSB0aGlzIG9uZSBoYXZlIGNvbXBsZXRlZC5cIlxuICAgICAgICAvLyBTbyBpZiB3ZSdyZSBjdXJyZW50bHkgcnVubmluZyBhIHRhc2ssIHdlJ2xsIG5lZWQgdG8gZGVsYXkgdGhpcyBpbnZvY2F0aW9uLlxuICAgICAgICBpZiAoY3VycmVudGx5UnVubmluZ0FUYXNrKSB7XG4gICAgICAgICAgICAvLyBEZWxheSBieSBkb2luZyBhIHNldFRpbWVvdXQuIHNldEltbWVkaWF0ZSB3YXMgdHJpZWQgaW5zdGVhZCwgYnV0IGluIEZpcmVmb3ggNyBpdCBnZW5lcmF0ZWQgYVxuICAgICAgICAgICAgLy8gXCJ0b28gbXVjaCByZWN1cnNpb25cIiBlcnJvci5cbiAgICAgICAgICAgIHNldFRpbWVvdXQocnVuSWZQcmVzZW50LCAwLCBoYW5kbGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIHRhc2sgPSB0YXNrc0J5SGFuZGxlW2hhbmRsZV07XG4gICAgICAgICAgICBpZiAodGFzaykge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRseVJ1bm5pbmdBVGFzayA9IHRydWU7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgcnVuKHRhc2spO1xuICAgICAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW1tZWRpYXRlKGhhbmRsZSk7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRseVJ1bm5pbmdBVGFzayA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxOZXh0VGlja0ltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgcHJvY2Vzcy5uZXh0VGljayhmdW5jdGlvbiAoKSB7IHJ1bklmUHJlc2VudChoYW5kbGUpOyB9KTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjYW5Vc2VQb3N0TWVzc2FnZSgpIHtcbiAgICAgICAgLy8gVGhlIHRlc3QgYWdhaW5zdCBgaW1wb3J0U2NyaXB0c2AgcHJldmVudHMgdGhpcyBpbXBsZW1lbnRhdGlvbiBmcm9tIGJlaW5nIGluc3RhbGxlZCBpbnNpZGUgYSB3ZWIgd29ya2VyLFxuICAgICAgICAvLyB3aGVyZSBgZ2xvYmFsLnBvc3RNZXNzYWdlYCBtZWFucyBzb21ldGhpbmcgY29tcGxldGVseSBkaWZmZXJlbnQgYW5kIGNhbid0IGJlIHVzZWQgZm9yIHRoaXMgcHVycG9zZS5cbiAgICAgICAgaWYgKGdsb2JhbC5wb3N0TWVzc2FnZSAmJiAhZ2xvYmFsLmltcG9ydFNjcmlwdHMpIHtcbiAgICAgICAgICAgIHZhciBwb3N0TWVzc2FnZUlzQXN5bmNocm9ub3VzID0gdHJ1ZTtcbiAgICAgICAgICAgIHZhciBvbGRPbk1lc3NhZ2UgPSBnbG9iYWwub25tZXNzYWdlO1xuICAgICAgICAgICAgZ2xvYmFsLm9ubWVzc2FnZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHBvc3RNZXNzYWdlSXNBc3luY2hyb25vdXMgPSBmYWxzZTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBnbG9iYWwucG9zdE1lc3NhZ2UoXCJcIiwgXCIqXCIpO1xuICAgICAgICAgICAgZ2xvYmFsLm9ubWVzc2FnZSA9IG9sZE9uTWVzc2FnZTtcbiAgICAgICAgICAgIHJldHVybiBwb3N0TWVzc2FnZUlzQXN5bmNocm9ub3VzO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbFBvc3RNZXNzYWdlSW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIC8vIEluc3RhbGxzIGFuIGV2ZW50IGhhbmRsZXIgb24gYGdsb2JhbGAgZm9yIHRoZSBgbWVzc2FnZWAgZXZlbnQ6IHNlZVxuICAgICAgICAvLyAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuL0RPTS93aW5kb3cucG9zdE1lc3NhZ2VcbiAgICAgICAgLy8gKiBodHRwOi8vd3d3LndoYXR3Zy5vcmcvc3BlY3Mvd2ViLWFwcHMvY3VycmVudC13b3JrL211bHRpcGFnZS9jb21tcy5odG1sI2Nyb3NzRG9jdW1lbnRNZXNzYWdlc1xuXG4gICAgICAgIHZhciBtZXNzYWdlUHJlZml4ID0gXCJzZXRJbW1lZGlhdGUkXCIgKyBNYXRoLnJhbmRvbSgpICsgXCIkXCI7XG4gICAgICAgIHZhciBvbkdsb2JhbE1lc3NhZ2UgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgaWYgKGV2ZW50LnNvdXJjZSA9PT0gZ2xvYmFsICYmXG4gICAgICAgICAgICAgICAgdHlwZW9mIGV2ZW50LmRhdGEgPT09IFwic3RyaW5nXCIgJiZcbiAgICAgICAgICAgICAgICBldmVudC5kYXRhLmluZGV4T2YobWVzc2FnZVByZWZpeCkgPT09IDApIHtcbiAgICAgICAgICAgICAgICBydW5JZlByZXNlbnQoK2V2ZW50LmRhdGEuc2xpY2UobWVzc2FnZVByZWZpeC5sZW5ndGgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICAgICAgICAgIGdsb2JhbC5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCBvbkdsb2JhbE1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGdsb2JhbC5hdHRhY2hFdmVudChcIm9ubWVzc2FnZVwiLCBvbkdsb2JhbE1lc3NhZ2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIGdsb2JhbC5wb3N0TWVzc2FnZShtZXNzYWdlUHJlZml4ICsgaGFuZGxlLCBcIipcIik7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbE1lc3NhZ2VDaGFubmVsSW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIHZhciBjaGFubmVsID0gbmV3IE1lc3NhZ2VDaGFubmVsKCk7XG4gICAgICAgIGNoYW5uZWwucG9ydDEub25tZXNzYWdlID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIHZhciBoYW5kbGUgPSBldmVudC5kYXRhO1xuICAgICAgICAgICAgcnVuSWZQcmVzZW50KGhhbmRsZSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIGNoYW5uZWwucG9ydDIucG9zdE1lc3NhZ2UoaGFuZGxlKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsUmVhZHlTdGF0ZUNoYW5nZUltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICB2YXIgaHRtbCA9IGRvYy5kb2N1bWVudEVsZW1lbnQ7XG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICAvLyBDcmVhdGUgYSA8c2NyaXB0PiBlbGVtZW50OyBpdHMgcmVhZHlzdGF0ZWNoYW5nZSBldmVudCB3aWxsIGJlIGZpcmVkIGFzeW5jaHJvbm91c2x5IG9uY2UgaXQgaXMgaW5zZXJ0ZWRcbiAgICAgICAgICAgIC8vIGludG8gdGhlIGRvY3VtZW50LiBEbyBzbywgdGh1cyBxdWV1aW5nIHVwIHRoZSB0YXNrLiBSZW1lbWJlciB0byBjbGVhbiB1cCBvbmNlIGl0J3MgYmVlbiBjYWxsZWQuXG4gICAgICAgICAgICB2YXIgc2NyaXB0ID0gZG9jLmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG4gICAgICAgICAgICBzY3JpcHQub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJ1bklmUHJlc2VudChoYW5kbGUpO1xuICAgICAgICAgICAgICAgIHNjcmlwdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBudWxsO1xuICAgICAgICAgICAgICAgIGh0bWwucmVtb3ZlQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgICAgICAgICBzY3JpcHQgPSBudWxsO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGh0bWwuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsU2V0VGltZW91dEltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgc2V0VGltZW91dChydW5JZlByZXNlbnQsIDAsIGhhbmRsZSk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gSWYgc3VwcG9ydGVkLCB3ZSBzaG91bGQgYXR0YWNoIHRvIHRoZSBwcm90b3R5cGUgb2YgZ2xvYmFsLCBzaW5jZSB0aGF0IGlzIHdoZXJlIHNldFRpbWVvdXQgZXQgYWwuIGxpdmUuXG4gICAgdmFyIGF0dGFjaFRvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mICYmIE9iamVjdC5nZXRQcm90b3R5cGVPZihnbG9iYWwpO1xuICAgIGF0dGFjaFRvID0gYXR0YWNoVG8gJiYgYXR0YWNoVG8uc2V0VGltZW91dCA/IGF0dGFjaFRvIDogZ2xvYmFsO1xuXG4gICAgLy8gRG9uJ3QgZ2V0IGZvb2xlZCBieSBlLmcuIGJyb3dzZXJpZnkgZW52aXJvbm1lbnRzLlxuICAgIGlmICh7fS50b1N0cmluZy5jYWxsKGdsb2JhbC5wcm9jZXNzKSA9PT0gXCJbb2JqZWN0IHByb2Nlc3NdXCIpIHtcbiAgICAgICAgLy8gRm9yIE5vZGUuanMgYmVmb3JlIDAuOVxuICAgICAgICBpbnN0YWxsTmV4dFRpY2tJbXBsZW1lbnRhdGlvbigpO1xuXG4gICAgfSBlbHNlIGlmIChjYW5Vc2VQb3N0TWVzc2FnZSgpKSB7XG4gICAgICAgIC8vIEZvciBub24tSUUxMCBtb2Rlcm4gYnJvd3NlcnNcbiAgICAgICAgaW5zdGFsbFBvc3RNZXNzYWdlSW1wbGVtZW50YXRpb24oKTtcblxuICAgIH0gZWxzZSBpZiAoZ2xvYmFsLk1lc3NhZ2VDaGFubmVsKSB7XG4gICAgICAgIC8vIEZvciB3ZWIgd29ya2Vycywgd2hlcmUgc3VwcG9ydGVkXG4gICAgICAgIGluc3RhbGxNZXNzYWdlQ2hhbm5lbEltcGxlbWVudGF0aW9uKCk7XG5cbiAgICB9IGVsc2UgaWYgKGRvYyAmJiBcIm9ucmVhZHlzdGF0ZWNoYW5nZVwiIGluIGRvYy5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpKSB7XG4gICAgICAgIC8vIEZvciBJRSA24oCTOFxuICAgICAgICBpbnN0YWxsUmVhZHlTdGF0ZUNoYW5nZUltcGxlbWVudGF0aW9uKCk7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBGb3Igb2xkZXIgYnJvd3NlcnNcbiAgICAgICAgaW5zdGFsbFNldFRpbWVvdXRJbXBsZW1lbnRhdGlvbigpO1xuICAgIH1cblxuICAgIGF0dGFjaFRvLnNldEltbWVkaWF0ZSA9IHNldEltbWVkaWF0ZTtcbiAgICBhdHRhY2hUby5jbGVhckltbWVkaWF0ZSA9IGNsZWFySW1tZWRpYXRlO1xufSh0eXBlb2Ygc2VsZiA9PT0gXCJ1bmRlZmluZWRcIiA/IHR5cGVvZiBnbG9iYWwgPT09IFwidW5kZWZpbmVkXCIgPyB0aGlzIDogZ2xvYmFsIDogc2VsZikpO1xuIiwidmFyIHNjb3BlID0gKHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgJiYgZ2xvYmFsKSB8fFxuICAgICAgICAgICAgKHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiICYmIHNlbGYpIHx8XG4gICAgICAgICAgICB3aW5kb3c7XG52YXIgYXBwbHkgPSBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHk7XG5cbi8vIERPTSBBUElzLCBmb3IgY29tcGxldGVuZXNzXG5cbmV4cG9ydHMuc2V0VGltZW91dCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IFRpbWVvdXQoYXBwbHkuY2FsbChzZXRUaW1lb3V0LCBzY29wZSwgYXJndW1lbnRzKSwgY2xlYXJUaW1lb3V0KTtcbn07XG5leHBvcnRzLnNldEludGVydmFsID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgVGltZW91dChhcHBseS5jYWxsKHNldEludGVydmFsLCBzY29wZSwgYXJndW1lbnRzKSwgY2xlYXJJbnRlcnZhbCk7XG59O1xuZXhwb3J0cy5jbGVhclRpbWVvdXQgPVxuZXhwb3J0cy5jbGVhckludGVydmFsID0gZnVuY3Rpb24odGltZW91dCkge1xuICBpZiAodGltZW91dCkge1xuICAgIHRpbWVvdXQuY2xvc2UoKTtcbiAgfVxufTtcblxuZnVuY3Rpb24gVGltZW91dChpZCwgY2xlYXJGbikge1xuICB0aGlzLl9pZCA9IGlkO1xuICB0aGlzLl9jbGVhckZuID0gY2xlYXJGbjtcbn1cblRpbWVvdXQucHJvdG90eXBlLnVucmVmID0gVGltZW91dC5wcm90b3R5cGUucmVmID0gZnVuY3Rpb24oKSB7fTtcblRpbWVvdXQucHJvdG90eXBlLmNsb3NlID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuX2NsZWFyRm4uY2FsbChzY29wZSwgdGhpcy5faWQpO1xufTtcblxuLy8gRG9lcyBub3Qgc3RhcnQgdGhlIHRpbWUsIGp1c3Qgc2V0cyB1cCB0aGUgbWVtYmVycyBuZWVkZWQuXG5leHBvcnRzLmVucm9sbCA9IGZ1bmN0aW9uKGl0ZW0sIG1zZWNzKSB7XG4gIGNsZWFyVGltZW91dChpdGVtLl9pZGxlVGltZW91dElkKTtcbiAgaXRlbS5faWRsZVRpbWVvdXQgPSBtc2Vjcztcbn07XG5cbmV4cG9ydHMudW5lbnJvbGwgPSBmdW5jdGlvbihpdGVtKSB7XG4gIGNsZWFyVGltZW91dChpdGVtLl9pZGxlVGltZW91dElkKTtcbiAgaXRlbS5faWRsZVRpbWVvdXQgPSAtMTtcbn07XG5cbmV4cG9ydHMuX3VucmVmQWN0aXZlID0gZXhwb3J0cy5hY3RpdmUgPSBmdW5jdGlvbihpdGVtKSB7XG4gIGNsZWFyVGltZW91dChpdGVtLl9pZGxlVGltZW91dElkKTtcblxuICB2YXIgbXNlY3MgPSBpdGVtLl9pZGxlVGltZW91dDtcbiAgaWYgKG1zZWNzID49IDApIHtcbiAgICBpdGVtLl9pZGxlVGltZW91dElkID0gc2V0VGltZW91dChmdW5jdGlvbiBvblRpbWVvdXQoKSB7XG4gICAgICBpZiAoaXRlbS5fb25UaW1lb3V0KVxuICAgICAgICBpdGVtLl9vblRpbWVvdXQoKTtcbiAgICB9LCBtc2Vjcyk7XG4gIH1cbn07XG5cbi8vIHNldGltbWVkaWF0ZSBhdHRhY2hlcyBpdHNlbGYgdG8gdGhlIGdsb2JhbCBvYmplY3RcbnJlcXVpcmUoXCJzZXRpbW1lZGlhdGVcIik7XG4vLyBPbiBzb21lIGV4b3RpYyBlbnZpcm9ubWVudHMsIGl0J3Mgbm90IGNsZWFyIHdoaWNoIG9iamVjdCBgc2V0aW1tZWRpYXRlYCB3YXNcbi8vIGFibGUgdG8gaW5zdGFsbCBvbnRvLiAgU2VhcmNoIGVhY2ggcG9zc2liaWxpdHkgaW4gdGhlIHNhbWUgb3JkZXIgYXMgdGhlXG4vLyBgc2V0aW1tZWRpYXRlYCBsaWJyYXJ5LlxuZXhwb3J0cy5zZXRJbW1lZGlhdGUgPSAodHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgJiYgc2VsZi5zZXRJbW1lZGlhdGUpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICh0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiICYmIGdsb2JhbC5zZXRJbW1lZGlhdGUpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICh0aGlzICYmIHRoaXMuc2V0SW1tZWRpYXRlKTtcbmV4cG9ydHMuY2xlYXJJbW1lZGlhdGUgPSAodHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgJiYgc2VsZi5jbGVhckltbWVkaWF0ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAodHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBnbG9iYWwuY2xlYXJJbW1lZGlhdGUpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMgJiYgdGhpcy5jbGVhckltbWVkaWF0ZSk7XG4iLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbmRleC5odG1sXCI7IiwiY2xhc3MgQ2FjaGVDb250cm9sbGVyIHtcblxuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgdGhpcy5jYWNoZXMgPSB7fTtcbiAgICB0aGlzLmN2T2JqZWN0cyA9IFtdO1xuICB9XG5cbiAgZ2V0Q2FjaGUgKGJhc2UgPSB7fSwgc2VlZCkge1xuICAgIGNvbnN0IGlkID0gdGhpcy5fZ2V0Q2FjaGVJZChiYXNlLCBzZWVkKTtcbiAgICBcbiAgICBpZiAodGhpcy5jYWNoZXNbaWRdKSB7XG4gICAgICByZXR1cm4gdGhpcy5jYWNoZXNbaWRdO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5fY3JlYXRlQ2FjaGUoaWQpO1xuICAgIH1cbiAgfVxuXG4gIF9nZXRDYWNoZUlkIChiYXNlLCBzZWVkKSB7XG4gICAgY29uc3QgdW5oYXNoZWREYXRhID0gW3NlZWRdLmNvbmNhdCh0aGlzLl9mbGF0dGVuVG9BcnJheShiYXNlKSk7XG5cbiAgICBjb25zdCBoYXNoU3VtID0gdW5oYXNoZWREYXRhLnJlZHVjZSgocHJldiwgY3VyKSA9PiB7XG4gICAgICByZXR1cm4gcHJldiArIHRoaXMuX2JpdHdpc2VIYXNoKGN1cik7XG4gICAgfSwgMCk7XG5cbiAgICByZXR1cm4gKGhhc2hTdW0gJiBoYXNoU3VtKS50b1N0cmluZygpOyAvLyBDb252ZXJ0IHRvIDMyYml0IGludGVnZXIgdG8gbm9ybWFsaXplIGxlbmd0aFxuICB9XG5cbiAgY2xlYXIgKCkge1xuICAgIHRoaXMuY2FjaGVzID0ge307XG4gICAgdGhpcy5jdk9iamVjdHMuZm9yRWFjaCgob2JqKSA9PiBvYmouZGVsZXRlKCkpO1xuICAgIHRoaXMuY3ZPYmplY3RzID0gW107XG4gIH1cblxuICBfY3JlYXRlQ2FjaGUgKGlkKSB7XG4gICAgY29uc3QgZ3JvdXAgPSB0aGlzLl9nZXRDYWNoZU9iamVjdCgpO1xuXG4gICAgdGhpcy5jYWNoZXNbaWRdID0gZ3JvdXA7XG5cbiAgICByZXR1cm4gZ3JvdXA7XG4gIH1cblxuICBfZ2V0Q2FjaGVPYmplY3QgKCkge1xuICAgIHJldHVybiB7XG4gICAgICB1c2UgKG5hbWUsIGRlZmluaXRpb24pIHsgLy8gdG8gYmUgdXNlZCB0byBpbml0aWFsaXplIGEgdmFsdWUgaW4gdGhlIGNhY2hlR3JvdXAgXG4gICAgICAgIGxldCBpdGVtID0gdGhpc1tuYW1lXTtcblxuICAgICAgICBpZiAoIWl0ZW0gJiYgaXRlbSAhPT0gbnVsbCkge1xuICAgICAgICAgIGl0ZW0gPSBkZWZpbml0aW9uKCk7XG4gICAgICAgICAgdGhpc1tuYW1lXSA9IGl0ZW07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgIH1cblxuICAgICAgICAvLyBUT0RPOiBleHBsYWluIHRoaXNcbiAgICAgICAgaWYgKGl0ZW0gJiYgdHlwZW9mIGl0ZW0uZGVsZXRlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgaW5zdGFuY2UuY3ZPYmplY3RzLnB1c2goaXRlbSk7IC8vIHNhdmUgZm9yIGRlbGV0aW9uXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGl0ZW1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgX2ZsYXR0ZW5Ub0FycmF5IChvYmopIHtcbiAgICBjb25zdCBmbGF0dGVuZWQgPSBbXTtcblxuICAgIE9iamVjdC5rZXlzKG9iaikuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBpZiAodHlwZW9mIG9ialtrZXldID09PSAnb2JqZWN0JyAmJiBvYmpba2V5XSAhPT0gbnVsbCkge1xuICAgICAgICBPYmplY3QuYXNzaWduKGZsYXR0ZW5lZCwgdGhpcy5fZmxhdHRlblRvQXJyYXkob2JqW2tleV0pKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZsYXR0ZW5lZC5wdXNoKGAke2tleX06JHtvYmpba2V5XX1gKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBmbGF0dGVuZWQ7XG4gIH1cblxuICAvLyBiYXNlZCBvbiBodHRwczovL3dlcnhsdGQuY29tL3dwLzIwMTAvMDUvMTMvamF2YXNjcmlwdC1pbXBsZW1lbnRhdGlvbi1vZi1qYXZhcy1zdHJpbmctaGFzaGNvZGUtbWV0aG9kL1xuICBfYml0d2lzZUhhc2ggKHVuaGFzaGVkKSB7XG4gICAgbGV0IGhhc2ggPSAwO1xuXG4gICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHVuaGFzaGVkLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICBjb25zdCBjaGFyID0gdW5oYXNoZWQuY2hhckNvZGVBdChpKTtcbiAgICAgIGhhc2ggPSAoKGhhc2ggPDwgNSkgLSBoYXNoKSArIGNoYXI7IC8vIGVmZmVjdGl2ZWx5LCBoYXNoICogMzEgLSBoYXNoICsgY2hhclxuICAgIH1cblxuICAgIHJldHVybiBoYXNoO1xuICB9XG59XG5cbmNvbnN0IGluc3RhbmNlID0gbmV3IENhY2hlQ29udHJvbGxlcigpO1xuXG5leHBvcnQgZGVmYXVsdCBpbnN0YW5jZTsiLCJpbXBvcnQgY2FjaGVDb250cm9sbGVyIGZyb20gJy4vQ2FjaGVDb250cm9sbGVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FudmFzT3V0IHtcbiAgY29uc3RydWN0b3IgKGNvbmYpIHtcbiAgICB0aGlzLmlucHV0ICA9IGNvbmYuaW5wdXQ7XG4gICAgdGhpcy5vdXRwdXQgPSBjb25mLm91dHB1dDtcbiAgICB0aGlzLmRhdGEgICA9IGNvbmYuZGF0YSB8fCB0aGlzLl9nZXREYXRhKCk7XG4gICAgdGhpcy50cmFuc2Zvcm1zID0gbnVsbDsgLy8gdHJhbnNmb3JtcyBhcmUgc2V0IHRocm91Z2ggc2V0VHJhbnNmb3JtcygpXG4gICAgdGhpcy50aWNraW5nID0gZmFsc2U7XG4gICAgXG4gICAgdGhpcy5jb250ZXh0ID0gbnVsbDtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzdHJlYW1pbmc6IGZhbHNlLFxuICAgICAgd2lkdGg6IDAsXG4gICAgICBoZWlnaHQ6IDBcbiAgICB9O1xuXG4gICAgdGhpcy5nZXRCYXNlTWF0ID0gdGhpcy5nZXRCYXNlTWF0LmJpbmQodGhpcyk7IC8vIG5lZWRlZCBzaW5jZSB3ZSBjYWxsIGdldEJhc2VNYXQgZnJvbSBzb21lIHRyYW5zZm9ybXNcbiAgfVxuXG4gIHBsYXkgKCkge1xuICAgIGlmICh0aGlzLnN0YXRlLnN0cmVhbWluZykgeyByZXR1cm4gfTtcblxuICAgIHRoaXMuX3NldHVwKCk7XG4gICAgdGhpcy5zdGF0ZS5zdHJlYW1pbmcgPSB0cnVlO1xuICAgIHRoaXMuc3RyZWFtSW5wdXRUb091dHB1dCgpO1xuICB9XG5cbiAgcGF1c2UgKCkge1xuICAgIGlmICghdGhpcy5zdGF0ZS5zdHJlYW1pbmcpIHsgcmV0dXJuIH07XG5cbiAgICB0aGlzLnN0YXRlLnN0cmVhbWluZyA9IGZhbHNlO1xuICAgIHRoaXMuX2NsZWFudXBDdigpO1xuICAgIGNhY2hlQ29udHJvbGxlci5jbGVhcigpO1xuICB9XG5cbiAgc3RyZWFtSW5wdXRUb091dHB1dCAodGltZSkge1xuICAgIHRoaXMudGltZVNpbmNlVHJhbnNmb3JtID0gdGhpcy50aW1lU2luY2VUcmFuc2Zvcm0gfHwgdGltZTtcbiAgICBpZiAoIXRoaXMuc3RhdGUuc3RyZWFtaW5nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRpbWUgLSB0aGlzLnRpbWVTaW5jZVRyYW5zZm9ybSA+PSAxMDAwL3RoaXMuc3RhdGUuZnJhbWVSYXRlKSB7XG5cbiAgICAgIHRoaXMuY29udGV4dC5kcmF3SW1hZ2UodGhpcy5pbnB1dC5nZXRPdXRwdXQoKSwgMCwgMCwgdGhpcy5zdGF0ZS53aWR0aCwgdGhpcy5zdGF0ZS5oZWlnaHQpO1xuICAgICAgdGhpcy5zcmMuZGF0YS5zZXQodGhpcy5jb250ZXh0LmdldEltYWdlRGF0YSgwLCAwLCB0aGlzLnN0YXRlLndpZHRoLCB0aGlzLnN0YXRlLmhlaWdodCkuZGF0YSk7XG4gICAgICBcbiAgICAgIHRoaXMuX2FwcGx5VHJhbnNmb3JtcygpO1xuXG4gICAgICBjdi5pbXNob3codGhpcy5vdXRwdXQsIHRoaXMuZHN0KTtcbiAgICAgIFxuICAgICAgdGhpcy50aW1lU2luY2VUcmFuc2Zvcm0gPSB0aW1lO1xuICAgIH1cblxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgodCkgPT4ge1xuICAgICAgdGhpcy5zdHJlYW1JbnB1dFRvT3V0cHV0KHQpO1xuICAgIH0pO1xuXG4gIH1cblxuICBzZXRUcmFuc2Zvcm1zICh0cmFuc2Zvcm1zKSB7XG4gICAgdGhpcy50cmFuc2Zvcm1zID0gdGhpcy5fZ2V0VHJhbnNmb3Jtcyh0cmFuc2Zvcm1zKVxuICB9XG5cbiAgX3NldHVwICgpIHtcbiAgICB0aGlzLnN0YXRlLmZyYW1lUmF0ZSA9IHRoaXMuaW5wdXQuZ2V0RnJhbWVSYXRlKCk7XG4gICAgdGhpcy5zdGF0ZS53aWR0aCAgPSB0aGlzLmlucHV0LmdldFdpZHRoKCk7XG4gICAgdGhpcy5zdGF0ZS5oZWlnaHQgPSB0aGlzLmlucHV0LmdldEhlaWdodCgpO1xuXG4gICAgdGhpcy5vdXRwdXQud2lkdGggID0gdGhpcy5zdGF0ZS53aWR0aDtcbiAgICB0aGlzLm91dHB1dC5oZWlnaHQgPSB0aGlzLnN0YXRlLmhlaWdodDtcblxuICAgIHRoaXMuZGF0YS53aWR0aCAgPSB0aGlzLnN0YXRlLndpZHRoO1xuICAgIHRoaXMuZGF0YS5oZWlnaHQgPSB0aGlzLnN0YXRlLmhlaWdodDtcblxuICAgIHRoaXMuc3JjID0gdGhpcy5nZXRCYXNlTWF0KCk7XG4gICAgdGhpcy5kc3QgPSB0aGlzLmdldEJhc2VNYXQoKTtcblxuICAgIHRoaXMuY29udGV4dCA9IHRoaXMuZGF0YS5nZXRDb250ZXh0KCcyZCcpO1xuICB9XG5cbiAgX2NsZWFudXBDdiAoKSB7XG4gICAgdGhpcy5zcmMuZGVsZXRlKCk7XG4gICAgdGhpcy5kc3QuZGVsZXRlKCk7XG4gIH1cblxuICBfZ2V0RGF0YSAoKSB7XG4gICAgaWYgKCF0aGlzLmRhdGEpIHtcbiAgICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgdGhpcy5kYXRhID0gY2FudmFzO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmRhdGE7XG4gIH1cblxuICBnZXRCYXNlTWF0ICgpIHtcbiAgICByZXR1cm4gbmV3IGN2Lk1hdCh0aGlzLnN0YXRlLmhlaWdodCwgdGhpcy5zdGF0ZS53aWR0aCwgY3YuQ1ZfOFVDNCk7XG4gIH1cblxuICBfZ2V0VHJhbnNmb3JtcyAoZmFjdG9yeVRyYW5zZm9ybXMgPSAoKSA9PiBbXSkge1xuICAgIGxldCB0cmFuc2Zvcm1zID0gZmFjdG9yeVRyYW5zZm9ybXMoKS5tYXAoKHRyYW5zZm9ybSkgPT4ge1xuICAgICAgcmV0dXJuIHRyYW5zZm9ybS5iaW5kKHRoaXMpO1xuICAgIH0pO1xuICAgIHRyYW5zZm9ybXMudW5zaGlmdCh0aGlzLl9jb3B5U3JjVG9Ec3QpOyAvLyBwZXJwZW5kIGEgc2V0dXAgdHJhbnNmb3JtIHRvIHRoZSBxdWV1ZVxuXG4gICAgcmV0dXJuIHRyYW5zZm9ybXM7XG4gIH1cblxuICBfYXBwbHlUcmFuc2Zvcm1zICgpIHtcbiAgICB0aGlzLnRyYW5zZm9ybXMuZm9yRWFjaCgodHJhbnNmb3JtKSA9PiB7XG4gICAgICB0cmFuc2Zvcm0odGhpcy5zcmMsIHRoaXMuZHN0KTsgLy8gYXBwbHkgdHJhbnNmb3JtXG4gICAgICB0aGlzLl9tYXRjaE1hdFR5cGUodGhpcy5zcmMsIHRoaXMuZHN0KTsgLy8gY29udmVydCBkc3QgdHlwZSB0byBtYXRjaCBzcmNcbiAgICAgIHRoaXMuc3JjLmRhdGEuc2V0KHRoaXMuZHN0LmRhdGEpOyAvLyBzZXQgc3JjIHRvIGRzdCwgc28gdHJhbmZvcm1zIGNhbiBjaGFpbiB0aGVpciBvdXRwdXRzIHRvZ2V0aGVyXG4gICAgfSk7XG4gIH1cblxuICBfbWF0Y2hNYXRUeXBlIChzcmMsIGRzdCkge1xuICAgIGNvbnN0IGNvbG9yVHlwZXMgPSB7XG4gICAgICAxOiAnR1JBWScsXG4gICAgICAzOiAnUkdCJyxcbiAgICAgIDQ6ICdSR0JBJ1xuICAgIH07XG5cbiAgICBjb25zdCBzcmNUeXBlID0gY29sb3JUeXBlc1tzcmMuY2hhbm5lbHMoKV07XG4gICAgY29uc3QgZHN0VHlwZSA9IGNvbG9yVHlwZXNbZHN0LmNoYW5uZWxzKCldO1xuXG4gICAgaWYgKHNyY1R5cGUgIT09IGRzdFR5cGUpIHtcbiAgICAgIGNvbnN0IGNvbnZlcnNpb24gPSBjdltgQ09MT1JfJHtkc3RUeXBlfTIke3NyY1R5cGV9YF07XG4gICAgICBjdi5jdnRDb2xvcihkc3QsIGRzdCwgY29udmVyc2lvbik7XG4gICAgfVxuICB9XG5cbiAgX2NvcHlTcmNUb0RzdCAoc3JjLCBkc3QpIHtcbiAgICBkc3QuZGF0YS5zZXQoc3JjLmRhdGEpO1xuICB9XG59IiwiaW1wb3J0IHRyYW5zZm9ybXMgZnJvbSAnLi90cmFuc2Zvcm1zJztcbmltcG9ydCBzY2hlbWFzICAgIGZyb20gJy4vc2V0dGluZ3Mvc2NoZW1hcyc7XG5pbXBvcnQgZHJhZ3VsYSBmcm9tICcuLi9saWIvZHJhZ3VsYSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXBvc2VyIHtcblxuICBjb25zdHJ1Y3RvciAob3V0cHV0Q29udHJvbGxlcikge1xuICAgIHRoaXMub3V0cHV0Q29udHJvbGxlciA9IG91dHB1dENvbnRyb2xsZXI7XG4gICAgdGhpcy5lbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5Db21wb3NlcicpO1xuICAgIHRoaXMuaW52ZW50b3J5RWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuQ29tcG9zZXJJbnZlbnRvcnknKTtcbiAgICB0aGlzLnF1ZXVlRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuQ29tcG9zZXJRdWV1ZScpO1xuICAgIHRoaXMucXVldWUgPSBbXTtcbiAgICB0aGlzLmNvbXBvc2l0aW9uID0gKCkgPT4gW107XG5cbiAgICB0aGlzLl9pbml0KCk7XG4gIH1cblxuICBfaW5pdCAoKSB7XG4gICAgdGhpcy5fc2V0dXBEcmFndWxhKCk7XG4gICAgdGhpcy5fcmVuZGVySW52ZW50b3J5KCk7XG4gICAgdGhpcy5fc2V0dXBFdmVudEhhbmRsZXJzKCk7XG4gIH1cblxuICBfcmVuZGVySW52ZW50b3J5ICgpIHtcbiAgICB0aGlzLmludmVudG9yeUVsLmlubmVySFRNTCA9IHNjaGVtYXMucmVkdWNlKChhY2MsIGN1cikgPT4ge1xuICAgICAgcmV0dXJuIGFjYyArIHRoaXMuX2ludmVudG9yeUl0ZW1IdG1sKGN1cik7XG4gICAgfSwgJycpO1xuICAgIHRoaXMuaW52ZW50b3J5SXRlbUVscyA9IHRoaXMuaW52ZW50b3J5RWwucXVlcnlTZWxlY3RvckFsbCgnLkNvbXBvc2VySXRlbScpO1xuICB9XG5cbiAgX3NldHVwRHJhZ3VsYSAoKSB7XG4gICAgdGhpcy5kcmFrZSA9IGRyYWd1bGEoW3RoaXMuaW52ZW50b3J5RWwsIHRoaXMucXVldWVFbF0sIHtcbiAgICAgIGNvcHlTb3J0U291cmNlOiB0cnVlLFxuICAgICAgcmVtb3ZlT25TcGlsbDogdHJ1ZSxcbiAgICAgIGNvcHk6IChlbCwgc291cmNlKSA9PiB7XG4gICAgICAgIHJldHVybiBzb3VyY2UgPT09IHRoaXMuaW52ZW50b3J5RWw7XG4gICAgICB9LFxuICAgICAgYWNjZXB0czogKGVsLCB0YXJnZXQsIHNvdXJjZSwgc2libGluZykgPT4ge1xuICAgICAgICBjb25zdCBxdWV1ZVRvUXVldWUgPSBzb3VyY2UgPT09IHRoaXMucXVldWVFbCAmJiB0YXJnZXQgPT09IHRoaXMucXVldWVFbDtcbiAgICAgICAgY29uc3QgaW52VG9RdWV1ZSA9IHNvdXJjZSA9PT0gdGhpcy5pbnZlbnRvcnlFbCAmJiB0YXJnZXQgPT09IHRoaXMucXVldWVFbDtcbiAgICAgICAgcmV0dXJuIGludlRvUXVldWUgfHwgcXVldWVUb1F1ZXVlO1xuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuXG4gIF9zZXR1cEV2ZW50SGFuZGxlcnMgKCkge1xuICAgIHRoaXMuX29uRHJvcCA9IHRoaXMuX29uRHJvcC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZHJha2Uub24oJ2Ryb3AnLCB0aGlzLl9vbkRyb3ApO1xuXG4gICAgdGhpcy5fb25SZW1vdmUgPSB0aGlzLl9vblJlbW92ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZHJha2Uub24oJ3JlbW92ZScsIHRoaXMuX29uUmVtb3ZlKTtcbiAgfVxuXG4gIF9vbkRyb3AgKGVsLCB0YXJnZXQsIHNvdXJjZSwgc2libGluZykge1xuICAgIHRoaXMuX3JlYWRRdWV1ZSgpO1xuICAgIHRoaXMuX3VwZGF0ZUNvbXBvc2l0aW9uKCk7XG4gIH1cblxuICBfb25SZW1vdmUgKGVsLCBjb250YWluZXIsIHNvdXJjZSkge1xuICAgIHRoaXMuX3JlYWRRdWV1ZSgpO1xuICAgIHRoaXMuX3VwZGF0ZUNvbXBvc2l0aW9uKCk7XG4gIH1cblxuICBfcmVhZFF1ZXVlICgpIHtcbiAgICB0aGlzLnF1ZXVlID0gQXJyYXkuZnJvbSh0aGlzLnF1ZXVlRWwuY2hpbGRyZW4pO1xuICB9XG5cbiAgX3VwZGF0ZUNvbXBvc2l0aW9uICgpIHtcbiAgICBjb25zdCBjb21wb3NlZExpc3QgPSB0aGlzLnF1ZXVlLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgY29uc3QgdHlwZSA9IGl0ZW0uZGF0YXNldC50cmFuc2Zvcm1UeXBlO1xuICAgICAgY29uc3QgbmFtZSA9IGl0ZW0uZGF0YXNldC50cmFuc2Zvcm1OYW1lO1xuICAgICAgY29uc3Qgc2NoZW1hID0gc2NoZW1hcy5maW5kKChzY2hlbWEpID0+IHNjaGVtYS50eXBlID09PSB0eXBlICYmIHNjaGVtYS5uYW1lID09PSBuYW1lKTtcbiAgICAgIGNvbnN0IHRyYW5zZm9ybSA9IHRyYW5zZm9ybXNbdHlwZV0gJiYgdHJhbnNmb3Jtc1t0eXBlXVtuYW1lXTtcblxuICAgICAgaWYgKCFzY2hlbWEgfHwgIXRyYW5zZm9ybSkge1xuICAgICAgICBjb25zb2xlLmxvZygnVHJhbnNmb3JtIG9yIHNjaGVtYSBkb2VzIG5vdCBleGlzdDogJywgdHlwZSwgbmFtZSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0cmFuc2Zvcm0oc2NoZW1hLmRlZmF1bHRDb25mKTtcbiAgICB9KTtcblxuICAgIHRoaXMuY29tcG9zaXRpb24gPSAoKSA9PiBjb21wb3NlZExpc3Q7XG4gICAgdGhpcy5vdXRwdXRDb250cm9sbGVyLnNldFRyYW5zZm9ybXModGhpcy5jb21wb3NpdGlvbik7XG4gIH1cblxuICBfaW52ZW50b3J5SXRlbUh0bWwgKHNjaGVtYSkge1xuICAgIHJldHVybiBgXG4gICAgICA8bGkgY2xhc3M9XCJjb21wb3Nlci1pdGVtIGNvbnRyb2xzLWJ1dHRvbiBDb21wb3Nlckl0ZW1cIlxuICAgICAgICBkYXRhLXRyYW5zZm9ybS10eXBlPVwiJHtzY2hlbWEudHlwZX1cIlxuICAgICAgICBkYXRhLXRyYW5zZm9ybS1uYW1lPVwiJHtzY2hlbWEubmFtZX1cIlxuICAgICAgICBkcmFnZ2FibGU9XCJ0cnVlXCJcbiAgICAgID5cbiAgICAgICAgJHtzY2hlbWEubmFtZX1cbiAgICAgIDwvbGk+XG4gICAgYDtcbiAgfVxuXG59IiwiaW1wb3J0IHRyYW5zZm9ybXMgICBmcm9tICcuL3RyYW5zZm9ybXMnO1xuaW1wb3J0IHNjaGVtYXMgICAgICBmcm9tICcuL3NldHRpbmdzL3NjaGVtYXMnO1xuaW1wb3J0IGNvbXBvc2l0aW9ucyBmcm9tICcuL3NldHRpbmdzL2NvbXBvc2l0aW9ucyc7XG5cbmltcG9ydCBDb21wb3NlciBmcm9tICcuL0NvbXBvc2VyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3V0cHV0Q29udHJvbGxlciB7XG5cbiAgY29uc3RydWN0b3IgKGNvbmYpIHtcbiAgICB0aGlzLm91dHB1dCA9IGNvbmYub3V0cHV0O1xuICAgIHRoaXMucGxheUVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLkNvbnRyb2xzUGxheScpO1xuICAgIHRoaXMucGF1c2VFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5Db250cm9sc1BhdXNlJyk7XG4gICAgdGhpcy5jb21wb3NpdGlvbnNDb250YWluZXJFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5Db250cm9sc0NvbXBvc2l0aW9uc0NvbnRhaW5lcicpO1xuXG4gICAgdGhpcy5faW5pdCgpO1xuICB9XG5cbiAgX2luaXQgKCkge1xuICAgIHRoaXMuY29tcG9zZXIgPSBuZXcgQ29tcG9zZXIodGhpcyk7XG5cbiAgICB0aGlzLl9zZXR1cENvbnRyb2xzKCk7XG4gICAgdGhpcy5fc2V0dXBFdmVudEhhbmRsZXJzKCk7XG4gIH1cblxuICBfc2V0dXBFdmVudEhhbmRsZXJzICgpIHtcbiAgICB0aGlzLl9vbkNvbXBvc2l0aW9uQ2xpY2sgPSB0aGlzLl9vbkNvbXBvc2l0aW9uQ2xpY2suYmluZCh0aGlzKTtcbiAgICB0aGlzLmNvbXBvc2l0aW9uRWxzLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuX29uQ29tcG9zaXRpb25DbGljayk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnBsYXlFbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMucGxheS5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLnBhdXNlRWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnBhdXNlLmJpbmQodGhpcykpO1xuICB9XG5cbiAgcGxheSAoKSB7XG4gICAgdGhpcy5vdXRwdXQucGxheSgpO1xuICB9XG5cbiAgcGF1c2UgKCkge1xuICAgIHRoaXMub3V0cHV0LnBhdXNlKCk7XG4gIH1cblxuICBzZXRUcmFuc2Zvcm1zICh0ZnMpIHtcbiAgICB0aGlzLm91dHB1dC5zZXRUcmFuc2Zvcm1zKHRmcyk7XG4gIH1cblxuICBfb25Db21wb3NpdGlvbkNsaWNrIChlKSB7XG4gICAgY29uc3QgY29tcG9zaXRpb25JZCA9IGUudGFyZ2V0LmRhdGFzZXQuY29tcG9zaXRpb25JZDtcbiAgICBjb25zdCB0ZnMgPSBjb21wb3NpdGlvbnNbY29tcG9zaXRpb25JZF0udHJhbnNmb3JtcztcblxuICAgIHRoaXMub3V0cHV0LnBhdXNlKCk7XG4gICAgdGhpcy5vdXRwdXQuc2V0VHJhbnNmb3Jtcyh0ZnMpO1xuICAgIHRoaXMub3V0cHV0LnBsYXkoKTtcbiAgfVxuXG4gIF9zZXR1cENvbnRyb2xzICgpIHtcbiAgICB0aGlzLmNvbXBvc2l0aW9uc0NvbnRhaW5lckVsLmlubmVySFRNTCA9IGNvbXBvc2l0aW9ucy5yZWR1Y2UoKGFjYywgY3VyLCBpZHgpID0+IHtcbiAgICAgIHJldHVybiBhY2MgKyB0aGlzLl9jb21wb3NpdGlvbkh0bWwoaWR4LCBjdXIubmFtZSk7XG4gICAgfSwgJycpO1xuICAgIHRoaXMuY29tcG9zaXRpb25FbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuQ29udHJvbHNDb21wb3NpdGlvbicpO1xuICB9XG5cbiAgX2NvbXBvc2l0aW9uSHRtbCAoaWR4LCBuYW1lKSB7XG4gICAgcmV0dXJuIGA8YnV0dG9uIGNsYXNzPVwiY29udHJvbHMtYnV0dG9uIENvbnRyb2xzQ29tcG9zaXRpb25cIiBkYXRhLWNvbXBvc2l0aW9uLWlkPVwiJHtpZHh9XCI+JHtuYW1lfTwvYnV0dG9uPmA7XG4gIH1cblxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFdlYmNhbSB7XG4gIGNvbnN0cnVjdG9yIChvcHRzKSB7XG4gICAgdGhpcy5vdXRwdXQgPSBvcHRzLm91dHB1dCB8fCB0aGlzLmdldE91dHB1dCgpO1xuICAgIHRoaXMuc3RyZWFtID0gbnVsbDtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICByZWFkeVRvU3RyZWFtOiBmYWxzZVxuICAgIH07XG4gIH1cblxuICBnZXRPdXRwdXQgKCkge1xuICAgIGlmICghdGhpcy5vdXRwdXQpIHtcbiAgICAgIHRoaXMub3V0cHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndmlkZW8nKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMub3V0cHV0O1xuICB9XG5cbiAgZ2V0V2lkdGggKCkge1xuICAgIGNvbnN0IGRpbSA9IHRoaXMuX2dldERpbWVuc2lvbnMoKTtcbiAgICByZXR1cm4gZGltLndpZHRoO1xuICB9XG5cbiAgZ2V0SGVpZ2h0ICgpIHtcbiAgICBjb25zdCBkaW0gPSB0aGlzLl9nZXREaW1lbnNpb25zKCk7XG4gICAgcmV0dXJuIGRpbS5oZWlnaHQ7XG4gIH1cblxuICBnZXRGcmFtZVJhdGUgKCkge1xuICAgIGNvbnN0IGRpbSA9IHRoaXMuX2dldERpbWVuc2lvbnMoKTtcbiAgICByZXR1cm4gZGltLmZyYW1lUmF0ZTtcbiAgfVxuXG4gIGluaXRpYWxpemVDYW1lcmEgKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICByZXR1cm4gbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWEoeyBcbiAgICAgICAgYXVkaW86IGZhbHNlLFxuICAgICAgICB2aWRlbzoge3dpZHRoOiB7bWluOiAxMjgwfSwgaGVpZ2h0OiB7bWluOiA3MjB9fVxuICAgICAgfSlcbiAgICAgIC50aGVuKChzdHJlYW0pID0+IHtcbiAgICAgICAgdGhpcy5zdHJlYW0gPSBzdHJlYW07XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgIH0pICAgIFxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJBbiBlcnJvciBvY2N1cnJlZCEgXCIgKyBlcnIpO1xuICAgICAgICByZWplY3QoKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgYmVnaW5TdHJlYW0gKCkge1xuICAgIHRoaXMub3V0cHV0LnNyY09iamVjdCA9IHRoaXMuc3RyZWFtO1xuICAgIHRoaXMub3V0cHV0LnBsYXkoKTtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpcy5vdXRwdXQub25sb2FkZWRtZXRhZGF0YSA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5fZ2V0RGltZW5zaW9ucyh0cnVlKTtcbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgX2dldERpbWVuc2lvbnMgKGZvcmNlKSB7XG4gICAgaWYgKHRoaXMuZGltZW5zaW9ucyAmJiAhZm9yY2UpIHsgcmV0dXJuIHRoaXMuZGltZW5zaW9uczsgfSBcbiAgICAgIFxuICAgIHRoaXMuZGltZW5zaW9ucyA9IHtcbiAgICAgIHdpZHRoOiB0aGlzLm91dHB1dC52aWRlb1dpZHRoLCBcbiAgICAgIGhlaWdodDogdGhpcy5vdXRwdXQudmlkZW9IZWlnaHQsXG4gICAgICBmcmFtZVJhdGU6IHRoaXMuc3RyZWFtICYmIHRoaXMuc3RyZWFtLmdldFZpZGVvVHJhY2tzKClbMF0uZ2V0U2V0dGluZ3MoKS5mcmFtZVJhdGVcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRoaXMuZGltZW5zaW9ucztcbiAgfVxufSIsImltcG9ydCBXZWJjYW0gICAgICAgICAgICBmcm9tICcuL1dlYmNhbSc7XG5pbXBvcnQgQ2FudmFzT3V0ICAgICAgICAgZnJvbSAnLi9DYW52YXNPdXQnO1xuaW1wb3J0IE91dHB1dENvbnRyb2xsZXIgIGZyb20gJy4vT3V0cHV0Q29udHJvbGxlcic7XG5pbXBvcnQgdHJhbnNmb3JtcyAgICAgICAgZnJvbSAnLi90cmFuc2Zvcm1zJztcblxuY29uc3QgQ09NUE9TSVRJT04gPSAoKSA9PiBbXG4gIC8vIHRyYW5zZm9ybXMuYXJpdGhtZXRpYy5hYnNvbHV0ZURpZmZlcmVuY2UoKSxcbiAgLy8gdHJhbnNmb3Jtcy5hbHRlci5zZXRDaGFubmVsKHtcbiAgLy8gICBpZHg6IDMsXG4gIC8vICAgdmFsOiAyNTVcbiAgLy8gfSksXG4gIC8vIHRyYW5zZm9ybXMudGhyZXNob2xkLmluUmFuZ2Uoe1xuICAvLyAgIGxvOiA0MCxcbiAgLy8gICBoaTogMjU1XG4gIC8vIH0pLFxuICAvLyBmdW5jdGlvbiAoc3JjLCBkc3QpIHtcbiAgLy8gICB0aGlzLndoaXRlUGxhbmUgPSB0aGlzLndoaXRlUGxhbmUgfHwgKCgpID0+IHtcbiAgLy8gICAgIGNvbnN0IGNvbG9yID0gbmV3IGN2LlNjYWxhcigyNTUpO1xuICAvLyAgICAgcmV0dXJuIG5ldyBjdi5NYXQoc3JjLnJvd3MsIHNyYy5jb2xzLCBjdi5DVl84VSwgY29sb3IpO1xuICAvLyAgIH0pKCk7XG5cbiAgLy8gICB0aGlzLmJsYWNrUGxhbmUgPSB0aGlzLmJsYWNrUGxhbmUgfHwgKCgpID0+IHtcbiAgLy8gICAgIGNvbnN0IGNvbG9yID0gbmV3IGN2LlNjYWxhcigwKTtcbiAgLy8gICAgIHJldHVybiBuZXcgY3YuTWF0KHNyYy5yb3dzLCBzcmMuY29scywgY3YuQ1ZfOFUsIGNvbG9yKTtcbiAgLy8gICB9KSgpO1xuXG4gIC8vICAgY29uc3QgcGxhbmVzID0gbmV3IGN2Lk1hdFZlY3RvcigpO1xuXG4gIC8vICAgY3Yuc3BsaXQoc3JjLCBwbGFuZXMpO1xuICAvLyAgIHBsYW5lcy5zZXQoMiwgdGhpcy5ibGFja1BsYW5lKTtcbiAgLy8gICBwbGFuZXMuc2V0KDMsIHRoaXMud2hpdGVQbGFuZSk7XG4gIC8vICAgY3YubWVyZ2UocGxhbmVzLCBkc3QpO1xuXG4gIC8vICAgcGxhbmVzLmRlbGV0ZSgpO1xuICAvLyB9LFxuXTtcblxuZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdPUEVOQ1ZfQlVJTFQnLCAoKSA9PiB7XG4gIGN2WydvblJ1bnRpbWVJbml0aWFsaXplZCddID0gKCkgPT4ge1xuICAgIC8vIGNvbnN0IHZpZGVvICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2aWRlb0lucHV0Jyk7XG4gICAgY29uc3Qgb3V0cHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhc091dHB1dCcpO1xuICAgIGNvbnN0IGRhdGEgICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRhJyk7XG5cbiAgICBjb25zdCB3ZWJjYW0gPSBuZXcgV2ViY2FtKHtcbiAgICAgIC8vIG91dHB1dDogdmlkZW9cbiAgICB9KTtcblxuICAgIGNvbnN0IGNhbnZhc091dCA9IG5ldyBDYW52YXNPdXQoe1xuICAgICAgaW5wdXQ6IHdlYmNhbSxcbiAgICAgIG91dHB1dDogb3V0cHV0LFxuICAgICAgZGF0YTogZGF0YSxcbiAgICB9KTtcblxuICAgIGNvbnN0IG91dHB1dENvbnRyb2xsZXIgPSBuZXcgT3V0cHV0Q29udHJvbGxlcih7XG4gICAgICBvdXRwdXQ6IGNhbnZhc091dCxcbiAgICB9KTtcblxuICAgIHdlYmNhbS5pbml0aWFsaXplQ2FtZXJhKClcbiAgICAudGhlbigoKSA9PiB7XG4gICAgICByZXR1cm4gd2ViY2FtLmJlZ2luU3RyZWFtKCk7XG4gICAgfSlcbiAgICAudGhlbigoKSA9PiB7XG4gICAgICBvdXRwdXRDb250cm9sbGVyLnNldFRyYW5zZm9ybXMoQ09NUE9TSVRJT04pOyAvLyBpbml0aWFsIHRyYW5zZm9ybXNcbiAgICAgIG91dHB1dENvbnRyb2xsZXIucGxheSgpO1xuICAgIH0pO1xuICB9XG59KTtcbiIsImltcG9ydCB0cmFuc2Zvcm1zIGZyb20gJy4uL3RyYW5zZm9ybXMnO1xuXG5cbmNvbnN0IGNvbXBvc2l0aW9ucyA9IFtcblxuICB7XG4gICAgbmFtZTogJ0dyYXlzY2FsZScsXG4gICAgdHJhbnNmb3JtczogKCkgPT4gW1xuICAgICAgdHJhbnNmb3Jtcy5hbHRlci5ncmF5c2NhbGUoKSxcbiAgICBdLFxuICAgIC8vIHNjaGVtYToge1xuICAgIC8vICAgLS0tU09PTiEtLS1cbiAgICAvLyB9LFxuICB9LFxuXG4gIHtcbiAgICBuYW1lOiAnVC1SZXggVmlzaW9uJyxcbiAgICB0cmFuc2Zvcm1zOiAoKSA9PiBbXG4gICAgICB0cmFuc2Zvcm1zLmhpc3RvZ3JhbS5jbGFoZSgpLFxuICAgICAgdHJhbnNmb3Jtcy5hcml0aG1ldGljLmFic29sdXRlRGlmZmVyZW5jZSgpLFxuICAgICAgdHJhbnNmb3Jtcy5hbHRlci5zZXRDaGFubmVsKHtcbiAgICAgICAgaWR4OiAzLFxuICAgICAgICB2YWw6IDI1NVxuICAgICAgfSksXG4gICAgXSxcbiAgfSxcblxuICB7XG4gICAgbmFtZTogJ2FkYXB0aXZlR2F1c3NpYW4gKHNtb290aGVkKScsXG4gICAgdHJhbnNmb3JtczogKCkgPT4gW1xuICAgICAgdHJhbnNmb3Jtcy5zbW9vdGgubWVkaWFuKHtcbiAgICAgICAgc2l6ZTogNSxcbiAgICAgIH0pLFxuICAgICAgdHJhbnNmb3Jtcy50aHJlc2hvbGQuYWRhcHRpdmVHYXVzc2lhbih7XG4gICAgICAgIGtzaXplOiA1LFxuICAgICAgICBjOiAwLFxuICAgICAgfSksXG4gICAgICB0cmFuc2Zvcm1zLmFsdGVyLnNldENoYW5uZWwoe1xuICAgICAgICBpZHg6IDMsXG4gICAgICAgIHZhbDogMjU1LFxuICAgICAgfSksXG4gICAgXVxuICB9LFxuXG4gIHtcbiAgICBuYW1lOiAnQ2FubnknLFxuICAgIHRyYW5zZm9ybXM6ICgpID0+IFtcbiAgICAgIHRyYW5zZm9ybXMuZmVhdHVyZURldGVjdC5jYW5ueSh7XG4gICAgICAgIHQxOiA1MCxcbiAgICAgICAgdDI6IDUwLFxuICAgICAgfSksXG4gICAgXVxuICB9LFxuXG4gIHtcbiAgICBuYW1lOiAnQmluYXJ5IEludmVyc2UnLFxuICAgIHRyYW5zZm9ybXM6ICgpID0+IFtcbiAgICAgIHRyYW5zZm9ybXMudGhyZXNob2xkLmJpbmFyeSh7XG4gICAgICAgIHQxOiAxMDAsXG4gICAgICAgIHQyOiAwLFxuICAgICAgfSksXG4gICAgICB0cmFuc2Zvcm1zLmFsdGVyLnNldENoYW5uZWwoe1xuICAgICAgICBpZHg6IDMsXG4gICAgICAgIHZhbDogMjU1LFxuICAgICAgfSksXG4gICAgXVxuICB9LFxuXG4gIHtcbiAgICBuYW1lOiAnTGluZSBGbG93JyxcbiAgICB0cmFuc2Zvcm1zOiAoKSA9PiBbXG4gICAgICB0cmFuc2Zvcm1zLnNtb290aC5tZWRpYW4oe1xuICAgICAgICBzaXplOiAxMDEsXG4gICAgICAgIGFuY2hvcjogLTEsXG4gICAgICB9KSxcbiAgICAgIHRyYW5zZm9ybXMuZmVhdHVyZURldGVjdC5jYW5ueSh7XG4gICAgICAgIHQxOiAxMCxcbiAgICAgICAgdDI6IDEwLFxuICAgICAgfSksXG4gICAgXVxuICB9LFxuXG4gIHtcbiAgICBuYW1lOiAnQmV0dGVyIExpbmUgRmxvdycsXG4gICAgdHJhbnNmb3JtczogKCkgPT4gW1xuICAgICAgdHJhbnNmb3Jtcy5oaXN0b2dyYW0uZXF1YWxpemUoKSxcbiAgICAgIHRyYW5zZm9ybXMuc21vb3RoLm1lZGlhbih7XG4gICAgICAgIHNpemU6IDQ3LFxuICAgICAgfSksXG4gICAgICB0cmFuc2Zvcm1zLmZlYXR1cmVEZXRlY3QuY2Fubnkoe1xuICAgICAgICB0MTogMTAsXG4gICAgICAgIHQyOiAxMCxcbiAgICAgIH0pLFxuICAgIF1cbiAgfSxcblxuICB7XG4gICAgbmFtZTogJ3RoaW5nJyxcbiAgICB0cmFuc2Zvcm1zOiAoKSA9PiBbXG4gICAgICB0cmFuc2Zvcm1zLnRocmVzaG9sZC5pblJhbmdlKHtcbiAgICAgICAgbG86IDEwMCxcbiAgICAgICAgaGk6IDI1NSxcbiAgICAgIH0pLFxuICAgICAgdHJhbnNmb3Jtcy5mZWF0dXJlRGV0ZWN0LmNhbm55KHtcbiAgICAgICAgdDE6IDIyMCxcbiAgICAgICAgdDI6IDIyMCxcbiAgICAgIH0pLFxuICAgICAgdHJhbnNmb3Jtcy5tb3JwaC5ncmFkaWVudCh7XG4gICAgICAgIGtlcm5lbDogMyxcbiAgICAgICAgYW5jaG9yOiAtMSxcbiAgICAgICAgaXRlcmF0aW9uczogMSxcbiAgICAgIH0pLFxuICAgICAgdHJhbnNmb3Jtcy5mZWF0dXJlRGV0ZWN0LmNhbm55KHtcbiAgICAgICAgdDE6IDIsXG4gICAgICAgIHQyOiAyLFxuICAgICAgfSksXG4gICAgXVxuICB9XG5cbl07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvc2l0aW9uczsiLCJjb25zdCBzY2hlbWFzID0gW1xuXG4gIHtcbiAgICB0eXBlOiAnYWx0ZXInLFxuICAgIG5hbWU6ICdzZXRDaGFubmVsJyxcbiAgICBkZWZhdWx0Q29uZjoge1xuICAgICAgaWR4OiAzLFxuICAgICAgdmFsOiAyNTUsXG4gICAgfSxcbiAgfSxcbiAge1xuICAgIHR5cGU6ICdhbHRlcicsXG4gICAgbmFtZTogJ2dyYXlzY2FsZScsXG4gICAgZGVmYXVsdENvbmY6IHt9LFxuICB9LFxuXG4gIHtcbiAgICB0eXBlOiAnYXJpdGhtZXRpYycsXG4gICAgbmFtZTogJ2Fic29sdXRlRGlmZmVyZW5jZScsXG4gICAgZGVmYXVsdENvbmY6IHt9LFxuICB9LFxuXG4gIHtcbiAgICB0eXBlOiAnZmVhdHVyZURldGVjdCcsXG4gICAgbmFtZTogJ2Nhbm55JyxcbiAgICBkZWZhdWx0Q29uZjoge1xuICAgICAgdDE6IDUwLFxuICAgICAgdDI6IDUwLFxuICAgIH0sXG4gIH0sXG5cbiAge1xuICAgIHR5cGU6ICdoaXN0b2dyYW0nLFxuICAgIG5hbWU6ICdlcXVhbGl6ZScsXG4gICAgZGVmYXVsdENvbmY6IHt9LFxuICB9LFxuICB7XG4gICAgdHlwZTogJ2hpc3RvZ3JhbScsXG4gICAgbmFtZTogJ2NsYWhlJyxcbiAgICBkZWZhdWx0Q29uZjoge30sXG4gIH0sXG5cbiAge1xuICAgIHR5cGU6ICdpbWFnZUdyYWRpZW50JyxcbiAgICBuYW1lOiAnc29iZWwnLFxuICAgIGRlZmF1bHRDb25mOiB7XG4gICAgICBkeDogMTAsXG4gICAgICBkeTogMTAsXG4gICAgICBrc2l6ZTogNSxcbiAgICB9LFxuICB9LFxuICAvLyBub3Qgd29ya2luZ1xuICAvLyB7XG4gIC8vICAgdHlwZTogJ2ltYWdlR3JhZGllbnQnLFxuICAvLyAgIG5hbWU6ICdzY2hhcnInLFxuICAvLyAgIGRlZmF1bHRDb25mOiB7XG4gIC8vICAgICBkeDogMTAsXG4gIC8vICAgICBkeTogMTAsXG4gIC8vICAgICBzY2FsZTogMSxcbiAgLy8gICAgIGRlbHRhOiAwLFxuICAvLyAgIH0sXG4gIC8vIH0sXG4gIHtcbiAgICB0eXBlOiAnaW1hZ2VHcmFkaWVudCcsXG4gICAgbmFtZTogJ2xhcGxhY2lhbicsXG4gICAgZGVmYXVsdENvbmY6IHtcbiAgICAgIGtzaXplOiA1LFxuICAgICAgc2NhbGU6IDEsXG4gICAgICBkZWx0YTogMCxcbiAgICB9LFxuICB9LFxuXG4gIHtcbiAgICB0eXBlOiAnbW9ycGgnLFxuICAgIG5hbWU6ICdlcm9kZScsXG4gICAgZGVmYXVsdENvbmY6IHtcbiAgICAgIGtzaXplOiA1LFxuICAgICAgYW5jaG9yOiAtMSxcbiAgICB9LFxuICB9LFxuICB7XG4gICAgdHlwZTogJ21vcnBoJyxcbiAgICBuYW1lOiAnZGlsYXRlJyxcbiAgICBkZWZhdWx0Q29uZjoge1xuICAgICAga3NpemU6IDUsXG4gICAgICBhbmNob3I6IC0xLFxuICAgIH0sXG4gIH0sXG4gIHtcbiAgICB0eXBlOiAnbW9ycGgnLFxuICAgIG5hbWU6ICdvcGVuJyxcbiAgICBkZWZhdWx0Q29uZjoge1xuICAgICAga3NpemU6IDUsXG4gICAgICBhbmNob3I6IC0xLFxuICAgIH0sXG4gIH0sXG4gIHtcbiAgICB0eXBlOiAnbW9ycGgnLFxuICAgIG5hbWU6ICdjbG9zZScsXG4gICAgZGVmYXVsdENvbmY6IHtcbiAgICAgIGtzaXplOiA1LFxuICAgICAgYW5jaG9yOiAtMSxcbiAgICB9LFxuICB9LFxuICB7XG4gICAgdHlwZTogJ21vcnBoJyxcbiAgICBuYW1lOiAnZ3JhZGllbnQnLFxuICAgIGRlZmF1bHRDb25mOiB7XG4gICAgICBrc2l6ZTogNSxcbiAgICAgIGFuY2hvcjogLTEsXG4gICAgfSxcbiAgfSxcbiAge1xuICAgIHR5cGU6ICdtb3JwaCcsXG4gICAgbmFtZTogJ3RvcEhhdCcsXG4gICAgZGVmYXVsdENvbmY6IHtcbiAgICAgIGtzaXplOiA1LFxuICAgICAgYW5jaG9yOiAtMSxcbiAgICB9LFxuICB9LFxuICB7XG4gICAgdHlwZTogJ21vcnBoJyxcbiAgICBuYW1lOiAnYmxhY2tIYXQnLFxuICAgIGRlZmF1bHRDb25mOiB7XG4gICAgICBrc2l6ZTogNSxcbiAgICAgIGFuY2hvcjogLTEsXG4gICAgfSxcbiAgfSxcblxuICB7XG4gICAgdHlwZTogJ3Ntb290aCcsXG4gICAgbmFtZTogJ2JsdXInLFxuICAgIGRlZmF1bHRDb25mOiB7XG4gICAgICBrc2l6ZTogNSxcbiAgICAgIGFuY2hvcjogLTEsXG4gICAgfSxcbiAgfSxcbiAge1xuICAgIHR5cGU6ICdzbW9vdGgnLFxuICAgIG5hbWU6ICdnYXVzc2lhbicsXG4gICAgZGVmYXVsdENvbmY6IHtcbiAgICAgIGtzaXplOiA1LFxuICAgIH0sXG4gIH0sXG4gIHtcbiAgICB0eXBlOiAnc21vb3RoJyxcbiAgICBuYW1lOiAnbWVkaWFuJyxcbiAgICBkZWZhdWx0Q29uZjoge1xuICAgICAgc2l6ZTogNSxcbiAgICB9LFxuICB9LFxuICB7XG4gICAgdHlwZTogJ3Ntb290aCcsXG4gICAgbmFtZTogJ2JpbGF0ZXJhbCcsXG4gICAgZGVmYXVsdENvbmY6IHtcbiAgICAgIHNpemU6IDUsXG4gICAgICBzaWdtYUNvbG9yOiAxLFxuICAgICAgc2lnbWFTcGFjZTogMSxcbiAgICB9LFxuICB9LFxuXG4gIHtcbiAgICB0eXBlOiAnc21vb3RoJyxcbiAgICBuYW1lOiAnbWVkaWFuJyxcbiAgICBkZWZhdWx0Q29uZjoge1xuICAgICAgc2l6ZTogNyxcbiAgICAgIGFuY2hvcjogLTEsXG4gICAgfSxcbiAgfSxcblxuICB7XG4gICAgdHlwZTogJ3RocmVzaG9sZCcsXG4gICAgbmFtZTogJ2JpbmFyeScsXG4gICAgZGVmYXVsdENvbmY6IHtcbiAgICAgIHQxOiAxMDAsXG4gICAgICB0MjogMCxcbiAgICB9LFxuICB9LFxuXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBzY2hlbWFzOyIsIi8vIGRpcmVjdCBjaGFuZ2VzIHRvIHRoZSBzcmNcbmltcG9ydCBjYWNoZUNvbnRyb2xsZXIgZnJvbSAnLi4vQ2FjaGVDb250cm9sbGVyJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAvLyBzZXRzIHRoZSBjaGFubmVsIGF0IGNvbmYuaWR4IHRvIGNvbmYudmFsXG4gIHNldENoYW5uZWwgKGNvbmYpIHtcbiAgICBjb25zdCBjYWNoZSA9IGNhY2hlQ29udHJvbGxlci5nZXRDYWNoZShjb25mLCAnc2V0Q2hhbm5lbCcpO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChzcmMsIGRzdCkge1xuICAgICAgY2FjaGUudXNlKCduZXdQbGFuZScsICgpID0+IHtcbiAgICAgICAgY29uc3QgY29sb3IgPSBuZXcgY3YuU2NhbGFyKGNvbmYudmFsKTtcbiAgICAgICAgcmV0dXJuIG5ldyBjdi5NYXQoc3JjLnJvd3MsIHNyYy5jb2xzLCBjdi5DVl84VSwgY29sb3IpO1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IHBsYW5lcyA9IG5ldyBjdi5NYXRWZWN0b3IoKTtcblxuICAgICAgY3Yuc3BsaXQoc3JjLCBwbGFuZXMpO1xuICAgICAgcGxhbmVzLnNldChjb25mLmlkeCwgY2FjaGUubmV3UGxhbmUpO1xuICAgICAgY3YubWVyZ2UocGxhbmVzLCBkc3QpO1xuXG4gICAgICBwbGFuZXMuZGVsZXRlKCk7XG4gICAgfSBcbiAgfSxcbiAgYWJzICgpIHsgLy8gZG9lcyBub3RoaW5nIHRvIG1hdHMgd2l0aCB1bnNpZ25lZCB0eXBlXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChzcmMsIGRzdCkge1xuICAgICAgY3YuY29udmVydFNjYWxlQWJzKHNyYywgZHN0LCAxLCAwKTtcbiAgICB9XG4gIH0sXG4gIGdyYXlzY2FsZSAoKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChzcmMsIGRzdCkge1xuICAgICAgY3YuY3Z0Q29sb3Ioc3JjLCBkc3QsIGN2LkNPTE9SX1JHQkEyR1JBWSk7XG4gICAgfVxuICB9LFxufVxuIiwiLy8gaHR0cHM6Ly9kb2NzLm9wZW5jdi5vcmcvMy40LjMvZGQvZDRkL3R1dG9yaWFsX2pzX2ltYWdlX2FyaXRobWV0aWNzLmh0bWxcblxuZXhwb3J0IGRlZmF1bHQge1xuICBhYnNvbHV0ZURpZmZlcmVuY2UgKGNvbmYpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHNyYywgZHN0KSB7XG4gICAgICB0aGlzLmZyYW1lQ291bnQgPSB0aGlzLmZyYW1lQ291bnQgfHwgMDtcbiAgICAgIHRoaXMucHJldlNyYyA9IHRoaXMucHJldlNyYyB8fCB0aGlzLmdldEJhc2VNYXQoKTtcbiAgICAgIGN2LmFic2RpZmYoc3JjLCB0aGlzLnByZXZTcmMsIGRzdCk7XG4gICAgICB0aGlzLmZyYW1lQ291bnQrKztcblxuICAgICAgaWYgKHRoaXMuZnJhbWVDb3VudCA9PSAxKSB7XG4gICAgICAgIHRoaXMucHJldlNyYy5kYXRhLnNldCh0aGlzLnNyYy5kYXRhKTtcbiAgICAgICAgdGhpcy5mcmFtZUNvdW50ID0gMDtcbiAgICAgIH1cblxuICAgIH1cbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IHtcbiAgY2FubnkgKGNvbmYpIHtcbiAgICAvLyBodHRwczovL2RvY3Mub3BlbmN2Lm9yZy8zLjEuMC9kZC9kMWEvZ3JvdXBfX2ltZ3Byb2NfX2ZlYXR1cmUuaHRtbCNnYTA0NzIzZTAwN2VkODg4ZGRmMTFkOWJhMDRlMjIzMmRlXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChzcmMsIGRzdCkge1xuICAgICAgY3YuQ2Fubnkoc3JjLCBkc3QsIGNvbmYudDEsIGNvbmYudDIsIDMsIHRydWUpOyAvLyBBcGVydHVyZSBzZWVtcyB0byBvbmx5IHdvcmsgYXQgMy5cbiAgICB9XG4gIH0sXG5cbiAgaG91Z2hMaW5lcyAoc3JjLCBkc3QpIHtcbiAgICAvLyBsZXQgbGluZXMgPSBuZXcgY3YuTWF0KCk7XG5cbiAgICAvLyBjb25zb2xlLmxvZygncHJlaG91Z2gnKVxuXG4gICAgLy8gY3YuSG91Z2hMaW5lcyhcbiAgICAvLyAgIHNyYywgbGluZXMsIDEsIE1hdGguUEkgLyAxODAsXG4gICAgLy8gICAzMCwgMCwgMCwgMCwgTWF0aC5QSVxuICAgIC8vICk7XG5cbiAgICAvLyBjb25zb2xlLmxvZygncG9zdGhvdWdoJylcblxuICAgIC8vIGxldCBjb2xvciA9IG5ldyBjdi5TY2FsYXIoMjU1KTtcbiAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IGxpbmVzLnJvd3M7ICsraSkge1xuICAgIC8vICAgbGV0IHJobyA9IGxpbmVzLmRhdGEzMkZbaSAqIDJdO1xuICAgIC8vICAgbGV0IHRoZXRhID0gbGluZXMuZGF0YTMyRltpICogMiArIDFdO1xuICAgIC8vICAgbGV0IGEgPSBNYXRoLmNvcyh0aGV0YSk7XG4gICAgLy8gICBsZXQgYiA9IE1hdGguc2luKHRoZXRhKTtcbiAgICAvLyAgIGxldCB4MCA9IGEgKiByaG87XG4gICAgLy8gICBsZXQgeTAgPSBiICogcmhvO1xuICAgIC8vICAgbGV0IHN0YXJ0UG9pbnQgPSB7eDogeDAgLSAxMDAwICogYiwgeTogeTAgKyAxMDAwICogYX07XG4gICAgLy8gICBsZXQgZW5kUG9pbnQgPSB7eDogeDAgKyAxMDAwICogYiwgeTogeTAgLSAxMDAwICogYX07XG4gICAgLy8gICBjdi5saW5lKGRzdCwgc3RhcnRQb2ludCwgZW5kUG9pbnQsIGNvbG9yKTtcbiAgICAvLyB9XG5cbiAgICAvLyBsaW5lcy5kZWxldGUoKTtcbiAgfSxcblxuICBob3VnaExpbmVzUCAoc3JjLCBkc3QpIHtcbiAgICAvLyBsZXQgbGluZXMgPSBuZXcgY3YuTWF0KCk7XG4gICAgLy8gY3YuTWF0Lnplcm9zKHNyYy5yb3dzLCBzcmMuY29scywgY3YuQ1ZfOFVDMyk7XG5cbiAgICAvLyBjdi5Ib3VnaExpbmVzUChzcmMsIGxpbmVzLCAxLCBNYXRoLlBJIC8gMTgwLCAyLCAwLCAwKTtcbiAgICAvLyAvLyBkcmF3IGxpbmVzXG4gICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5lcy5yb3dzOyArK2kpIHtcbiAgICAvLyAgIGxldCBzdGFydFBvaW50ID0gbmV3IGN2LlBvaW50KGxpbmVzLmRhdGEzMlNbaSAqIDRdLCBsaW5lcy5kYXRhMzJTW2kgKiA0ICsgMV0pO1xuICAgIC8vICAgbGV0IGVuZFBvaW50ID0gbmV3IGN2LlBvaW50KGxpbmVzLmRhdGEzMlNbaSAqIDQgKyAyXSwgbGluZXMuZGF0YTMyU1tpICogNCArIDNdKTtcbiAgICAvLyAgIGN2LmxpbmUoZHN0LCBzdGFydFBvaW50LCBlbmRQb2ludCwgY29sb3IpO1xuICAgIC8vIH1cblxuICAgIC8vIGxpbmVzLmRlbGV0ZSgpO1xuICB9XG59O1xuXG4vL0hPVUdIIFBcbi8vIGxldCBzcmMgPSBjdi5pbXJlYWQoJ2NhbnZhc0lucHV0Jyk7XG4vLyBsZXQgZHN0ID0gY3YuTWF0Lnplcm9zKHNyYy5yb3dzLCBzcmMuY29scywgY3YuQ1ZfOFVDMyk7XG4vLyBsZXQgbGluZXMgPSBuZXcgY3YuTWF0KCk7XG4vLyBsZXQgY29sb3IgPSBuZXcgY3YuU2NhbGFyKDI1NSwgMCwgMCk7XG4vLyBjdi5jdnRDb2xvcihzcmMsIHNyYywgY3YuQ09MT1JfUkdCQTJHUkFZLCAwKTtcbi8vIC8vIGN2LkNhbm55KHNyYywgc3JjLCA1MCwgMjAwLCAzKTtcbi8vIC8vIFlvdSBjYW4gdHJ5IG1vcmUgZGlmZmVyZW50IHBhcmFtZXRlcnNcbi8vIGN2LkhvdWdoTGluZXNQKHNyYywgbGluZXMsIDEsIE1hdGguUEkgLyAxODAsIDIsIDAsIDApO1xuLy8gLy8gZHJhdyBsaW5lc1xuLy8gZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5lcy5yb3dzOyArK2kpIHtcbi8vICAgICBsZXQgc3RhcnRQb2ludCA9IG5ldyBjdi5Qb2ludChsaW5lcy5kYXRhMzJTW2kgKiA0XSwgbGluZXMuZGF0YTMyU1tpICogNCArIDFdKTtcbi8vICAgICBsZXQgZW5kUG9pbnQgPSBuZXcgY3YuUG9pbnQobGluZXMuZGF0YTMyU1tpICogNCArIDJdLCBsaW5lcy5kYXRhMzJTW2kgKiA0ICsgM10pO1xuLy8gICAgIGN2LmxpbmUoZHN0LCBzdGFydFBvaW50LCBlbmRQb2ludCwgY29sb3IpO1xuLy8gfVxuLy8gY3YuaW1zaG93KCdjYW52YXNPdXRwdXQnLCBkc3QpO1xuLy8gc3JjLmRlbGV0ZSgpOyBkc3QuZGVsZXRlKCk7IGxpbmVzLmRlbGV0ZSgpOyIsImltcG9ydCBjYWNoZUNvbnRyb2xsZXIgZnJvbSAnLi4vQ2FjaGVDb250cm9sbGVyJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBlcXVhbGl6ZSAoY29uZikge1xuICAgIC8vIGh0dHBzOi8vZG9jcy5vcGVuY3Yub3JnLzMuMS4wL2Q1L2RhZi90dXRvcmlhbF9weV9oaXN0b2dyYW1fZXF1YWxpemF0aW9uLmh0bWxcbiAgICByZXR1cm4gKHNyYywgZHN0KSA9PiB7XG4gICAgICBjdi5jdnRDb2xvcihzcmMsIGRzdCwgY3YuQ09MT1JfUkdCQTJHUkFZKTtcbiAgICAgIGN2LmVxdWFsaXplSGlzdChkc3QsIGRzdCk7XG4gICAgfVxuICB9LFxuICBjbGFoZSAoY29uZikge1xuICAgIGNvbnN0IGNhY2hlID0gY2FjaGVDb250cm9sbGVyLmdldENhY2hlKGNvbmYsICdjbGFoZScpO1xuICAgIHJldHVybiAoc3JjLCBkc3QpID0+IHtcbiAgICAgIGNhY2hlLnVzZSgna3NpemUnLCAoKSA9PiBuZXcgY3YuU2l6ZSg4LCA4KSk7XG5cbiAgICAgIGN2LmN2dENvbG9yKHNyYywgZHN0LCBjdi5DT0xPUl9SR0JBMkdSQVkpO1xuICAgICAgY29uc3QgY2xhaGUgPSBuZXcgY3YuQ0xBSEUoMi4wLCBjYWNoZS5rc2l6ZSk7XG4gICAgICBjbGFoZS5hcHBseShkc3QsIGRzdCk7XG4gICAgfVxuICB9XG59OyIsIi8vIGh0dHBzOi8vZG9jcy5vcGVuY3Yub3JnLzMuMS4wL2Q1L2QwZi90dXRvcmlhbF9weV9ncmFkaWVudHMuaHRtbFxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHNvYmVsIChjb25mKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChzcmMsIGRzdCkge1xuICAgICAgY3YuU29iZWwoc3JjLCBkc3QsIGN2LkNWXzY0RiwgY29uZi5keCwgY29uZi5keSwgY29uZi5rc2l6ZSk7XG4gICAgICBpZiAoY29uZi5lZGdlcyA9PT0gMikge1xuICAgICAgICBjdi5jb252ZXJ0U2NhbGVBYnMoZHN0LCBkc3QsIDEsIDApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZHN0LmNvbnZlcnRUbyhkc3QsIGN2LkNWXzhVQzQpO1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgc2NoYXJyIChjb25mKSB7XG4gICAgLy8gQ2Fubm90IGdldCB0aGlzIG9uZSB0byB3b3JrLiBOb3Qgc3VyZSB3aGF0IHRoZSBpc3N1ZSBpcy5cbiAgICByZXR1cm4gZnVuY3Rpb24gKHNyYywgZHN0KSB7XG4gICAgICBjdi5TY2hhcnIoc3JjLCBkc3QsIGN2LkNWX1U4LCBjb25mLmR4LCBjb25mLmR5LCBjb25mLnNjYWxlIHx8IDEsIGNvbmYuZGVsdGEgfHwgMCk7XG4gICAgfVxuICB9LFxuICBsYXBsYWNpYW4gKGNvbmYpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHNyYywgZHN0KSB7XG4gICAgICBjdi5MYXBsYWNpYW4oc3JjLCBkc3QsIGN2LkNWXzY0RiwgY29uZi5rc2l6ZSwgY29uZi5zY2FsZSB8fCAxLCBjb25mLmRlbHRhIHx8IDApO1xuICAgICAgaWYgKGNvbmYuZWRnZXMgPT09IDIpIHtcbiAgICAgICAgY3YuY29udmVydFNjYWxlQWJzKGRzdCwgZHN0LCAxLCAwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRzdC5jb252ZXJ0VG8oZHN0LCBjdi5DVl84VUM0KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG59IiwiaW1wb3J0IGFyaXRobWV0aWMgZnJvbSAnLi9hcml0aG1ldGljJztcbmltcG9ydCB0aHJlc2hvbGQgZnJvbSAnLi90aHJlc2hvbGQnO1xuaW1wb3J0IHNtb290aCBmcm9tICcuL3Ntb290aCc7XG5pbXBvcnQgZmVhdHVyZURldGVjdCBmcm9tICcuL2ZlYXR1cmVEZXRlY3QnO1xuaW1wb3J0IG1vcnBoIGZyb20gJy4vbW9ycGgnO1xuaW1wb3J0IGltYWdlR3JhZGllbnQgZnJvbSAnLi9pbWFnZUdyYWRpZW50JztcbmltcG9ydCBhbHRlciBmcm9tICcuL2FsdGVyJztcbmltcG9ydCBoaXN0b2dyYW0gZnJvbSAnLi9oaXN0b2dyYW0nO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGFyaXRobWV0aWMsXG4gIHRocmVzaG9sZCxcbiAgc21vb3RoLFxuICBmZWF0dXJlRGV0ZWN0LFxuICBtb3JwaCxcbiAgaW1hZ2VHcmFkaWVudCxcbiAgYWx0ZXIsXG4gIGhpc3RvZ3JhbVxufTsiLCJpbXBvcnQgY2FjaGVDb250cm9sbGVyIGZyb20gJy4uL0NhY2hlQ29udHJvbGxlcic7XG5cbi8vIGh0dHBzOi8vZG9jcy5vcGVuY3Yub3JnLzMuMS4wL2Q5L2Q2MS90dXRvcmlhbF9weV9tb3JwaG9sb2dpY2FsX29wcy5odG1sXG5cbmZ1bmN0aW9uIG1vcnBoIChzcmMsIGRzdCwgbW9ycGhUeXBlLCBjb25mKSB7XG4gIGNvbnN0IGNhY2hlID0gY2FjaGVDb250cm9sbGVyLmdldENhY2hlKGNvbmYsIG1vcnBoVHlwZSk7XG5cbiAgY2FjaGUudXNlKCdrc2l6ZScsICgpID0+IG5ldyBjdi5TaXplKGNvbmYua3NpemUsIGNvbmYua3NpemUpKTtcbiAgY2FjaGUudXNlKCdrZXJuZWwnLCAoKSA9PiBjdi5nZXRTdHJ1Y3R1cmluZ0VsZW1lbnQoY3YuTU9SUEhfUkVDVCwgY2FjaGUua3NpemUpKTtcbiAgY2FjaGUudXNlKCdhbmNob3InLCAoKSA9PiBuZXcgY3YuUG9pbnQoY29uZi5hbmNob3IsIGNvbmYuYW5jaG9yKSk7XG5cbiAgY3YubW9ycGhvbG9neUV4KHNyYywgZHN0LCBtb3JwaFR5cGUsIGNhY2hlLmtlcm5lbCk7XG59XG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICBlcm9kZSAoY29uZikge1xuICAgIHJldHVybiBmdW5jdGlvbiAoc3JjLCBkc3QpIHtcbiAgICAgIG1vcnBoLmNhbGwodGhpcywgc3JjLCBkc3QsIGN2Lk1PUlBIX0VST0RFLCBjb25mKTtcbiAgICB9XG4gIH0sXG4gIGRpbGF0ZSAoY29uZikge1xuICAgIHJldHVybiBmdW5jdGlvbiAoc3JjLCBkc3QpIHtcbiAgICAgIG1vcnBoLmNhbGwodGhpcywgc3JjLCBkc3QsIGN2Lk1PUlBIX0RJTEFURSwgY29uZik7XG4gICAgfVxuICB9LFxuICBvcGVuIChjb25mKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChzcmMsIGRzdCkge1xuICAgICAgbW9ycGguY2FsbCh0aGlzLCBzcmMsIGRzdCwgY3YuTU9SUEhfT1BFTiwgY29uZik7XG4gICAgfVxuICB9LFxuICBjbG9zZSAoY29uZikge1xuICAgIHJldHVybiBmdW5jdGlvbiAoc3JjLCBkc3QpIHtcbiAgICAgIG1vcnBoLmNhbGwodGhpcywgc3JjLCBkc3QsIGN2Lk1PUlBIX0NMT1NFLCBjb25mKTtcbiAgICB9XG4gIH0sXG4gIGdyYWRpZW50IChjb25mKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChzcmMsIGRzdCkge1xuICAgICAgbW9ycGguY2FsbCh0aGlzLCBzcmMsIGRzdCwgY3YuTU9SUEhfR1JBRElFTlQsIGNvbmYpO1xuICAgIH1cbiAgfSxcbiAgdG9wSGF0IChjb25mKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChzcmMsIGRzdCkge1xuICAgICAgbW9ycGguY2FsbCh0aGlzLCBzcmMsIGRzdCwgY3YuTU9SUEhfVE9QSEFULCBjb25mKTtcbiAgICB9XG4gIH0sXG4gIGJsYWNrSGF0IChjb25mKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChzcmMsIGRzdCkge1xuICAgICAgbW9ycGguY2FsbCh0aGlzLCBzcmMsIGRzdCwgY3YuTU9SUEhfQkxBQ0tIQVQsIGNvbmYpO1xuICAgIH1cbiAgfSxcbn0iLCJpbXBvcnQgY2FjaGVDb250cm9sbGVyIGZyb20gJy4uL0NhY2hlQ29udHJvbGxlcic7XG5cbi8vIGh0dHBzOi8vZG9jcy5vcGVuY3Yub3JnLzMuNC9kZC9kNmEvdHV0b3JpYWxfanNfZmlsdGVyaW5nLmh0bWxcblxuZXhwb3J0IGRlZmF1bHQge1xuICBibHVyIChjb25mKSB7XG4gICAgY29uc3QgY2FjaGUgPSBjYWNoZUNvbnRyb2xsZXIuZ2V0Q2FjaGUoY29uZiwgJ2JsdXInKTtcblxuICAgIHJldHVybiBmdW5jdGlvbiAoc3JjLCBkc3QpIHtcbiAgICAgIGNhY2hlLnVzZSgna3NpemUnLCAoKSA9PiBuZXcgY3YuU2l6ZShjb25mLmtzaXplLCBjb25mLmtzaXplKSk7XG4gICAgICBjYWNoZS51c2UoJ2FuY2hvcicsICgpID0+IG5ldyBjdi5Qb2ludChjb25mLmFuY2hvciwgY29uZi5hbmNob3IpKTtcblxuICAgICAgY3YuYm94RmlsdGVyKHNyYywgZHN0LCAtMSwgY2FjaGUua3NpemUsIGNhY2hlLmFuY2hvciwgdHJ1ZSwgY3YuQk9SREVSX0RFRkFVTFQpO1xuICAgIH1cbiAgfSxcbiAgZ2F1c3NpYW4gKGNvbmYpIHtcbiAgICBjb25zdCBjYWNoZSA9IGNhY2hlQ29udHJvbGxlci5nZXRDYWNoZShjb25mLCAnZ2F1c3NpYW4nKTtcblxuICAgIHJldHVybiBmdW5jdGlvbiAoc3JjLCBkc3QpIHtcbiAgICAgIGNhY2hlLnVzZSgna3NpemUnLCAoKSA9PiBuZXcgY3YuU2l6ZShjb25mLmtzaXplLCBjb25mLmtzaXplKSk7IC8vIG11c3QgYmUgYW4gb2RkIG51bWJlclxuXG4gICAgICBjdi5HYXVzc2lhbkJsdXIoc3JjLCBkc3QsIGNhY2hlLmtzaXplLCAxMCwgMTAsIGN2LkJPUkRFUl9ERUZBVUxUKTtcbiAgICB9XG4gIH0sXG4gIG1lZGlhbiAoY29uZikge1xuICAgIHJldHVybiBmdW5jdGlvbiAoc3JjLCBkc3QpIHtcbiAgICAgIGN2Lm1lZGlhbkJsdXIoc3JjLCBkc3QsIGNvbmYuc2l6ZSk7IC8vbGFzdCBhcmd1bWVudCBtdXN0IGJlIGFuIG9kZCBudW1iZXJcbiAgICB9XG4gIH0sXG4gIGJpbGF0ZXJhbCAoY29uZikge1xuICAgIGNvbnN0IGNhY2hlID0gY2FjaGVDb250cm9sbGVyLmdldENhY2hlKGNvbmYsICdiaWxhdGVyYWwnKTtcblxuICAgIHJldHVybiBmdW5jdGlvbiAoc3JjLCBkc3QpIHtcbiAgICAgIGNhY2hlLnVzZSgnYmlsYXRlcmFsU3JjJywgKCkgPT4gbmV3IGN2Lk1hdChzcmMucm93cywgc3JjLmNvbHMsIGN2LkNWXzhVQzMpKTtcbiAgXG4gICAgICBjdi5jdnRDb2xvcihzcmMsIGNhY2hlLmJpbGF0ZXJhbFNyYywgY3YuQ09MT1JfUkdCQTJSR0IpO1xuXG4gICAgICBjdi5iaWxhdGVyYWxGaWx0ZXIoY2FjaGUuYmlsYXRlcmFsU3JjLCBkc3QsIGNvbmYuc2l6ZSwgY29uZi5zaWdtYUNvbG9yLCBjb25mLnNpZ21hU3BhY2UsIGN2LkJPUkRFUl9ERUZBVUxUKTtcbiAgICB9XG4gIH1cbn0iLCJpbXBvcnQgY2FjaGVDb250cm9sbGVyIGZyb20gJy4uL0NhY2hlQ29udHJvbGxlcic7XG5cbi8vIGh0dHBzOi8vZG9jcy5vcGVuY3Yub3JnLzMuNC4xL2Q3L2RkMC90dXRvcmlhbF9qc190aHJlc2hvbGRpbmcuaHRtbFxuXG5mdW5jdGlvbiB0aHJlc2hvbGQgKHNyYywgZHN0LCB0aHJlc2hUeXBlLCBjb25mKSB7IC8vIGEgbG90IG9mIHVuY2xlYXIgZGV0YWlscyBvbiB0aGlzIHN0dWZmXG4gIC8vIHZhbGlkIGNvbmYuZmxhZyB2YWx1ZXMgYXJlIE9UU1UgYW5kIFRSSUFOR0xFXG4gIC8vIE9UU1UgYW5kIFRSSUFOR0xFIGFyZSBhbGdvcml0aG1zIHVzZWQgdG8gY2hvb3NlIHRoZSBvcHRpbWFsIHRocmVzaGhvbGQgKHQxKSB2YWx1ZVxuICBjb25zdCBmbGFnID0gY29uZi5mbGFnID8gY3ZbYFRIUkVTSF8ke2NvbmYuZmxhZy50b1VwcGVyQ2FzZSgpfWBdIDogMDtcblxuICBpZiAoZmxhZykge1xuICAgIGN2LmN2dENvbG9yKHNyYywgZHN0LCBjdi5DT0xPUl9SR0JBMkdSQVkpOyAvLyBPVFNVIGFuZCBUUklBTkdMRSBib3RoIHJlcXVpcmUgc3JjIGFuZCBkc3QgbWF0cyB0byBiZSBzaW5nbGUtY2hhbm5lbFxuICAgIGN2LnRocmVzaG9sZChkc3QsIGRzdCwgY29uZi50MSwgY29uZi50MiB8fCAyNTUsIHRocmVzaFR5cGUgfCBmbGFnKTsgLy8geWVzLCBhIGJpdHdpc2Ugb3IgaXMgdXNlZCB0byBhcHBlbmQgdGhlIGZsYWcuXG4gIH0gZWxzZSB7XG4gICAgY3YudGhyZXNob2xkKHNyYywgZHN0LCBjb25mLnQxLCBjb25mLnQyIHx8IDI1NSwgdGhyZXNoVHlwZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRhcHRpdmUgKHNyYywgZHN0LCBhZGFwdGl2ZU1ldGhvZCwgY29uZikge1xuICBjdi5jdnRDb2xvcihzcmMsIGRzdCwgY3YuQ09MT1JfUkdCQTJHUkFZLCAwKTsgLy8gbXVzdCBiZSBzaW5nbGUtY2hhbm5lbFxuICBjdi5hZGFwdGl2ZVRocmVzaG9sZChkc3QsIGRzdCwgMjU1LCBhZGFwdGl2ZU1ldGhvZCwgY3YuVEhSRVNIX0JJTkFSWSwgY29uZi5rc2l6ZSwgY29uZi5jIHx8IDApO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGluUmFuZ2UgKGNvbmYpIHtcbiAgICBjb25zdCBjYWNoZSA9IGNhY2hlQ29udHJvbGxlci5nZXRDYWNoZShjb25mLCAnaW5SYW5nZScpO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChzcmMsIGRzdCkge1xuICAgICAgY2FjaGUudXNlKCdsbycsICgpID0+IG5ldyBjdi5NYXQoc3JjLnJvd3MsIHNyYy5jb2xzLCBzcmMudHlwZSgpLCBbY29uZi5sbyxjb25mLmxvLGNvbmYubG8sMjU1XSkpO1xuICAgICAgY2FjaGUudXNlKCdoaScsICgpID0+IG5ldyBjdi5NYXQoc3JjLnJvd3MsIHNyYy5jb2xzLCBzcmMudHlwZSgpLCBbY29uZi5oaSxjb25mLmhpLGNvbmYuaGksMjU1XSkpO1xuXG4gICAgICBjdi5pblJhbmdlKHNyYywgY2FjaGUubG8sIGNhY2hlLmhpLCBkc3QpO1xuICAgIH1cbiAgfSxcbiAgYmluYXJ5IChjb25mKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChzcmMsIGRzdCkge1xuICAgICAgdGhyZXNob2xkLmNhbGwodGhpcywgc3JjLCBkc3QsIGN2LlRIUkVTSF9CSU5BUlksIGNvbmYpO1xuICAgIH1cbiAgfSxcbiAgYmluYXJ5SW52IChjb25mKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChzcmMsIGRzdCkge1xuICAgICAgdGhyZXNob2xkLmNhbGwodGhpcywgc3JjLCBkc3QsIGN2LlRIUkVTSF9CSU5BUllfSU5WLCBjb25mKTtcbiAgICB9XG4gIH0sXG4gIHRydW5jIChjb25mKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChzcmMsIGRzdCkge1xuICAgICAgdGhyZXNob2xkLmNhbGwodGhpcywgc3JjLCBkc3QsIGN2LlRIUkVTSF9UUlVOQywgY29uZik7XG4gICAgfVxuICB9LFxuICB0b1plcm8gKGNvbmYpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHNyYywgZHN0KSB7XG4gICAgICB0aHJlc2hvbGQuY2FsbCh0aGlzLCBzcmMsIGRzdCwgY3YuVEhSRVNIX1RPWkVSTywgY29uZik7XG4gICAgfVxuICB9LFxuICB0b1plcm9JbnYgKGNvbmYpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHNyYywgZHN0KSB7XG4gICAgICB0aHJlc2hvbGQuY2FsbCh0aGlzLCBzcmMsIGRzdCwgY3YuVEhSRVNIX1RPWkVST19JTlYsIGNvbmYpO1xuICAgIH1cbiAgfSxcbiAgYWRhcHRpdmVNZWFuIChjb25mKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChzcmMsIGRzdCkge1xuICAgICAgYWRhcHRpdmUuY2FsbCh0aGlzLCBzcmMsIGRzdCwgY3YuQURBUFRJVkVfVEhSRVNIX01FQU5fQywgY29uZik7XG4gICAgfVxuICB9LFxuICBhZGFwdGl2ZUdhdXNzaWFuIChjb25mKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChzcmMsIGRzdCkge1xuICAgICAgYWRhcHRpdmUuY2FsbCh0aGlzLCBzcmMsIGRzdCwgY3YuQURBUFRJVkVfVEhSRVNIX0dBVVNTSUFOX0MsIGNvbmYpO1xuICAgIH1cbiAgfSxcbn0iLCIvLyBzdHlsZXNcbmltcG9ydCAnLi4vc3R5bGVzL2luZGV4LnNjc3MnO1xuXG4vLyBhcHBsaWNhdGlvblxuaW1wb3J0ICcuL2FwcC9pbmRleCc7IiwiIWZ1bmN0aW9uKGUpe2lmKFwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlKW1vZHVsZS5leHBvcnRzPWUoKTtlbHNlIGlmKFwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZClkZWZpbmUoW10sZSk7ZWxzZXt2YXIgbjtuPVwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3c/d2luZG93OlwidW5kZWZpbmVkXCIhPXR5cGVvZiBnbG9iYWw/Z2xvYmFsOlwidW5kZWZpbmVkXCIhPXR5cGVvZiBzZWxmP3NlbGY6dGhpcyxuLmRyYWd1bGE9ZSgpfX0oZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24gZShuLHQscil7ZnVuY3Rpb24gbyh1LGMpe2lmKCF0W3VdKXtpZighblt1XSl7dmFyIGE9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighYyYmYSlyZXR1cm4gYSh1LCEwKTtpZihpKXJldHVybiBpKHUsITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrdStcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9dFt1XT17ZXhwb3J0czp7fX07blt1XVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgdD1uW3VdWzFdW2VdO3JldHVybiBvKHQ/dDplKX0sbCxsLmV4cG9ydHMsZSxuLHQscil9cmV0dXJuIHRbdV0uZXhwb3J0c31mb3IodmFyIGk9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSx1PTA7dTxyLmxlbmd0aDt1KyspbyhyW3VdKTtyZXR1cm4gb30oezE6W2Z1bmN0aW9uKGUsbix0KXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiByKGUpe3ZhciBuPXVbZV07cmV0dXJuIG4/bi5sYXN0SW5kZXg9MDp1W2VdPW49bmV3IFJlZ0V4cChjK2UrYSxcImdcIiksbn1mdW5jdGlvbiBvKGUsbil7dmFyIHQ9ZS5jbGFzc05hbWU7dC5sZW5ndGg/cihuKS50ZXN0KHQpfHwoZS5jbGFzc05hbWUrPVwiIFwiK24pOmUuY2xhc3NOYW1lPW59ZnVuY3Rpb24gaShlLG4pe2UuY2xhc3NOYW1lPWUuY2xhc3NOYW1lLnJlcGxhY2UocihuKSxcIiBcIikudHJpbSgpfXZhciB1PXt9LGM9XCIoPzpefFxcXFxzKVwiLGE9XCIoPzpcXFxcc3wkKVwiO24uZXhwb3J0cz17YWRkOm8scm06aX19LHt9XSwyOltmdW5jdGlvbihlLG4sdCl7KGZ1bmN0aW9uKHQpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIHIoZSxuKXtmdW5jdGlvbiB0KGUpe3JldHVybi0xIT09bGUuY29udGFpbmVycy5pbmRleE9mKGUpfHxmZS5pc0NvbnRhaW5lcihlKX1mdW5jdGlvbiByKGUpe3ZhciBuPWU/XCJyZW1vdmVcIjpcImFkZFwiO28oUyxuLFwibW91c2Vkb3duXCIsTyksbyhTLG4sXCJtb3VzZXVwXCIsTCl9ZnVuY3Rpb24gYyhlKXt2YXIgbj1lP1wicmVtb3ZlXCI6XCJhZGRcIjtvKFMsbixcIm1vdXNlbW92ZVwiLE4pfWZ1bmN0aW9uIG0oZSl7dmFyIG49ZT9cInJlbW92ZVwiOlwiYWRkXCI7d1tuXShTLFwic2VsZWN0c3RhcnRcIixDKSx3W25dKFMsXCJjbGlja1wiLEMpfWZ1bmN0aW9uIGgoKXtyKCEwKSxMKHt9KX1mdW5jdGlvbiBDKGUpe2NlJiZlLnByZXZlbnREZWZhdWx0KCl9ZnVuY3Rpb24gTyhlKXtuZT1lLmNsaWVudFgsdGU9ZS5jbGllbnRZO3ZhciBuPTEhPT1pKGUpfHxlLm1ldGFLZXl8fGUuY3RybEtleTtpZighbil7dmFyIHQ9ZS50YXJnZXQscj1UKHQpO3ImJihjZT1yLGMoKSxcIm1vdXNlZG93blwiPT09ZS50eXBlJiYocCh0KT90LmZvY3VzKCk6ZS5wcmV2ZW50RGVmYXVsdCgpKSl9fWZ1bmN0aW9uIE4oZSl7aWYoY2Upe2lmKDA9PT1pKGUpKXJldHVybiB2b2lkIEwoe30pO2lmKHZvaWQgMD09PWUuY2xpZW50WHx8ZS5jbGllbnRYIT09bmV8fHZvaWQgMD09PWUuY2xpZW50WXx8ZS5jbGllbnRZIT09dGUpe2lmKGZlLmlnbm9yZUlucHV0VGV4dFNlbGVjdGlvbil7dmFyIG49eShcImNsaWVudFhcIixlKSx0PXkoXCJjbGllbnRZXCIsZSkscj14LmVsZW1lbnRGcm9tUG9pbnQobix0KTtpZihwKHIpKXJldHVybn12YXIgbz1jZTtjKCEwKSxtKCksRCgpLEIobyk7dmFyIGE9dShXKTtaPXkoXCJwYWdlWFwiLGUpLWEubGVmdCxlZT15KFwicGFnZVlcIixlKS1hLnRvcCxFLmFkZChpZXx8VyxcImd1LXRyYW5zaXRcIiksSygpLFUoZSl9fX1mdW5jdGlvbiBUKGUpe2lmKCEobGUuZHJhZ2dpbmcmJkp8fHQoZSkpKXtmb3IodmFyIG49ZTt2KGUpJiZ0KHYoZSkpPT09ITE7KXtpZihmZS5pbnZhbGlkKGUsbikpcmV0dXJuO2lmKGU9dihlKSwhZSlyZXR1cm59dmFyIHI9dihlKTtpZihyJiYhZmUuaW52YWxpZChlLG4pKXt2YXIgbz1mZS5tb3ZlcyhlLHIsbixnKGUpKTtpZihvKXJldHVybntpdGVtOmUsc291cmNlOnJ9fX19ZnVuY3Rpb24gWChlKXtyZXR1cm4hIVQoZSl9ZnVuY3Rpb24gWShlKXt2YXIgbj1UKGUpO24mJkIobil9ZnVuY3Rpb24gQihlKXskKGUuaXRlbSxlLnNvdXJjZSkmJihpZT1lLml0ZW0uY2xvbmVOb2RlKCEwKSxsZS5lbWl0KFwiY2xvbmVkXCIsaWUsZS5pdGVtLFwiY29weVwiKSksUT1lLnNvdXJjZSxXPWUuaXRlbSxyZT1vZT1nKGUuaXRlbSksbGUuZHJhZ2dpbmc9ITAsbGUuZW1pdChcImRyYWdcIixXLFEpfWZ1bmN0aW9uIFAoKXtyZXR1cm4hMX1mdW5jdGlvbiBEKCl7aWYobGUuZHJhZ2dpbmcpe3ZhciBlPWllfHxXO00oZSx2KGUpKX19ZnVuY3Rpb24gSSgpe2NlPSExLGMoITApLG0oITApfWZ1bmN0aW9uIEwoZSl7aWYoSSgpLGxlLmRyYWdnaW5nKXt2YXIgbj1pZXx8Vyx0PXkoXCJjbGllbnRYXCIsZSkscj15KFwiY2xpZW50WVwiLGUpLG89YShKLHQsciksaT1xKG8sdCxyKTtpJiYoaWUmJmZlLmNvcHlTb3J0U291cmNlfHwhaWV8fGkhPT1RKT9NKG4saSk6ZmUucmVtb3ZlT25TcGlsbD9SKCk6QSgpfX1mdW5jdGlvbiBNKGUsbil7dmFyIHQ9dihlKTtpZSYmZmUuY29weVNvcnRTb3VyY2UmJm49PT1RJiZ0LnJlbW92ZUNoaWxkKFcpLGsobik/bGUuZW1pdChcImNhbmNlbFwiLGUsUSxRKTpsZS5lbWl0KFwiZHJvcFwiLGUsbixRLG9lKSxqKCl9ZnVuY3Rpb24gUigpe2lmKGxlLmRyYWdnaW5nKXt2YXIgZT1pZXx8VyxuPXYoZSk7biYmbi5yZW1vdmVDaGlsZChlKSxsZS5lbWl0KGllP1wiY2FuY2VsXCI6XCJyZW1vdmVcIixlLG4sUSksaigpfX1mdW5jdGlvbiBBKGUpe2lmKGxlLmRyYWdnaW5nKXt2YXIgbj1hcmd1bWVudHMubGVuZ3RoPjA/ZTpmZS5yZXZlcnRPblNwaWxsLHQ9aWV8fFcscj12KHQpLG89ayhyKTtvPT09ITEmJm4mJihpZT9yJiZyLnJlbW92ZUNoaWxkKGllKTpRLmluc2VydEJlZm9yZSh0LHJlKSksb3x8bj9sZS5lbWl0KFwiY2FuY2VsXCIsdCxRLFEpOmxlLmVtaXQoXCJkcm9wXCIsdCxyLFEsb2UpLGooKX19ZnVuY3Rpb24gaigpe3ZhciBlPWllfHxXO0koKSx6KCksZSYmRS5ybShlLFwiZ3UtdHJhbnNpdFwiKSx1ZSYmY2xlYXJUaW1lb3V0KHVlKSxsZS5kcmFnZ2luZz0hMSxhZSYmbGUuZW1pdChcIm91dFwiLGUsYWUsUSksbGUuZW1pdChcImRyYWdlbmRcIixlKSxRPVc9aWU9cmU9b2U9dWU9YWU9bnVsbH1mdW5jdGlvbiBrKGUsbil7dmFyIHQ7cmV0dXJuIHQ9dm9pZCAwIT09bj9uOko/b2U6ZyhpZXx8VyksZT09PVEmJnQ9PT1yZX1mdW5jdGlvbiBxKGUsbixyKXtmdW5jdGlvbiBvKCl7dmFyIG89dChpKTtpZihvPT09ITEpcmV0dXJuITE7dmFyIHU9SChpLGUpLGM9VihpLHUsbixyKSxhPWsoaSxjKTtyZXR1cm4gYT8hMDpmZS5hY2NlcHRzKFcsaSxRLGMpfWZvcih2YXIgaT1lO2kmJiFvKCk7KWk9dihpKTtyZXR1cm4gaX1mdW5jdGlvbiBVKGUpe2Z1bmN0aW9uIG4oZSl7bGUuZW1pdChlLGYsYWUsUSl9ZnVuY3Rpb24gdCgpe3MmJm4oXCJvdmVyXCIpfWZ1bmN0aW9uIHIoKXthZSYmbihcIm91dFwiKX1pZihKKXtlLnByZXZlbnREZWZhdWx0KCk7dmFyIG89eShcImNsaWVudFhcIixlKSxpPXkoXCJjbGllbnRZXCIsZSksdT1vLVosYz1pLWVlO0ouc3R5bGUubGVmdD11K1wicHhcIixKLnN0eWxlLnRvcD1jK1wicHhcIjt2YXIgZj1pZXx8VyxsPWEoSixvLGkpLGQ9cShsLG8saSkscz1udWxsIT09ZCYmZCE9PWFlOyhzfHxudWxsPT09ZCkmJihyKCksYWU9ZCx0KCkpO3ZhciBwPXYoZik7aWYoZD09PVEmJmllJiYhZmUuY29weVNvcnRTb3VyY2UpcmV0dXJuIHZvaWQocCYmcC5yZW1vdmVDaGlsZChmKSk7dmFyIG0saD1IKGQsbCk7aWYobnVsbCE9PWgpbT1WKGQsaCxvLGkpO2Vsc2V7aWYoZmUucmV2ZXJ0T25TcGlsbCE9PSEwfHxpZSlyZXR1cm4gdm9pZChpZSYmcCYmcC5yZW1vdmVDaGlsZChmKSk7bT1yZSxkPVF9KG51bGw9PT1tJiZzfHxtIT09ZiYmbSE9PWcoZikpJiYob2U9bSxkLmluc2VydEJlZm9yZShmLG0pLGxlLmVtaXQoXCJzaGFkb3dcIixmLGQsUSkpfX1mdW5jdGlvbiBfKGUpe0Uucm0oZSxcImd1LWhpZGVcIil9ZnVuY3Rpb24gRihlKXtsZS5kcmFnZ2luZyYmRS5hZGQoZSxcImd1LWhpZGVcIil9ZnVuY3Rpb24gSygpe2lmKCFKKXt2YXIgZT1XLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO0o9Vy5jbG9uZU5vZGUoITApLEouc3R5bGUud2lkdGg9ZChlKStcInB4XCIsSi5zdHlsZS5oZWlnaHQ9cyhlKStcInB4XCIsRS5ybShKLFwiZ3UtdHJhbnNpdFwiKSxFLmFkZChKLFwiZ3UtbWlycm9yXCIpLGZlLm1pcnJvckNvbnRhaW5lci5hcHBlbmRDaGlsZChKKSxvKFMsXCJhZGRcIixcIm1vdXNlbW92ZVwiLFUpLEUuYWRkKGZlLm1pcnJvckNvbnRhaW5lcixcImd1LXVuc2VsZWN0YWJsZVwiKSxsZS5lbWl0KFwiY2xvbmVkXCIsSixXLFwibWlycm9yXCIpfX1mdW5jdGlvbiB6KCl7SiYmKEUucm0oZmUubWlycm9yQ29udGFpbmVyLFwiZ3UtdW5zZWxlY3RhYmxlXCIpLG8oUyxcInJlbW92ZVwiLFwibW91c2Vtb3ZlXCIsVSksdihKKS5yZW1vdmVDaGlsZChKKSxKPW51bGwpfWZ1bmN0aW9uIEgoZSxuKXtmb3IodmFyIHQ9bjt0IT09ZSYmdih0KSE9PWU7KXQ9dih0KTtyZXR1cm4gdD09PVM/bnVsbDp0fWZ1bmN0aW9uIFYoZSxuLHQscil7ZnVuY3Rpb24gbygpe3ZhciBuLG8saSx1PWUuY2hpbGRyZW4ubGVuZ3RoO2ZvcihuPTA7dT5uO24rKyl7aWYobz1lLmNoaWxkcmVuW25dLGk9by5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxjJiZpLmxlZnQraS53aWR0aC8yPnQpcmV0dXJuIG87aWYoIWMmJmkudG9wK2kuaGVpZ2h0LzI+cilyZXR1cm4gb31yZXR1cm4gbnVsbH1mdW5jdGlvbiBpKCl7dmFyIGU9bi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtyZXR1cm4gdShjP3Q+ZS5sZWZ0K2QoZSkvMjpyPmUudG9wK3MoZSkvMil9ZnVuY3Rpb24gdShlKXtyZXR1cm4gZT9nKG4pOm59dmFyIGM9XCJob3Jpem9udGFsXCI9PT1mZS5kaXJlY3Rpb24sYT1uIT09ZT9pKCk6bygpO3JldHVybiBhfWZ1bmN0aW9uICQoZSxuKXtyZXR1cm5cImJvb2xlYW5cIj09dHlwZW9mIGZlLmNvcHk/ZmUuY29weTpmZS5jb3B5KGUsbil9dmFyIEc9YXJndW1lbnRzLmxlbmd0aDsxPT09RyYmQXJyYXkuaXNBcnJheShlKT09PSExJiYobj1lLGU9W10pO3ZhciBKLFEsVyxaLGVlLG5lLHRlLHJlLG9lLGllLHVlLGNlLGFlPW51bGwsZmU9bnx8e307dm9pZCAwPT09ZmUubW92ZXMmJihmZS5tb3Zlcz1sKSx2b2lkIDA9PT1mZS5hY2NlcHRzJiYoZmUuYWNjZXB0cz1sKSx2b2lkIDA9PT1mZS5pbnZhbGlkJiYoZmUuaW52YWxpZD1QKSx2b2lkIDA9PT1mZS5jb250YWluZXJzJiYoZmUuY29udGFpbmVycz1lfHxbXSksdm9pZCAwPT09ZmUuaXNDb250YWluZXImJihmZS5pc0NvbnRhaW5lcj1mKSx2b2lkIDA9PT1mZS5jb3B5JiYoZmUuY29weT0hMSksdm9pZCAwPT09ZmUuY29weVNvcnRTb3VyY2UmJihmZS5jb3B5U29ydFNvdXJjZT0hMSksdm9pZCAwPT09ZmUucmV2ZXJ0T25TcGlsbCYmKGZlLnJldmVydE9uU3BpbGw9ITEpLHZvaWQgMD09PWZlLnJlbW92ZU9uU3BpbGwmJihmZS5yZW1vdmVPblNwaWxsPSExKSx2b2lkIDA9PT1mZS5kaXJlY3Rpb24mJihmZS5kaXJlY3Rpb249XCJ2ZXJ0aWNhbFwiKSx2b2lkIDA9PT1mZS5pZ25vcmVJbnB1dFRleHRTZWxlY3Rpb24mJihmZS5pZ25vcmVJbnB1dFRleHRTZWxlY3Rpb249ITApLHZvaWQgMD09PWZlLm1pcnJvckNvbnRhaW5lciYmKGZlLm1pcnJvckNvbnRhaW5lcj14LmJvZHkpO3ZhciBsZT1iKHtjb250YWluZXJzOmZlLmNvbnRhaW5lcnMsc3RhcnQ6WSxlbmQ6RCxjYW5jZWw6QSxyZW1vdmU6UixkZXN0cm95OmgsY2FuTW92ZTpYLGRyYWdnaW5nOiExfSk7cmV0dXJuIGZlLnJlbW92ZU9uU3BpbGw9PT0hMCYmbGUub24oXCJvdmVyXCIsXykub24oXCJvdXRcIixGKSxyKCksbGV9ZnVuY3Rpb24gbyhlLG4scixvKXt2YXIgaT17bW91c2V1cDpcInRvdWNoZW5kXCIsbW91c2Vkb3duOlwidG91Y2hzdGFydFwiLG1vdXNlbW92ZTpcInRvdWNobW92ZVwifSx1PXttb3VzZXVwOlwicG9pbnRlcnVwXCIsbW91c2Vkb3duOlwicG9pbnRlcmRvd25cIixtb3VzZW1vdmU6XCJwb2ludGVybW92ZVwifSxjPXttb3VzZXVwOlwiTVNQb2ludGVyVXBcIixtb3VzZWRvd246XCJNU1BvaW50ZXJEb3duXCIsbW91c2Vtb3ZlOlwiTVNQb2ludGVyTW92ZVwifTt0Lm5hdmlnYXRvci5wb2ludGVyRW5hYmxlZD93W25dKGUsdVtyXSxvKTp0Lm5hdmlnYXRvci5tc1BvaW50ZXJFbmFibGVkP3dbbl0oZSxjW3JdLG8pOih3W25dKGUsaVtyXSxvKSx3W25dKGUscixvKSl9ZnVuY3Rpb24gaShlKXtpZih2b2lkIDAhPT1lLnRvdWNoZXMpcmV0dXJuIGUudG91Y2hlcy5sZW5ndGg7aWYodm9pZCAwIT09ZS53aGljaCYmMCE9PWUud2hpY2gpcmV0dXJuIGUud2hpY2g7aWYodm9pZCAwIT09ZS5idXR0b25zKXJldHVybiBlLmJ1dHRvbnM7dmFyIG49ZS5idXR0b247cmV0dXJuIHZvaWQgMCE9PW4/MSZuPzE6MiZuPzM6NCZuPzI6MDp2b2lkIDB9ZnVuY3Rpb24gdShlKXt2YXIgbj1lLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO3JldHVybntsZWZ0Om4ubGVmdCtjKFwic2Nyb2xsTGVmdFwiLFwicGFnZVhPZmZzZXRcIiksdG9wOm4udG9wK2MoXCJzY3JvbGxUb3BcIixcInBhZ2VZT2Zmc2V0XCIpfX1mdW5jdGlvbiBjKGUsbil7cmV0dXJuXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHRbbl0/dFtuXTpTLmNsaWVudEhlaWdodD9TW2VdOnguYm9keVtlXX1mdW5jdGlvbiBhKGUsbix0KXt2YXIgcixvPWV8fHt9LGk9by5jbGFzc05hbWU7cmV0dXJuIG8uY2xhc3NOYW1lKz1cIiBndS1oaWRlXCIscj14LmVsZW1lbnRGcm9tUG9pbnQobix0KSxvLmNsYXNzTmFtZT1pLHJ9ZnVuY3Rpb24gZigpe3JldHVybiExfWZ1bmN0aW9uIGwoKXtyZXR1cm4hMH1mdW5jdGlvbiBkKGUpe3JldHVybiBlLndpZHRofHxlLnJpZ2h0LWUubGVmdH1mdW5jdGlvbiBzKGUpe3JldHVybiBlLmhlaWdodHx8ZS5ib3R0b20tZS50b3B9ZnVuY3Rpb24gdihlKXtyZXR1cm4gZS5wYXJlbnROb2RlPT09eD9udWxsOmUucGFyZW50Tm9kZX1mdW5jdGlvbiBwKGUpe3JldHVyblwiSU5QVVRcIj09PWUudGFnTmFtZXx8XCJURVhUQVJFQVwiPT09ZS50YWdOYW1lfHxcIlNFTEVDVFwiPT09ZS50YWdOYW1lfHxtKGUpfWZ1bmN0aW9uIG0oZSl7cmV0dXJuIGU/XCJmYWxzZVwiPT09ZS5jb250ZW50RWRpdGFibGU/ITE6XCJ0cnVlXCI9PT1lLmNvbnRlbnRFZGl0YWJsZT8hMDptKHYoZSkpOiExfWZ1bmN0aW9uIGcoZSl7ZnVuY3Rpb24gbigpe3ZhciBuPWU7ZG8gbj1uLm5leHRTaWJsaW5nO3doaWxlKG4mJjEhPT1uLm5vZGVUeXBlKTtyZXR1cm4gbn1yZXR1cm4gZS5uZXh0RWxlbWVudFNpYmxpbmd8fG4oKX1mdW5jdGlvbiBoKGUpe3JldHVybiBlLnRhcmdldFRvdWNoZXMmJmUudGFyZ2V0VG91Y2hlcy5sZW5ndGg/ZS50YXJnZXRUb3VjaGVzWzBdOmUuY2hhbmdlZFRvdWNoZXMmJmUuY2hhbmdlZFRvdWNoZXMubGVuZ3RoP2UuY2hhbmdlZFRvdWNoZXNbMF06ZX1mdW5jdGlvbiB5KGUsbil7dmFyIHQ9aChuKSxyPXtwYWdlWDpcImNsaWVudFhcIixwYWdlWTpcImNsaWVudFlcIn07cmV0dXJuIGUgaW4gciYmIShlIGluIHQpJiZyW2VdaW4gdCYmKGU9cltlXSksdFtlXX12YXIgYj1lKFwiY29udHJhL2VtaXR0ZXJcIiksdz1lKFwiY3Jvc3N2ZW50XCIpLEU9ZShcIi4vY2xhc3Nlc1wiKSx4PWRvY3VtZW50LFM9eC5kb2N1bWVudEVsZW1lbnQ7bi5leHBvcnRzPXJ9KS5jYWxsKHRoaXMsXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGdsb2JhbD9nbG9iYWw6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHNlbGY/c2VsZjpcInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93P3dpbmRvdzp7fSl9LHtcIi4vY2xhc3Nlc1wiOjEsXCJjb250cmEvZW1pdHRlclwiOjUsY3Jvc3N2ZW50OjZ9XSwzOltmdW5jdGlvbihlLG4sdCl7bi5leHBvcnRzPWZ1bmN0aW9uKGUsbil7cmV0dXJuIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGUsbil9fSx7fV0sNDpbZnVuY3Rpb24oZSxuLHQpe1widXNlIHN0cmljdFwiO3ZhciByPWUoXCJ0aWNreVwiKTtuLmV4cG9ydHM9ZnVuY3Rpb24oZSxuLHQpe2UmJnIoZnVuY3Rpb24oKXtlLmFwcGx5KHR8fG51bGwsbnx8W10pfSl9fSx7dGlja3k6OX1dLDU6W2Z1bmN0aW9uKGUsbix0KXtcInVzZSBzdHJpY3RcIjt2YXIgcj1lKFwiYXRvYVwiKSxvPWUoXCIuL2RlYm91bmNlXCIpO24uZXhwb3J0cz1mdW5jdGlvbihlLG4pe3ZhciB0PW58fHt9LGk9e307cmV0dXJuIHZvaWQgMD09PWUmJihlPXt9KSxlLm9uPWZ1bmN0aW9uKG4sdCl7cmV0dXJuIGlbbl0/aVtuXS5wdXNoKHQpOmlbbl09W3RdLGV9LGUub25jZT1mdW5jdGlvbihuLHQpe3JldHVybiB0Ll9vbmNlPSEwLGUub24obix0KSxlfSxlLm9mZj1mdW5jdGlvbihuLHQpe3ZhciByPWFyZ3VtZW50cy5sZW5ndGg7aWYoMT09PXIpZGVsZXRlIGlbbl07ZWxzZSBpZigwPT09cilpPXt9O2Vsc2V7dmFyIG89aVtuXTtpZighbylyZXR1cm4gZTtvLnNwbGljZShvLmluZGV4T2YodCksMSl9cmV0dXJuIGV9LGUuZW1pdD1mdW5jdGlvbigpe3ZhciBuPXIoYXJndW1lbnRzKTtyZXR1cm4gZS5lbWl0dGVyU25hcHNob3Qobi5zaGlmdCgpKS5hcHBseSh0aGlzLG4pfSxlLmVtaXR0ZXJTbmFwc2hvdD1mdW5jdGlvbihuKXt2YXIgdT0oaVtuXXx8W10pLnNsaWNlKDApO3JldHVybiBmdW5jdGlvbigpe3ZhciBpPXIoYXJndW1lbnRzKSxjPXRoaXN8fGU7aWYoXCJlcnJvclwiPT09biYmdFtcInRocm93c1wiXSE9PSExJiYhdS5sZW5ndGgpdGhyb3cgMT09PWkubGVuZ3RoP2lbMF06aTtyZXR1cm4gdS5mb3JFYWNoKGZ1bmN0aW9uKHIpe3QuYXN5bmM/byhyLGksYyk6ci5hcHBseShjLGkpLHIuX29uY2UmJmUub2ZmKG4scil9KSxlfX0sZX19LHtcIi4vZGVib3VuY2VcIjo0LGF0b2E6M31dLDY6W2Z1bmN0aW9uKGUsbix0KXsoZnVuY3Rpb24odCl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gcihlLG4sdCxyKXtyZXR1cm4gZS5hZGRFdmVudExpc3RlbmVyKG4sdCxyKX1mdW5jdGlvbiBvKGUsbix0KXtyZXR1cm4gZS5hdHRhY2hFdmVudChcIm9uXCIrbixmKGUsbix0KSl9ZnVuY3Rpb24gaShlLG4sdCxyKXtyZXR1cm4gZS5yZW1vdmVFdmVudExpc3RlbmVyKG4sdCxyKX1mdW5jdGlvbiB1KGUsbix0KXt2YXIgcj1sKGUsbix0KTtyZXR1cm4gcj9lLmRldGFjaEV2ZW50KFwib25cIituLHIpOnZvaWQgMH1mdW5jdGlvbiBjKGUsbix0KXtmdW5jdGlvbiByKCl7dmFyIGU7cmV0dXJuIHAuY3JlYXRlRXZlbnQ/KGU9cC5jcmVhdGVFdmVudChcIkV2ZW50XCIpLGUuaW5pdEV2ZW50KG4sITAsITApKTpwLmNyZWF0ZUV2ZW50T2JqZWN0JiYoZT1wLmNyZWF0ZUV2ZW50T2JqZWN0KCkpLGV9ZnVuY3Rpb24gbygpe3JldHVybiBuZXcgcyhuLHtkZXRhaWw6dH0pfXZhciBpPS0xPT09di5pbmRleE9mKG4pP28oKTpyKCk7ZS5kaXNwYXRjaEV2ZW50P2UuZGlzcGF0Y2hFdmVudChpKTplLmZpcmVFdmVudChcIm9uXCIrbixpKX1mdW5jdGlvbiBhKGUsbixyKXtyZXR1cm4gZnVuY3Rpb24obil7dmFyIG89bnx8dC5ldmVudDtvLnRhcmdldD1vLnRhcmdldHx8by5zcmNFbGVtZW50LG8ucHJldmVudERlZmF1bHQ9by5wcmV2ZW50RGVmYXVsdHx8ZnVuY3Rpb24oKXtvLnJldHVyblZhbHVlPSExfSxvLnN0b3BQcm9wYWdhdGlvbj1vLnN0b3BQcm9wYWdhdGlvbnx8ZnVuY3Rpb24oKXtvLmNhbmNlbEJ1YmJsZT0hMH0sby53aGljaD1vLndoaWNofHxvLmtleUNvZGUsci5jYWxsKGUsbyl9fWZ1bmN0aW9uIGYoZSxuLHQpe3ZhciByPWwoZSxuLHQpfHxhKGUsbix0KTtyZXR1cm4gaC5wdXNoKHt3cmFwcGVyOnIsZWxlbWVudDplLHR5cGU6bixmbjp0fSkscn1mdW5jdGlvbiBsKGUsbix0KXt2YXIgcj1kKGUsbix0KTtpZihyKXt2YXIgbz1oW3JdLndyYXBwZXI7cmV0dXJuIGguc3BsaWNlKHIsMSksb319ZnVuY3Rpb24gZChlLG4sdCl7dmFyIHIsbztmb3Iocj0wO3I8aC5sZW5ndGg7cisrKWlmKG89aFtyXSxvLmVsZW1lbnQ9PT1lJiZvLnR5cGU9PT1uJiZvLmZuPT09dClyZXR1cm4gcn12YXIgcz1lKFwiY3VzdG9tLWV2ZW50XCIpLHY9ZShcIi4vZXZlbnRtYXBcIikscD10LmRvY3VtZW50LG09cixnPWksaD1bXTt0LmFkZEV2ZW50TGlzdGVuZXJ8fChtPW8sZz11KSxuLmV4cG9ydHM9e2FkZDptLHJlbW92ZTpnLGZhYnJpY2F0ZTpjfX0pLmNhbGwodGhpcyxcInVuZGVmaW5lZFwiIT10eXBlb2YgZ2xvYmFsP2dsb2JhbDpcInVuZGVmaW5lZFwiIT10eXBlb2Ygc2VsZj9zZWxmOlwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3c/d2luZG93Ont9KX0se1wiLi9ldmVudG1hcFwiOjcsXCJjdXN0b20tZXZlbnRcIjo4fV0sNzpbZnVuY3Rpb24oZSxuLHQpeyhmdW5jdGlvbihlKXtcInVzZSBzdHJpY3RcIjt2YXIgdD1bXSxyPVwiXCIsbz0vXm9uLztmb3IociBpbiBlKW8udGVzdChyKSYmdC5wdXNoKHIuc2xpY2UoMikpO24uZXhwb3J0cz10fSkuY2FsbCh0aGlzLFwidW5kZWZpbmVkXCIhPXR5cGVvZiBnbG9iYWw/Z2xvYmFsOlwidW5kZWZpbmVkXCIhPXR5cGVvZiBzZWxmP3NlbGY6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdz93aW5kb3c6e30pfSx7fV0sODpbZnVuY3Rpb24oZSxuLHQpeyhmdW5jdGlvbihlKXtmdW5jdGlvbiB0KCl7dHJ5e3ZhciBlPW5ldyByKFwiY2F0XCIse2RldGFpbDp7Zm9vOlwiYmFyXCJ9fSk7cmV0dXJuXCJjYXRcIj09PWUudHlwZSYmXCJiYXJcIj09PWUuZGV0YWlsLmZvb31jYXRjaChuKXt9cmV0dXJuITF9dmFyIHI9ZS5DdXN0b21FdmVudDtuLmV4cG9ydHM9dCgpP3I6XCJmdW5jdGlvblwiPT10eXBlb2YgZG9jdW1lbnQuY3JlYXRlRXZlbnQ/ZnVuY3Rpb24oZSxuKXt2YXIgdD1kb2N1bWVudC5jcmVhdGVFdmVudChcIkN1c3RvbUV2ZW50XCIpO3JldHVybiBuP3QuaW5pdEN1c3RvbUV2ZW50KGUsbi5idWJibGVzLG4uY2FuY2VsYWJsZSxuLmRldGFpbCk6dC5pbml0Q3VzdG9tRXZlbnQoZSwhMSwhMSx2b2lkIDApLHR9OmZ1bmN0aW9uKGUsbil7dmFyIHQ9ZG9jdW1lbnQuY3JlYXRlRXZlbnRPYmplY3QoKTtyZXR1cm4gdC50eXBlPWUsbj8odC5idWJibGVzPUJvb2xlYW4obi5idWJibGVzKSx0LmNhbmNlbGFibGU9Qm9vbGVhbihuLmNhbmNlbGFibGUpLHQuZGV0YWlsPW4uZGV0YWlsKToodC5idWJibGVzPSExLHQuY2FuY2VsYWJsZT0hMSx0LmRldGFpbD12b2lkIDApLHR9fSkuY2FsbCh0aGlzLFwidW5kZWZpbmVkXCIhPXR5cGVvZiBnbG9iYWw/Z2xvYmFsOlwidW5kZWZpbmVkXCIhPXR5cGVvZiBzZWxmP3NlbGY6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdz93aW5kb3c6e30pfSx7fV0sOTpbZnVuY3Rpb24oZSxuLHQpe3ZhciByLG89XCJmdW5jdGlvblwiPT10eXBlb2Ygc2V0SW1tZWRpYXRlO3I9bz9mdW5jdGlvbihlKXtzZXRJbW1lZGlhdGUoZSl9OmZ1bmN0aW9uKGUpe3NldFRpbWVvdXQoZSwwKX0sbi5leHBvcnRzPXJ9LHt9XX0se30sWzJdKSgyKX0pOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=