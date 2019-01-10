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

var XInput = function (_wepy$component) {
  _inherits(XInput, _wepy$component);

  function XInput() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, XInput);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = XInput.__proto__ || Object.getPrototypeOf(XInput)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      mode: String,
      title: String
    }, _this.data = {
      label: 'label',
      value: 'value'
    }, _this.components = {
      groupitem: _groupitem2.default
    }, _this.methods = {
      tap: function tap() {
        console.log('Clicked Group xpicker');
      },

      bindPickerChange: function bindPickerChange(e) {
        console.log('picker发送选择改变，携带值为', e.detail.value);
        this.index = e.detail.value;
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(XInput, [{
    key: 'onLoad',
    value: function onLoad() {
      console.log('zzy', 'onLoad', this.mode);
      var self = this;
      switch (this.mode) {
        case _Utils.ScoreItems.CITYS:
          self.label = _Utils.datas.citys.label;
          self.value = _Utils.datas.citys.label;
          break;
        case _Utils.ScoreItems.EQUIPMENT_ROOM_TYPES:
          self.label = _Utils.datas.equipmentRoomTypes.label;
          self.value = _Utils.datas.equipmentRoomTypes.label;
          break;
        case _Utils.ScoreItems.PROPERTY_RIGHT_TYPES:
          self.label = _Utils.datas.propertyRightTypes.label;
          self.value = _Utils.datas.propertyRightTypes.label;
          break;
        case _Utils.ScoreItems.ADDRESS_TUNING:
          self.label = _Utils.datas.addressTuning.label;
          self.value = _Utils.datas.addressTuning.label;
          break;
        case _Utils.ScoreItems.CHANNEL_BUILD:
          self.label = _Utils.datas.channelBuild.label;
          self.value = _Utils.datas.channelBuild.label;
          break;
        case _Utils.ScoreItems.BATTER_TYPES:
          self.label = _Utils.datas.batterTypes.label;
          self.value = _Utils.datas.batterTypes.label;
          break;
        case _Utils.ScoreItems.ENVIRONMENT:
          self.label = _Utils.datas.environment.label;
          self.value = _Utils.datas.environment.label;
          break;
        case _Utils.ScoreItems.POWER:
          self.label = _Utils.datas.power.label;
          self.value = _Utils.datas.power.label;
          break;
        case _Utils.ScoreItems.BEARING_TYPES:
          self.label = _Utils.datas.bearingTypes.label;
          self.value = _Utils.datas.bearingTypes.label;
          break;
        case _Utils.ScoreItems.BUILD_TYPES:
          self.label = _Utils.datas.buildTypes.label;
          self.value = _Utils.datas.buildTypes.label;
          break;
        case _Utils.ScoreItems.HOUSE_TYPES:
          self.label = _Utils.datas.houseTypes.label;
          self.value = _Utils.datas.houseTypes.label;
          break;
        default:
      }
      self.index = '0';
      this.$apply();
      // this.array =
    }
  }]);

  return XInput;
}(_wepy2.default.component);

exports.default = XInput;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIngtaW5wdXQuanMiXSwibmFtZXMiOlsiWElucHV0IiwicHJvcHMiLCJtb2RlIiwiU3RyaW5nIiwidGl0bGUiLCJkYXRhIiwibGFiZWwiLCJ2YWx1ZSIsImNvbXBvbmVudHMiLCJncm91cGl0ZW0iLCJHcm91cEl0ZW0iLCJtZXRob2RzIiwidGFwIiwiY29uc29sZSIsImxvZyIsImJpbmRQaWNrZXJDaGFuZ2UiLCJlIiwiZGV0YWlsIiwiaW5kZXgiLCJzZWxmIiwiU2NvcmVJdGVtcyIsIkNJVFlTIiwiZGF0YXMiLCJjaXR5cyIsIkVRVUlQTUVOVF9ST09NX1RZUEVTIiwiZXF1aXBtZW50Um9vbVR5cGVzIiwiUFJPUEVSVFlfUklHSFRfVFlQRVMiLCJwcm9wZXJ0eVJpZ2h0VHlwZXMiLCJBRERSRVNTX1RVTklORyIsImFkZHJlc3NUdW5pbmciLCJDSEFOTkVMX0JVSUxEIiwiY2hhbm5lbEJ1aWxkIiwiQkFUVEVSX1RZUEVTIiwiYmF0dGVyVHlwZXMiLCJFTlZJUk9OTUVOVCIsImVudmlyb25tZW50IiwiUE9XRVIiLCJwb3dlciIsIkJFQVJJTkdfVFlQRVMiLCJiZWFyaW5nVHlwZXMiLCJCVUlMRF9UWVBFUyIsImJ1aWxkVHlwZXMiLCJIT1VTRV9UWVBFUyIsImhvdXNlVHlwZXMiLCIkYXBwbHkiLCJ3ZXB5IiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7SUFFcUJBLE07Ozs7Ozs7Ozs7Ozs7O3NMQUNuQkMsSyxHQUFRO0FBQ05DLFlBQU1DLE1BREE7QUFFTkMsYUFBT0Q7QUFGRCxLLFFBS1JFLEksR0FBTztBQUNMQyxhQUFPLE9BREY7QUFFTEMsYUFBTztBQUZGLEssUUE0RFBDLFUsR0FBYTtBQUNYQyxpQkFBV0M7QUFEQSxLLFFBR2JDLE8sR0FBVTtBQUNSQyxTQURRLGlCQUNEO0FBQ0xDLGdCQUFRQyxHQUFSO0FBQ0QsT0FITzs7QUFJUkMsd0JBQWtCLDBCQUFVQyxDQUFWLEVBQWE7QUFD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cG9ydCBHcm91cEl0ZW0gZnJvbSAnLi9ncm91cGl0ZW0nO1xuICBpbXBvcnQge2RhdGFzLHNjb3JlQ2FsY3VsYXRvcixTY29yZUl0ZW1zfSBmcm9tICcuLi9VdGlscyc7XG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgWElucHV0IGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICAgIHByb3BzID0ge1xuICAgICAgbW9kZTogU3RyaW5nLFxuICAgICAgdGl0bGU6IFN0cmluZ1xuICAgIH07XG5cbiAgICBkYXRhID0ge1xuICAgICAgbGFiZWw6ICdsYWJlbCcsXG4gICAgICB2YWx1ZTogJ3ZhbHVlJyxcbiAgICB9XG5cbiAgICBvbkxvYWQgKCkge1xuICAgICAgY29uc29sZS5sb2coJ3p6eScsJ29uTG9hZCcsdGhpcy5tb2RlKTtcbiAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgc3dpdGNoICh0aGlzLm1vZGUpIHtcbiAgICAgICAgY2FzZSBTY29yZUl0ZW1zLkNJVFlTOlxuICAgICAgICAgIHNlbGYubGFiZWwgPSBkYXRhcy5jaXR5cy5sYWJlbDtcbiAgICAgICAgICBzZWxmLnZhbHVlID0gZGF0YXMuY2l0eXMubGFiZWw7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgU2NvcmVJdGVtcy5FUVVJUE1FTlRfUk9PTV9UWVBFUzpcbiAgICAgICAgICBzZWxmLmxhYmVsID0gZGF0YXMuZXF1aXBtZW50Um9vbVR5cGVzLmxhYmVsO1xuICAgICAgICAgIHNlbGYudmFsdWUgPSBkYXRhcy5lcXVpcG1lbnRSb29tVHlwZXMubGFiZWw7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgU2NvcmVJdGVtcy5QUk9QRVJUWV9SSUdIVF9UWVBFUzpcbiAgICAgICAgICBzZWxmLmxhYmVsID0gZGF0YXMucHJvcGVydHlSaWdodFR5cGVzLmxhYmVsO1xuICAgICAgICAgIHNlbGYudmFsdWUgPSBkYXRhcy5wcm9wZXJ0eVJpZ2h0VHlwZXMubGFiZWw7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgU2NvcmVJdGVtcy5BRERSRVNTX1RVTklORzpcbiAgICAgICAgICBzZWxmLmxhYmVsID0gZGF0YXMuYWRkcmVzc1R1bmluZy5sYWJlbDtcbiAgICAgICAgICBzZWxmLnZhbHVlID0gZGF0YXMuYWRkcmVzc1R1bmluZy5sYWJlbDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBTY29yZUl0ZW1zLkNIQU5ORUxfQlVJTEQ6XG4gICAgICAgICAgc2VsZi5sYWJlbCA9IGRhdGFzLmNoYW5uZWxCdWlsZC5sYWJlbDtcbiAgICAgICAgICBzZWxmLnZhbHVlID0gZGF0YXMuY2hhbm5lbEJ1aWxkLmxhYmVsO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFNjb3JlSXRlbXMuQkFUVEVSX1RZUEVTOlxuICAgICAgICAgIHNlbGYubGFiZWwgPSBkYXRhcy5iYXR0ZXJUeXBlcy5sYWJlbDtcbiAgICAgICAgICBzZWxmLnZhbHVlID0gZGF0YXMuYmF0dGVyVHlwZXMubGFiZWw7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgU2NvcmVJdGVtcy5FTlZJUk9OTUVOVDpcbiAgICAgICAgICBzZWxmLmxhYmVsID0gZGF0YXMuZW52aXJvbm1lbnQubGFiZWw7XG4gICAgICAgICAgc2VsZi52YWx1ZSA9IGRhdGFzLmVudmlyb25tZW50LmxhYmVsO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFNjb3JlSXRlbXMuUE9XRVI6XG4gICAgICAgICAgc2VsZi5sYWJlbCA9IGRhdGFzLnBvd2VyLmxhYmVsO1xuICAgICAgICAgIHNlbGYudmFsdWUgPSBkYXRhcy5wb3dlci5sYWJlbDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBTY29yZUl0ZW1zLkJFQVJJTkdfVFlQRVM6XG4gICAgICAgICAgc2VsZi5sYWJlbCA9IGRhdGFzLmJlYXJpbmdUeXBlcy5sYWJlbDtcbiAgICAgICAgICBzZWxmLnZhbHVlID0gZGF0YXMuYmVhcmluZ1R5cGVzLmxhYmVsO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFNjb3JlSXRlbXMuQlVJTERfVFlQRVM6XG4gICAgICAgICAgc2VsZi5sYWJlbCA9IGRhdGFzLmJ1aWxkVHlwZXMubGFiZWw7XG4gICAgICAgICAgc2VsZi52YWx1ZSA9IGRhdGFzLmJ1aWxkVHlwZXMubGFiZWw7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgU2NvcmVJdGVtcy5IT1VTRV9UWVBFUzpcbiAgICAgICAgICBzZWxmLmxhYmVsID0gZGF0YXMuaG91c2VUeXBlcy5sYWJlbDtcbiAgICAgICAgICBzZWxmLnZhbHVlID0gZGF0YXMuaG91c2VUeXBlcy5sYWJlbDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgIH1cbiAgICAgIHNlbGYuaW5kZXggPSAnMCc7XG4gICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgLy8gdGhpcy5hcnJheSA9XG4gICAgfVxuXG4gICAgY29tcG9uZW50cyA9IHtcbiAgICAgIGdyb3VwaXRlbTogR3JvdXBJdGVtXG4gICAgfVxuICAgIG1ldGhvZHMgPSB7XG4gICAgICB0YXAgKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhgQ2xpY2tlZCBHcm91cCB4cGlja2VyYClcbiAgICAgIH0sXG4gICAgICBiaW5kUGlja2VyQ2hhbmdlOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICBjb25zb2xlLmxvZygncGlja2Vy5Y+R6YCB6YCJ5oup5pS55Y+Y77yM5pC65bim5YC85Li6JywgZS5kZXRhaWwudmFsdWUpXG4gICAgICAgIHRoaXMuaW5kZXggPSBlLmRldGFpbC52YWx1ZVxuICAgICAgfSxcbiAgICB9XG4gIH1cbiJdfQ==