"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Years;

var _react = _interopRequireDefault(require("react"));

var _TileGroup = _interopRequireDefault(require("../TileGroup"));

var _Year = _interopRequireDefault(require("./Year"));

var _dates = require("../shared/dates");

var _propTypes = require("../shared/propTypes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function Years(props) {
  var activeStartDate = props.activeStartDate;
  var start = (0, _dates.getBeginOfDecadeYear)(activeStartDate);
  var end = start + 9;
  return _react.default.createElement(_TileGroup.default, _extends({}, props, {
    className: "react-calendar__decade-view__years",
    dateTransform: function dateTransform(year) {
      return new Date(year, 0, 1);
    },
    dateType: "year",
    end: end,
    start: start,
    tile: _Year.default
  }));
}

Years.propTypes = _objectSpread({}, _propTypes.tileGroupProps);