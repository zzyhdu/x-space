'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _groupitem = require('./groupitem.js');

var _groupitem2 = _interopRequireDefault(_groupitem);

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
    }, _this.components = {
      groupitem: _groupitem2.default
    }, _this.methods = {
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
      console.log('zzy', 'onLoad', this.mode);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIngtcGlja2VyLmpzIl0sIm5hbWVzIjpbIlhQaWNrZXIiLCJwcm9wcyIsIm1vZGUiLCJTdHJpbmciLCJ0aXRsZSIsImRhdGEiLCJhcnJheSIsImluZGV4IiwibGFiZWwiLCJjb21wb25lbnRzIiwiZ3JvdXBpdGVtIiwiR3JvdXBJdGVtIiwibWV0aG9kcyIsInRhcCIsImNvbnNvbGUiLCJsb2ciLCJiaW5kUGlja2VyQ2hhbmdlIiwiZSIsImRldGFpbCIsInZhbHVlIiwic2NvcmVDYWxjdWxhdG9yIiwib25EYXRhQ2hhbmdlIiwic2NvcmVJdGVtIiwic2VsZiIsIlNjb3JlSXRlbXMiLCJDSVRZUyIsImRhdGFzIiwiY2l0eXMiLCJFUVVJUE1FTlRfUk9PTV9UWVBFUyIsImVxdWlwbWVudFJvb21UeXBlcyIsIlBST1BFUlRZX1JJR0hUX1RZUEVTIiwicHJvcGVydHlSaWdodFR5cGVzIiwiQUREUkVTU19UVU5JTkciLCJhZGRyZXNzVHVuaW5nIiwiQ0hBTk5FTF9CVUlMRCIsImNoYW5uZWxCdWlsZCIsIkJBVFRFUl9UWVBFUyIsImJhdHRlclR5cGVzIiwiRU5WSVJPTk1FTlQiLCJlbnZpcm9ubWVudCIsIlBPV0VSIiwicG93ZXIiLCJCRUFSSU5HX1RZUEVTIiwiYmVhcmluZ1R5cGVzIiwiQlVJTERfVFlQRVMiLCJidWlsZFR5cGVzIiwiSE9VU0VfVFlQRVMiLCJob3VzZVR5cGVzIiwiJGFwcGx5Iiwid2VweSIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7O0lBRXFCQSxPOzs7Ozs7Ozs7Ozs7Ozt3TEFDbkJDLEssR0FBUTtBQUNOQyxZQUFNQyxNQURBO0FBRU5DLGFBQU9EO0FBRkQsSyxRQUtSRSxJLEdBQU87QUFDTEMsYUFBTyxFQURGO0FBRUxDLGFBQU8sR0FGRjtBQUdMQyxhQUFPO0FBSEYsSyxRQTZEUEMsVSxHQUFhO0FBQ1hDLGlCQUFXQztBQURBLEssUUFHYkMsTyxHQUFVO0FBQ1JDLFNB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QWFrQixhQUFNcUIsVUFBTixDQUFpQnZDLEtBQTlCO0FBQ0E7QUFDRjtBQTdDRjtBQStDQWUsV0FBS2hCLEtBQUwsR0FBYSxHQUFiO0FBQ0EsV0FBS3lDLE1BQUw7QUFDQTtBQUNEOzs7O0VBakVrQ0MsZUFBS0MsUzs7a0JBQXJCbEQsTyIsImZpbGUiOiJ4LXBpY2tlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcbiAgaW1wb3J0IEdyb3VwSXRlbSBmcm9tICcuL2dyb3VwaXRlbSc7XG4gIGltcG9ydCB7ZGF0YXMsc2NvcmVDYWxjdWxhdG9yLFNjb3JlSXRlbXN9IGZyb20gJy4uL1V0aWxzJztcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBYUGlja2VyIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICAgIHByb3BzID0ge1xuICAgICAgbW9kZTogU3RyaW5nLFxuICAgICAgdGl0bGU6IFN0cmluZ1xuICAgIH07XG5cbiAgICBkYXRhID0ge1xuICAgICAgYXJyYXk6IFtdLFxuICAgICAgaW5kZXg6ICcxJyxcbiAgICAgIGxhYmVsOiAnbGFiZWwnLFxuICAgIH1cblxuICAgIG9uTG9hZCAoKSB7XG4gICAgICBjb25zb2xlLmxvZygnenp5Jywnb25Mb2FkJyx0aGlzLm1vZGUpO1xuICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICBzd2l0Y2ggKHRoaXMubW9kZSkge1xuICAgICAgICBjYXNlIFNjb3JlSXRlbXMuQ0lUWVM6XG4gICAgICAgICAgc2VsZi5hcnJheSA9IGRhdGFzLmNpdHlzLmFycmF5O1xuICAgICAgICAgIHNlbGYubGFiZWwgPSBkYXRhcy5jaXR5cy5sYWJlbDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBTY29yZUl0ZW1zLkVRVUlQTUVOVF9ST09NX1RZUEVTOlxuICAgICAgICAgIHNlbGYuYXJyYXkgPSBkYXRhcy5lcXVpcG1lbnRSb29tVHlwZXMuYXJyYXk7XG4gICAgICAgICAgc2VsZi5sYWJlbCA9IGRhdGFzLmVxdWlwbWVudFJvb21UeXBlcy5sYWJlbDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBTY29yZUl0ZW1zLlBST1BFUlRZX1JJR0hUX1RZUEVTOlxuICAgICAgICAgIHNlbGYuYXJyYXkgPSBkYXRhcy5wcm9wZXJ0eVJpZ2h0VHlwZXMuYXJyYXk7XG4gICAgICAgICAgc2VsZi5sYWJlbCA9IGRhdGFzLnByb3BlcnR5UmlnaHRUeXBlcy5sYWJlbDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBTY29yZUl0ZW1zLkFERFJFU1NfVFVOSU5HOlxuICAgICAgICAgIHNlbGYuYXJyYXkgPSBkYXRhcy5hZGRyZXNzVHVuaW5nLmFycmF5O1xuICAgICAgICAgIHNlbGYubGFiZWwgPSBkYXRhcy5hZGRyZXNzVHVuaW5nLmxhYmVsO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFNjb3JlSXRlbXMuQ0hBTk5FTF9CVUlMRDpcbiAgICAgICAgICBzZWxmLmFycmF5ID0gZGF0YXMuY2hhbm5lbEJ1aWxkLmFycmF5O1xuICAgICAgICAgIHNlbGYubGFiZWwgPSBkYXRhcy5jaGFubmVsQnVpbGQubGFiZWw7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgU2NvcmVJdGVtcy5CQVRURVJfVFlQRVM6XG4gICAgICAgICAgc2VsZi5hcnJheSA9IGRhdGFzLmJhdHRlclR5cGVzLmFycmF5O1xuICAgICAgICAgIHNlbGYubGFiZWwgPSBkYXRhcy5iYXR0ZXJUeXBlcy5sYWJlbDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBTY29yZUl0ZW1zLkVOVklST05NRU5UOlxuICAgICAgICAgIHNlbGYuYXJyYXkgPSBkYXRhcy5lbnZpcm9ubWVudC5hcnJheTtcbiAgICAgICAgICBzZWxmLmxhYmVsID0gZGF0YXMuZW52aXJvbm1lbnQubGFiZWw7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgU2NvcmVJdGVtcy5QT1dFUjpcbiAgICAgICAgICBzZWxmLmFycmF5ID0gZGF0YXMucG93ZXIuYXJyYXk7XG4gICAgICAgICAgc2VsZi5sYWJlbCA9IGRhdGFzLnBvd2VyLmxhYmVsO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFNjb3JlSXRlbXMuQkVBUklOR19UWVBFUzpcbiAgICAgICAgICBzZWxmLmFycmF5ID0gZGF0YXMuYmVhcmluZ1R5cGVzLmFycmF5O1xuICAgICAgICAgIHNlbGYubGFiZWwgPSBkYXRhcy5iZWFyaW5nVHlwZXMubGFiZWw7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgU2NvcmVJdGVtcy5CVUlMRF9UWVBFUzpcbiAgICAgICAgICBzZWxmLmFycmF5ID0gZGF0YXMuYnVpbGRUeXBlcy5hcnJheTtcbiAgICAgICAgICBzZWxmLmxhYmVsID0gZGF0YXMuYnVpbGRUeXBlcy5sYWJlbDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBTY29yZUl0ZW1zLkhPVVNFX1RZUEVTOlxuICAgICAgICAgIHNlbGYuYXJyYXkgPSBkYXRhcy5ob3VzZVR5cGVzLmFycmF5O1xuICAgICAgICAgIHNlbGYubGFiZWwgPSBkYXRhcy5ob3VzZVR5cGVzLmxhYmVsO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgfVxuICAgICAgc2VsZi5pbmRleCA9ICcwJztcbiAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAvLyB0aGlzLmFycmF5ID1cbiAgICB9XG5cbiAgICBjb21wb25lbnRzID0ge1xuICAgICAgZ3JvdXBpdGVtOiBHcm91cEl0ZW1cbiAgICB9XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHRhcCAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBDbGlja2VkIEdyb3VwIHhwaWNrZXJgKVxuICAgICAgfSxcbiAgICAgIGJpbmRQaWNrZXJDaGFuZ2U6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdwaWNrZXLlj5HpgIHpgInmi6nmlLnlj5jvvIzmkLrluKblgLzkuLonLCBlLmRldGFpbC52YWx1ZSApXG4gICAgICAgIHRoaXMuaW5kZXggPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgICAgc2NvcmVDYWxjdWxhdG9yLm9uRGF0YUNoYW5nZSh7c2NvcmVJdGVtOiB0aGlzLm1vZGUsdmFsdWU6IGUuZGV0YWlsLnZhbHVlfSk7XG4gICAgICB9LFxuICAgIH1cblxuXG4gIH1cbiJdfQ==