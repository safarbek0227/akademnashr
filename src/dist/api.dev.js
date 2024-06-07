"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var fetchBooks = function fetchBooks(query, maxResults, filter) {
  var response;
  return regeneratorRuntime.async(function fetchBooks$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(_axios["default"].get("https://www.googleapis.com/books/v1/volumes", {
            params: {
              q: query || "+terms1",
              maxResults: maxResults || 10,
              filter: filter || "paid-ebooks",
              API_KEY: process.env.REACT_APP_API_KEY
            }
          }));

        case 3:
          response = _context.sent;
          return _context.abrupt("return", response.data);

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          console.error("Error fetching books:", _context.t0);
          return _context.abrupt("return", []);

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
};

var _default = fetchBooks;
exports["default"] = _default;