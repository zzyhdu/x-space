'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class; // aliasFields ignore module example


var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _wepyRedux = require('./../npm/wepy-redux/lib/index.js');

var _moduleA = {};

var _moduleA2 = _interopRequireDefault(_moduleA);

var _xPicker = require('./../components/x-picker.js');

var _xPicker2 = _interopRequireDefault(_xPicker);

var _xInput = require('./../components/x-input.js');

var _xInput2 = _interopRequireDefault(_xInput);

var _test = require('./../mixins/test.js');

var _test2 = _interopRequireDefault(_test);

var _Utils = require('./../Utils/index.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

console.log('moduleA ignored: ', _moduleA2.default); // => moduleA ignored: {}

var Index = (_dec = (0, _wepyRedux.connect)({
  num: function num(state) {
    return state.counter.num;
  },
  asyncNum: function asyncNum(state) {
    return state.counter.asyncNum;
  },
  sumNum: function sumNum(state) {
    return state.counter.num + state.counter.asyncNum;
  }
}), _dec(_class = function (_wepy$page) {
  _inherits(Index, _wepy$page);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: 'x-space'
    }, _this.$repeat = {}, _this.$props = { "pickerCity": { "mode": "citys" }, "pickerRoomType": { "mode": "equipmentRoomTypes" }, "pickerAddressType": { "mode": "propertyRightTypes" }, "pickerAddressTuning": { "mode": "addressTuning" }, "pickerChannelType": { "mode": "channelBuild" }, "pickerBatterTypes": { "mode": "batterTypes" }, "pickerEnvironment": { "mode": "environment" }, "pickerPower": { "mode": "power" }, "pickerBearingType": { "mode": "bearingTypes" }, "pickerBuildType": { "mode": "buildTypes" }, "pickerHouseType": { "mode": "houseTypes" }, "inputName": { "mode": "name" }, "inputAddress": { "mode": "address" }, "inputLongitude": { "mode": "longitude" }, "inputLatitude": { "mode": "latitude" }, "inputPrice": { "mode": "price" }, "inputAirConditionerNumber": { "mode": "airConditionerNumber" }, "inputLayerHeight": { "mode": "layerHeight" }, "inputRoomArea": { "mode": "roomArea" }, "inputRackNumber": { "mode": "rackNumber" } }, _this.$events = {}, _this.components = {
      pickerCity: _xPicker2.default,
      pickerRoomType: _xPicker2.default,
      pickerAddressType: _xPicker2.default,
      pickerAddressTuning: _xPicker2.default,
      pickerChannelType: _xPicker2.default,
      pickerBatterTypes: _xPicker2.default,
      pickerEnvironment: _xPicker2.default,
      pickerPower: _xPicker2.default,
      pickerBearingType: _xPicker2.default,
      pickerBuildType: _xPicker2.default,
      pickerHouseType: _xPicker2.default,
      inputName: _xInput2.default,
      inputAddress: _xInput2.default,
      inputLongitude: _xInput2.default,
      inputLatitude: _xInput2.default,
      inputPrice: _xInput2.default,
      inputAirConditionerNumber: _xInput2.default,
      inputLayerHeight: _xInput2.default,
      inputRoomArea: _xInput2.default,
      inputRackNumber: _xInput2.default
    }, _this.data = {
      scoreItems: _Utils.ScoreItems.CITYS,
      score: 0
    }, _this.computed = {
      now: function now() {
        return +new Date();
      }
    }, _this.methods = {
      tap: function tap() {
        console.log('do noting from ' + this.$name);
      },
      communicate: function communicate() {
        console.log(this.$name + ' tap');
        this.$broadcast('index-broadcast', 1, 3, 4);
      },
      calculate: function calculate() {
        console.log('calculate' + _Utils.scoreCalculator.result);
        this.score = _Utils.scoreCalculator.result;
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return Index;
}(_wepy2.default.page)) || _class);

Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImNvbnNvbGUiLCJsb2ciLCJtb2R1bGVBIiwiSW5kZXgiLCJudW0iLCJzdGF0ZSIsImNvdW50ZXIiLCJhc3luY051bSIsInN1bU51bSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJwaWNrZXJDaXR5IiwiWFBpY2tlciIsInBpY2tlclJvb21UeXBlIiwicGlja2VyQWRkcmVzc1R5cGUiLCJwaWNrZXJBZGRyZXNzVHVuaW5nIiwicGlja2VyQ2hhbm5lbFR5cGUiLCJwaWNrZXJCYXR0ZXJUeXBlcyIsInBpY2tlckVudmlyb25tZW50IiwicGlja2VyUG93ZXIiLCJwaWNrZXJCZWFyaW5nVHlwZSIsInBpY2tlckJ1aWxkVHlwZSIsInBpY2tlckhvdXNlVHlwZSIsImlucHV0TmFtZSIsIlhJbnB1dCIsImlucHV0QWRkcmVzcyIsImlucHV0TG9uZ2l0dWRlIiwiaW5wdXRMYXRpdHVkZSIsImlucHV0UHJpY2UiLCJpbnB1dEFpckNvbmRpdGlvbmVyTnVtYmVyIiwiaW5wdXRMYXllckhlaWdodCIsImlucHV0Um9vbUFyZWEiLCJpbnB1dFJhY2tOdW1iZXIiLCJkYXRhIiwic2NvcmVJdGVtcyIsIlNjb3JlSXRlbXMiLCJDSVRZUyIsInNjb3JlIiwiY29tcHV0ZWQiLCJub3ciLCJEYXRlIiwibWV0aG9kcyIsInRhcCIsIiRuYW1lIiwiY29tbXVuaWNhdGUiLCIkYnJvYWRjYXN0IiwiY2FsY3VsYXRlIiwic2NvcmVDYWxjdWxhdG9yIiwicmVzdWx0IiwiZXZlbnRzIiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztrQkFHaUM7OztBQUYvQjs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7QUFFQUEsUUFBUUMsR0FBUixDQUFZLG1CQUFaLEVBQWlDQyxpQkFBakMsRSxDQUEw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QUF0QyxFQUF5QyxDQUF6QztBQUNELE9BUE87QUFRUkMsZUFSUSx1QkFRRztBQUNUbEQsZ0JBQVFDLEdBQVIsQ0FBWSxjQUFja0QsdUJBQWdCQyxNQUExQztBQUNBLGFBQUtYLEtBQUwsR0FBYVUsdUJBQWdCQyxNQUE3QjtBQUNEO0FBWE8sSyxRQWNWQyxNLEdBQVMsRTs7Ozs7NkJBR0EsQ0FDUjs7OztFQTNEZ0NDLGVBQUtDLEk7a0JBQW5CcEQsSyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAnd2VweS1yZWR1eCdcbiAgaW1wb3J0IG1vZHVsZUEgZnJvbSAnbW9kdWxlLWEnIC8vIGFsaWFzRmllbGRzIGlnbm9yZSBtb2R1bGUgZXhhbXBsZVxuICBpbXBvcnQgWFBpY2tlciBmcm9tICcuLi9jb21wb25lbnRzL3gtcGlja2VyJ1xuICBpbXBvcnQgWElucHV0IGZyb20gJy4uL2NvbXBvbmVudHMveC1pbnB1dCdcbiAgaW1wb3J0IHRlc3RNaXhpbiBmcm9tICcuLi9taXhpbnMvdGVzdCdcbiAgaW1wb3J0IHtTY29yZUl0ZW1zLGRhdGFzLHNjb3JlQ2FsY3VsYXRvcn0gZnJvbSAnLi4vVXRpbHMnO1xuXG4gIGNvbnNvbGUubG9nKCdtb2R1bGVBIGlnbm9yZWQ6ICcsIG1vZHVsZUEpIC8vID0+IG1vZHVsZUEgaWdub3JlZDoge31cblxuICBAY29ubmVjdCh7XG4gICAgbnVtIChzdGF0ZSkge1xuICAgICAgcmV0dXJuIHN0YXRlLmNvdW50ZXIubnVtXG4gICAgfSxcbiAgICBhc3luY051bSAoc3RhdGUpIHtcbiAgICAgIHJldHVybiBzdGF0ZS5jb3VudGVyLmFzeW5jTnVtXG4gICAgfSxcbiAgICBzdW1OdW0gKHN0YXRlKSB7XG4gICAgICByZXR1cm4gc3RhdGUuY291bnRlci5udW0gKyBzdGF0ZS5jb3VudGVyLmFzeW5jTnVtXG4gICAgfVxuICB9KVxuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAneC1zcGFjZSdcbiAgICB9XG4gICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcInBpY2tlckNpdHlcIjp7XCJtb2RlXCI6XCJjaXR5c1wifSxcInBpY2tlclJvb21UeXBlXCI6e1wibW9kZVwiOlwiZXF1aXBtZW50Um9vbVR5cGVzXCJ9LFwicGlja2VyQWRkcmVzc1R5cGVcIjp7XCJtb2RlXCI6XCJwcm9wZXJ0eVJpZ2h0VHlwZXNcIn0sXCJwaWNrZXJBZGRyZXNzVHVuaW5nXCI6e1wibW9kZVwiOlwiYWRkcmVzc1R1bmluZ1wifSxcInBpY2tlckNoYW5uZWxUeXBlXCI6e1wibW9kZVwiOlwiY2hhbm5lbEJ1aWxkXCJ9LFwicGlja2VyQmF0dGVyVHlwZXNcIjp7XCJtb2RlXCI6XCJiYXR0ZXJUeXBlc1wifSxcInBpY2tlckVudmlyb25tZW50XCI6e1wibW9kZVwiOlwiZW52aXJvbm1lbnRcIn0sXCJwaWNrZXJQb3dlclwiOntcIm1vZGVcIjpcInBvd2VyXCJ9LFwicGlja2VyQmVhcmluZ1R5cGVcIjp7XCJtb2RlXCI6XCJiZWFyaW5nVHlwZXNcIn0sXCJwaWNrZXJCdWlsZFR5cGVcIjp7XCJtb2RlXCI6XCJidWlsZFR5cGVzXCJ9LFwicGlja2VySG91c2VUeXBlXCI6e1wibW9kZVwiOlwiaG91c2VUeXBlc1wifSxcImlucHV0TmFtZVwiOntcIm1vZGVcIjpcIm5hbWVcIn0sXCJpbnB1dEFkZHJlc3NcIjp7XCJtb2RlXCI6XCJhZGRyZXNzXCJ9LFwiaW5wdXRMb25naXR1ZGVcIjp7XCJtb2RlXCI6XCJsb25naXR1ZGVcIn0sXCJpbnB1dExhdGl0dWRlXCI6e1wibW9kZVwiOlwibGF0aXR1ZGVcIn0sXCJpbnB1dFByaWNlXCI6e1wibW9kZVwiOlwicHJpY2VcIn0sXCJpbnB1dEFpckNvbmRpdGlvbmVyTnVtYmVyXCI6e1wibW9kZVwiOlwiYWlyQ29uZGl0aW9uZXJOdW1iZXJcIn0sXCJpbnB1dExheWVySGVpZ2h0XCI6e1wibW9kZVwiOlwibGF5ZXJIZWlnaHRcIn0sXCJpbnB1dFJvb21BcmVhXCI6e1wibW9kZVwiOlwicm9vbUFyZWFcIn0sXCJpbnB1dFJhY2tOdW1iZXJcIjp7XCJtb2RlXCI6XCJyYWNrTnVtYmVyXCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgIHBpY2tlckNpdHk6IFhQaWNrZXIsXG4gICAgICBwaWNrZXJSb29tVHlwZTogWFBpY2tlcixcbiAgICAgIHBpY2tlckFkZHJlc3NUeXBlOiBYUGlja2VyLFxuICAgICAgcGlja2VyQWRkcmVzc1R1bmluZzogWFBpY2tlcixcbiAgICAgIHBpY2tlckNoYW5uZWxUeXBlOiBYUGlja2VyLFxuICAgICAgcGlja2VyQmF0dGVyVHlwZXM6IFhQaWNrZXIsXG4gICAgICBwaWNrZXJFbnZpcm9ubWVudDogWFBpY2tlcixcbiAgICAgIHBpY2tlclBvd2VyOiBYUGlja2VyLFxuICAgICAgcGlja2VyQmVhcmluZ1R5cGU6IFhQaWNrZXIsXG4gICAgICBwaWNrZXJCdWlsZFR5cGU6IFhQaWNrZXIsXG4gICAgICBwaWNrZXJIb3VzZVR5cGU6IFhQaWNrZXIsXG4gICAgICBpbnB1dE5hbWU6IFhJbnB1dCxcbiAgICAgIGlucHV0QWRkcmVzczogWElucHV0LFxuICAgICAgaW5wdXRMb25naXR1ZGU6IFhJbnB1dCxcbiAgICAgIGlucHV0TGF0aXR1ZGU6IFhJbnB1dCxcbiAgICAgIGlucHV0UHJpY2U6IFhJbnB1dCxcbiAgICAgIGlucHV0QWlyQ29uZGl0aW9uZXJOdW1iZXI6IFhJbnB1dCxcbiAgICAgIGlucHV0TGF5ZXJIZWlnaHQ6IFhJbnB1dCxcbiAgICAgIGlucHV0Um9vbUFyZWE6IFhJbnB1dCxcbiAgICAgIGlucHV0UmFja051bWJlcjogWElucHV0LFxuICAgIH1cblxuICAgIGRhdGEgPSB7XG4gICAgICBzY29yZUl0ZW1zOiBTY29yZUl0ZW1zLkNJVFlTLFxuICAgICAgc2NvcmU6IDAsXG4gICAgfVxuXG4gICAgY29tcHV0ZWQgPSB7XG4gICAgICBub3cgKCkge1xuICAgICAgICByZXR1cm4gK25ldyBEYXRlKClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuICAgICAgdGFwICgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2RvIG5vdGluZyBmcm9tICcgKyB0aGlzLiRuYW1lKVxuICAgICAgfSxcbiAgICAgIGNvbW11bmljYXRlICgpIHtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy4kbmFtZSArICcgdGFwJylcbiAgICAgICAgdGhpcy4kYnJvYWRjYXN0KCdpbmRleC1icm9hZGNhc3QnLCAxLCAzLCA0KVxuICAgICAgfSxcbiAgICAgIGNhbGN1bGF0ZSgpe1xuICAgICAgICBjb25zb2xlLmxvZygnY2FsY3VsYXRlJyArIHNjb3JlQ2FsY3VsYXRvci5yZXN1bHQpXG4gICAgICAgIHRoaXMuc2NvcmUgPSBzY29yZUNhbGN1bGF0b3IucmVzdWx0XG4gICAgICB9XG4gICAgfVxuXG4gICAgZXZlbnRzID0ge1xuICAgIH1cblxuICAgIG9uTG9hZCgpIHtcbiAgICB9XG4gIH1cbiJdfQ==