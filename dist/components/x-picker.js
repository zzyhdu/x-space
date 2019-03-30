'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _Utils = require('./../Utils/index.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var XPicker = function (_wepy$component) {
  _inherits(XPicker, _wepy$component);

  function XPicker() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, XPicker);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = XPicker.__proto__ || Object.getPrototypeOf(XPicker)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      mode: String,
      title: String
    }, _this.data = {
      array: [],
      index: '1',
      label: 'label'
    }, _this.components = {}, _this.methods = {
      tap: function tap() {
        console.log('Clicked Group xpicker');
      },

      bindPickerChange: function bindPickerChange(e) {
        console.log('picker发送选择改变，携带值为', e.detail.value);
        this.index = e.detail.value;
        _Utils.scoreCalculator.onDataChange({ scoreItem: this.mode, value: e.detail.value });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(XPicker, [{
    key: 'onLoad',
    value: function onLoad() {
      var self = this;
      switch (this.mode) {
        case _Utils.ScoreItems.CITYS:
          self.array = _Utils.datas.citys.array;
          self.label = _Utils.datas.citys.label;
          break;
        case _Utils.ScoreItems.EQUIPMENT_ROOM_TYPES:
          self.array = _Utils.datas.equipmentRoomTypes.array;
          self.label = _Utils.datas.equipmentRoomTypes.label;
          break;
        case _Utils.ScoreItems.PROPERTY_RIGHT_TYPES:
          self.array = _Utils.datas.propertyRightTypes.array;
          self.label = _Utils.datas.propertyRightTypes.label;
          break;
        case _Utils.ScoreItems.ADDRESS_TUNING:
          self.array = _Utils.datas.addressTuning.array;
          self.label = _Utils.datas.addressTuning.label;
          break;
        case _Utils.ScoreItems.CHANNEL_BUILD:
          self.array = _Utils.datas.channelBuild.array;
          self.label = _Utils.datas.channelBuild.label;
          break;
        case _Utils.ScoreItems.BATTER_TYPES:
          self.array = _Utils.datas.batterTypes.array;
          self.label = _Utils.datas.batterTypes.label;
          break;
        case _Utils.ScoreItems.ENVIRONMENT:
          self.array = _Utils.datas.environment.array;
          self.label = _Utils.datas.environment.label;
          break;
        case _Utils.ScoreItems.POWER:
          self.array = _Utils.datas.power.array;
          self.label = _Utils.datas.power.label;
          break;
        case _Utils.ScoreItems.BEARING_TYPES:
          self.array = _Utils.datas.bearingTypes.array;
          self.label = _Utils.datas.bearingTypes.label;
          break;
        case _Utils.ScoreItems.BUILD_TYPES:
          self.array = _Utils.datas.buildTypes.array;
          self.label = _Utils.datas.buildTypes.label;
          break;
        case _Utils.ScoreItems.HOUSE_TYPES:
          self.array = _Utils.datas.houseTypes.array;
          self.label = _Utils.datas.houseTypes.label;
          break;
        default:
      }
      self.index = '0';
      this.$apply();
      // this.array =
    }
  }]);

  return XPicker;
}(_wepy2.default.component);

exports.default = XPicker;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIngtcGlja2VyLmpzIl0sIm5hbWVzIjpbIlhQaWNrZXIiLCJwcm9wcyIsIm1vZGUiLCJTdHJpbmciLCJ0aXRsZSIsImRhdGEiLCJhcnJheSIsImluZGV4IiwibGFiZWwiLCJjb21wb25lbnRzIiwibWV0aG9kcyIsInRhcCIsImNvbnNvbGUiLCJsb2ciLCJiaW5kUGlja2VyQ2hhbmdlIiwiZSIsImRldGFpbCIsInZhbHVlIiwic2NvcmVDYWxjdWxhdG9yIiwib25EYXRhQ2hhbmdlIiwic2NvcmVJdGVtIiwic2VsZiIsIlNjb3JlSXRlbXMiLCJDSVRZUyIsImRhdGFzIiwiY2l0eXMiLCJFUVVJUE1FTlRfUk9PTV9UWVBFUyIsImVxdWlwbWVudFJvb21UeXBlcyIsIlBST1BFUlRZX1JJR0hUX1RZUEVTIiwicHJvcGVydHlSaWdodFR5cGVzIiwiQUREUkVTU19UVU5JTkciLCJhZGRyZXNzVHVuaW5nIiwiQ0hBTk5FTF9CVUlMRCIsImNoYW5uZWxCdWlsZCIsIkJBVFRFUl9UWVBFUyIsImJhdHRlclR5cGVzIiwiRU5WSVJPTk1FTlQiLCJlbnZpcm9ubWVudCIsIlBPV0VSIiwicG93ZXIiLCJCRUFSSU5HX1RZUEVTIiwiYmVhcmluZ1R5cGVzIiwiQlVJTERfVFlQRVMiLCJidWlsZFR5cGVzIiwiSE9VU0VfVFlQRVMiLCJob3VzZVR5cGVzIiwiJGFwcGx5Iiwid2VweSIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7Ozs7Ozs7OztJQUVxQkEsTzs7Ozs7Ozs7Ozs7Ozs7d0xBQ25CQyxLLEdBQVE7QUFDTkMsWUFBTUMsTUFEQTtBQUVOQyxhQUFPRDtBQUZELEssUUFLUkUsSSxHQUFPO0FBQ0xDLGFBQU8sRUFERjtBQUVMQyxhQUFPLEdBRkY7QUFHTEMsYUFBTztBQUhGLEssUUE0RFBDLFUsR0FBYSxFLFFBRWJDLE8sR0FBVTtBQUNSQyxTQURRLGlCQUNEO0FBQ0xDLGdCQUFRQyxHQUFSO0FBQ0QsT0FITzs7QUFJUkMsd0JBQWtC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IngtcGlja2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuICBpbXBvcnQge2RhdGFzLHNjb3JlQ2FsY3VsYXRvcixTY29yZUl0ZW1zfSBmcm9tICcuLi9VdGlscyc7XG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgWFBpY2tlciBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgICBwcm9wcyA9IHtcbiAgICAgIG1vZGU6IFN0cmluZyxcbiAgICAgIHRpdGxlOiBTdHJpbmdcbiAgICB9O1xuXG4gICAgZGF0YSA9IHtcbiAgICAgIGFycmF5OiBbXSxcbiAgICAgIGluZGV4OiAnMScsXG4gICAgICBsYWJlbDogJ2xhYmVsJyxcbiAgICB9XG5cbiAgICBvbkxvYWQgKCkge1xuICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICBzd2l0Y2ggKHRoaXMubW9kZSkge1xuICAgICAgICBjYXNlIFNjb3JlSXRlbXMuQ0lUWVM6XG4gICAgICAgICAgc2VsZi5hcnJheSA9IGRhdGFzLmNpdHlzLmFycmF5O1xuICAgICAgICAgIHNlbGYubGFiZWwgPSBkYXRhcy5jaXR5cy5sYWJlbDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBTY29yZUl0ZW1zLkVRVUlQTUVOVF9ST09NX1RZUEVTOlxuICAgICAgICAgIHNlbGYuYXJyYXkgPSBkYXRhcy5lcXVpcG1lbnRSb29tVHlwZXMuYXJyYXk7XG4gICAgICAgICAgc2VsZi5sYWJlbCA9IGRhdGFzLmVxdWlwbWVudFJvb21UeXBlcy5sYWJlbDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBTY29yZUl0ZW1zLlBST1BFUlRZX1JJR0hUX1RZUEVTOlxuICAgICAgICAgIHNlbGYuYXJyYXkgPSBkYXRhcy5wcm9wZXJ0eVJpZ2h0VHlwZXMuYXJyYXk7XG4gICAgICAgICAgc2VsZi5sYWJlbCA9IGRhdGFzLnByb3BlcnR5UmlnaHRUeXBlcy5sYWJlbDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBTY29yZUl0ZW1zLkFERFJFU1NfVFVOSU5HOlxuICAgICAgICAgIHNlbGYuYXJyYXkgPSBkYXRhcy5hZGRyZXNzVHVuaW5nLmFycmF5O1xuICAgICAgICAgIHNlbGYubGFiZWwgPSBkYXRhcy5hZGRyZXNzVHVuaW5nLmxhYmVsO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFNjb3JlSXRlbXMuQ0hBTk5FTF9CVUlMRDpcbiAgICAgICAgICBzZWxmLmFycmF5ID0gZGF0YXMuY2hhbm5lbEJ1aWxkLmFycmF5O1xuICAgICAgICAgIHNlbGYubGFiZWwgPSBkYXRhcy5jaGFubmVsQnVpbGQubGFiZWw7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgU2NvcmVJdGVtcy5CQVRURVJfVFlQRVM6XG4gICAgICAgICAgc2VsZi5hcnJheSA9IGRhdGFzLmJhdHRlclR5cGVzLmFycmF5O1xuICAgICAgICAgIHNlbGYubGFiZWwgPSBkYXRhcy5iYXR0ZXJUeXBlcy5sYWJlbDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBTY29yZUl0ZW1zLkVOVklST05NRU5UOlxuICAgICAgICAgIHNlbGYuYXJyYXkgPSBkYXRhcy5lbnZpcm9ubWVudC5hcnJheTtcbiAgICAgICAgICBzZWxmLmxhYmVsID0gZGF0YXMuZW52aXJvbm1lbnQubGFiZWw7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgU2NvcmVJdGVtcy5QT1dFUjpcbiAgICAgICAgICBzZWxmLmFycmF5ID0gZGF0YXMucG93ZXIuYXJyYXk7XG4gICAgICAgICAgc2VsZi5sYWJlbCA9IGRhdGFzLnBvd2VyLmxhYmVsO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFNjb3JlSXRlbXMuQkVBUklOR19UWVBFUzpcbiAgICAgICAgICBzZWxmLmFycmF5ID0gZGF0YXMuYmVhcmluZ1R5cGVzLmFycmF5O1xuICAgICAgICAgIHNlbGYubGFiZWwgPSBkYXRhcy5iZWFyaW5nVHlwZXMubGFiZWw7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgU2NvcmVJdGVtcy5CVUlMRF9UWVBFUzpcbiAgICAgICAgICBzZWxmLmFycmF5ID0gZGF0YXMuYnVpbGRUeXBlcy5hcnJheTtcbiAgICAgICAgICBzZWxmLmxhYmVsID0gZGF0YXMuYnVpbGRUeXBlcy5sYWJlbDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBTY29yZUl0ZW1zLkhPVVNFX1RZUEVTOlxuICAgICAgICAgIHNlbGYuYXJyYXkgPSBkYXRhcy5ob3VzZVR5cGVzLmFycmF5O1xuICAgICAgICAgIHNlbGYubGFiZWwgPSBkYXRhcy5ob3VzZVR5cGVzLmxhYmVsO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgfVxuICAgICAgc2VsZi5pbmRleCA9ICcwJztcbiAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAvLyB0aGlzLmFycmF5ID1cbiAgICB9XG5cbiAgICBjb21wb25lbnRzID0ge1xuICAgIH1cbiAgICBtZXRob2RzID0ge1xuICAgICAgdGFwICgpIHtcbiAgICAgICAgY29uc29sZS5sb2coYENsaWNrZWQgR3JvdXAgeHBpY2tlcmApXG4gICAgICB9LFxuICAgICAgYmluZFBpY2tlckNoYW5nZTogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3BpY2tlcuWPkemAgemAieaLqeaUueWPmO+8jOaQuuW4puWAvOS4uicsIGUuZGV0YWlsLnZhbHVlIClcbiAgICAgICAgdGhpcy5pbmRleCA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICBzY29yZUNhbGN1bGF0b3Iub25EYXRhQ2hhbmdlKHtzY29yZUl0ZW06IHRoaXMubW9kZSx2YWx1ZTogZS5kZXRhaWwudmFsdWV9KTtcbiAgICAgIH0sXG4gICAgfVxuXG5cbiAgfVxuIl19