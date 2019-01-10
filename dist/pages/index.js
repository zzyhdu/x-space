'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class; // alias example
// alias example
// aliasFields example
// aliasFields ignore module example


var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _wepyRedux = require('./../npm/wepy-redux/lib/index.js');

var _panel = require('./../components/panel.js');

var _panel2 = _interopRequireDefault(_panel);

var _counter = require('./../components/counter.js');

var _counter2 = _interopRequireDefault(_counter);

var _list = require('./../components/wepy-list.js');

var _list2 = _interopRequireDefault(_list);

var _moduleA = {};

var _moduleA2 = _interopRequireDefault(_moduleA);

var _group = require('./../components/group.js');

var _group2 = _interopRequireDefault(_group);

var _xPicker = require('./../components/x-picker.js');

var _xPicker2 = _interopRequireDefault(_xPicker);

var _xInput = require('./../components/x-input.js');

var _xInput2 = _interopRequireDefault(_xInput);

var _wepyComToast = require('./../npm/wepy-com-toast/toast.js');

var _wepyComToast2 = _interopRequireDefault(_wepyComToast);

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
    }, _this.$repeat = {}, _this.$props = { "pickerCity": { "mode": "citys" }, "pickerRoomType": { "mode": "equipmentRoomTypes" }, "pickerAddressType": { "mode": "propertyRightTypes" }, "pickerAddressTuning": { "mode": "addressTuning" }, "pickerChannelType": { "mode": "channelBuild" }, "pickerBatterTypes": { "mode": "batterTypes" }, "pickerEnvironment": { "mode": "environment" }, "pickerPower": { "mode": "power" }, "pickerBearingType": { "mode": "bearingTypes" }, "pickerBuildType": { "mode": "buildTypes" }, "pickerHouseType": { "mode": "houseTypes" }, "injj": { "mode": "houseTypes" } }, _this.$events = {}, _this.components = {
      panel: _panel2.default,
      counter1: _counter2.default,
      counter2: _counter2.default,
      list: _list2.default,
      group: _group2.default,
      toast: _wepyComToast2.default,
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
      injj: _xInput2.default
    }, _this.data = {
      scoreItems: _Utils.ScoreItems.CITYS
    }, _this.computed = {
      now: function now() {
        return +new Date();
      }
    }, _this.methods = {
      toast: function toast() {
        var promise = this.$invoke('toast', 'show', {
          title: '自定义标题',
          img: 'https://raw.githubusercontent.com/kiinlam/wetoast/master/images/star.png'
        });

        promise.then(function (d) {
          console.log('toast done');
        });
      },
      goNextPage: function goNextPage() {
        this.$root.$navigate({ url: 'main?id=' + 'hello' });
      },
      tap: function tap() {
        console.log('do noting from ' + this.$name);
      },
      communicate: function communicate() {
        console.log(this.$name + ' tap');

        this.$invoke('counter2', 'minus', 45, 6);
        this.$invoke('counter1', 'plus', 45, 6);

        this.$broadcast('index-broadcast', 1, 3, 4);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImNvbnNvbGUiLCJsb2ciLCJtb2R1bGVBIiwiSW5kZXgiLCJudW0iLCJzdGF0ZSIsImNvdW50ZXIiLCJhc3luY051bSIsInN1bU51bSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJwYW5lbCIsIlBhbmVsIiwiY291bnRlcjEiLCJDb3VudGVyIiwiY291bnRlcjIiLCJsaXN0IiwiTGlzdCIsImdyb3VwIiwiR3JvdXAiLCJ0b2FzdCIsIlRvYXN0IiwicGlja2VyQ2l0eSIsIlhQaWNrZXIiLCJwaWNrZXJSb29tVHlwZSIsInBpY2tlckFkZHJlc3NUeXBlIiwicGlja2VyQWRkcmVzc1R1bmluZyIsInBpY2tlckNoYW5uZWxUeXBlIiwicGlja2VyQmF0dGVyVHlwZXMiLCJwaWNrZXJFbnZpcm9ubWVudCIsInBpY2tlclBvd2VyIiwicGlja2VyQmVhcmluZ1R5cGUiLCJwaWNrZXJCdWlsZFR5cGUiLCJwaWNrZXJIb3VzZVR5cGUiLCJpbmpqIiwiWElucHV0IiwiZGF0YSIsInNjb3JlSXRlbXMiLCJTY29yZUl0ZW1zIiwiQ0lUWVMiLCJjb21wdXRlZCIsIm5vdyIsIkRhdGUiLCJtZXRob2RzIiwicHJvbWlzZSIsIiRpbnZva2UiLCJ0aXRsZSIsImltZyIsInRoZW4iLCJkIiwiZ29OZXh0UGFnZSIsIiRyb290IiwiJG5hdmlnYXRlIiwidXJsIiwidGFwIiwiJG5hbWUiLCJjb21tdW5pY2F0ZSIsIiRicm9hZGNhc3QiLCJldmVudHMiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O2tCQUd5QztBQUNUO0FBQ1E7QUFDUDs7O0FBTC9COzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7QUFFQUEsUUFBUUMsR0FBUixDQUFZLG1CQUFaLEVBQWlDQyxpQkFBakMsRSxDQUEwQzs7SUFjckJDLEssV0FacEIsd0JBQVE7QUFDUEMsS0FETyxlQUNGQyxLQURFLEVBQ0s7QUFDVixXQUFPQSxNQUFNQyxPQUFOLENBQWNGLEdBQXJCO0FBQ0QsR0FITTtBQUlQRyxVQUpPLG9CQUlHRixLQUpILEVBSVU7QUFDZixXQUFPQSxNQUFNQyxPQUFOLENBQWNDLFFBQXJCO0FBQ0QsR0FOTTtBQU9QQyxRQVBPLGtCQU9DSCxLQVBELEVBT1E7QUFDYixXQUFPQSxNQUFNQyxPQUFOLENBQWNGLEdBQWQsR0FBb0JDLE1BQU1DLE9BQU4sQ0FBY0MsUUFBekM7QUFDRDtBQVRNLENBQVIsQzs7Ozs7Ozs7Ozs7Ozs7b0xBYUNFLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdWQyxPLEdBQVUsRSxRQUNiQyxNLEdBQVMsRUFBQyxjQUFhLEVBQUMsUUFBTyxPQUFSLEVBQWQsRUFBK0Isa0JBQWlCLEVBQUMsUUFBTyxvQkFBUixFQUFoRCxFQUE4RSxxQkFBb0IsRUFBQyxRQUFPLG9CQUFSLEVBQWxHLEVBQWdJLHVCQUFzQixFQUFDLFFBQU8sZUFBUixFQUF0SixFQUErSyxxQkFBb0IsRUFBQyxRQUFPLGNBQVIsRUFBbk0sRUFBMk4scUJBQW9CLEVBQUMsUUFBTyxhQUFSLEVBQS9PLEVBQXNRLHFCQUFvQixFQUFDLFFBQU8sYUFBUixFQUExUixFQUFpVCxlQUFjLEVBQUMsUUFBTyxPQUFSLEVBQS9ULEVBQWdWLHFCQUFvQixFQUFDLFFBQU8sY0FBUixFQUFwVyxFQUE0WCxtQkFBa0IsRUFBQyxRQUFPLFlBQVIsRUFBOVksRUFBb2EsbUJBQWtCLEVBQUMsUUFBTyxZQUFSLEVBQXRiLEVBQTRjLFFBQU8sRUFBQyxRQUFPLFlBQVIsRUFBbmQsRSxRQUNUQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDUkMsYUFBT0MsZUFEQztBQUVSQyxnQkFBVUMsaUJBRkY7QUFHUkMsZ0JBQVVELGlCQUhGO0FBSVJFLFlBQU1DLGNBSkU7QUFLUkMsYUFBT0MsZUFMQztBQU1SQyxhQUFPQyxzQkFOQztBQU9SQyxrQkFBWUMsaUJBUEo7QUFRUkMsc0JBQWdCRCxpQkFSUjtBQVNSRSx5QkFBbUJGLGlCQVRYO0FBVVJHLDJCQUFxQkgsaUJBVmI7QUFXUkkseUJBQW1CSixpQkFYWDtBQVlSSyx5QkFBbUJMLGlCQVpYO0FBYVJNLHlCQUFtQk4saUJBYlg7QUFjUk8sbUJBQWFQLGlCQWRMO0FBZVJRLHlCQUFtQlIsaUJBZlg7QUFnQlJTLHVCQUFpQlQsaUJBaEJUO0FBaUJSVSx1QkFBaUJWLGlCQWpCVDtBQWtCUlcsWUFBTUM7QUFsQkUsSyxRQXFCVkMsSSxHQUFPO0FBQ0xDLGtCQUFZQyxrQkFBV0M7QUFEbEIsSyxRQUlQQyxRLEdBQVc7QUFDVEMsU0FEUyxpQkFDRjtBQUNMLGVBQU8sQ0FBQyxJQUFJQyxJQUFKLEVBQVI7QUFDRDtBQUhRLEssUUFNWEMsTyxHQUFVO0FBQ1J2QixXQURRLG1CQUNDO0FBQ1AsWUFBSXdCLFVBQVUsS0FBS0MsT0FBTCxDQUFhLE9BQWIsRUFBc0IsTUFBdEIsRUFBOEI7QUFDMUNDLGlCQUFPLE9BRG1DO0FBRTFDQyxlQUFLO0FBRnFDLFNBQTlCLENBQWQ7O0FBS0FILGdCQUFRSSxJQUFSLENBQWEsVUFBQ0MsQ0FBRCxFQUFPO0FBQ2xCckQsa0JBQVFDLEdBQVIsQ0FBWSxZQUFaO0FBQ0QsU0FGRDtBQUdELE9BVk87QUFXUnFELGdCQVhRLHdCQVdNO0FBQ1osYUFBS0MsS0FBTCxDQUFXQyxTQUFYLENBQXFCLEVBQUNDLEtBQUssYUFBYSxPQUFuQixFQUFyQjtBQUNELE9BYk87QUFjUkMsU0FkUSxpQkFjRDtBQUNMMUQsZ0JBQVFDLEdBQVIsQ0FBWSxvQkFBb0IsS0FBSzBELEtBQXJDO0FBQ0QsT0FoQk87QUFpQlJDLGlCQWpCUSx5QkFpQk87QUFDYjVELGdCQUFRQyxHQUFSLENBQVksS0FBSzBELEtBQUwsR0FBYSxNQUF6Qjs7QUFFQSxhQUFLVixPQUFMLENBQWEsVUFBYixFQUF5QixPQUF6QixFQUFrQyxFQUFsQyxFQUFzQyxDQUF0QztBQUNBLGFBQUtBLE9BQUwsQ0FBYSxVQUFiLEVBQXlCLE1BQXpCLEVBQWlDLEVBQWpDLEVBQXFDLENBQXJDOztBQUVBLGFBQUtZLFVBQUwsQ0FBZ0IsaUJBQWhCLEVBQW1DLENBQW5DLEVBQXNDLENBQXRDLEVBQXlDLENBQXpDO0FBQ0Q7QUF4Qk8sSyxRQTJCVkMsTSxHQUFTLEU7Ozs7OzZCQUdBLENBQ1I7Ozs7RUFyRWdDQyxlQUFLQyxJO2tCQUFuQjdELEsiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3dlcHktcmVkdXgnXG4gIGltcG9ydCBQYW5lbCBmcm9tICdAL2NvbXBvbmVudHMvcGFuZWwnIC8vIGFsaWFzIGV4YW1wbGVcbiAgaW1wb3J0IENvdW50ZXIgZnJvbSAnY291bnRlcicgLy8gYWxpYXMgZXhhbXBsZVxuICBpbXBvcnQgTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL2xpc3QnIC8vIGFsaWFzRmllbGRzIGV4YW1wbGVcbiAgaW1wb3J0IG1vZHVsZUEgZnJvbSAnbW9kdWxlLWEnIC8vIGFsaWFzRmllbGRzIGlnbm9yZSBtb2R1bGUgZXhhbXBsZVxuICBpbXBvcnQgR3JvdXAgZnJvbSAnLi4vY29tcG9uZW50cy9ncm91cCdcbiAgaW1wb3J0IFhQaWNrZXIgZnJvbSAnLi4vY29tcG9uZW50cy94LXBpY2tlcidcbiAgaW1wb3J0IFhJbnB1dCBmcm9tICcuLi9jb21wb25lbnRzL3gtaW5wdXQnXG5cbiAgaW1wb3J0IFRvYXN0IGZyb20gJ3dlcHktY29tLXRvYXN0J1xuICBpbXBvcnQgdGVzdE1peGluIGZyb20gJy4uL21peGlucy90ZXN0J1xuICBpbXBvcnQge1Njb3JlSXRlbXMsZGF0YXMsc2V9IGZyb20gJy4uL1V0aWxzJztcblxuICBjb25zb2xlLmxvZygnbW9kdWxlQSBpZ25vcmVkOiAnLCBtb2R1bGVBKSAvLyA9PiBtb2R1bGVBIGlnbm9yZWQ6IHt9XG5cbiAgQGNvbm5lY3Qoe1xuICAgIG51bSAoc3RhdGUpIHtcbiAgICAgIHJldHVybiBzdGF0ZS5jb3VudGVyLm51bVxuICAgIH0sXG4gICAgYXN5bmNOdW0gKHN0YXRlKSB7XG4gICAgICByZXR1cm4gc3RhdGUuY291bnRlci5hc3luY051bVxuICAgIH0sXG4gICAgc3VtTnVtIChzdGF0ZSkge1xuICAgICAgcmV0dXJuIHN0YXRlLmNvdW50ZXIubnVtICsgc3RhdGUuY291bnRlci5hc3luY051bVxuICAgIH1cbiAgfSlcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ3gtc3BhY2UnXG4gICAgfVxuICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJwaWNrZXJDaXR5XCI6e1wibW9kZVwiOlwiY2l0eXNcIn0sXCJwaWNrZXJSb29tVHlwZVwiOntcIm1vZGVcIjpcImVxdWlwbWVudFJvb21UeXBlc1wifSxcInBpY2tlckFkZHJlc3NUeXBlXCI6e1wibW9kZVwiOlwicHJvcGVydHlSaWdodFR5cGVzXCJ9LFwicGlja2VyQWRkcmVzc1R1bmluZ1wiOntcIm1vZGVcIjpcImFkZHJlc3NUdW5pbmdcIn0sXCJwaWNrZXJDaGFubmVsVHlwZVwiOntcIm1vZGVcIjpcImNoYW5uZWxCdWlsZFwifSxcInBpY2tlckJhdHRlclR5cGVzXCI6e1wibW9kZVwiOlwiYmF0dGVyVHlwZXNcIn0sXCJwaWNrZXJFbnZpcm9ubWVudFwiOntcIm1vZGVcIjpcImVudmlyb25tZW50XCJ9LFwicGlja2VyUG93ZXJcIjp7XCJtb2RlXCI6XCJwb3dlclwifSxcInBpY2tlckJlYXJpbmdUeXBlXCI6e1wibW9kZVwiOlwiYmVhcmluZ1R5cGVzXCJ9LFwicGlja2VyQnVpbGRUeXBlXCI6e1wibW9kZVwiOlwiYnVpbGRUeXBlc1wifSxcInBpY2tlckhvdXNlVHlwZVwiOntcIm1vZGVcIjpcImhvdXNlVHlwZXNcIn0sXCJpbmpqXCI6e1wibW9kZVwiOlwiaG91c2VUeXBlc1wifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICBwYW5lbDogUGFuZWwsXG4gICAgICBjb3VudGVyMTogQ291bnRlcixcbiAgICAgIGNvdW50ZXIyOiBDb3VudGVyLFxuICAgICAgbGlzdDogTGlzdCxcbiAgICAgIGdyb3VwOiBHcm91cCxcbiAgICAgIHRvYXN0OiBUb2FzdCxcbiAgICAgIHBpY2tlckNpdHk6IFhQaWNrZXIsXG4gICAgICBwaWNrZXJSb29tVHlwZTogWFBpY2tlcixcbiAgICAgIHBpY2tlckFkZHJlc3NUeXBlOiBYUGlja2VyLFxuICAgICAgcGlja2VyQWRkcmVzc1R1bmluZzogWFBpY2tlcixcbiAgICAgIHBpY2tlckNoYW5uZWxUeXBlOiBYUGlja2VyLFxuICAgICAgcGlja2VyQmF0dGVyVHlwZXM6IFhQaWNrZXIsXG4gICAgICBwaWNrZXJFbnZpcm9ubWVudDogWFBpY2tlcixcbiAgICAgIHBpY2tlclBvd2VyOiBYUGlja2VyLFxuICAgICAgcGlja2VyQmVhcmluZ1R5cGU6IFhQaWNrZXIsXG4gICAgICBwaWNrZXJCdWlsZFR5cGU6IFhQaWNrZXIsXG4gICAgICBwaWNrZXJIb3VzZVR5cGU6IFhQaWNrZXIsXG4gICAgICBpbmpqOiBYSW5wdXQsXG4gICAgfVxuXG4gICAgZGF0YSA9IHtcbiAgICAgIHNjb3JlSXRlbXM6IFNjb3JlSXRlbXMuQ0lUWVMsXG4gICAgfVxuXG4gICAgY29tcHV0ZWQgPSB7XG4gICAgICBub3cgKCkge1xuICAgICAgICByZXR1cm4gK25ldyBEYXRlKClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuICAgICAgdG9hc3QgKCkge1xuICAgICAgICBsZXQgcHJvbWlzZSA9IHRoaXMuJGludm9rZSgndG9hc3QnLCAnc2hvdycsIHtcbiAgICAgICAgICB0aXRsZTogJ+iHquWumuS5ieagh+mimCcsXG4gICAgICAgICAgaW1nOiAnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2tpaW5sYW0vd2V0b2FzdC9tYXN0ZXIvaW1hZ2VzL3N0YXIucG5nJ1xuICAgICAgICB9KVxuXG4gICAgICAgIHByb21pc2UudGhlbigoZCkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCd0b2FzdCBkb25lJylcbiAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgICBnb05leHRQYWdlICgpIHtcbiAgICAgICAgdGhpcy4kcm9vdC4kbmF2aWdhdGUoe3VybDogJ21haW4/aWQ9JyArICdoZWxsbyd9KTtcbiAgICAgIH0sXG4gICAgICB0YXAgKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnZG8gbm90aW5nIGZyb20gJyArIHRoaXMuJG5hbWUpXG4gICAgICB9LFxuICAgICAgY29tbXVuaWNhdGUgKCkge1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLiRuYW1lICsgJyB0YXAnKVxuXG4gICAgICAgIHRoaXMuJGludm9rZSgnY291bnRlcjInLCAnbWludXMnLCA0NSwgNilcbiAgICAgICAgdGhpcy4kaW52b2tlKCdjb3VudGVyMScsICdwbHVzJywgNDUsIDYpXG5cbiAgICAgICAgdGhpcy4kYnJvYWRjYXN0KCdpbmRleC1icm9hZGNhc3QnLCAxLCAzLCA0KVxuICAgICAgfSxcbiAgICB9XG5cbiAgICBldmVudHMgPSB7XG4gICAgfVxuXG4gICAgb25Mb2FkKCkge1xuICAgIH1cbiAgfVxuIl19