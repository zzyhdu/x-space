'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//@flow
//
// export type ScoreItem =
//   | 'propertyRightTypes'
//   | 'equipmentRoomTypes'
//   | 'citys'
//   | 'addressTuning'
//   | 'channelBuild'
//   | 'batterTypes'
//   | 'environment'
//   | 'power'
//   | 'bearingTypes'
//   | 'buildTypes'
//   | 'houseTypes';

var ScoreItems = exports.ScoreItems = {
  //dropdown
  CITYS: 'citys',
  PROPERTY_RIGHT_TYPES: 'propertyRightTypes',
  EQUIPMENT_ROOM_TYPES: 'equipmentRoomTypes',
  ADDRESS_TUNING: 'addressTuning',
  CHANNEL_BUILD: 'channelBuild',
  BATTER_TYPES: 'batterTypes',
  ENVIRONMENT: 'environment',
  POWER: 'power',
  BEARING_TYPES: 'bearingTypes',
  BUILD_TYPES: 'buildTypes',
  HOUSE_TYPES: 'houseTypes',
  //input
  NAME: 'name',
  ADDRESS: 'address',
  LONGITUDE: 'longitude',
  LATITUDE: 'latitude',
  PRICE: 'price',
  AIR_CONDITIONER_NUMBER: 'airConditionerNumber',
  LAYER_HEIGHT: 'layerHeight',
  ROOM_AREA: 'roomArea',
  RACK_NUMBER: 'rackNumber'
};

var datas = exports.datas = {
  propertyRightTypes: {
    label: '地址类别',
    array: ['购置', '征地自建', '租地自建', '租赁', '利旧基站', '利旧室分', '新楼配套隔断']
  },

  equipmentRoomTypes: {
    label: '机房类型',
    array: ['骨干机房', '汇聚机房', '接入机房']
  },

  citys: {
    label: '县市',
    array: ['北仑', '慈溪', '奉化', '海曙', '江北', '宁海', '象山', '鄞州', '余姚', '镇海']
  },

  addressTuning: {
    label: '规划位置校对',
    array: ['位于机房网格中心区域30%', '位于机房网格中心区域30%-50%', '位于机房网格中心区域50%-100%', '位于机房网格外，需调整微格']
  },

  channelBuild: {
    label: '管道建设',
    array: ['可实现双路由，建设难度较易', '可实现双路由，建设难度中等', '可实现双路由，建设难度较大', '红线外无法实现双路由']
  },

  batterTypes: {
    label: '电源建设',
    array: ['专变，独立开户', '公变，独立开户', '利旧原变压器', '改造原变压器', '转供电', '无法供电']
  },

  environment: {
    label: '周边环境',
    array: ['完全独立', '楼上/楼下无居民，周边有居民', '楼上/楼下有居民，周边无居民', '楼上/楼下有居民，周边有居民']
  },

  power: {
    label: '发电环境',
    array: ['可正常发电', '仅白天可发电', '仅晚上可发电', '发电难度较高']
  },

  bearingTypes: {
    label: '承重',
    array: ['无需加固', '需加固改造']
  },

  buildTypes: {
    label: '市场部共建',
    array: ['共建', '不共建']
  },

  houseTypes: {
    label: '房源情况',
    array: ['一手房', '二手房']
  },

  name: {
    label: '机房名'
  },
  address: {
    label: '机房地址'
  },
  longitude: {
    label: '经度'
  },
  latitude: {
    label: '维度'
  },
  price: {
    label: '价格'
  },
  airConditionerNumber: {
    label: '可安装空调数'
  },
  layerHeight: {
    label: '层高'
  },
  roomArea: {
    label: '机房面积'
  },
  rackNumber: {
    label: '可安装机架数'
  },

  p_equipmentRoomTypes: {
    scores: [[1, 1, 1], [1, 1, 1], [0.95, 1, 1], [0.8, 0.9, 0.95], [0, 0, 0.9], [0, 0, 0.9], [0, 0.5, 0.9]]
  },

  p_addressTuning: {
    scores: [5, 10, 10, 10, 10, 10, 10]
  },

  p_channelBuild: {
    scores: [10, 18, 18, 15, 18, 18, 18]
  },

  p_batterTypes: {
    scores: [8, 15, 15, 12, 15, 15, 15]
  },

  p_environment: {
    scores: [8, 10, 10, 10, 8, 8, 8]
  },

  p_power: {
    scores: [5, 5, 5, 5, 5, 5, 5]
  },

  p_bearingTypes: {
    scores: [2, 2, 2, 2, 2, 2, 2]
  },

  p_buildTypes: {
    scores: [10, 0, 0, 0, 0, 0, 0]
  },

  p_houseTypes: {
    scores: [12, 0, 0, 0, 0, 0, 0]
  }
};

var ScoreCalculator = function () {
  function ScoreCalculator() {
    _classCallCheck(this, ScoreCalculator);

    this._datas = {
      propertyRightTypesIndex: 0,
      equipmentRoomTypesIndex: 0,
      citysIndex: 0,
      addressTuningIndex: 0,
      channelBuildIndex: 0,
      batterTypesIndex: 0,
      environmentIndex: 0,
      powerIndex: 0,
      bearingTypesIndex: 0,
      buildTypesIndex: 0,
      houseTypesIndex: 0,

      name: '',
      address: '',
      longitude: 0,
      latitude: 0,
      price: 0,
      airConditionerNumber: 0,
      layerHeight: 0,
      roomArea: 0,
      rackNumber: 0
    };
  }

  _createClass(ScoreCalculator, [{
    key: 'onDataChange',
    value: function onDataChange(data) {
      var scoreItem = data.scoreItem,
          value = data.value;
      var _datas = this._datas;

      switch (scoreItem) {
        case ScoreItems.CITYS:
          _datas.citysIndex = value;
          break;
        case ScoreItems.EQUIPMENT_ROOM_TYPES:
          _datas.equipmentRoomTypesIndex = value;
          break;
        case ScoreItems.PROPERTY_RIGHT_TYPES:
          _datas.propertyRightTypesIndex = value;
          break;
        case ScoreItems.ADDRESS_TUNING:
          _datas.addressTuningIndex = value;
          break;
        case ScoreItems.CHANNEL_BUILD:
          _datas.channelBuildIndex = value;
          break;
        case ScoreItems.BATTER_TYPES:
          _datas.batterTypesIndex = value;
          break;
        case ScoreItems.ENVIRONMENT:
          _datas.environmentIndex = value;
          break;
        case ScoreItems.POWER:
          _datas.powerIndex = value;
          break;
        case ScoreItems.BEARING_TYPES:
          _datas.bearingTypesIndex = value;
          break;
        case ScoreItems.BUILD_TYPES:
          _datas.buildTypesIndex = value;
          break;
        case ScoreItems.HOUSE_TYPES:
          _datas.houseTypesIndex = value;
          break;
        case ScoreItems.NAME:
          _datas.name = value;
          break;
        case ScoreItems.ADDRESS:
          _datas.address = value;
          break;
        case ScoreItems.LONGITUDE:
          _datas.longitude = value;
          break;
        case ScoreItems.LATITUDE:
          _datas.latitude = value;
          break;
        case ScoreItems.PRICE:
          _datas.price = value;
          break;
        case ScoreItems.AIR_CONDITIONER_NUMBER:
          _datas.airConditionerNumber = value;
          break;
        case ScoreItems.LAYER_HEIGHT:
          _datas.layerHeight = value;
          break;
        case ScoreItems.ROOM_AREA:
          _datas.roomArea = value;
          break;
        case ScoreItems.RACK_NUMBER:
          _datas.rackNumber = value;
          break;
        default:
      }
    }
  }, {
    key: 'result',
    get: function get() {
      var _datas = this._datas;

      for (var i in _datas) {
        console.log('zzy', 'variable 1', i, _datas[i]);
        switch (i) {
          case propertyRightTypesIndex:

            break;
          case equipmentRoomTypesIndex:

            break;
          case citysIndex:

            break;
          case addressTuningIndex:

            break;
          case channelBuildIndex:

            break;
          case batterTypesIndex:

            break;
          case environmentIndex:

            break;
          case powerIndex:

            break;
          case bearingTypesIndex:

            break;
          case buildTypesIndex:

            break;

          case houseTypesIndex:

            break;
          case name:

            break;
          case address:

            break;
          case longitude:

            break;
          case latitude:

            break;

          case price:

            break;
          case airConditionerNumber:

            break;
          case layerHeight:

            break;
          case roomArea:

            break;
          case rackNumber:

            break;

          default:

        }
        // if (object.hasOwnProperty(variable)) {
        //   console.log('zzy','variable',variable,_datas[variable]);
        // }
      }
      return 10;
    }
  }]);

  return ScoreCalculator;
}();

exports.default = ScoreCalculator;
;

var scoreCalculator = exports.scoreCalculator = new ScoreCalculator();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNjb3JlLmpzIl0sIm5hbWVzIjpbIlNjb3JlSXRlbXMiLCJDSVRZUyIsIlBST1BFUlRZX1JJR0hUX1RZUEVTIiwiRVFVSVBNRU5UX1JPT01fVFlQRVMiLCJBRERSRVNTX1RVTklORyIsIkNIQU5ORUxfQlVJTEQiLCJCQVRURVJfVFlQRVMiLCJFTlZJUk9OTUVOVCIsIlBPV0VSIiwiQkVBUklOR19UWVBFUyIsIkJVSUxEX1RZUEVTIiwiSE9VU0VfVFlQRVMiLCJOQU1FIiwiQUREUkVTUyIsIkxPTkdJVFVERSIsIkxBVElUVURFIiwiUFJJQ0UiLCJBSVJfQ09ORElUSU9ORVJfTlVNQkVSIiwiTEFZRVJfSEVJR0hUIiwiUk9PTV9BUkVBIiwiUkFDS19OVU1CRVIiLCJkYXRhcyIsInByb3BlcnR5UmlnaHRUeXBlcyIsImxhYmVsIiwiYXJyYXkiLCJlcXVpcG1lbnRSb29tVHlwZXMiLCJjaXR5cyIsImFkZHJlc3NUdW5pbmciLCJjaGFubmVsQnVpbGQiLCJiYXR0ZXJUeXBlcyIsImVudmlyb25tZW50IiwicG93ZXIiLCJiZWFyaW5nVHlwZXMiLCJidWlsZFR5cGVzIiwiaG91c2VUeXBlcyIsIm5hbWUiLCJhZGRyZXNzIiwibG9uZ2l0dWRlIiwibGF0aXR1ZGUiLCJwcmljZSIsImFpckNvbmRpdGlvbmVyTnVtYmVyIiwibGF5ZXJIZWlnaHQiLCJyb29tQXJlYSIsInJhY2tOdW1iZXIiLCJwX2VxdWlwbWVudFJvb21UeXBlcyIsInNjb3JlcyIsInBfYWRkcmVzc1R1bmluZyIsInBfY2hhbm5lbEJ1aWxkIiwicF9iYXR0ZXJUeXBlcyIsInBfZW52aXJvbm1lbnQiLCJwX3Bvd2VyIiwicF9iZWFyaW5nVHlwZXMiLCJwX2J1aWxkVHlwZXMiLCJwX2hvdXNlVHlwZXMiLCJTY29yZUNhbGN1bGF0b3IiLCJfZGF0YXMiLCJwcm9wZXJ0eVJpZ2h0VHlwZXNJbmRleCIsImVxdWlwbWVudFJvb21UeXBlc0luZGV4IiwiY2l0eXNJbmRleCIsImFkZHJlc3NUdW5pbmdJbmRleCIsImNoYW5uZWxCdWlsZEluZGV4IiwiYmF0dGVyVHlwZXNJbmRleCIsImVudmlyb25tZW50SW5kZXgiLCJwb3dlckluZGV4IiwiYmVhcmluZ1R5cGVzSW5kZXgiLCJidWlsZFR5cGVzSW5kZXgiLCJob3VzZVR5cGVzSW5kZXgiLCJkYXRhIiwic2NvcmVJdGVtIiwidmFsdWUiLCJpIiwiY29uc29sZSIsImxvZyIsInNjb3JlQ2FsY3VsYXRvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU8sSUFBTUEsa0NBQWE7QUFDeEI7QUFDQUMsU0FBTyxPQUZpQjtBQUd4QkMsd0JBQXNCLG9CQUhFO0FBSXhCQyx3QkFBc0Isb0JBSkU7QUFLeEJDLGtCQUFnQixlQUxRO0FBTXhCQyxpQkFBZSxjQU5TO0FBT3hCQyxnQkFBYyxhQVBVO0FBUXhCQyxlQUFhLGFBUlc7QUFTeEJDLFNBQU8sT0FUaUI7QUFVeEJDLGlCQUFlLGNBVlM7QUFXeEJDLGVBQWEsWUFYVztBQVl4QkMsZUFBYSxZQVpXO0FBYXhCO0FBQ0FDLFFBQU0sTUFka0I7QUFleEJDLFdBQVMsU0FmZTtBQWdCeEJDLGFBQVcsV0FoQmE7QUFpQnhCQyxZQUFVLFVBakJjO0FBa0J4QkMsU0FBTyxPQWxCaUI7QUFtQnhCQywwQkFBd0Isc0JBbkJBO0FBb0J4QkMsZ0JBQWMsYUFwQlU7QUFxQnhCQyxhQUFXLFVBckJhO0FBc0J4QkMsZUFBYTtBQXRCVyxDQUFuQjs7QUF5QkEsSUFBTUMsd0JBQVE7QUFDbkJDLHNCQUFvQjtBQUNsQkMsV0FBTyxNQURXO0FBRWxCQyxXQUFPLENBQUMsSUFBRCxFQUFPLE1BQVAsRUFBZSxNQUFmLEVBQXVCLElBQXZCLEVBQTZCLE1BQTdCLEVBQXFDLE1BQXJDLEVBQTZDLFFBQTdDO0FBRlcsR0FERDs7QUFNbkJDLHNCQUFvQjtBQUNsQkYsV0FBTyxNQURXO0FBRWxCQyxXQUFPLENBQUMsTUFBRCxFQUFT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QUFMOztBQUVFO0FBQ0YsZUFBS0Msa0JBQUw7O0FBRUU7QUFDRixlQUFLQyxpQkFBTDs7QUFFRTtBQUNGLGVBQUtDLGdCQUFMOztBQUVFO0FBQ0YsZUFBS0MsZ0JBQUw7O0FBRUU7QUFDRixlQUFLQyxVQUFMOztBQUVFO0FBQ0YsZUFBS0MsaUJBQUw7O0FBRUU7QUFDRixlQUFLQyxlQUFMOztBQUVFOztBQUVGLGVBQUtDLGVBQUw7O0FBRUU7QUFDRixlQUFLL0IsSUFBTDs7QUFFRTtBQUNGLGVBQUtDLE9BQUw7O0FBRUU7QUFDRixlQUFLQyxTQUFMOztBQUVFO0FBQ0YsZUFBS0MsUUFBTDs7QUFFRTs7QUFFRixlQUFLQyxLQUFMOztBQUVFO0FBQ0YsZUFBS0Msb0JBQUw7O0FBRUU7QUFDRixlQUFLQyxXQUFMOztBQUVFO0FBQ0YsZUFBS0MsUUFBTDs7QUFFRTtBQUNGLGVBQUtDLFVBQUw7O0FBRUU7O0FBRUY7O0FBaEVGO0FBbUVBO0FBQ0E7QUFDQTtBQUNEO0FBQ0QsYUFBTyxFQUFQO0FBQ0Q7Ozs7OztrQkF6S2tCVyxlO0FBMEtwQjs7QUFFTSxJQUFNbUIsNENBQWtCLElBQUluQixlQUFKLEVBQXhCIiwiZmlsZSI6IlNjb3JlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9AZmxvd1xuLy9cbi8vIGV4cG9ydCB0eXBlIFNjb3JlSXRlbSA9XG4vLyAgIHwgJ3Byb3BlcnR5UmlnaHRUeXBlcydcbi8vICAgfCAnZXF1aXBtZW50Um9vbVR5cGVzJ1xuLy8gICB8ICdjaXR5cydcbi8vICAgfCAnYWRkcmVzc1R1bmluZydcbi8vICAgfCAnY2hhbm5lbEJ1aWxkJ1xuLy8gICB8ICdiYXR0ZXJUeXBlcydcbi8vICAgfCAnZW52aXJvbm1lbnQnXG4vLyAgIHwgJ3Bvd2VyJ1xuLy8gICB8ICdiZWFyaW5nVHlwZXMnXG4vLyAgIHwgJ2J1aWxkVHlwZXMnXG4vLyAgIHwgJ2hvdXNlVHlwZXMnO1xuXG5leHBvcnQgY29uc3QgU2NvcmVJdGVtcyA9IHtcbiAgLy9kcm9wZG93blxuICBDSVRZUzogJ2NpdHlzJyxcbiAgUFJPUEVSVFlfUklHSFRfVFlQRVM6ICdwcm9wZXJ0eVJpZ2h0VHlwZXMnLFxuICBFUVVJUE1FTlRfUk9PTV9UWVBFUzogJ2VxdWlwbWVudFJvb21UeXBlcycsXG4gIEFERFJFU1NfVFVOSU5HOiAnYWRkcmVzc1R1bmluZycsXG4gIENIQU5ORUxfQlVJTEQ6ICdjaGFubmVsQnVpbGQnLFxuICBCQVRURVJfVFlQRVM6ICdiYXR0ZXJUeXBlcycsXG4gIEVOVklST05NRU5UOiAnZW52aXJvbm1lbnQnLFxuICBQT1dFUjogJ3Bvd2VyJyxcbiAgQkVBUklOR19UWVBFUzogJ2JlYXJpbmdUeXBlcycsXG4gIEJVSUxEX1RZUEVTOiAnYnVpbGRUeXBlcycsXG4gIEhPVVNFX1RZUEVTOiAnaG91c2VUeXBlcycsXG4gIC8vaW5wdXRcbiAgTkFNRTogJ25hbWUnLFxuICBBRERSRVNTOiAnYWRkcmVzcycsXG4gIExPTkdJVFVERTogJ2xvbmdpdHVkZScsXG4gIExBVElUVURFOiAnbGF0aXR1ZGUnLFxuICBQUklDRTogJ3ByaWNlJyxcbiAgQUlSX0NPTkRJVElPTkVSX05VTUJFUjogJ2FpckNvbmRpdGlvbmVyTnVtYmVyJyxcbiAgTEFZRVJfSEVJR0hUOiAnbGF5ZXJIZWlnaHQnLFxuICBST09NX0FSRUE6ICdyb29tQXJlYScsXG4gIFJBQ0tfTlVNQkVSOiAncmFja051bWJlcicsXG59O1xuXG5leHBvcnQgY29uc3QgZGF0YXMgPSB7XG4gIHByb3BlcnR5UmlnaHRUeXBlczoge1xuICAgIGxhYmVsOiAn5Zyw5Z2A57G75YirJyxcbiAgICBhcnJheTogWyfotK3nva4nLCAn5b6B5Zyw6Ieq5bu6JywgJ+enn+WcsOiHquW7uicsICfnp5/otYEnLCAn5Yip5pen5Z+656uZJywgJ+WIqeaXp+WupOWIhicsICfmlrDmpbzphY3lpZfpmpTmlq0nXSxcbiAgfSxcblxuICBlcXVpcG1lbnRSb29tVHlwZXM6IHtcbiAgICBsYWJlbDogJ+acuuaIv+exu+WeiycsXG4gICAgYXJyYXk6IFsn6aqo5bmy5py65oi/JywgJ+axh+iBmuacuuaIvycsICfmjqXlhaXmnLrmiL8nXSxcbiAgfSxcblxuICBjaXR5czoge1xuICAgIGxhYmVsOiAn5Y6/5biCJyxcbiAgICBhcnJheTogWyfljJfku5EnLCAn5oWI5rqqJywgJ+WlieWMlicsICfmtbfmm5knLCfmsZ/ljJcnLCAn5a6B5rW3JywgJ+ixoeWxsScsICfphJ7lt54nLCfkvZnlp5onLCAn6ZWH5rW3J10sXG4gIH0sXG5cbiAgYWRkcmVzc1R1bmluZzoge1xuICAgIGxhYmVsOiAn6KeE5YiS5L2N572u5qCh5a+5JyxcbiAgICBhcnJheTogWyfkvY3kuo7mnLrmiL/nvZHmoLzkuK3lv4PljLrln58zMCUnLCAn5L2N5LqO5py65oi/572R5qC85Lit5b+D5Yy65Z+fMzAlLTUwJScsICfkvY3kuo7mnLrmiL/nvZHmoLzkuK3lv4PljLrln581MCUtMTAwJScsICfkvY3kuo7mnLrmiL/nvZHmoLzlpJbvvIzpnIDosIPmlbTlvq7moLwnXSxcbiAgfSxcblxuICBjaGFubmVsQnVpbGQ6IHtcbiAgICBsYWJlbDogJ+euoemBk+W7uuiuvicsXG4gICAgYXJyYXk6IFsn5Y+v5a6e546w5Y+M6Lev55Sx77yM5bu66K6+6Zq+5bqm6L6D5piTJywgJ+WPr+WunueOsOWPjOi3r+eUse+8jOW7uuiuvumavuW6puS4reetiScsICflj6/lrp7njrDlj4zot6/nlLHvvIzlu7rorr7pmr7luqbovoPlpKcnLCAn57qi57q/5aSW5peg5rOV5a6e546w5Y+M6Lev55SxJ10sXG4gIH0sXG5cbiAgYmF0dGVyVHlwZXM6IHtcbiAgICBsYWJlbDogJ+eUtea6kOW7uuiuvicsXG4gICAgYXJyYXk6IFsn5LiT5Y+Y77yM54us56uL5byA5oi3JywgJ+WFrOWPmO+8jOeLrOeri+W8gOaItycsICfliKnml6fljp/lj5jljovlmagnLCAn5pS56YCg5Y6f5Y+Y5Y6L5ZmoJywgJ+i9rOS+m+eUtScsICfml6Dms5XkvpvnlLUnXSxcbiAgfSxcblxuICBlbnZpcm9ubWVudDoge1xuICAgIGxhYmVsOiAn5ZGo6L65546v5aKDJyxcbiAgICBhcnJheTogWyflrozlhajni6znq4snLCAn5qW85LiKL+alvOS4i+aXoOWxheawke+8jOWRqOi+ueacieWxheawkScsICfmpbzkuIov5qW85LiL5pyJ5bGF5rCR77yM5ZGo6L655peg5bGF5rCRJywgJ+alvOS4ii/mpbzkuIvmnInlsYXmsJHvvIzlkajovrnmnInlsYXmsJEnXSxcbiAgfSxcblxuICBwb3dlcjoge1xuICAgIGxhYmVsOiAn5Y+R55S1546v5aKDJyxcbiAgICBhcnJheTogWyflj6/mraPluLjlj5HnlLUnLCAn5LuF55m95aSp5Y+v5Y+R55S1JywgJ+S7heaZmuS4iuWPr+WPkeeUtScsICflj5HnlLXpmr7luqbovoPpq5gnXSxcbiAgfSxcblxuICBiZWFyaW5nVHlwZXM6IHtcbiAgICBsYWJlbDogJ+aJv+mHjScsXG4gICAgYXJyYXk6IFsn5peg6ZyA5Yqg5Zu6JywgJ+mcgOWKoOWbuuaUuemAoCddLFxuICB9LFxuXG4gIGJ1aWxkVHlwZXM6IHtcbiAgICBsYWJlbDogJ+W4guWcuumDqOWFseW7uicsXG4gICAgYXJyYXk6IFsn5YWx5bu6JywgJ+S4jeWFseW7uiddLFxuICB9LFxuXG4gIGhvdXNlVHlwZXM6IHtcbiAgICBsYWJlbDogJ+aIv+a6kOaDheWGtScsXG4gICAgYXJyYXk6IFsn5LiA5omL5oi/JywgJ+S6jOaJi+aIvyddLFxuICB9LFxuXG4gIG5hbWU6IHtcbiAgICBsYWJlbDogJ+acuuaIv+WQjScsXG4gIH0sXG4gIGFkZHJlc3M6IHtcbiAgICBsYWJlbDogJ+acuuaIv+WcsOWdgCcsXG4gIH0sXG4gIGxvbmdpdHVkZToge1xuICAgIGxhYmVsOiAn57uP5bqmJyxcbiAgfSxcbiAgbGF0aXR1ZGU6IHtcbiAgICBsYWJlbDogJ+e7tOW6picsXG4gIH0sXG4gIHByaWNlOiB7XG4gICAgbGFiZWw6ICfku7fmoLwnLFxuICB9LFxuICBhaXJDb25kaXRpb25lck51bWJlcjoge1xuICAgIGxhYmVsOiAn5Y+v5a6J6KOF56m66LCD5pWwJyxcbiAgfSxcbiAgbGF5ZXJIZWlnaHQ6IHtcbiAgICBsYWJlbDogJ+WxgumrmCcsXG4gIH0sXG4gIHJvb21BcmVhOiB7XG4gICAgbGFiZWw6ICfmnLrmiL/pnaLnp68nLFxuICB9LFxuICByYWNrTnVtYmVyOiB7XG4gICAgbGFiZWw6ICflj6/lronoo4XmnLrmnrbmlbAnLFxuICB9LFxuXG4gIHBfZXF1aXBtZW50Um9vbVR5cGVzOiB7XG4gICAgc2NvcmVzOiBbWzEsMSwxXSxbMSwxLDFdLFswLjk1LDEsMSxdLFswLjgsMC45LDAuOTVdLFswLDAsMC45XSxbMCwwLDAuOV0sWzAsMC41LDAuOV1dLFxuICB9LFxuXG4gIHBfYWRkcmVzc1R1bmluZzoge1xuICAgIHNjb3JlczogWzUsMTAsMTAsMTAsMTAsMTAsMTBdLFxuICB9LFxuXG4gIHBfY2hhbm5lbEJ1aWxkOiB7XG4gICAgc2NvcmVzOiBbMTAsMTgsMTgsMTUsMTgsMTgsMThdLFxuICB9LFxuXG4gIHBfYmF0dGVyVHlwZXM6IHtcbiAgICBzY29yZXM6IFs4LDE1LDE1LDEyLDE1LDE1LDE1XSxcbiAgfSxcblxuICBwX2Vudmlyb25tZW50OiB7XG4gICAgc2NvcmVzOiBbOCwxMCwxMCwxMCw4LDgsOF0sXG4gIH0sXG5cbiAgcF9wb3dlcjoge1xuICAgIHNjb3JlczogWzUsNSw1LDUsNSw1LDVdLFxuICB9LFxuXG4gIHBfYmVhcmluZ1R5cGVzOiB7XG4gICAgc2NvcmVzOiBbMiwyLDIsMiwyLDIsMl0sXG4gIH0sXG5cbiAgcF9idWlsZFR5cGVzOiB7XG4gICAgc2NvcmVzOiBbMTAsMCwwLDAsMCwwLDBdLFxuICB9LFxuXG4gIHBfaG91c2VUeXBlczoge1xuICAgIHNjb3JlczogWzEyLDAsMCwwLDAsMCwwXSxcbiAgfSxcbn07XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY29yZUNhbGN1bGF0b3J7XG4gIF9kYXRhcyA9IHtcbiAgICBwcm9wZXJ0eVJpZ2h0VHlwZXNJbmRleDogMCxcbiAgICBlcXVpcG1lbnRSb29tVHlwZXNJbmRleDogMCxcbiAgICBjaXR5c0luZGV4OiAwLFxuICAgIGFkZHJlc3NUdW5pbmdJbmRleDogMCxcbiAgICBjaGFubmVsQnVpbGRJbmRleDogMCxcbiAgICBiYXR0ZXJUeXBlc0luZGV4OiAwLFxuICAgIGVudmlyb25tZW50SW5kZXg6IDAsXG4gICAgcG93ZXJJbmRleDogMCxcbiAgICBiZWFyaW5nVHlwZXNJbmRleDogMCxcbiAgICBidWlsZFR5cGVzSW5kZXg6IDAsXG4gICAgaG91c2VUeXBlc0luZGV4OiAwLFxuXG4gICAgbmFtZTogJycsXG4gICAgYWRkcmVzczogJycsXG4gICAgbG9uZ2l0dWRlOiAwLFxuICAgIGxhdGl0dWRlOiAwLFxuICAgIHByaWNlOiAwLFxuICAgIGFpckNvbmRpdGlvbmVyTnVtYmVyOiAwLFxuICAgIGxheWVySGVpZ2h0OiAwLFxuICAgIHJvb21BcmVhOiAwLFxuICAgIHJhY2tOdW1iZXI6IDAsXG4gIH07XG5cbiAgb25EYXRhQ2hhbmdlKGRhdGEpe1xuICAgIGNvbnN0IHtzY29yZUl0ZW0sdmFsdWV9ID0gZGF0YTtcbiAgICBjb25zdCB7X2RhdGFzfSA9IHRoaXM7XG4gICAgc3dpdGNoIChzY29yZUl0ZW0pIHtcbiAgICAgIGNhc2UgU2NvcmVJdGVtcy5DSVRZUzpcbiAgICAgICAgX2RhdGFzLmNpdHlzSW5kZXggPSB2YWx1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFNjb3JlSXRlbXMuRVFVSVBNRU5UX1JPT01fVFlQRVM6XG4gICAgICAgIF9kYXRhcy5lcXVpcG1lbnRSb29tVHlwZXNJbmRleCA9IHZhbHVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgU2NvcmVJdGVtcy5QUk9QRVJUWV9SSUdIVF9UWVBFUzpcbiAgICAgICAgX2RhdGFzLnByb3BlcnR5UmlnaHRUeXBlc0luZGV4ID0gdmFsdWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBTY29yZUl0ZW1zLkFERFJFU1NfVFVOSU5HOlxuICAgICAgICBfZGF0YXMuYWRkcmVzc1R1bmluZ0luZGV4ID0gdmFsdWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBTY29yZUl0ZW1zLkNIQU5ORUxfQlVJTEQ6XG4gICAgICAgIF9kYXRhcy5jaGFubmVsQnVpbGRJbmRleCA9IHZhbHVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgU2NvcmVJdGVtcy5CQVRURVJfVFlQRVM6XG4gICAgICAgIF9kYXRhcy5iYXR0ZXJUeXBlc0luZGV4ID0gdmFsdWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBTY29yZUl0ZW1zLkVOVklST05NRU5UOlxuICAgICAgICBfZGF0YXMuZW52aXJvbm1lbnRJbmRleCA9IHZhbHVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgU2NvcmVJdGVtcy5QT1dFUjpcbiAgICAgICAgX2RhdGFzLnBvd2VySW5kZXggPSB2YWx1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFNjb3JlSXRlbXMuQkVBUklOR19UWVBFUzpcbiAgICAgICAgX2RhdGFzLmJlYXJpbmdUeXBlc0luZGV4ID0gdmFsdWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBTY29yZUl0ZW1zLkJVSUxEX1RZUEVTOlxuICAgICAgICBfZGF0YXMuYnVpbGRUeXBlc0luZGV4ID0gdmFsdWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBTY29yZUl0ZW1zLkhPVVNFX1RZUEVTOlxuICAgICAgICBfZGF0YXMuaG91c2VUeXBlc0luZGV4ID0gdmFsdWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBTY29yZUl0ZW1zLk5BTUU6XG4gICAgICAgIF9kYXRhcy5uYW1lID0gdmFsdWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBTY29yZUl0ZW1zLkFERFJFU1M6XG4gICAgICAgIF9kYXRhcy5hZGRyZXNzID0gdmFsdWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBTY29yZUl0ZW1zLkxPTkdJVFVERTpcbiAgICAgICAgX2RhdGFzLmxvbmdpdHVkZSA9IHZhbHVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgU2NvcmVJdGVtcy5MQVRJVFVERTpcbiAgICAgICAgX2RhdGFzLmxhdGl0dWRlID0gdmFsdWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBTY29yZUl0ZW1zLlBSSUNFOlxuICAgICAgICBfZGF0YXMucHJpY2UgPSB2YWx1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFNjb3JlSXRlbXMuQUlSX0NPTkRJVElPTkVSX05VTUJFUjpcbiAgICAgICAgX2RhdGFzLmFpckNvbmRpdGlvbmVyTnVtYmVyID0gdmFsdWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBTY29yZUl0ZW1zLkxBWUVSX0hFSUdIVDpcbiAgICAgICAgX2RhdGFzLmxheWVySGVpZ2h0ID0gdmFsdWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBTY29yZUl0ZW1zLlJPT01fQVJFQTpcbiAgICAgICAgX2RhdGFzLnJvb21BcmVhID0gdmFsdWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBTY29yZUl0ZW1zLlJBQ0tfTlVNQkVSOlxuICAgICAgICBfZGF0YXMucmFja051bWJlciA9IHZhbHVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgfVxuICB9XG5cbiAgZ2V0IHJlc3VsdCgpe1xuICAgIGNvbnN0IHtfZGF0YXN9ID0gdGhpcztcbiAgICBmb3IgKGxldCBpIGluIF9kYXRhcykge1xuICAgICAgY29uc29sZS5sb2coJ3p6eScsJ3ZhcmlhYmxlIDEnLGksX2RhdGFzW2ldKTtcbiAgICAgIHN3aXRjaCAoaSkge1xuICAgICAgICBjYXNlIHByb3BlcnR5UmlnaHRUeXBlc0luZGV4OlxuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgZXF1aXBtZW50Um9vbVR5cGVzSW5kZXg6XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBjaXR5c0luZGV4OlxuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgYWRkcmVzc1R1bmluZ0luZGV4OlxuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgY2hhbm5lbEJ1aWxkSW5kZXg6XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBiYXR0ZXJUeXBlc0luZGV4OlxuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgZW52aXJvbm1lbnRJbmRleDpcblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIHBvd2VySW5kZXg6XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBiZWFyaW5nVHlwZXNJbmRleDpcblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIGJ1aWxkVHlwZXNJbmRleDpcblxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgaG91c2VUeXBlc0luZGV4OlxuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgbmFtZTpcblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIGFkZHJlc3M6XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBsb25naXR1ZGU6XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBsYXRpdHVkZTpcblxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgcHJpY2U6XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBhaXJDb25kaXRpb25lck51bWJlcjpcblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIGxheWVySGVpZ2h0OlxuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2Ugcm9vbUFyZWE6XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSByYWNrTnVtYmVyOlxuXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcblxuICAgICAgfVxuICAgICAgLy8gaWYgKG9iamVjdC5oYXNPd25Qcm9wZXJ0eSh2YXJpYWJsZSkpIHtcbiAgICAgIC8vICAgY29uc29sZS5sb2coJ3p6eScsJ3ZhcmlhYmxlJyx2YXJpYWJsZSxfZGF0YXNbdmFyaWFibGVdKTtcbiAgICAgIC8vIH1cbiAgICB9XG4gICAgcmV0dXJuIDEwO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3Qgc2NvcmVDYWxjdWxhdG9yID0gbmV3IFNjb3JlQ2FsY3VsYXRvcigpO1xuIl19