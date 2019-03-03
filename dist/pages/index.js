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
    }, _this.$repeat = {}, _this.$props = { "pickerCity": { "mode": "citys" }, "pickerRoomType": { "mode": "equipmentRoomTypes" }, "pickerAddressType": { "mode": "propertyRightTypes" }, "pickerAddressTuning": { "mode": "addressTuning" }, "pickerChannelType": { "mode": "channelBuild" }, "pickerBatterTypes": { "mode": "batterTypes" }, "pickerEnvironment": { "mode": "environment" }, "pickerPower": { "mode": "power" }, "pickerBearingType": { "mode": "bearingTypes" }, "pickerBuildType": { "mode": "buildTypes" }, "pickerHouseType": { "mode": "houseTypes" }, "inputName": { "mode": "name" }, "inputAddress": { "mode": "address" }, "inputLongitude": { "mode": "longitude" }, "inputLatitude": { "mode": "latitude" }, "inputPrice": { "mode": "price" }, "inputAirConditionerNumber": { "mode": "airConditionerNumber" }, "inputLayerHeight": { "mode": "layerHeight" }, "inputRoomArea": { "mode": "roomArea" }, "inputRackNumber": { "mode": "rackNumber" } }, _this.$events = {}, _this.components = {
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImNvbnNvbGUiLCJsb2ciLCJtb2R1bGVBIiwiSW5kZXgiLCJudW0iLCJzdGF0ZSIsImNvdW50ZXIiLCJhc3luY051bSIsInN1bU51bSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJwYW5lbCIsIlBhbmVsIiwiY291bnRlcjEiLCJDb3VudGVyIiwiY291bnRlcjIiLCJsaXN0IiwiTGlzdCIsImdyb3VwIiwiR3JvdXAiLCJ0b2FzdCIsIlRvYXN0IiwicGlja2VyQ2l0eSIsIlhQaWNrZXIiLCJwaWNrZXJSb29tVHlwZSIsInBpY2tlckFkZHJlc3NUeXBlIiwicGlja2VyQWRkcmVzc1R1bmluZyIsInBpY2tlckNoYW5uZWxUeXBlIiwicGlja2VyQmF0dGVyVHlwZXMiLCJwaWNrZXJFbnZpcm9ubWVudCIsInBpY2tlclBvd2VyIiwicGlja2VyQmVhcmluZ1R5cGUiLCJwaWNrZXJCdWlsZFR5cGUiLCJwaWNrZXJIb3VzZVR5cGUiLCJpbnB1dE5hbWUiLCJYSW5wdXQiLCJpbnB1dEFkZHJlc3MiLCJpbnB1dExvbmdpdHVkZSIsImlucHV0TGF0aXR1ZGUiLCJpbnB1dFByaWNlIiwiaW5wdXRBaXJDb25kaXRpb25lck51bWJlciIsImlucHV0TGF5ZXJIZWlnaHQiLCJpbnB1dFJvb21BcmVhIiwiaW5wdXRSYWNrTnVtYmVyIiwiZGF0YSIsInNjb3JlSXRlbXMiLCJTY29yZUl0ZW1zIiwiQ0lUWVMiLCJjb21wdXRlZCIsIm5vdyIsIkRhdGUiLCJtZXRob2RzIiwicHJvbWlzZSIsIiRpbnZva2UiLCJ0aXRsZSIsImltZyIsInRoZW4iLCJkIiwiZ29OZXh0UGFnZSIsIiRyb290IiwiJG5hdmlnYXRlIiwidXJsIiwidGFwIiwiJG5hbWUiLCJjb21tdW5pY2F0ZSIsIiRicm9hZGNhc3QiLCJldmVudHMiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5n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QVlDLGtCQUFXQztBQURsQixLLFFBSVBDLFEsR0FBVztBQUNUQyxTQURTLGlCQUNGO0FBQ0wsZUFBTyxDQUFDLElBQUlDLElBQUosRUFBUjtBQUNEO0FBSFEsSyxRQU1YQyxPLEdBQVU7QUFDUi9CLFdBRFEsbUJBQ0M7QUFDUCxZQUFJZ0MsVUFBVSxLQUFLQyxPQUFMLENBQWEsT0FBYixFQUFzQixNQUF0QixFQUE4QjtBQUMxQ0MsaUJBQU8sT0FEbUM7QUFFMUNDLGVBQUs7QUFGcUMsU0FBOUIsQ0FBZDs7QUFLQUgsZ0JBQVFJLElBQVIsQ0FBYSxVQUFDQyxDQUFELEVBQU87QUFDbEI3RCxrQkFBUUMsR0FBUixDQUFZLFlBQVo7QUFDRCxTQUZEO0FBR0QsT0FWTztBQVdSNkQsZ0JBWFEsd0JBV007QUFDWixhQUFLQyxLQUFMLENBQVdDLFNBQVgsQ0FBcUIsRUFBQ0MsS0FBSyxhQUFhLE9BQW5CLEVBQXJCO0FBQ0QsT0FiTztBQWNSQyxTQWRRLGlCQWNEO0FBQ0xsRSxnQkFBUUMsR0FBUixDQUFZLG9CQUFvQixLQUFLa0UsS0FBckM7QUFDRCxPQWhCTztBQWlCUkMsaUJBakJRLHlCQWlCTztBQUNicEUsZ0JBQVFDLEdBQVIsQ0FBWSxLQUFLa0UsS0FBTCxHQUFhLE1BQXpCOztBQUVBLGFBQUtWLE9BQUwsQ0FBYSxVQUFiLEVBQXlCLE9BQXpCLEVBQWtDLEVBQWxDLEVBQXNDLENBQXRDO0FBQ0EsYUFBS0EsT0FBTCxDQUFhLFVBQWIsRUFBeUIsTUFBekIsRUFBaUMsRUFBakMsRUFBcUMsQ0FBckM7O0FBRUEsYUFBS1ksVUFBTCxDQUFnQixpQkFBaEIsRUFBbUMsQ0FBbkMsRUFBc0MsQ0FBdEMsRUFBeUMsQ0FBekM7QUFDRDtBQXhCTyxLLFFBMkJWQyxNLEdBQVMsRTs7Ozs7NkJBR0EsQ0FDUjs7OztFQTdFZ0NDLGVBQUtDLEk7a0JBQW5CckUsSyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAnd2VweS1yZWR1eCdcbiAgaW1wb3J0IFBhbmVsIGZyb20gJ0AvY29tcG9uZW50cy9wYW5lbCcgLy8gYWxpYXMgZXhhbXBsZVxuICBpbXBvcnQgQ291bnRlciBmcm9tICdjb3VudGVyJyAvLyBhbGlhcyBleGFtcGxlXG4gIGltcG9ydCBMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvbGlzdCcgLy8gYWxpYXNGaWVsZHMgZXhhbXBsZVxuICBpbXBvcnQgbW9kdWxlQSBmcm9tICdtb2R1bGUtYScgLy8gYWxpYXNGaWVsZHMgaWdub3JlIG1vZHVsZSBleGFtcGxlXG4gIGltcG9ydCBHcm91cCBmcm9tICcuLi9jb21wb25lbnRzL2dyb3VwJ1xuICBpbXBvcnQgWFBpY2tlciBmcm9tICcuLi9jb21wb25lbnRzL3gtcGlja2VyJ1xuICBpbXBvcnQgWElucHV0IGZyb20gJy4uL2NvbXBvbmVudHMveC1pbnB1dCdcblxuICBpbXBvcnQgVG9hc3QgZnJvbSAnd2VweS1jb20tdG9hc3QnXG4gIGltcG9ydCB0ZXN0TWl4aW4gZnJvbSAnLi4vbWl4aW5zL3Rlc3QnXG4gIGltcG9ydCB7U2NvcmVJdGVtcyxkYXRhcyxzZX0gZnJvbSAnLi4vVXRpbHMnO1xuXG4gIGNvbnNvbGUubG9nKCdtb2R1bGVBIGlnbm9yZWQ6ICcsIG1vZHVsZUEpIC8vID0+IG1vZHVsZUEgaWdub3JlZDoge31cblxuICBAY29ubmVjdCh7XG4gICAgbnVtIChzdGF0ZSkge1xuICAgICAgcmV0dXJuIHN0YXRlLmNvdW50ZXIubnVtXG4gICAgfSxcbiAgICBhc3luY051bSAoc3RhdGUpIHtcbiAgICAgIHJldHVybiBzdGF0ZS5jb3VudGVyLmFzeW5jTnVtXG4gICAgfSxcbiAgICBzdW1OdW0gKHN0YXRlKSB7XG4gICAgICByZXR1cm4gc3RhdGUuY291bnRlci5udW0gKyBzdGF0ZS5jb3VudGVyLmFzeW5jTnVtXG4gICAgfVxuICB9KVxuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAneC1zcGFjZSdcbiAgICB9XG4gICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcInBpY2tlckNpdHlcIjp7XCJtb2RlXCI6XCJjaXR5c1wifSxcInBpY2tlclJvb21UeXBlXCI6e1wibW9kZVwiOlwiZXF1aXBtZW50Um9vbVR5cGVzXCJ9LFwicGlja2VyQWRkcmVzc1R5cGVcIjp7XCJtb2RlXCI6XCJwcm9wZXJ0eVJpZ2h0VHlwZXNcIn0sXCJwaWNrZXJBZGRyZXNzVHVuaW5nXCI6e1wibW9kZVwiOlwiYWRkcmVzc1R1bmluZ1wifSxcInBpY2tlckNoYW5uZWxUeXBlXCI6e1wibW9kZVwiOlwiY2hhbm5lbEJ1aWxkXCJ9LFwicGlja2VyQmF0dGVyVHlwZXNcIjp7XCJtb2RlXCI6XCJiYXR0ZXJUeXBlc1wifSxcInBpY2tlckVudmlyb25tZW50XCI6e1wibW9kZVwiOlwiZW52aXJvbm1lbnRcIn0sXCJwaWNrZXJQb3dlclwiOntcIm1vZGVcIjpcInBvd2VyXCJ9LFwicGlja2VyQmVhcmluZ1R5cGVcIjp7XCJtb2RlXCI6XCJiZWFyaW5nVHlwZXNcIn0sXCJwaWNrZXJCdWlsZFR5cGVcIjp7XCJtb2RlXCI6XCJidWlsZFR5cGVzXCJ9LFwicGlja2VySG91c2VUeXBlXCI6e1wibW9kZVwiOlwiaG91c2VUeXBlc1wifSxcImlucHV0TmFtZVwiOntcIm1vZGVcIjpcIm5hbWVcIn0sXCJpbnB1dEFkZHJlc3NcIjp7XCJtb2RlXCI6XCJhZGRyZXNzXCJ9LFwiaW5wdXRMb25naXR1ZGVcIjp7XCJtb2RlXCI6XCJsb25naXR1ZGVcIn0sXCJpbnB1dExhdGl0dWRlXCI6e1wibW9kZVwiOlwibGF0aXR1ZGVcIn0sXCJpbnB1dFByaWNlXCI6e1wibW9kZVwiOlwicHJpY2VcIn0sXCJpbnB1dEFpckNvbmRpdGlvbmVyTnVtYmVyXCI6e1wibW9kZVwiOlwiYWlyQ29uZGl0aW9uZXJOdW1iZXJcIn0sXCJpbnB1dExheWVySGVpZ2h0XCI6e1wibW9kZVwiOlwibGF5ZXJIZWlnaHRcIn0sXCJpbnB1dFJvb21BcmVhXCI6e1wibW9kZVwiOlwicm9vbUFyZWFcIn0sXCJpbnB1dFJhY2tOdW1iZXJcIjp7XCJtb2RlXCI6XCJyYWNrTnVtYmVyXCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgIHBhbmVsOiBQYW5lbCxcbiAgICAgIGNvdW50ZXIxOiBDb3VudGVyLFxuICAgICAgY291bnRlcjI6IENvdW50ZXIsXG4gICAgICBsaXN0OiBMaXN0LFxuICAgICAgZ3JvdXA6IEdyb3VwLFxuICAgICAgdG9hc3Q6IFRvYXN0LFxuICAgICAgcGlja2VyQ2l0eTogWFBpY2tlcixcbiAgICAgIHBpY2tlclJvb21UeXBlOiBYUGlja2VyLFxuICAgICAgcGlja2VyQWRkcmVzc1R5cGU6IFhQaWNrZXIsXG4gICAgICBwaWNrZXJBZGRyZXNzVHVuaW5nOiBYUGlja2VyLFxuICAgICAgcGlja2VyQ2hhbm5lbFR5cGU6IFhQaWNrZXIsXG4gICAgICBwaWNrZXJCYXR0ZXJUeXBlczogWFBpY2tlcixcbiAgICAgIHBpY2tlckVudmlyb25tZW50OiBYUGlja2VyLFxuICAgICAgcGlja2VyUG93ZXI6IFhQaWNrZXIsXG4gICAgICBwaWNrZXJCZWFyaW5nVHlwZTogWFBpY2tlcixcbiAgICAgIHBpY2tlckJ1aWxkVHlwZTogWFBpY2tlcixcbiAgICAgIHBpY2tlckhvdXNlVHlwZTogWFBpY2tlcixcbiAgICAgIGlucHV0TmFtZTogWElucHV0LFxuICAgICAgaW5wdXRBZGRyZXNzOiBYSW5wdXQsXG4gICAgICBpbnB1dExvbmdpdHVkZTogWElucHV0LFxuICAgICAgaW5wdXRMYXRpdHVkZTogWElucHV0LFxuICAgICAgaW5wdXRQcmljZTogWElucHV0LFxuICAgICAgaW5wdXRBaXJDb25kaXRpb25lck51bWJlcjogWElucHV0LFxuICAgICAgaW5wdXRMYXllckhlaWdodDogWElucHV0LFxuICAgICAgaW5wdXRSb29tQXJlYTogWElucHV0LFxuICAgICAgaW5wdXRSYWNrTnVtYmVyOiBYSW5wdXQsXG4gICAgfVxuXG4gICAgZGF0YSA9IHtcbiAgICAgIHNjb3JlSXRlbXM6IFNjb3JlSXRlbXMuQ0lUWVMsXG4gICAgfVxuXG4gICAgY29tcHV0ZWQgPSB7XG4gICAgICBub3cgKCkge1xuICAgICAgICByZXR1cm4gK25ldyBEYXRlKClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuICAgICAgdG9hc3QgKCkge1xuICAgICAgICBsZXQgcHJvbWlzZSA9IHRoaXMuJGludm9rZSgndG9hc3QnLCAnc2hvdycsIHtcbiAgICAgICAgICB0aXRsZTogJ+iHquWumuS5ieagh+mimCcsXG4gICAgICAgICAgaW1nOiAnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2tpaW5sYW0vd2V0b2FzdC9tYXN0ZXIvaW1hZ2VzL3N0YXIucG5nJ1xuICAgICAgICB9KVxuXG4gICAgICAgIHByb21pc2UudGhlbigoZCkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCd0b2FzdCBkb25lJylcbiAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgICBnb05leHRQYWdlICgpIHtcbiAgICAgICAgdGhpcy4kcm9vdC4kbmF2aWdhdGUoe3VybDogJ21haW4/aWQ9JyArICdoZWxsbyd9KTtcbiAgICAgIH0sXG4gICAgICB0YXAgKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnZG8gbm90aW5nIGZyb20gJyArIHRoaXMuJG5hbWUpXG4gICAgICB9LFxuICAgICAgY29tbXVuaWNhdGUgKCkge1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLiRuYW1lICsgJyB0YXAnKVxuXG4gICAgICAgIHRoaXMuJGludm9rZSgnY291bnRlcjInLCAnbWludXMnLCA0NSwgNilcbiAgICAgICAgdGhpcy4kaW52b2tlKCdjb3VudGVyMScsICdwbHVzJywgNDUsIDYpXG5cbiAgICAgICAgdGhpcy4kYnJvYWRjYXN0KCdpbmRleC1icm9hZGNhc3QnLCAxLCAzLCA0KVxuICAgICAgfSxcbiAgICB9XG5cbiAgICBldmVudHMgPSB7XG4gICAgfVxuXG4gICAgb25Mb2FkKCkge1xuICAgIH1cbiAgfVxuIl19