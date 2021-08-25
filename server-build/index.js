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

/***/ "./server/Model/user.js":
/*!******************************!*\
  !*** ./server/Model/user.js ***!
  \******************************/
/*! exports provided: Model */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Model\", function() { return Model; });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_AppError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/AppError */ \"./server/utils/AppError.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\n\nvar userSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({\n  name: {\n    type: String,\n    required: [true, 'name is required']\n  },\n  email: {\n    type: String,\n    required: {\n      value: true,\n      message: 'email is required'\n    },\n    unique: true\n  },\n  password: {\n    type: String,\n    required: [true, 'password is required'],\n    min: 4,\n    max: 8\n  },\n  confirmPassword: {\n    type: String,\n    required: [true],\n    validate: {\n      validator: function validator(value) {\n        console.log('confirmPassword === password', value === this.password);\n        if (this.password === undefined) throw new _utils_AppError__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\"confirmPassword is must required \", 400);\n        return value === this.password;\n      },\n      message: \"confirmPassword is not matched\"\n    }\n  },\n  role: {\n    type: String,\n    enum: ['admin', 'user'],\n    default: 'user',\n    required: true\n  }\n}, {\n  timestamps: true\n});\nuserSchema.pre('save', /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(next) {\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            if (this.isModified('password')) {\n              _context.next = 2;\n              break;\n            }\n\n            return _context.abrupt(\"return\", next());\n\n          case 2:\n            _context.next = 4;\n            return bcryptjs__WEBPACK_IMPORTED_MODULE_1___default.a.hash(this.password, 12);\n\n          case 4:\n            this.password = _context.sent;\n            // Delete passwordConfirm field\n            this.confirmPassword = undefined;\n            next();\n\n          case 7:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, this);\n  }));\n\n  return function (_x) {\n    return _ref.apply(this, arguments);\n  };\n}());\n\nuserSchema.methods.correctPassword = /*#__PURE__*/function () {\n  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(candidatePassword, userPassword) {\n    return regeneratorRuntime.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            _context2.next = 2;\n            return bcryptjs__WEBPACK_IMPORTED_MODULE_1___default.a.compare(candidatePassword, userPassword);\n\n          case 2:\n            return _context2.abrupt(\"return\", _context2.sent);\n\n          case 3:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  }));\n\n  return function (_x2, _x3) {\n    return _ref2.apply(this, arguments);\n  };\n}();\n\nvar Model = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('User', userSchema);\n\n//# sourceURL=webpack:///./server/Model/user.js?");

/***/ }),

/***/ "./server/controller/GlobalErrorController.js":
/*!****************************************************!*\
  !*** ./server/controller/GlobalErrorController.js ***!
  \****************************************************/
/*! exports provided: GlobalErrorController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GlobalErrorController\", function() { return GlobalErrorController; });\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar AppError = __webpack_require__(/*! ../utils/AppError */ \"./server/utils/AppError.js\");\n\nvar handleCastErrorDB = function handleCastErrorDB(err) {\n  var message = \"Invalid \".concat(err.path, \": \").concat(err.value, \".\");\n  return new AppError(message, 400);\n};\n\nvar handleDuplicateFieldsDB = function handleDuplicateFieldsDB(err) {\n  // const value = err.message.match(/([\"'])(\\\\?.)*?\\1/)[0];\n  console.log(err.keyValue); //   const value = err.errmsg.match(/([\"'])(\\\\?.)*?\\1/)[0];\n  //     console.log(value);\n\n  var value = err.keyValue.email;\n  var message = \"Duplicate field value: \".concat(value, \". Please use another value!\");\n  return new AppError(message, 400);\n};\n\nvar handleValidationErrorDB = function handleValidationErrorDB(err) {\n  var errors = Object.values(err.errors).map(function (el) {\n    return el.message;\n  });\n  var message = \"Invalid input data. \".concat(errors.join('. '));\n  return new AppError(message, 400);\n};\n\nvar handleJWTError = function handleJWTError() {\n  return new AppError('Invalid token. Please log in again!', 401);\n};\n\nvar handleJWTExpiredError = function handleJWTExpiredError() {\n  return new AppError('Your token has expired! Please log in again.', 401);\n};\n\nvar DevError = function DevError(err, res) {\n  console.log(err);\n  var message = err.message; // console.log(message)\n\n  var status = err.status || 500;\n  return res.status(status).json({\n    message: message\n  });\n};\n\nvar ProdError = function ProdError(err, res) {\n  if (err.isOperational === true) {\n    var message = err.message;\n    var status = err.status || 500;\n    return res.status(status).json({\n      message: message\n    });\n  } else {\n    var _message = 'something went wrong';\n    return res.status(500).json({\n      message: _message\n    });\n  }\n};\n\nvar GlobalErrorController = function GlobalErrorController(err, req, res, next) {\n  if (true) {\n    DevError(err, res);\n  } else { var error; }\n};\n\n//# sourceURL=webpack:///./server/controller/GlobalErrorController.js?");

/***/ }),

/***/ "./server/controller/index.js":
/*!************************************!*\
  !*** ./server/controller/index.js ***!
  \************************************/
/*! exports provided: login, signUp, protect, restrictTo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"login\", function() { return login; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"signUp\", function() { return signUp; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"protect\", function() { return protect; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"restrictTo\", function() { return restrictTo; });\n/* harmony import */ var _Model_user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Model/user */ \"./server/Model/user.js\");\n/* harmony import */ var _utils_CatchAsync__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/CatchAsync */ \"./server/utils/CatchAsync.js\");\n/* harmony import */ var _utils_AppError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/AppError */ \"./server/utils/AppError.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_3__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n // import  CatchAsync  from \"../utils/CatchAsync\"\n\n\n\n // // import  AppError  from \"../utils/AppError\"\n\nvar signToken = function signToken(id) {\n  return jsonwebtoken__WEBPACK_IMPORTED_MODULE_3___default.a.sign({\n    id: id\n  }, 'gwDJ+YFi87Mfo1Ih8M2qe7Jymbns1+h8', {\n    expiresIn: 1000000000000000\n  });\n};\n\nvar createSendToken = function createSendToken(user, statusCode, res) {\n  var token = signToken(user._id);\n  console.log(token);\n  var cookieOptions = {\n    expires: new Date(Date.now() + (process.env.JWT_COOKIE_EXPIRES_IN || 3) * 24 * 60 * 60 * 1000),\n    httpOnly: true\n  };\n  if (false) {}\n  console.log(cookieOptions);\n  res.cookie('jwt', token, cookieOptions); // Remove password from output\n\n  user.password = undefined;\n  res.status(statusCode).json({\n    status: 'success',\n    token: token,\n    data: {\n      user: user\n    }\n  });\n};\n\nvar login = Object(_utils_CatchAsync__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {\n    var _req$body, email, password, user;\n\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _req$body = req.body, email = _req$body.email, password = _req$body.password; // 1) Check if email and password exist\n\n            if (!(!email || !password)) {\n              _context.next = 3;\n              break;\n            }\n\n            return _context.abrupt(\"return\", next(new _utils_AppError__WEBPACK_IMPORTED_MODULE_2__[\"default\"]('Please provide email and password!', 400)));\n\n          case 3:\n            _context.next = 5;\n            return _Model_user__WEBPACK_IMPORTED_MODULE_0__[\"Model\"].findOne({\n              email: email\n            }).select('+password');\n\n          case 5:\n            user = _context.sent;\n            _context.t0 = !user;\n\n            if (_context.t0) {\n              _context.next = 11;\n              break;\n            }\n\n            _context.next = 10;\n            return user.correctPassword(password, user.password);\n\n          case 10:\n            _context.t0 = !_context.sent;\n\n          case 11:\n            if (!_context.t0) {\n              _context.next = 13;\n              break;\n            }\n\n            return _context.abrupt(\"return\", next(new _utils_AppError__WEBPACK_IMPORTED_MODULE_2__[\"default\"]('Incorrect email or password', 401)));\n\n          case 13:\n            // 3) If everything ok, send token to client\n            createSendToken(user, 200, res);\n\n          case 14:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function (_x, _x2, _x3) {\n    return _ref.apply(this, arguments);\n  };\n}());\nvar signUp = Object(_utils_CatchAsync__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/function () {\n  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res, next) {\n    var _req$body2, name, email, password, confirmPassword, newUser, user;\n\n    return regeneratorRuntime.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            _req$body2 = req.body, name = _req$body2.name, email = _req$body2.email, password = _req$body2.password, confirmPassword = _req$body2.changepassword;\n            console.log('name', name);\n            console.log('email', email);\n            console.log('password', password);\n            console.log('confirmPassword', confirmPassword); // let emailExist = await User.find({ email }).exec();\n            // console.log('emailExist',emailExist)\n            // if(emailExist.includes(email)) throw new AppError(\"User already exist\",400)\n\n            _context2.next = 7;\n            return Object(_Model_user__WEBPACK_IMPORTED_MODULE_0__[\"Model\"])({\n              name: name,\n              email: email,\n              password: password,\n              confirmPassword: confirmPassword\n            });\n\n          case 7:\n            newUser = _context2.sent;\n            console.log('newUser', newUser);\n            _context2.next = 11;\n            return newUser.save();\n\n          case 11:\n            user = _context2.sent;\n            res.status(201).json({\n              user: user\n            }); // createSendToken(newUser, 201, res);\n\n          case 13:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  }));\n\n  return function (_x4, _x5, _x6) {\n    return _ref2.apply(this, arguments);\n  };\n}());\nvar protect = Object(_utils_CatchAsync__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/function () {\n  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res, next) {\n    var token, decoded, currentUser;\n    return regeneratorRuntime.wrap(function _callee3$(_context3) {\n      while (1) {\n        switch (_context3.prev = _context3.next) {\n          case 0:\n            // 1) Getting token and check of it's there\n            if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {\n              token = req.headers.authorization.split(' ')[1];\n            }\n\n            if (token) {\n              _context3.next = 3;\n              break;\n            }\n\n            return _context3.abrupt(\"return\", next(new _utils_AppError__WEBPACK_IMPORTED_MODULE_2__[\"default\"]('You are not logged in! Please log in to get access.', 401)));\n\n          case 3:\n            // 2) Verification token\n            decoded = jsonwebtoken__WEBPACK_IMPORTED_MODULE_3___default.a.verify(token, 'gwDJ+YFi87Mfo1Ih8M2qe7Jymbns1+h8'); // 3) Check if user still exists\n\n            _context3.next = 6;\n            return _Model_user__WEBPACK_IMPORTED_MODULE_0__[\"Model\"].findById(decoded.id);\n\n          case 6:\n            currentUser = _context3.sent;\n\n            if (currentUser) {\n              _context3.next = 9;\n              break;\n            }\n\n            return _context3.abrupt(\"return\", next(new _utils_AppError__WEBPACK_IMPORTED_MODULE_2__[\"default\"]('The user belonging to this token does no longer exist.', 401)));\n\n          case 9:\n            if (!currentUser.changedPasswordAfter(decoded.iat)) {\n              _context3.next = 11;\n              break;\n            }\n\n            return _context3.abrupt(\"return\", next(new _utils_AppError__WEBPACK_IMPORTED_MODULE_2__[\"default\"]('User recently changed password! Please log in again.', 401)));\n\n          case 11:\n            // GRANT ACCESS TO PROTECTED ROUTE\n            req.user = currentUser;\n            next();\n\n          case 13:\n          case \"end\":\n            return _context3.stop();\n        }\n      }\n    }, _callee3);\n  }));\n\n  return function (_x7, _x8, _x9) {\n    return _ref3.apply(this, arguments);\n  };\n}());\nvar restrictTo = function restrictTo() {\n  for (var _len = arguments.length, arr = new Array(_len), _key = 0; _key < _len; _key++) {\n    arr[_key] = arguments[_key];\n  }\n\n  return function (req, res, next) {\n    if (!arr.includes(req.user.role)) {\n      return next(new _utils_AppError__WEBPACK_IMPORTED_MODULE_2__[\"default\"]('Your are not authorized to change any resources', 403));\n    }\n\n    next();\n  };\n};\n\n//# sourceURL=webpack:///./server/controller/index.js?");

/***/ }),

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! dotenv */ \"dotenv\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _src_App__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/App */ \"./src/App.js\");\n/* harmony import */ var _router_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./router/index */ \"./server/router/index.js\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _controller_GlobalErrorController__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./controller/GlobalErrorController */ \"./server/controller/GlobalErrorController.js\");\n/* harmony import */ var express_mongo_sanitize__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! express-mongo-sanitize */ \"express-mongo-sanitize\");\n/* harmony import */ var express_mongo_sanitize__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(express_mongo_sanitize__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var xss_clean__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! xss-clean */ \"xss-clean\");\n/* harmony import */ var xss_clean__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(xss_clean__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _react_ssr_express_register__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @react-ssr/express/register */ \"@react-ssr/express/register\");\n/* harmony import */ var _react_ssr_express_register__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_react_ssr_express_register__WEBPACK_IMPORTED_MODULE_14__);\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\ndotenv__WEBPACK_IMPORTED_MODULE_6___default.a.config({\n  path: './dotenv.env'\n});\nvar app = express__WEBPACK_IMPORTED_MODULE_3___default()(); // app.use(cors({origin: 'http://localhost:3000'})); \n\nprocess.on('uncaughtException', function (err) {\n  console.log('Uncaught Exception occurs');\n  console.log(err.message, err.name);\n  process.exit(1);\n});\nvar PORT = process.env.PORT || 3006;\napp.use(express__WEBPACK_IMPORTED_MODULE_3___default.a.static(path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, 'public')));\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_5___default.a.json({\n  limit: '10kb'\n}));\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_5___default.a.json());\napp.use(express_mongo_sanitize__WEBPACK_IMPORTED_MODULE_11___default()());\napp.use(xss_clean__WEBPACK_IMPORTED_MODULE_12___default()()); // (async()=>{\n//   await register(app)\n// })()\n\nvar serverRenderer = function serverRenderer(req, res) {\n  var app = react_dom_server__WEBPACK_IMPORTED_MODULE_4___default.a.renderToString( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_src_App__WEBPACK_IMPORTED_MODULE_7__[\"default\"], null));\n  var indexFile = path__WEBPACK_IMPORTED_MODULE_0___default.a.resolve('./build/index.html');\n  fs__WEBPACK_IMPORTED_MODULE_1___default.a.readFile(indexFile, 'utf8', function (err, data) {\n    if (err) {\n      console.error('Something went wrong:', err);\n      return res.status(500).send('Oops, better luck next time!');\n    }\n\n    return res.send(data.replace('<div id=\"root\"></div>', \"<div id=\\\"root\\\">\".concat(app, \"</div>\")));\n  });\n};\n\n_router_index__WEBPACK_IMPORTED_MODULE_8__[\"router\"].use('^/$', serverRenderer); // router.use('^/$', serverRenderer) \n\napp.use(express__WEBPACK_IMPORTED_MODULE_3___default.a.static('./build'));\napp.use(_router_index__WEBPACK_IMPORTED_MODULE_8__[\"router\"]);\nmongoose__WEBPACK_IMPORTED_MODULE_9___default.a.connect('mongodb://localhost/fabDaiProject', {\n  useNewUrlParser: true,\n  useUnifiedTopology: true\n}).then(function () {\n  app.listen(PORT, function () {\n    console.log(\"connected to port \".concat(PORT));\n  });\n});\napp.use(_controller_GlobalErrorController__WEBPACK_IMPORTED_MODULE_10__[\"GlobalErrorController\"]);\nprocess.on('unhandledRejection', function (err) {\n  console.log(err.name, err.message);\n  process.exit(1);\n});\n/* WEBPACK VAR INJECTION */}.call(this, \"/\"))\n\n//# sourceURL=webpack:///./server/index.js?");

/***/ }),

/***/ "./server/router/index.js":
/*!********************************!*\
  !*** ./server/router/index.js ***!
  \********************************/
/*! exports provided: router */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"router\", function() { return router; });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controller_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controller/index */ \"./server/controller/index.js\");\n\n // import {upload } from '../utils/File'\n\nvar router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router(); // router.route('/').get(controller.login).post(controller.add)\n// router.route('/').get(login)\n// router.route('/1234') \n\nrouter.route('/login').post(_controller_index__WEBPACK_IMPORTED_MODULE_1__[\"login\"]);\nrouter.route('/signup').post(_controller_index__WEBPACK_IMPORTED_MODULE_1__[\"signUp\"]); // router.route('/').post(upload.single('Image'),blog rakhne ya)\n\n//# sourceURL=webpack:///./server/router/index.js?");

/***/ }),

/***/ "./server/utils/AppError.js":
/*!**********************************!*\
  !*** ./server/utils/AppError.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _wrapNativeSuper(Class) { var _cache = typeof Map === \"function\" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== \"function\") { throw new TypeError(\"Super expression must either be null or a function\"); } if (typeof _cache !== \"undefined\") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }\n\nfunction _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _isNativeFunction(fn) { return Function.toString.call(fn).indexOf(\"[native code]\") !== -1; }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nvar AppError = /*#__PURE__*/function (_Error) {\n  _inherits(AppError, _Error);\n\n  var _super = _createSuper(AppError);\n\n  function AppError(message, status) {\n    var _this;\n\n    _classCallCheck(this, AppError);\n\n    _this = _super.call(this, message);\n    _this.status = status;\n    _this.isOperational = true;\n    return _this;\n  }\n\n  return AppError;\n}( /*#__PURE__*/_wrapNativeSuper(Error));\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AppError);\n\n//# sourceURL=webpack:///./server/utils/AppError.js?");

/***/ }),

/***/ "./server/utils/CatchAsync.js":
/*!************************************!*\
  !*** ./server/utils/CatchAsync.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar CatchAsync = function CatchAsync(fn) {\n  return function (req, res, next) {\n    // console.log(arr)\n    fn(req, res, next).catch(next);\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CatchAsync);\n\n//# sourceURL=webpack:///./server/utils/CatchAsync.js?");

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return appWithErrorBoundary; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ErrorBoundary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ErrorBoundary */ \"./src/ErrorBoundary/index.js\");\n/* harmony import */ var _Component_About__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Component/About */ \"./src/Component/About.js\");\n/* harmony import */ var _Component_Home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Component/Home */ \"./src/Component/Home.js\");\n/* harmony import */ var _Component_Blog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Component/Blog */ \"./src/Component/Blog.js\");\n/* harmony import */ var _Component_Contact__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Component/Contact */ \"./src/Component/Contact.js\");\n/* harmony import */ var _Component_Login__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Component/Login */ \"./src/Component/Login.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\n\n\n\nfunction App() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__[\"Switch\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__[\"Route\"], {\n    exact: true,\n    path: \"/\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Component_Home__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__[\"Route\"], {\n    path: \"/contact\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Component_Contact__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__[\"Route\"], {\n    path: \"/about\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Component_About__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__[\"Route\"], {\n    path: \"/blog\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Component_Blog__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__[\"Route\"], {\n    path: \"/login\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Component_Login__WEBPACK_IMPORTED_MODULE_6__[\"default\"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__[\"Route\"], {\n    path: \"*\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"page not found\"))));\n}\n\nfunction appWithErrorBoundary(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ErrorBoundary__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(App, props));\n} // export default App;\n\n//# sourceURL=webpack:///./src/App.js?");

/***/ }),

/***/ "./src/Component/About.js":
/*!********************************!*\
  !*** ./src/Component/About.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header */ \"./src/Component/Header.js\");\n/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Footer */ \"./src/Component/Footer.js\");\n\n\n\n\nfunction About() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (About);\n\n//# sourceURL=webpack:///./src/Component/About.js?");

/***/ }),

/***/ "./src/Component/Blog.js":
/*!*******************************!*\
  !*** ./src/Component/Blog.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header */ \"./src/Component/Header.js\");\n/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Footer */ \"./src/Component/Footer.js\");\n\n\n\n\nfunction Blog() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Blog);\n\n//# sourceURL=webpack:///./src/Component/Blog.js?");

/***/ }),

/***/ "./src/Component/Contact.js":
/*!**********************************!*\
  !*** ./src/Component/Contact.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header */ \"./src/Component/Header.js\");\n/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Footer */ \"./src/Component/Footer.js\");\n\n\n\n\nfunction Contact() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Contact);\n\n//# sourceURL=webpack:///./src/Component/Contact.js?");

/***/ }),

/***/ "./src/Component/Footer.js":
/*!*********************************!*\
  !*** ./src/Component/Footer.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Footer; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Data_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Data/Footer */ \"./src/Data/Footer.js\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/useMediaQuery */ \"@material-ui/core/useMediaQuery\");\n/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nvar useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"makeStyles\"])(function (theme) {\n  return {\n    footer: {\n      position: 'fixed',\n      bottom: 0,\n      height: \"25vh\",\n      backgroundColor: \"green\"\n    },\n    typography: {\n      display: \"flex\",\n      justifyContent: \"spaceBetween\"\n    },\n    listStyle: {\n      listStyle: \"none\",\n      color: \"white\"\n    },\n    word: {\n      display: 'relative',\n      top: \"20px\"\n    }\n  };\n});\nfunction Footer() {\n  var _useStyles = useStyles(),\n      footer = _useStyles.footer,\n      typography = _useStyles.typography,\n      listStyle = _useStyles.listStyle,\n      word = _useStyles.word;\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"AppBar\"], {\n    position: \"static\",\n    color: \"primary\",\n    className: footer\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Container\"], {\n    maxWidth: \"md\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Toolbar\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n    variant: \"body1\",\n    color: \"inherit\",\n    className: typography\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    style: {\n      marginRight: \"45px\"\n    }\n  }, _Data_Footer__WEBPACK_IMPORTED_MODULE_2__[\"arr\"].slice(0, 3).map(function (item, i) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n      key: i,\n      className: listStyle\n    }, item);\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    style: {\n      marginRight: \"45px\"\n    }\n  }, _Data_Footer__WEBPACK_IMPORTED_MODULE_2__[\"arr\"].slice(3, 6).map(function (item, i) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n      key: i,\n      className: listStyle\n    }, item);\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    style: {\n      marginRight: \"45px\"\n    }\n  }, _Data_Footer__WEBPACK_IMPORTED_MODULE_2__[\"arr\"].slice(6).map(function (item, i) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n      key: i,\n      className: listStyle\n    }, item);\n  }))))));\n}\n\n//# sourceURL=webpack:///./src/Component/Footer.js?");

/***/ }),

/***/ "./src/Component/Form1.js":
/*!********************************!*\
  !*** ./src/Component/Form1.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"react-dom\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ \"formik\");\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! yup */ \"yup\");\n/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _signupReq__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./signupReq */ \"./src/Component/signupReq.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\n\n\n\n\nvar Schema = yup__WEBPACK_IMPORTED_MODULE_3__[\"object\"]().shape({\n  email: yup__WEBPACK_IMPORTED_MODULE_3__[\"string\"]().email().required(\"Required\"),\n  name: yup__WEBPACK_IMPORTED_MODULE_3__[\"string\"]().required(\"Required\"),\n  password: yup__WEBPACK_IMPORTED_MODULE_3__[\"string\"]().required(\"This field is required\"),\n  changepassword: yup__WEBPACK_IMPORTED_MODULE_3__[\"string\"]().when(\"password\", {\n    is: function is(val) {\n      return val && val.length > 0 ? true : false;\n    },\n    then: yup__WEBPACK_IMPORTED_MODULE_3__[\"string\"]().oneOf([yup__WEBPACK_IMPORTED_MODULE_3__[\"ref\"](\"password\")], \"Both password need to be the same\")\n  })\n});\n\nvar Basic = function Basic() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"Sign Up\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__[\"Formik\"], {\n    initialValues: {\n      name: '',\n      email: '',\n      password: '',\n      changepassword: ''\n    },\n    validationSchema: Schema,\n    onSubmit: /*#__PURE__*/function () {\n      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(values) {\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                console.log('on submit'); //  <SignupReq data={values} state={true} />\n\n                _context.prev = 1;\n                _context.next = 4;\n                return axios__WEBPACK_IMPORTED_MODULE_5___default.a.post('http://localhost:3006/signup', values).then(function (response) {\n                  console.log('response', response);\n                }).catch(function (err) {\n                  return console.log(err);\n                });\n\n              case 4:\n                _context.next = 9;\n                break;\n\n              case 6:\n                _context.prev = 6;\n                _context.t0 = _context[\"catch\"](1);\n                throw new Error(_context.t0);\n\n              case 9:\n                _context.next = 11;\n                return new Promise(function (r) {\n                  return setTimeout(r, 500);\n                });\n\n              case 11:\n                alert(JSON.stringify(values, null, 2));\n\n              case 12:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, null, [[1, 6]]);\n      }));\n\n      return function (_x) {\n        return _ref.apply(this, arguments);\n      };\n    }()\n  }, function (_ref2) {\n    var values = _ref2.values,\n        errors = _ref2.errors,\n        handleSubmit = _ref2.handleSubmit,\n        handleChange = _ref2.handleChange,\n        handleBlur = _ref2.handleBlur;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__[\"Form\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n      htmlFor: \"name\",\n      style: {\n        display: \"block\"\n      }\n    }, \" Name\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__[\"Field\"], {\n      id: \"name\",\n      name: \"name\",\n      placeholder: \"Jane\"\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n      htmlFor: \"email\",\n      style: {\n        display: \"block\"\n      }\n    }, \"Email\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__[\"Field\"], {\n      id: \"email\",\n      name: \"email\",\n      placeholder: \"jane@acme.com\",\n      type: \"email\"\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n      for: \"password\",\n      style: {\n        display: \"block\"\n      }\n    }, \"Password\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n      type: \"password\",\n      name: \"password\",\n      onBlur: handleBlur,\n      onChange: handleChange,\n      value: values.password\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n      style: {\n        color: \"red\"\n      }\n    }, errors.password), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n      for: \"password\",\n      style: {\n        display: \"block\"\n      }\n    }, \"Confirm Password\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n      type: \"password\",\n      name: \"changepassword\",\n      onBlur: handleBlur,\n      onChange: handleChange,\n      value: values.changepassword\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n      style: {\n        color: \"red\"\n      }\n    }, errors.changepassword), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n      type: \"submit\"\n    }, \"Submit\"));\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Basic);\n\n//# sourceURL=webpack:///./src/Component/Form1.js?");

/***/ }),

/***/ "./src/Component/Header.js":
/*!*********************************!*\
  !*** ./src/Component/Header.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Data_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Data/header */ \"./src/Data/header.js\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Avatar */ \"@material-ui/core/Avatar\");\n/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nvar useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"makeStyles\"])(function () {\n  return {\n    header: {\n      backgroundColor: \"green\"\n    },\n    button: {\n      color: \"white\"\n    },\n    logo: {\n      color: \"red\"\n    },\n    avatar: {\n      position: \"fixed\",\n      top: 0,\n      right: 0,\n      scale: 1.2,\n      margin: \"auto\"\n    }\n  };\n});\n\nfunction Header() {\n  var _useStyles = useStyles(),\n      header = _useStyles.header,\n      logo = _useStyles.logo,\n      avatar = _useStyles.avatar;\n\n  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_4__[\"useHistory\"])(); // function LoginOnClicked(){\n  //   let history = useHistory();\n  //   console.log(\"clicked\") \n  //   history.push(\"/login\")\n  // }\n\n  var displayDesktop = function displayDesktop() {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Toolbar\"], null, Mydata, getMenuButtons(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n      onClick: function onClick() {\n        return history.push(\"/login\");\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      alt: \"Profile\",\n      src: \"../static/images/avatar/1.jpeg\",\n      className: avatar\n    })));\n  };\n\n  var Mydata = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Typography\"], {\n    variant: \"h6\",\n    component: \"h1\",\n    className: logo\n  }, \"Scholor Space\");\n\n  var getMenuButtons = function getMenuButtons() {\n    return _Data_header__WEBPACK_IMPORTED_MODULE_1__[\"headersData\"].map(function (_ref) {\n      var label = _ref.label,\n          href = _ref.href;\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n        key: label,\n        color: \"red\",\n        to: href,\n        component: react_router_dom__WEBPACK_IMPORTED_MODULE_4__[\"Link\"],\n        style: {\n          color: \"white\",\n          marginLeft: \"70px\"\n        }\n      }, label);\n    });\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"header\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"AppBar\"], {\n    className: header\n  }, displayDesktop())));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\n\n//# sourceURL=webpack:///./src/Component/Header.js?");

/***/ }),

/***/ "./src/Component/Home.js":
/*!*******************************!*\
  !*** ./src/Component/Home.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header */ \"./src/Component/Header.js\");\n/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Footer */ \"./src/Component/Footer.js\");\n\n\n\n\nfunction Blog() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Blog);\n\n//# sourceURL=webpack:///./src/Component/Home.js?");

/***/ }),

/***/ "./src/Component/Login.js":
/*!********************************!*\
  !*** ./src/Component/Login.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Form1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Form1 */ \"./src/Component/Form1.js\");\n\n\n\nfunction Login() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Form1__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Login);\n\n//# sourceURL=webpack:///./src/Component/Login.js?");

/***/ }),

/***/ "./src/Component/signupReq.js":
/*!************************************!*\
  !*** ./src/Component/signupReq.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\nfunction SignupReq(_ref) {\n  var data = _ref.data,\n      state = _ref.state;\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(state),\n      _React$useState2 = _slicedToArray(_React$useState, 2),\n      req = _React$useState2[0],\n      setReq = _React$useState2[1];\n\n  var responseData;\n  console.log('in signupreq.js');\n  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {\n    var source = axios__WEBPACK_IMPORTED_MODULE_1___default.a.CancelToken.source();\n\n    if (req) {\n      var fetchApi = /*#__PURE__*/function () {\n        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n          return regeneratorRuntime.wrap(function _callee$(_context) {\n            while (1) {\n              switch (_context.prev = _context.next) {\n                case 0:\n                  _context.prev = 0;\n                  _context.next = 3;\n                  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('http://localhost:3006/signup', data).then(function (response) {\n                    responseData = response;\n                    console.log('response', response);\n                  }).catch(function (err) {\n                    return console.log(err);\n                  });\n\n                case 3:\n                  _context.next = 8;\n                  break;\n\n                case 5:\n                  _context.prev = 5;\n                  _context.t0 = _context[\"catch\"](0);\n                  throw new Error(_context.t0);\n\n                case 8:\n                case \"end\":\n                  return _context.stop();\n              }\n            }\n          }, _callee, null, [[0, 5]]);\n        }));\n\n        return function fetchApi() {\n          return _ref2.apply(this, arguments);\n        };\n      }();\n\n      fetchApi();\n    }\n\n    return function () {\n      source.cancel();\n    };\n  }, [req, data]); // return responseData\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SignupReq);\n\n//# sourceURL=webpack:///./src/Component/signupReq.js?");

/***/ }),

/***/ "./src/Data/Footer.js":
/*!****************************!*\
  !*** ./src/Data/Footer.js ***!
  \****************************/
/*! exports provided: arr */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"arr\", function() { return arr; });\nvar arr = [\"SCHOLARS SPACE | 2021\", \"Our Influencers\", \"Media Featured in\", \"Privacy Policy\", \"Terms\", \"User Agreement\", \"Community Guidelines\", \"Disclaimer\", \"FAQs\", \"Team\"];\n\n//# sourceURL=webpack:///./src/Data/Footer.js?");

/***/ }),

/***/ "./src/Data/header.js":
/*!****************************!*\
  !*** ./src/Data/header.js ***!
  \****************************/
/*! exports provided: headersData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"headersData\", function() { return headersData; });\nvar headersData = [{\n  label: \"Home\",\n  href: \"/\"\n}, {\n  label: \"Blog\",\n  href: \"/blog\"\n}, {\n  label: \"About\",\n  href: \"/about\"\n}, {\n  label: \"Contact\",\n  href: \"/contact\"\n}];\n\n//# sourceURL=webpack:///./src/Data/header.js?");

/***/ }),

/***/ "./src/ErrorBoundary/index.js":
/*!************************************!*\
  !*** ./src/ErrorBoundary/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n // class ErrorBoundary extends React.Component {\n//     state = {\n//         error: null,\n//     };\n//     static getDerivedStateFromError(error) {\n//         return { error };\n//     }\n//     render() {\n//         const { error } = this.state;\n//         if (error) {\n//             return (\n//                 <div>\n//                     <p>Seems like an error occured!</p>\n//                     <p>{error.message}</p>\n//                 </div>\n//             );\n//         }\n//         return this.props.children;\n//     }\n// }\n\nvar ErrorBoundary = /*#__PURE__*/function (_React$Component) {\n  _inherits(ErrorBoundary, _React$Component);\n\n  var _super = _createSuper(ErrorBoundary);\n\n  function ErrorBoundary(props) {\n    var _this;\n\n    _classCallCheck(this, ErrorBoundary);\n\n    _this = _super.call(this, props);\n    _this.state = {\n      hasError: false\n    };\n    return _this;\n  }\n\n  _createClass(ErrorBoundary, [{\n    key: \"componentDidCatch\",\n    value: function componentDidCatch(error, errorInfo) {// You can also log the error to an error reporting service\n      //   logErrorToMyService(error, errorInfo);\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var error = this.state.error;\n\n      if (this.state.hasError) {\n        // You can render any custom fallback UI\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"Seems like an error occured!\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, error.message), \"                 \");\n      }\n\n      return this.props.children;\n    }\n  }], [{\n    key: \"getDerivedStateFromError\",\n    value: function getDerivedStateFromError(error) {\n      // Update state so the next render will show the fallback UI.\n      return {\n        hasError: true\n      };\n    }\n  }]);\n\n  return ErrorBoundary;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ErrorBoundary);\n\n//# sourceURL=webpack:///./src/ErrorBoundary/index.js?");

/***/ }),

/***/ 0:
/*!***********************************************!*\
  !*** multi @babel/polyfill ./server/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! @babel/polyfill */\"@babel/polyfill\");\nmodule.exports = __webpack_require__(/*! ./server/index.js */\"./server/index.js\");\n\n\n//# sourceURL=webpack:///multi_@babel/polyfill_./server/index.js?");

/***/ }),

/***/ "@babel/polyfill":
/*!**********************************!*\
  !*** external "@babel/polyfill" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/polyfill\");\n\n//# sourceURL=webpack:///external_%22@babel/polyfill%22?");

/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core%22?");

/***/ }),

/***/ "@material-ui/core/Avatar":
/*!*******************************************!*\
  !*** external "@material-ui/core/Avatar" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Avatar\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Avatar%22?");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/styles\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/styles%22?");

/***/ }),

/***/ "@material-ui/core/useMediaQuery":
/*!**************************************************!*\
  !*** external "@material-ui/core/useMediaQuery" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/useMediaQuery\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/useMediaQuery%22?");

/***/ }),

/***/ "@react-ssr/express/register":
/*!**********************************************!*\
  !*** external "@react-ssr/express/register" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@react-ssr/express/register\");\n\n//# sourceURL=webpack:///external_%22@react-ssr/express/register%22?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"bcryptjs\");\n\n//# sourceURL=webpack:///external_%22bcryptjs%22?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"dotenv\");\n\n//# sourceURL=webpack:///external_%22dotenv%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "express-mongo-sanitize":
/*!*****************************************!*\
  !*** external "express-mongo-sanitize" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-mongo-sanitize\");\n\n//# sourceURL=webpack:///external_%22express-mongo-sanitize%22?");

/***/ }),

/***/ "formik":
/*!*************************!*\
  !*** external "formik" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"formik\");\n\n//# sourceURL=webpack:///external_%22formik%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"jsonwebtoken\");\n\n//# sourceURL=webpack:///external_%22jsonwebtoken%22?");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");\n\n//# sourceURL=webpack:///external_%22mongoose%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom\");\n\n//# sourceURL=webpack:///external_%22react-dom%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "xss-clean":
/*!****************************!*\
  !*** external "xss-clean" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"xss-clean\");\n\n//# sourceURL=webpack:///external_%22xss-clean%22?");

/***/ }),

/***/ "yup":
/*!**********************!*\
  !*** external "yup" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"yup\");\n\n//# sourceURL=webpack:///external_%22yup%22?");

/***/ })

/******/ });