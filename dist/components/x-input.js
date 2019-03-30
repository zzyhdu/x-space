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
      },

      bindTextChange: function bindTextChange(e) {
        console.log('picker发送选择改变，携带值为', e.detail.value);
        _Utils.scoreCalculator.onDataChange({ scoreItem: this.mode, value: e.detail.value });
      }

    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(XInput, [{
    key: 'onLoad',
    value: function onLoad() {
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
      this.$apply();
      // this.array =
    }
  }]);

  return XInput;
}(_wepy2.default.component);

exports.default = XInput;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIngtaW5wdXQuanMiXSwibmFtZXMiOlsiWElucHV0IiwicHJvcHMiLCJtb2RlIiwiU3RyaW5nIiwidGl0bGUiLCJkYXRhIiwibGFiZWwiLCJ2YWx1ZSIsImNvbXBvbmVudHMiLCJtZXRob2RzIiwidGFwIiwiY29uc29sZSIsImxvZyIsImJpbmRUZXh0Q2hhbmdlIiwiZSIsImRldGFpbCIsInNjb3JlQ2FsY3VsYXRvciIsIm9uRGF0YUNoYW5nZSIsInNjb3JlSXRlbSIsInNlbGYiLCJTY29yZUl0ZW1zIiwiTkFNRSIsImRhdGFzIiwibmFtZSIsIkFERFJFU1MiLCJhZGRyZXNzIiwiTE9OR0lUVURFIiwibG9uZ2l0dWRlIiwiTEFUSVRVREUiLCJsYXRpdHVkZSIsIlBSSUNFIiwicHJpY2UiLCJBSVJfQ09ORElUSU9ORVJfTlVNQkVSIiwiYWlyQ29uZGl0aW9uZXJOdW1iZXIiLCJMQVlFUl9IRUlHSFQiLCJsYXllckhlaWdodCIsIlJPT01fQVJFQSIsInJvb21BcmVhIiwiUkFDS19OVU1CRVIiLCJyYWNrTnVtYmVyIiwiJGFwcGx5Iiwid2VweSIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7Ozs7Ozs7OztJQUVxQkEsTTs7Ozs7Ozs7Ozs7Ozs7c0xBQ25CQyxLLEdBQVE7QUFDTkMsWUFBTUMsTUFEQTtBQUVOQyxhQUFPRDtBQUZELEssUUFLUkUsSSxHQUFPO0FBQ0xDLGFBQU8sT0FERjtBQUVMQyxhQUFPO0FBRkYsSyxRQXlDUEMsVSxHQUFhLEUsUUFFYkMsTyxHQUFVO0FBQ1JDLFNBRFEsaUJBQ0Q7QUFDTEMsZ0JBQVFDLEdBQVI7QUFDRCxPQUhPOztBQUlSQyxzQkFBZ0Isd0JBQVVDLENBQVYsRUFBYTtBQUMzQkgsZ0JBQVFDLEdBQVIsQ0FBWSxtQkFBWixFQUFpQ0UsRUFBRUMsTUFBRixDQUFTUixLQUExQztBQUNBUywrQkFBZ0JDLFlBQWhCLENBQTZCLEVBQUNDLFdBQVcsS0FBS2hCLElBQWpCLEVBQXNCSyxPQUFPTyxFQUFFQyxNQUFGLENBQVNSLEtBQXRDLEVBQTdCO0FBQ0Q7O0FBUE8sSzs7Ozs7NkJBdENBO0FBQ1IsVUFBTVksT0FBTyxJQUFiO0FBQ0EsY0FBUSxLQUFLakIsSUFBYjtBQUNFLGFBQUtrQixrQkFBV0MsSUFBaEI7QUFDRUYsZUFBS2IsS0FBTCxHQUFhZ0IsYUFBTUMsSUFBTixDQUFXakIsS0FBeEI7QUFDQTtBQUNGLGFBQUtjLGtCQUFXSSxPQUFoQjtBQUNFTCxlQUFLYixLQUFMLEdBQWFnQixhQUFNRyxPQUFOLENBQWNuQixLQUEzQjtBQUNBO0FBQ0YsYUFBS2Msa0JBQVdNLFNBQWhCO0FBQ0VQLGVBQUtiLEtBQUwsR0FBYWdCLGFBQU1LLFNBQU4sQ0FBZ0JyQixLQUE3QjtBQUNBO0FBQ0YsYUFBS2Msa0JBQVdRLFFBQWhCO0FBQ0VULGVBQUtiLEtBQUwsR0FBYWdCLGFBQU1PLFFBQU4sQ0FBZXZCLEtBQTVCO0FBQ0E7QUFDRixhQUFLYyxrQkFBV1UsS0FBaEI7QUFDRVgsZUFBS2IsS0FBTCxHQUFhZ0IsYUFBTVMsS0FBTixDQUFZekIsS0FBekI7QUFDQTtBQUNGLGFBQUtjLGtCQUFXWSxzQkFBaEI7QUFDRWIsZUFBS2IsS0FBTCxHQUFhZ0IsYUFBTVcsb0JBQU4sQ0FBMkIzQixLQUF4QztBQUNBO0FBQ0YsYUFBS2Msa0JBQVdjLFlBQWhCO0FBQ0VmLGVBQUtiLEtBQUwsR0FBYWdCLGFBQU1hLFdBQU4sQ0FBa0I3QixLQUEvQjtBQUNBO0FBQ0YsYUFBS2Msa0JBQVdnQixTQUFoQjtBQUNFakIsZUFBS2IsS0FBTCxHQUFhZ0IsYUFBTWUsUUFBTixDQUFlL0IsS0FBNUI7QUFDQTtBQUNGLGFBQUtjLGtCQUFXa0IsV0FBaEI7QUFDRW5CLGVBQUtiLEtBQUwsR0FBYWdCLGFBQU1pQixVQUFOLENBQWlCakMsS0FBOUI7QUFDQTtBQUNGO0FBNUJGO0FBOEJBLFdBQUtrQyxNQUFMO0FBQ0E7QUFDRDs7OztFQTdDaUNDLGVBQUtDLFM7O2tCQUFwQjFDLE0iLCJmaWxlIjoieC1pbnB1dC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcbiAgaW1wb3J0IHtkYXRhcyxzY29yZUNhbGN1bGF0b3IsU2NvcmVJdGVtc30gZnJvbSAnLi4vVXRpbHMnO1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFhJbnB1dCBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgICBwcm9wcyA9IHtcbiAgICAgIG1vZGU6IFN0cmluZyxcbiAgICAgIHRpdGxlOiBTdHJpbmdcbiAgICB9O1xuXG4gICAgZGF0YSA9IHtcbiAgICAgIGxhYmVsOiAnbGFiZWwnLFxuICAgICAgdmFsdWU6ICd2YWx1ZScsXG4gICAgfVxuXG4gICAgb25Mb2FkICgpIHtcbiAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgc3dpdGNoICh0aGlzLm1vZGUpIHtcbiAgICAgICAgY2FzZSBTY29yZUl0ZW1zLk5BTUU6XG4gICAgICAgICAgc2VsZi5sYWJlbCA9IGRhdGFzLm5hbWUubGFiZWw7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgU2NvcmVJdGVtcy5BRERSRVNTOlxuICAgICAgICAgIHNlbGYubGFiZWwgPSBkYXRhcy5hZGRyZXNzLmxhYmVsO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFNjb3JlSXRlbXMuTE9OR0lUVURFOlxuICAgICAgICAgIHNlbGYubGFiZWwgPSBkYXRhcy5sb25naXR1ZGUubGFiZWw7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgU2NvcmVJdGVtcy5MQVRJVFVERTpcbiAgICAgICAgICBzZWxmLmxhYmVsID0gZGF0YXMubGF0aXR1ZGUubGFiZWw7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgU2NvcmVJdGVtcy5QUklDRTpcbiAgICAgICAgICBzZWxmLmxhYmVsID0gZGF0YXMucHJpY2UubGFiZWw7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgU2NvcmVJdGVtcy5BSVJfQ09ORElUSU9ORVJfTlVNQkVSOlxuICAgICAgICAgIHNlbGYubGFiZWwgPSBkYXRhcy5haXJDb25kaXRpb25lck51bWJlci5sYWJlbDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBTY29yZUl0ZW1zLkxBWUVSX0hFSUdIVDpcbiAgICAgICAgICBzZWxmLmxhYmVsID0gZGF0YXMubGF5ZXJIZWlnaHQubGFiZWw7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgU2NvcmVJdGVtcy5ST09NX0FSRUE6XG4gICAgICAgICAgc2VsZi5sYWJlbCA9IGRhdGFzLnJvb21BcmVhLmxhYmVsO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFNjb3JlSXRlbXMuUkFDS19OVU1CRVI6XG4gICAgICAgICAgc2VsZi5sYWJlbCA9IGRhdGFzLnJhY2tOdW1iZXIubGFiZWw7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICB9XG4gICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgLy8gdGhpcy5hcnJheSA9XG4gICAgfVxuXG4gICAgY29tcG9uZW50cyA9IHtcbiAgICB9XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHRhcCAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBDbGlja2VkIEdyb3VwIHhwaWNrZXJgKVxuICAgICAgfSxcbiAgICAgIGJpbmRUZXh0Q2hhbmdlOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICBjb25zb2xlLmxvZygncGlja2Vy5Y+R6YCB6YCJ5oup5pS55Y+Y77yM5pC65bim5YC85Li6JywgZS5kZXRhaWwudmFsdWUgKVxuICAgICAgICBzY29yZUNhbGN1bGF0b3Iub25EYXRhQ2hhbmdlKHtzY29yZUl0ZW06IHRoaXMubW9kZSx2YWx1ZTogZS5kZXRhaWwudmFsdWV9KTtcbiAgICAgIH0sXG5cbiAgICB9XG4gIH1cbiJdfQ==