"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _morgan = _interopRequireDefault(require("morgan"));

var _express = _interopRequireDefault(require("express"));

var _cookieParser = _interopRequireDefault(require("cookie-parser"));

var _index = _interopRequireDefault(require("./routes/index.js"));

var app = (0, _express["default"])();
var port = process.env.PORT || '5000';
app.listen(port);
app.use((0, _morgan["default"])('dev'));
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: true
}));
app.use((0, _cookieParser["default"])());
app.use('/v1', _index["default"]);
var _default = app;
exports["default"] = _default;
"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.indexPage = void 0;

var _settings = require("../settings");

var indexPage = function indexPage(req, res) {
  return res.status(200).json({
    message: _settings.testEnvironmentVariable
  });
};

exports.indexPage = indexPage;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _home = require("./home");

Object.keys(_home).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _home[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _home[key];
    }
  });
});
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _pool = require("./pool");

var Model = /*#__PURE__*/function () {
  function Model(table) {
    (0, _classCallCheck2["default"])(this, Model);
    this.pool = _pool.pool;
    this.table = table;
    this.pool.on('error', function (err, client) {
      return "Error, ".concat(err, ", on idle client").concat(client);
    });
  }

  (0, _createClass2["default"])(Model, [{
    key: "select",
    value: function () {
      var _select = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(columns, clause) {
        var query;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                query = "SELECT ".concat(columns, " FROM ").concat(this.table);
                if (clause) query += clause;
                return _context.abrupt("return", this.pool.query(query));

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function select(_x, _x2) {
        return _select.apply(this, arguments);
      }

      return select;
    }()
  }]);
  return Model;
}();

var _default = Model;
exports["default"] = _default;
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pool = void 0;

var _pg = require("pg");

var _dotenv = _interopRequireDefault(require("dotenv"));

var _settings = require("../settings");

_dotenv["default"].config();

var pool = new _pg.Pool({
  connectionString: _settings.connectionString
});
exports.pool = pool;
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _controllers = require("../controllers");

var indexRouter = _express["default"].Router();

indexRouter.get('/', _controllers.indexPage);
var _default = indexRouter;
exports["default"] = _default;
"use strict";

var express = require('express');

var router = express.Router();
/* GET users listing. */

router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});
module.exports = router;
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.testEnvironmentVariable = exports.connectionString = void 0;

var _dotenv = _interopRequireDefault(require("dotenv"));

_dotenv["default"].config();

var testEnvironmentVariable = process.env.TEST_ENV_VARIABLE;
exports.testEnvironmentVariable = testEnvironmentVariable;
var connectionString = process.env.CONNECTION_STRING;
exports.connectionString = connectionString;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.insertMessages = exports.dropMessagesTable = exports.createMessageTable = void 0;
var createMessageTable = "\nDROP TABLE IF EXISTS messages;\nCREATE TABLE IF NOT EXISTS messages (\n  id SERIAL PRIMARY KEY,\n  name VARCHAR DEFAULT '',\n  message VARCHAR NOT NULL\n  )\n  ";
exports.createMessageTable = createMessageTable;
var insertMessages = "\nINSERT INTO messages(name, message)\nVALUES ('chidimo', 'first message'),\n      ('orji', 'second message')\n";
exports.insertMessages = insertMessages;
var dropMessagesTable = 'DROP TABLE messages';
exports.dropMessagesTable = dropMessagesTable;
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.insertIntoTables = exports.executeQueryArray = exports.dropTables = exports.createTables = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _pool = require("../models/pool");

var _queries = require("./queries");

var executeQueryArray = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(arr) {
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt("return", new Promise(function (resolve) {
              var stop = arr.length;
              arr.forEach( /*#__PURE__*/function () {
                var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(q, index) {
                  return _regenerator["default"].wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          _context.next = 2;
                          return _pool.pool.query(q);

                        case 2:
                          if (index + 1 === stop) resolve();

                        case 3:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee);
                }));

                return function (_x2, _x3) {
                  return _ref2.apply(this, arguments);
                };
              }());
            }));

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function executeQueryArray(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.executeQueryArray = executeQueryArray;

var dropTables = function dropTables() {
  return executeQueryArray([_queries.dropMessagesTable]);
};

exports.dropTables = dropTables;

var createTables = function createTables() {
  return executeQueryArray([_queries.createMessageTable]);
};

exports.createTables = createTables;

var insertIntoTables = function insertIntoTables() {
  return executeQueryArray([_queries.insertMessages]);
};

exports.insertIntoTables = insertIntoTables;
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _queryFunctions = require("./queryFunctions");

(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
  return _regenerator["default"].wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0, _queryFunctions.createTables)();

        case 2:
          _context.next = 4;
          return (0, _queryFunctions.insertIntoTables)();

        case 4:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}))();
