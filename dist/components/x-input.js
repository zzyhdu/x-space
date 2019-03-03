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
    }, _this.components = {}, _this.methods = {
      tap: function tap() {
        console.log('Clicked Group xpicker');
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(XInput, [{
    key: 'onLoad',
    value: function onLoad() {
      console.log('zzy', 'onLoad', this.mode);
      var self = this;
      switch (this.mode) {
        case _Utils.ScoreItems.NAME:
          self.label = _Utils.datas.name.label;
          break;
        case _Utils.ScoreItems.ADDRESS:
          self.label = _Utils.datas.address.label;
          break;
        case _Utils.ScoreItems.LONGITUDE:
          self.label = _Utils.datas.longitude.label;
          break;
        case _Utils.ScoreItems.LATITUDE:
          self.label = _Utils.datas.latitude.label;
          break;
        case _Utils.ScoreItems.PRICE:
          self.label = _Utils.datas.price.label;
          break;
        case _Utils.ScoreItems.AIR_CONDITIONER_NUMBER:
          self.label = _Utils.datas.airConditionerNumber.label;
          break;
        case _Utils.ScoreItems.LAYER_HEIGHT:
          self.label = _Utils.datas.layerHeight.label;
          break;
        case _Utils.ScoreItems.ROOM_AREA:
          self.label = _Utils.datas.roomArea.label;
          break;
        case _Utils.ScoreItems.RACK_NUMBER:
          self.label = _Utils.datas.rackNumber.label;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIngtaW5wdXQuanMiXSwibmFtZXMiOlsiWElucHV0IiwicHJvcHMiLCJtb2RlIiwiU3RyaW5nIiwidGl0bGUiLCJkYXRhIiwibGFiZWwiLCJ2YWx1ZSIsImNvbXBvbmVudHMiLCJtZXRob2RzIiwidGFwIiwiY29uc29sZSIsImxvZyIsInNlbGYiLCJTY29yZUl0ZW1zIiwiTkFNRSIsImRhdGFzIiwibmFtZSIsIkFERFJFU1MiLCJhZGRyZXNzIiwiTE9OR0lUVURFIiwibG9uZ2l0dWRlIiwiTEFUSVRVREUiLCJsYXRpdHVkZSIsIlBSSUNFIiwicHJpY2UiLCJBSVJfQ09ORElUSU9ORVJfTlVNQkVSIiwiYWlyQ29uZGl0aW9uZXJOdW1iZXIiLCJMQVlFUl9IRUlHSFQiLCJsYXllckhlaWdodCIsIlJPT01fQVJFQSIsInJvb21BcmVhIiwiUkFDS19OVU1CRVIiLCJyYWNrTnVtYmVyIiwiaW5kZXgiLCIkYXBwbHkiLCJ3ZXB5IiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7Ozs7Ozs7O0lBRXFCQSxNOzs7Ozs7Ozs7Ozs7OztzTEFDbkJDLEssR0FBUTtBQUNOQyxZQUFNQyxNQURBO0FBRU5DLGFBQU9EO0FBRkQsSyxRQUtSRSxJLEdBQU87QUFDTEMsYUFBTyxPQURGO0FBRUxDLGFBQU87QUFGRixLLFFBMkNQQyxVLEdBQWEsRSxRQUViQyxPLEdBQVU7QUFDUkMsU0FEUSxpQkFDRDtBQUNMQyxnQkFBUUMsR0FBUjtBQUNEO0FBSE8sSzs7Ozs7NkJBeENBO0FBQ1JELGNBQVFDLEdBQVIsQ0FBWSxLQUFaLEVBQWtCLFFBQWxCLEVBQTJCLEtBQUtWLElBQWhDO0FBQ0EsVUFBTVcsT0FBTyxJQUFiO0FBQ0EsY0FBUSxLQUFLWCxJQUFiO0FBQ0UsYUFBS1ksa0JBQVdDLElBQWhCO0FBQ0VGLGVBQUtQLEtBQUwsR0FBYVUsYUFBTUMsSUFBTixDQUFXWCxLQUF4QjtBQUNBO0FBQ0YsYUFBS1Esa0JBQVdJLE9BQWhCO0FBQ0VMLGVBQUtQLEtBQUwsR0FBYVUsYUFBTUcsT0FBTixDQUFjYixLQUEzQjtBQUNBO0FBQ0YsYUFBS1Esa0JBQVdNLFNBQWhCO0FBQ0VQLGVBQUtQLEtBQUwsR0FBYVUsYUFBTUssU0FBTixDQUFnQmYsS0FBN0I7QUFDQTtBQUNGLGFBQUtRLGtCQUFXUSxRQUFoQjtBQUNFVCxlQUFLUCxLQUFMLEdBQWFVLGFBQU1PLFFBQU4sQ0FBZWpCLEtBQTVCO0FBQ0E7QUFDRixhQUFLUSxrQkFBV1UsS0FBaEI7QUFDRVgsZUFBS1AsS0FBTCxHQUFhVSxhQUFNUyxLQUFOLENBQVluQixLQUF6QjtBQUNBO0FBQ0YsYUFBS1Esa0JBQVdZLHNCQUFoQjtBQUNFYixlQUFLUCxLQUFMLEdBQWFVLGFBQU1XLG9CQUFOLENBQTJCckIsS0FBeEM7QUFDQTtBQUNGLGFBQUtRLGtCQUFXYyxZQUFoQjtBQUNFZixlQUFLUCxLQUFMLEdBQWFVLGFBQU1hLFdBQU4sQ0FBa0J2QixLQUEvQjtBQUNBO0FBQ0YsYUFBS1Esa0JBQVdnQixTQUFoQjtBQUNFakIsZUFBS1AsS0FBTCxHQUFhVSxhQUFNZSxRQUFOLENBQWV6QixLQUE1QjtBQUNBO0FBQ0YsYUFBS1Esa0JBQVdrQixXQUFoQjtBQUNFbkIsZUFBS1AsS0FBTCxHQUFhVSxhQUFNaUIsVUFBTixDQUFpQjNCLEtBQTlCO0FBQ0E7QUFDRjtBQTVCRjtBQThCQU8sV0FBS3FCLEtBQUwsR0FBYSxHQUFiO0FBQ0EsV0FBS0MsTUFBTDtBQUNBO0FBQ0Q7Ozs7RUEvQ2lDQyxlQUFLQyxTOztrQkFBcEJyQyxNIiwiZmlsZSI6IngtaW5wdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG4gIGltcG9ydCB7ZGF0YXMsc2NvcmVDYWxjdWxhdG9yLFNjb3JlSXRlbXN9IGZyb20gJy4uL1V0aWxzJztcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBYSW5wdXQgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gICAgcHJvcHMgPSB7XG4gICAgICBtb2RlOiBTdHJpbmcsXG4gICAgICB0aXRsZTogU3RyaW5nXG4gICAgfTtcblxuICAgIGRhdGEgPSB7XG4gICAgICBsYWJlbDogJ2xhYmVsJyxcbiAgICAgIHZhbHVlOiAndmFsdWUnLFxuICAgIH1cblxuICAgIG9uTG9hZCAoKSB7XG4gICAgICBjb25zb2xlLmxvZygnenp5Jywnb25Mb2FkJyx0aGlzLm1vZGUpO1xuICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICBzd2l0Y2ggKHRoaXMubW9kZSkge1xuICAgICAgICBjYXNlIFNjb3JlSXRlbXMuTkFNRTpcbiAgICAgICAgICBzZWxmLmxhYmVsID0gZGF0YXMubmFtZS5sYWJlbDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBTY29yZUl0ZW1zLkFERFJFU1M6XG4gICAgICAgICAgc2VsZi5sYWJlbCA9IGRhdGFzLmFkZHJlc3MubGFiZWw7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgU2NvcmVJdGVtcy5MT05HSVRVREU6XG4gICAgICAgICAgc2VsZi5sYWJlbCA9IGRhdGFzLmxvbmdpdHVkZS5sYWJlbDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBTY29yZUl0ZW1zLkxBVElUVURFOlxuICAgICAgICAgIHNlbGYubGFiZWwgPSBkYXRhcy5sYXRpdHVkZS5sYWJlbDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBTY29yZUl0ZW1zLlBSSUNFOlxuICAgICAgICAgIHNlbGYubGFiZWwgPSBkYXRhcy5wcmljZS5sYWJlbDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBTY29yZUl0ZW1zLkFJUl9DT05ESVRJT05FUl9OVU1CRVI6XG4gICAgICAgICAgc2VsZi5sYWJlbCA9IGRhdGFzLmFpckNvbmRpdGlvbmVyTnVtYmVyLmxhYmVsO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFNjb3JlSXRlbXMuTEFZRVJfSEVJR0hUOlxuICAgICAgICAgIHNlbGYubGFiZWwgPSBkYXRhcy5sYXllckhlaWdodC5sYWJlbDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBTY29yZUl0ZW1zLlJPT01fQVJFQTpcbiAgICAgICAgICBzZWxmLmxhYmVsID0gZGF0YXMucm9vbUFyZWEubGFiZWw7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgU2NvcmVJdGVtcy5SQUNLX05VTUJFUjpcbiAgICAgICAgICBzZWxmLmxhYmVsID0gZGF0YXMucmFja051bWJlci5sYWJlbDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgIH1cbiAgICAgIHNlbGYuaW5kZXggPSAnMCc7XG4gICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgLy8gdGhpcy5hcnJheSA9XG4gICAgfVxuXG4gICAgY29tcG9uZW50cyA9IHtcbiAgICB9XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHRhcCAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBDbGlja2VkIEdyb3VwIHhwaWNrZXJgKVxuICAgICAgfSxcbiAgICB9XG4gIH1cbiJdfQ==