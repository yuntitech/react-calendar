"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _Year = _interopRequireDefault(require("../Year"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* eslint-disable comma-dangle, jsx-a11y/mouse-events-have-key-events */
var tileProps = {
  activeStartDate: new Date(2018, 0, 1),
  classes: ['react-calendar__tile'],
  date: new Date(2018, 0, 1),
  point: 2018
};
describe('Year', function () {
  it('applies given classNames properly', function () {
    var component = (0, _enzyme.mount)(_react.default.createElement(_Year.default, _extends({}, tileProps, {
      classes: ['react-calendar__tile', 'react-calendar__tile--flag'],
      tileClassName: function tileClassName() {
        return 'testFunctionClassName';
      }
    })));
    var wrapperClassName = component.find('.react-calendar__tile').prop('className');
    expect(wrapperClassName.includes('react-calendar__tile')).toBe(true);
    expect(wrapperClassName.includes('react-calendar__tile--flag')).toBe(true);
    expect(wrapperClassName.includes('react-calendar__decade-view__years__year')).toBe(true);
    expect(wrapperClassName.includes('testFunctionClassName')).toBe(true);
  });
  it('renders component without abbreviation', function () {
    var component = (0, _enzyme.mount)(_react.default.createElement(_Year.default, _extends({}, tileProps, {
      date: new Date(2018, 0, 1),
      year: 2018
    })));
    var abbr = component.find('abbr');
    expect(abbr).toHaveLength(0);
    expect(component.text()).toBe('2018');
  });
  it('is disabled when date is before beginning of minDate\'s year', function () {
    var component = (0, _enzyme.mount)(_react.default.createElement(_Year.default, _extends({}, tileProps, {
      date: new Date(2018, 0, 1),
      minDate: new Date(2019, 0, 1)
    })));
    expect(component.find('.react-calendar__tile').prop('disabled')).toBeTruthy();
  });
  it('is not disabled when date is after beginning of minDate\'s year', function () {
    var component = (0, _enzyme.mount)(_react.default.createElement(_Year.default, _extends({}, tileProps, {
      date: new Date(2018, 0, 1),
      minDate: new Date(2018, 0, 1)
    })));
    expect(component.find('.react-calendar__tile').prop('disabled')).toBeFalsy();
  });
  it('is disabled when date is after end of maxDate\'s year', function () {
    var component = (0, _enzyme.mount)(_react.default.createElement(_Year.default, _extends({}, tileProps, {
      date: new Date(2018, 0, 1),
      maxDate: new Date(2017, 0, 1)
    })));
    expect(component.find('.react-calendar__tile').prop('disabled')).toBeTruthy();
  });
  it('is not disabled when date is before end of maxDate\'s year', function () {
    var component = (0, _enzyme.mount)(_react.default.createElement(_Year.default, _extends({}, tileProps, {
      date: new Date(2018, 0, 1),
      maxDate: new Date(2018, 0, 1)
    })));
    expect(component.find('.react-calendar__tile').prop('disabled')).toBeFalsy();
  });
  it('calls onClick callback when clicked and sends proper date as an argument', function () {
    var date = new Date(2018, 0, 1);
    var onClick = jest.fn();
    var component = (0, _enzyme.mount)(_react.default.createElement(_Year.default, _extends({}, tileProps, {
      date: date,
      onClick: onClick
    })));
    component.find('.react-calendar__tile').simulate('click');
    expect(onClick).toHaveBeenCalled();
    expect(onClick).toHaveBeenCalledWith(date);
  });
  it('calls onMouseOver callback when hovered and sends proper date as an argument', function () {
    var date = new Date(2018, 0, 1);
    var onMouseOver = jest.fn();
    var component = (0, _enzyme.mount)(_react.default.createElement(_Year.default, _extends({}, tileProps, {
      date: date,
      onMouseOver: onMouseOver
    })));
    component.find('.react-calendar__tile').simulate('mouseOver');
    expect(onMouseOver).toHaveBeenCalled();
    expect(onMouseOver).toHaveBeenCalledWith(date);
  });
  it('calls onMouseOver callback when focused and sends proper date as an argument', function () {
    var date = new Date(2018, 0, 1);
    var onMouseOver = jest.fn();
    var component = (0, _enzyme.mount)(_react.default.createElement(_Year.default, _extends({}, tileProps, {
      date: date,
      onMouseOver: onMouseOver
    })));
    component.find('.react-calendar__tile').simulate('focus');
    expect(onMouseOver).toHaveBeenCalled();
    expect(onMouseOver).toHaveBeenCalledWith(date);
  });
  it('renders tileContent properly', function () {
    var component = (0, _enzyme.mount)(_react.default.createElement(_Year.default, _extends({}, tileProps, {
      tileContent: _react.default.createElement("div", {
        className: "testContent"
      })
    })));
    var testContent = component.find('.testContent');
    expect(testContent).toHaveLength(1);
  });
  it('renders tileContent function result properly and sends proper arguments to it', function () {
    var date = new Date(2018, 0, 1);
    var tileContent = jest.fn();
    tileContent.mockReturnValue(_react.default.createElement("div", {
      className: "testContent"
    }));
    var component = (0, _enzyme.mount)(_react.default.createElement(_Year.default, _extends({}, tileProps, {
      date: date,
      tileContent: tileContent
    })));
    var testContent = component.find('.testContent');
    expect(tileContent).toHaveBeenCalled();
    expect(tileContent).toHaveBeenCalledWith({
      date: date,
      view: 'decade'
    });
    expect(testContent).toHaveLength(1);
  });
});