"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Month;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Tile = _interopRequireDefault(require("../Tile"));

var _dates = require("../shared/dates");

var _dateFormatter = require("../shared/dateFormatter");

var _propTypes2 = require("../shared/propTypes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var className = 'react-calendar__year-view__months__month';

function Month(_ref) {
  var classes = _ref.classes,
      date = _ref.date,
      formatMonth = _ref.formatMonth,
      locale = _ref.locale,
      otherProps = _objectWithoutProperties(_ref, ["classes", "date", "formatMonth", "locale"]);

  return _react.default.createElement(_Tile.default, _extends({}, otherProps, {
    classes: [].concat(classes, className),
    date: date,
    formatAbbr: _dateFormatter.formatMonthYear,
    locale: locale,
    maxDateTransform: _dates.getEndOfMonth,
    minDateTransform: _dates.getBeginOfMonth,
    view: "year"
  }), formatMonth(locale, date));
}

Month.defaultProps = {
  formatMonth: _dateFormatter.formatMonth
};
Month.propTypes = _objectSpread({}, _propTypes2.tileProps, {
  formatMonth: _propTypes.default.func
});